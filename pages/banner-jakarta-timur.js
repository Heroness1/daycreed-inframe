import Head from "next/head";
import Link from "next/link";

const WA_NUMBER = "6282246926544";
const SITE_URL = "https://www.suburmajuprinting.com";
const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export default function Page() {
  const url = `${SITE_URL}/banner-jakarta-timur`;
  const faqs = [
    { q: "Bisa pesan banner & spanduk di Jakarta Timur?", a: "Butuh banner atau spanduk untuk promosi toko, acara, atau informasi usaha? Konsultasikan ukuran, bahan, jumlah, dan kebutuhan finishing dengan Subur Maju Printing di Jakarta Timur melalui WhatsApp." },
    { q: "Informasi apa yang perlu disiapkan untuk memesan banner?", a: "Siapkan ukuran, jumlah, lokasi penggunaan, bahan yang diinginkan jika sudah tahu, dan file desain bila tersedia. Tim dapat membantu mengonfirmasi spesifikasi melalui WhatsApp." },
    { q: "Apakah banner bisa digunakan untuk kebutuhan promosi?", a: "Banner atau spanduk dapat digunakan untuk promosi toko, acara, maupun informasi usaha. Pilih spesifikasi berdasarkan lokasi pemasangan dan kebutuhan Anda." }
  ];
  const schema = {
    "@context":"https://schema.org",
    "@type":"Service",
    name:"Banner Jakarta Timur",
    serviceType:"Banner & Spanduk",
    url,
    description:"Pesan banner dan spanduk di Jakarta Timur melalui Subur Maju Printing. Konsultasikan ukuran, bahan, dan kebutuhan cetak melalui WhatsApp.",
    provider:{"@type":"LocalBusiness",name:"Subur Maju Printing",url:SITE_URL,telephone:"+6282246926544"},
    areaServed:{"@type":"City",name:"Jakarta Timur"}
  };
  const faqSchema = {
    "@context":"https://schema.org","@type":"FAQPage",
    mainEntity:faqs.map(x=>({"@type":"Question",name:x.q,acceptedAnswer:{"@type":"Answer",text:x.a}}))
  };
  return <>
    <Head>
      <title>Banner Jakarta Timur | Subur Maju Printing</title>
      <meta name="description" content="Pesan banner dan spanduk di Jakarta Timur melalui Subur Maju Printing. Konsultasikan ukuran, bahan, dan kebutuhan cetak melalui WhatsApp." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Banner Jakarta Timur | Subur Maju Printing" />
      <meta property="og:description" content="Pesan banner dan spanduk di Jakarta Timur melalui Subur Maju Printing. Konsultasikan ukuran, bahan, dan kebutuhan cetak melalui WhatsApp." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
    </Head>
    <main style={styles.page}>
      <section style={styles.hero}>
        <span style={styles.eyebrow}>SUBUR MAJU PRINTING · JAKARTA TIMUR</span>
        <h1 style={styles.heroTitle}>Banner Jakarta Timur</h1>
        <p>Pesan banner dan spanduk di Jakarta Timur melalui Subur Maju Printing. Konsultasikan ukuran, bahan, dan kebutuhan cetak melalui WhatsApp.</p>
        <div style={styles.actions}>
          <a href={waLink("Halo Subur Maju, saya ingin pesan banner & spanduk.")} style={styles.primary}>Pesan via WhatsApp</a>
          <Link href="/" style={styles.secondary}>Lihat Semua Layanan</Link>
        </div>
      </section>
      <section style={styles.section}>
        <h2>Cetak Banner dan Spanduk sesuai Kebutuhan</h2>
        <p>Pesan banner dan spanduk di Jakarta Timur melalui Subur Maju Printing. Konsultasikan ukuran, bahan, dan kebutuhan cetak melalui WhatsApp. Sebelum meminta penawaran, siapkan ukuran banner, perkiraan jumlah, lokasi penggunaan (indoor atau outdoor), dan file desain jika sudah tersedia. Tim dapat membantu mengonfirmasi spesifikasi berdasarkan kebutuhan pesanan Anda.</p>
        <div style={styles.grid}>
          <article style={styles.card}><h3>Konsultasi</h3><p>Diskusikan ukuran, bahan, jumlah, dan finishing sebelum produksi.</p></article>
          <article style={styles.card}><h3>Produksi</h3><p>Pesanan diproses berdasarkan spesifikasi yang telah disepakati.</p></article>
          <article style={styles.card}><h3>Praktis</h3><p>Kirim detail pesanan langsung melalui WhatsApp.</p></article>
        </div>
      </section>
      <section style={styles.section}>
        <h2>Layanan Lain</h2>
        <div style={styles.links}>
          <Link href="/">Digital Printing Jakarta Timur</Link>
          <Link href="/hardcover-skripsi-jakarta-timur">Hardcover Skripsi Jakarta Timur</Link>
          <Link href="/undangan-digital">Undangan Digital</Link>
          <Link href="/pesan">Pesan Percetakan</Link>
        </div>
      </section>
      <section style={styles.section}>
        <h2>Pertanyaan Umum</h2>
        {faqs.map(x=><details key={x.q} style={styles.faq}><summary>{x.q}</summary><p>{x.a}</p></details>)}
      </section>
    </main>
  </>;
}
const styles={
 page:{minHeight:"100vh",background:"#080808",color:"#fff",fontFamily:"system-ui,-apple-system,BlinkMacSystemFont,sans-serif"},
 hero:{maxWidth:900,margin:"0 auto",padding:"96px 24px 72px"},
 eyebrow:{fontSize:12,letterSpacing:"0.14em",opacity:.65},
 heroTitle:{fontSize:"clamp(42px,8vw,78px)",lineHeight:1,margin:"18px 0"},
 heroText:{maxWidth:680,fontSize:18,lineHeight:1.7,opacity:.78},
 actions:{display:"flex",gap:12,flexWrap:"wrap",marginTop:30},
 primary:{padding:"14px 20px",borderRadius:999,background:"#fff",color:"#080808",textDecoration:"none",fontWeight:700},
 secondary:{padding:"14px 20px",borderRadius:999,border:"1px solid #333",color:"#fff",textDecoration:"none"},
 section:{maxWidth:900,margin:"0 auto",padding:"40px 24px"},
 grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:14,marginTop:24},
 card:{border:"1px solid #242424",borderRadius:20,padding:22,background:"#101010"},
 links:{display:"flex",flexDirection:"column",gap:14,marginTop:20},
 faq:{borderBottom:"1px solid #252525",padding:"18px 0"}
};