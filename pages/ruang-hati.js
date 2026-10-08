import Head from "next/head";
import Link from "next/link";

const templates = [
  { id: "01", name: "Royal Jawa", tone: "Elegan • Tradisional", icon: "✦" },
  { id: "02", name: "Modern Classic", tone: "Clean • Timeless", icon: "◌" },
  { id: "03", name: "Garden Romance", tone: "Natural • Romantic", icon: "❀" },
  { id: "04", name: "Royal Luxe", tone: "Mewah • Dramatic", icon: "♛" },
  { id: "05", name: "Minimal Love", tone: "Simple • Intimate", icon: "♡" },
];

export default function RuangHati() {
  return (
    <>
      <Head>
        <title>Ruang Hati — Website Pernikahan Digital | Subur Maju</title>
        <meta
          name="description"
          content="Buat website pernikahan digital yang elegan, personal, dan nyaman dibuka di HP bersama Ruang Hati dari Subur Maju Printing."
        />
      </Head>

      <main className="min-h-screen overflow-hidden bg-[#080706] text-[#f7f1e8]">
        <section className="relative min-h-[88vh] flex items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,145,77,.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(129,83,48,.16),transparent_35%)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
              ← Subur Maju Printing
            </Link>

            <div className="mt-20 max-w-4xl">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[.35em] text-[#d6ae72]">
                Ruang Hati • Digital Wedding
              </p>

              <h1 className="font-serif text-5xl leading-[.95] md:text-8xl">
                Ceritakan hari
                <br />
                <em className="text-[#d6ae72]">terindahmu.</em>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                Website pernikahan personal yang dibuat untuk menyimpan cerita,
                momen, dan informasi hari bahagia dalam satu pengalaman digital
                yang elegan.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#template"
                  className="rounded-full bg-[#d6ae72] px-7 py-4 text-center text-sm font-bold text-[#17110b] transition hover:-translate-y-0.5 hover:bg-[#ebc98e]"
                >
                  Lihat Pilihan Desain
                </a>
                <a
                  href="https://wa.me/6282246926544?text=Halo%20Kak%2C%20saya%20tertarik%20membuat%20website%20pernikahan%20Ruang%20Hati."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Konsultasi via WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-20 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
              {["Mobile Friendly", "Countdown", "Galeri Foto", "RSVP"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[.035] p-4 text-center text-xs text-white/60 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="template" className="border-t border-white/10 bg-[#0d0b09] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[.3em] text-[#d6ae72]">
                Pilih suasana
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl">Desain yang terasa seperti kalian.</h2>
              <p className="mt-5 leading-7 text-white/50">
                Lima konsep awal Ruang Hati. Setelah memilih gaya, data pernikahan
                dan konten dapat dipersonalisasi bersama tim Subur Maju.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <article
                  key={template.id}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.03] transition duration-500 hover:-translate-y-1 hover:border-[#d6ae72]/40"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#342719] via-[#17120e] to-black p-6">
                    <div className="absolute inset-5 rounded-[1.5rem] border border-[#d6ae72]/20" />
                    <div className="relative flex h-full flex-col items-center justify-center text-center">
                      <span className="text-4xl text-[#d6ae72]">{template.icon}</span>
                      <span className="mt-6 text-[10px] uppercase tracking-[.4em] text-white/35">
                        Template {template.id}
                      </span>
                      <h3 className="mt-3 font-serif text-3xl">{template.name}</h3>
                      <p className="mt-2 text-xs text-white/45">{template.tone}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <span className="text-sm font-semibold">{template.name}</span>
                    <span className="text-xs text-white/35">Preview →</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#d6ae72]/20 bg-gradient-to-br from-[#21180f] to-[#0e0b08] p-8 text-center md:p-16">
            <p className="text-xs font-semibold uppercase tracking-[.3em] text-[#d6ae72]">Siap dibuat</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl">Bikin undanganmu jadi pengalaman.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Ceritakan kebutuhanmu. Tim Subur Maju akan membantu memilih desain,
              mengatur konten, dan menyiapkan website pernikahanmu.
            </p>
            <a
              href="https://wa.me/6282246926544?text=Halo%20Kak%2C%20saya%20mau%20buat%20website%20pernikahan%20Ruang%20Hati.%20Saya%20ingin%20konsultasi%20template%20dan%20harga."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex rounded-full bg-[#d6ae72] px-8 py-4 text-sm font-bold text-[#17110b] transition hover:bg-[#ebc98e]"
            >
              Mulai Konsultasi
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
