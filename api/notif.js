// api/notif.js (Vercel Serverless Function)

const MAX_NAME_LENGTH = 100;
const DEDUPE_WINDOW_MS = 10_000; // klik sama dari IP sama dalam 10 detik dianggap duplikat
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 20; // maks 20 notif per IP per menit
const TELEGRAM_TIMEOUT_MS = 8_000;

// Catatan: memori ini bersifat best-effort. Di serverless, tiap instance punya
// Map sendiri dan bisa di-reset kapan saja. Cukup untuk menahan klik ganda dan
// spam ringan. Untuk jaminan penuh, pakai Vercel KV / Upstash Redis.
const recentClicks = new Map(); // key: `${ip}|${produkNama}` -> timestamp
const rateBuckets = new Map(); // key: ip -> { count, resetAt }

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function cleanup(now) {
  if (recentClicks.size > 500) {
    for (const [key, ts] of recentClicks) {
      if (now - ts > DEDUPE_WINDOW_MS) recentClicks.delete(key);
    }
  }
  if (rateBuckets.size > 500) {
    for (const [key, bucket] of rateBuckets) {
      if (now > bucket.resetAt) rateBuckets.delete(key);
    }
  }
}

function isRateLimited(ip, now) {
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX;
}

function parseBody(req) {
  const body = req.body;
  if (body && typeof body === "object") return body;
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return null;
    }
  }
  return null;
}

export default async function handler(req, res) {
  // Hanya izinkan request tipe POST
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Validasi body
  const body = parseBody(req);
  if (!body || typeof body.produkNama !== "string") {
    return res.status(400).json({ error: "produkNama wajib berupa teks" });
  }

  const produkNama = body.produkNama
    .replace(/[\r\n\t]+/g, " ")
    .trim()
    .slice(0, MAX_NAME_LENGTH);

  if (!produkNama) {
    return res.status(400).json({ error: "produkNama tidak boleh kosong" });
  }

  // Ambil token rahasia dari Environment Variables Vercel
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Cek jika token belum terpasang (mencegah error crash)
  if (!botToken || !chatId) {
    console.error("Token Telegram belum disetting di Vercel!");
    return res.status(500).json({ error: "Konfigurasi server bermasalah" });
  }

  const now = Date.now();
  const ip = getClientIp(req);
  cleanup(now);

  // Rate limit per IP
  if (isRateLimited(ip, now)) {
    res.setHeader("Retry-After", String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)));
    return res.status(429).json({ error: "Terlalu banyak request" });
  }

  // Dedupe: klik ganda pada produk yang sama dari IP yang sama
  const dedupeKey = `${ip}|${produkNama}`;
  const lastSeen = recentClicks.get(dedupeKey);
  if (lastSeen && now - lastSeen < DEDUPE_WINDOW_MS) {
    return res.status(200).json({
      success: true,
      deduplicated: true,
      message: "Notifikasi sudah dikirim sebelumnya",
    });
  }
  recentClicks.set(dedupeKey, now);

  // Pakai HTML + escape, supaya karakter seperti * _ [ ` di nama produk
  // tidak merusak format dan membuat Telegram menolak pesan
  const text =
    `🚨 <b>PROSPEK MASUK</b>\n` +
    `Ada yang klik tombol WA di web untuk produk: <b>${escapeHtml(produkNama)}</b>`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TELEGRAM_TIMEOUT_MS);

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
        signal: controller.signal,
      }
    );

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(`Telegram ${response.status}: ${detail}`);
    }

    return res
      .status(200)
      .json({ success: true, message: "Notifikasi terkirim" });
  } catch (error) {
    // Gagal kirim: hapus tanda dedupe supaya klik berikutnya bisa mencoba lagi
    recentClicks.delete(dedupeKey);
    console.error("Error API:", error?.name === "AbortError" ? "Telegram timeout" : error);
    return res
      .status(500)
      .json({ success: false, error: "Gagal memproses request" });
  } finally {
    clearTimeout(timeout);
  }
}
