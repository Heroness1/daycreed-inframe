import Head from "next/head";
import Link from "next/link";

const WA_NUMBER = "6282246926544";
const SITE_URL = "https://www.suburmajuprinting.com";

const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export default function HardcoverSkripsiJakartaTimur() {
  const serviceUrl = `${SITE_URL}/hardcover-skripsi-jakarta-timur`;

  const faqs = [
    {
      q: "Bisa pesan hardcover skripsi di Jakarta Timur?",
      a: "Bisa. Subur Maju Printing melayani kebutuhan hardcover skripsi untuk area Jakarta Timur dan sekitarnya.",
    },
    {
      q: "Apakah bisa konsultasi sebelum mencetak?",
      a: "Bisa. Kirim detail kebutuhan dan contoh atau file melalui WhatsApp untuk dikonsultasikan terlebih dahulu.",
    },
    {
      q: "Berapa lama pengerjaan hardcover skripsi?",
      a: "Waktu pengerjaan bergantung pada jumlah dan spesifikasi pesanan. Hubungi kami untuk mengecek estimasi pengerjaan terbaru.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hardcover Skripsi Jakarta Timur",
    serviceType: "Hardcover Skripsi",
    url: serviceUrl,
    description:
      "Layanan hardcover skripsi di Jakarta Timur dari Subur Maju Printing.",
    provider: {
      "@type": "LocalBusiness",
      name: "Subur Maju Printing",
      url: SITE_URL,
      telephone: "+6282246926544",
    },
    areaServed: {
      "@type": "City",
      name: "Jakarta Timur",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>Hardcover Skripsi Jakarta Timur | Subur Maju Printing</title>
        <meta
          name="description"
          content="Pesan hardcover skripsi di Jakarta Timur. Konsultasi kebutuhan cetak dan finishing melalui WhatsApp Subur Maju Printing."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={serviceUrl} />
        <meta
          property="og:title"
          content="Hardcover Skripsi Jakarta Timur | Subur Maju Printing"
        />
        <meta
          property="og:description"
          content="Layanan hardcover skripsi Jakarta Timur dari Subur Maju Printing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={serviceUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <span style={styles.eyebrow}>SUBUR MAJU PRINTING · JAKARTA TIMUR</span>
          <h1 style={styles.heroTitle}>Hardcover Skripsi Jakarta Timur</h1>
          <p style={styles.heroText}>
            Butuh hardcover skripsi untuk sidang atau pengumpulan tugas akhir?
            Konsultasikan kebutuhan cetak dan finishing Anda dengan Subur Maju
            Printing.
          </p>
          <div style={styles.actions}>
            <a
              href={waLink("Halo Subur Maju, saya ingin pesan hardcover skripsi.")}
              style={styles.primary}
            >
              Pesan via WhatsApp
            </a>
            <Link href="/" style={styles.secondary}>
              Lihat Semua Layanan
            </Link>
          </div>
        </section>

        <section style={styles.section}>
          <h2>Hardcover Skripsi di Jakarta Timur</h2>
          <p>
            Kami membantu kebutuhan hardcover skripsi dengan alur pemesanan
            yang sederhana. Kirim detail jumlah, ukuran, warna, dan kebutuhan
            finishing melalui WhatsApp agar tim dapat membantu mengarahkan
            pesanan Anda.
          </p>
          <div style={styles.grid}>
            {[
              ["Konsultasi", "Diskusikan spesifikasi sebelum produksi."],
              ["Finishing", "Pilih kebutuhan finishing sesuai pesanan."],
              ["Praktis", "Kirim detail pesanan langsung melalui WhatsApp."],
            ].map(([title, text]) => (
              <article key={title} style={styles.card}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2>Butuh Percetakan Lain?</h2>
          <div style={styles.links}>
            <Link href="/">Digital Printing Jakarta Timur</Link>
            <Link href="/undangan-digital">Undangan Digital</Link>
            <Link href="/pesan">Pesan Percetakan</Link>
          </div>
        </section>

        <section style={styles.section}>
          <h2>Pertanyaan tentang Hardcover Skripsi</h2>
          {faqs.map((item) => (
            <details key={item.q} style={styles.faq}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#080808",
    color: "#fff",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },
  hero: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "96px 24px 72px",
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: "0.14em",
    opacity: 0.65,
  },
  heroTitle: {
    fontSize: "clamp(42px, 8vw, 78px)",
    lineHeight: 1,
    margin: "18px 0",
  },
  heroText: {
    maxWidth: 680,
    fontSize: 18,
    lineHeight: 1.7,
    opacity: 0.78,
  },
  actions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 30,
  },
  primary: {
    padding: "14px 20px",
    borderRadius: 999,
    background: "#fff",
    color: "#080808",
    textDecoration: "none",
    fontWeight: 700,
  },
  secondary: {
    padding: "14px 20px",
    borderRadius: 999,
    border: "1px solid #333",
    color: "#fff",
    textDecoration: "none",
  },
  section: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "40px 24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
    marginTop: 24,
  },
  card: {
    border: "1px solid #242424",
    borderRadius: 20,
    padding: 22,
    background: "#101010",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    marginTop: 20,
  },
  faq: {
    borderBottom: "1px solid #252525",
    padding: "18px 0",
  },
};
