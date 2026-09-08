export default async function handler(req, res) {
  // Hanya izinkan request tipe POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { produkNama } = req.body;
  
  // Mengambil token rahasia dari Environment Variables Vercel
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Cek jika token belum terpasang (mencegah error crash)
  if (!botToken || !chatId) {
    console.error("Token Telegram belum disetting di Vercel!");
    return res.status(500).json({ error: "Konfigurasi server bermasalah" });
  }

  const text = `🚨 *PROSPEK MASUK*\nAda yang klik tombol WA di web untuk produk: *${produkNama}*`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        chat_id: chatId, 
        text: text, 
        parse_mode: "Markdown" 
      }),
    });

    if (!response.ok) {
      throw new Error("Gagal mengirim ke Telegram");
    }
    
    // Beri tahu React bahwa pesan sukses terkirim
    return res.status(200).json({ success: true, message: "Notifikasi terkirim" });
    
  } catch (error) {
    console.error("Error API:", error);
    return res.status(500).json({ success: false, error: "Gagal memproses request" });
  }
}
