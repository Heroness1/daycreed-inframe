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
  // ================= gambar =================
  const backgroundImages = [
    "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1600",
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 4500); // Ganti tiap 4.5 detik
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Animasi Navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
      </Head>

      <main className="bg-white text-gray-800 font-sans">

        {/* ================= NAVBAR ================= */}
        <header 
          className={`fixed ${showNavbar ? 'top-4' : '-top-24'} transition-all duration-500 ease-in-out left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[800px] bg-black/40 backdrop-blur-2xl backdrop-saturate-200 border border-white/15 shadow-2xl z-50 rounded-full`}
        >
          <div className="flex items-center justify-between px-5 h-16">
            <div className="flex items-center gap-3">
              <img src="/avatar.png" alt="Logo Subur Maju Printing" className="w-10 h-10 rounded-full object-cover border border-white/20" />
              <div className="hidden sm:flex flex-col justify-center mt-1">
                <div className="font-semibold text-[15px] tracking-tight text-white leading-none">Subur Maju Printing</div>
              </div>
            </div>

            <nav aria-label="Navigasi utama" className="flex items-center gap-1 md:gap-2 text-[13px] font-medium text-gray-300">
              <a href="#layanan" className="px-4 py-2 rounded-full hover:bg-white/15 hover:text-white transition-all duration-300">Layanan</a>
              <a href="#katalog" className="px-4 py-2 rounded-full hover:bg-white/15 hover:text-white transition-all duration-300">Katalog</a>
              <a href="#lokasi" className="px-4 py-2 rounded-full hover:bg-white/15 hover:text-white transition-all duration-300">Lokasi</a>
            </nav>
          </div>
        </header>

        {/* ================= HERO ================= */}
        <section
          aria-labelledby="hero-title"
          className="relative pt-32 pb-24 flex items-center min-h-[92vh] overflow-hidden bg-slate-900"
        >
          {/* Slider Background */}
          <div className="absolute inset-0 z-0">
            {backgroundImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentBg
                    ? "opacity-100 scale-105"
                    : "opacity-0 scale-100 pointer-events-none"
                }`}
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
            
            {/* Overlay Gradasi Warm/Oranye-Hitam */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-orange-950/40 backdrop-contrast-125"></div>
          </div>

          {/* Konten Teks */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="text-white max-w-3xl">

              <p className="inline-flex items-center gap-2 bg-orange-600/30 border border-orange-400/40 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-6 text-orange-200">
                Subur Maju Printing • Jakarta Timur
              </p>

              <h1
                id="hero-title"
                className="text-5xl md:text-7xl font-extrabold leading-tight md:leading-none tracking-tight mb-6 text-white drop-shadow-md"
              >
                Digital Printing Jakarta Timur 24 Jam
                <br />
                Hardcover Skripsi & Percetakan
              </h1>

              <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-10 leading-relaxed drop-shadow-sm">
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
                  className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-xl shadow-orange-900/40 hover:scale-105"
                >
                  Konsultasi Gratis
                </a>

                <a
                  href="#katalog"
                  className="border-2 border-white/80 bg-black/20 hover:bg-white/20 font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 text-white backdrop-blur-sm"
                >
                  Lihat Katalog
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="layanan" aria-labelledby="layanan-title" className="py-24 px-6 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="layanan-title" className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                Layanan Kami
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-500 max-w-2xl mx-auto text-[17px] font-medium leading-relaxed tracking-tight">
                Berbagai kebutuhan percetakan untuk bisnis, akademik, dan keperluan sehari-hari Anda.
              </p>
            </div>

            <div className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-10 pt-4 scrollbar-hide px-4 -mx-4 md:px-0 md:mx-0">
              {dataLayanan.map((item, index) => (
                <article 
                  key={index} 
                  className="group min-w-[85%] sm:min-w-[60%] lg:min-w-[31.333%] snap-center bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-orange-200 hover:-translate-y-1 transition-all duration-500 flex flex-col overflow-hidden"
                >
                  <div className="relative h-64 md:h-72 w-full overflow-hidden">
                    <img 
                      src={item.gambar} 
                      alt={`Layanan ${item.judul} Subur Maju Printing`} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="p-8 lg:p-10 flex flex-col flex-grow relative bg-white z-10">
                    <h3 className="font-bold text-2xl mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300 tracking-tight">
                      {item.judul}
                    </h3>
                    <p className="text-gray-500 leading-relaxed font-medium mb-8 flex-grow">
                      {item.deskripsi}
                    </p>

                    <div className="mt-auto flex items-center text-sm font-bold text-orange-500 tracking-wider uppercase overflow-hidden">
                      <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                        Pesan Sekarang
                      </span>
                      <svg 
                        className="w-5 h-5 ml-2 transform -translate-x-8 group-hover:translate-x-0 transition-all duration-500" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex justify-center items-center gap-3 mt-2 md:hidden opacity-60" aria-hidden="true">
              <div className="w-10 h-[1px] bg-gray-400"></div>
              <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Geser</span>
              <div className="w-10 h-[1px] bg-gray-400"></div>
            </div>
          </div>
        </section>

        {/* ================= KATALOG (COMPONENT) ================= */}
        <Catalog />

        {/* ================= WHY US ================= */}
        {/* Hapus class border-y dan border-gray-100 */}
        <section id="kenapa-kami" aria-labelledby="kenapa-title" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="kenapa-title" className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                Kenapa pilih kami?
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {dataKenapaKami.map((item, index) => (
                <article 
                  key={index} 
                  className="group relative bg-gray-50/40 rounded-3xl rounded-br-[80px] p-8 lg:p-10 border border-gray-100 hover:border-orange-200 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400/0 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none"></div>

                  <div className="absolute top-8 right-8 text-gray-300 group-hover:text-orange-400 group-hover:rotate-180 transition-all duration-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </div>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-orange-500 rounded-r-full group-hover:h-1/2 transition-all duration-500"></div>

                  <div className="relative z-10">
                    <h3 className="font-bold text-2xl mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300 pr-8">
                      {item.judul}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {item.deskripsi}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= KLIEN / PARTNER KAMI ================= */}
        {/* Hapus class border-y dan border-gray-100 */}
        <section id="klien" aria-labelledby="klien-title" className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center mb-10">
            <p id="klien-title" className="text-xs md:text-sm font-bold tracking-widest text-gray-900 uppercase">
              Pernah Melayani Kebutuhan Cetak untuk Berbagai Perusahaan & Instansi
            </p>
          </div>
          <div className="relative w-full overflow-hidden whitespace-nowrap py-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
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
        <section id="lokasi" aria-labelledby="lokasi-title" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            
            {/* Heading dengan Gradien */}
            <div className="text-center mb-16">
              <h2 id="lokasi-title" className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                Temukan <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Lokasi Kami</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Kunjungi toko kami atau hubungi secara online. Kami siap melayani kebutuhan cetak Anda kapan saja.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Kartu Informasi Lokasi */}
              <article className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Subur Maju Printing
                  </h3>
                  {/* Badge 24 Jam */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold tracking-wide border border-green-200">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Buka 24 Jam
                  </span>
                </div>

                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Alamat Toko</h4>
                      <address className="not-italic text-gray-600 leading-relaxed text-sm">
                        Jl. Waru No. 24A, RT.1/RW.8,<br />
                        Rawamangun, Kec. Pulo Gadung,<br />
                        Kota Jakarta Timur 13220
                      </address>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">WhatsApp / Telepon</h4>
                      <p className="text-gray-600 text-sm">0822-4692-6544</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Spesialis percetakan Jakarta Timur. Melayani <strong>hardcover skripsi, digital printing, banner, stiker, dan brosur</strong> dengan kualitas premium.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Jl.+Waru+No.+24A+Rawamangun+Jakarta+Timur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
                  >
                    Buka di Google Maps
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </article>

              {/* Kontainer Map dengan Efek Glow */}
              <div className="relative group h-full min-h-[400px]">
                <div className="absolute -inset-3 bg-gradient-to-tr from-orange-500 to-amber-300 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-30 transition duration-500"></div>
                
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-xl ring-1 ring-gray-100 bg-gray-50">
                  <iframe
                    title="Lokasi Subur Maju Printing di Google Maps"
                    src="https://maps.google.com/maps?q=Jl.%20Waru%20No.%2024A%20Rawamangun%20Jakarta%20Timur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full min-h-[450px]"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
{/* ================= CTA ================= */}
<section aria-labelledby="cta-title" className="py-24 px-6 bg-white">
  <div className="max-w-5xl mx-auto relative group">
    
    {/* Efek Glow di Belakang Kartu */}
    <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-[3rem] blur-xl opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

    <div className="relative bg-slate-900 rounded-[3rem] px-8 py-20 overflow-hidden shadow-2xl flex flex-col items-center text-center">
      
      {/* Dekorasi Cahaya di Sudut (Ambient Blur) */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-amber-400 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>
      
      {/* Konten */}
      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* Badge Status */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide border border-orange-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Respon Cepat 24 Jam
        </span>
        
        <h2 id="cta-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Siap Cetak <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Sekarang?</span>
        </h2>
        
        <p className="mt-4 text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          Tidak perlu repot datang ke workshop. Kirim file Anda dan konsultasikan kebutuhan cetak langsung melalui WhatsApp.
        </p>
        
        {/* Tombol CTA Interaktif */}
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-8 py-5 rounded-2xl text-lg font-bold transition-all duration-300 shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_60px_-15px_rgba(249,115,22,0.7)] hover:-translate-y-1"
        >
          {/* Ikon WhatsApp SVG */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Konsultasi & Order Sekarang
        </a>
      </div>
    </div>
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
                  Melayani Digital Printing, Hardcover Skripsi, Banner, Spanduk, Stiker, Brosur, dan berbagai kebutuhan percetakan dengan pengerjaan cepat dan harga terjangkau.
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
