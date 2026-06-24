import { CONTACT_INFO } from '@/config/constants';

export function Hero() {
  return (
    <section className="pt-24 min-h-screen bg-gradient-to-br from-orange-600 via-amber-600 to-red-600 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left Content */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
            Subur Maju Printing • Jakarta Timur
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tighter mb-6">
            Hardcover Skripsi<br />
            Termurah &<br />
            Digital Printing
          </h1>

          <p className="text-xl text-white/90 max-w-lg">
            Melayani hardcover skripsi, banner, stiker, label, brosur, undangan, dan segala kebutuhan cetak Anda dengan kualitas premium.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href={CONTACT_INFO.WA_URL(CONTACT_INFO.PHONE)}
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

        {/* Right Image */}
        <div>
          <img
            src="/printer.png"
            alt="Digital Printing"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
