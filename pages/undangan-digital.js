import Head from "next/head";
import Link from "next/link";

const WA_NUMBER = "6282246926544";
const SITE_URL = "https://www.suburmajuprinting.com";
const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const templates = [
  {
    id: "01",
    name: "Nusantara Islamic",
    subtitle: "Hijau • Gold • Islami",
    description: "Nuansa Nusantara yang hangat dengan sentuhan islami, elegan, dan penuh ketenangan.",
    demo: "/undangan-preview?template=t1",
    palette: "from-[#0c1713] via-[#17251e] to-[#b28a4b]",
    paper: "bg-[#f5efe2]",
    accent: "text-[#b99459]",
    initials: "A & S",
    label: "Dengan menyebut nama Allah SWT",
  },
  {
    id: "02",
    name: "Japanese Minimal",
    subtitle: "Sakura • Modern • Editorial",
    description: "Kontras hitam-putih dengan aksen sakura untuk pasangan yang suka gaya modern Jepang.",
    demo: "/undangan-preview?template=t2",
    palette: "from-[#0b0b0c] via-[#281b21] to-[#e9a9b9]",
    paper: "bg-[#fff0f3]",
    accent: "text-[#b56d83]",
    initials: "H & M",
    label: "THE BEGINNING",
  },
  {
    id: "03",
    name: "Wedding Editorial",
    subtitle: "Magazine • Fashion • Clean",
    description: "Terinspirasi majalah fashion: tipografi besar, whitespace luas, dan karakter editorial.",
    demo: "/undangan-preview?template=t3",
    palette: "from-[#efede7] via-[#faf8f3] to-[#222]",
    paper: "bg-[#f7f5ef]",
    accent: "text-[#77736c]",
    initials: "B & S",
    label: "THE WEDDING ISSUE",
  },
  {
    id: "04",
    name: "Pawiwahan Jawa",
    subtitle: "Jawa • Batik • Sogan",
    description: "Karakter Jawa yang kuat dengan ornamen kawung, warna sogan, dan tipografi klasik.",
    demo: "/undangan-preview?template=t4",
    palette: "from-[#26170f] via-[#503321] to-[#b28a4b]",
    paper: "bg-[#f5eee0]",
    accent: "text-[#a67b43]",
    initials: "R & N",
    label: "PAWIWAHAN",
  },
  {
    id: "05",
    name: "Sunda Romance",
    subtitle: "Cream • Gold • Romantic",
    description: "Lembut dan romantis dengan komposisi krem, cokelat, dan aksen gold yang timeless.",
    demo: "/undangan-preview?template=t5",
    palette: "from-[#39231e] via-[#68443a] to-[#b78a43]",
    paper: "bg-[#f3e8d0]",
    accent: "text-[#b78a43]",
    initials: "D & A",
    label: "A CELEBRATION OF LOVE",
  },
  {
    id: "06",
    name: "Royal Jawa",
    subtitle: "Royal • Sogan • Premium",
    description: "Versi paling regal dengan entrance cinematic, batik, gold, dan atmosfer kerajaan Jawa.",
    demo: "/undangan-preview?template=royal-jawa",
    palette: "from-[#24160f] via-[#4a2d1e] to-[#d7bb83]",
    paper: "bg-[#f7f1e5]",
    accent: "text-[#b28a4b]",
    initials: "J & K",
    label: "PAWIWAHAN",
  },
];

