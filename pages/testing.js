import Head from "next/head";
import Catalog from "../components/Catalog";
import {
  dataLayanan,
  dataKenapaKami,
  dataKlien,
} from "../data/printData";

const WHATSAPP_NUMBER = "6282246926544";

const whatsappOrderMessage = encodeURIComponent(
  `Halo Kak, saya mau order dari website Subur Maju Printing.

Produk:
Jumlah:
Ukuran:
Deadline:`
);

const whatsappConsultMessage = encodeURIComponent(
  `Halo Kak, saya mau konsultasi mengenai kebutuhan cetak di Subur Maju Printing.

Produk:
Jumlah:
Ukuran:
Deadline:`
);

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
        <meta name="language" content="id-ID" />

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

        {/* Performance */}
        <link rel="preload" as="image" href="/printer.png" />
      </Head>

      <main className="bg-white font-sans text-gray-800">
        {/* ================= NAVBAR ================= */}
        <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <img
                src="/avatar.png"
                alt="Logo Subur Maju Printing"
                className="h-14 w-14 rounded-2xl object-cover shadow"
              />

              <div>
                <div className="text-2xl font-bold tracking-tight text-gray-900">
                  Subur Maju Printing
                </div>

                <p className="-mt-1 text-sm text-gray-500">
                  Digital Printing 24 Jam
                </p>
              </div>
            </div>

            <nav
              aria-label="Navigasi utama"
              className="hidden items-center gap-8 text-sm font-medium md:flex"
            >
              <a
                href="#layanan"
                className="text-gray-700 transition hover:text-orange-600"
              >
                Layanan
              </a>

              <a
                href="#katalog"
                className="text-gray-700 transition hover:text-orange-600"
              >
                Katalog
              </a>

              <a
                href="#kenapa-kami"
                className="text-gray-700 transition hover:text-orange-600"
              >
                Kenapa Kami
              </a>

              <a
                href="#klien"
                className="text-gray-700 transition hover:text-orange-600"
              >
                Klien
              </a>

              <a
                href="#lokasi"
                className="text-gray-700 transition hover:text-orange-600"
              >
                Lokasi
              </a>
            </nav>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappOrderMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi Subur Maju Printing melalui WhatsApp"
              className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
            >
              Hubungi WA
            </a>
          </div>
        </header>

        {/* ================= HERO ================= */}
        <section
          aria-labelledby="hero-title"
          className="bg-gradient-to-br from-orange-600 via-amber-600 to-red-600 pb-16 pt-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-2">
            <div className="text-white">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
                Subur Maju Printing • Jakarta Timur
              </p>

              <h1
                id="hero-title"
                className="mb-6 text-6xl font-bold leading-none tracking-tighter text-white md:text-7xl"
              >
                Digital Printing Jakarta Timur 24 Jam
                <br />
                Hardcover Skripsi & Percetakan
              </h1>

              <p className="max-w-lg text-xl text-white/95">
                Subur Maju Printing melayani digital printing 24 jam di
                Jakarta Timur, termasuk hardcover skripsi, banner, spanduk,
                stiker, brosur, undangan, dan berbagai kebutuhan percetakan
                dengan kualitas terbaik.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappConsultMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Konsultasi kebutuhan cetak melalui WhatsApp"
                  className="rounded-2xl bg-white px-10 py-4 text-lg font-bold text-orange-700 transition hover:bg-gray-100"
                >
                  Konsultasi Gratis
                </a>

                <a
                  href="#katalog"
                  className="rounded-2xl border border-white/70 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
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
          className="border-b bg-white py-12"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
            <div>
              <div className="text-4xl font-bold text-orange-600">24</div>
              <div className="text-gray-600">Jam Layanan</div>
            </div>

            <div>
              <div className="text-4xl font-bold text-orange-600">1000+</div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>

            <div>
              <div className="text-4xl font-bold text-orange-600">100%</div>
              <div className="text-gray-600">Garansi Puas</div>
            </div>

            <div>
              <div className="text-4xl font-bold text-orange-600">Fast</div>
              <div className="text-gray-600">Pengerjaan Cepat</div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section
          id="layanan"
          aria-labelledby="layanan-title"
          className="bg-gray-50 px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="layanan-title"
              className="mb-4 text-center text-5xl font-bold text-gray-900"
            >
              Layanan Kami
            </h2>

            <p className="mx-auto mb-16 max-w-2xl text-center text-gray-600">
              Berbagai kebutuhan percetakan untuk bisnis, akademik, dan
              keperluan sehari-hari Anda.
            </p>

            <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
              {dataLayanan.map((item, index) => (
                <article
                  key={index}
                  className="min-w-[85%] snap-center overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl sm:min-w-[60%] lg:min-w-[31%]"
                >
                  <img
                    src={item.gambar}
                    alt={`Layanan ${item.judul} Subur Maju Printing`}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-8">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      {item.judul}
                    </h3>

                    <p className="leading-relaxed text-gray-600">
                      {item.deskripsi}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div
              className="mt-4 flex items-center justify-center gap-2 md:hidden"
              aria-hidden="true"
            >
              <span className="text-sm text-gray-400">
                ← Geser untuk melihat layanan lainnya →
              </span>
            </div>
          </div>
        </section>

        {/* ================= KATALOG ================= */}
        <Catalog />

        {/* ================= WHY US ================= */}
        <section
          id="kenapa-kami"
          aria-labelledby="kenapa-title"
          className="bg-gray-50 px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="kenapa-title"
              className="mb-16 text-center text-5xl font-bold text-gray-900"
            >
              Kenapa Pilih Subur Maju?
            </h2>

            <div className="grid gap-10 md:grid-cols-3">
              {dataKenapaKami.map((item, index) => (
                <article
                  key={index}
                  className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow"
                >
                  <h3 className="mb-3 text-xl font-bold text-orange-600">
                    {item.judul}
                  </h3>

                  <p className="text-gray-600">{item.deskripsi}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= KLIEN ================= */}
        <section
          id="klien"
          aria-labelledby="klien-title"
          className="overflow-hidden border-y border-gray-100 bg-white py-20"
        >
          <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
            <p
              id="klien-title"
              className="text-xs font-bold uppercase tracking-widest text-gray-900 md:text-sm"
            >
              Pernah Melayani Kebutuhan Cetak untuk Berbagai Perusahaan &
              Instansi
            </p>
          </div>

          <div className="relative w-full overflow-hidden whitespace-nowrap py-4">
            <div className="animate-marquee inline-flex items-center gap-16">
              {[...dataKlien, ...dataKlien, ...dataKlien].map(
                (klien, index) => (
                  <div
                    key={`${klien.nama}-${index}`}
                    className="flex flex-col items-center justify-center gap-3 px-6"
                  >
                    <div className="flex h-20 w-36 items-center justify-center">
                      <img
                        src={klien.logo}
                        alt={`Logo ${klien.nama}`}
                        className="max-h-20 max-w-[140px] w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <span className="whitespace-nowrap text-center text-xs font-bold text-gray-800 md:text-sm">
                      {klien.nama}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ================= MARQUEE CSS ================= */}
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

          @media (prefers-reduced-motion: reduce) {
            .animate-marquee {
              animation: none;
            }
          }
        `}</style>

        {/* ================= LOKASI ================= */}
        <section
          id="lokasi"
          aria-labelledby="lokasi-title"
          className="bg-white px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="lokasi-title"
              className="mb-12 text-center text-4xl font-bold text-gray-900"
            >
              Lokasi Kami
            </h2>

            <div className="grid gap-10 md:grid-cols-2">
              <article className="rounded-3xl bg-gray-50 p-8 shadow">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  📍 Subur Maju Printing
                </h3>

                <address className="not-italic leading-relaxed text-gray-700">
                  Jl. Waru No. 24A,
                  <br />
                  RT.1/RW.8, Rawamangun,
                  <br />
                  Kec. Pulo Gadung,
                  <br />
                  Kota Jakarta Timur 13220
                </address>

                <div className="mt-6 space-y-3 text-gray-700">
                  <p>
                    <strong>🕒 Buka 24 Jam</strong>
                  </p>

                  <p>
                    <strong>📞 WhatsApp:</strong> 0822-4692-6544
                  </p>
                </div>

                <p className="mt-6 text-gray-600">
                  Percetakan 24 Jam Jakarta Timur yang melayani hardcover
                  skripsi, digital printing, banner, stiker, brosur, dan
                  berbagai kebutuhan cetak.
                </p>

                <a
                  href="https://maps.google.com/?q=Jl.+Waru+No.+24A+Rawamangun+Jakarta+Timur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block rounded-xl bg-orange-600 px-6 py-3 text-white transition hover:bg-orange-700"
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
        <section
          aria-labelledby="cta-title"
          className="bg-gray-50 px-6 py-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2
              id="cta-title"
              className="text-5xl font-bold text-gray-900"
            >
              Siap Cetak Sekarang?
            </h2>

            <p className="mt-4 text-xl text-gray-600">
              Kirim file Anda dan konsultasikan kebutuhan cetak melalui
              WhatsApp.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-2xl bg-orange-600 px-10 py-5 text-xl font-bold text-white transition hover:bg-orange-700"
            >
              Order Via WhatsApp
            </a>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-gradient-to-br from-orange-700 via-orange-600 to-amber-600 text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-12 md:grid-cols-3">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <img
                    src="/avatar.png"
                    alt="Logo Subur Maju Printing"
                    className="h-16 w-16 rounded-2xl object-cover"
                  />

                  <div>
                    <h3 className="text-3xl font-bold">
                      Subur Maju Printing
                    </h3>

                    <p className="text-orange-200">
                      Digital Printing 24 Jam
                    </p>
                  </div>
                </div>

                <p className="leading-relaxed text-orange-100">
                  Melayani Digital Printing, Hardcover Skripsi, Banner,
                  Spanduk, Stiker, Brosur, dan berbagai kebutuhan percetakan
                  dengan pengerjaan cepat dan harga terjangkau.
                </p>
              </div>

              <div>
                <h3 className="mb-6 text-xl font-bold">
                  Informasi Kontak
                </h3>

                <div className="space-y-4 text-orange-100">
                  <address className="not-italic">
                    📍 Jl. Waru No.24A
                    <br />
                    Rawamangun, Pulo Gadung
                    <br />
                    Jakarta Timur 13220
                  </address>

                  <p>📞 0822-4692-6544</p>
                  <p>🕒 Buka 24 Jam</p>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-xl font-bold">
                  Layanan Populer
                </h3>

                <ul className="space-y-3 text-orange-100">
                  <li>✓ Hardcover Skripsi</li>
                  <li>✓ Digital Printing</li>
                  <li>✓ Banner & Spanduk</li>
                  <li>✓ Stiker & Label</li>
                  <li>✓ Brosur & Flyer</li>
                  <li>✓ Undangan & Kartu Nama</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 py-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-orange-200 md:flex-row">
              <p>
                © {new Date().getFullYear()} Subur Maju Printing. All Rights
                Reserved.
              </p>

              <p>
                Digital Presence by{" "}
                <span className="font-semibold text-white">Lure</span>
              </p>
            </div>
          </div>
        </footer>

        {/* ================= FLOATING WHATSAPP ================= */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi Subur Maju Printing melalui WhatsApp"
          className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-600 text-4xl text-white shadow-2xl transition-all duration-300 hover:bg-orange-700"
        >
          <span aria-hidden="true">💬</span>

          <span
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-2xl border-4 border-orange-400 opacity-75"
          />

          <span
            aria-hidden="true"
            className="absolute -right-1 -top-1 h-5 w-5 rounded-full border-2 border-white bg-green-400"
          />
        </a>
      </main>
    </>
  );
}
