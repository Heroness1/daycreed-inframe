import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Instrument_Sans, Newsreader } from "next/font/google";
import Catalog from "../components/Catalog";
import SmartOrder from "../components/SmartOrder";
import { dataLayanan, dataKenapaKami, dataKlien } from "../data/printData";

/* ============================================================
   FONT
   Newsreader (serif, warisan dunia cetak/penerbitan) untuk judul,
   Instrument Sans untuk teks biasa.
   ============================================================ */
const display = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const D = "font-[family-name:var(--font-display)]";
const SANS = "font-[family-name:var(--font-sans)]";

/* ============================================================
   DATA BISNIS (satu sumber untuk semua tempat)
   ============================================================ */
const BUSINESS = {
  name: "Subur Maju Printing",
  wa: "6282246926544",
  phoneDisplay: "0822-4692-6544",
  phoneTel: "+6282246926544",
  street: "Jl. Waru No.15C, RT.2/RW.9, Rawamangun, Kec. Pulo Gadung",
  city: "Kota Jakarta Timur",
  region: "DKI Jakarta",
  postal: "13220",
  mapsQuery: "Jl. Waru No. 15C Rawamangun Jakarta Timur",
};

const SITE_URL = "https://www.suburmajuprinting.com/";
// Ganti dengan gambar khusus 1200x630 kalau sudah ada, mis. `${SITE_URL}og-image.jpg`
const OG_IMAGE = `${SITE_URL}avatar.png`;
// Pastikan route ini ada di folder pages/
const DEMO_HREF = "/undangan-digital";
const INVITATION_THEMES = [
  "Nusantara Islamic",
  "Japanese Minimal",
  "Wedding Editorial",
  "Pawiwahan Jawa",
  "Royal Jawa",
  "Sunda Romance",
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=1200";
const COUPLE_IMAGE =
  "https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?auto=format&fit=crop&q=80&w=300";

const waLink = (text) =>
  `https://wa.me/${BUSINESS.wa}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.mapsQuery)}`;
const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  BUSINESS.mapsQuery
)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

const EASE = [0.16, 1, 0.3, 1];
const PRESS = [0.65, 0, 0.35, 1];

/* ============================================================
   IKON
   ============================================================ */
const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ArrowUpRight = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const CheckIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ChatIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5m-9 6l1.6-4.2A8 8 0 1112 20a8 8 0 01-3.6-.9L4 20z" />
  </svg>
);

const CloseIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MenuIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
  </svg>
);

/* ============================================================
   STYLE GLOBAL (scroll halus + marquee)
   ============================================================ */
function GlobalStyles() {
  return (
    <style jsx global>{`
      html {
        scroll-behavior: smooth;
      }
      @keyframes sm-marquee {
        to {
          transform: translateX(-50%);
        }
      }
      .sm-marquee-track {
        display: flex;
        width: max-content;
        animation: sm-marquee 45s linear infinite;
      }
      .sm-marquee:hover .sm-marquee-track {
        animation-play-state: paused;
      }
      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
        .sm-marquee-track {
          animation: none;
        }
      }
    `}</style>
  );
}

/* ============================================================
   SEO
   ============================================================ */
function SeoHead() {
  const title = "Digital Printing Jakarta Timur 24 Jam | Subur Maju Printing";
  const desc =
    "Subur Maju Printing melayani digital printing 24 jam di Jakarta Timur. Hardcover skripsi, banner, spanduk, stiker, brosur, undangan digital website, dan berbagai kebutuhan percetakan.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#business`,
    name: BUSINESS.name,
    image: OG_IMAGE,
    url: SITE_URL,
    telephone: BUSINESS.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postal,
      addressCountry: "ID",
    },
    geo: { "@type": "GeoCoordinates", latitude: -6.1923, longitude: 106.8834 },
    hasMap: mapsHref,
    areaServed: "Jakarta Timur",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={BUSINESS.name} />
      <meta name="theme-color" content="#ffffff" />
      <link rel="canonical" href={SITE_URL} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:locale" content="id_ID" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script
        key="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}

/* ============================================================
   NAVBAR
   ============================================================ */
