import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

export default function UndanganKlien() {
  const router = useRouter();
  const { slug } = router.query;
  
  // STATE MANAJEMEN FITUR
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const audioRef = useRef(null);

  // Mencegah Hydration Error Next.js
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // COUNTDOWN LOGIC (Target: 9 Oktober 2026)
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-10-09T10:00:00") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  // FUNGSI BUKA UNDANGAN & MAIN MUSIK
  const handleOpen = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // FUNGSI COPY REKENING
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Nomor rekening berhasil disalin!");
  };

  if (!isMounted || !slug) return <div className="min-h-screen bg-[#FCFAF8]"></div>;

  const namaMempelai = slug.split('-').map(kata => kata.charAt(0).toUpperCase() + kata.slice(1)).join(' & ');
  const namaTamu = router.query.kpd ? decodeURIComponent(router.query.kpd) : "Tamu Undangan";

  return (
    <div className="bg-[#1a1a1a] min-h-screen flex justify-center font-sans text-stone-700 selection:bg-[#B49157] selection:text-white">
      <Head>
        <title>Pernikahan {namaMempelai}</title>
      </Head>

      {/* ELEMENT AUDIO BACKSOUND */}
      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      {/* CONTAINER UTAMA (Ala Mobile App) */}
      <div className="w-full max-w-[480px] bg-[#FCFAF8] relative shadow-2xl overflow-hidden h-screen overflow-y-auto scroll-smooth">
        
        {/* ================= 1. COVER DEPAN (TERANGKAT SAAT DIBUKA) ================= */}
        <div className={`absolute inset-0 bg-[#FCFAF8] z-50 flex flex-col items-center justify-center p-8 text-center transition-transform duration-1000 ease-in-out ${isOpen ? '-translate-y-full' : 'translate-y-0'}`}>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[url('https://images.unsplash.com/photo-1603893641258-0051cb7e5ac5?q=80&w=300')] bg-cover rotate-45 rounded-full blur-[1px]"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[url('https://images.unsplash.com/photo-1603893641258-0051cb7e5ac5?q=80&w=300')] bg-cover rotate-180 rounded-full blur-[1px]"></div>
          </div>
          
          <div className="relative z-10 w-full">
            <p className="text-xs tracking-[0.3em] uppercase text-[#A47E45] mb-4 font-semibold">The Wedding Of</p>
            <h1 className="text-5xl font-serif italic text-[#A47E45] mb-8">{namaMempelai}</h1>
            
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-[#F2E8D9] rounded-full blur-xl transform scale-110"></div>
              <img src="https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?auto=format&fit=crop&q=80&w=400" alt="Cover" className="w-full h-full object-cover p-1 bg-white relative z-10 shadow-lg" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }} />
            </div>

            <div className="bg-white/80 border border-stone-200 p-5 rounded-2xl shadow-sm mb-8 backdrop-blur-sm">
              <p className="text-xs text-stone-500 mb-1">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
              <p className="text-lg font-bold text-stone-800 break-words">{namaTamu}</p>
            </div>

            <button onClick={handleOpen} className="w-full py-4 bg-gradient-to-r from-[#B49157] to-[#CBA365] text-white text-sm font-bold tracking-widest uppercase rounded-full shadow-xl hover:scale-105 transition-all animate-bounce">
              📖 Buka Undangan
            </button>
          </div>
        </div>

        {/* ================= 2. ISI UNDANGAN UTAMA ================= */}
        {isOpen && (
          <div className="w-full relative z-10 animate-fade-in pb-20">
            
            {/* --- HERO SECTION --- */}
            <section className="pt-16 pb-10 px-6 text-center relative overflow-hidden border-b border-stone-200">
              <p className="text-sm font-serif italic text-[#A47E45] mb-4">"Dan di antara tanda-tanda kebesaran-Nya..."</p>
              <div className="w-32 h-32 mx-auto mb-6">
                 <img src="https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?auto=format&fit=crop&q=80&w=400" alt="Profil" className="w-full h-full object-cover rounded-full p-1 border-2 border-[#B49157]" />
              </div>
              <h2 className="text-3xl font-serif italic text-[#A47E45]">Lure, S.Kom.</h2>
              <p className="text-xs text-stone-500 mt-1 mb-3">Putri Bapak H. Fulan & Ibu Hj. Fulanah</p>
              <span className="text-[#A47E45] text-2xl font-serif italic">&</span>
              <h2 className="text-3xl font-serif italic text-[#A47E45] mt-3">Annabey, S.M.</h2>
              <p className="text-xs text-stone-500 mt-1">Putra Bapak Fulan & Ibu Fulanah</p>
            </section>

            {/* --- JADWAL & COUNTDOWN --- */}
            <section className="py-12 px-6 bg-[#F9F6F0] text-center border-b border-stone-200">
              <h3 className="text-xl font-serif text-[#A47E45] mb-6 tracking-widest uppercase">Waktu Menuju Acara</h3>
              
              {/* Box Hitung Mundur */}
              <div className="flex justify-center gap-3 mb-10">
                {Object.keys(timeLeft).length > 0 ? Object.entries(timeLeft).map(([satuan, nilai]) => (
                  <div key={satuan} className="bg-white border border-[#B49157]/30 w-16 h-16 rounded-xl flex flex-col justify-center items-center shadow-sm">
                    <span className="text-xl font-bold text-[#A47E45]">{nilai}</span>
                    <span className="text-[9px] uppercase text-stone-500 tracking-wider">{satuan}</span>
                  </div>
                )) : <p className="text-sm text-stone-500">Acara sedang berlangsung!</p>}
              </div>

              {/* Info Acara */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-4">
                <h4 className="font-serif italic text-lg text-[#A47E45] mb-2 font-bold">Akad Nikah</h4>
                <p className="text-sm font-bold text-stone-700">JUM'AT, 09 OKTOBER 2026</p>
                <p className="text-xs text-stone-500 mb-4">Pukul 09.00 WIB - Selesai</p>
                <hr className="mb-4 border-stone-200"/>
                <h4 className="font-serif italic text-lg text-[#A47E45] mb-2 font-bold">Resepsi</h4>
                <p className="text-sm font-bold text-stone-700">SABTU, 10 OKTOBER 2026</p>
                <p className="text-xs text-stone-500">Pukul 11.00 WIB - Selesai</p>
              </div>

              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-800 text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-stone-700 transition">
                📍 Buka Google Maps
              </a>
            </section>

            {/* --- GALERI FOTO --- */}
            <section className="py-12 px-6 text-center border-b border-stone-200">
              <h3 className="text-xl font-serif text-[#A47E45] mb-8 tracking-widest uppercase">Galeri Kami</h3>
              <div className="grid grid-cols-2 gap-3">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80" alt="Galeri 1" className="w-full h-40 object-cover rounded-xl shadow-sm" />
                <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=300&q=80" alt="Galeri 2" className="w-full h-40 object-cover rounded-xl shadow-sm" />
                <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=300&q=80" alt="Galeri 3" className="w-full h-40 object-cover rounded-xl shadow-sm" />
                <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=300&q=80" alt="Galeri 4" className="w-full h-40 object-cover rounded-xl shadow-sm" />
              </div>
            </section>

            {/* --- AMPLOP DIGITAL / WEDDING GIFT --- */}
            <section className="py-12 px-6 bg-[#F9F6F0] text-center border-b border-stone-200">
              <h3 className="text-xl font-serif text-[#A47E45] mb-4 tracking-widest uppercase">Wedding Gift</h3>
              <p className="text-xs text-stone-500 mb-6">Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, kami menyediakan fitur amplop digital di bawah ini.</p>
              
              <button onClick={() => setShowGift(!showGift)} className="bg-[#B49157] text-white text-xs font-bold px-6 py-3 rounded-full mb-4 hover:bg-[#9a7b48] transition">
                🎁 {showGift ? "Tutup Amplop" : "Kirim Hadiah"}
              </button>

              {showGift && (
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 animate-fade-in">
                  <h4 className="font-bold text-stone-700 mb-1">Bank BCA</h4>
                  <p className="text-2xl font-mono text-[#A47E45] mb-1">1234 5678 90</p>
                  <p className="text-xs text-stone-500 mb-4">a.n Lure Annabey</p>
                  <button onClick={() => copyToClipboard("1234567890")} className="text-[10px] bg-stone-100 border border-stone-300 px-4 py-2 rounded-full font-bold text-stone-600 hover:bg-stone-200">
                    📋 Salin Rekening
                  </button>
                </div>
              )}
            </section>

            {/* --- RSVP & UCAPAN --- */}
            <section className="py-12 px-6 text-center">
              <h3 className="text-xl font-serif text-[#A47E45] mb-6 tracking-widest uppercase">Kirim Ucapan</h3>
              <form className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 text-left">
                <input type="text" placeholder="Nama Anda" className="w-full p-3 mb-3 text-sm border border-stone-200 rounded-xl focus:outline-none focus:border-[#B49157]" defaultValue={namaTamu !== "Tamu Undangan" ? namaTamu : ""} />
                <textarea rows="3" placeholder="Berikan ucapan & doa restu..." className="w-full p-3 mb-3 text-sm border border-stone-200 rounded-xl focus:outline-none focus:border-[#B49157]"></textarea>
                <select className="w-full p-3 mb-4 text-sm border border-stone-200 rounded-xl focus:outline-none focus:border-[#B49157]">
                  <option>Hadir</option>
                  <option>Tidak Hadir</option>
                  <option>Masih Ragu</option>
                </select>
                <button type="button" className="w-full bg-stone-800 text-white text-sm font-bold py-3 rounded-xl hover:bg-stone-700">Kirim RSVP</button>
              </form>
            </section>

            {/* FOOTER */}
            <footer className="text-center pb-12 pt-4 opacity-50">
              <p className="text-[10px] uppercase tracking-widest">Made with ❤️ by Subur Maju</p>
            </footer>

          </div>
        )}

      </div>

      {/* ================= FLOATING MUSIC BUTTON ================= */}
      {isOpen && (
        <button 
          onClick={toggleAudio}
          className={`fixed bottom-6 right-6 md:right-1/3 w-12 h-12 bg-[#B49157] text-white rounded-full flex items-center justify-center shadow-2xl z-50 transition-all ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}
        >
          {isPlaying ? '🎵' : '🔇'}
        </button>
      )}

      {/* Global CSS for Animations */}
      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
}
