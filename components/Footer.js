export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-700 via-orange-600 to-amber-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/avatar.png"
                alt="Subur Maju Printing"
                className="w-16 h-16 rounded-2xl object-cover"
              />
              <div>
                <h3 className="font-bold text-3xl">Subur Maju Printing</h3>
                <p className="text-orange-200">Digital Printing 24 Jam</p>
              </div>
            </div>
            <p className="text-orange-100 leading-relaxed">
              Melayani Digital Printing, Hardcover Skripsi, Banner, Spanduk, 
              Stiker, Brosur, dan berbagai kebutuhan percetakan dengan 
              pengerjaan cepat dan harga terjangkau.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Informasi Kontak</h3>
            <div className="space-y-4 text-orange-100">
              <p>
                📍 Jl. Waru No.24A<br />
                Rawamangun, Pulo Gadung<br />
                Jakarta Timur 13220
              </p>
              <p>📞 0822-4692-6544</p>
              <p>🕒 Buka 24 Jam</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Layanan Populer</h3>
            <ul className="space-y-3 text-orange-100">
              <li>✓ Hardcover Skripsi</li>
              <li>✓ Digital Printing</li>
              <li>✓ Banner & Spanduk</li>
              <li>✓ Stiker & Label</li>
              <li>✓ Brosur & Flyer</li>
              <li>✓ Undangan & Kartu Nama</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-orange-200">
          <p>© {new Date().getFullYear()} Subur Maju Printing. All Rights Reserved.</p>
          <p>Digital Presence by <span className="font-semibold text-white">Lure</span></p>
        </div>
      </div>
    </footer>
  );
}
