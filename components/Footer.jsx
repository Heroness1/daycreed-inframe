import { COMPANY_INFO, CONTACT_INFO, POPULAR_SERVICES } from '@/config/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-orange-700 via-orange-600 to-amber-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={COMPANY_INFO.AVATAR}
                alt={COMPANY_INFO.NAME}
                className="w-16 h-16 rounded-2xl object-cover"
              />
              <div>
                <h3 className="font-bold text-3xl">{COMPANY_INFO.NAME}</h3>
                <p className="text-orange-200">{COMPANY_INFO.TAGLINE}</p>
              </div>
            </div>
            <p className="text-orange-100 leading-relaxed">{COMPANY_INFO.DESCRIPTION}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6">Informasi Kontak</h3>
            <div className="space-y-4 text-orange-100">
              <p>
                📍 {CONTACT_INFO.ADDRESS_SHORT}
              </p>
              <p>📞 {CONTACT_INFO.PHONE_FORMATTED}</p>
              <p>🕒 {CONTACT_INFO.HOURS}</p>
            </div>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="font-bold text-xl mb-6">Layanan Populer</h3>
            <ul className="space-y-3 text-orange-100">
              {POPULAR_SERVICES.map((service) => (
                <li key={service}>✓ {service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-orange-200">
          <p>© {currentYear} {COMPANY_INFO.NAME}. All Rights Reserved.</p>
          <p>Digital Presence by <span className="font-semibold text-white">Lure</span></p>
        </div>
      </div>
    </footer>
  );
}
