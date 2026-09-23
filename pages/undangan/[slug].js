import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

export default function UndanganKlien() {
  const router = useRouter();
  const { slug } = router.query;
  
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const audioRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const handleOpen = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Nomor rekening berhasil disalin!");
  };

  // Fungsi untuk scroll otomatis via Bottom Nav
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isMounted || !slug) return <div className="min-h-screen bg-[#FCFAF8]"></div>;

  const namaMempelai = slug.split('-').map(kata => kata.charAt(0).toUpperCase() + kata.slice(1)).join(' & ');
  const namaTamu = router.query.kpd ? decodeURIComponent(router.query.kpd) : "Tamu Undangan";

  return (
    <div className="bg-[#1a1a1a] min-h-screen flex justify-center font-sans text-stone-700 selection:bg-[#B49157] selection:text-white">
      <Head>
        <title>Pernikahan {namaMempelai}</title>
      </Head>

      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      {/* CONTAINER UTAMA */}
      <div className="w-full max-w-[480px] bg-[#FCFAF8] relative shadow-2xl overflow-hidden h-screen overflow-y-auto scroll-smooth scrollbar-hide">
        
        {/* ================= 1. COVER DEPAN ================= */}
        <div className={`absolute inset-0 bg-[#FCFAF8] z-50 flex flex-col items-center justify-center p-8 text-center transition-transform duration-1000 ease-in-out ${isOpen ? '-translate-y-full' : 'translate-y-0'}`}>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[url('https://images.unsplash.com/photo-1603893641258-0051cb7e5ac5?q=80&w=300')] bg-cover rotate-45 rounded-full blur-[1px]"></div>
          </div>
          
          <div className="relative z-10 w-full animate-fade-in-up">
            <p className="text-xs tracking-[0.3em] uppercase text-[#A47E45] mb-4 font-semibold">The Wedding Of</p>
            <h1 className="text-5xl font-serif italic text-[#A47E45] mb-8">{namaMempelai}</h1>
            
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-[#F2E8D9] rounded-full blur-xl transform scale-110"></div>
              <img src="https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?auto=format&fit=crop&q=80&w=400" alt="Cover" className="w-full h-full object-cover p-1 bg-white relative z-10 shadow-lg" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }} />
            </div>

            <div className="bg-white/80 border border-stone-200 p-5 rounded-2xl shadow-sm mb-8 backdrop-blur-sm">
              <p className="text-xs text-stone-500 mb-1">Kepada Yth.</p>
              <p className="text-lg font-bold text-stone-800 break-words">{namaTamu}</p>
            </div>

            <button onClick={handleOpen} className="w-full py-4 bg-gradient-to-r from-[#B49157] to-[#CBA365] text-white text-sm font-bold tracking-widest uppercase rounded-full shadow-xl hover:scale-105 transition-all animate-bounce">
              Buka Undangan
            </button>
          </div>
        </div>

        {/* ================= 2. ISI UNDANGAN ================= */}
        {isOpen && (
          <div className="w-full relative z-10 animate-fade-in pb-28">
            
            {/* --- HOME SECTION --- */}
            <section id="home" className="pt-16 pb-12 px-6 text-center border-b border-stone-200">
              <p className="text-sm font-serif italic text-[#A47E45] mb-6">"Dan di antara tanda-tanda kebesaran-Nya..."</p>
              <div className="w-32 h-32 mx-auto mb-6">
                 <img src="https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?auto=format&fit=crop&q=80&w=400" alt="Profil" className="w-full h-full object-cover rounded-full p-1 border-2 border-[#B49157]" />
              </div>
              <h2 className="text-3xl font-serif italic text-[#A47E45]">Lure, S.Kom.</h2>
              <p className="text-xs text-stone-500 mt-1 mb-3">Putri Bapak H. Fulan & Ibu Hj. Fulanah</p>
              <span className="text-[#A47E45] text-2xl font-serif italic">&</span>
              <h2 className="text-3xl font-serif italic text-[#A47E45] mt-3">Annabey, S.M.</h2>
              <p className="text-xs text-stone-500 mt-1">Putra Bapak Fulan & Ibu Fulanah</p>
            </section>

            {/* --- EVENT SECTION --- */}
            <section id="event" className="py-12 px-6 bg-[#F9F6F0] text-center border-b border-stone-200">
              <h3 className="text-xl font-serif text-[#A47E45] mb-6 tracking-widest uppercase">Waktu & Tempat</h3>
              
              <div className="flex justify-center gap-3 mb-10">
                {Object.keys(timeLeft).length > 0 ? Object.entries(timeLeft).map(([satuan, nilai]) => (
                  <div key={satuan} className="bg-white border border-[#B49157]/30 w-16 h-16 rounded-xl flex flex-col justify-center items-center shadow-sm">
                    <span className="text-xl font-bold text-[#A47E45]">{nilai}</span>
                    <span className="text-[9px] uppercase text-stone-500 tracking-wider">{satuan}</span>
                  </div>
                )) : <p className="text-sm text-stone-500">Acara sedang berlangsung!</p>}
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-6">
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

            {/* --- GALLERY SECTION --- */}
            <section id="gallery" className="py-12 px-6 text-center border-b border-stone-200">
              <h3 className="text-xl font-serif text-[#A47E45] mb-8 tracking-widest uppercase">Galeri Kami</h3>
              <div className="grid grid-cols-2 gap-3">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80" alt="Galeri 1" className="w-full h-40 object-cover rounded-xl shadow-sm" />
                <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=300&q=80" alt="Galeri 2" className="w-full h-40 object-cover rounded-xl shadow-sm" />
              </div>
            </section>

            {/* --- RSVP & GIFT SECTION --- */}
            <section id="rsvp" className="py-12 px-6 bg-[#F9F6F0] text-center">
              
              {/* Amplop Digital */}
              <div className="mb-12">
                <h3 className="text-xl font-serif text-[#A47E45] mb-4 tracking-widest uppercase">Wedding Gift</h3>
                <p className="text-xs text-stone-500 mb-6">Jika Anda ingin memberikan tanda kasih, kami menyediakan fitur amplop digital.</p>
                <button onClick={() => setShowGift(!showGift)} className="bg-[#B49157] text-white text-xs font-bold px-6 py-3 rounded-full mb-4 transition">
                  🎁 {showGift ? "Tutup Amplop" : "Kirim Hadiah"}
                </button>
                {showGift && (
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 mt-2">
                    <h4 className="font-bold text-stone-700 mb-1">Bank BCA</h4>
                    <p className="text-2xl font-mono text-[#A47E45] mb-1">1234 5678 90</p>
                    <p className="text-xs text-stone-500 mb-4">a.n Lure Annabey</p>
                    <button onClick={() => copyToClipboard("1234567890")} className="text-[10px] bg-stone-100 border border-stone-300 px-4 py-2 rounded-full font-bold">📋 Salin Rekening</button>
                  </div>
                )}
              </div>

              {/* Form Ucapan */}
              <h3 className="text-xl font-serif text-[#A47E45] mb-6 tracking-widest uppercase">Kirim Ucapan</h3>
              <form className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 text-left">
                <input type="text" placeholder="Nama Anda" className="w-full p-3 mb-3 text-sm border border-stone-200 rounded-xl" defaultValue={namaTamu !== "Tamu Undangan" ? namaTamu : ""} />
                <textarea rows="3" placeholder="Berikan ucapan & doa restu..." className="w-full p-3 mb-3 text-sm border border-stone-200 rounded-xl"></textarea>
                <select className="w-full p-3 mb-4 text-sm border border-stone-200 rounded-xl">
                  <option>Hadir</option>
                  <option>Tidak Hadir</option>
                </select>
                <button type="button" className="w-full bg-stone-800 text-white text-sm font-bold py-3 rounded-xl hover:bg-stone-700">Kirim RSVP</button>
              </form>
            </section>

          </div>
        )}

        {/* ================= BOTTOM NAVIGATION BAR (AL-INDOINVITE) ================= */}
        {isOpen && (
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/90 backdrop-blur-md border-t border-stone-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 px-6 py-3 flex justify-between items-center rounded-t-3xl">
            <button onClick={() => scrollToSection('home')} className={`flex flex-col items-center gap-1 ${activeSection === 'home' ? 'text-[#B49157]' : 'text-stone-400'}`}>
              <span className="text-xl">🏠</span>
              <span className="text-[9px] font-bold">Home</span>
            </button>
            <button onClick={() => scrollToSection('event')} className={`flex flex-col items-center gap-1 ${activeSection === 'event' ? 'text-[#B49157]' : 'text-stone-400'}`}>
              <span className="text-xl">📅</span>
              <span className="text-[9px] font-bold">Acara</span>
            </button>
            <button onClick={() => scrollToSection('gallery')} className={`flex flex-col items-center gap-1 ${activeSection === 'gallery' ? 'text-[#B49157]' : 'text-stone-400'}`}>
              <span className="text-xl">🖼️</span>
              <span className="text-[9px] font-bold">Galeri</span>
            </button>
            <button onClick={() => scrollToSection('rsvp')} className={`flex flex-col items-center gap-1 ${activeSection === 'rsvp' ? 'text-[#B49157]' : 'text-stone-400'}`}>
              <span className="text-xl">💌</span>
              <span className="text-[9px] font-bold">RSVP</span>
            </button>
          </div>
        )}

      </div>

      <style jsx global>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