export default function UndanganDigital() {
  const order = (template = "") =>
    waLink(
      `Halo Kak, saya tertarik dengan Undangan Pernikahan Digital Subur Maju Printing.\\n\\nDesain: ${template || "Belum memilih"}\\nNama pasangan: \\nTanggal acara: \\nCatatan: \\n\\nMohon info paket dan harganya ya. Terima kasih 🙏`
    );

  return (
    <>
      <Head>
        <title>Undangan Pernikahan Digital | Ruang Hati — Subur Maju Printing</title>
        <meta
          name="description"
          content="Buat undangan pernikahan digital berbasis website dengan desain premium Ruang Hati dari Subur Maju Printing. Pilih template, konsultasikan kebutuhan, dan bagikan undangan dari HP."
        />
        <meta
          name="keywords"
          content="undangan pernikahan digital, undangan website, undangan online, undangan digital Jakarta Timur, undangan website Jakarta, Subur Maju Printing, Ruang Hati"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Subur Maju Printing" />
        <link rel="canonical" href={`${SITE_URL}/undangan-digital`} />
        <meta property="og:title" content="Undangan Pernikahan Digital — Ruang Hati" />
        <meta
          property="og:description"
          content="Undangan website premium untuk hari spesialmu. Koleksi desain Ruang Hati dari Subur Maju Printing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/undangan-digital`} />
        <meta property="og:site_name" content="Subur Maju Printing" />
        <meta property="og:image" content={`${SITE_URL}/avatar.png`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Undangan Pernikahan Digital Ruang Hati",
              brand: { "@type": "Brand", name: "Subur Maju Printing" },
              description:
                "Undangan pernikahan berbasis website dengan desain premium yang dapat dibagikan melalui WhatsApp dan media sosial.",
              url: `${SITE_URL}/undangan-digital`,
              category: "Digital Wedding Invitation",
              seller: {
                "@type": "LocalBusiness",
                name: "Subur Maju Printing",
                telephone: "+6282246926544",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Jl. Waru No.15C, RT.2/RW.9, Rawamangun, Kec. Pulo Gadung",
                  addressLocality: "Kota Jakarta Timur",
                  addressRegion: "DKI Jakarta",
                  postalCode: "13220",
                  addressCountry: "ID",
                },
              },
            }),
          }}
        />
      </Head>

      <main className="min-h-screen overflow-hidden bg-[#090909] text-[#f5f1e9]">
        <nav className="fixed left-4 right-4 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-2xl md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-amber-400/30 bg-white/5">
              <img src="/avatar.png" alt="Subur Maju Printing" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight text-white">Subur Maju</div>
              <div className="text-[9px] uppercase tracking-[0.22em] text-amber-400">Printing</div>
            </div>
          </Link>
          <div className="hidden items-center gap-7 text-xs text-white/65 md:flex">
            <a href="#koleksi" className="transition hover:text-white">Koleksi</a>
            <a href="#fitur" className="transition hover:text-white">Fitur</a>
            <a href="#cara" className="transition hover:text-white">Cara Pesan</a>
          </div>
          <a
            href={order()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#b78a43] px-4 py-2 text-xs font-bold text-black transition hover:-translate-y-0.5 hover:bg-[#d1a75f]"
          >
            Konsultasi
          </a>
        </nav>

        <section className="relative flex min-h-[92vh] items-center px-6 pb-20 pt-36 md:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(183,138,67,.17),transparent_32%),radial-gradient(circle_at_15%_70%,rgba(76,51,31,.18),transparent_28%)]" />
          <div className="absolute left-1/2 top-20 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b78a43]/40 to-transparent" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b78a43]/25 bg-[#b78a43]/[.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[.25em] text-[#d4ae6c]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4ae6c] shadow-[0_0_12px_#d4ae6c]" />
                Ruang Hati · by Subur Maju
              </div>
              <h1 className="max-w-3xl font-serif text-5xl leading-[.95] tracking-[-.04em] text-white md:text-7xl">
                Undangan yang
                <span className="block italic text-[#d0a760]">punya rasa.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/55 md:text-lg">
                Website pernikahan premium yang dibuat untuk menceritakan kisah kalian.
                Pilih desain, konsultasikan detailnya, lalu bagikan satu link kepada orang-orang tersayang.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#koleksi" className="rounded-full bg-[#f4eee2] px-6 py-3.5 text-sm font-bold text-[#211710] transition hover:-translate-y-1">
                  Lihat Koleksi
                </a>
                <a
                  href={order()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 bg-white/[.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-[#b78a43]/50"
                >
                  Tanya Harga via WhatsApp
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-[.18em] text-white/35">
                <span>✓ Responsive HP</span>
                <span>✓ Countdown</span>
                <span>✓ RSVP</span>
                <span>✓ Google Maps</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-8 rounded-[4rem] bg-[#b78a43]/10 blur-3xl" />
              <div className="relative rotate-2 rounded-[3rem] border-[7px] border-[#1b1b1b] bg-[#f7f1e5] p-2 shadow-2xl shadow-black/70">
                <div className="relative h-[570px] overflow-hidden rounded-[2.4rem] bg-[#f5eee0]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80px_140px_at_10%_0%,rgba(183,138,67,.25),transparent_70%),radial-gradient(ellipse_100px_160px_at_100%_100%,rgba(90,54,31,.18),transparent_70%)]" />
                  <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                    <div className="text-[9px] uppercase tracking-[.35em] text-[#a67b43]">Ruang Hati</div>
                    <div className="my-6 h-px w-16 bg-[#b78a43]" />
                    <div className="font-serif text-6xl leading-none text-[#39231e]">A</div>
                    <div className="my-3 font-serif text-2xl italic text-[#b78a43]">&</div>
                    <div className="font-serif text-6xl leading-none text-[#39231e]">S</div>
                    <p className="mt-8 font-serif text-sm italic text-[#6d5548]">A celebration of love</p>
                    <div className="mt-6 text-[8px] uppercase tracking-[.3em] text-[#80644c]">Jakarta · 2026</div>
                    <div className="mt-12 rounded-full border border-[#b78a43]/50 px-5 py-2 text-[8px] uppercase tracking-[.22em] text-[#80644c]">Buka Undangan</div>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center text-[9px] uppercase tracking-[.3em] text-white/25">Premium web invitation</div>
            </div>
          </div>
        </section>

        <section id="koleksi" className="border-y border-white/[.06] bg-[#0d0d0d] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#b78a43]">Koleksi Ruang Hati</p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight text-white md:text-5xl">Pilih karakter cerita kalian.</h2>
              <p className="mt-5 leading-7 text-white/45">
                Enam karakter desain, satu pengalaman: undangan yang terasa seperti bagian dari pernikahan kalian.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <article key={template.id} className="group overflow-hidden rounded-[2rem] border border-white/[.08] bg-[#111] transition duration-500 hover:-translate-y-2 hover:border-[#b78a43]/35 hover:shadow-2xl hover:shadow-black/40">
                  <div className={`relative h-[430px] overflow-hidden bg-gradient-to-br ${template.palette} p-5`}>
                    <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_20%),radial-gradient(circle_at_80%_70%,white_0,transparent_18%)]" />
                    <div className="relative mx-auto h-full max-w-[220px] overflow-hidden rounded-[2rem] border-[5px] border-black/70 bg-[#f5f0e6] shadow-2xl transition duration-700 group-hover:rotate-0 group-hover:scale-[1.03] rotate-2">
                      <div className={`absolute inset-0 ${template.paper}`} />
                      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
                        <div className={`text-[7px] font-bold uppercase tracking-[.3em] ${template.accent}`}>{template.label}</div>
                        <div className={`my-7 font-serif text-5xl leading-none ${template.accent}`}>{template.initials.split(" ")[0]}</div>
                        <div className={`font-serif text-xl italic ${template.accent}`}>&</div>
                        <div className={`mt-2 font-serif text-5xl leading-none ${template.accent}`}>{template.initials.split(" ")[2]}</div>
                        <div className="mt-8 h-px w-10 bg-current opacity-30" />
                        <div className={`mt-5 text-[7px] uppercase tracking-[.25em] opacity-60 ${template.accent}`}>The Wedding</div>
                        <div className={`mt-10 rounded-full border px-4 py-2 text-[7px] uppercase tracking-[.2em] ${template.accent}`}>Open Invitation</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-[.22em] text-[#b78a43]">Template {template.id}</div>
                        <h3 className="mt-2 text-xl font-semibold text-white">{template.name}</h3>
                        <p className="mt-1 text-xs text-white/35">{template.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/45">{template.description}</p>
                    <div className="mt-6 flex gap-2">
                      <Link href={template.demo} className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-center text-xs font-semibold text-white transition hover:border-[#b78a43]/40 hover:bg-white/[.03]">
                        Lihat Demo
                      </Link>
                      <a href={order(template.name)} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl bg-[#b78a43] px-4 py-3 text-center text-xs font-bold text-[#1b120c] transition hover:bg-[#d1a75f]">
                        Pilih Desain
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-[10px] leading-5 text-white/25">
              *Preview katalog menampilkan karakter visual tiap template. Demo aktif dapat dikembangkan menjadi preview spesifik per desain.
            </p>
          </div>
        </section>

        <section id="fitur" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 md:grid-cols-2 md:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#b78a43]">Bukan sekadar link</p>
                <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">Undangan yang terasa seperti website kalian sendiri.</h2>
              </div>
              <p className="leading-7 text-white/45">
                Dibuat mobile-first agar nyaman dibuka tamu dari WhatsApp. Konten, foto, musik, lokasi, cerita, dan RSVP bisa disesuaikan bersama tim Subur Maju.
              </p>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Mobile-first", "Nyaman dibuka dari HP tanpa aplikasi tambahan."],
                ["02", "RSVP & Ucapan", "Tamu bisa mengonfirmasi kehadiran dan mengirim doa."],
                ["03", "Countdown", "Hitung mundur menuju akad atau resepsi."],
                ["04", "Maps & Musik", "Lokasi Google Maps dan musik pilihan untuk pengalaman lebih hidup."],
              ].map(([no, title, copy]) => (
                <div key={no} className="rounded-3xl border border-white/[.08] bg-white/[.025] p-7">
                  <div className="text-xs text-[#b78a43]">{no}</div>
                  <h3 className="mt-10 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/40">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cara" className="bg-[#efe6d7] px-6 py-24 text-[#24170f]">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#9a7137]">Cara pesan</p>
                <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">Tiga langkah. Sisanya biar kami.</h2>
              </div>
              <div className="space-y-4">
                {[
                  ["01", "Pilih desain", "Pilih karakter Ruang Hati yang paling cocok dengan konsep pernikahan kalian."],
                  ["02", "Kirim data", "Kirim nama pasangan, tanggal, lokasi, foto, cerita, dan kebutuhan lainnya melalui WhatsApp."],
                  ["03", "Terima & bagikan", "Tim Subur Maju menyiapkan website undangan. Setelah selesai, tinggal bagikan link ke tamu."],
                ].map(([no, title, copy]) => (
                  <div key={no} className="grid grid-cols-[45px_1fr] gap-5 rounded-3xl border border-[#6b4b2c]/10 bg-white/45 p-6">
                    <div className="font-serif text-2xl text-[#a67b43]">{no}</div>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#604a38]/75">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-[#b78a43]/20 bg-gradient-to-br from-[#1b1510] via-[#171311] to-[#0c0c0c] px-7 py-16 text-center md:px-12">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#b78a43]/10 blur-3xl" />
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#d1a75f]">Ruang Hati × Subur Maju</p>
              <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl tracking-tight text-white md:text-6xl">
                Sekalian cetak, biar lengkap.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
                Setelah undangan digital siap, lanjutkan kebutuhan wedding kalian di Subur Maju:
                undangan fisik, banner, signage, kartu ucapan, souvenir, dan kebutuhan cetak lainnya.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a href={order()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#d1a75f] px-7 py-3.5 text-sm font-bold text-[#21150d] transition hover:-translate-y-1 hover:bg-[#e2bd7d]">
                  Konsultasi via WhatsApp
                </a>
                <Link href="/#katalog" className="rounded-full border border-white/10 bg-white/[.04] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#b78a43]/40">
                  Lihat Katalog Printing
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/[.07] px-6 py-10">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 text-xs text-white/35 md:flex-row md:items-center">
            <div>
              <strong className="text-white/75">Subur Maju Printing</strong>
              <span className="mx-2">·</span>
              Undangan Digital Ruang Hati
            </div>
            <div>Jakarta Timur · 24 Jam · 0822-4692-6544</div>
          </div>
        </footer>
      </main>
    </>
  );
}
