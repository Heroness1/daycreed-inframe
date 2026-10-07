"use client";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   RIO × SUZUKI
   JAPANESE ANIME WEDDING — ULTIMATE EDITION 2.0
========================================================= */

const WEDDING_DATE = "2027-06-14T09:00:00";

/* =========================================================
   FREE / EXTERNAL ARTWORK
========================================================= */

const animeHero =
  "https://images.unsplash.com/vector-1768160219785-cd1ed7669c8e?auto=format&fit=crop&fm=jpg&q=90&w=1600";

const animeSecond =
  "https://images.unsplash.com/vector-1768160219834-9e97fa217a14?auto=format&fit=crop&fm=jpg&q=90&w=1400";

/* =========================================================
   TYPES
========================================================= */

type Countdown = {
  days: number;
  hours: number;
  mins: number;
  secs: number;
};

type Direction = "up" | "left" | "right" | "scale";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  duration?: number;
  className?: string;
};

type RSVPForm = {
  name: string;
  attend: string;
  wishes: string;
};

/* =========================================================
   COUNTDOWN
========================================================= */

function useCountdown(targetDate: string): Countdown {
  const calculate = (): Countdown => {
    const difference = new Date(targetDate).getTime() - Date.now();
    if (difference <= 0) {
      return { days: 0, hours: 0, mins: 0, secs: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      mins: Math.floor((difference / (1000 * 60)) % 60),
      secs: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState<Countdown>(calculate);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(calculate());
    }, 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  return time;
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.visible = "true";
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 800,
  className = "",
}: RevealProps) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-direction={direction}
      style={{
        "--delay": `${delay}ms`,
        "--duration": `${duration}ms`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function Marquee({ text, reverse = false }: { text: string; reverse?: boolean }) {
  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}>
        {Array.from({ length: 10 }).map((_, index) => (
          <React.Fragment key={index}>
            <span>{text}</span>
            <b>✦</b>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({
  number,
  japanese,
  title,
}: {
  number: string;
  japanese: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-meta">
        <span>{number}</span>
        <span>{japanese}</span>
      </div>
      <h2>{title}</h2>
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="time-box">
      <strong>{String(value).padStart(2, "0")}</strong>
      <span>{label}</span>
    </div>
  );
}

function ImpactLines() {
  return (
    <div className="impact-lines" aria-hidden="true">
      <i /><i /><i /><i /><i /><i />
    </div>
  );
}

function Particles() {
  const particles = [
    { left: "8%", top: "16%", delay: "0s" },
    { left: "85%", top: "12%", delay: "1s" },
    { left: "18%", top: "38%", delay: "2.1s" },
    { left: "91%", top: "46%", delay: ".7s" },
    { left: "7%", top: "72%", delay: "1.7s" },
    { left: "82%", top: "78%", delay: "2.8s" },
  ];
  return (
    <>
      {particles.map((particle, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
          }}
        >
          ✦
        </span>
      ))}
    </>
  );
}

/* =========================================================
   APP
========================================================= */

export default function TemplateJapaneseWedding() {
  const countdown = useCountdown(WEDDING_DATE);

  const [form, setForm] = useState<RSVPForm>({
    name: "",
    attend: "",
    wishes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  
  // State untuk Intro & Musik
  const [introFinished, setIntroFinished] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fungsi saat tamu menekan Buka Undangan
  const handleOpenInvitation = () => {
    setIntroFinished(true); // Tutup layar hitam
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play failed:", err));
      setIsPlaying(true);
    }
  };

  // Fungsi untuk tombol Pause/Play musik
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const submitRSVP = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page">
      {/* Audio Element: Loop otomatis agar lagu diputar berulang */}
      <audio 
        ref={audioRef} 
        src="https://raw.githubusercontent.com/Heroness1/Ruang-Hati/main/public/music/jepanghyperpop.webm" 
        loop 
      />

      {/* Floating Music Button (Mati saat di layar intro, muncul saat undangan terbuka) */}
      <button 
        className={`floating-music ${introFinished ? "visible" : ""}`}
        onClick={toggleMusic}
      >
        {isPlaying ? "SOUND ON 🔊" : "SOUND OFF 🔇"}
      </button>

      {/* =====================================================
          CINEMATIC INTRO
      ===================================================== */}
      <div className={`cinematic-intro ${introFinished ? "cinematic-intro-done" : ""}`}>
        <div className="intro-japanese">結婚式</div>
        <div className="intro-line" />
        <span>RIO × SUZUKI</span>
        
        {/* Tombol pembuka undangan */}
        <button className="btn-open" onClick={handleOpenInvitation}>
          BUKA UNDANGAN
        </button>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="hero">
        <div className="hero-halftone" />
        <Particles />
        <div className="hero-top">
          <div className="hero-brand">
            <span>結婚式</span>
            <small>JAPANESE WEDDING</small>
          </div>
          <div className="hero-stamp">
            <span>06</span>
            <small>2027</small>
          </div>
        </div>
        <div className="hero-vertical">愛をこめて</div>
        <Reveal direction="scale" duration={1100} className="hero-art">
          <div className="hero-photo-wrap">
            <div className="hero-photo-label">
              <span>WEDDING FILE 01</span>
              <span>RIO / SUZUKI</span>
            </div>
            <img src={animeHero} alt="Rio and Suzuki anime wedding" />
            <div className="photo-corner tl" />
            <div className="photo-corner tr" />
            <div className="photo-corner bl" />
            <div className="photo-corner br" />
          </div>
        </Reveal>
        <div className="hero-copy">
          <div className="hero-kicker">SPECIAL WEDDING EDITION</div>
          <h1>RIO<span>&amp; SUZUKI</span></h1>
          <div className="hero-kanji">二人の物語</div>
          <p>
            Dua cerita bertemu.
            Dua hati memilih satu perjalanan.
          </p>
        </div>
        <div className="hero-date">
          <strong>14</strong>
          <div>
            <span>JUNE</span>
            <span>2027</span>
          </div>
        </div>
        <div className="hero-bottom-note">
          SCROLL TO BEGIN<span>↓</span>
        </div>
        <ImpactLines />
      </section>

      {/* =====================================================
          MARQUEE
      ===================================================== */}
      <Marquee text="RIO × SUZUKI" />
      <Marquee text="愛 • WEDDING • 永遠 • LOVE" reverse />

      {/* =====================================================
          OPENING
      ===================================================== */}
      <section className="opening section">
        <Reveal>
          <SectionLabel number="01" japanese="はじまり" title="THE BEGINNING" />
          <div className="opening-layout">
            <div className="opening-big">01</div>
            <div>
              <p className="jp-display">二人の物語</p>
              <p className="opening-main">
                Ada dua manusia, dua cerita, dan satu keputusan untuk berjalan bersama.
              </p>
              <div className="opening-rule" />
              <p className="opening-small">
                Dengan penuh rasa syukur, kami mengundang Anda untuk menjadi bagian dari hari istimewa kami.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal direction="right" delay={180}>
          <div className="quote-card">
            <span>愛をこめて</span>
            <blockquote>
              “Dari pertemuan sederhana, lahirlah cerita yang ingin kami lanjutkan selamanya.”
            </blockquote>
            <small>— RIO × SUZUKI</small>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          COUPLE
      ===================================================== */}
      <section className="couple section">
        <Reveal>
          <SectionLabel number="02" japanese="二人" title="THE COUPLE" />
          <p className="section-intro">
            Dua tokoh utama dalam cerita yang akan kami tulis bersama.
          </p>
        </Reveal>
        <div className="couple-stage">
          <Reveal direction="left" delay={100}>
            <article className="person-card">
              <div className="person-photo">
                <img src={animeHero} alt="Rio" />
                <span className="person-index">01</span>
              </div>
              <div className="person-copy">
                <span className="person-role">THE GROOM / 新郎</span>
                <h3>RIO</h3>
                <p>Putra dari keluarga yang penuh kasih.</p>
              </div>
            </article>
          </Reveal>
          <div className="couple-symbol">×</div>
          <Reveal direction="right" delay={260}>
            <article className="person-card second">
              <div className="person-photo">
                <img src={animeSecond} alt="Suzuki" />
                <span className="person-index">02</span>
              </div>
              <div className="person-copy">
                <span className="person-role">THE BRIDE / 新婦</span>
                <h3>SUZUKI</h3>
                <p>Putri dari keluarga yang penuh cinta.</p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          STORY
      ===================================================== */}
      <section className="story section">
        <Reveal>
          <SectionLabel number="03" japanese="物語" title="OUR STORY" />
          <p className="section-intro">
            Beberapa halaman kecil dari perjalanan Rio dan Suzuki.
          </p>
        </Reveal>
        <div className="manga-story">
          <Reveal direction="left" delay={100}>
            <article className="story-panel panel-one">
              <span>CHAPTER 01</span>
              <strong>THE FIRST<br />MEETING</strong>
              <b>出会い</b>
              <p>Dua jalan yang berbeda akhirnya bertemu di satu titik.</p>
            </article>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <article className="story-panel panel-two">
              <span>CHAPTER 02</span>
              <strong>BECOMING<br />US</strong>
              <b>二人</b>
              <p>Dari percakapan sederhana, tumbuh menjadi cerita yang tidak ingin dilewatkan.</p>
            </article>
          </Reveal>
          <Reveal direction="left" delay={300}>
            <article className="story-panel panel-three">
              <span>CHAPTER 03</span>
              <strong>FOREVER<br />STARTS</strong>
              <b>永遠</b>
              <p>Kini kami memilih untuk melanjutkan perjalanan ini sebagai satu keluarga.</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          WEDDING DAY
      ===================================================== */}
      <section className="wedding-day section">
        <Reveal direction="scale">
          <div className="date-emblem">
            <span>WEDDING DAY</span>
            <strong>14</strong>
            <small>JUNE · 2027</small>
            <b>結婚式</b>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="center-heading">
            <div className="section-meta">
              <span>04</span>
              <span>セレモニー</span>
            </div>
            <h2>THE WEDDING DAY</h2>
            <p>Hari yang telah kami nantikan.</p>
          </div>
        </Reveal>
        <div className="event-stack">
          <Reveal direction="left" delay={100}>
            <article className="event-card">
              <div className="event-number">01</div>
              <div className="event-content">
                <span>CEREMONY / 挙式</span>
                <h3>Akad Nikah</h3>
                <strong>09.00 WIB</strong>
                <p>Gedung Pernikahan<br />Jakarta, Indonesia</p>
              </div>
              <div className="event-arrow">↘</div>
            </article>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <article className="event-card dark">
              <div className="event-number">02</div>
              <div className="event-content">
                <span>RECEPTION / 披露宴</span>
                <h3>Resepsi</h3>
                <strong>11.00 — 14.00 WIB</strong>
                <p>Gedung Pernikahan<br />Jakarta, Indonesia</p>
              </div>
              <div className="event-arrow">↘</div>
            </article>
          </Reveal>
        </div>

        {/* COUNTDOWN */}
        <Reveal delay={300} direction="scale">
          <div className="countdown">
            <div className="countdown-top">
              <span>COUNTING DOWN</span>
              <b>その日まで</b>
            </div>
            <div className="countdown-grid">
              <TimeBox value={countdown.days} label="DAYS" />
              <TimeBox value={countdown.hours} label="HOURS" />
              <TimeBox value={countdown.mins} label="MIN" />
              <TimeBox value={countdown.secs} label="SEC" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          CINEMATIC QUOTE
      ===================================================== */}
      <section className="cinematic-quote">
        <div className="quote-sun" />
        <div className="quote-speed-lines" />
        <Reveal direction="scale">
          <span className="quote-jp">永遠の約束</span>
          <h2>ONE STORY.<br />ONE LOVE.<br /><span>FOREVER.</span></h2>
          <p></p>
        </Reveal>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}
      <section className="gallery section">
        <Reveal>
          <SectionLabel number="05" japanese="思い出" title="MEMORIES" />
          <p className="section-intro">Beberapa frame yang ingin kami simpan selamanya.</p>
        </Reveal>
        <div className="gallery-grid">
          <Reveal direction="left">
            <button type="button" className="gallery-card tall" onClick={() => setActivePhoto(0)}>
              <img src={animeHero} alt="Rio and Suzuki" />
              <span>FRAME 01</span>
              <strong>OUR BEGINNING</strong>
            </button>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <button type="button" className="gallery-card" onClick={() => setActivePhoto(1)}>
              <img src={animeSecond} alt="Rio and Suzuki" />
              <span>FRAME 02</span>
              <strong>UNDER THE STARS</strong>
            </button>
          </Reveal>
          <Reveal direction="up" delay={180} className="gallery-wide">
            <button type="button" className="gallery-card" onClick={() => setActivePhoto(0)}>
              <img src={animeHero} alt="Rio and Suzuki" />
              <span>FRAME 03</span>
              <strong>FOREVER STARTS HERE</strong>
            </button>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}
      {activePhoto !== null && (
        <div className="lightbox" onClick={() => setActivePhoto(null)}>
          <button type="button" className="lightbox-close" onClick={() => setActivePhoto(null)} aria-label="Close gallery">×</button>
          <img src={activePhoto === 0 ? animeHero : animeSecond} alt="Rio and Suzuki" onClick={(event) => event.stopPropagation()} />
          <span>{activePhoto === 0 ? "FRAME 01" : "FRAME 02"}</span>
        </div>
      )}

      {/* =====================================================
          RSVP
      ===================================================== */}
      <section className="rsvp section">
        <Reveal>
          <SectionLabel number="06" japanese="出席確認" title="RSVP" />
          <p className="section-intro">Kehadiran Anda akan menjadi bagian yang berarti bagi kami.</p>
        </Reveal>
        {!submitted ? (
          <Reveal delay={180} direction="up">
            <form className="rsvp-form" onSubmit={submitRSVP}>
              <label>
                <span>NAMA</span>
                <input type="text" required value={form.name} placeholder="Nama Anda" onChange={(event) => setForm({ ...form, name: event.target.value })} />
              </label>
              <label>
                <span>KEHADIRAN</span>
                <select required value={form.attend} onChange={(event) => setForm({ ...form, attend: event.target.value })}>
                  <option value="">Pilih konfirmasi</option>
                  <option value="hadir">Saya akan hadir</option>
                  <option value="tidak">Maaf, saya tidak dapat hadir</option>
                </select>
              </label>
              <label>
                <span>UCAPAN</span>
                <textarea rows={5} value={form.wishes} placeholder="Tuliskan ucapan untuk Rio & Suzuki..." onChange={(event) => setForm({ ...form, wishes: event.target.value })} />
              </label>
              <button type="submit" className="submit-button">
                <span>KIRIM KONFIRMASI</span><b>→</b>
              </button>
            </form>
          </Reveal>
        ) : (
          <Reveal direction="scale">
            <div className="rsvp-success">
              <div className="success-seal">ありがとう</div>
              <span>MESSAGE RECEIVED</span>
              <h3>THANK<br />YOU!</h3>
              <p>Terima kasih sudah menjadi bagian dari hari spesial Rio & Suzuki.</p>
              <strong>♡</strong>
            </div>
          </Reveal>
        )}
      </section>

      {/* =====================================================
          FINAL SCENE
      ===================================================== */}
      <section className="closing">
        <div className="closing-halftone" />
        <div className="closing-speed" />
        <Reveal direction="scale">
          <div className="closing-kanji">永遠</div>
          <span className="closing-label">THE ENDLESS STORY</span>
          <h2>RIO<span>×</span>SUZUKI</h2>
          <p>Sampai bertemu di hari yang akan kami kenang selamanya.</p>
          <div className="closing-date">14 · 06 · 2027</div>
          <div className="closing-jp">愛をこめて</div>
        </Reveal>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer>
        <span>RIO × SUZUKI</span>
        <span>結婚式 · 2027</span>
      </footer>

      {/* =====================================================
          GLOBAL STYLES
      ===================================================== */}
      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #090909; color: #111; font-family: Arial, Helvetica, sans-serif; }
        button, input, textarea, select { font: inherit; }
        button { -webkit-tap-highlight-color: transparent; }
        img { display: block; width: 100%; }
        
        .page { width: 100%; max-width: 430px; margin: 0 auto; overflow: hidden; background: #fff0f3; }

        /* ===================================================
           FLOATING MUSIC BUTTON
        =================================================== */
        .floating-music {
          position: fixed;
          bottom: 20px;
          right: 20px; /* Taruh di pojok kanan bawah */
          z-index: 9998;
          padding: 8px 12px;
          border: 2px solid #111;
          background: #fff0f3;
          color: #111;
          font-size: 8px;
          font-weight: 1000;
          letter-spacing: .1em;
          box-shadow: 4px 4px 0 #ff3366;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .floating-music.visible {
          opacity: 1;
          visibility: visible;
        }

        /* ===================================================
           CINEMATIC INTRO
        =================================================== */
        .cinematic-intro {
          position: fixed;
          z-index: 9999;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #111;
          color: #fff0f3;
          transition: opacity .8s ease, visibility .8s ease;
        }

        .cinematic-intro-done {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .intro-japanese {
          font-size: 62px;
          line-height: 1;
          font-weight: 1000;
          color: #ff3366;
          animation: introText 1s cubic-bezier(.16,1,.3,1) both;
        }

        .intro-line {
          width: 0;
          height: 3px;
          margin: 22px 0;
          background: #fff0f3;
          animation: introLine .7s .55s cubic-bezier(.16,1,.3,1) forwards;
        }

        .cinematic-intro > span {
          font-size: 10px;
          font-weight: 1000;
          letter-spacing: .3em;
          animation: introText 1s .9s cubic-bezier(.16,1,.3,1) both;
        }

        .btn-open {
          margin-top: 50px;
          padding: 12px 28px;
          border: 2px solid #ff3366;
          background: #111;
          color: #ff3366;
          font-size: 10px;
          font-weight: 1000;
          letter-spacing: .2em;
          cursor: pointer;
          opacity: 0;
          animation: btnFade 1s 1.5s ease forwards;
          transition: background 0.3s, color 0.3s;
        }

        .btn-open:hover {
          background: #ff3366;
          color: #111;
        }

        @keyframes introText {
          from { opacity: 0; transform: translateY(20px) scale(.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes introLine {
          to { width: 160px; }
        }

        @keyframes btnFade {
          to { opacity: 1; }
        }

        /* (Sisa CSS bawaan template kamu dibiarkan persis sama) */

        .hero { position: relative; min-height: 850px; padding: 22px; overflow: hidden; background: radial-gradient( circle at 80% 10%, rgba(255,51,102,.2), transparent 30% ), #fff0f3; }
        .hero-halftone { position: absolute; inset: 0; opacity: .15; background-image: radial-gradient( #111 1px, transparent 1px ); background-size: 8px 8px; mask-image: linear-gradient( to bottom, black, transparent 70% ); pointer-events: none; }
        .hero-top { position: relative; z-index: 3; display: flex; justify-content: space-between; align-items: flex-start; }
        .hero-brand { display: flex; flex-direction: column; }
        .hero-brand span { font-size: 26px; line-height: .9; font-weight: 1000; }
        .hero-brand small { margin-top: 5px; font-size: 7px; font-weight: 1000; letter-spacing: .2em; }
        .hero-stamp { width: 62px; height: 62px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px solid #ff3366; border-radius: 50%; color: #ff3366; transform: rotate(8deg); }
        .hero-stamp span { font-size: 22px; line-height: .8; font-weight: 1000; }
        .hero-stamp small { margin-top: 5px; font-size: 7px; font-weight: 1000; letter-spacing: .15em; }
        .hero-art { position: relative; z-index: 3; margin-top: 38px; }
        .hero-photo-wrap { position: relative; border: 4px solid #111; background: #111; box-shadow: 11px 11px 0 #ff3366; }
        .hero-photo-wrap img { height: 420px; object-fit: cover; }
        .hero-photo-label { position: absolute; z-index: 4; top: 0; left: 0; right: 0; display: flex; justify-content: space-between; padding: 9px; background: #111; color: #fff0f3; font-size: 7px; font-weight: 1000; letter-spacing: .13em; }
        .photo-corner { position: absolute; width: 24px; height: 24px; border-color: #ff3366; z-index: 5; }
        .photo-corner.tl { top: 45px; left: 10px; border-top: 3px solid; border-left: 3px solid; }
        .photo-corner.tr { top: 45px; right: 10px; border-top: 3px solid; border-right: 3px solid; }
        .photo-corner.bl { bottom: 10px; left: 10px; border-bottom: 3px solid; border-left: 3px solid; }
        .photo-corner.br { bottom: 10px; right: 10px; border-bottom: 3px solid; border-right: 3px solid; }
        .hero-copy { position: relative; z-index: 5; margin-top: 30px; }
        .hero-kicker { display: inline-block; padding: 7px 9px; background: #111; color: #fff0f3; font-size: 7px; font-weight: 1000; letter-spacing: .18em; transform: rotate(-1deg); }
        .hero h1 { margin: 14px 0 0; font-size: 20vw; line-height: .68; letter-spacing: -.09em; font-weight: 1000; color: #111; }
        .hero h1 span { display: block; margin-left: 25px; margin-top: 13px; font-size: .67em; color: #111; text-shadow: 5px 5px 0 #ff3366; }
        .hero-kanji { margin-top: 18px; color: #ff3366; font-size: 21px; font-weight: 1000; letter-spacing: .13em; }
        .hero-copy p { max-width: 290px; margin: 10px 0 0; font-size: 11px; line-height: 1.7; font-weight: 700; }
        .hero-date { position: absolute; z-index: 6; right: 20px; bottom: 48px; display: flex; align-items: center; gap: 8px; }
        .hero-date strong { font-size: 56px; line-height: .7; font-weight: 1000; }
        .hero-date div { display: flex; flex-direction: column; font-size: 8px; line-height: 1.3; font-weight: 1000; letter-spacing: .17em; }
        .hero-vertical { position: absolute; z-index: 5; top: 300px; left: 7px; writing-mode: vertical-rl; font-size: 10px; font-weight: 1000; letter-spacing: .18em; opacity: .55; }
        .hero-bottom-note { position: absolute; z-index: 6; left: 22px; bottom: 21px; display: flex; align-items: center; gap: 7px; font-size: 7px; font-weight: 1000; letter-spacing: .17em; }
        .hero-bottom-note span { color: #ff3366; font-size: 17px; animation: bounceArrow 1.4s ease-in-out infinite; }
        @keyframes bounceArrow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(5px); } }
        
        .particle { position: absolute; z-index: 2; color: #ff3366; font-size: 12px; animation: particleFloat 3.5s ease-in-out infinite; pointer-events: none; }
        @keyframes particleFloat { 0%, 100% { opacity: .15; transform: translateY(0) rotate(0); } 50% { opacity: .9; transform: translateY(-12px) rotate(90deg); } }
        
        .impact-lines { position: absolute; right: -30px; top: 170px; width: 150px; height: 150px; pointer-events: none; transform: rotate(-20deg); }
        .impact-lines i { position: absolute; right: 0; height: 2px; width: 100%; background: #ff3366; transform-origin: right; }
        .impact-lines i:nth-child(1) { top: 10px; transform: scaleX(.4); }
        .impact-lines i:nth-child(2) { top: 35px; transform: scaleX(.75); }
        .impact-lines i:nth-child(3) { top: 60px; transform: scaleX(1); }
        .impact-lines i:nth-child(4) { top: 85px; transform: scaleX(.65); }
        .impact-lines i:nth-child(5) { top: 110px; transform: scaleX(.4); }
        .impact-lines i:nth-child(6) { top: 135px; transform: scaleX(.2); }
        
        .marquee { overflow: hidden; border-top: 3px solid #111; border-bottom: 3px solid #111; background: #ff3366; }
        .marquee:nth-of-type(2n) { background: #111; color: #fff0f3; }
        .marquee-track { display: flex; align-items: center; width: max-content; gap: 20px; padding: 9px 0; animation: marquee 18s linear infinite; }
        .marquee-track-reverse { animation-direction: reverse; animation-duration: 22s; }
        .marquee span { white-space: nowrap; font-size: 18px; font-weight: 1000; letter-spacing: -.03em; }
        .marquee b { font-size: 13px; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        
        .section { padding: 78px 22px; }
        .section-heading { margin-bottom: 30px; }
        .section-meta { display: flex; align-items: center; gap: 9px; font-size: 8px; font-weight: 1000; letter-spacing: .18em; }
        .section-meta span:first-child { color: #ff3366; }
        .section-heading h2 { margin: 7px 0 0; font-size: 50px; line-height: .8; letter-spacing: -.08em; font-weight: 1000; }
        .section-intro { max-width: 300px; margin: -7px 0 0; font-size: 11px; line-height: 1.7; font-weight: 650; }
        
        .opening { background: #fff0f3; }
        .opening-layout { display: grid; grid-template-columns: 70px 1fr; gap: 18px; margin-top: 20px; }
        .opening-big { font-size: 88px; line-height: .7; font-weight: 1000; color: #ff3366; letter-spacing: -.1em; }
        .jp-display { margin: 0 0 8px; font-size: 19px; font-weight: 1000; }
        .opening-main { margin: 0; font-size: 21px; line-height: 1.2; font-weight: 1000; letter-spacing: -.04em; }
        .opening-rule { width: 100%; height: 3px; margin: 22px 0; background: #111; }
        .opening-small { margin: 0; font-size: 10px; line-height: 1.7; font-weight: 650; }
        
        .quote-card { position: relative; margin-top: 38px; padding: 28px 22px; border: 3px solid #111; background: #ff3366; box-shadow: 8px 8px 0 #111; }
        .quote-card > span { font-size: 17px; font-weight: 1000; }
        .quote-card blockquote { margin: 17px 0; font-size: 17px; line-height: 1.45; font-weight: 900; }
        .quote-card small { font-size: 8px; font-weight: 1000; letter-spacing: .15em; }
        
        .couple { position: relative; background: #111; color: #fff0f3; }
        .couple .section-heading h2 { color: #fff0f3; }
        .couple .section-intro { color: rgba(255,240,243,.72); }
        .couple-stage { position: relative; display: grid; gap: 28px; margin-top: 42px; }
        .person-card { border: 3px solid #fff0f3; background: #fff0f3; color: #111; }
        .person-card.second { transform: translateX(15px); }
        .person-photo { position: relative; overflow: hidden; }
        .person-photo img { height: 380px; object-fit: cover; }
        .person-index { position: absolute; top: 12px; right: 12px; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; border: 2px solid #111; border-radius: 50%; background: #ff3366; font-size: 10px; font-weight: 1000; }
        .person-copy { padding: 17px; }
        .person-role { font-size: 7px; font-weight: 1000; letter-spacing: .17em; }
        .person-copy h3 { margin: 5px 0 7px; font-size: 44px; line-height: .8; letter-spacing: -.07em; font-weight: 1000; }
        .person-copy p { margin: 0; font-size: 10px; line-height: 1.6; font-weight: 650; }
        .couple-symbol { position: absolute; z-index: 5; top: 48%; left: 50%; width: 52px; height: 52px; display: flex; align-items: center; justify-content: center; transform: translate(-50%, -50%); border: 3px solid #111; border-radius: 50%; background: #ff3366; color: #111; font-size: 27px; font-weight: 1000; }
        
        .story { background: #ff3366; }
        .manga-story { display: grid; gap: 15px; margin-top: 38px; }
        .story-panel { position: relative; min-height: 190px; padding: 20px; border: 3px solid #111; background: #fff0f3; color: #111; overflow: hidden; }
        .story-panel::after { content: ""; position: absolute; inset: 0; opacity: .12; background-image: radial-gradient( #111 1px, transparent 1px ); background-size: 7px 7px; pointer-events: none; }
        .story-panel > * { position: relative; z-index: 2; }
        .story-panel > span { display: block; font-size: 7px; font-weight: 1000; letter-spacing: .17em; }
        .story-panel strong { display: block; margin-top: 15px; font-size: 31px; line-height: .82; letter-spacing: -.06em; font-weight: 1000; }
        .story-panel b { position: absolute; right: 15px; top: 15px; font-size: 36px; color: #ff3366; }
        .story-panel p { max-width: 235px; margin: 20px 0 0; font-size: 10px; line-height: 1.6; font-weight: 700; }
        .panel-two { background: #111; color: #fff0f3; }
        .panel-two b { color: #ff3366; }
        .panel-three { background: #fff0f3; }
        
        .wedding-day { background: #fff0f3; }
        .date-emblem { width: 215px; height: 215px; margin: 0 auto 55px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 4px solid #111; border-radius: 50%; background: #ff3366; box-shadow: 12px 12px 0 #111; text-align: center; }
        .date-emblem span { font-size: 7px; font-weight: 1000; letter-spacing: .18em; }
        .date-emblem strong { margin: 5px 0; font-size: 76px; line-height: .7; letter-spacing: -.1em; font-weight: 1000; }
        .date-emblem small { font-size: 9px; font-weight: 1000; letter-spacing: .14em; }
        .date-emblem b { margin-top: 7px; font-size: 15px; font-weight: 1000; }
        .center-heading { text-align: center; }
        .center-heading .section-meta { justify-content: center; }
        .center-heading h2 { margin: 8px 0; font-size: 43px; line-height: .82; letter-spacing: -.08em; font-weight: 1000; }
        .center-heading p { margin: 0; font-size: 10px; font-weight: 650; }
        
        .event-stack { display: grid; gap: 15px; margin-top: 38px; }
        .event-card { display: grid; grid-template-columns: 38px 1fr 20px; gap: 12px; padding: 18px; border: 3px solid #111; background: #ff3366; box-shadow: 7px 7px 0 #111; }
        .event-card.dark { background: #111; color: #fff0f3; }
        .event-number { font-size: 11px; font-weight: 1000; }
        .event-content > span { font-size: 7px; font-weight: 1000; letter-spacing: .16em; }
        .event-content h3 { margin: 6px 0; font-size: 26px; line-height: .9; letter-spacing: -.05em; font-weight: 1000; }
        .event-content strong { display: block; font-size: 11px; font-weight: 1000; }
        .event-content p { margin: 9px 0 0; font-size: 9px; line-height: 1.5; opacity: .75; }
        .event-arrow { align-self: start; color: #111; font-size: 20px; font-weight: 1000; }
        .event-card.dark .event-arrow { color: #ff3366; }
        
        .countdown { margin-top: 50px; padding: 20px; border: 3px solid #111; background: #111; color: #fff0f3; }
        .countdown-top { display: flex; justify-content: space-between; margin-bottom: 18px; }
        .countdown-top span { font-size: 7px; font-weight: 1000; letter-spacing: .17em; }
        .countdown-top b { color: #ff3366; font-size: 14px; }
        .countdown-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 5px; }
        .time-box { padding: 11px 3px; border: 1px solid rgba(255,255,255,.25); text-align: center; }
        .time-box strong { display: block; font-size: 22px; font-weight: 1000; }
        .time-box span { font-size: 6px; font-weight: 1000; letter-spacing: .08em; }
        
        .cinematic-quote { position: relative; min-height: 650px; display: flex; align-items: center; justify-content: center; padding: 70px 25px; overflow: hidden; background: #111; color: #fff0f3; text-align: center; }
        .quote-sun { position: absolute; width: 260px; height: 260px; border-radius: 50%; background: #ff3366; opacity: .85; filter: blur(1px); }
        .quote-speed-lines { position: absolute; inset: -30%; opacity: .18; background: repeating-linear-gradient( 115deg, transparent 0 22px, #fff 23px 25px, transparent 26px 48px ); transform: rotate(-8deg); }
        .cinematic-quote .reveal { position: relative; z-index: 2; }
        .quote-jp { display: block; margin-bottom: 25px; font-size: 17px; font-weight: 1000; letter-spacing: .15em; }
        .cinematic-quote h2 { margin: 0; font-size: 55px; line-height: .78; letter-spacing: -.08em; font-weight: 1000; text-shadow: 5px 5px 0 #111; }
        .cinematic-quote h2 span { color: #ff3366; }
        .cinematic-quote p { max-width: 270px; margin: 35px auto 0; font-size: 12px; line-height: 1.6; font-weight: 800; }
        
        .gallery { background: #fff0f3; }
        .gallery-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 40px; }
        .gallery-wide { grid-column: 1 / -1; }
        .gallery-card { position: relative; width: 100%; padding: 0; border: 3px solid #111; background: #111; color: #fff0f3; text-align: left; cursor: pointer; overflow: hidden; box-shadow: 6px 6px 0 #ff3366; }
        .gallery-card img { height: 260px; object-fit: cover; transition: transform .7s cubic-bezier(.16,1,.3,1); }
        .gallery-card.tall img { height: 500px; }
        .gallery-wide .gallery-card img { height: 245px; }
        .gallery-card::after { content: ""; position: absolute; inset: 0; background: linear-gradient( to top, rgba(0,0,0,.8), transparent 45% ); pointer-events: none; }
        .gallery-card:hover img, .gallery-card:focus img { transform: scale(1.05); }
        .gallery-card > span, .gallery-card > strong { position: absolute; z-index: 2; left: 12px; }
        .gallery-card > span { bottom: 38px; font-size: 7px; font-weight: 1000; letter-spacing: .17em; }
        .gallery-card > strong { bottom: 12px; font-size: 12px; font-weight: 1000; }
        
        .lightbox { position: fixed; z-index: 9998; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 25px; background: rgba(17,17,17,.96); animation: lightboxIn .25s ease both; }
        .lightbox img { max-height: 75vh; object-fit: contain; border: 3px solid #fff0f3; }
        .lightbox > span { margin-top: 15px; color: #ff3366; font-size: 9px; font-weight: 1000; letter-spacing: .2em; }
        .lightbox-close { position: absolute; top: 15px; right: 15px; width: 42px; height: 42px; border: 2px solid #fff0f3; border-radius: 50%; background: transparent; color: #fff0f3; font-size: 27px; line-height: 1; cursor: pointer; }
        @keyframes lightboxIn { from { opacity: 0; } to { opacity: 1; } }
        
        .rsvp { background: #ff3366; }
        .rsvp .section-heading h2 { font-size: 76px; }
        .rsvp-form { display: grid; gap: 18px; margin-top: 40px; }
        .rsvp-form label { display: grid; gap: 7px; }
        .rsvp-form label span { font-size: 7px; font-weight: 1000; letter-spacing: .18em; }
        .rsvp-form input, .rsvp-form textarea, .rsvp-form select { width: 100%; padding: 13px; border: 3px solid #111; border-radius: 0; outline: none; background: #fff0f3; color: #111; font-size: 11px; font-weight: 700; }
        .rsvp-form textarea { resize: vertical; }
        .rsvp-form input:focus, .rsvp-form textarea:focus, .rsvp-form select:focus { box-shadow: 5px 5px 0 #111; }
        .submit-button { display: flex; align-items: center; justify-content: space-between; padding: 15px; border: 3px solid #111; background: #111; color: #fff0f3; cursor: pointer; box-shadow: 6px 6px 0 #fff0f3; font-size: 9px; font-weight: 1000; letter-spacing: .14em; }
        .submit-button b { color: #ff3366; font-size: 20px; }
        .rsvp-success { margin-top: 40px; padding: 42px 25px; border: 3px solid #111; background: #fff0f3; text-align: center; box-shadow: 8px 8px 0 #111; }
        .success-seal { display: inline-flex; width: 78px; height: 78px; align-items: center; justify-content: center; border: 3px solid #ff3366; border-radius: 50%; color: #ff3366; font-size: 11px; font-weight: 1000; transform: rotate(-8deg); }
        .rsvp-success > span { display: block; margin-top: 20px; font-size: 7px; font-weight: 1000; letter-spacing: .17em; }
        .rsvp-success h3 { margin: 8px 0; font-size: 52px; line-height: .75; letter-spacing: -.08em; font-weight: 1000; }
        .rsvp-success p { font-size: 10px; line-height: 1.6; font-weight: 650; }
        .rsvp-success strong { display: block; margin-top: 18px; color: #ff3366; font-size: 35px; }
        
        .closing { position: relative; min-height: 690px; display: flex; align-items: center; justify-content: center; padding: 60px 25px; overflow: hidden; background: #111; color: #fff0f3; text-align: center; }
        .closing-halftone { position: absolute; inset: 0; opacity: .08; background-image: radial-gradient( #fff 1px, transparent 1px ); background-size: 8px 8px; }
        .closing-speed { position: absolute; inset: -50%; background: repeating-linear-gradient( 110deg, transparent 0 32px, #ff3366 33px 35px, transparent 36px 70px ); opacity: .06; transform: rotate(-8deg); }
        .closing > .reveal { position: relative; z-index: 3; width: 100%; }
        .closing-kanji { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); color: rgba(255,51,102,.08); font-size: 230px; line-height: 1; font-weight: 1000; white-space: nowrap; }
        .closing-label { position: relative; display: inline-block; padding: 7px 10px; background: #ff3366; color: #111; font-size: 7px; font-weight: 1000; letter-spacing: .18em; }
        .closing h2 { position: relative; margin: 35px 0 20px; font-size: 78px; line-height: .65; letter-spacing: -.09em; font-weight: 1000; }
        .closing h2 span { display: block; margin: 12px 0; color: #ff3366; font-size: 42px; }
        .closing p { position: relative; max-width: 275px; margin: 0 auto; font-size: 11px; line-height: 1.7; font-weight: 650; }
        .closing-date { position: relative; margin-top: 32px; font-size: 10px; font-weight: 1000; letter-spacing: .2em; }
        .closing-jp { position: relative; margin-top: 15px; color: #ff3366; font-size: 18px; font-weight: 1000; letter-spacing: .15em; }
        
        footer { display: flex; justify-content: space-between; padding: 12px 15px; border-top: 3px solid #111; background: #ff3366; color: #111; font-size: 7px; font-weight: 1000; letter-spacing: .13em; }
        
        .reveal { opacity: 0; transition: opacity var(--duration) cubic-bezier(.16,1,.3,1), transform var(--duration) cubic-bezier(.16,1,.3,1); transition-delay: var(--delay); }
        .reveal[data-direction="up"] { transform: translateY(45px); }
        .reveal[data-direction="left"] { transform: translateX(-45px); }
        .reveal[data-direction="right"] { transform: translateX(45px); }
        .reveal[data-direction="scale"] { transform: scale(.88); }
        .reveal[data-visible="true"] { opacity: 1; transform: translate(0) scale(1); }
        
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
          .reveal { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </main>
  );
}
