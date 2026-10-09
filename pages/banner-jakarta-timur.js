import ServiceLandingPage from "../components/ServiceLandingPage";

const service = {
  slug: "banner-jakarta-timur",
  title: "Banner Jakarta Timur",
  shortTitle: "Banner & Spanduk",
  eyebrow: "PROMOSI & OUTDOOR",
  description: "Cetak banner dan spanduk untuk promosi toko, acara, atau usaha di Jakarta Timur. Konsultasikan ukuran, bahan, jumlah, dan spesifikasi pesanan melalui WhatsApp Subur Maju Printing.",
  introTitle: "Cetak Banner dan Spanduk sesuai Kebutuhan",
  intro: "Banner dan spanduk dapat digunakan untuk promosi toko, acara, maupun informasi usaha. Siapkan ukuran, jumlah, lokasi penggunaan indoor atau outdoor, serta file desain jika tersedia agar spesifikasi pesanan dapat dikonsultasikan dengan lebih jelas.",
  whatsapp: "Halo Subur Maju, saya ingin pesan banner & spanduk.",
  details: [
    { title: "Ukuran Fleksibel", text: "Diskusikan ukuran jadi dan kebutuhan pemasangan sebelum menentukan spesifikasi." },
    { title: "Kebutuhan Indoor / Outdoor", text: "Informasikan lokasi penggunaan agar pilihan bahan bisa dikonsultasikan." },
    { title: "Siapkan File Desain", text: "Kirim file desain jika tersedia, beserta jumlah dan target waktu pemesanan." }
  ],
  faqs: [
    { q: "Bisa pesan banner & spanduk di Jakarta Timur?", a: "Bisa. Konsultasikan kebutuhan banner atau spanduk untuk promosi toko, acara, atau informasi usaha melalui WhatsApp Subur Maju Printing." },
    { q: "Informasi apa yang perlu disiapkan untuk memesan banner?", a: "Siapkan ukuran, jumlah, lokasi penggunaan, bahan yang diinginkan jika sudah tahu, dan file desain bila tersedia. Tim dapat membantu mengonfirmasi spesifikasi melalui WhatsApp." },
    { q: "Apakah banner bisa digunakan untuk kebutuhan promosi?", a: "Banner atau spanduk dapat digunakan untuk promosi toko, acara, maupun informasi usaha. Pilih spesifikasi berdasarkan lokasi pemasangan dan kebutuhan Anda." }
  ]
};

export default function BannerJakartaTimur() {
  return <ServiceLandingPage service={service} />;
}
