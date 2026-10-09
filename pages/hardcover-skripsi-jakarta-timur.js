import ServiceLandingPage from "../components/ServiceLandingPage";

const service = {
  slug: "hardcover-skripsi-jakarta-timur",
  title: "Hardcover Skripsi Jakarta Timur",
  shortTitle: "Hardcover Skripsi",
  eyebrow: "LAYANAN AKADEMIK",
  description: "Butuh hardcover skripsi untuk sidang atau pengumpulan tugas akhir? Konsultasikan kebutuhan cetak, ukuran, warna, dan finishing dengan Subur Maju Printing.",
  introTitle: "Hardcover Skripsi untuk Tugas Akhir",
  intro: "Kami membantu kebutuhan hardcover skripsi dengan alur pemesanan yang sederhana. Kirim detail jumlah, ukuran, warna, dan kebutuhan finishing melalui WhatsApp agar tim dapat membantu mengarahkan pesanan Anda.",
  whatsapp: "Halo Subur Maju, saya ingin pesan hardcover skripsi.",
  details: [
    { title: "Konsultasi Spesifikasi", text: "Diskusikan jumlah, ukuran, warna, dan kebutuhan finishing sebelum pesanan diproses." },
    { title: "Persiapan Naskah", text: "Siapkan detail kebutuhan kampus dan file atau contoh yang ingin dijadikan acuan." },
    { title: "Pemesanan Praktis", text: "Kirim detail pesanan langsung melalui WhatsApp untuk konfirmasi selanjutnya." }
  ],
  faqs: [
    { q: "Bisa pesan hardcover skripsi di Jakarta Timur?", a: "Bisa. Subur Maju Printing melayani kebutuhan hardcover skripsi untuk area Jakarta Timur dan sekitarnya." },
    { q: "Apakah bisa konsultasi sebelum mencetak?", a: "Bisa. Kirim detail kebutuhan dan contoh atau file melalui WhatsApp untuk dikonsultasikan terlebih dahulu." },
    { q: "Berapa lama pengerjaan hardcover skripsi?", a: "Waktu pengerjaan bergantung pada jumlah dan spesifikasi pesanan. Hubungi kami untuk mengecek estimasi pengerjaan terbaru." }
  ]
};

export default function HardcoverSkripsiJakartaTimur() {
  return <ServiceLandingPage service={service} />;
}
