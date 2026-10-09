import ServiceLandingPage from "../components/ServiceLandingPage";

const service = {
  slug: "stiker-jakarta-timur",
  title: "Stiker Jakarta Timur",
  shortTitle: "Stiker & Label",
  eyebrow: "PRODUK & BRANDING",
  description: "Pesan stiker dan label untuk produk, kemasan, branding, atau promosi di Jakarta Timur. Konsultasikan ukuran, bentuk, jumlah, bahan, dan finishing dengan Subur Maju Printing.",
  introTitle: "Stiker dan Label untuk Produk atau Promosi",
  intro: "Stiker dapat digunakan untuk label produk, kemasan, branding, dan promosi. Untuk membantu konsultasi, siapkan ukuran, bentuk potongan, jumlah, permukaan tempat stiker akan ditempel, serta file desain jika tersedia. Ketersediaan bahan dan finishing perlu dikonfirmasi saat konsultasi.",
  whatsapp: "Halo Subur Maju, saya ingin pesan stiker & label.",
  details: [
    { title: "Ukuran & Bentuk", text: "Jelaskan ukuran dan bentuk potongan yang dibutuhkan untuk produk Anda." },
    { title: "Permukaan Penggunaan", text: "Informasikan permukaan atau kemasan tempat stiker akan ditempel." },
    { title: "Kebutuhan Branding", text: "Kirim file desain dan perkiraan jumlah agar kebutuhan bisa dikonsultasikan." }
  ],
  faqs: [
    { q: "Bisa pesan stiker & label di Jakarta Timur?", a: "Bisa. Konsultasikan kebutuhan stiker untuk label produk, kemasan, branding, atau promosi dengan Subur Maju Printing melalui WhatsApp." },
    { q: "Apa detail yang perlu disiapkan sebelum mencetak stiker?", a: "Siapkan ukuran, bentuk, jumlah, permukaan penggunaan, dan file desain jika tersedia. Tim dapat membantu mengonfirmasi bahan dan finishing yang sesuai." },
    { q: "Bisa untuk label produk atau kemasan?", a: "Stiker dapat digunakan untuk berbagai kebutuhan seperti label produk, kemasan, dan promosi. Spesifikasi akhir bergantung pada permukaan dan cara penggunaan." }
  ]
};

export default function StikerJakartaTimur() {
  return <ServiceLandingPage service={service} />;
}
