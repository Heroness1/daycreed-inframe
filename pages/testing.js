import Head from "next/head";
import Catalog from "../components/Catalog";
import { dataLayanan, dataKenapaKami, dataKlien } from "../data/printData";
import { useState, useEffect } from "react";

// nomor whatsapp
const WA_NUMBER = "6282246926544";
const SITE_URL = "https://daycreed-inframe.vercel.app/testing";

const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export default function Home() {
  // ================= LOGIKA SLIDER BACKGROUND (13 GAMBAR) =================
  const backgroundImages = [
    "https://images.unsplash.com/photo-1591241880758-722003fdb0af?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1531815288026?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1592492135673-55966d3b541a?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1563212628-d70314a4c165?auto=format&fit=crop&q=80&w=1600", // Sticker printing detail
    "https://images.unsplash.com/photo-1582236952771-5582f342981d?auto=format&fit=crop&q=80&w=1600", // Large format banner print
    "https://images.unsplash.com/photo-1591122676834-f85764d707c0?auto=format&fit=crop&q=80&w=1600", // Finished hardcover theses stack
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600", // Print media supply shelf
    "https://images.unsplash.com/photo-1601614917637-29218d6e32d2?auto=format&fit=crop&q=80&w=1600", // Stack of colorful brochures
    "https://images.unsplash.com/photo-1591241880758-722003fdb0af?auto=format&fit=crop&q=80&w=1600", // Merchandise print - mugs
    "https://images.unsplash.com/photo-1593121921327-0243e8d2e61a?auto=format&fit=crop&q=80&w=1600", // Offset printing press operator
    "https://images.unsplash.com/photo-1581093116521-3965582b13c7?auto=format&fit=crop&q=80&w=1600", // Graphic design workstation and prints
    "https://images.unsplash.com/photo-1591122676834-f85764d707c0?auto=format&fit=crop&q=80&w=1600", // Sublimation jersey print fabric
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600", // Finished product display shelf
  ];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  // =======================================================================

  return (
    <>
      <Head>
        <title>Digital Printing Jakarta Timur 24 Jam | Subur Maju Printing</title>
        <meta name="description" content="Subur Maju Printing melayani digital printing 24 jam di Jakarta Timur. Hardcover skripsi, banner, spanduk, stiker, brosur, undangan, dan berbagai kebutuhan percetakan." />
        <meta name="keywords" content="digital printing Jakarta Timur, percetakan Jakarta Timur, percetakan Rawamangun, digital printing Rawamangun, hardcover skripsi Jakarta Timur, hardcover skripsi Rawamangun, banner Jakarta Timur, cetak banner, cetak stiker, cetak brosur" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Subur Maju Printing" />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:title" content="Digital Printing Jakarta Timur 24 Jam | Subur Maju Printing" />
        <meta property="og:description" content="Digital printing 24 jam di Jakarta Timur. Hardcover skripsi, banner, spanduk, stiker, brosur, dan berbagai kebutuhan percetakan." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="Subur Maju Printing" />
        <meta property="og:image" content={`${SITE_URL}/avatar.png`} />
        <meta property="og:image:alt" content="Subur Maju Printing - Digital Printing Jakarta Timur" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Printing Jakarta Timur 24 Jam | Subur Maju Printing" />
        <meta name="twitter:description" content="Digital printing 24 jam di Jakarta Timur. Hardcover skripsi, banner, spanduk, stiker, brosur, dan berbagai kebutuhan cetak." />
        <meta name="twitter:image" content={`${SITE_URL}/avatar.png`} />

        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta Timur" />
        <meta name="language" content="id-ID" />
        <link rel="preload" as="image" href="/printer.png" />
      </Head>

      <main className="bg-white text-gray-800 font-sans">

        {/* ================= NAVBAR ================= */}
        <header className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
            <div className="flex items-center gap-4">
              <img src="/avatar.png" alt="Logo Subur Maju Printing" className="w-14 h-14 rounded-2xl object-cover shadow" />
              <div>
                <div className="font-bold text-2xl tracking-tight text-gray-900">Subur Maju Printing</div>
                <p className="text-sm text-gray-500 -mt-1">Digital Printing 24 Jam</p>
              </div>
            </div>

            <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#layanan" className="text-gray-700 hover:text-orange-600 transition">Layanan</a>
              <a href="#katalog" className="text-gray-700 hover:text-orange-600 transition">Katalog</a>
              <a href="#kenapa-kami" className="text-gray-700 hover:text-orange-600 transition">Kenapa Kami</a>
              <a href="#klien" className="text-gray-700 hover:text-orange-600 transition">Klien</a>
              <a href="#lokasi" className="text-gray-700 hover:text-orange-600 transition">Lokasi</a>
            </nav>
          </div>
        </header>

        {/* ================= HERO (SLIDER DENGAN 13 GAMBAR) ================= */}
        <section
          aria-labelledby="hero-title"
          className="relative pt-32 pb-24 flex items-center min-h-[90vh] overflow-hidden"
        >
          {/* Slider Container - Z-Index 0 */}
          <div className="absolute inset-0 z-0">
            {backgroundImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentBg ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
            {/* Lapisan Gelap (Overlay) */}
            <div className="absolute inset-0 bg-black/65"></div>
          </div>

          {/* Konten Teks - Z-Index 10 */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="text-white max-w-3xl">

              <p className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                Subur Maju Printing • Jakarta Timur
              </p>

              <h1
                id="hero-title"
                className="text-5xl md:text-7xl font-bold leading-tight md:leading-none tracking-tighter mb-6 text-white"
              >
                Digital Printing Jakarta Timur 24 Jam
                <br />
                Hardcover Skripsi & Percetakan
              </h1>

              <p className="text-lg md:text-xl text-gray-200 max-w-lg mb-10 leading-relaxed">
                Subur Maju Printing melayani digital printing 24 jam di
                Jakarta Timur, termasuk hardcover skripsi, banner, spanduk,
                stiker, brosur, undangan, dan berbagai kebutuhan percetakan
                dengan kualitas terbaik.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={waLink("Halo Kak, saya mau konsultasi mengenai kebutuhan cetak di Subur Maju Printing.\n\nProduk:\nJumlah:\nUkuran:\nDeadline:")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Konsultasi kebutuhan cetak melalui WhatsApp"
                  className="bg-white text-orange-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl text-lg transition shadow-lg"
                >
                  Konsultasi Gratis
                </a>

                <a
                  href="#katalog"
                  className="border-2 border-white/70 hover:bg-white/20 font-semibold px-8 py-4 rounded-2xl text-lg transition text-white"
                >
                  Lihat Katalog
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS (SUDAH DIHAPUS) ================= */}

        {/* ================= SERVICES ================= */}
        <section id="layanan" aria-labelledby="layanan-title" className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 id="layanan-title" className="text-center text-5xl font-bold mb-4 text-gray-900">Layanan Kami</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Berbagai kebutuhan percetakan untuk bisnis, akademik, and keperluan sehari-hari Anda.
            </p>
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
              {dataLayanan.map((item, index) => (
                <article key={index} className="min-w-[85%] sm:min-w-[60%] lg:min-w-[31%] snap-center bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <img src={item.gambar} alt={`Layanan ${item.judul} Subur Maju Printing`} className="w-full h-64 object-cover" />
                  <div className="p-8">
                    <h3 className="font-bold text-2xl mb-3 text-gray-900">{item.judul}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.deskripsi}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="flex justify-center items-center gap-2 mt-4 md:hidden" aria-hidden="true">
              <span className="text-gray-400 text-sm">← Geser untuk melihat layanan lainnya →</span>
            </div>
          </div>
        </section>

        {/* ================= KATALOG (COMPONENT) ================= */}
        <Catalog />

        {/* ================= WHY US ================= */}
        <section id="kenapa-kami" aria-labelledby="kenapa-title" className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 id="kenapa-title" className="text-center text-5xl font-bold mb-16 text-gray-900">Kenapa Pilih Subur Maju?</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {dataKenapaKami.map((item, index) => (
                <article key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow transition">
                  <h3 className="font-bold text-xl mb-3 text-orange-600">{item.judul}</h3>
                  <p className="text-gray-600">{item.deskripsi}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= KLIEN / PARTNER KAMI ================= */}
        <section id="klien" aria-labelledby="klien-title" className="py-20 bg-white border-y border-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center mb-10">
            <p id="klien-title" className="text-xs md:text-sm font-bold tracking-widest text-gray-900 uppercase">
              Pernah Melayani Kebutuhan Cetak untuk Berbagai Perusahaan & Instansi
            </p>
          </div>
          <div className="relative w-full overflow-hidden whitespace-nowrap py-4">
            <div className="inline-flex animate-marquee items-center gap-16">
              {[...dataKlien, ...dataKlien, ...dataKlien].map((klien, index) => (
                <div key={`${klien.nama}-${index}`} className="flex flex-col items-center justify-center gap-3 px-6">
                  <div className="h-20 w-36 flex items-center justify-center">
                    <img src={klien.logo} alt={`Logo ${klien.nama}`} className="max-h-20 max-w-[140px] w-auto object-contain" loading="lazy" decoding="async" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-gray-800 text-center whitespace-nowrap">{klien.nama}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MARQUEE CSS ================= */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333333%); }
          }
          .animate-marquee { display: flex; width: max-content; animation: marquee 25s linear infinite; will-change: transform; }
          .animate-marquee:hover { animation-play-state: paused; }
          @media (prefers-reduced-motion: reduce) { .animate-marquee { animation: none; } }
        `}</style>

        {/* ================= LOKASI ================= */}
        <section id="lokasi" aria-labelledby="lokasi-title" className="bg-white py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 id="lokasi-title" className="text-center text-4xl font-bold mb-12 text-gray-900">Lokasi Kami</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <article className="bg-gray-50 rounded-3xl p-8 shadow">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  <span aria-hidden="true">📍</span> Subur Maju Printing
                </h3>
                <address className="not-italic text-gray-700 leading-relaxed">
                  Jl. Waru No. 24A,<br />RT.1/RW.8, Rawamangun,<br />Kec. Pulo Gadung,<br />Kota Jakarta Timur 13220
                </address>
                <div className="mt-6 space-y-3 text-gray-700">
                  <p><strong><span aria-hidden="true">🕒</span> Buka 24 Jam</strong></p>
                  <p><strong><span aria-hidden="true">📞</span> WhatsApp:</strong> 0822-4692-6544</p>
                </div>
                <p className="mt-6 text-gray-600">
                  Percetakan 24 Jam Jakarta Timur yang melayani hardcover skripsi, digital printing, banner, stiker, brosur, dan berbagai kebutuhan cetak.
                </p>
                <a
                  href="https://maps.google.com/?q=Jl.+Waru+No.+24A+Rawamangun+Jakarta+Timur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl transition"
                >
                  Buka Google Maps
                </a>
              </article>
              <div className="overflow-hidden rounded-3xl shadow">
                <iframe
                  title="Lokasi Subur Maju Printing di Google Maps"
                  src="https://maps.google.com/maps?q=Jl.%20Waru%20No.%2024A%20Rawamangun%20Jakarta%20Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section aria-labelledby="cta-title" className="py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-title" className="text-5xl font-bold text-gray-900">Siap Cetak Sekarang?</h2>
            <p className="mt-4 text-xl text-gray-600">Kirim file Anda and konsultasikan kebutuhan cetak melalui WhatsApp.</p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition"
            >
              Order Via WhatsApp
            </a>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-gradient-to-br from-orange-700 via-orange-600 to-amber-600 text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img src="/avatar.png" alt="Logo Subur Maju Printing" className="w-16 h-16 rounded-2xl object-cover" />
                  <div>
                    <h3 className="font-bold text-3xl">Subur Maju Printing</h3>
                    <p className="text-orange-200">Digital Printing 24 Jam</p>
                  </div>
                </div>
                <p className="text-orange-100 leading-relaxed">
                  Melayani Digital Printing, Hardcover Skripsi, Banner, Spanduk, Stiker, Brosur, and berbagai kebutuhan percetakan dengan pengerjaan cepat and harga terjangkau.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-6">Informasi Kontak</h3>
                <div className="space-y-4 text-orange-100">
                  <address className="not-italic">
                    <span aria-hidden="true">📍</span> Jl. Waru No.24A<br />Rawamangun, Pulo Gadung<br />Jakarta Timur 13220
                  </address>
                  <p><span aria-hidden="true">📞</span> 0822-4692-6544</p>
                  <p><span aria-hidden="true">🕒</span> Buka 24 Jam</p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-6">Layanan Populer</h3>
                <ul className="space-y-3 text-orange-100">
                  <li><span aria-hidden="true">✓</span> Hardcover Skripsi</li>
                  <li><span aria-hidden="true">✓</span> Digital Printing</li>
                  <li><span aria-hidden="true">✓</span> Banner & Spanduk</li>
                  <li><span aria-hidden="true">✓</span> Stiker & Label</li>
                  <li><span aria-hidden="true">✓</span> Brosur & Flyer</li>
                  <li><span aria-hidden="true">✓</span> Undangan & Kartu Nama</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-orange-200">
              <p>© {new Date().getFullYear()} Subur Maju Printing. All Rights Reserved.</p>
              <p>Digital Presence by <span className="font-semibold text-white">Lure</span></p>
            </div>
          </div>
        </footer>

        {/* ================= FLOATING WHATSAPP ================= */}
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi Subur Maju Printing melalui WhatsApp"
          className="fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-700 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-2xl z-50 transition-all duration-300"
        >
          <span aria-hidden="true">💬</span>
          <span aria-hidden="true" className="absolute inset-0 rounded-2xl border-4 border-orange-400 animate-ping opacity-75" />
          <span aria-hidden="true" className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white" />
        </a>

      </main>
    </>
  );
}
