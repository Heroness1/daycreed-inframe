import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase'; // Pastikan path ini sesuai letak folder utils lu

const Icon = ({ name, size = 18, strokeWidth = 1.3 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    home: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V21h13V9.5" />
        <path d="M9.5 21v-6h5v6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
        <path d="M7 3v4M17 3v4M3.5 9.5h17" />
        <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" />
      </>
    ),
    gallery: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="1.5" />
        <circle cx="8.5" cy="9" r="1.5" />
        <path d="m4 17 5-5 3.5 3 2.5-2.5 5 5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    music: (
      <>
        <path d="M9 18V5l10-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="16" cy="16" r="3" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="11" height="12" rx="1.5" />
        <path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v10A1.5 1.5 0 0 0 5.5 17H8" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    map: (
      <>
        <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15M15 6v15" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
};

// Fungsi helper format tanggal ke Bahasa Indonesia
const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

const formatShortDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return `${d}.${m}.${y}`;
};

export default function UndanganKlien({ wedding, gallery }) {
  const router = useRouter();
  const { slug } = router.query;

  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const audioRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const calculateTimeLeft = () => {
    if (!wedding || !wedding.akad_date) return {};
    
    // Konversi "09:00 WIB" jadi "09:00:00" untuk JS Date
    const timeStr = wedding.akad_time ? wedding.akad_time.split(' ')[0] : '09:00';
    const targetDate = `${wedding.akad_date}T${timeStr}:00+07:00`;
    
    const difference = +new Date(targetDate) - +new Date();

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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [wedding]);

  useEffect(() => {
    if (!isOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: scrollContainerRef.current,
        threshold: [0.2, 0.45, 0.7],
      }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isOpen]);

  useEffect(() => {
    if (!selectedImage) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  const handleOpen = async () => {
    setIsOpen(true);
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Audio playback blocked:', error);
      }
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.log('Audio playback blocked:', error);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.log('Clipboard error:', error);
    }
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Submit RSVP ke Supabase
  const handleRSVP = async (event) => {
    event.preventDefault();
    const form = event.target;
    
    const dataRSVP = {
      slug_undangan: slug,
      nama: form.nama.value,
      kehadiran: form.kehadiran.value,
      ucapan: form.ucapan.value
    };

    try {
      const { error } = await supabase.from('buku_tamu').insert([dataRSVP]);
      if (error) throw error;
      setSubmitted(true);
    } catch (error) {
      console.error('Error saving RSVP:', error);
      alert('Maaf, gagal mengirim ucapan. Silakan coba lagi.');
    }
  };

  if (!isMounted || !wedding) {
    return (
      <div className="min-h-screen bg-[#151411]" />
    );
  }

  const namaMempelai = `${wedding.bride_name} & ${wedding.groom_name}`;
  const namaTamu = router.query.kpd ? decodeURIComponent(router.query.kpd) : 'Tamu Undangan';
  const coverImage = gallery && gallery.length > 0 ? gallery[0].image_url : 'https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?auto=format&fit=crop&q=85&w=1200';

  return (
    <>
      <Head>
        <title>Pernikahan {namaMempelai}</title>
        <meta name="description" content={`Undangan pernikahan ${namaMempelai}`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
      </Head>

      <div className="w-full min-h-screen bg-[#11110f] flex justify-center font-[DM_Sans,sans-serif] text-[#292720] selection:bg-[#ad8b54] selection:text-white">

        <audio ref={audioRef} loop preload="none">
          {/* Source dari database */}
          <source src={wedding.music_url} type="audio/mpeg" />
        </audio>

        <main
          ref={scrollContainerRef}
          className="relative w-full max-w-[520px] h-[100dvh] overflow-y-auto overflow-x-hidden bg-[#f7f4ee] shadow-[0_0_80px_rgba(0,0,0,.25)] scroll-smooth scrollbar-hide"
        >

          {/* =====================================================
              COVER
          ====================================================== */}

          <div
            className={`fixed inset-0 z-[100] flex justify-center pointer-events-none transition-opacity duration-1000 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div
              className={`relative w-full max-w-[520px] h-[100dvh] overflow-hidden bg-[#171613] pointer-events-auto transition-transform duration-[1400ms] ease-[cubic-bezier(.77,0,.18,1)] ${
                isOpen ? '-translate-y-full' : 'translate-y-0'
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img src={coverImage} alt="Wedding Cover" className="cover-image absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/75" />
              </div>

              <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
              <div className="absolute inset-5 border border-white/30 pointer-events-none" />
              <div className="absolute inset-8 border border-white/10 pointer-events-none" />

              <div className="relative z-10 flex h-full flex-col items-center justify-between px-9 py-14 text-center text-white">
                <div className="cover-reveal cover-delay-1">
                  <p className="text-[9px] tracking-[0.48em] uppercase font-medium opacity-90">
                    The Wedding Of
                  </p>
                </div>

                <div className="max-w-full cover-reveal cover-delay-2">
                  <p className="mb-5 font-[Playfair_Display,serif] text-sm italic tracking-wide text-white/85">
                    A celebration of love
                  </p>

                  <h1 className="font-[Playfair_Display,serif] text-[52px] leading-[.92] tracking-[-0.04em] sm:text-[60px]">
                    <span className="block">{wedding.bride_name}</span>
                    <span className="block my-2 text-xl font-normal italic text-white/70">&</span>
                    <span className="block">{wedding.groom_name}</span>
                  </h1>

                  <div className="mx-auto mt-8 h-px w-12 bg-white/70" />

                  <p className="mt-5 text-[10px] tracking-[0.38em] uppercase text-white/80">
                    {formatDate(wedding.akad_date)}
                  </p>
                </div>

                <div className="w-full cover-reveal cover-delay-3">
                  <div className="mb-6">
                    <p className="text-[9px] uppercase tracking-[0.28em] text-white/60 mb-2">
                      Dear
                    </p>
                    <p className="font-[Playfair_Display,serif] text-lg italic">
                      {namaTamu}
                    </p>
                  </div>

                  <button
                    onClick={handleOpen}
                    className="group relative mx-auto flex h-12 w-full max-w-[250px] items-center justify-center overflow-hidden border border-white/60 text-[9px] font-medium uppercase tracking-[0.32em] text-white transition-all duration-500 hover:bg-white hover:text-[#26241f]"
                  >
                    <span className="relative z-10">Open Invitation</span>
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              MUSIC BUTTON
          ====================================================== */}
          {isOpen && (
            <button
              onClick={toggleMusic}
              aria-label="Toggle music"
              className="fixed z-[80] right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#b39462]/40 bg-[#f7f4ee]/90 text-[#8c6e3f] shadow-sm backdrop-blur-md"
            >
              <span className={`transition-transform duration-700 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
                <Icon name="music" size={16} />
              </span>
            </button>
          )}

          {/* =====================================================
              CONTENT
          ====================================================== */}
          {isOpen && (
            <div className="relative pb-28">

              {/* === HOME === */}
              <section id="home" data-section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-8 py-20 text-center">
                <div className="absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-[#c9ae7a]/10 blur-3xl" />
                <div className="reveal mx-auto max-w-[390px]">
                  <p className="section-kicker">THE WEDDING OF</p>
                  <div className="mx-auto mb-8 mt-5 h-px w-10 bg-[#ae8a50]" />
                  
                  <h2 className="font-[Playfair_Display,serif] text-[48px] leading-[.95] tracking-[-0.04em] text-[#8c6d3e]">
                    <span className="block">{wedding.bride_name}</span>
                    <span className="my-3 block text-xl font-normal italic text-[#b39462]">&</span>
                    <span className="block">{wedding.groom_name}</span>
                  </h2>

                  <p className="mx-auto mt-8 max-w-[270px] text-[11px] leading-6 tracking-wide text-[#77736b]">
                    Dengan penuh kebahagiaan, kami mengundang Anda untuk menjadi bagian dari hari istimewa kami.
                  </p>

                  <div className="mx-auto mt-10 w-[190px]">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={coverImage}
                        alt="The couple"
                        className="reveal-image h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="mt-7 font-[Playfair_Display,serif] text-sm italic text-[#8c6d3e]">
                    {formatShortDate(wedding.akad_date)}
                  </p>
                </div>
              </section>

              {/* === QUOTE === */}
              <section className="relative bg-[#20201c] px-9 py-28 text-center text-[#f4efe5]">
                <div className="mx-auto max-w-[350px]">
                  <span className="font-[Playfair_Display,serif] text-4xl text-[#b79a69]">“</span>
                  <p className="mt-1 font-[Playfair_Display,serif] text-xl leading-8 italic">
                    {wedding.quote}
                  </p>
                  <div className="mx-auto mt-8 h-px w-8 bg-[#b79a69]" />
                </div>
              </section>

              {/* === COUPLE === */}
              <section id="couple" data-section className="px-7 py-28 text-center">
                <p className="section-kicker">TWO SOULS, ONE STORY</p>
                <h3 className="section-title">The Couple</h3>
                
                <div className="mx-auto mt-12 max-w-[360px]">
                  <div className="relative mx-auto w-[190px]">
                    <div className="absolute -inset-4 border border-[#b39462]/30" />
                    <img src={coverImage} alt="Bride" className="aspect-[3/4] w-full object-cover" />
                  </div>
                  <h4 className="mt-8 font-[Playfair_Display,serif] text-3xl italic text-[#8c6d3e]">
                    {wedding.bride_name}, {wedding.bride_degree}
                  </h4>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#77736b]">
                    Putri {wedding.bride_parents}
                  </p>

                  <div className="my-9 font-[Playfair_Display,serif] text-2xl italic text-[#b39462]">&</div>

                  <div className="relative mx-auto w-[190px]">
                    <div className="absolute -inset-4 border border-[#b39462]/30" />
                    {/* Memakai foto kedua dari gallery jika ada untuk groom */}
                    <img src={gallery && gallery.length > 1 ? gallery[1].image_url : coverImage} alt="Groom" className="aspect-[3/4] w-full object-cover" />
                  </div>
                  <h4 className="mt-8 font-[Playfair_Display,serif] text-3xl italic text-[#8c6d3e]">
                    {wedding.groom_name}, {wedding.groom_degree}
                  </h4>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#77736b]">
                    Putra {wedding.groom_parents}
                  </p>
                </div>
              </section>

              {/* === EVENT === */}
              <section id="event" data-section className="bg-[#eeeadf] px-6 py-28 text-center">
                <p className="section-kicker">SAVE THE DATE</p>
                <h3 className="section-title">Counting Down</h3>
                <p className="mx-auto mt-5 max-w-[280px] text-[11px] leading-6 text-[#77736b]">
                  Sampai tiba waktunya kami mengucapkan janji dalam sebuah hari yang istimewa.
                </p>

                <div className="mx-auto mt-12 grid max-w-[380px] grid-cols-4 border-y border-[#b39462]/30">
                  {Object.entries(timeLeft).length > 0 ? (
                    Object.entries(timeLeft).map(([satuan, nilai]) => (
                      <div key={satuan} className="px-2 py-5">
                        <div className="font-[Playfair_Display,serif] text-3xl text-[#8c6d3e]">
                          {String(nilai).padStart(2, '0')}
                        </div>
                        <div className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#77736b]">
                          {satuan}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="col-span-4 py-8 text-xs text-[#77736b]">
                      The celebration has begun.
                    </p>
                  )}
                </div>

                <div className="mx-auto mt-20 max-w-[390px]">
                  <div className="border-t border-[#b39462]/30 py-10">
                    <p className="section-kicker">AKAD NIKAH</p>
                    <h4 className="mt-4 font-[Playfair_Display,serif] text-2xl italic text-[#8c6d3e]">
                      {formatDate(wedding.akad_date)}
                    </h4>
                    <p className="mt-3 text-xs text-[#77736b]">
                      Pukul {wedding.akad_time}
                    </p>
                  </div>

                  <div className="border-t border-[#b39462]/30 py-10">
                    <p className="section-kicker">RESEPSI</p>
                    <h4 className="mt-4 font-[Playfair_Display,serif] text-2xl italic text-[#8c6d3e]">
                      {formatDate(wedding.reception_date)}
                    </h4>
                    <p className="mt-3 text-xs text-[#77736b]">
                      Pukul {wedding.reception_time}
                    </p>
                  </div>

                  <div className="border-y border-[#b39462]/30 py-10">
                    <p className="section-kicker">VENUE</p>
                    <h4 className="mt-4 font-[Playfair_Display,serif] text-2xl italic text-[#8c6d3e]">
                      {wedding.venue_name}
                    </h4>
                    <p className="mx-auto mt-3 max-w-[260px] text-xs leading-6 text-[#77736b]">
                      {wedding.venue_address}
                    </p>
                    <a
                      href={wedding.maps_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-3 border border-[#9c7d4a] px-6 py-3 text-[9px] uppercase tracking-[0.25em] text-[#806338] transition-all duration-300 hover:bg-[#806338] hover:text-white"
                    >
                      <Icon name="map" size={14} /> View Location
                    </a>
                  </div>
                </div>
              </section>

              {/* === STORY === */}
              {wedding.story && (
                <section className="px-8 py-28">
                  <div className="mx-auto max-w-[390px]">
                    <p className="section-kicker">OUR STORY</p>
                    <h3 className="section-title">A Story Worth<br />Remembering</h3>
                    <div className="mt-12">
                      <div className="mb-12">
                        <div className="mb-5 aspect-[16/10] overflow-hidden">
                          <img src={coverImage} alt="Our story" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
                        </div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#a07f4d]">The Journey</p>
                        <p className="mt-4 text-xs leading-7 text-[#77736b] whitespace-pre-wrap">
                          {wedding.story}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* === GALLERY === */}
              {gallery && gallery.length > 0 && (
                <section id="gallery" data-section className="bg-[#20201c] px-5 py-28 text-[#f5f0e7]">
                  <div className="px-3 text-center">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#b99a67]">MOMENTS</p>
                    <h3 className="mt-4 font-[Playfair_Display,serif] text-4xl italic">Our Gallery</h3>
                  </div>
                  <div className="mt-12 grid grid-cols-2 gap-2">
                    {gallery.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => setSelectedImage(image.image_url)}
                        className={`group relative overflow-hidden ${index === 0 || index === 3 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                      >
                        <img src={image.image_url} alt="Gallery" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                      </button>
                    ))}
                  </div>
                </section>
              )}

              {/* === RSVP & GIFT === */}
              <section id="rsvp" data-section className="px-7 py-28">
                
                {/* Form RSVP */}
                <div className="mx-auto max-w-[390px]">
                  <div className="text-center">
                    <p className="section-kicker">KINDLY RESPOND</p>
                    <h3 className="section-title">RSVP</h3>
                  </div>

                  {!submitted ? (
                    <form onSubmit={handleRSVP} className="mt-12">
                      <div className="form-field">
                        <label>Nama</label>
                        <input name="nama" required type="text" defaultValue={namaTamu !== 'Tamu Undangan' ? namaTamu : ''} placeholder="Nama lengkap" />
                      </div>
                      <div className="form-field">
                        <label>Konfirmasi Kehadiran</label>
                        <select name="kehadiran" required defaultValue="">
                          <option value="" disabled>Pilih konfirmasi</option>
                          <option value="hadir">Saya akan hadir</option>
                          <option value="tidak-hadir">Saya tidak dapat hadir</option>
                        </select>
                      </div>
                      <div className="form-field">
                        <label>Ucapan</label>
                        <textarea name="ucapan" required rows="4" placeholder="Tuliskan doa dan ucapan..." />
                      </div>
                      <button type="submit" className="group mt-4 flex w-full items-center justify-center gap-4 border border-[#806338] py-4 text-[9px] font-medium uppercase tracking-[0.3em] text-[#806338] transition-all duration-500 hover:bg-[#806338] hover:text-white">
                        Send Wishes <Icon name="arrow" size={14} />
                      </button>
                    </form>
                  ) : (
                    <div className="mt-12 border-y border-[#b39462]/30 py-14 text-center animate-[fadeUp_.7s_ease-out]">
                      <div className="mx-auto h-px w-10 bg-[#b39462]" />
                      <h4 className="mt-7 font-[Playfair_Display,serif] text-3xl italic text-[#8c6d3e]">Thank You</h4>
                      <p className="mx-auto mt-5 max-w-[260px] text-xs leading-6 text-[#77736b]">Ucapan dan doa baik Anda sangat berarti bagi kami.</p>
                    </div>
                  )}
                </div>

                {/* Gift */}
                <div className="mx-auto mt-28 max-w-[390px] border-t border-[#b39462]/25 pt-20 text-center">
                  <p className="section-kicker">A LITTLE SOMETHING</p>
                  <h3 className="section-title">Wedding Gift</h3>
                  <button onClick={() => setShowGift(!showGift)} className="mt-8 border border-[#806338] px-7 py-3 text-[9px] uppercase tracking-[0.28em] text-[#806338] transition-all duration-500 hover:bg-[#806338] hover:text-white">
                    {showGift ? 'Close Details' : 'View Gift Details'}
                  </button>

                  <div className={`grid transition-all duration-700 ease-in-out ${showGift ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="border border-[#b39462]/30 bg-[#eeeadf] px-6 py-9">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#77736b]">
                          BANK {wedding.bank_name}
                        </p>
                        <p className="mt-5 font-mono text-xl tracking-[0.12em] text-[#4b463d]">
                          {wedding.bank_number}
                        </p>
                        <p className="mt-3 font-[Playfair_Display,serif] text-sm italic text-[#8c6d3e]">
                          a.n {wedding.bank_holder}
                        </p>
                        <button onClick={() => copyToClipboard(wedding.bank_number)} className="mt-7 inline-flex items-center gap-3 border border-[#806338] px-5 py-3 text-[9px] uppercase tracking-[0.2em] text-[#806338]">
                          <Icon name="copy" size={13} /> {copied ? 'Copied' : 'Copy Number'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </section>

              {/* === CLOSING === */}
              <section className="relative overflow-hidden bg-[#171714] px-8 py-32 text-center text-[#f5f0e7]">
                <div className="absolute inset-0 opacity-20">
                  <img src={coverImage} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[#171714]/75" />
                </div>
                <div className="relative z-10">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#b99a67]">WITH LOVE</p>
                  <h3 className="mt-6 font-[Playfair_Display,serif] text-5xl italic">Thank You</h3>
                  <div className="mx-auto mt-8 h-px w-10 bg-[#b99a67]" />
                  <p className="mx-auto mt-8 max-w-[280px] text-xs leading-7 text-white/55">
                    Terima kasih telah menjadi bagian dari cerita dan hari bahagia kami.
                  </p>
                  <p className="mt-12 font-[Playfair_Display,serif] text-lg italic text-[#d0b98c]">
                    {namaMempelai}
                  </p>
                </div>
              </section>

            </div>
          )}

          {/* =====================================================
              LIGHTBOX
          ====================================================== */}
          {selectedImage && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-5 animate-[fadeIn_.3s_ease-out]" onClick={() => setSelectedImage(null)}>
              <button onClick={() => setSelectedImage(null)} className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center border border-white/30 text-white" aria-label="Close gallery">
                <Icon name="close" size={18} />
              </button>
              <img src={selectedImage} alt="Gallery fullscreen" className="max-h-[85vh] max-w-full object-contain animate-[scaleIn_.5s_ease-out]" onClick={(e) => e.stopPropagation()} />
            </div>
          )}

          {/* =====================================================
              BOTTOM NAV
          ====================================================== */}
          {isOpen && (
            <nav className="fixed bottom-4 left-1/2 z-[90] flex w-[calc(100%-32px)] max-w-[450px] -translate-x-1/2 items-center justify-around border border-[#c9bda8]/40 bg-[#f7f4ee]/90 px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,.12)] backdrop-blur-xl">
              {[
                { id: 'home', label: 'Home', icon: 'home' },
                { id: 'event', label: 'Event', icon: 'calendar' },
                { id: 'gallery', label: 'Gallery', icon: 'gallery' },
                { id: 'rsvp', label: 'RSVP', icon: 'mail' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex min-w-[62px] flex-col items-center gap-1.5 px-3 py-2 transition-colors duration-300 ${activeSection === item.id ? 'text-[#8b6b3d]' : 'text-[#9b968d]'}`}
                >
                  <Icon name={item.icon} size={17} strokeWidth={activeSection === item.id ? 1.7 : 1.2} />
                  <span className="text-[7px] uppercase tracking-[0.18em]">{item.label}</span>
                  <span className={`absolute bottom-0 h-px bg-[#a78652] transition-all duration-500 ${activeSection === item.id ? 'w-5' : 'w-0'}`} />
                </button>
              ))}
            </nav>
          )}

          <style jsx global>{`
            * { box-sizing: border-box; }
            html { scroll-behavior: smooth; }
            body { margin: 0; background: #11110f; }
            button, input, textarea, select { font-family: inherit; }
            button { -webkit-tap-highlight-color: transparent; }
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            .section-kicker { color: #a07f4d; font-size: 9px; font-weight: 500; letter-spacing: .35em; line-height: 1.5; text-transform: uppercase; }
            .section-title { margin-top: 14px; color: #8c6d3e; font-family: 'Playfair Display', serif; font-size: 38px; font-style: italic; line-height: 1.05; letter-spacing: -.025em; }
            .form-field { margin-bottom: 24px; }
            .form-field label { display: block; margin-bottom: 9px; color: #77736b; font-size: 8px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; }
            .form-field input, .form-field textarea, .form-field select { width: 100%; border: 0; border-bottom: 1px solid #cfc8bb; border-radius: 0; background: transparent; padding: 11px 2px; color: #403c34; font-size: 12px; outline: none; transition: border-color .3s ease, padding .3s ease; }
            .form-field input:focus, .form-field textarea:focus, .form-field select:focus { border-color: #9a7847; padding-left: 6px; }
            .form-field textarea { resize: none; }
            .form-field input::placeholder, .form-field textarea::placeholder { color: #aaa49a; }
            .cover-image { animation: coverZoom 12s ease-out forwards; }
            .cover-reveal { opacity: 0; transform: translateY(22px); animation: revealUp 1.1s cubic-bezier(.22,1,.36,1) forwards; }
            .cover-delay-1 { animation-delay: .3s; }
            .cover-delay-2 { animation-delay: .65s; }
            .cover-delay-3 { animation-delay: 1s; }
            .reveal { animation: revealUp 1s cubic-bezier(.22,1,.36,1) both; }
            .reveal-image { animation: imageReveal 1.4s cubic-bezier(.22,1,.36,1) both; }
            @keyframes coverZoom { from { transform: scale(1.08); } to { transform: scale(1); } }
            @keyframes revealUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes imageReveal { from { opacity: 0; transform: scale(1.06); filter: blur(8px); } to { opacity: 1; transform: scale(1); filter: blur(0); } }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes scaleIn { from { opacity: 0; transform: scale(.96); } to { opacity: 1; transform: scale(1); } }
            @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; } }
          `}</style>
        </main>
      </div>
    </>
  );
}

// =====================================================
// API CALL KE SUPABASE
// =====================================================
export async function getServerSideProps(context) {
  const { slug } = context.params;
  
  // Ubah slug dari URL jadi huruf kecil semua paksa, biar cocok sama database
  const slugKecil = slug.toLowerCase();

  const { data: wedding, error: weddingError } = await supabase
    .from('weddings')
    .select('*')
    .eq('slug', slugKecil) // Sekarang nyari di databasenya pakai huruf kecil
    .single();

  if (weddingError || !wedding) {
    console.log("Error Supabase:", weddingError); // Biar lu bisa liat errornya di log Vercel kalau masih gagal
    return { notFound: true };
  }

  const { data: gallery } = await supabase
    .from('gallery')
    .select('*')
    .eq('wedding_id', wedding.id)
    .order('sort_order', { ascending: true });

  return {
    props: {
      wedding,
      gallery: gallery || [],
    },
  };
}
