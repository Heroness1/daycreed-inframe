import { COMPANY_INFO, CONTACT_INFO } from '@/config/constants';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo & Company Name */}
        <div className="flex items-center gap-4">
          <img
            src={COMPANY_INFO.AVATAR}
            alt={COMPANY_INFO.NAME}
            className="w-14 h-14 rounded-2xl object-cover shadow"
          />
          <div>
            <h1 className="font-bold text-2xl tracking-tight">{COMPANY_INFO.NAME}</h1>
            <p className="text-sm text-gray-500 -mt-1">{COMPANY_INFO.TAGLINE}</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#layanan" className="text-gray-800 hover:text-orange-600 transition">
            Layanan
          </a>
          <a href="#kenapa-kami" className="text-gray-800 hover:text-orange-600 transition">
            Kenapa Kami
          </a>
          <a href="#lokasi" className="text-gray-800 hover:text-orange-600 transition">
            Lokasi
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href={CONTACT_INFO.WA_URL(CONTACT_INFO.PHONE)}
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
