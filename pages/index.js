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

        {/* ================= LANDING PAGE LAYANAN ================= */}
        <section aria-labelledby="layanan-detail-title" className="relative py-20 px-6 bg-slate-950 border-y border-slate-800/70">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[110px] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">Layanan Unggulan</span>
              <h2 id="layanan-detail-title" className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-4 mb-4">Cari Layanan yang Anda Butuhkan</h2>
              <p className="text-slate-400 leading-relaxed">Pilih layanan untuk melihat informasi lebih lengkap, opsi pengerjaan, dan cara konsultasi dengan tim Subur Maju Printing.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Hardcover Skripsi", description: "Jilid skripsi dan tugas akhir.", href: "/hardcover-skripsi-jakarta-timur", tag: "Akademik" },
                { title: "Banner & Spanduk", description: "Media promosi untuk toko, bisnis, dan acara.", href: "/banner-jakarta-timur", tag: "Promosi" },
                { title: "Stiker & Label", description: "Stiker produk, kemasan, dan branding.", href: "/stiker-jakarta-timur", tag: "Branding" },
                { title: "Brosur & Flyer", description: "Materi promosi cetak untuk bisnis dan acara.", href: "/brosur-jakarta-timur", tag: "Marketing" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-slate-900 hover:shadow-xl hover:shadow-orange-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
                  <span className="mb-5 w-fit rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300">{item.tag}</span>
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-orange-400">{item.title}</h3>
                  <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-400">{item.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-400">Lihat layanan <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= KATALOG ================= */}
        <div className="bg-slate-950">
          <Catalog />
        </div>

                   {/* ================= UNDANGAN DIGITAL ================= */}
        <section
          id="undangan"
          aria-labelledby="undangan-promo"
          className="relative isolate overflow-hidden border-y border-[#e7dfd1] bg-[#f7f3eb] px-5 py-16 text-[#25352d] sm:px-8 sm:py-20 lg:py-28"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#d9c39a]/35 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 -left-24 h-96 w-96 rounded-full bg-[#b5c1ad]/30 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div className="order-2 max-w-2xl lg:order-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c7b58e]/70 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b7043] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9b8050]" />
                Ruang Hati · by Subur Maju
              </div>

              <p className="mb-3 font-serif text-lg italic text-[#8a927f] sm:text-xl">
                Sebuah awal, cerita seumur hidup.
              </p>
              <h2 id="undangan-promo" className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#26372e] sm:text-5xl lg:text-6xl">
                Undangan yang terasa <span className="font-serif font-normal italic text-[#9a7a45]">seistimewa</span> hari kalian.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#69736a] sm:text-lg">
                Ceritakan hari bahagia lewat undangan website yang elegan, mudah dibagikan, dan nyaman dibuka dari ponsel. Dibuat personal untuk kisah kalian—dengan detail acara, peta lokasi, RSVP, dan hitung mundur.
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-x-5 gap-y-4 border-y border-[#dcd4c6] py-5 sm:grid-cols-3">
                <div>
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a8055]">01</span>
                  <span className="text-sm font-semibold text-[#35463a]">Desain personal</span>
                </div>
                <div>
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a8055]">02</span>
                  <span className="text-sm font-semibold text-[#35463a]">RSVP & lokasi</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a8055]">03</span>
                  <span className="text-sm font-semibold text-[#35463a]">Mudah dibagikan</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/undangan-digital"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#2d4034] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#314536]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#3c5544] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9a8055] focus-visible:ring-offset-2"
                >
                  Jelajahi koleksi template
                  <span aria-hidden="true" className="text-lg">↗</span>
                </Link>
                <a
                  href={waLink("Halo Subur Maju, saya ingin konsultasi undangan pernikahan digital dari Ruang Hati. Boleh lihat pilihan template dan paketnya?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#c9c1b2] bg-white/55 px-7 py-4 text-sm font-semibold text-[#35463a] transition duration-300 hover:border-[#8d9a86] hover:bg-white"
                >
                  Konsultasi via WhatsApp
                </a>
              </div>
              <p className="mt-4 text-xs leading-5 text-[#7d857b]">
                Pilih desain, sesuaikan detail acara, lalu bagikan tautannya kepada keluarga dan teman.
              </p>
            </div>

            <div className="order-1 relative mx-auto flex w-full max-w-[440px] items-center justify-center py-2 lg:order-2 lg:max-w-none">
              <div aria-hidden="true" className="absolute inset-x-8 top-10 bottom-10 rounded-[3rem] bg-[#d9c9a9]/50 blur-3xl" />
              <div aria-hidden="true" className="absolute right-0 top-10 hidden rounded-2xl border border-white/80 bg-white/75 px-4 py-3 shadow-lg backdrop-blur-md sm:block">
                <span className="block text-[10px] uppercase tracking-[0.18em] text-[#9a8055]">Made for your story</span>
                <span className="mt-1 block font-serif text-sm italic text-[#405343]">Thoughtfully yours</span>
              </div>
              <div aria-hidden="true" className="absolute bottom-12 left-0 hidden rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-md sm:block">
                <span className="flex items-center gap-2 text-xs font-semibold text-[#405343]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e8ecdf] text-[#687b62]">♡</span>
                  RSVP & detail acara
                </span>
              </div>

              <Link href="/undangan-digital" aria-label="Lihat koleksi undangan digital Ruang Hati" className="group relative block w-[min(78vw,300px)] rounded-[2.6rem] border-[7px] border-[#29332d] bg-[#29332d] p-[5px] shadow-[0_35px_90px_-28px_rgba(40,49,39,0.5)] transition duration-700 hover:-translate-y-2 sm:w-[300px]">
                <div className="absolute left-1/2 top-3 z-20 h-5 w-[76px] -translate-x-1/2 rounded-full bg-[#202823]" />
                <div className="relative min-h-[470px] overflow-hidden rounded-[2.1rem] bg-[#f8f3e8] sm:min-h-[500px]">
                  <div className="relative h-[245px] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85"
                      alt="Dekorasi pernikahan bernuansa romantis sebagai contoh desain undangan"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#f8f3e8]" />
                    <div className="absolute left-0 right-0 top-10 text-center text-white">
                      <span className="text-[8px] uppercase tracking-[0.32em]">The Wedding Of</span>
                    </div>
                  </div>
                  <div className="relative -mt-12 px-5 pb-7 text-center">
                    <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#c9b58d] bg-[#f8f3e8] font-serif text-lg italic text-[#9a8055]">R</span>
                    <p className="font-serif text-[31px] italic leading-none tracking-[-0.04em] text-[#56694f]">Raisa <span className="text-[#b29a6d]">&</span> Arka</p>
                    <p className="mt-3 text-[8px] font-medium uppercase tracking-[0.24em] text-[#8d8b79]">Minggu, 18 Oktober 2026</p>
                    <div className="mx-auto my-5 flex max-w-[170px] items-center gap-3">
                      <span className="h-px flex-1 bg-[#d5c7aa]" />
                      <span className="text-[10px] text-[#9a8055]">✦</span>
                      <span className="h-px flex-1 bg-[#d5c7aa]" />
                    </div>
                    <p className="mx-auto max-w-[190px] font-serif text-sm italic leading-6 text-[#777d6c]">Dengan penuh cinta, kami mengundang Anda untuk menjadi bagian dari hari istimewa kami.</p>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#405343] px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white shadow-md">
                      Buka undangan <span aria-hidden="true">↗</span>
                    </div>
                    <p className="mt-4 text-[8px] uppercase tracking-[0.2em] text-[#a49b87]">A little story, forever remembered</p>
                  </div>
                </div>
              </Link>
              <span aria-hidden="true" className="absolute -bottom-1 right-4 font-serif text-5xl italic text-[#b9a47d]/70 sm:right-10">♡</span>
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
