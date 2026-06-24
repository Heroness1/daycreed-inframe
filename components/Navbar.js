export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        <div className="flex items-center gap-4">
          <img
            src="/avatar.png"
            alt="Subur Maju Printing"
            className="w-14 h-14 rounded-2xl object-cover shadow"
          />
          <div>
            <h1 className="font-bold text-2xl tracking-tight">Subur Maju Printing</h1>
            <p className="text-sm text-gray-500 -mt-1">Digital Printing 24 Jam</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#layanan" className="text-gray-800 hover:text-orange-600 transition">Layanan</a>
          <a href="#kenapa-kami" className="text-gray-800 hover:text-orange-600 transition">Kenapa Kami</a>
          <a href="#lokasi" className="text-gray-800 hover:text-orange-600 transition">Lokasi</a>
        </nav>

        <a
          href="https://wa.me/6282246926544"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Hubungi WA
        </a>
      </div>
    </header>
  );
}
