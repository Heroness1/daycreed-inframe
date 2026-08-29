import { useState } from "react";
import { dataProduk, kategoriList } from "../data/printData";

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [showAll, setShowAll] = useState(false);

  const filteredProduk = dataProduk.filter((produk) => {
    const matchesSearch =
      produk.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      produk.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || produk.kategori === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedProduk = (searchQuery || selectedCategory !== "Semua" || showAll)
    ? filteredProduk
    : filteredProduk.slice(0, 6);

  return (
    <section id="katalog" aria-labelledby="katalog-title" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <span className="text-gray-700 font-semibold uppercase tracking-wider text-sm bg-gray-100 px-4 py-1.5 rounded-full">
            Katalog Produk
          </span>
          <h2 id="katalog-title" className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Pilihan Layanan Cetak
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base">
            Cari produk atau pilih kategori di bawah untuk menemukan kebutuhan cetak Anda.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari layanan cetak (misal: Spanduk, Nota, Lanyard)..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-100 transition shadow-sm"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute inset-y-0 right-0 pr-4 flex items-center text-sm text-gray-400 hover:text-gray-600">
                Hapus
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide justify-start md:justify-center">
            {kategoriList.map((kategori, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(kategori)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-sm border ${
                  selectedCategory === kategori
                    ? "bg-gray-900 text-white border-gray-900 shadow-gray-900/20"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {kategori}
              </button>
            ))}
          </div>
        </div>

        {displayedProduk.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProduk.map((produk, index) => (
                <a
                  key={index}
                  href={`https://wa.me/6282246926544?text=${encodeURIComponent(
                    `Halo Kak, saya mau tanya/pesan untuk layanan ${produk.nama}. Boleh minta info detailnya?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between bg-white rounded-3xl p-7 border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-400 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 text-gray-800 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-colors shadow-sm">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                      </div>
                      {produk.badge && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 border border-gray-200 text-gray-800">
                          {produk.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                      {produk.kategori || "Lainnya"}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{produk.nama}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{produk.deskripsi}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-gray-900">
                    <span>Tanya & Pesan via WA</span>
                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-900 group-hover:text-white text-gray-800 flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {!searchQuery && selectedCategory === "Semua" && (
              <div className="text-center mt-12">
                {!showAll ? (
                  <button
                    onClick={() => setShowAll(true)}
                    className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-2xl transition border border-gray-300 shadow-sm inline-flex items-center gap-2"
                  >
                    Lihat Semua Layanan Lainnya ({filteredProduk.length - 6} produk)
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAll(false)}
                    className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-2xl transition border border-gray-300 inline-flex items-center gap-2 shadow-sm"
                  >
                    Tampilkan Lebih Sedikit
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="text-lg font-bold text-gray-900">Layanan tidak ditemukan</h3>
            <p className="text-sm text-gray-500 mt-1">Coba gunakan kata kunci lain atau pilih kategori yang berbeda.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("Semua"); setShowAll(false); }}
              className="mt-4 bg-gray-900 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-black transition"
            >
              Reset Pencarian
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
