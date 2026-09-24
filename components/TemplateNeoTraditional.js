import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase'; 

const Icon = ({ name, size = 20, strokeWidth = 1.2 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    home: <><path d="M3 10.5 12 3l9 7.5" /><path d="M5.5 9.5V21h13V9.5" /><path d="M9.5 21v-6h5v6" /></>,
    calendar: <><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M7 3v4M17 3v4M3.5 9.5h17" /><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    music: <><path d="M9 18V5l10-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" /></>,
    copy: <><rect x="8" y="8" width="11" height="12" rx="2" /><path d="M16 8V5.5A2 2 0 0 0 14 4h-9A2 2 0 0 0 3 6v10A2 2 0 0 0 5 18h2" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
};

export default function TemplateNeoTraditional({ wedding, gallery }) {
  const router = useRouter();
  const { slug } = router.query;

  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const audioRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => { setIsMounted(true); }, []);

  const calculateTimeLeft = () => {
    if (!wedding || !wedding.akad_date) return {};
    const timeStr = wedding.akad_time ? wedding.akad_time.split(' ')[0] : '09:00';
    const difference = +new Date(`${wedding.akad_date}T${timeStr}:00+07:00`) - +new Date();
    if (difference <= 0) return {};
    return {
      hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
      jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
      menit: Math.floor((difference / 1000 / 60) % 60),
      detik: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [wedding]);

  useEffect(() => {
    if (!isOpen) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { root: scrollContainerRef.current, threshold: [0.3, 0.6] });
    document.querySelectorAll('[data-section]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isOpen]);

  const handleOpen = async () => {
    setIsOpen(true);
    if (audioRef.current) {
      try { await audioRef.current.play(); setIsPlaying(true); } catch (e) {}
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); } 
    else { try { await audioRef.current.play(); setIsPlaying(true); } catch (e) {} }
  };

  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleRSVP = async (event) => {
    event.preventDefault();
    const form = event.target;
    try {
      const { error } = await supabase.from('buku_tamu').insert([{ slug_undangan: slug, nama: form.nama.value, kehadiran: form.kehadiran.value, ucapan: form.ucapan.value }]);
      if (error) throw error;
      setSubmitted(true);
    } catch (error) {
      alert('Gagal mengirim ucapan. Silakan coba lagi.');
    }
  };

  if (!isMounted || !wedding) return <div className="min-h-screen bg-[#0a0a09]" />;

  const namaMempelai = `${wedding.bride_name} & ${wedding.groom_name}`;
  const namaTamu = router.query.kpd ? decodeURIComponent(router.query.kpd) : 'Tamu Kehormatan';
  const coverImage = gallery && gallery.length > 0 ? gallery[0].image_url : 'https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?auto=format&fit=crop&q=85&w=1200';

  return (
    <>
      <Head>
        <title>Pernikahan {namaMempelai}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <div className="w-full min-h-screen bg-[#050505] flex justify-center font-[DM_Sans,sans-serif] text-[#e8e6e1] selection:bg-[#d4af37]/30 selection:text-[#d4af37]">
        <audio ref={audioRef} loop preload="none"><source src={wedding.music_url} type="audio/mpeg" /></audio>
        
        {/* Kontainer Utama ala App (Batas Max Lebar) */}
        <main ref={scrollContainerRef} className="relative w-full max-w-[480px] h-[100dvh] overflow-y-auto overflow-x-hidden bg-[#0a0a09] shadow-2xl scroll-smooth scrollbar-hide border-x border-white/5">
          
          {/* Efek Cahaya Holografik / Ambient Glow (Futuristik) */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[480px] h-[100dvh] pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-60">
             <div className="absolute top-[-10%] left-[-20%] w-72 h-72 bg-[#d4af37]/20 rounded-full blur-[100px]" />
             <div className="absolute bottom-[20%] right-[-20%] w-80 h-80 bg-[#b39462]/15 rounded-full blur-[120px]" />
          </div>

          {/* =====================================================
              COVER (Pintu Masuk)
          ====================================================== */}
          <div className={`fixed inset-0 z-[100] flex justify-center pointer-events-none transition-all duration-[1200ms] ease-in-out ${isOpen ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <div className={`relative w-full max-w-[480px] h-[100dvh] overflow-hidden bg-[#0a0a09] pointer-events-auto transition-transform duration-[1200ms] ease-[cubic-bezier(.85,0,.15,1)] ${isOpen ? '-translate-y-full' : 'translate-y-0'}`}>
              
              <div className="absolute inset-0 overflow-hidden">
                <img src={coverImage} alt="Cover" className="absolute inset-0 h-full w-full object-cover scale-105 animate-[slowZoom_20s_infinite_alternate]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-[#0a0a09]/60 to-transparent" />
              </div>

              {/* Ornamen Tradisional Minimalis */}
              <div className="absolute inset-4 border border-[#d4af37]/20 rounded-3xl pointer-events-none" />

              <div className="relative z-10 flex h-full flex-col items-center justify-between px-8 py-16 text-center">
                <div className="flex flex-col items-center gap-3">
                  <span className="h-12 w-px bg-gradient-to-b from-transparent to-[#d4af37]" />
                  <p className="text-[10px] tracking-[0.5em] uppercase font-semibold text-[#d4af37]">Pernikahan</p>
                </div>

                <div className="flex flex-col items-center w-full">
                  <h1 className="font-[Playfair_Display,serif] text-[48px] leading-tight text-white mb-6 drop-shadow-2xl">
                    {wedding.bride_name} <br/>
                    <span className="text-3xl italic text-[#d4af37] font-light">&</span> <br/>
                    {wedding.groom_name}
                  </h1>
                </div>

                <div className="w-full flex flex-col items-center">
                  <div className="mb-8 w-full max-w-[280px] p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/50 mb-2">Kepada Yth.</p>
                    <p className="font-[Playfair_Display,serif] text-xl italic text-white">{namaTamu}</p>
                  </div>
                  
                  {/* Modern Button */}
                  <button onClick={handleOpen} className="group relative flex h-14 w-full max-w-[280px] items-center justify-center rounded-full bg-[#d4af37]/10 border border-[#d4af37]/40 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37] overflow-hidden transition-all duration-500 hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <span className="relative z-10">Buka Undangan</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              ISI KONTEN UTAMA
          ====================================================== */}
          {isOpen && (
            <div className="relative z-10 pb-36 px-6">

              {/* === HOME === */}
              <section id="home" data-section className="relative min-h-[90dvh] flex flex-col items-center justify-center text-center pt-10">
                <div className="w-[200px] aspect-[4/5] rounded-[2rem] overflow-hidden p-1 bg-gradient-to-tr from-[#d4af37]/30 to-transparent mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                   <img src={coverImage} alt="Couple" className="h-full w-full object-cover rounded-[1.8rem]" />
                </div>
                
                <h2 className="font-[Playfair_Display,serif] text-[42px] text-white leading-none mb-4">
                  {wedding.bride_name} <br/>
                  <span className="text-2xl italic text-[#d4af37] font-light my-2 block">&</span>
                  {wedding.groom_name}
                </h2>
                
                <p className="text-[11px] text-white/60 tracking-wider uppercase mb-8">{formatDate(wedding.akad_date)}</p>
                <div className="h-20 w-px bg-gradient-to-b from-[#d4af37]/50 to-transparent animate-pulse" />
              </section>

              {/* === AYAT TRADISIONAL DI DALAM GLASS === */}
              <section className="mb-24">
                <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
                  <span className="font-[Playfair_Display,serif] text-5xl text-[#d4af37]/30 absolute top-4 left-6">“</span>
                  <p className="font-[Playfair_Display,serif] text-lg leading-relaxed italic text-white/90 relative z-10 pt-4">
                    {wedding.quote}
                  </p>
                </div>
              </section>

              {/* === KELUARGA (Tradisional & Hormat) === */}
              <section className="mb-24 text-center">
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#d4af37] mb-8">Penuh Rasa Syukur</p>
                
                <div className="space-y-12">
                  <div>
                    <h3 className="font-[Playfair_Display,serif] text-3xl italic text-white mb-2">{wedding.bride_name} {wedding.bride_degree}</h3>
                    <p className="text-[11px] uppercase tracking-widest text-white/50">Putri dari</p>
                    <p className="text-xs text-white/80 mt-1">{wedding.bride_parents}</p>
                  </div>
                  
                  <div className="flex justify-center"><div className="w-12 h-px bg-[#d4af37]/30" /></div>

                  <div>
                    <h3 className="font-[Playfair_Display,serif] text-3xl italic text-white mb-2">{wedding.groom_name} {wedding.groom_degree}</h3>
                    <p className="text-[11px] uppercase tracking-widest text-white/50">Putra dari</p>
                    <p className="text-xs text-white/80 mt-1">{wedding.groom_parents}</p>
                  </div>
                </div>
              </section>

              {/* === EVENT & COUNTDOWN (Glassmorphism Cards) === */}
              <section id="event" data-section className="mb-24">
                <p className="text-[9px] text-[#d4af37] uppercase tracking-[0.4em] text-center mb-8">Waktu & Tempat</p>
                
                {/* Countdown Timer Canggih */}
                <div className="flex justify-between gap-2 mb-10">
                  {Object.entries(timeLeft).length > 0 ? Object.entries(timeLeft).map(([satuan, nilai]) => (
                    <div key={satuan} className="flex-1 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
                      <div className="font-[Playfair_Display,serif] text-2xl text-white">{String(nilai).padStart(2, '0')}</div>
                      <div className="text-[8px] uppercase tracking-widest text-[#d4af37] mt-1">{satuan}</div>
                    </div>
                  )) : <p className="w-full text-center text-xs text-white/50">Acara sedang berlangsung</p>}
                </div>

                {/* Card Akad */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/10 mb-4 relative">
                  <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                  <p className="text-[9px] text-white/50 uppercase tracking-[0.3em] mb-2">Akad Nikah</p>
                  <h4 className="font-[Playfair_Display,serif] text-2xl italic text-white mb-1">{formatDate(wedding.akad_date)}</h4>
                  <p className="text-sm text-[#d4af37] mb-4">Pukul {wedding.akad_time}</p>
                </div>

                {/* Card Resepsi */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/10 mb-6">
                  <p className="text-[9px] text-white/50 uppercase tracking-[0.3em] mb-2">Resepsi</p>
                  <h4 className="font-[Playfair_Display,serif] text-2xl italic text-white mb-1">{formatDate(wedding.reception_date)}</h4>
                  <p className="text-sm text-[#d4af37] mb-4">Pukul {wedding.reception_time}</p>
                  
                  <div className="h-px w-full bg-white/10 my-5" />
                  <p className="text-xs text-white uppercase tracking-widest mb-1">{wedding.venue_name}</p>
                  <p className="text-[11px] text-white/60 mb-6 leading-relaxed">{wedding.venue_address}</p>
                  
                  <a href={wedding.maps_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white text-black text-[10px] uppercase font-bold tracking-widest hover:bg-[#d4af37] transition-colors">
                    View Maps Location
                  </a>
                </div>
              </section>

              {/* === RSVP & DIGITAL GIFT === */}
              <section id="rsvp" data-section className="mb-10">
                <p className="text-[9px] text-[#d4af37] uppercase tracking-[0.4em] text-center mb-8">Buku Tamu</p>
                
                <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 mb-10">
                  {!submitted ? (
                    <form onSubmit={handleRSVP} className="flex flex-col gap-5">
                      <div className="relative">
                        <input name="nama" required type="text" defaultValue={namaTamu !== 'Tamu Kehormatan' ? namaTamu : ''} className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm outline-none focus:border-[#d4af37] transition-colors peer placeholder-transparent" placeholder="Nama" />
                        <label className="absolute left-0 -top-2.5 text-[9px] uppercase tracking-widest text-white/50 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-[9px] peer-focus:text-[#d4af37] transition-all">Nama Lengkap</label>
                      </div>
                      
                      <div className="relative">
                        <select name="kehadiran" required defaultValue="" className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm outline-none focus:border-[#d4af37] transition-colors appearance-none">
                          <option value="" disabled className="text-black">Konfirmasi Kehadiran</option>
                          <option value="hadir" className="text-black">Dengan senang hati, hadir</option>
                          <option value="tidak-hadir" className="text-black">Maaf, tidak bisa hadir</option>
                        </select>
                      </div>

                      <div className="relative mt-2">
                        <textarea name="ucapan" required rows="3" className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm outline-none focus:border-[#d4af37] transition-colors peer placeholder-transparent resize-none" placeholder="Ucapan" />
                        <label className="absolute left-0 -top-2.5 text-[9px] uppercase tracking-widest text-white/50 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-[9px] peer-focus:text-[#d4af37] transition-all">Ucapan & Doa Restu</label>
                      </div>

                      <button type="submit" className="mt-4 w-full py-4 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#d4af37] text-[10px] uppercase font-bold tracking-widest hover:bg-[#d4af37] hover:text-black transition-all">Kirim Reservasi</button>
                    </form>
                  ) : (
                    <div className="text-center py-10">
                      <h4 className="font-[Playfair_Display,serif] text-3xl italic text-[#d4af37] mb-2">Terima Kasih</h4>
                      <p className="text-xs text-white/60">Pesan dan konfirmasi Anda telah tersimpan.</p>
                    </div>
                  )}
                </div>

                {/* Tanda Kasih / Gift */}
                <div className="text-center pt-8 border-t border-white/10">
                  <h3 className="font-[Playfair_Display,serif] text-3xl text-white italic mb-4">Tanda Kasih</h3>
                  <p className="text-[11px] text-white/50 mb-8 max-w-[280px] mx-auto leading-relaxed">Kehadiran dan doa restu Anda adalah anugerah terindah. Namun jika Anda ingin memberikan tanda kasih, Anda dapat melalui fitur di bawah ini.</p>
                  
                  <button onClick={() => setShowGift(!showGift)} className="inline-flex py-3 px-8 rounded-full border border-white/20 text-white text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    {showGift ? 'Tutup Detail' : 'Kirim Hadiah'}
                  </button>

                  <div className={`transition-all duration-500 overflow-hidden ${showGift ? 'max-h-[300px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Bank {wedding.bank_name}</p>
                      <p className="font-mono text-2xl text-white tracking-widest mb-1">{wedding.bank_number}</p>
                      <p className="font-[Playfair_Display,serif] text-sm italic text-[#d4af37] mb-6">a.n {wedding.bank_holder}</p>
                      
                      <button onClick={() => copyToClipboard(wedding.bank_number)} className="w-full flex justify-center items-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-[10px] uppercase tracking-widest text-white transition-all">
                        <Icon name="copy" size={14} /> {copied ? 'Tersalin' : 'Salin Rekening'}
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* =====================================================
              NAVIGASI BAWAH (Floating Glass Pill)
          ====================================================== */}
          {isOpen && (
            <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] flex items-center gap-8 px-8 py-3 rounded-full bg-[#111111]/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              {[{ id: 'home', icon: 'home' }, { id: 'event', icon: 'calendar' }, { id: 'rsvp', icon: 'mail' }].map((i) => (
                <button key={i.id} onClick={() => scrollToSection(i.id)} className={`relative flex p-2 transition-all duration-300 ${activeSection === i.id ? 'text-[#d4af37] -translate-y-1' : 'text-white/40 hover:text-white'}`}>
                  <Icon name={i.icon} size={22} strokeWidth={activeSection === i.id ? 1.5 : 1.2} />
                  {activeSection === i.id && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#d4af37]" />}
                </button>
              ))}
            </nav>
          )}

          {/* =====================================================
              MUSIC BUTTON (Pojok Kanan Atas)
          ====================================================== */}
          {isOpen && (
             <button onClick={toggleMusic} className={`fixed z-[80] right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
               <Icon name="music" size={16} />
             </button>
          )}

        </main>
      </div>

      <style jsx global>{`
        @keyframes slowZoom { from { transform: scale(1); } to { transform: scale(1.1); } }
        /* Hilangkan panah up/down di input number/tanggal bawaan browser jika ada */
        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        /* Style scrollbar dihilangkan untuk kesan app native */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}
