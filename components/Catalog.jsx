import { useState } from "react";
import { dataProduk, kategoriList } from "../data/printData";
import { trackConversion } from "./Analytics";

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [showAll, setShowAll] = useState(false);

  // Fungsi untuk mengirim laporan klik ke backend API Vercel
  const handleWhatsAppClick = async (produkNama) => {
    trackConversion("whatsapp_click", {
      event_category: "lead_generation",
      event_label: produkNama,
      product_name: produkNama,
    });
    try {
      const response = await fetch("/api/notif", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ produkNama }),
      });

      if (!response.ok) {
        throw new Error(`Notif API failed: ${response.status}`);
      }
    } catch (error) {
      console.error("Gagal mengirim notif", error);
    }
  };

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();

  const filteredProduk = dataProduk.filter((produk) => {
    const searchableText = [
      produk.nama,
      produk.deskripsi,
      produk.kategori,
      ...(produk.highlights || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(normalizedSearchQuery);

    const matchesCategory =
      selectedCategory === "Semua" ||
      produk.kategori === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const displayedProduk =
    normalizedSearchQuery || selectedCategory !== "Semua" || showAll
      ? filteredProduk
      : filteredProduk.slice(0, 6);

  return (
    <>
      <section
      id="katalog"
      aria-labelledby="katalog-title"
      className="relative py-24 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADER ================= */}

        <div className="mb-14 text-center">

          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-semibold uppercase tracking-wider text-xs">
            Katalog Produk
          </span>

          <h2
            id="katalog-title"
            className="text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight"
          >
            Pilihan Layanan Cetak
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-[17px] leading-relaxed font-medium">
            Cari produk atau pilih kategori di bawah untuk menemukan kebutuhan
            cetak Anda.
          </p>

        </div>

        {/* ================= SEARCH & CATEGORY ================= */}

        <div className="max-w-3xl mx-auto mb-16 space-y-6">

          {/* Search */}

          <div className="relative">

            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari layanan cetak (misal: Spanduk, Nota, Lanyard)..."
              className="w-full pl-12 pr-16 py-4 bg-slate-900/80 border border-slate-800 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/10 transition-all shadow-lg shadow-black/10"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-slate-400 hover:text-orange-400 transition-colors"
              >
                Hapus
              </button>
            )}

          </div>

          {/* Categories */}

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide justify-start md:justify-center">

            {kategoriList.map((kategori, idx) => (
              <button
                key={kategori}
                onClick={() => {
                setSelectedCategory(kategori);
                setShowAll(false);
              }}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  selectedCategory === kategori
                    ? "bg-orange-500 text-slate-950 border-orange-500 shadow-[0_0_15px_-3px_rgba(249,115,22,0.4)]"
                    : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {kategori}
              </button>
            ))}

          </div>

        </div>

        {/* ================= PRODUCTS ================= */}

        {displayedProduk.length > 0 ? (
          <>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {displayedProduk.map((produk) => (
                <a
                  key={produk.nama}
                  href={`https://wa.me/6282246926544?text=${encodeURIComponent(
                    `Halo Kak, saya mau tanya/pesan untuk layanan ${produk.nama}. Boleh minta info detailnya?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleWhatsAppClick(produk.nama)}
                  className="group relative flex flex-col justify-between bg-slate-900/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(234,88,12,0.3)] transition-all duration-500"
                >
                  {/* Product visual */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={produk.gambar || "/katalog/default.svg"}
                      alt={produk.nama}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    {produk.badge && (
                      <span className="absolute top-4 right-4 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur border border-white/10 text-orange-300">
                        {produk.badge}
                      </span>
                    )}
                  </div>

                  <div className="relative z-10 flex flex-1 flex-col p-6 md:p-7">

                    {/* Category */}

                    <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-1">
                      {produk.kategori || "Lainnya"}
                    </span>

                    {/* Product name */}

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {produk.nama}
                    </h3>

                    {/* Description */}

                    <p className="text-sm text-slate-400 leading-relaxed mb-7 font-medium">
                      {produk.deskripsi}
                    </p>

                  </div>

                  {/* ================= CARD ACTION ================= */}

                  <div className="relative z-10 mt-auto pt-4 border-t border-slate-800 flex items-center justify-between text-sm font-bold">

                    <span className="inline-flex items-center gap-2 text-slate-300 group-hover:text-orange-400 transition-colors">
                      <span className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/15 transition-colors">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.97L.06 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.45ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.86 9.86 0 1 1 8.36 4.62Zm5.41-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
                        </svg>
                      </span>
                      <span className="leading-tight">
                        <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500 group-hover:text-slate-400">
                          Konsultasi
                        </span>
                        <span className="block text-sm font-bold">
                          Tanya & Pesan
                        </span>
                      </span>
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 text-slate-400 flex items-center justify-center transition-all shadow-sm shrink-0">

                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>

                    </div>

                  </div>

                </a>
              ))}

            </div>

            {/* ================= SHOW ALL ================= */}

            {!normalizedSearchQuery &&
              selectedCategory === "Semua" &&
              filteredProduk.length > 6 && (
              <div className="text-center mt-12">

                {!showAll ? (
                  <button
                    onClick={() => setShowAll(true)}
                    className="bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-orange-400 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 border border-slate-800 hover:border-orange-500/30 shadow-sm inline-flex items-center gap-2"
                  >
                    Lihat Semua Layanan Lainnya (
                    {filteredProduk.length - 6} produk)

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAll(false)}
                    className="bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-orange-400 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 border border-slate-800 hover:border-orange-500/30 inline-flex items-center gap-2 shadow-sm"
                  >
                    Tampilkan Lebih Sedikit

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </button>
                )}

              </div>
            )}

          </>
        ) : (

          /* ================= EMPTY STATE ================= */

          <div className="text-center py-16 bg-slate-900/70 rounded-3xl border border-slate-800 shadow-sm">

            <div className="text-4xl mb-3 opacity-80">
              🔍
            </div>

            <h3 className="text-lg font-bold text-white">
              Layanan tidak ditemukan
            </h3>

            <p className="text-sm text-slate-400 mt-1 mb-6">
              Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
            </p>

            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Semua");
                setShowAll(false);
              }}
              className="bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-500 transition-all shadow-md shadow-orange-600/20"
            >
              Reset Pencarian
            </button>

          </div>

        )}

      </div>
      </section>

      {/* Mobile conversion CTA */}
    <a
      href="https://wa.me/6282246926544?text=Halo%20Kak%2C%20saya%20mau%20tanya%20harga%20dan%20katalog%20produk%20printing."
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => handleWhatsAppClick("Sticky CTA - Konsultasi")}
      aria-label="Tanya harga via WhatsApp"
      className="fixed bottom-4 left-4 right-4 z-50 md:hidden flex items-center justify-between gap-3 rounded-2xl border border-emerald-400/20 bg-slate-950/95 px-4 py-3.5 text-white shadow-2xl shadow-black/40 backdrop-blur-xl"
    >
      <span className="flex items-center gap-3 min-w-0">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.97L.06 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.45Z"/>
          </svg>
        </span>
        <span className="min-w-0">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Butuh harga?</span>
          <span className="block truncate text-sm font-bold">Tanya via WhatsApp</span>
        </span>
      </span>
      <span className="shrink-0 rounded-xl bg-emerald-500 px-3.5 py-2 text-xs font-bold text-white">
        Chat
      </span>
      </a>
    </>
  );
}
