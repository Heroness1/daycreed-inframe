import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Web3Intro() {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
  });

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 space-y-20">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          <Typewriter
            options={{
              strings: ['Apa itu Web3?'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              cursor: '_',
            }}
          />
        </h1>
        <p className="text-gray-300 text-lg">
          Web3 adalah internet yang terdesentralisasi, dibangun di atas teknologi blockchain. 
          Berbeda dengan Web2 yang dikendalikan oleh perusahaan besar, Web3 memungkinkan pengguna memiliki kendali penuh atas data dan aset digital mereka.
        </p>
      </section>

      {[
        {
          title: 'Kenapa Web3 penting?',
          desc: 'Karena Web3 mengembalikan kontrol ke tangan pengguna, mendorong transparansi, dan menciptakan sistem keuangan baru yang terbuka lewat teknologi seperti smart contract dan crypto.',
        },
        {
          title: 'Apa itu Blockchain dan Validator?',
          desc: 'Blockchain adalah sistem pencatatan digital yang tidak bisa diubah, disimpan secara terdistribusi. Validator adalah node yang memastikan transaksi valid dan menjaga keamanan jaringan.',
        },
        {
          title: 'Apa itu Testnet?',
          desc: 'Testnet adalah jaringan uji coba dari blockchain utama (mainnet). Validator menggunakannya untuk menguji konfigurasi, menjalankan node, dan membuktikan kontribusi sebelum jaringan resmi diluncurkan.',
        },
        {
          title: 'Kenapa ini relevan buat masa depan?',
          desc: 'Karena partisipasi di testnet dan Web3 bukan hanya tentang teknologi, tapi juga membentuk ekonomi digital baru—di mana kamu bisa jadi bagian dari infrastruktur awalnya.',
        },
      ].map((item, i) => (
        <motion.section
          key={i}
          className="max-w-3xl mx-auto"
          variants={fadeIn(i * 0.3)}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-300">{item.desc}</p>
        </motion.section>
      ))}

      <div className="flex justify-center mt-10">
        <a href="/testing">
          <button className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
            Back
          </button>
        </a>
      </div>
    </div>
  );
}