const NAV_LINKS = [
  { href: "#layanan", label: "Layanan" },
  { href: "#undangan", label: "Undangan web" },
  { href: "#katalog", label: "Katalog" },
  { href: "#lokasi", label: "Lokasi" },
];

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160 && !menuOpen);
    setScrolled(y > 12);
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.header
        animate={{ y: hidden ? "-160%" : 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        className={`pointer-events-auto w-full max-w-3xl rounded-3xl border bg-white/75 backdrop-blur-xl transition-[box-shadow,border-color] duration-500 ${
          scrolled
            ? "border-slate-200 shadow-[0_10px_40px_-12px_rgba(15,23,42,0.18)]"
            : "border-slate-200/60 shadow-none"
        }`}
      >
        <div className="flex h-14 items-center justify-between pl-4 pr-2 md:h-16 md:pl-5">
          <Link href="/" className="flex items-center gap-3" aria-label="Subur Maju Printing, ke beranda">
            <Image
              src="/avatar.png"
              alt=""
              width={36}
              height={36}
              className="rounded-full border border-slate-200 object-cover"
            />
            <span className={`${D} text-lg font-semibold tracking-tight text-slate-950`}>Subur Maju</span>
          </Link>

          <nav aria-label="Navigasi utama" className="hidden items-center gap-1 text-sm font-medium text-slate-600 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="rounded-full px-4 py-2 transition-colors hover:bg-slate-100 hover:text-slate-950">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <a
              href={waLink("Halo Kak, saya mau tanya kebutuhan cetak di Subur Maju Printing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pesan
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              className="grid h-10 w-10 place-items-center rounded-full text-slate-700 hover:bg-slate-100 md:hidden"
            >
              {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.nav
              aria-label="Menu seluler"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-hidden md:hidden"
            >
              <ul className="border-t border-slate-200 p-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-100"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}

/* ============================================================
   HERO
   Satu momen utama: kertas "keluar" dari mesin cetak, ditandai garis
   print-head oranye, lalu judul muncul baris demi baris.
   ============================================================ */
function CropMarks() {
  const base = "pointer-events-none absolute h-4 w-4 border-slate-900/60";
  return (
    <>
      <span aria-hidden="true" className={`${base} -left-4 -top-4 border-b border-r`} />
      <span aria-hidden="true" className={`${base} -right-4 -top-4 border-b border-l`} />
      <span aria-hidden="true" className={`${base} -bottom-4 -left-4 border-r border-t`} />
      <span aria-hidden="true" className={`${base} -bottom-4 -right-4 border-l border-t`} />
    </>
  );
}

function CmykBar() {
  const colors = ["#00AEEF", "#EC008C", "#FFF200", "#0F172A"];
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      {colors.map((c, i) => (
        <motion.span
          key={c}
          className="h-3 w-3 rounded-[2px] border border-slate-900/10"
          style={{ backgroundColor: c }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.7 + i * 0.1, duration: 0.4, ease: EASE }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const lines = ["Digital printing", "Jakarta Timur,", "buka 24 jam."];

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2.5 text-sm font-medium text-slate-600"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Workshop Rawamangun, buka setiap hari
          </motion.p>

          <h1
            id="hero-title"
            aria-label="Digital printing Jakarta Timur, buka 24 jam."
            className={`${D} text-[2.9rem] font-medium leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-[5.25rem]`}
          >
            {lines.map((line, i) => (
              <span key={line} aria-hidden="true" className="block overflow-hidden pb-[0.12em]">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.55 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8, ease: EASE }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Hardcover skripsi, banner dan spanduk, stiker, brosur, hingga undangan pernikahan berbasis web. Kirim
            file lewat WhatsApp, kami cetak kapan saja Anda butuh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <a
              href={waLink(
                "Halo Kak, saya mau konsultasi mengenai kebutuhan cetak di Subur Maju Printing.\n\nProduk:\nJumlah:\nUkuran:\nDeadline:"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-slate-950 px-7 py-4 text-[15px] font-semibold text-white shadow-lg shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-orange-900/20"
            >
              <WhatsAppIcon />
              Konsultasi lewat WhatsApp
            </a>
            <a
              href="#layanan"
              className="py-4 text-[15px] font-semibold text-slate-900 underline decoration-slate-300 decoration-2 underline-offset-8 transition-colors hover:decoration-orange-600"
            >
              Lihat layanan
            </a>
          </motion.div>
        </div>

        {/* Lembar cetak */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="relative">
            <CropMarks />
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-sm bg-slate-100 shadow-2xl shadow-slate-900/15"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.5, ease: PRESS, delay: 0.2 }}
            >
              <Image
                src={HERO_IMAGE}
                alt="Hasil digital printing di Subur Maju Printing"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </motion.div>
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-5 h-0.5 bg-orange-600 shadow-[0_0_14px_2px_rgba(234,88,12,0.5)]"
              initial={{ top: "0%", opacity: 1 }}
              animate={{ top: "100%", opacity: 0 }}
              transition={{
                top: { duration: 1.5, ease: PRESS, delay: 0.2 },
                opacity: { duration: 0.3, delay: 1.7 },
              }}
            />
          </div>
          <div className="mt-8">
            <CmykBar />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LAYANAN (bento; kartu = link WhatsApp per produk)
   ============================================================ */
function ServiceCard({ item, featured }) {
  return (
    <motion.a
      href={waLink(`Halo Kak, saya mau pesan ${item.judul}.\n\nJumlah:\nUkuran:\nDeadline:`)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE } }}
      className={`group flex flex-col overflow-hidden border border-slate-200 bg-white transition-shadow duration-500 hover:shadow-2xl hover:shadow-slate-900/10 ${
        featured ? "rounded-3xl lg:col-span-2 lg:row-span-2" : "rounded-xl"
      }`}
    >
      <div className={`relative overflow-hidden bg-slate-100 ${featured ? "h-72 lg:h-[26rem]" : "h-52"}`}>
        <Image
          src={item.gambar}
          alt={`Layanan ${item.judul} Subur Maju Printing`}
          fill
          sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "p-8 lg:p-10" : "p-6"}`}>
        <h3 className={`${D} font-medium tracking-tight text-slate-950 ${featured ? "text-4xl" : "text-2xl"}`}>
          {item.judul}
        </h3>
        <p className={`mt-3 leading-relaxed text-slate-600 ${featured ? "max-w-xl text-base" : "text-[15px]"}`}>
          {item.deskripsi}
        </p>
        <div className="mt-auto flex items-center justify-between pt-8">
          <span className="text-sm font-semibold text-slate-900">Pesan lewat WhatsApp</span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white transition-colors duration-300 group-hover:bg-orange-600">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function Services() {
  // Kartu pertama dibuat besar hanya kalau jumlah layanan kelipatan 3,
  // supaya grid tidak berlubang.
  const useFeatured = dataLayanan.length % 3 === 0;

  return (
    <section id="layanan" aria-labelledby="layanan-title" className="scroll-mt-24 bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="layanan-title"
            className={`${D} text-4xl font-medium leading-[1.05] tracking-tight text-slate-950 md:col-span-7 md:text-6xl`}
          >
            Percetakan untuk kampus, bisnis, dan acara
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-slate-600 md:col-span-4 md:col-start-9">
            Mesin presisi tinggi untuk hasil yang tajam dan akurat. Pilih layanan, lalu kirim kebutuhan Anda lewat
            WhatsApp.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dataLayanan.map((item, i) => (
            <ServiceCard key={item.judul} item={item} featured={useFeatured && i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   UNDANGAN WEB + MOCKUP HP (miring mengikuti kursor, countdown hidup)
   ============================================================ */
function useDemoDate() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    // Tanggal demo selalu Sabtu, ±45 hari ke depan, jadi tidak pernah basi.
    const d = new Date();
    d.setDate(d.getDate() + 45);
    d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7));
    d.setHours(11, 0, 0, 0);
    setDate(d);
  }, []);
  return date;
}

function useCountdown(target) {
  const [left, setLeft] = useState(null);
  useEffect(() => {
    if (!target) return;
    const tick = () => setLeft(Math.max(0, target.getTime() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const p = (n) => String(n).padStart(2, "0");
  if (left === null) return { d: "00", h: "00", m: "00", s: "00" };
  return {
    d: p(Math.floor(left / 86400000)),
    h: p(Math.floor(left / 3600000) % 24),
    m: p(Math.floor(left / 60000) % 60),
    s: p(Math.floor(left / 1000) % 60),
  };
}

function PhoneMock({ date }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 140, damping: 16 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 140, damping: 16 });
  const cd = useCountdown(date);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const dateLabel = date
    ? date.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    : "Segera";

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex justify-center py-6 [perspective:1100px] lg:justify-end"
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
        <Link href={DEMO_HREF} aria-label="Lihat demo undangan pernikahan digital" className="block">
          <div
            aria-hidden="true"
            className="relative h-[580px] w-[286px] overflow-hidden rounded-[3rem] border-[7px] border-slate-800 bg-white shadow-[0_40px_90px_-20px_rgba(0,0,0,0.7)]"
          >
            <div className="absolute left-1/2 top-2.5 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
            <div className="flex h-full flex-col items-center px-6 pb-7 pt-12 text-center text-slate-700">
              <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md ring-1 ring-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={COUPLE_IMAGE} alt="" className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 text-[11px] text-slate-500">The Wedding Of</p>
              <p className={`${D} mt-1 text-[34px] italic leading-none text-orange-800`}>Lure</p>
              <p className={`${D} my-1 text-base italic text-slate-400`}>&amp;</p>
              <p className={`${D} text-[34px] italic leading-none text-orange-800`}>Annabey</p>

              <div className="mt-5 h-px w-10 bg-slate-300" />
              <p className="mt-4 text-[11px] font-semibold text-slate-800">{dateLabel}</p>

              <div className="mt-3 grid w-full grid-cols-4 gap-1.5">
                {[
                  ["Hari", cd.d],
                  ["Jam", cd.h],
                  ["Menit", cd.m],
                  ["Detik", cd.s],
                ].map(([label, val]) => (
                  <div key={label} className="rounded-lg bg-slate-100 py-2">
                    <p className="text-[15px] font-semibold tabular-nums leading-none text-slate-900">{val}</p>
                    <p className="mt-1 text-[9px] text-slate-500">{label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[10px] leading-relaxed text-slate-500">
                The Tribrata Darmawangsa
                <br />
                Grand Ballroom, Jakarta Selatan
              </p>

              <div className="mt-auto w-full rounded-full bg-slate-900 py-2.5 text-[11px] font-semibold text-white">
                Buka undangan
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

function Invitation() {
  const date = useDemoDate();
  const features = [
    "Hitung mundur acara otomatis",
    "Buku tamu interaktif",
    "Navigasi Google Maps ke lokasi acara",
    "Tampil rapi di semua ukuran layar",
  ];

  return (
    <section id="undangan" aria-labelledby="undangan-title" className="scroll-mt-24 overflow-hidden bg-slate-950 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-6 inline-block rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-slate-300">
            Ruang Hati, undangan digital dari Subur Maju
          </p>
          <h2
            id="undangan-title"
            className={`${D} max-w-2xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl`}
          >
            Undangan pernikahan berbasis web
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Satu tautan yang bisa dibagikan lewat WhatsApp, dengan desain yang menyesuaikan tema acara Anda.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-slate-200">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="mb-3 text-sm text-slate-400">Pilihan tema</p>
            <ul className="flex flex-wrap gap-2">
              {INVITATION_THEMES.map((t) => (
                <li key={t} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-200">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={DEMO_HREF}
              className="rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-slate-950 transition-colors hover:bg-orange-100"
            >
              Lihat demo undangan
            </Link>
            <a
              href={waLink("Halo Kak, saya mau konsultasi pembuatan Undangan Pernikahan Digital Website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:border-orange-500 hover:bg-orange-500/10"
            >
              Tanya harga
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <PhoneMock date={date} />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   KENAPA KAMI (daftar baris, bukan kartu)
   ============================================================ */
function WhyUs() {
  return (
    <section id="kenapa-kami" aria-labelledby="kenapa-title" className="scroll-mt-24 bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2
              id="kenapa-title"
              className={`${D} text-4xl font-medium leading-[1.05] tracking-tight text-slate-950 md:text-6xl`}
            >
              Kenapa memilih Subur Maju
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-slate-600">
              Bukan sekadar mencetak. Kami memeriksa setiap detail supaya hasilnya sesuai file Anda.
            </p>
          </div>
        </div>

        <ul className="border-t border-slate-200 lg:col-span-7">
          {dataKenapaKami.map((item) => (
            <li key={item.judul} className="group relative border-b border-slate-200 py-9">
              <span
                aria-hidden="true"
                className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-orange-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <h3
                className={`${D} text-2xl font-medium tracking-tight text-slate-950 transition-transform duration-500 ease-out group-hover:translate-x-2 md:text-3xl`}
              >
                {item.judul}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-slate-600">{item.deskripsi}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   KLIEN (marquee CSS: mulus, berhenti saat di-hover)
   ============================================================ */
function Clients() {
  const items = [...dataKlien, ...dataKlien];
  return (
    <section id="klien" aria-labelledby="klien-title" className="overflow-hidden border-y border-slate-200 bg-slate-50 py-16">
      <h2 id="klien-title" className="mx-auto mb-10 max-w-7xl px-6 text-lg font-medium text-slate-600">
        Pernah melayani kebutuhan cetak untuk berbagai instansi
      </h2>
      <div className="sm-marquee relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="sm-marquee-track">
          {items.map((k, i) => (
            <div
              key={`${k.nama}-${i}`}
              aria-hidden={i >= dataKlien.length}
              className="group flex w-48 shrink-0 flex-col items-center gap-3 px-4"
            >
              <div className="flex h-16 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={k.logo}
                  alt={`Logo ${k.nama}`}
                  loading="lazy"
                  className="max-h-14 max-w-[140px] object-contain opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <span className="text-center text-xs font-medium text-slate-500">{k.nama}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LOKASI
   ============================================================ */
function Location() {
  return (
    <section id="lokasi" aria-labelledby="lokasi-title" className="scroll-mt-24 bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col lg:col-span-5">
          <h2
            id="lokasi-title"
            className={`${D} text-4xl font-medium leading-[1.05] tracking-tight text-slate-950 md:text-6xl`}
          >
            Kunjungi workshop kami
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
            Datang langsung ke Rawamangun atau kirim file dari rumah. Kami melayani kapan saja.
          </p>

          <dl className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            <div className="py-5">
              <dt className="text-sm font-semibold text-slate-900">Alamat</dt>
              <dd className="mt-1.5">
                <address className="not-italic leading-relaxed text-slate-600">
                  Jl. Waru No.15C, RT.2/RW.9,
                  <br />
                  Rawamangun, Kec. Pulo Gadung,
                  <br />
                  {BUSINESS.city} {BUSINESS.postal}
                </address>
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-sm font-semibold text-slate-900">WhatsApp dan telepon</dt>
              <dd className="mt-1.5">
                <a href={`tel:${BUSINESS.phoneTel}`} className="text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-950 hover:decoration-orange-600">
                  {BUSINESS.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-sm font-semibold text-slate-900">Jam buka</dt>
              <dd className="mt-1.5 text-slate-600">24 jam, setiap hari</dd>
            </div>
          </dl>

          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-2.5 rounded-full bg-slate-950 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-orange-700"
          >
            Buka di Google Maps
            <ArrowUpRight />
          </a>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 lg:col-span-7">
          <iframe
            title="Lokasi Subur Maju Printing di Google Maps"
            src={mapsEmbed}
            className="absolute inset-0 h-full w-full grayscale transition-[filter] duration-700 hover:grayscale-0"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA PENUTUP (langkah berurutan, jadi pakai nomor)
   ============================================================ */
function FinalCta() {
  const steps = [
    "Kirim file dan kebutuhan Anda lewat WhatsApp.",
    "Konfirmasi ukuran, bahan, dan harga.",
    "Kami cetak, Anda ambil di Rawamangun.",
  ];
  return (
    <section aria-labelledby="cta-title" className="bg-slate-950 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <h2 id="cta-title" className={`${D} text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl`}>
            Siap cetak sekarang?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-400">
            Tidak perlu antre di toko. Ceritakan kebutuhan Anda, kami balas langsung di WhatsApp.
          </p>
          <a
            href={waLink("Halo Kak, saya mau kirim file untuk dicetak.\n\nProduk:\nJumlah:\nUkuran:\nDeadline:")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-400"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Kirim file lewat WhatsApp
          </a>
        </div>

        <ol className="lg:col-span-5 lg:col-start-8">
          {steps.map((s, i) => (
            <li key={s} className="flex items-start gap-5 border-t border-white/10 py-6 last:border-b">
              <span className={`${D} text-3xl italic leading-none text-orange-500`}>{i + 1}</span>
              <span className="pt-1 text-lg text-slate-200">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
const FOOTER_SERVICES = [
  "Hardcover skripsi",
  "Digital printing",
  "Banner dan spanduk",
  "Stiker dan label",
  "Brosur dan flyer",
  "Undangan digital web",
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Image src="/avatar.png" alt="" width={44} height={44} className="rounded-full border border-slate-200 object-cover" />
            <p className={`${D} text-2xl font-semibold tracking-tight text-slate-950`}>Subur Maju Printing</p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
            Percetakan digital 24 jam di Jakarta Timur untuk kebutuhan akademik, bisnis, dan acara pribadi, termasuk
            undangan pernikahan berbasis web.
          </p>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold text-slate-900">Layanan</h3>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2">
            {FOOTER_SERVICES.map((s) => (
              <li key={s}>
                <a
                  href={waLink(`Halo Kak, saya mau tanya ${s}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 transition-colors hover:text-orange-700"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold text-slate-900">Kontak</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
            <li>
              <a href={`tel:${BUSINESS.phoneTel}`} className="transition-colors hover:text-orange-700">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-orange-700">
                Jl. Waru No.15C, Rawamangun
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Subur Maju Printing.</p>
          <p>
            Dibuat oleh <span className="font-semibold text-slate-900">LURE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   SMART ORDER: tombol melayang + modal yang aksesibel
   ============================================================ */
function OrderButton({ onOpen, hidden }) {
  return (
    <AnimatePresence>
      {!hidden && (
        <motion.button
          type="button"
          onClick={onOpen}
          aria-label="Buka form pesan cepat"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.8 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-slate-950 py-3.5 pl-5 pr-6 text-sm font-semibold text-white shadow-2xl shadow-slate-900/30 ring-1 ring-white/10 transition-colors hover:bg-orange-700 md:bottom-8 md:right-8"
        >
          <ChatIcon className="h-5 w-5" />
          Pesan cepat
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function OrderModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Form pesan cepat"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md" onClick={onClose} aria-hidden="true" />
          <motion.div
            className="relative max-h-full w-full max-w-2xl overflow-y-auto"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup form"
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-900/60 text-white backdrop-blur transition-colors hover:bg-slate-900"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
            <SmartOrder onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============================================================
   HALAMAN
   ============================================================ */
export default function Home() {
  const [orderOpen, setOrderOpen] = useState(false);
  const openOrder = useCallback(() => setOrderOpen(true), []);
  const closeOrder = useCallback(() => setOrderOpen(false), []);

  return (
    <MotionConfig reducedMotion="user">
      <SeoHead />
      <GlobalStyles />

      <div
        className={`${display.variable} ${sans.variable} ${SANS} overflow-x-clip bg-white text-slate-900 antialiased selection:bg-orange-200 selection:text-slate-950`}
      >
        <Navbar />

        <main>
          <Hero />
          <Services />
          <Invitation />
          <div id="katalog" className="scroll-mt-24 bg-slate-50">
            <Catalog />
          </div>
          <WhyUs />
          <Clients />
          <Location />
          <FinalCta />
        </main>

        <Footer />

        <OrderButton onOpen={openOrder} hidden={orderOpen} />
        <OrderModal open={orderOpen} onClose={closeOrder} />
      </div>
    </MotionConfig>
  );
}
