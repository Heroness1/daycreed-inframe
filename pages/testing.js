export default function Home() {
  return (
    <main className="bg-white text-black font-inter">

      {/* NAVBAR */}
<header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
    <div className="flex items-center gap-4">
      <img
        src="/avatar.png"
        alt="Subur Maju Printing"
        className="w-14 h-14 rounded-2xl object-cover shadow"
      />
      <div>
        <h1 className="font-bold text-2xl tracking-tighter font-playfair">Subur Maju Printing</h1>
        <p className="text-sm text-gray-500 -mt-1">Digital Printing 24 Jam</p>
      </div>
    </div>

    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
      <a href="#layanan" className="hover:text-orange-600 transition">Layanan</a>
      <a href="#kenapa-kami" className="hover:text-orange-600 transition">Kenapa Kami</a>
      <a href="#lokasi" className="hover:text-orange-600 transition">Lokasi</a>
    </nav>

    {/* Tombol Hubungi WhatsApp Premium */}
    <a
      href="https://wa.me/6282246926544"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl active:scale-95"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.372-.05-.52-.099-.149-.67-.807-1.14-1.1-.47-.293-.99-.248-1.14-.124-.15.124-.595.595-.743.744-.148.149-.297.198-.496.05-.198-.149-1.02-.38-1.97-.45-.95-.07-1.71.15-2.31.45-.6.3-1.14 1.14-1.14 2.09 0 .95.4 1.9 1.14 2.6.74.7 1.71 1.14 2.66 1.14.95 0 1.9-.4 2.6-1.14.7-.74 1.14-1.71 1.14-2.66 0-.95-.4-1.9-1.14-2.6z"/>
      </svg>
      <span>Hubungi WhatsApp</span>
    </a>
  </div>
</header>

      {/* HERO */}
      <section className="pt-24 min-h-screen bg-gradient-to-br from-orange-600 via-amber-600 to-red-600 flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
              Percetakan 24 Jam • Jakarta Timur
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tighter mb-6 font-playfair">
              Hardcover Skripsi<br />
              Termurah &<br />
              Digital Printing
            </h1>

            <p className="text-xl text-white/90 max-w-lg">
              Melayani hardcover skripsi, banner, stiker, label, brosur, undangan, dan segala kebutuhan cetak Anda dengan kualitas premium.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://wa.me/6282246926544"
                target="_blank"
                rel="noopener noreferrer"
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
              alt="Digital Printing"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-white border-b">
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
      <section id="layanan" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold mb-4 font-playfair tracking-tight">Layanan Kami</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Solusi percetakan lengkap untuk kebutuhan bisnis dan akademik Anda
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card title="Hardcover Skripsi" icon="📚" desc="Finishing premium, harga terbaik" />
            <Card title="Digital Printing" icon="🖨️" desc="Brosur, flyer, dokumen, kartu nama" />
            <Card title="Banner & Spanduk" icon="🎨" desc="Outdoor & indoor berkualitas" />
            <Card title="Stiker & Label" icon="🏷️" desc="Custom label produk & kemasan" />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="kenapa-kami" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold mb-16 font-playfair tracking-tight">Kenapa Pilih Subur Maju?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <Feature title="Buka 24 Jam" desc="Siap melayani kapan saja Anda butuh" />
            <Feature title="Pengerjaan Cepat" desc="Order hari ini, besok jadi" />
            <Feature title="Harga Termurah" desc="Kualitas tinggi dengan harga bersaing" />
            <Feature title="Respon Instan" desc="Tim kami fast response via WhatsApp" />
            <Feature title="Kualitas Terjamin" desc="Material premium + garansi" />
            <Feature title="Pengalaman Bertahun-tahun" desc="Terpercaya di Jakarta Timur" />
          </div>
        </div>
      </section>

      {/* LOKASI */}
      <section id="lokasi" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-12 font-playfair tracking-tight">Lokasi Kami</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 rounded-3xl p-8 shadow">
              <h3 className="text-2xl font-bold mb-6">📍 Subur Maju Printing</h3>
              <p className="text-gray-700 leading-relaxed">
                Jl. Waru No. 24A,<br />
                RT.1/RW.8, Rawamangun,<br />
                Kec. Pulo Gadung,<br />
                Kota Jakarta Timur 13220
              </p>

              <div className="mt-6 space-y-3">
                <p><strong>🕒 Buka 24 Jam</strong></p>
                <p><strong>📞 WhatsApp:</strong> 0822-4692-6544</p>
              </div>

              <p className="mt-6 text-gray-600">
                Percetakan 24 Jam Jakarta Timur yang melayani hardcover skripsi, 
                digital printing, banner, stiker, brosur, dan berbagai kebutuhan cetak.
              </p>

              <a
                href="https://maps.google.com/?q=Jl.+Waru+No.+24A+Rawamangun+Jakarta+Timur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl transition"
              >
                Buka Google Maps
              </a>
            </div>

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
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold font-playfair tracking-tight">Siap Cetak Sekarang?</h2>
          <p className="mt-4 text-xl text-gray-500">
            Kirim file Anda dan konsultasikan kebutuhan cetak melalui WhatsApp.
          </p>
          <a
            href="https://wa.me/6282246926544"
            target="_blank"
            rel="noopener noreferrer"
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
                  alt="Subur Maju Printing"
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="font-bold text-3xl font-playfair">Subur Maju Printing</h3>
                  <p className="text-orange-200">Digital Printing 24 Jam</p>
                </div>
              </div>
              <p className="text-orange-100 leading-relaxed">
                Melayani Digital Printing, Hardcover Skripsi, Banner, Spanduk, 
                Stiker, Brosur, dan berbagai kebutuhan percetakan dengan 
                pengerjaan cepat dan harga terjangkau.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6">Informasi Kontak</h3>
              <div className="space-y-4 text-orange-100">
                <p>
                  📍 Jl. Waru No.24A<br />
                  Rawamangun, Pulo Gadung<br />
                  Jakarta Timur 13220
                </p>
                <p>📞 0822-4692-6544</p>
                <p>🕒 Buka 24 Jam</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6">Layanan Populer</h3>
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
            <p>© {new Date().getFullYear()} Subur Maju Printing. All Rights Reserved.</p>
            <p>Digital Presence by <span className="font-semibold text-white">Lure</span></p>
          </div>
        </div>
      </footer>

      {/* FLOATING WA */}
      <a
        href="https://wa.me/6282246926544"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-700 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-2xl z-50 transition-all duration-300 group"
      >
        💬
        <span className="absolute inset-0 rounded-2xl border-4 border-orange-400 animate-ping opacity-75"></span>
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></span>
      </a>
    </main>
  );
}

// ==================== KOMPONEN ====================
function Card({ title, icon, desc }) {
  return (
    <div className="group bg-white p-10 rounded-3xl border hover:border-orange-200 hover:shadow-xl transition-all duration-300 text-center">
      <div className="text-6xl mb-6 group-hover:scale-110 transition">{icon}</div>
      <h3 className="font-bold text-2xl mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow transition">
      <h3 className="font-bold text-xl mb-3 text-orange-600">✓ {title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
