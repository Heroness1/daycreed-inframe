import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import Catalog from "../components/Catalog";
import SmartOrder from "../components/SmartOrder";
import { dataLayanan, dataKenapaKami, dataKlien } from "../data/printData";

/* ============================================================
   FONT
   ============================================================ */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
// Ganti dengan gambar 1200x630 khusus kalau sudah ada, mis. `${SITE_URL}og-image.jpg`
const OG_IMAGE = `${SITE_URL}avatar.png`;
// Pastikan route ini ada di folder pages/
const DEMO_HREF = "/undangan-digital";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800",
];
const COUPLE_IMAGE =
  "https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?auto=format&fit=crop&q=80&w=300";

const waLink = (text) =>
  `https://wa.me/${BUSINESS.wa}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.mapsQuery)}`;
const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  BUSINESS.mapsQuery
)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

/* ============================================================
   VARIAN ANIMASI
   ============================================================ */
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};
const blurUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: EASE } },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};
const stagger = (gap = 0.12, delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren: delay } },
});

const inView = { once: true, margin: "-80px" };

/* ============================================================
   IKON
   ============================================================ */
const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CheckIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CloseIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PinIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
        animation: sm-marquee 40s linear infinite;
        will-change: transform;
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
   PROGRESS SCROLL + NAVBAR
   ============================================================ */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400"
    />
  );
}

