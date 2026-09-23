import { useRouter } from 'next/router';
import Head from 'next/head';

export default function UndanganKlien() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  // FORMATTER NAMA: Mengubah "romeo-juliet" jadi "Romeo & Juliet"
  const namaDariLink = slug
    .split('-')
    .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(' & ');

  // DUMMY DATA: Nanti data ini akan otomatis ketarik dari Google Sheets / CMS
  const dataMempelai = {
    tanggal: "Minggu, 24 Desember 2026",
    waktu: "10:00 WIB - Selesai",
    lokasi: "Gedung Serbaguna Subur Maju, Bekasi Raya",
    pesan: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu."
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Head>
        <title>Undangan Pernikahan | {namaDariLink}</title>
      </Head>

      {/* SECTION 1: Cover Depan */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-stone-200 to-stone-50">
        <p className="text-sm tracking-widest uppercase mb-4 text-stone-500">The Wedding Of</p>
        <h1 className="text-5xl md:text-7xl font-serif text-stone-800 mb-6">
          {namaDariLink}
        </h1>
        <p className="text-lg italic text-stone-600 mb-10">{dataMempelai.tanggal}</p>
        <button className="px-8 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition shadow-lg">
          Buka Undangan
        </button>
      </section>

      {/* SECTION 2: Detail Acara */}
      <section className="py-20 px-6 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif text-stone-800 mb-6">Save The Date</h2>
        <p className="text-stone-600 mb-10 leading-relaxed">
          {dataMempelai.pesan}
        </p>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
          <h3 className="font-bold text-2xl text-stone-800 mb-2">Resepsi Pernikahan</h3>
          <p className="text-stone-600 mb-2">{dataMempelai.tanggal}</p>
          <p className="text-stone-600 mb-6">{dataMempelai.waktu}</p>
          <hr className="w-16 border-stone-300 mx-auto mb-6" />
          <p className="text-stone-800 font-medium mb-4">{dataMempelai.lokasi}</p>
          <button className="text-sm px-6 py-2 border border-stone-800 rounded-full hover:bg-stone-800 hover:text-white transition">
            Lihat Google Maps
          </button>
        </div>
      </section>
    </div>
  );
}
