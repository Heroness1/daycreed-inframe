import { useState } from "react";
import { dataProduk, kategoriList } from "../data/printData";

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [showAll, setShowAll] = useState(false);

  // Logika Filter Produk
  const filteredProduk = dataProduk.filter((produk) => {
    const matchesSearch =
      produk.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      produk.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || produk.kategori === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Tampilkan 6 produk di awal, atau semua
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

        {/* --- SEARCH BAR & FILTER TABS --- */}
        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
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

        {/* Grid Kartu Produk (Diperbaiki & Disambung) */}
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
                  className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {produk.kategori}
                      </span>
                      {produk.badge && (
                        <span className="text-xs font-bold px-3 py-1 bg-orange-100 text-orange-700 rounded-full">
                          {produk.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition mb-2">
                      {produk.nama}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {produk.deskripsi}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-orange-600 font-semibold text-sm">
                    <span>Pesan via WhatsApp</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Tombol Tampilkan Semua / Show More */}
            {!searchQuery && selectedCategory === "Semua" && filteredProduk.length > 6 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-2xl transition shadow-md"
                >
                  {showAll ? "Tampilkan Lebih Sedikit" : `Lihat Semua Produk (${filteredProduk.length})`}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">Produk yang Anda cari tidak ditemukan.</p>
          </div>
        )}
      </div>
    </section>
  );
}
