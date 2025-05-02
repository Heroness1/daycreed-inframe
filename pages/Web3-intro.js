import Typewriter from 'typewriter-effect';

export default function Web3Intro() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 space-y-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          <Typewriter
            words={['Apa itu Web3?']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-gray-300 text-lg">
          Web3 adalah internet yang terdesentralisasi, dibangun di atas teknologi blockchain. 
          Berbeda dengan Web2 yang dikendalikan oleh perusahaan besar, Web3 memungkinkan pengguna memiliki kendali penuh atas data dan aset digital mereka.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Kenapa Web3 penting?</h2>
        <p className="text-gray-300">
          Karena Web3 mengembalikan kontrol ke tangan pengguna, mendorong transparansi, dan menciptakan sistem keuangan baru yang terbuka lewat teknologi seperti smart contract dan crypto.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Apa itu Blockchain dan Validator?</h2>
        <p className="text-gray-300">
          Blockchain adalah sistem pencatatan digital yang tidak bisa diubah, disimpan secara terdistribusi. Validator adalah node yang memastikan transaksi valid dan menjaga keamanan jaringan.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Apa itu Testnet?</h2>
        <p className="text-gray-300">
          Testnet adalah jaringan uji coba dari blockchain utama (mainnet). Validator menggunakannya untuk menguji konfigurasi, menjalankan node, dan membuktikan kontribusi sebelum jaringan resmi diluncurkan.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Kenapa ini relevan buat masa depan?</h2>
        <p className="text-gray-300">
          Karena partisipasi di testnet dan Web3 bukan hanya tentang teknologi, tapi juga membentuk ekonomi digital baru—di mana kamu bisa jadi bagian dari infrastruktur awalnya.
        </p>
      </section>

      {/* Tombol Back */}
      <div className="flex justify-center mt-10">
        <a href="/validator">
          <button className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
            Back
          </button>
        </a>
      </div>
    </div>
  );
}
