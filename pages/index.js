import Head from "next/head";
import Image from "next/image";
import Catalog from "../components/Catalog";
import { dataLayanan, dataKenapaKami, dataKlien } from "../data/printData";
import { useState, useEffect } from "react";
import Link from "next/link";
import SmartOrder from "../components/SmartOrder";

// nomor whatsapp
const WA_NUMBER = "6282246926544";
const SITE_URL = "https://www.suburmajuprinting.com/";

const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export default function Home() {
  const [isSmartOrderOpen, setIsSmartOrderOpen] = useState(false);

  // ================= GAMBAR =================
  const backgroundImages = [
    "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=1600",
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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
        <meta
          name="description"
          content="Subur Maju Printing melayani digital printing 24 jam di Jakarta Timur. Hardcover skripsi, banner, spanduk, stiker, brosur, undangan digital website, dan berbagai kebutuhan percetakan."
        />
        <meta
          name="keywords"
          content="digital printing Jakarta Timur, percetakan Jakarta Timur, percetakan Rawamangun, digital printing Rawamangun, hardcover skripsi Jakarta Timur, banner Jakarta Timur, cetak stiker, undangan digital web, jasa undangan website"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Subur Maju Printing" />
        <link rel="canonical" href={SITE_URL} />

        {/* ================= OPEN GRAPH TAGS ================= */}
        <meta property="og:title" content="Digital Printing Jakarta Timur 24 Jam | Subur Maju Printing" />
        <meta property="og:description" content="Subur Maju Printing melayani digital printing 24 jam di Jakarta Timur. Hardcover skripsi, banner, spanduk, stiker, brosur, dan undangan digital." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}avatar.png`} />
        <meta property="og:site_name" content="Subur Maju Printing" />

        {/* ================= SCHEMA (JSON-LD) ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Subur Maju Printing",
              "image": `${SITE_URL}avatar.png`,
              "@id": SITE_URL,
              "url": SITE_URL,
              "telephone": "+6282246926544",
              "priceRange": "Rp",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Waru No.15C, RT.2/RW.9, Rawamangun, Kec. Pulo Gadung",
                "addressLocality": "Kota Jakarta Timur",
                "addressRegion": "DKI Jakarta",
                "postalCode": "13220",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.1923,
                "longitude": 106.8834
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                SITE_URL
              ]
            })
          }}
        />
      </Head>

      {/* ================= GLOBAL ================= */}
      <main className="bg-slate-950 text-slate-300 font-sans selection:bg-orange-500/30 selection:text-white">

        {/* ================= NAVBAR ================= */}
        <header
          className={`fixed ${
            showNavbar ? "top-4" : "-top-24"
          } transition-all duration-500 ease-in-out left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[800px] bg-slate-900/80 backdrop-blur-2xl backdrop-saturate-200 border border-slate-700/60 shadow-2xl shadow-black/50 z-50 rounded-full`}
        >
          <div className="flex items-center justify-between px-5 h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/avatar.png"
                alt="Logo Subur Maju Printing"
                width={40}
                height={40}
                className="rounded-full object-cover border border-orange-500/30"
              />
              <div className="hidden sm:flex flex-col justify-center mt-1">
                <div className="font-semibold text-[15px] tracking-tight text-white leading-none">
                  Subur Maju Printing
                </div>
              </div>
            </div>

            <nav aria-label="Navigasi utama" className="flex items-center gap-1 md:gap-2 text-[13px] font-medium text-slate-300">
              <a href="#layanan" className="px-4 py-2 rounded-full hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300">
                Layanan
              </a>
              <a href="#katalog" className="px-4 py-2 rounded-full hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300">
                Katalog
              </a>
              <a href="#lokasi" className="px-4 py-2 rounded-full hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300">
                Lokasi
              </a>
            </nav>
          </div>
        </header>

        {/* ================= HERO ================= */}
        <section
          aria-labelledby="hero-title"
          className="relative pt-32 pb-24 flex items-center min-h-[92vh] overflow-hidden bg-slate-950"
        >
          <div className="absolute inset-0 z-0">
            {backgroundImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentBg
                    ? "opacity-100 scale-105"
                    : "opacity-0 scale-100 pointer-events-none"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  priority={index === 0}         
                  quality={75}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-900/50 backdrop-contrast-125" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="text-white max-w-3xl">
              <p className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-6 text-orange-300">
                Subur Maju Printing • Jakarta Timur
              </p>

              <h1
                id="hero-title"
                className="text-5xl md:text-7xl font-extrabold leading-tight md:leading-none tracking-tight mb-6 text-white drop-shadow-md"
              >
                Digital Printing Jakarta Timur 24 Jam
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                  Hardcover Skripsi & Percetakan
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed drop-shadow-sm">
                Subur Maju Printing melayani digital printing 24 jam di Jakarta Timur,
                termasuk hardcover skripsi, banner, spanduk, stiker, brosur, <strong>undangan digital berbasis web</strong>,
                dan berbagai kebutuhan percetakan dengan kualitas terbaik.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={waLink(
                    "Halo Kak, saya mau konsultasi mengenai kebutuhan cetak di Subur Maju Printing.\n\nProduk:\nJumlah:\nUkuran:\nDeadline:"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-[0_0_30px_-5px_rgba(234,88,12,0.4)] hover:shadow-[0_0_40px_-5px_rgba(234,88,12,0.6)] hover:-translate-y-1"
                >
                  Konsultasi Gratis
                </a>

                <a
                  href="#katalog"
                  className="border border-slate-700 bg-slate-900/70 hover:bg-slate-800/80 hover:border-orange-500/30 font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 text-slate-200 backdrop-blur-sm"
                >
                  Lihat Katalog
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="layanan" aria-labelledby="layanan-title" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 id="layanan-title" className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                Layanan Kami
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto rounded-full mb-6" />
              <p className="text-slate-400 max-w-2xl mx-auto text-[17px] font-medium leading-relaxed tracking-tight">
                Berbagai kebutuhan percetakan untuk bisnis, akademik, dan keperluan sehari-hari Anda.
              </p>
            </div>

            <div className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-10 pt-4 scrollbar-hide px-4 -mx-4 md:px-0 md:mx-0">
              {dataLayanan.map((item, index) => (
                <article
                  key={index}
                  className="group min-w-[85%] sm:min-w-[60%] lg:min-w-[31.333%] snap-center bg-slate-950/70 backdrop-blur-sm rounded-[2rem] border border-slate-800 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.15)] transition-all duration-500 flex flex-col overflow-hidden"
                >
                  <div className="relative h-64 md:h-72 w-full overflow-hidden">
                    <Image
                      src={item.gambar}
                      alt={`Layanan ${item.judul} Subur Maju Printing`}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 31vw"
                      quality={80}
                      className="object-cover transform group-hover:scale-110 opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  </div>

                  <div className="p-8 lg:p-10 flex flex-col flex-grow relative bg-transparent z-10 -mt-10">
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-orange-400 transition-colors duration-300 tracking-tight drop-shadow-md">
                      {item.judul}
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-medium mb-8 flex-grow">
                      {item.deskripsi}
                    </p>
                    <div className="mt-auto flex items-center text-sm font-bold text-orange-500 tracking-wider uppercase overflow-hidden">
                      <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                        Pesan Sekarang
                      </span>
                      <svg
                        className="w-5 h-5 ml-2 transform -translate-x-8 group-hover:translate-x-0 transition-all duration-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= KATALOG ================= */}
        <div className="bg-slate-950">
          <Catalog />
        </div>

        {/* ================= PROMO UNDANGAN DIGITAL (NEW) ================= */}
        <section aria-labelledby="undangan-promo" className="py-16 px-6 bg-slate-950 relative overflow-hidden border-t border-slate-800/50">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
              
              {/* Efek kilau di background */}
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none" />
              
              <div className="md:w-2/3 relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold tracking-widest uppercase border border-amber-500/20 mb-5">
                  ✨ Layanan Baru
                </span>
                <h2 id="undangan-promo" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
                  Buat Undangan Pernikahan <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Berbasis Web</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
                  Tinggalkan cara lama. Bagikan momen bahagiamu dengan undangan digital elegan yang bisa diakses dari mana saja. Dilengkapi fitur buku tamu, countdown acara, dan integrasi Google Maps otomatis.
                </p>
                <div className="flex flex-wrap gap-4">
                  {/* Link demo sudah disesuaikan ke Lure-Annabey */}
                  <Link href="/undangan/Lure-Annabey" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all">
                    Lihat Demo Desain
                  </Link>
                  <a href={waLink("Halo Kak, saya mau konsultasi pembuatan Undangan Pernikahan Digital Website.")} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
              
        
                            {/* Mockup Visual Hape - Tema Floral Gold (Sesuai Referensi) */}
              <div className="md:w-1/3 w-full relative z-10 flex justify-center mt-12 md:mt-0">
                <Link href="/undangan/Lure-Annabey" className="block relative group">
                  
                  {/* Efek Cahaya Background Luar */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-200/50 to-orange-100/50 rounded-[3.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-700"></div>

                  {/* Frame HP */}
                  <div className="w-[280px] h-[560px] bg-[#FCFAF8] border-[6px] border-slate-800 rounded-[3rem] overflow-hidden relative shadow-2xl transform transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:rotate-0 rotate-2 ring-4 ring-slate-900/30">

                    {/* Notch / Poni Kamera HP */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-40 flex items-center justify-end px-2 shadow-sm">
                       <div className="w-2 h-2 bg-indigo-900/80 rounded-full"></div>
                    </div>

                    {/* Ornamen Daun Kering (Pojok Atas & Bawah) */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                      <div className="absolute -top-4 -left-6 w-24 h-24 bg-[url('https://images.unsplash.com/photo-1603893641258-0051cb7e5ac5?q=80&w=200')] bg-cover opacity-20 mix-blend-multiply rotate-45 rounded-full blur-[1px]"></div>
                      <div className="absolute -top-4 -right-6 w-24 h-24 bg-[url('https://images.unsplash.com/photo-1603893641258-0051cb7e5ac5?q=80&w=200')] bg-cover opacity-20 mix-blend-multiply -rotate-90 rounded-full blur-[1px]"></div>
                      <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[url('https://images.unsplash.com/photo-1603893641258-0051cb7e5ac5?q=80&w=200')] bg-cover opacity-20 mix-blend-multiply -rotate-45 rounded-full blur-[1px]"></div>
                      <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[url('https://images.unsplash.com/photo-1603893641258-0051cb7e5ac5?q=80&w=200')] bg-cover opacity-20 mix-blend-multiply rotate-180 rounded-full blur-[1px]"></div>
                    </div>

                    {/* Konten Undangan dalam Layar HP */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center pt-8 pb-12 px-5 text-center overflow-y-auto scrollbar-hide text-stone-700">

                      {/* Foto Couple Kartun/Animasi 2D dengan Masking Awan */}
                      <div className="relative w-28 h-28 mt-2 mb-3">
                        <div className="absolute inset-0 bg-[#F2E8D9] rounded-full opacity-50 blur-md transform scale-110"></div>
                        <img
                          src="https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?auto=format&fit=crop&q=80&w=300" 
                          alt="Ilustrasi Pasangan"
                          className="w-full h-full object-cover p-1 bg-white shadow-sm"
                          style={{ clipPath: 'polygon(50% 0%, 85% 10%, 100% 50%, 85% 90%, 50% 100%, 15% 90%, 0% 50%, 15% 10%)', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
                        />
                      </div>

                      {/* Teks Pembuka */}
                      <p className="text-[5.5px] font-medium leading-[1.4] mb-3 px-1 text-stone-600">
                        Dengan memohon rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra - putri kami:
                      </p>

                      {/* Nama Lure */}
                      <h3 className="text-xl font-serif italic text-[#A47E45] mt-1 mb-0.5" style={{ textShadow: '0 1px 1px rgba(164, 126, 69, 0.2)' }}>
                        Lure, SE
                      </h3>
                      <p className="text-[5.5px] font-medium text-stone-600 mb-1.5">Putri dari Bapak H. Fulan & Ibu Hj. Fulanah</p>

                      <span className="text-[10px] font-serif italic text-stone-500 my-0.5">&</span>

                      {/* Nama Annabey */}
                      <h3 className="text-xl font-serif italic text-[#A47E45] mt-1 mb-0.5" style={{ textShadow: '0 1px 1px rgba(164, 126, 69, 0.2)' }}>
                        Annabey, SE
                      </h3>
                      <p className="text-[5.5px] font-medium text-stone-600 mb-3">Putra dari Bapak Fulan & Ibu Fulanah</p>

                      {/* Ornamen Pemisah Bunga Kecil */}
                      <div className="flex items-center justify-center gap-1 mb-3 opacity-80">
                         <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#8BA087]"></div>
                         <span className="text-[6px] text-[#8BA087]">🌿</span>
                         <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#8BA087]"></div>
                      </div>

                      {/* Teks Protokol Kesehatan */}
                      <p className="text-[5px] font-medium leading-[1.4] px-1 mb-4 text-stone-600">
                        Untuk menjaga kesehatan semua, acara akan dilaksanakan sesuai protokol Kami sekeluarga memohon maaf karena tidak bisa mengundang banyak tamu Melainkan hanya sanak keluarga dan kerabat terdekat
                      </p>

                      {/* Jadwal Acara */}
                      <div className="w-full flex justify-between px-2 mb-4">
                        <div className="text-center w-1/2 pr-1">
                          <h4 className="text-[11px] font-serif italic text-[#A47E45] mb-1.5">Akad Nikah</h4>
                          <p className="text-[5px] font-bold text-stone-700 mb-0.5">JUM'AT, 09 OKTOBER 2026</p>
                          <p className="text-[5px] text-stone-700">10.00 WIB</p>
                        </div>
                        <div className="text-center w-1/2 pl-1 border-l border-stone-300/50">
                          <h4 className="text-[11px] font-serif italic text-[#A47E45] mb-1.5">Intimate Wedding</h4>
                          <p className="text-[5px] font-bold text-stone-700 mb-0.5">SABTU, 10 OKTOBER 2026</p>
                          <p className="text-[5px] text-stone-700">13.00 WIB - Selesai</p>
                        </div>
                      </div>

                      {/* QR Code */}
                      <div className="flex flex-col items-center mb-3">
                        <p className="text-[4px] font-bold tracking-widest text-stone-500 mb-1">SCAN THIS</p>
                        <div className="p-0.5 bg-white border border-stone-300 shadow-sm">
                          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://suburmaju.com/undangan/Lure-Annabey" alt="QR Code" className="w-9 h-9" />
                        </div>
                      </div>

                      {/* Alamat & NB */}
                      <p className="text-[5.5px] font-bold text-stone-700 mb-1.5 px-2 leading-[1.3]">
                        Jl Raya Kediri No 77 Ds Pagu Kec. Wates Kab Kediri
                      </p>
                      <p className="text-[5px] text-stone-500 font-medium px-2 leading-[1.3]">
                        NB: Diharapkan Untuk Semua Tamu Undangan Agar Menggunakan Masker
                      </p>

                    </div>

                    {/* Tombol Aksi Melayang di Bawah HP */}
                    <div className="absolute bottom-3 left-0 w-full flex justify-center z-20">
                      <div className="px-5 py-2 bg-gradient-to-r from-[#B49157] to-[#CBA365] text-white text-[8px] font-bold tracking-widest uppercase rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-[#F2E8D9]/50">
                        Buka Undangan
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
</div>
          </div>
        </section>


        {/* ================= WHY US ================= */}
        <section id="kenapa-kami" aria-labelledby="kenapa-title" className="py-24 px-6 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="kenapa-title" className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                Kenapa pilih kami?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {dataKenapaKami.map((item, index) => (
                <article key={index} className="group relative bg-slate-950/70 backdrop-blur-sm rounded-3xl rounded-br-[80px] p-8 lg:p-10 border border-slate-800 hover:border-orange-500/40 hover:bg-slate-950 shadow-lg shadow-black/20 hover:shadow-[0_8px_30px_rgba(234,88,12,0.08)] transition-all duration-500 overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/0 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />
                  <div className="absolute top-8 right-8 text-slate-700 group-hover:text-orange-400 group-hover:rotate-180 transition-all duration-700">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-orange-500 to-amber-400 rounded-r-full group-hover:h-1/2 transition-all duration-500" />
                  <div className="relative z-10">
                    <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-orange-400 transition-colors duration-300 pr-8">
                      {item.judul}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {item.deskripsi}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= KLIEN ================= */}
        <section id="klien" aria-labelledby="klien-title" className="py-20 bg-slate-950 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center mb-10">
            <p id="klien-title" className="text-xs md:text-sm font-bold tracking-widest text-orange-400 uppercase">
              Pernah Melayani Kebutuhan Cetak untuk Berbagai Instansi
            </p>
          </div>
          <div className="relative w-full overflow-hidden whitespace-nowrap py-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="inline-flex animate-marquee items-center gap-16">
              {[...dataKlien, ...dataKlien, ...dataKlien].map((klien, index) => (
                <div key={`${klien.nama}-${index}`} className="flex flex-col items-center justify-center gap-3 px-6 group">
                  <div className="h-20 w-36 flex items-center justify-center">
                    <img
                      src={klien.logo}
                      alt={`Logo ${klien.nama}`}
                      className="max-h-20 max-w-[140px] w-auto object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors text-center whitespace-nowrap">
                    {klien.nama}
                  </span>
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
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
            will-change: transform;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee {
              animation: none;
            }
          }
        `}</style>

        {/* ================= LOKASI ================= */}
        <section id="lokasi" aria-labelledby="lokasi-title" className="py-24 px-6 bg-slate-900 relative">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 id="lokasi-title" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Temukan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">
                  Lokasi Kami
                </span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Kunjungi toko kami atau hubungi secara online. Kami siap melayani kebutuhan cetak Anda kapan saja.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <article className="bg-slate-950/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_8px_40px_rgba(234,88,12,0.12)]">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">Subur Maju Printing</h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold tracking-wide border border-green-500/20">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Buka 24 Jam
                  </span>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Alamat Toko</h4>
                      <address className="not-italic text-slate-400 leading-relaxed text-sm">
                        Jl. Waru No.15C, RT.2/RW.9,<br />
                        Rawamangun, Kec. Pulo Gadung,<br />
                        Kota Jakarta Timur 13220
                      </address>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">WhatsApp / Telepon</h4>
                      <p className="text-slate-400 text-sm">0822-4692-6544</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-slate-800">
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    Spesialis percetakan Jakarta Timur. Melayani <strong className="text-slate-300 font-medium">hardcover skripsi, digital printing, banner, stiker, undangan, dan brosur</strong> dengan kualitas premium.
                  </p>
                  <a href="https://maps.google.com/?q=Jl.+Waru+No.+15C+Rawamangun+Jakarta+Timur" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 shadow-[0_0_20px_-5px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_-5px_rgba(234,88,12,0.6)]">
                    Buka di Google Maps
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </article>
              <div className="relative group h-full min-h-[400px]">
                <div className="absolute -inset-3 bg-gradient-to-tr from-orange-600 to-amber-400 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-25 transition duration-500" />
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-slate-700 bg-slate-900">
                  <iframe
                    title="Lokasi Subur Maju Printing di Google Maps"
                    src="https://maps.google.com/maps?q=Jl.%20Waru%20No.%2015C%20Rawamangun%20Jakarta%20Timur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full min-h-[450px] opacity-90 group-hover:opacity-100 transition-opacity"
                    style={{ border: 0, filter: "contrast(1.1) opacity(0.9)" }}
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
        <section aria-labelledby="cta-title" className="py-24 px-6 bg-slate-950">
          <div className="max-w-5xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-35 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-[3rem] px-8 py-20 overflow-hidden shadow-2xl border border-slate-800 flex flex-col items-center text-center">
              <div className="absolute top-0 -left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-screen filter blur-[120px] opacity-15 pointer-events-none" />
              <div className="absolute bottom-0 -right-20 w-72 h-72 bg-amber-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide border border-orange-500/20 mb-8">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Respon Cepat 24 Jam
                </span>
                <h2 id="cta-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                  Siap Cetak{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                    Sekarang?
                  </span>
                </h2>
                <p className="mt-4 text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                  Tidak perlu repot datang ke toko. Kirim file Anda dan konsultasikan kebutuhan cetak langsung melalui WhatsApp.
                </p>
                <Link
                  href="/pesan"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-8 py-5 rounded-2xl text-lg font-bold transition-all duration-300 shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_-15px_rgba(249,115,22,0.6)] hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konsultasi & Order Sekarang
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 relative overflow-hidden mt-[-2px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
            <div className="grid md:grid-cols-12 gap-12 lg:gap-8">
              <div className="md:col-span-5 lg:col-span-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-orange-500/20 shadow-xl shadow-black/30">
                    <Image
                      src="/avatar.png"
                      alt="Logo Subur Maju Printing"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-white tracking-tight">
                      Subur Maju<span className="text-orange-500">.</span>
                    </h3>
                    <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mt-1">
                      Digital Printing 24 Jam
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 pr-4">
                  Spesialis percetakan modern di Jakarta Timur. Melayani kebutuhan akademik, bisnis, personal, dan pembuatan undangan website dengan teknologi terbaru dan hasil premium.
                </p>
                <div className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Online 24/7
                  </span>
                  <span>•</span>
                  <span>Fast Response</span>
                </div>
              </div>

              <div className="md:col-span-4 lg:col-span-4 lg:pl-8">
                <h3 className="font-semibold text-lg text-white mb-6">Hubungi Kami</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-9 h-9 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 text-orange-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <address className="not-italic text-slate-400 text-sm leading-relaxed">
                      <strong className="text-slate-200 font-medium block mb-1">Workshop Rawamangun</strong>
                      Jl. Waru No.15C, RT.2/RW.9,<br />
                      Pulo Gadung, Jakarta Timur 13220
                    </address>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 text-orange-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-slate-200 font-medium block text-sm mb-0.5">WhatsApp / Telepon</strong>
                      <p className="text-slate-400 text-sm">0822-4692-6544</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-3 lg:col-span-4">
                <h3 className="font-semibold text-lg text-white mb-6">Layanan Populer</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 text-sm text-slate-400">
                  {["Hardcover Skripsi", "Digital Printing", "Banner & Spanduk", "Stiker & Label", "Brosur & Flyer", "Undangan Digital Web"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 group cursor-pointer hover:text-orange-400 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600/50 group-hover:bg-orange-400 group-hover:scale-150 transition-all" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 bg-slate-950/50">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
              <p>© {new Date().getFullYear()} Subur Maju Printing. All Rights Reserved.</p>
              <p className="flex items-center gap-1.5 tracking-wide">
                Digital Presence by <span className="font-semibold text-orange-400 ml-1 hover:text-orange-300 transition-colors cursor-pointer">LURE</span>
              </p>
            </div>
          </div>
        </footer>

        {/* ================= FLOATING BUTTON ================= */}
        <button
          onClick={() => setIsSmartOrderOpen(true)}
          aria-label="Buka form pesanan pintar"
          className="fixed bottom-8 right-8 bg-gradient-to-br from-orange-500 to-orange-700 hover:from-orange-400 hover:to-orange-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-[0_10px_40px_-10px_rgba(234,88,12,0.8)] z-40 transition-all duration-300 hover:-translate-y-1 group border border-orange-400/50"
        >
          <span aria-hidden="true" className="group-hover:scale-110 transition-transform">💬</span>
          <span aria-hidden="true" className="absolute inset-0 rounded-2xl border-4 border-orange-400/80 animate-ping opacity-75" />
          <span aria-hidden="true" className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900" />
        </button>

        {/* ================= SMART ORDER MODAL ================= */}
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500 ${isSmartOrderOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <div className={`absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-500 ${isSmartOrderOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsSmartOrderOpen(false)} aria-hidden="true" />
          <div className={`relative w-full max-w-2xl transform transition-all duration-500 ease-out ${isSmartOrderOpen ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-10 opacity-0"}`}>
            <button onClick={() => setIsSmartOrderOpen(false)} className="absolute -top-12 right-0 md:-right-12 text-slate-400 hover:text-orange-400 transition-colors" aria-label="Tutup form">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <SmartOrder onClose={() => setIsSmartOrderOpen(false)} />
          </div>
        </div>
      </main>
    </>
  );
}
