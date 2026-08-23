import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Subur Maju Printing | Digital Printing 24 Jam Jakarta Timur</title>

        <meta
          name="description"
          content="Subur Maju Printing melayani digital printing, hardcover skripsi, banner, spanduk, stiker, brosur, dan berbagai kebutuhan percetakan 24 jam di Jakarta Timur."
        />

        <meta
          name="keywords"
          content="digital printing Jakarta Timur, percetakan Jakarta Timur, hardcover skripsi, banner, spanduk, stiker, brosur, percetakan 24 jam"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://daycreed-inframe.vercel.app/testing"
        />

        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id":
                "https://daycreed-inframe.vercel.app/testing#business",
              "name": "Subur Maju Printing",
              "description":
                "Percetakan 24 jam di Jakarta Timur yang melayani digital printing, hardcover skripsi, banner, spanduk, stiker, brosur dan berbagai kebutuhan cetak.",
              "url":
                "https://daycreed-inframe.vercel.app/testing",
              "telephone": "+6282246926544",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Waru No. 24A, RT.1/RW.8",
                "addressLocality": "Rawamangun",
                "addressRegion": "DKI Jakarta",
                "postalCode": "13220",
                "addressCountry": "ID"
              },
              "openingHoursSpecification": [
                {
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
                }
              ],
              "areaServed": {
                "@type": "City",
                "name": "Jakarta Timur"
              },
              "sameAs": []
            })
          }}
        />
      </Head>

      <main className="bg-white text-black font-sans">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
          <div className="flex items-center gap-4">
            <img
              src="/avatar.png"
              alt="Logo Subur Maju Printing"
              className="w-14 h-14 rounded-2xl object-cover shadow"
            />

            <div>
              <div className="font-bold text-2xl tracking-tight">
                Subur Maju Printing
              </div>

              <p className="text-sm text-gray-500 -mt-1">
                Digital Printing 24 Jam
              </p>
            </div>
          </div>

          <nav
            aria-label="Navigasi utama"
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            <a
              href="#layanan"
              className="text-gray-800 hover:text-orange-600 transition"
            >
              Layanan
            </a>

            <a
              href="#katalog"
              className="text-gray-800 hover:text-orange-600 transition"
            >
              Katalog
            </a>

            <a
              href="#kenapa-kami"
              className="text-gray-800 hover:text-orange-600 transition"
            >
              Kenapa Kami
            </a>

            <a
              href="#lokasi"
              className="text-gray-800 hover:text-orange-600 transition"
            >
              Lokasi
            </a>
          </nav>

          <a
            href="https://wa.me/6282246926544"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi Subur Maju Printing melalui WhatsApp"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Hubungi WA
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        aria-labelledby="hero-title"
        className="pt-24 min-h-screen bg-gradient-to-br from-orange-600 via-amber-600 to-red-600 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="text-white">
            <p className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
              Subur Maju Printing • Jakarta Timur
            </p>

            {/* SATU-SATUNYA H1 */}
            <h1
              id="hero-title"
              className="text-6xl md:text-7xl font-bold leading-none tracking-tighter mb-6"
            >
              Hardcover Skripsi
              <br />
              Termurah &
              <br />
              Digital Printing
            </h1>

            <p className="text-xl text-white/90 max-w-lg">
              Melayani hardcover skripsi, banner, stiker, label, brosur,
              undangan, dan segala kebutuhan cetak Anda dengan kualitas
              premium.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://wa.me/6282246926544"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Konsultasi gratis melalui WhatsApp"
                className="bg-white text-orange-700 hover:bg-gray-100 font-bold px-10 py-4 rounded-2xl text-lg transition"
              >
                Konsultasi Gratis
              </a>

              <a
                href="#layanan"
                className="border border-white/70 hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl text-lg transition"
              >
                Lihat Layanan
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

      {/* STATS */}
      <section
        aria-label="Statistik Subur Maju Printing"
        className="py-12 bg-white border-b"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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

      {/* SERVICES */}
      <section
        id="layanan"
        aria-labelledby="layanan-title"
        className="py-24 px-6 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="layanan-title"
            className="text-center text-5xl font-bold mb-4"
          >
            Layanan Kami
          </h2>

          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Berbagai kebutuhan percetakan untuk bisnis, akademik, dan
            keperluan sehari-hari Anda.
          </p>

          <div
            className="
              flex gap-6 overflow-x-auto
              snap-x snap-mandatory
              pb-6
              scrollbar-hide
            "
          >
            {/* Digital Printing */}
            <article
              className="
                min-w-[85%] sm:min-w-[60%] lg:min-w-[31%]
                snap-center
                bg-white
                rounded-3xl
                overflow-hidden
                border border-gray-100
                shadow-sm
                hover:shadow-xl
                transition-all duration-300
              "
            >
              <img
                src="/digitalprinting.jpeg"
                alt="Layanan digital printing Subur Maju Printing"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h3 className="font-bold text-2xl mb-3">
                  Digital Printing
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Melayani berbagai kebutuhan cetak untuk keperluan bisnis,
                  akademik, maupun sehari-hari.
                </p>
              </div>
            </article>

            {/* Cetak Beragam Media */}
            <article
              className="
                min-w-[85%] sm:min-w-[60%] lg:min-w-[31%]
                snap-center
                bg-white
                rounded-3xl
                overflow-hidden
                border border-gray-100
                shadow-sm
                hover:shadow-xl
                transition-all duration-300
              "
            >
              <img
                src="/eyecolor.jpeg"
                alt="Beragam media cetak Subur Maju Printing"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h3 className="font-bold text-2xl mb-3">
                  Cetak Beragam Media
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Pilihan untuk berbagai kebutuhan cetak dengan media dan
                  ukuran yang beragam.
                </p>
              </div>
            </article>

            {/* Banner */}
            <article
              className="
                min-w-[85%] sm:min-w-[60%] lg:min-w-[31%]
                snap-center
                bg-white
                rounded-3xl
                overflow-hidden
                border border-gray-100
                shadow-sm
                hover:shadow-xl
                transition-all duration-300
              "
            >
              <img
                src="/lempanas.jpeg"
                alt="Layanan cetak banner dan spanduk"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h3 className="font-bold text-2xl mb-3">
                  Banner & Spanduk
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Untuk kebutuhan promosi, informasi, acara, dan berbagai
                  keperluan lainnya.
                </p>
              </div>
            </article>

            {/* Percetakan */}
            <article
              className="
                min-w-[85%] sm:min-w-[60%] lg:min-w-[31%]
                snap-center
                bg-white
                rounded-3xl
                overflow-hidden
                border border-gray-100
                shadow-sm
                hover:shadow-xl
                transition-all duration-300
              "
            >
              <img
                src="/owner.jpeg"
                alt="Layanan percetakan Subur Maju Printing"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h3 className="font-bold text-2xl mb-3">
                  Kebutuhan Percetakan
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Kami melayani berbagai kebutuhan percetakan sesuai
                  kebutuhan pelanggan.
                </p>
              </div>
            </article>
          </div>

          <div
            className="flex justify-center items-center gap-2 mt-4 md:hidden"
            aria-hidden="true"
          >
            <span className="text-gray-400 text-sm">
              ← Geser untuk melihat layanan lainnya →
            </span>
          </div>
        </div>
      </section>

      {/* KATALOG PRODUK */}
      <section
        id="katalog"
        aria-labelledby="katalog-title"
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2
              id="katalog-title"
              className="text-center text-5xl font-bold"
            >
              Katalog Produk
            </h2>

            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
              Temukan berbagai produk percetakan yang tersedia di Subur
              Maju Printing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {/* PRODUK 1 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src="/amplop.jpeg"
                  alt="Amplop custom"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-xl">Amplop Custom</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Amplop dengan desain custom.
                </p>

                <p className="text-orange-600 font-bold text-xl mt-3">
                  Rp5.000
                </p>

                <button
                  type="button"
                  aria-label="Tambah Amplop Custom ke keranjang"
                  className="w-full mt-4 bg-black hover:bg-gray-800 text-white py-3 rounded-full text-xs font-bold transition"
                >
                  TAMBAH KE KERANJANG
                </button>

                <a
                  href="https://wa.me/6282246926544"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pesan Amplop Custom melalui WhatsApp"
                  className="w-full mt-2 flex justify-center items-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-full text-xs font-bold transition"
                >
                  CHAT WHATSAPP
                </a>
              </div>
            </article>

            {/* PRODUK 2 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src="/bando.jpeg"
                  alt="Bando Tuing-Tuing custom"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-xl">
                  Bando Tuing-Tuing
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Bando custom berbagai kebutuhan.
                </p>

                <p className="text-orange-600 font-bold text-xl mt-3">
                  Rp7.000
                </p>

                <button
                  type="button"
                  aria-label="Tambah Bando Tuing-Tuing ke keranjang"
                  className="w-full mt-4 bg-black hover:bg-gray-800 text-white py-3 rounded-full text-xs font-bold transition"
                >
                  TAMBAH KE KERANJANG
                </button>

                <a
                  href="https://wa.me/6282246926544"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pesan Bando Tuing-Tuing melalui WhatsApp"
                  className="w-full mt-2 flex justify-center items-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-full text-xs font-bold transition"
                >
                  CHAT WHATSAPP
                </a>
              </div>
            </article>

            {/* PRODUK 3 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src="/bloknot.jpeg"
                  alt="Bloknot custom"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-xl">Bloknot</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Bloknot custom.
                </p>

                <p className="text-orange-600 font-bold text-xl mt-3">
                  Mulai Rp5.000
                </p>

                <button
                  type="button"
                  aria-label="Tambah Bloknot ke keranjang"
                  className="w-full mt-4 bg-black hover:bg-gray-800 text-white py-3 rounded-full text-xs font-bold transition"
                >
                  TAMBAH KE KERANJANG
                </button>

                <a
                  href="https://wa.me/6282246926544"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pesan Bloknot melalui WhatsApp"
                  className="w-full mt-2 flex justify-center items-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-full text-xs font-bold transition"
                >
                  CHAT WHATSAPP
                </a>
              </div>
            </article>

            {/* PRODUK 4 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src="/brosur.jpeg"
                  alt="Brosur promosi dan informasi"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-xl">Brosur</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Brosur promosi dan informasi.
                </p>

                <p className="text-orange-600 font-bold text-xl mt-3">
                  Rp1.000
                </p>

                <button
                  type="button"
                  aria-label="Tambah Brosur ke keranjang"
                  className="w-full mt-4 bg-black hover:bg-gray-800 text-white py-3 rounded-full text-xs font-bold transition"
                >
                  TAMBAH KE KERANJANG
                </button>

                <a
                  href="https://wa.me/6282246926544"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pesan Brosur melalui WhatsApp"
                  className="w-full mt-2 flex justify-center items-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-full text-xs font-bold transition"
                >
                  CHAT WHATSAPP
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        id="kenapa-kami"
        aria-labelledby="kenapa-title"
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="kenapa-title"
            className="text-center text-5xl font-bold mb-16"
          >
            Kenapa Pilih Subur Maju?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <article className="bg-white rounded-3xl p-8 shadow-sm hover:shadow transition">
              <h3 className="font-bold text-xl mb-3 text-orange-600">
                ✓ Buka 24 Jam
              </h3>
              <p className="text-gray-600">
                Siap melayani kapan saja Anda butuh.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-sm hover:shadow transition">
              <h3 className="font-bold text-xl mb-3 text-orange-600">
                ✓ Pengerjaan Cepat
              </h3>
              <p className="text-gray-600">
                Order hari ini, besok jadi.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-sm hover:shadow transition">
              <h3 className="font-bold text-xl mb-3 text-orange-600">
                ✓ Harga Termurah
              </h3>
              <p className="text-gray-600">
                Kualitas tinggi dengan harga bersaing.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-sm hover:shadow transition">
              <h3 className="font-bold text-xl mb-3 text-orange-600">
                ✓ Respon Instan
              </h3>
              <p className="text-gray-600">
                Tim kami fast response via WhatsApp.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-sm hover:shadow transition">
              <h3 className="font-bold text-xl mb-3 text-orange-600">
                ✓ Kualitas Terjamin
              </h3>
              <p className="text-gray-600">
                Material premium + garansi.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-sm hover:shadow transition">
              <h3 className="font-bold text-xl mb-3 text-orange-600">
                ✓ Pengalaman Bertahun-tahun
              </h3>
              <p className="text-gray-600">
                Terpercaya di Jakarta.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* LOKASI */}
      <section
        id="lokasi"
        aria-labelledby="lokasi-title"
        className="bg-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="lokasi-title"
            className="text-center text-4xl font-bold mb-12"
          >
            Lokasi Kami
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <article className="bg-gray-50 rounded-3xl p-8 shadow">
              <h3 className="text-2xl font-bold mb-6">
                📍 Subur Maju Printing
              </h3>

              <address className="not-italic text-gray-700 leading-relaxed">
                Jl. Waru No. 24A,
                <br />
                RT.1/RW.8, Rawamangun,
                <br />
                Kec. Pulo Gadung,
                <br />
                Kota Jakarta Timur 13220
              </address>

              <div className="mt-6 space-y-3">
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
                aria-label="Lihat lokasi Subur Maju Printing di Google Maps"
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

      {/* CTA */}
      <section
        aria-labelledby="cta-title"
        className="py-24 px-6 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-title" className="text-5xl font-bold">
            Siap Cetak Sekarang?
          </h2>

          <p className="mt-4 text-xl text-gray-500">
            Kirim file Anda dan konsultasikan kebutuhan cetak melalui
            WhatsApp.
          </p>

          <a
            href="https://wa.me/6282246926544"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order cetak melalui WhatsApp"
            className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition"
          >
            Order Via WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-orange-700 via-orange-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/avatar.png"
                  alt="Logo Subur Maju Printing"
                  className="w-16 h-16 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="font-bold text-3xl">
                    Subur Maju Printing
                  </h3>

                  <p className="text-orange-200">
                    Digital Printing 24 Jam
                  </p>
                </div>
              </div>

              <p className="text-orange-100 leading-relaxed">
                Melayani Digital Printing, Hardcover Skripsi, Banner,
                Spanduk, Stiker, Brosur, dan berbagai kebutuhan percetakan
                dengan pengerjaan cepat dan harga terjangkau.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6">
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
              <h3 className="font-bold text-xl mb-6">
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
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-orange-200">
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

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/6282246926544"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Subur Maju Printing melalui WhatsApp"
        className="fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-700 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-2xl z-50 transition-all duration-300"
      >
        <span aria-hidden="true">💬</span>

        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl border-4 border-orange-400 animate-ping opacity-75"
        />

        <span
          aria-hidden="true"
          className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"
        />
            </a>
    </main>
  </>
  );
}
