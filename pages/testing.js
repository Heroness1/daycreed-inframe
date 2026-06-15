export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">

          <div className="flex items-center gap-3">
            <img
              src="/avatar.png"
              alt="Subur Maju Printing"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h2 className="font-bold leading-none">
                Subur Maju Printing
              </h2>

              <p className="text-xs text-gray-500">
                Digital Printing
              </p>
            </div>
          </div>

          <button className="text-3xl">
            ☰
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="pt-24 min-h-screen bg-gradient-to-r from-green-500 to-cyan-500">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>

              <p className="text-white text-xl mb-4">
                Percetakan 24 Jam
              </p>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hardcover Skripsi
                <br />
                Termurah &
                <br />
                Digital Printing
              </h1>

              <p className="mt-6 text-xl text-white/90">
                Melayani hardcover skripsi,
                banner, stiker, brosur,
                undangan, dan berbagai
                kebutuhan percetakan lainnya.
              </p>

              <a
                href="https://wa.me/6282246926544"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-red-500 hover:bg-red-600 transition text-white font-bold px-8 py-4 rounded-full text-lg"
              >
                Konsultasi Gratis
              </a>

            </div>

            {/* RIGHT */}
            <div>

              <img
                src="/printer.png"
                alt="Digital Printing"
                className="w-full rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-4xl font-bold mb-12">
            Layanan Kami
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <Card
              title="Hardcover Skripsi"
              icon="📚"
            />

            <Card
              title="Digital Printing"
              icon="🖨️"
            />

            <Card
              title="Banner & Spanduk"
              icon="🎨"
            />

            <Card
              title="Stiker & Label"
              icon="🏷️"
            />

          </div>

        </div>

      </section>

      {/* WHY US */}
      <section className="bg-gray-100 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-4xl font-bold mb-12">
            Kenapa Pilih Kami?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <Feature text="Buka 24 Jam" />
            <Feature text="Pengerjaan Cepat" />
            <Feature text="Harga Terjangkau" />
            <Feature text="Respon WhatsApp Cepat" />

          </div>

        </div>

      </section>
  {/* LOKASI */}
<section className="bg-white py-24 px-6">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-center text-4xl font-bold mb-12">
      Lokasi Kami
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* INFO */}
      <div className="bg-gray-50 rounded-3xl p-8 shadow">

        <h3 className="text-2xl font-bold mb-6">
          📍 Subur Maju Printing
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Jl. Waru No. 24A,
          RT.1/RW.8,
          Rawamangun,
          Kec. Pulo Gadung,
          Kota Jakarta Timur,
          Daerah Khusus Ibukota Jakarta 13220
        </p>

        <div className="mt-6 space-y-3">

          <p>
            🕒 <strong>Buka 24 Jam</strong>
          </p>

          <p>
            📞 <strong>WhatsApp:</strong> 0822-4692-6544
          </p>

        </div>

        <p className="mt-6 text-gray-600">
          Percetakan 24 Jam Jakarta Timur yang melayani
          hardcover skripsi, digital printing, banner,
          stiker, brosur, dan berbagai kebutuhan cetak
          dengan pengerjaan cepat dan harga terjangkau.
        </p>

        <a
          href="https://maps.google.com/?q=Jl.+Waru+No.+24A+Rawamangun+Jakarta+Timur"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          Buka Google Maps
        </a>

      </div>

      {/* GOOGLE MAPS */}
      <div className="overflow-hidden rounded-3xl shadow">

        <iframe
          src="https://maps.google.com/maps?q=Jl.%20Waru%20No.%2024A%20Rawamangun%20Jakarta%20Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />

      </div>

    </div>

  </div>

</section>

      {/* CTA */}
      <section className="py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            Siap Cetak Sekarang?
          </h2>

          <p className="mt-4 text-xl text-gray-500">
            Kirim file Anda dan konsultasikan
            kebutuhan cetak melalui WhatsApp.
          </p>

          <a
            href="https://wa.me/6282246926544"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-xl font-bold"
          >
            Order Via WhatsApp
          </a>

        </div>

      </section>
{/* FOOTER */}
<footer className="bg-gradient-to-r from-green-600 via-green-500 to-cyan-500 text-white">

  <div className="max-w-7xl mx-auto px-6 py-14">

    <div className="grid md:grid-cols-3 gap-10">

      {/* COMPANY */}
      <div>

        <div className="flex items-center gap-3 mb-4">

          <img
            src="/avatar.png"
            alt="Subur Maju Printing"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>

            <h3 className="font-bold text-2xl">
              Subur Maju Printing
            </h3>

            <p className="text-white/80 text-sm">
              Percetakan 24 Jam Jakarta Timur
            </p>

          </div>

        </div>

        <p className="text-white/90 leading-relaxed">
          Melayani Digital Printing,
          Hardcover Skripsi, Banner,
          Spanduk, Stiker, Brosur,
          Print Dokumen dan berbagai
          kebutuhan percetakan dengan
          pengerjaan cepat serta harga terjangkau.
        </p>

      </div>

      {/* ALAMAT */}
      <div>

        <h3 className="font-bold text-xl mb-4">
          Informasi Kontak
        </h3>

        <div className="space-y-3">

          <p>
            📍 Jl. Waru No.24A
            <br />
            Rawamangun, Pulo Gadung
            <br />
            Jakarta Timur 13220
          </p>

          <p>
            📞 0822-4692-6544
          </p>

          <p>
            🕒 Buka 24 Jam
          </p>

        </div>

      </div>

      {/* LAYANAN */}
      <div>

        <h3 className="font-bold text-xl mb-4">
          Layanan Populer
        </h3>

        <ul className="space-y-2">

          <li>✓ Hardcover Skripsi</li>

          <li>✓ Digital Printing</li>

          <li>✓ Cetak Banner</li>

          <li>✓ Cetak Brosur</li>

          <li>✓ Stiker & Label</li>

          <li>✓ Print Dokumen</li>

        </ul>

      </div>

    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="border-t border-white/20">

    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

      <p className="text-sm text-white/80 text-center md:text-left">
        © {new Date().getFullYear()} Subur Maju Printing.
        All Rights Reserved.
      </p>

      <p className="text-sm text-white/80 text-center md:text-right">
        Digital Presence by <span className="font-semibold text-white">Lure</span>
      </p>

    </div>

  </div>

</footer>

      {/* FLOATING WA */}
      <a
        href="https://wa.me/6282246926544"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-xl"
      >
        💬
      </a>

    </main>
  );
}

function Card({ title, icon }) {
  return (
    <div className="p-8 rounded-3xl border hover:shadow-lg transition text-center bg-white">
      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h3 className="font-bold text-xl">
        {title}
      </h3>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="bg-white rounded-3xl p-8 text-center shadow">
      <h3 className="font-bold">
        ✓ {text}
      </h3>
    </div>
  );
}
