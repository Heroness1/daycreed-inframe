import Head from "next/head";
import Link from "next/link";

const WA_NUMBER = "6282246926544";
const SITE_URL = "https://www.suburmajuprinting.com";

const waLink = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const relatedServices = [
  { title: "Hardcover Skripsi", href: "/hardcover-skripsi-jakarta-timur", note: "Kebutuhan akademik" },
  { title: "Banner & Spanduk", href: "/banner-jakarta-timur", note: "Promosi dan acara" },
  { title: "Stiker & Label", href: "/stiker-jakarta-timur", note: "Produk dan kemasan" },
  { title: "Brosur & Flyer", href: "/brosur-jakarta-timur", note: "Materi marketing" },
];

export default function ServiceLandingPage({ service }) {
  const serviceUrl = `${SITE_URL}/${service.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle,
    url: serviceUrl,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Subur Maju Printing",
      url: SITE_URL,
      telephone: "+6282246926544"
    },
    areaServed: { "@type": "City", name: "Jakarta Timur" }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  return (
    <>
      <Head>
        <title>{service.title} | Subur Maju Printing</title>
        <meta name="description" content={service.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={serviceUrl} />
        <meta property="og:title" content={`${service.title} | Subur Maju Printing`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={serviceUrl} />
        <meta property="og:image" content={`${SITE_URL}/avatar.png`} />
        <meta property="og:site_name" content="Subur Maju Printing" />
        <meta name="theme-color" content="#020617" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <main className="min-h-screen overflow-hidden bg-slate-950 font-sans text-slate-300 selection:bg-orange-500/30 selection:text-white">
        <header className="fixed left-4 right-4 top-4 z-50 rounded-full border border-slate-700/60 bg-slate-900/85 shadow-2xl shadow-black/40 backdrop-blur-2xl md:left-1/2 md:w-[800px] md:-translate-x-1/2">
          <div className="flex h-16 items-center justify-between px-4 sm:px-5">
            <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Subur Maju Printing - Beranda">
              <img src="/avatar.png" alt="Logo Subur Maju Printing" width="40" height="40" className="h-10 w-10 rounded-full border border-orange-500/30 object-cover" />
              <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">Subur Maju Printing</span>
            </Link>
            <nav aria-label="Navigasi utama" className="flex items-center gap-0.5 text-xs font-medium text-slate-300 sm:gap-2 sm:text-[13px]">
              <Link href="/#layanan" className="rounded-full px-3 py-2 transition hover:bg-orange-500/10 hover:text-orange-400 sm:px-4">Layanan</Link>
              <Link href="/#katalog" className="rounded-full px-3 py-2 transition hover:bg-orange-500/10 hover:text-orange-400 sm:px-4">Katalog</Link>
              <Link href="/#lokasi" className="rounded-full px-3 py-2 transition hover:bg-orange-500/10 hover:text-orange-400 sm:px-4">Lokasi</Link>
            </nav>
          </div>
        </header>

        <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-slate-950 pb-16 pt-32 sm:pt-36">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=1800" alt="" className="h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
            <div className="max-w-4xl">
              <Link href="/" className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-orange-300">
                <span aria-hidden="true">←</span> Beranda
              </Link>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-orange-300 sm:text-sm">
                {service.eyebrow} <span className="text-orange-500">•</span> JAKARTA TIMUR
              </p>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.06] tracking-tight text-white drop-shadow-md sm:text-5xl md:text-7xl">
                {service.title.split(" Jakarta Timur")[0]}{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                  {service.title.includes("Jakarta Timur") ? "Jakarta Timur" : ""}
                </span>
              </h1>
              <p className="mb-9 max-w-2xl text-base leading-relaxed text-slate-300 drop-shadow-sm sm:text-lg md:text-xl">{service.description}</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={waLink(service.whatsapp)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 px-7 py-4 text-base font-bold text-white shadow-[0_0_30px_-5px_rgba(234,88,12,0.4)] transition hover:-translate-y-0.5 hover:from-orange-500 hover:to-amber-500 sm:text-lg">
                  Pesan via WhatsApp <span aria-hidden="true">↗</span>
                </a>
                <Link href="/#layanan" className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/70 px-7 py-4 text-base font-semibold text-slate-100 backdrop-blur-sm transition hover:border-orange-500/40 hover:bg-slate-800 sm:text-lg">
                  Lihat Semua Layanan
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Konsultasi via WhatsApp</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-orange-400" /> Spesifikasi sesuai kebutuhan</span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-slate-900 px-6 py-20 sm:py-24">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-500/5 blur-[100px]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">Subur Maju Printing</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">{service.introTitle}</h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">{service.intro}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {service.details.map((item, index) => (
                <article key={item.title} className="group rounded-3xl border border-slate-800 bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 sm:p-8">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-lg font-bold text-orange-400">0{index + 1}</span>
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-orange-400">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-400">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">Jelajahi Layanan</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Layanan Percetakan Lain</h2>
              </div>
              <Link href="/#katalog" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition hover:text-amber-300">Lihat katalog utama <span aria-hidden="true">→</span></Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedServices.filter((item) => item.href !== `/${service.slug}`).map((item) => (
                <Link key={item.href} href={item.href} className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-orange-500/40">
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">{item.note}</p>
                  <h3 className="mt-3 text-lg font-bold text-white group-hover:text-orange-400">{item.title}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-orange-300">Lihat layanan <span aria-hidden="true">→</span></span>
                </Link>
              ))}
              <Link href="/undangan-digital" className="group rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-orange-500/5 p-6 transition hover:-translate-y-1 hover:border-amber-400/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">Layanan Digital</p>
                <h3 className="mt-3 text-lg font-bold text-white group-hover:text-amber-300">Undangan Digital</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">Lihat demo <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">FAQ</p>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Pertanyaan Umum</h2>
            </div>
            <div className="divide-y divide-slate-800 rounded-3xl border border-slate-800 bg-slate-950/60 px-6 sm:px-8">
              {service.faqs.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-100 marker:hidden">
                    {item.q}
                    <span className="shrink-0 text-xl text-orange-400 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pb-1 pt-4 leading-relaxed text-slate-400">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/50 p-8 sm:p-12 md:flex md:items-center md:justify-between md:gap-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">Siap konsultasi?</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">Ceritakan kebutuhan cetak Anda.</h2>
              <p className="mt-4 leading-relaxed text-slate-400">Kirim detail produk, ukuran, jumlah, dan deadline. Tim Subur Maju Printing dapat membantu mengonfirmasi spesifikasi melalui WhatsApp.</p>
            </div>
            <a href={waLink(service.whatsapp)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 px-7 py-4 font-bold text-white shadow-lg shadow-orange-950/30 transition hover:-translate-y-0.5 md:mt-0">Konsultasi Sekarang <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <footer className="border-t border-slate-800 bg-slate-900">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img src="/avatar.png" alt="" width="40" height="40" className="h-10 w-10 rounded-xl object-cover" />
              <span><strong className="block text-white">Subur Maju Printing</strong><span className="mt-1 block text-xs text-slate-400">Digital Printing Jakarta Timur</span></span>
            </Link>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400">
              <Link href="/" className="transition hover:text-orange-400">Beranda</Link>
              <Link href="/#katalog" className="transition hover:text-orange-400">Katalog</Link>
              <Link href="/#lokasi" className="transition hover:text-orange-400">Lokasi</Link>
              <Link href="/undangan-digital" className="transition hover:text-orange-400">Undangan Digital</Link>
            </div>
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} Subur Maju Printing</p>
          </div>
        </footer>
      </main>
    </>
  );
}
