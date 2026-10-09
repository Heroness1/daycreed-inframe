import ServiceLandingPage from "../components/ServiceLandingPage";

const service = {
  slug: "brosur-jakarta-timur",
  title: "Brosur Jakarta Timur",
  shortTitle: "Brosur & Flyer",
  eyebrow: "MATERI MARKETING",
  description: "Cetak brosur dan flyer untuk promosi produk, layanan, atau acara di Jakarta Timur. Konsultasikan ukuran, jumlah, jenis kertas, dan opsi lipatan dengan Subur Maju Printing.",
  introTitle: "Cetak Brosur dan Flyer untuk Promosi",
  intro: "Brosur dan flyer membantu menyampaikan informasi produk, layanan, atau acara dalam bentuk cetak. Agar penawaran lebih akurat, siapkan ukuran jadi, jumlah cetak, jenis lipatan jika diperlukan, pilihan kertas bila sudah ditentukan, dan file desain. Jika belum memiliki desain final, tanyakan format file yang disarankan.",
  whatsapp: "Halo Subur Maju, saya ingin pesan brosur & flyer.",
  details: [
    { title: "Ukuran & Lipatan", text: "Pilih format yang sesuai dengan banyaknya informasi dan tujuan promosi." },
    { title: "Pilihan Kertas", text: "Konsultasikan kebutuhan kertas berdasarkan fungsi dan tampilan yang diinginkan." },
    { title: "File Siap Cetak", text: "Siapkan desain, ukuran jadi, dan jumlah cetak untuk konsultasi lebih jelas." }
  ],
  faqs: [
    { q: "Bisa pesan brosur & flyer di Jakarta Timur?", a: "Bisa. Konsultasikan brosur atau flyer untuk memperkenalkan produk, layanan, atau acara melalui WhatsApp Subur Maju Printing." },
    { q: "Informasi apa yang diperlukan untuk mencetak brosur?", a: "Siapkan ukuran, jumlah, jenis lipatan, pilihan kertas jika sudah tahu, dan file desain. Hubungi WhatsApp untuk mengonfirmasi spesifikasi dan estimasi harga." },
    { q: "Apa perbedaan brosur dan flyer?", a: "Flyer umumnya berupa lembar promosi satu lembar, sedangkan brosur dapat memakai format lipat sesuai kebutuhan informasi. Pilihan format sebaiknya disesuaikan dengan konten dan tujuan promosi." }
  ]
};

export default function BrosurJakartaTimur() {
  return <ServiceLandingPage service={service} />;
}