const NAV_LINK =
  "rounded-full px-3 py-2 transition-colors hover:bg-neutral-100 hover:text-neutral-900 md:px-4";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 80);
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="pointer-events-auto w-full max-w-[760px] rounded-full border border-neutral-200/60 bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.05)] backdrop-blur-xl backdrop-saturate-150"
      >
        <div className="flex h-14 items-center justify-between pl-4 pr-2 md:h-16 md:pl-5">
          <Link href="/" className="flex items-center gap-3" aria-label="Subur Maju Printing, ke beranda">
            <Image
              src="/avatar.png"
              alt=""
              width={36}
              height={36}
              className="rounded-full border border-neutral-200 object-cover"
            />
            <span className="hidden text-[15px] font-bold leading-none tracking-tight text-neutral-900 sm:block">
              Subur Maju<span className="text-amber-600">.</span>
            </span>
          </Link>

          <nav aria-label="Navigasi utama" className="flex items-center text-[13px] font-semibold text-neutral-600">
            <a href="#layanan" className={NAV_LINK}>Layanan</a>
            <a href="#undangan" className={`${NAV_LINK} hidden md:inline-flex`}>Undangan</a>
            <a href="#katalog" className={NAV_LINK}>Katalog</a>
            <a href="#lokasi" className={NAV_LINK}>Lokasi</a>
          </nav>

          <a
            href={waLink("Halo Kak, saya mau tanya kebutuhan cetak di Subur Maju Printing.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp"
            className="ml-1 hidden h-10 items-center gap-2 rounded-full bg-neutral-900 px-5 text-[13px] font-semibold text-white transition-colors hover:bg-amber-600 md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pesan
          </a>
        </div>
      </motion.header>
    </div>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-[#0b0a08] px-6 pb-20 pt-32 text-white md:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-gradient-to-bl from-amber-500/20 via-orange-500/10 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-12">
        {/* Teks */}
        <motion.div
          className="flex flex-col items-start lg:col-span-6"
          initial="hidden"
          animate="visible"
          variants={stagger(0.12, 0.1)}
        >
          <motion.span
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-200/80 shadow-sm backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Buka 24 Jam • Jakarta Timur
          </motion.span>

          <h1
            id="hero-title"
            className="mb-6 text-[2.75rem] font-extrabold leading-[1.05] tracking-tighter text-white sm:text-6xl md:text-7xl"
          >
            <motion.span variants={blurUp} className="block">
              Digital Printing
            </motion.span>
            <motion.span variants={blurUp} className="block pb-2">
              <motion.span
                className="bg-gradient-to-r from-amber-600 via-orange-400 to-amber-600 bg-[length:200%_auto] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                Jakarta Timur.
              </motion.span>
            </motion.span>
          </h1>

          <motion.p variants={fadeUp} className="mb-10 max-w-lg text-lg font-medium leading-relaxed text-neutral-400">
            Cetak cepat, kualitas premium. Dari hardcover skripsi, banner, hingga{" "}
            <strong className="font-bold text-amber-200">undangan pernikahan digital</strong> bergaya eksklusif.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <a
              href={waLink(
                "Halo Kak, saya mau konsultasi mengenai kebutuhan cetak di Subur Maju Printing.\n\nProduk:\nJumlah:\nUkuran:\nDeadline:"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-neutral-900 px-8 py-4 text-[15px] font-semibold text-white shadow-xl shadow-neutral-900/20 transition-all hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-2xl hover:shadow-neutral-900/30"
            >
              <WhatsAppIcon />
              Mulai Konsultasi
            </a>
            <a
              href="#layanan"
              className="rounded-full border border-white/10 bg-white/[0.06] px-8 py-4 text-[15px] font-semibold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-amber-500/30 hover:bg-amber-500/10"
            >
              Lihat Layanan
            </a>
          </motion.div>
        </motion.div>

        {/* Gambar */}
        <motion.div
          className="relative grid grid-cols-2 gap-4 lg:col-span-6"
          initial="hidden"
          animate="visible"
          variants={stagger(0.2, 0.35)}
        >
          <motion.div variants={scaleUp} className="pt-12">
            <motion.div
              style={{ y: yA }}
              className="relative h-64 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40 md:h-80"
            >
              <Image
                src={HERO_IMAGES[0]}
                alt="Hasil digital printing Subur Maju Printing"
                fill
                priority
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div variants={scaleUp} className="space-y-4">
            <motion.div
              style={{ y: yB }}
              className="relative h-64 overflow-hidden rounded-[2rem] shadow-2xl shadow-neutral-300/50 md:h-80"
            >
              <Image
                src={HERO_IMAGES[1]}
                alt="Contoh palet warna cetak"
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center rounded-[2rem] border border-neutral-100 border border-white/10 bg-white/[0.07] p-6 text-center shadow-xl shadow-black/30 backdrop-blur-xl"
            >
              <p className="mb-1 text-4xl font-extrabold text-white">24/7</p>
              <p className="text-sm font-semibold text-neutral-400">Siap Melayani</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   LAYANAN (bento, kartu = link WhatsApp, efek spotlight kursor)
   ============================================================ */
function ServiceCard({ item, featured }) {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${x}px ${y}px, rgba(251,191,36,0.18), transparent 70%)`;

  return (
    <motion.a
      href={waLink(`Halo Kak, saya mau pesan ${item.judul}.\n\nJumlah:\nUkuran:\nDeadline:`)}
      target="_blank"
      rel="noopener noreferrer"
      variants={scaleUp}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE } }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] transition-[border-color,box-shadow] duration-500 hover:border-amber-400/30 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-amber-950/30 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <motion.div
        aria-hidden="true"
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className={`relative w-full overflow-hidden bg-neutral-100 ${featured ? "h-80 md:h-[400px]" : "h-56"}`}>
        <Image
          src={item.gambar}
          alt={`Layanan ${item.judul} Subur Maju Printing`}
          fill
          sizes={featured ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="relative z-20 flex flex-grow flex-col border-t border-white/10 bg-[#171512] p-8">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.judul}</h3>
        <p className="mb-6 text-sm font-medium leading-relaxed text-neutral-500">{item.deskripsi}</p>
        <div className="mt-auto flex items-center text-sm font-bold uppercase tracking-widest text-amber-700">
          Pesan
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
        </div>
      </div>
    </motion.a>
  );
}

function Services() {
  // Kartu pertama dibuat besar hanya kalau jumlah layanan kelipatan 3 agar grid tidak berlubang.
  const useFeatured = dataLayanan.length % 3 === 0;

  return (
    <section id="layanan" aria-labelledby="layanan-title" className="scroll-mt-24 bg-[#11100e] px-6 py-24 text-white">
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger(0.12)}
      >
        <motion.div variants={fadeUp} className="mb-16">
          <h2 id="layanan-title" className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Layanan Kami.
          </h2>
          <p className="max-w-xl text-lg font-medium text-neutral-400">
            Spesialisasi percetakan dengan mesin presisi tinggi untuk hasil yang tajam dan akurat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {dataLayanan.map((item, i) => (
            <ServiceCard key={item.judul} item={item} featured={useFeatured && i === 0} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   UNDANGAN WEB + MOCKUP HP
   ============================================================ */
function useDemoDate() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    // Selalu hari Sabtu sekitar 45 hari ke depan, jadi tanggal demo tidak pernah basi.
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
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/25 blur-[100px]"
      />
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="relative"
      >
        <Link href={DEMO_HREF} aria-label="Lihat demo undangan pernikahan digital" className="block">
          <div
            aria-hidden="true"
            className="relative h-[580px] w-[286px] rounded-[3.5rem] border border-neutral-700/50 bg-neutral-50 p-2 shadow-2xl shadow-black/60"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[3rem] border border-neutral-200 bg-[#FAFAFA] shadow-inner">
              <div className="absolute left-1/2 top-0 z-40 flex h-6 w-32 -translate-x-1/2 items-center justify-center rounded-b-3xl bg-neutral-50 shadow-sm">
                <div className="h-1.5 w-16 rounded-full bg-neutral-200" />
              </div>

              <div className="flex h-full flex-col items-center px-5 pb-6 pt-11 text-center">
                <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={COUPLE_IMAGE} alt="" className="h-full w-full object-cover" />
                </div>
                <p className="mb-1 mt-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                  The Wedding Of
                </p>
                <p className="font-serif text-[34px] leading-none text-amber-800">Lure</p>
                <p className="my-1 font-serif text-sm italic text-amber-800/60">&amp;</p>
                <p className="font-serif text-[34px] leading-none text-amber-800">Annabey</p>

                <div className="my-4 h-px w-8 bg-amber-800/20" />

                <div className="w-full rounded-2xl border border-neutral-100 bg-white p-3.5 shadow-sm">
                  <p className="text-[11px] font-bold tracking-wide text-neutral-800">{dateLabel}</p>
                  <div className="mt-2.5 grid grid-cols-4 gap-1.5">
                    {[
                      ["Hari", cd.d],
                      ["Jam", cd.h],
                      ["Menit", cd.m],
                      ["Detik", cd.s],
                    ].map(([label, val]) => (
                      <div key={label} className="rounded-lg bg-neutral-100 py-1.5">
                        <p className="text-[14px] font-bold tabular-nums leading-none text-neutral-900">{val}</p>
                        <p className="mt-1 text-[8px] font-medium text-neutral-500">{label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-[10px] leading-relaxed text-neutral-500">
                    The Tribrata Darmawangsa
                    <br />
                    Grand Ballroom, Jakarta Selatan
                  </p>
                </div>

                <div className="mt-auto w-full rounded-full bg-neutral-900 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                  Buka Undangan
                </div>
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
    "Navigasi Google Maps cerdas",
    "Responsif di semua layar",
  ];

  return (
    <section
      id="undangan"
      aria-labelledby="undangan-title"
      className="relative scroll-mt-24 overflow-hidden bg-neutral-900 px-6 py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/40 via-neutral-900 to-neutral-900"
      />
      <motion.div
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger(0.15)}
      >
        <motion.div variants={fadeUp} className="lg:col-span-7">
          <span className="mb-6 inline-block rounded-md border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
            Eksklusif Digital
          </span>
          <h2
            id="undangan-title"
            className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Undangan Web
            <br />
            <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text font-serif font-normal italic text-transparent">
              Sangat Berkelas.
            </span>
          </h2>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-neutral-400">
            Tingkatkan gengsi acaramu. Undangan digital responsif dengan desain premium, mudah dibagikan lewat
            WhatsApp.
          </p>

          <ul className="mb-10 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 font-medium text-neutral-200">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-500/15 text-amber-400">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Link
              href={DEMO_HREF}
              className="rounded-full bg-white px-8 py-4 font-bold text-neutral-900 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-white/20"
            >
              Lihat Demo
            </Link>
            <a
              href={waLink("Halo Kak, saya mau konsultasi pembuatan Undangan Pernikahan Website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-700 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-amber-500/50 hover:bg-amber-500/10"
            >
              Tanya Harga
            </a>
          </div>
        </motion.div>

        <motion.div variants={scaleUp} className="lg:col-span-5">
          <PhoneMock date={date} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   KENAPA KAMI
   ============================================================ */
function WhyUs() {
  return (
    <section id="kenapa-kami" aria-labelledby="kenapa-title" className="scroll-mt-24 bg-[#0b0a08] px-6 py-24 text-white">
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger(0.14)}
      >
        <motion.div variants={fadeUp} className="mb-16 text-center">
          <h2 id="kenapa-title" className="mb-4 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
            Nilai Lebih Kami.
          </h2>
          <p className="text-lg font-medium text-neutral-500">
            Bukan sekadar mencetak, kami memastikan setiap detail sempurna.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {dataKenapaKami.map((item) => (
            <motion.article
              key={item.judul}
              variants={scaleUp}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE } }}
              className="group rounded-3xl border border-white/10 bg-white/[0.045] p-10 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-amber-400/30 hover:bg-white/[0.065] hover:shadow-xl hover:shadow-amber-950/30"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-100 group-hover:text-amber-700">
                <CheckIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{item.judul}</h3>
              <p className="text-sm font-medium leading-relaxed text-neutral-500">{item.deskripsi}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   KLIEN (marquee mulus, berhenti saat di-hover)
   ============================================================ */
function Clients() {
  const items = [...dataKlien, ...dataKlien];
  return (
    <section id="klien" aria-labelledby="klien-title" className="overflow-hidden border-y border-white/10 bg-[#11100e] py-16 text-white">
      <div className="mx-auto mb-8 max-w-7xl px-6 text-center">
        <h2 id="klien-title" className="text-xs font-bold uppercase tracking-widest text-amber-200/60">
          Pernah melayani kebutuhan cetak untuk berbagai instansi
        </h2>
      </div>
      <div className="sm-marquee relative py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
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
                  className="max-h-14 max-w-[130px] object-contain opacity-50 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <span className="text-center text-xs font-medium text-neutral-400">{k.nama}</span>
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
    <section id="lokasi" aria-labelledby="lokasi-title" className="scroll-mt-24 bg-[#11100e] px-6 py-24 text-white">
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger(0.15)}
      >
        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          <motion.div
            variants={scaleUp}
            className="flex flex-col justify-between rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-10 backdrop-blur-xl"
          >
            <div>
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <h2 id="lokasi-title" className="text-4xl font-extrabold tracking-tight text-neutral-900">
                  Kunjungi Kami.
                </h2>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-700">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  Buka 24 Jam
                </span>
              </div>

              <ul className="space-y-8">
                <li className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-amber-300 shadow-sm">
                    <PinIcon />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-bold text-white">Workshop Rawamangun</h3>
                    <address className="text-sm font-medium not-italic leading-relaxed text-neutral-400">
                      Jl. Waru No.15C, RT.2/RW.9,
                      <br />
                      Rawamangun, Kec. Pulo Gadung,
                      <br />
                      {BUSINESS.city} {BUSINESS.postal}
                    </address>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-amber-700 shadow-sm">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-bold text-neutral-900">Hubungi Cepat</h3>
                    <a
                      href={`tel:${BUSINESS.phoneTel}`}
                      className="text-sm font-medium text-neutral-400 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 hover:decoration-amber-600"
                    >
                      {BUSINESS.phoneDisplay} (24 Jam)
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-4 text-center font-bold text-white shadow-lg shadow-neutral-900/10 transition-all hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-xl hover:shadow-neutral-900/20"
            >
              Buka Google Maps →
            </a>
          </motion.div>

          <motion.div
            variants={scaleUp}
            className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] border border-neutral-200 shadow-sm lg:h-auto"
          >
            <iframe
              title="Lokasi Subur Maju Printing di Google Maps"
              src={mapsEmbed}
              className="absolute inset-0 h-full w-full grayscale transition-all duration-700 hover:grayscale-0"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   CTA PENUTUP
   ============================================================ */
function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-[#FAFAFA] px-6 pb-24">
      <motion.div
        className="group relative mx-auto max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={scaleUp}
      >
        <div
          aria-hidden="true"
          className="absolute -inset-1 rounded-[3rem] bg-gradient-to-r from-orange-600 to-amber-500 opacity-20 blur-xl transition duration-1000 group-hover:opacity-35 group-hover:duration-200"
        />
        <div className="relative flex flex-col items-center overflow-hidden rounded-[3rem] border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 px-8 py-20 text-center shadow-2xl">
          <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-500 opacity-15 blur-[120px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-600 opacity-10 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              Respon Cepat 24 Jam
            </span>
            <h2 id="cta-title" className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Siap Cetak{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Sekarang?
              </span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-neutral-400 md:text-xl">
              Tidak perlu repot datang ke toko. Kirim file Anda dan konsultasikan kebutuhan cetak langsung melalui
              WhatsApp.
            </p>
            <a
              href={waLink("Halo Kak, saya mau kirim file untuk dicetak.\n\nProduk:\nJumlah:\nUkuran:\nDeadline:")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-5 text-lg font-bold text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] transition-all duration-300 hover:-translate-y-1 hover:from-orange-500 hover:to-amber-400 hover:shadow-[0_0_60px_-15px_rgba(249,115,22,0.7)]"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Konsultasi &amp; Order Sekarang
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
const FOOTER_SERVICES = [
  "Digital Printing",
  "Hardcover Skripsi",
  "Banner & Spanduk",
  "Stiker & Label",
  "Brosur & Flyer",
  "Undangan Web",
];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0a08] text-white">
      <motion.div
        className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger(0.1)}
      >
        <motion.div variants={fadeUp} className="md:col-span-2">
          <h3 className="mb-2 text-2xl font-extrabold tracking-tight">Subur Maju.</h3>
          <p className="max-w-sm text-sm font-medium text-neutral-400">
            Percetakan digital 24 jam terpercaya di Jakarta Timur. Melayani cetak buku, banner, hingga undangan
            website eksklusif.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="mb-4 font-bold">Layanan</h3>
          <ul className="space-y-3 text-sm font-medium text-neutral-500">
            {FOOTER_SERVICES.map((s) => (
              <li key={s}>
                <a
                  href={waLink(`Halo Kak, saya mau tanya ${s}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-amber-700"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="mb-4 font-bold">Kontak</h3>
          <ul className="space-y-3 text-sm font-medium text-neutral-500">
            <li>
              <a href={`tel:${BUSINESS.phoneTel}`} className="transition-colors hover:text-amber-700">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber-700">
                Jl. Waru No.15C, Rawamangun
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs font-medium text-neutral-500">
          <p>© {new Date().getFullYear()} Subur Maju Printing.</p>
          <p>
            Crafted by <span className="font-bold text-neutral-900">LURE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   SMART ORDER: tombol melayang + modal aksesibel
   ============================================================ */
function OrderButton({ onOpen, hidden }) {
  return (
    <AnimatePresence>
      {!hidden && (
        <motion.button
          type="button"
          onClick={onOpen}
          aria-label="Buka form pesan cepat"
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ duration: 0.5, ease: EASE, delay: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/30 bg-gradient-to-br from-amber-500 to-orange-600 text-2xl text-white shadow-[0_12px_40px_-10px_rgba(245,158,11,0.55)] transition-colors hover:bg-amber-600 md:bottom-8 md:right-8"
        >
          <span aria-hidden="true">💬</span>
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
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Form pesan cepat"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
          <motion.div
            className="relative max-h-full w-full max-w-2xl overflow-y-auto"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup form"
              className="absolute right-3 top-3 z-10 rounded-full bg-neutral-900/60 p-2 text-white backdrop-blur transition-colors hover:bg-neutral-900 hover:text-amber-400"
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
        className={`${jakarta.variable} overflow-x-clip bg-[#0b0a08] font-[family-name:var(--font-sans)] text-neutral-900 antialiased selection:bg-amber-500/30 selection:text-amber-950`}
      >
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <Services />
          <Invitation />
          <WhyUs />
          <Clients />
          <div id="katalog" className="scroll-mt-24 bg-[#0b0a08] px-0 py-8">
            <Catalog />
          </div>
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
