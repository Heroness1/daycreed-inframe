import Head from "next/head";

// --- DATA LAYANAN, PRODUK, KENAPA KAMI, & KLIEN ---

const dataLayanan = [
  {
    judul: "Digital Printing",
    deskripsi:
      "Melayani berbagai kebutuhan cetak untuk keperluan bisnis, akademik, maupun sehari-hari.",
    gambar: "/digitalprinting.jpeg",
  },
  {
    judul: "Cetak Beragam Media",
    deskripsi:
      "Pilihan untuk berbagai kebutuhan cetak dengan media dan ukuran yang beragam.",
    gambar: "/eyecolor.jpeg",
  },
  {
    judul: "Banner & Spanduk",
    deskripsi:
      "Untuk kebutuhan promosi, informasi, acara, dan berbagai keperluan lainnya.",
    gambar: "/lempanas.jpeg",
  },
  {
    judul: "Kebutuhan Percetakan",
    deskripsi:
      "Kami melayani berbagai kebutuhan percetakan sesuai kebutuhan pelanggan.",
    gambar: "/owner.jpeg",
  },
];

const dataProduk = [
  { 
    nama: "Cetak Spanduk", 
    deskripsi: "Max lebar 3 meter, bahan tebal dan anti luntur.", 
    badge: "🔥 Best Seller" 
  },
  { 
    nama: "Cetak Baliho", 
    deskripsi: "Max lebar 6 meter untuk promosi luar ruang skala besar.",
    badge: "Big Size" 
  },
  {
    nama: "Cetak Booklet",
    deskripsi: "Cetak booklet berkualitas untuk berbagai keperluan.",
    badge: "Populer"
  },
  {
    nama: "Cetak Signate",
    deskripsi: "Pembuatan papan nama atau signage custom.",
  },
  {
    nama: "Cetak Sticker Cutting",
    deskripsi: "Sticker cutting custom berbagai ukuran dan bentuk.",
    badge: "⭐ Favorit"
  },
  {
    nama: "Cetak Poster Ukuran Besar",
    deskripsi: "Poster ukuran besar custom resolusi tinggi.",
  },
  {
    nama: "Cetak Nota",
    deskripsi: "Buku nota / bon custom untuk usaha.",
    badge: "Bisnis"
  },
  {
    nama: "Cetak Mockup Event",
    deskripsi: "Kebutuhan dekorasi dan mockup untuk event.",
  },
  {
    nama: "Cetak Xbanner",
    deskripsi: "X-Banner lengkap dengan tiang penyangga.",
  },
  {
    nama: "Cetak Roll Banner",
    deskripsi: "Roll Banner premium, praktis dan kokoh.",
  },
  {
    nama: "Cetak Plakat",
    deskripsi: "Plakat custom untuk acara penghargaan/kenang-kenangan.",
  },
  {
    nama: "Cetak Lanyard",
    deskripsi: "Tali ID Card / Lanyard custom printing.",
    badge: "⚡ Cepat"
  },
  {
    nama: "Cetak Gelang Event / Wristband",
    deskripsi: "Wristband / gelang tiket event anti luntur.",
  },
  {
    nama: "Cetak Id Card",
    deskripsi: "ID Card bahan PVC berkualitas tinggi.",
    badge: "⚡ Cepat"
  },
  {
    nama: "Cetak Nametag",
    deskripsi: "Nametag dada custom profesional.",
  },
  {
    nama: "Cetak Kop Surat",
    deskripsi: "Kop surat resmi instansi atau perusahaan.",
  },
  {
    nama: "Cetak Photo Props Aksesoris Photoboot",
    deskripsi: "Aksesoris photobooth kekinian dan lucu.",
  },
  {
    nama: "Cetak Package",
    deskripsi: "Packaging / kemasan box custom untuk produk.",
    badge: "Custom"
  },
  {
    nama: "Cetak Gantungan Kunci",
    deskripsi: "Gantungan kunci akrilik/pin custom.",
  },
];

