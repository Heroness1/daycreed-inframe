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
        
        {/* Header Katalog */}
        <div className="mb-14 text-center">
          <span className="text-orange-600 font-semibold uppercase tracking-wider text-xs bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
            Katalog Produk
          </span>
          <h2 id="katalog-title" className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Pilihan Layanan Cetak
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-[17px] leading-relaxed font-medium">
            Cari produk atau pilih kategori di bawah untuk menemukan kebutuhan cetak Anda.
          </p>
        </div>

        {/* Search Bar & Kategori */}
        <div className="max-w-3xl mx-auto mb-16 space-y-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari layanan cetak (misal: Spanduk, Nota, Lanyard)..."
              className="w-full pl-12 pr-16 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition shadow-sm"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-gray-400 hover:text-orange-600 transition">
                Hapus
              </button>
            )}
          </div>

          {/* Tombol Kategori (Disesuaikan jadi Oranye saat aktif) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide justify-start md:justify-center">
            {kategoriList.map((kategori, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(kategori)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-sm border ${
                  selectedCategory === kategori
                    ? "bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-600/20"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                {kategori}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Produk */}
        {displayedProduk.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProduk.map((produk, index) => (
                <a
                  key={index}
                  href={`https://wa.me/6282246926544?text=${encodeURIComponent(
                    `Halo Kak, saya mau tanya/pesan untuk layanan ${produk.nama}. Boleh minta info detailnya?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Mengadopsi desain kartu asimetris & hover glow yang senada dengan section sebelumnya
                  className="group relative flex flex-col justify-between bg-gray-50/40 rounded-3xl rounded-br-[60px] p-8 border border-gray-100 hover:border-orange-200 hover:bg-white hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
                >
                  {/* Efek Ambient Glow Oranye di dalam kartu saat di-hover */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400/0 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none"></div>

                  <div>
                    <div className="flex items-start justify-between gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-colors shadow-sm">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                      </div>
                      {produk.badge && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 border border-orange-100 text-orange-600">
                          {produk.badge}
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider block mb-1">
                      {produk.kategori || "Lainnya"}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {produk.nama}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-8 font-medium">
                      {produk.deskripsi}
                    </p>
                  </div>

                  {/* Tombol Aksi di Bawah Kartu */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-gray-900">
                    <span className="group-hover:text-orange-600 transition-colors">Tanya & Pesan via WA</span>
                    <div className="w-9 h-9 rounded-full bg-white border border-gray-200 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 text-gray-700 flex items-center justify-center transition-all shadow-sm">
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Tombol Lihat Semua */}
            {!searchQuery && selectedCategory === "Semua" && (
              <div className="text-center mt-12">
                {!showAll ? (
                  <button
                    onClick={() => setShowAll(true)}
                    className="bg-white hover:bg-orange-50 text-gray-900 hover:text-orange-600 font-semibold px-8 py-4 rounded-2xl transition border border-gray-200 shadow-sm inline-flex items-center gap-2"
                  >
                    Lihat Semua Layanan Lainnya ({filteredProduk.length - 6} produk)
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAll(false)}
                    className="bg-white hover:bg-orange-50 text-gray-800 hover:text-orange-600 font-semibold px-8 py-4 rounded-2xl transition border border-gray-200 inline-flex items-center gap-2 shadow-sm"
                  >
                    Tampilkan Lebih Sedikit
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          /* State Kalau Pencarian Kosong */
          <div className="text-center py-16 bg-gray-50/50 rounded-3xl border border-gray-200 shadow-sm">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-lg font-bold text-gray-900">Layanan tidak ditemukan</h3>
            <p className="text-sm text-gray-500 mt-1 mb-6">Coba gunakan kata kunci lain atau pilih kategori yang berbeda.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("Semua"); setShowAll(false); }}
              className="bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-700 transition shadow-md shadow-orange-600/20"
            >
              Reset Pencarian
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
