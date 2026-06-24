export function Location() {
  return (
    <section id="lokasi" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12">Lokasi Kami</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-3xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-6">📍 Subur Maju Printing</h3>
            <p className="text-gray-700 leading-relaxed">
              Jl. Waru No. 24A,<br />
              RT.1/RW.8, Rawamangun,<br />
              Kec. Pulo Gadung,<br />
              Kota Jakarta Timur 13220
            </p>

            <div className="mt-6 space-y-3">
              <p><strong>🕒 Buka 24 Jam</strong></p>
              <p><strong>📞 WhatsApp:</strong> 0822-4692-6544</p>
            </div>

            <p className="mt-6 text-gray-600">
              Percetakan 24 Jam Jakarta Timur yang melayani hardcover skripsi, 
              digital printing, banner, stiker, brosur, dan berbagai kebutuhan cetak.
            </p>

            <a
              href="https://maps.google.com/?q=Jl.+Waru+No.+24A+Rawamangun+Jakarta+Timur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl transition"
            >
              Buka Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl shadow">
            <iframe
              src="https://maps.google.com/maps?q=Jl.%20Waru%20No.%2024A%20Rawamangun%20Jakarta%20Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
