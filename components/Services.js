export function Services() {
  return (
    <section id="layanan" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold mb-4">Layanan Kami</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Solusi percetakan lengkap untuk kebutuhan bisnis dan akademik Anda
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-white p-10 rounded-3xl border hover:border-orange-200 hover:shadow-xl transition-all duration-300 text-center">
            <div className="text-6xl mb-6 group-hover:scale-110 transition">📚</div>
            <h3 className="font-bold text-2xl mb-3">Hardcover Skripsi</h3>
            <p className="text-gray-600">Finishing premium, harga terbaik</p>
          </div>
          <div className="group bg-white p-10 rounded-3xl border hover:border-orange-200 hover:shadow-xl transition-all duration-300 text-center">
            <div className="text-6xl mb-6 group-hover:scale-110 transition">🖨️</div>
            <h3 className="font-bold text-2xl mb-3">Digital Printing</h3>
            <p className="text-gray-600">Brosur, flyer, dokumen, kartu nama</p>
          </div>
          <div className="group bg-white p-10 rounded-3xl border hover:border-orange-200 hover:shadow-xl transition-all duration-300 text-center">
            <div className="text-6xl mb-6 group-hover:scale-110 transition">🎨</div>
            <h3 className="font-bold text-2xl mb-3">Banner & Spanduk</h3>
            <p className="text-gray-600">Outdoor & indoor berkualitas</p>
          </div>
          <div className="group bg-white p-10 rounded-3xl border hover:border-orange-200 hover:shadow-xl transition-all duration-300 text-center">
            <div className="text-6xl mb-6 group-hover:scale-110 transition">🏷️</div>
            <h3 className="font-bold text-2xl mb-3">Stiker & Label</h3>
            <p className="text-gray-600">Custom label produk & kemasan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
