import { useRouter } from 'next/router';
import Head from 'next/head';

export default function UndanganKlien() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <div className="min-h-screen flex items-center justify-center bg-[#FCFAF8] text-stone-600">Memuat Undangan...</div>;

  const namaMempelai = slug
    .split('-')
    .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(' & ');

  return (
    <div className="min-h-screen bg-[#FCFAF8] font-sans text-stone-700 flex justify-center py-10 px-4">
      <Head>
        <title>Undangan Pernikahan | {namaMempelai}</title>
      </Head>

      {/* Kartu Utama Undangan */}
      <div className="w-full max-w-md bg-[#FCFAF8] border border-stone-200/80 shadow-2xl rounded-[2.5rem] overflow-hidden relative flex flex-col items-center pt-12 pb-16 px-6 text-center">

        {/* Ornamen Daun Kering / Pampas di Pojok-Pojok */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-6 -left-8 w-32 h-32 bg-[url('https://images.unsplash.com/photo-1603893641258-0051cb7e5ac5?q=80&w=300')] bg-cover opacity-25 mix-blend-multiply rotate-45 rounded-full blur-[1px]"></div>
          <div className="absolute -top-6 -right-8 w-32 h-32 bg-[url('https://images.unsplash.com/photo-1603893641258-0051cb7e5ac5?q=80&w=300')] bg-cover opacity-25 mix-blend-multiply -rotate-90 rounded-full blur-[1px]"></div>
          <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-[url('https://images.unsplash.com/photo-1603893641258-0051cb7e5ac5?q=80&w=300')] bg-cover opacity-25 mix-blend-multiply -rotate-45 rounded-full blur-[1px]"></div>
          <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-[url('https://images.unsplash.com/photo-1603893641258-0051cb7e5ac5?q=80&w=300')] bg-cover opacity-25 mix-blend-multiply rotate-180 rounded-full blur-[1px]"></div>
        </div>

        {/* Foto Ilustrasi Couple 2D / Kartun Estetik */}
        <div className="relative w-36 h-36 my-4 z-10">
          <div className="absolute inset-0 bg-[#F2E8D9] rounded-full opacity-60 blur-lg transform scale-110"></div>
          <img
            src="https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?auto=format&fit=crop&q=80&w=400" 
            alt="Ilustrasi Pasangan"
            className="w-full h-full object-cover p-1 bg-white shadow-md relative z-10"
            style={{ clipPath: 'polygon(50% 0%, 85% 10%, 100% 50%, 85% 90%, 50% 100%, 15% 90%, 0% 50%, 15% 10%)', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
          />
        </div>

        {/* Teks Sambutan (Bersih dari vibes covid) */}
        <p className="text-xs font-medium leading-relaxed mb-6 px-4 text-stone-600 z-10">
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i sekalian untuk berkenan hadir dan memberikan doa restu pada acara pernikahan kami:
        </p>

        {/* Mempelai Wanita */}
        <h1 className="text-3xl font-serif italic text-[#A47E45] mt-1 mb-1" style={{ textShadow: '0 1px 2px rgba(164, 126, 69, 0.2)' }}>
          Lure, S.Kom.
        </h1>
        <p className="text-xs font-medium text-stone-600 mb-3 z-10">Putri dari Bapak H. Fulan & Ibu Hj. Fulanah</p>

        <span className="text-lg font-serif italic text-stone-400 my-1 z-10">&</span>

        {/* Mempelai Pria */}
        <h1 className="text-3xl font-serif italic text-[#A47E45] mt-1 mb-1" style={{ textShadow: '0 1px 2px rgba(164, 126, 69, 0.2)' }}>
          Annabey, S.M.
        </h1>
        <p className="text-xs font-medium text-stone-600 mb-6 z-10">Putra dari Bapak Fulan & Ibu Fulanah</p>

        {/* Ornamen Pemisah */}
        <div className="flex items-center justify-center gap-2 mb-6 w-3/4 z-10 opacity-80">
           <div className="h-px w-full bg-gradient-to-r from-transparent to-[#8BA087]"></div>
           <span className="text-xs text-[#8BA087]">🌿</span>
           <div className="h-px w-full bg-gradient-to-l from-transparent to-[#8BA087]"></div>
        </div>

        {/* Quote Pernikahan Pengganti */}
        <p className="text-[11px] font-serif italic leading-relaxed px-6 mb-8 text-stone-500 z-10">
          "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tentram kepada-Nya..." (QS. Ar-Rum: 21)
        </p>

        {/* Kotak Jadwal Acara */}
        <div className="w-full flex justify-between px-4 mb-8 z-10 bg-white/70 backdrop-blur-sm py-5 rounded-2xl border border-stone-200/50 shadow-sm">
          <div className="text-center w-1/2 pr-2">
            <h3 className="text-sm font-serif italic text-[#A47E45] mb-2 font-bold">Akad Nikah</h3>
            <p className="text-[10px] font-bold text-stone-700 mb-1">JUM'AT, 09 OKTOBER 2026</p>
            <p className="text-[10px] text-stone-600">Pukul 09.00 WIB</p>
          </div>
          <div className="text-center w-1/2 pl-2 border-l border-stone-300">
            <h3 className="text-sm font-serif italic text-[#A47E45] mb-2 font-bold">Resepsi</h3>
            <p className="text-[10px] font-bold text-stone-700 mb-1">SABTU, 10 OKTOBER 2026</p>
            <p className="text-[10px] text-stone-600">Pukul 11.00 WIB - Selesai</p>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center mb-6 z-10">
          <p className="text-[10px] font-bold tracking-widest text-stone-500 mb-2">SCAN KEHADIRAN</p>
          <div className="p-2 bg-white border border-stone-300 shadow-sm rounded-xl">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://suburmaju.com/undangan/Lure-Annabey" alt="QR Code" className="w-16 h-16" />
          </div>
        </div>

        {/* Alamat Venue Mewah & Penutup */}
        <p className="text-xs font-bold text-stone-700 mb-2 px-6 leading-relaxed z-10">
          The Tribrata Darmawangsa, Grand Ballroom<br />Jl. Darmawangsa Raya No.23, Jakarta Selatan
        </p>
        <p className="text-[11px] text-stone-500 font-medium px-6 leading-relaxed z-10">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.
        </p>

      </div>
    </div>
  );
}