const dataKenapaKami = [
  {
    judul: "✓ Buka 24 Jam",
    deskripsi: "Siap melayani kapan saja Anda butuh.",
  },
  {
    judul: "✓ Pengerjaan Cepat",
    deskripsi: "Order hari ini, besok jadi.",
  },
  {
    judul: "✓ Harga Termurah",
    deskripsi: "Kualitas tinggi dengan harga bersaing.",
  },
  {
    judul: "✓ Respon Instan",
    deskripsi: "Tim kami fast response via WhatsApp.",
  },
  {
    judul: "✓ Kualitas Terjamin",
    deskripsi: "Material premium + garansi.",
  },
  {
    judul: "✓ Pengalaman Bertahun-tahun",
    deskripsi: "Terpercaya di Jakarta.",
  },
];

// --- KLIEN ---
const dataKlien = [
  {
    nama: "Kementerian Pertahanan RI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Seal_of_the_Ministry_of_Defense_of_the_Republic_of_Indonesia_%282022%29.svg",
  },
  {
    nama: "BSI (Bank Syariah Indonesia)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bank_Syariah_Indonesia.svg",
  },
  {
    nama: "McDonald's",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Digital Printing Jakarta Timur 24 Jam | Subur Maju Printing
        </title>

        <meta
          name="description"
          content="Subur Maju Printing melayani digital printing 24 jam di Jakarta Timur. Hardcover skripsi, banner, spanduk, stiker, brosur, undangan, dan berbagai kebutuhan percetakan."
        />

        <meta
          name="keywords"
          content="digital printing Jakarta Timur, percetakan Jakarta Timur, percetakan Rawamangun, digital printing Rawamangun, hardcover skripsi Jakarta Timur, hardcover skripsi Rawamangun, banner Jakarta Timur, cetak banner, cetak stiker, cetak brosur"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Subur Maju Printing" />

        <link
          rel="canonical"
          href="https://daycreed-inframe.vercel.app/testing"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Digital Printing Jakarta Timur 24 Jam | Subur Maju Printing"
        />

        <meta
          property="og:description"
          content="Digital printing 24 jam di Jakarta Timur. Hardcover skripsi, banner, spanduk, stiker, brosur, dan berbagai kebutuhan percetakan."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://daycreed-inframe.vercel.app/testing"
        />

        <meta property="og:site_name" content="Subur Maju Printing" />

        <meta
          property="og:image"
          content="https://daycreed-inframe.vercel.app/avatar.png"
        />

        <meta
          property="og:image:alt"
          content="Subur Maju Printing - Digital Printing Jakarta Timur"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Digital Printing Jakarta Timur 24 Jam | Subur Maju Printing"
        />

        <meta
          name="twitter:description"
          content="Digital printing 24 jam di Jakarta Timur. Hardcover skripsi, banner, spanduk, stiker, brosur, dan berbagai kebutuhan cetak."
        />

        <meta
          name="twitter:image"
          content="https://daycreed-inframe.vercel.app/avatar.png"
        />

        {/* Local SEO */}
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta Timur" />
        <meta name="language" content="id-ID" />

        {/* Hero image preload */}
        <link rel="preload" as="image" href="/printer.png" />
      </Head>

      <main className="bg-white text-black font-sans">

        {/* ================= NAVBAR ================= */}
        <header className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

            <div className="flex items-center gap-4">
              <img
                src="/avatar.png"
                alt="Logo Subur Maju Printing"
                className="w-14 h-14 rounded-2xl object-cover shadow"
              />

              <div>
                <div className="font-bold text-2xl tracking-tight">
                  Subur Maju Printing
                </div>

                <p className="text-sm text-gray-500 -mt-1">
                  Digital Printing 24 Jam
                </p>
              </div>
            </div>

            <nav
              aria-label="Navigasi utama"
              className="hidden md:flex items-center gap-8 text-sm font-medium"
            >
              <a
                href="#layanan"
                className="text-gray-800 hover:text-orange-600 transition"
              >
                Layanan
              </a>

              <a
                href="#katalog"
                className="text-gray-800 hover:text-orange-600 transition"
              >
                Katalog
              </a>

              <a
                href="#kenapa-kami"
                className="text-gray-800 hover:text-orange-600 transition"
              >
                Kenapa Kami
              </a>

              <a
                href="#klien"
                className="text-gray-800 hover:text-orange-600 transition"
              >
                Klien
              </a>

              <a
                href="#lokasi"
                className="text-gray-800 hover:text-orange-600 transition"
              >
                Lokasi
              </a>
            </nav>

            <a
              href="https://wa.me/6282246926544?text=Halo%20Kak%2C%20saya%20mau%20order%20dari%20website%20Subur%20Maju%20Printing.%0A%0AProduk%3A%0AJumlah%3A%0AUkuran%3A%0ADeadline%3A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi Subur Maju Printing melalui WhatsApp"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition shadow-md shadow-orange-600/20"
            >
              Hubungi WA
            </a>
          </div>
        </header>

        {/* ================= HERO ================= */}
        <section
          aria-labelledby="hero-title"
          className="pt-24 min-h-screen bg-gradient-to-br from-orange-600 via-amber-600 to-red-600 flex items-center"
        >
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">

            <div className="text-white">

              <p className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-6 font-medium">
                Subur Maju Printing • Jakarta Timur
              </p>

              <h1
                id="hero-title"
                className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
              >
                Digital Printing Jakarta Timur 24 Jam
                <br />
                <span className="text-amber-200">Hardcover Skripsi & Percetakan</span>
              </h1>

              <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                Subur Maju Printing melayani digital printing 24 jam di
                Jakarta Timur, termasuk hardcover skripsi, banner, spanduk,
                stiker, brosur, undangan, dan berbagai kebutuhan percetakan
                dengan kualitas terbaik.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href={`https://wa.me/6282246926544?text=${encodeURIComponent(
                    `Halo Kak, saya mau konsultasi mengenai kebutuhan cetak di Subur Maju Printing.\n\nProduk:\nJumlah:\nUkuran:\nDeadline:`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Konsultasi kebutuhan cetak melalui WhatsApp"
                  className="bg-white text-orange-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl text-lg transition shadow-lg"
                >
                  Konsultasi Gratis
                </a>

                <a
                  href="#katalog"
                  className="border border-white/70 hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl text-lg transition"
                >
                  Lihat Katalog
                </a>

              </div>
            </div>

            <div>
              <img
                src="/printer.png"
                alt="Mesin digital printing Subur Maju Printing"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>

          </div>
        </section>

        {/* ================= STATS ================= */}
        <section
          aria-label="Statistik Subur Maju Printing"
          className="py-12 bg-white border-b"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-4xl font-extrabold text-orange-600">24</div>
              <div className="text-gray-600 mt-1 font-medium">Jam Layanan</div>
            </div>

            <div>
              <div className="text-4xl font-extrabold text-orange-600">
                1000+
              </div>
              <div className="text-gray-600 mt-1 font-medium">Proyek Selesai</div>
            </div>

            <div>
              <div className="text-4xl font-extrabold text-orange-600">100%</div>
              <div className="text-gray-600 mt-1 font-medium">Garansi Puas</div>
            </div>

            <div>
              <div className="text-4xl font-extrabold text-orange-600">Fast</div>
              <div className="text-gray-600 mt-1 font-medium">Pengerjaan Cepat</div>
            </div>

          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section
          id="layanan"
          aria-labelledby="layanan-title"
          className="py-24 px-6 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto">

            <h2
              id="layanan-title"
              className="text-center text-4xl md:text-5xl font-bold mb-4"
            >
              Layanan Kami
            </h2>

            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Berbagai kebutuhan percetakan untuk bisnis, akademik, dan
              keperluan sehari-hari Anda.
            </p>

            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">

              {dataLayanan.map((item, index) => (
                <article
                  key={index}
                  className="min-w-[85%] sm:min-w-[60%] lg:min-w-[31%] snap-center bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >

                  <img
                    src={item.gambar}
                    alt={`Layanan ${item.judul} Subur Maju Printing`}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-8">

                    <h3 className="font-bold text-2xl mb-3">
                      {item.judul}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.deskripsi}
                    </p>

                  </div>
                </article>
              ))}

            </div>

            <div
              className="flex justify-center items-center gap-2 mt-4 md:hidden"
              aria-hidden="true"
            >
              <span className="text-gray-400 text-sm">
                ← Geser untuk melihat layanan lainnya →
              </span>
            </div>

          </div>
        </section>

        {/* ================= KATALOG (REDESIGNED CARDS) ================= */}
        <section
          id="katalog"
          aria-labelledby="katalog-title"
          className="py-24 px-6 bg-white"
        >
          <div className="max-w-7xl mx-auto">

            <div className="mb-14 text-center">
              <span className="text-orange-600 font-semibold uppercase tracking-wider text-sm bg-orange-50 px-4 py-1.5 rounded-full">
                Katalog Produk
              </span>
              <h2
                id="katalog-title"
                className="text-4xl md:text-5xl font-bold text-gray-900 mt-3"
              >
                Pilihan Layanan Cetak
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base">
                Klik salah satu kartu di bawah untuk langsung berkonsultasi mengenai detail spesifikasi & pemesanan via WhatsApp.
              </p>
            </div>

            {/* Grid Kartu Modern */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {dataProduk.map((produk, index) => (
                <a
                  key={index}
                  href={`https://wa.me/6282246926544?text=${encodeURIComponent(
                    `Halo Kak, saya mau tanya/pesan untuk layanan ${produk.nama}. Boleh minta info detailnya?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 overflow-hidden"
                >
                  {/* Aksen garis atas saat di-hover */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      {/* Ikon Cetak Dokumen */}
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-sm">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      
                      {/* Badge jika ada */}
                      {produk.badge && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                          {produk.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                      {produk.nama}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {produk.deskripsi}
                    </p>
                  </div>

                  {/* Tombol aksi bawah (Teks Hitam Nyaman Dibaca) */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-gray-900">
                    <span className="group-hover:text-orange-600 group-hover:translate-x-1 transition-all">Tanya & Pesan via WA</span>
                    <div className="w-8 h-8 rounded-full bg-orange-50 group-hover:bg-orange-600 group-hover:text-white text-orange-600 flex items-center justify-center transition-colors">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>

                </a>
              ))}

            </div>

          </div>
        </section>

        {/* ================= WHY US ================= */}
        <section
          id="kenapa-kami"
          aria-labelledby="kenapa-title"
          className="py-24 px-6 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto">

            <h2
              id="kenapa-title"
              className="text-center text-4xl md:text-5xl font-bold mb-16"
            >
              Kenapa Pilih Subur Maju?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {dataKenapaKami.map((item, index) => (
                <article
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow transition border border-gray-100"
                >

                  <h3 className="font-bold text-xl mb-3 text-orange-600">
                    {item.judul}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.deskripsi}
                  </p>

                </article>
              ))}

            </div>
          </div>
        </section>

        {/* ================= KLIEN / PARTNER KAMI ================= */}
        <section
          id="klien"
          aria-labelledby="klien-title"
          className="py-20 bg-white border-y border-gray-100 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 text-center mb-10">
            <p
              id="klien-title"
              className="text-xs md:text-sm font-bold tracking-widest text-gray-500 uppercase"
            >
              Pernah Melayani Kebutuhan Cetak untuk Berbagai Perusahaan & Instansi
            </p>
          </div>

          <div className="relative w-full overflow-hidden whitespace-nowrap py-4">
            <div className="inline-flex animate-marquee items-center gap-16">

              {[...dataKlien, ...dataKlien, ...dataKlien].map(
                (klien, index) => (
                  <div
                    key={`${klien.nama}-${index}`}
                    className="flex flex-col items-center justify-center gap-3 px-6"
                  >
                    {/* LOGO */}
                    <div className="h-20 w-36 flex items-center justify-center">
                      <img
                        src={klien.logo}
                        alt={`Logo ${klien.nama}`}
                        className="max-h-20 max-w-[140px] w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* NAMA KLIEN */}
                    <span className="text-xs md:text-sm font-bold text-gray-800 text-center whitespace-nowrap">
                      {klien.nama}
                    </span>
                  </div>
                )
              )}

            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-gray-900 text-white py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="font-bold text-xl mb-1">Subur Maju Printing</div>
              <p className="text-gray-400 text-sm">Pusat Digital Printing & Percetakan 24 Jam di Jakarta Timur.</p>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Subur Maju Printing. All rights reserved.</p>
          </div>
        </footer>

      </main>

      {/* ================= MARQUEE & UTILITY CSS ================= */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
          will-change: transform;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
