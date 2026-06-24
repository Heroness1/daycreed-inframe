import { COMPANY_INFO, CONTACT_INFO } from '@/config/constants';

export function Location() {
  return (
    <section id="lokasi" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12">Lokasi Kami</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Location Info */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-6">📍 {COMPANY_INFO.NAME}</h3>
            <p className="text-gray-700 leading-relaxed">
              Jl. Waru No. 24A,<br />
              RT.1/RW.8, Rawamangun,<br />
              Kec. Pulo Gadung,<br />
              Kota Jakarta Timur 13220
            </p>

            <div className="mt-6 space-y-3">
              <p>
                <strong>🕒 {CONTACT_INFO.HOURS}</strong>
              </p>
              <p>
                <strong>📞 WhatsApp:</strong> {CONTACT_INFO.PHONE_FORMATTED}
              </p>
            </div>

            <p className="mt-6 text-gray-600">{COMPANY_INFO.DESCRIPTION}</p>

            <a
              href={CONTACT_INFO.MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl transition"
            >
              Buka Google Maps
            </a>
          </div>

          {/* Maps Iframe */}
          <div className="overflow-hidden rounded-3xl shadow">
            <iframe
              src="https://maps.google.com/maps?q=Jl.%20Waru%20No.%2024A%20Rawamangun%20Jakarta%20Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title="Lokasi Subur Maju Printing"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
