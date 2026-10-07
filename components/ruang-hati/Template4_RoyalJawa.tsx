"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

/* =========================================================
   JAVANESE MUSLIM WEDDING — ROYAL EDITORIAL 5.0
   ---------------------------------------------------------
   Ganti DATA DI BAGIAN ATAS untuk setiap pasangan.
   Music: /publichttps://raw.githubusercontent.com/Heroness1/Ruang-Hati/main/public/music/nikahanjawa.webm

   Flow:
   Sugeng Rawuh → Mlebet → music intro → Hero → Story →
   Dinten Bahagia → Pangestu → Gallery → RSVP → Closing
========================================================= */

const WEDDING_DATE = "2027-06-14T09:00:00";
const GROOM = "Ahmad Fadillah";
const BRIDE = "Aisyah Rahmawati";
const GROOM_SHORT = "Ahmad";
const BRIDE_SHORT = "Aisyah";
const WEDDING_MUSIC = "https://raw.githubusercontent.com/Heroness1/Ruang-Hati/main/public/music/nikahanjawa.webm";
const MAP_URL = "https://maps.google.com/?q=Jakarta,Indonesia";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=90&w=1600";
const SECOND_IMAGE =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=90&w=1400";

const GALLERY = [
  { src: HERO_IMAGE, alt: "Momen pernikahan" },
  { src: SECOND_IMAGE, alt: "Momen pasangan" },
  { src: HERO_IMAGE, alt: "Momen bahagia" },
  { src: SECOND_IMAGE, alt: "Kenangan bersama" },
];

type Countdown = { days: number; hours: number; mins: number; secs: number };
type RSVPForm = { name: string; attend: string; wishes: string };

function useCountdown(target: string): Countdown {
  const calculate = (): Countdown => {
    const diff = new Date(target).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      mins: Math.floor((diff / 60000) % 60),
      secs: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState<Countdown>(calculate);
  useEffect(() => {
    const id = window.setInterval(() => setTime(calculate()), 1000);
    return () => window.clearInterval(id);
  }, [target]);
  return time;
}

function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "left" | "right" | "zoom" | "clip";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Kawung({ size = 70 }: { size?: number }) {
  return (
    <span className="kawung" style={{ width: size, height: size }} aria-hidden="true">
      <i /><i /><i /><i /><b />
    </span>
  );
}

function BatikMark() {
  return <span className="batik-mark" aria-hidden="true">◆</span>;
}

function SectionHead({
  no,
  eyebrow,
  title,
  dark = false,
}: {
  no: string;
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className={`section-head ${dark ? "section-head-dark" : ""}`}>
      <div className="section-no">{no}</div>
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function Marquee({ children, reverse = false, muted = false }: { children: React.ReactNode; reverse?: boolean; muted?: boolean }) {
  return (
    <div className={`marquee ${reverse ? "marquee-reverse" : ""} ${muted ? "marquee-muted" : ""}`} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1, 2, 3].map((n) => <span key={n}>{children}<b>✦</b></span>)}
      </div>
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

export default function TemplateJavaneseMuslimWedding() {
  const countdown = useCountdown(WEDDING_DATE);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const introTimerRef = useRef<number | null>(null);
  const [introOpened, setIntroOpened] = useState(false);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicVisible, setMusicVisible] = useState(false);
  const [musicExpanded, setMusicExpanded] = useState(false);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<RSVPForm>({ name: "", attend: "", wishes: "" });

  const weddingDate = useMemo(
    () => new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(WEDDING_DATE)),
    []
  );

  const clearFade = () => {
    if (fadeRef.current !== null) {
      window.clearInterval(fadeRef.current);
      fadeRef.current = null;
    }
  };

  const fadeTo = (target: number, duration = 500) => {
    const audio = audioRef.current;
    if (!audio) return;
    clearFade();
    const start = audio.volume;
    const started = performance.now();
    fadeRef.current = window.setInterval(() => {
      const progress = Math.min((performance.now() - started) / duration, 1);
      audio.volume = start + (target - start) * progress;
      if (progress >= 1) clearFade();
    }, 30);
  };

  const playMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setMusicPlaying(true);
      fadeTo(0.42, 650);
    } catch (error) {
      console.warn("BGM gagal diputar:", error);
    }
  };

  const pauseMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    clearFade();
    audio.pause();
    setMusicPlaying(false);
  };

  const toggleMusic = async () => {
    if (musicPlaying) pauseMusic();
    else await playMusic();
  };

  const finishIntro = () => {
    const audio = audioRef.current;
    if (audio) {
      fadeTo(0, 650);
      window.setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 0.42;
        setMusicPlaying(false);
      }, 700);
    }
    setIntroLeaving(true);
    window.setTimeout(() => setMusicVisible(true), 900);
  };

  const openInvitation = async () => {
    if (introOpened) return;
    setIntroOpened(true);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 0;
      await playMusic();
    }
    introTimerRef.current = window.setTimeout(finishIntro, 1850);
  };

  useEffect(() => {
    document.body.classList.add("javanese-wedding-page");
    const audio = audioRef.current;
    const ended = () => setMusicPlaying(false);
    audio?.addEventListener("ended", ended);
    return () => {
      document.body.classList.remove("javanese-wedding-page");
      clearFade();
      if (introTimerRef.current !== null) window.clearTimeout(introTimerRef.current);
      audio?.pause();
      audio?.removeEventListener("ended", ended);
    };
  }, []);

  useEffect(() => {
    if (!activePhoto) return;
    const key = (e: KeyboardEvent) => e.key === "Escape" && setActivePhoto(null);
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [activePhoto]);

  const submitRSVP = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.attend) return;
    setSubmitted(true);
  };

  return (
    <>
      <audio ref={audioRef} src={WEDDING_MUSIC} preload="auto" />

      {!introLeaving && (
        <div className={`welcome ${introOpened ? "welcome-opened" : ""}`}>
          <div className="welcome-noise" />
          <div className="welcome-batik" />
          <div className="welcome-frame" />
          <div className="welcome-door left" />
          <div className="welcome-door right" />
          <div className="welcome-glow" />

          <div className="welcome-content">
            <div className="welcome-kicker">꧁ SUGENG RAWUH ꧂</div>
            <div className="welcome-arabic">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
            <div className="welcome-line" />
            <p className="welcome-greeting">
              Kanthi raos syukur, kula ngaturaken<br />
              sugeng rawuh wonten ing pahargyan
            </p>
            <div className="welcome-title">Pawiwahan</div>
            <div className="welcome-names">
              <span>{GROOM_SHORT}</span>
              <i>&amp;</i>
              <span>{BRIDE_SHORT}</span>
            </div>
            <p className="welcome-date">{weddingDate}</p>
            <Kawung size={62} />
            {!introOpened ? (
              <button className="enter-button" onClick={openInvitation} type="button">
                <span>MLEBET UNDANGAN</span><b>↗</b>
              </button>
            ) : (
              <div className="enter-loading"><i /> MBUKA UNDANGAN</div>
            )}
            <p className="welcome-blessing">Mugi rawuhipun panjenengan dados berkah.</p>
          </div>
          <div className="welcome-footer"><span>KANTHI ANDHAP ASOR</span><BatikMark /><span>NYUWUN PANGESTU</span></div>
        </div>
      )}

      <main className="shell">
        <section className="hero">
          <div className="hero-pattern" />
          <div className="hero-topline"><span>UNDANGAN PAWIWAHAN</span><span>14 · 06 · 2027</span></div>
          <div className="hero-photo">
            <img src={HERO_IMAGE} alt="Foto kedua mempelai" />
            <div className="hero-photo-shade" />
            <div className="photo-stamp">✦</div>
          </div>
          <div className="hero-copy">
            <span className="hero-eyebrow">KANTHI PUJI SYUKUR</span>
            <h1>{GROOM_SHORT}<em>&amp;</em>{BRIDE_SHORT}</h1>
            <p>Kalih insan ingkang dipunparingi pepanggihan dening Gusti Allah SWT, badhe nglajengaken lampahing gesang wonten ing satunggal ikatan suci.</p>
          </div>
          <div className="hero-date"><strong>14</strong><span>JUNI<br />2027</span><i>◆</i></div>
          <div className="hero-bottom"><span /> <small>MUGI DADOS AWALING KABEHING KABERKAHAN</small> <span /></div>
        </section>

        <Marquee>KATRESNAN · SAKINAH · MAWADDAH · RAHMAH · PANGESTU · KEBERKAHAN</Marquee>
        <Marquee reverse muted>NYAWIJI · BEBARENGAN · KASETIO · TENTREM · RAHAYU · SELAWASE</Marquee>

        <section className="section opening">
          <SectionHead no="01" eyebrow="KANthi PUJI SYUKUR" title="Kanthi Andhap Asor" />
          <Reveal variant="clip">
            <div className="opening-layout">
              <div className="opening-number">01</div>
              <div>
                <p className="lead">Alhamdulillahirabbil'alamin.</p>
                <p>Kanthi ngaturaken puji syukur dhumateng Gusti Allah SWT, kula sakalawarga kanthi andhap asor ngaturaken undangan dhumateng Bapak/Ibu/Saudara/i.</p>
                <p>Saking sih rahmat saha pangestuipun Gusti Allah SWT, kalih insan dipunparingi pepanggihan kangge nglampahi satunggal lelampahan gesang.</p>
                <p>Mugi rawuhipun saha pangestu panjenengan dados salah satunggaling berkah ing dinten ingkang insyaAllah kebak kabagyan menika.</p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="zoom" delay={120}>
            <blockquote className="signature-quote">“Mugi katresnan menika boten namung dados wiwitaning crita, nanging dados dalan kangge tansah nyedhak dhumateng Gusti Allah.”<small>{GROOM_SHORT} · {BRIDE_SHORT}</small></blockquote>
          </Reveal>
        </section>

        <section className="couple section-dark">
          <div className="section-inner">
            <SectionHead no="02" eyebrow="KALIH MEMPELAI" title="Manten" dark />
            <div className="couple-grid">
              <Reveal variant="left">
                <article className="person">
                  <div className="person-photo"><img src={HERO_IMAGE} alt={GROOM} /><span>01</span></div>
                  <div className="person-info"><small>MANTEN KAKUNG</small><h3>{GROOM}</h3><p>{GROOM}, S.Kom.</p><div /><span>Putra pertama dari<br />Bapak H. Muhammad Fadli<br />&amp; Ibu Hj. Nur Aisyah</span></div>
                </article>
              </Reveal>
              <Reveal variant="right" delay={130}>
                <article className="person person-bride">
                  <div className="person-photo"><img src={SECOND_IMAGE} alt={BRIDE} /><span>02</span></div>
                  <div className="person-info"><small>MANTEN PUTRI</small><h3>{BRIDE}</h3><p>{BRIDE}, S.E.</p><div /><span>Putri kedua dari<br />Bapak H. Rahmat Hidayat<br />&amp; Ibu Hj. Siti Aminah</span></div>
                </article>
              </Reveal>
            </div>
            <div className="couple-center"><Kawung size={48} /><span>NYAWIJI</span><Kawung size={48} /></div>
          </div>
        </section>

        <section className="family section">
          <Reveal variant="zoom"><div className="family-card"><Kawung size={42} /><small>KULAWARGA</small><h2>Nyuwun Rawuh,<br />Nyuwun Pangestu.</h2><p>Rawuhipun panjenengan saha doa pangestu saking sedaya kulawarga dados kabagyan ingkang mboten saged kaandharake kanthi tembung.</p><div className="family-grid"><div><small>KULAWARGA MANTEN KAKUNG</small><strong>H. Muhammad Fadli<br />&amp; Hj. Nur Aisyah</strong></div><div><small>KULAWARGA MANTEN PUTRI</small><strong>H. Rahmat Hidayat<br />&amp; Hj. Siti Aminah</strong></div></div></div></Reveal>
        </section>

        <section className="section story">
          <SectionHead no="03" eyebrow="RERONCÈNAN KISAH" title="Kisah Asmara" />
          <p className="section-intro">Saben pepanggihan gadhah cariyosipun piyambak. Punika cariyos ingkang alon-alon dados sawijining pangajab.</p>
          <div className="story-list">
            {[
              ["01", "AWAL PEPANGGIHAN", "Wiwitaning Crita", "Saking pepanggihan ingkang prasaja, Gusti Allah maringi dalan kangge kalih ati wiwit saling mengenal."],
              ["02", "MIWITI KATRESNAN", "Sinau Saling Ngertos", "Saking rembag prasaja dados sesrawungan ingkang saya cedhak. Katresnan tuwuh bebarengan kaliyan pangertosan lan pangapunten."],
              ["03", "NYAWIJI", "Milih Tetep Bebarengan", "Wonten ing saben proses, kula lan piyambakipun sinau babagan sabar, ngurmati, lan tansah milih kangge tuwuh bebarengan."],
              ["04", "LANGKAH SELAWASE", "Saking Aku Dados Kita", "Kanthi Bismillah, kekalihipun mutusaken kangge nglajengaken lampah dados satunggal kulawarga, kanthi pangestu saking kulawarga."],
            ].map(([no, eyebrow, title, copy], i) => (
              <Reveal key={no} variant={i % 2 ? "right" : "left"} delay={i * 90}>
                <article className="story-item"><div className="story-no">{no}</div><div className="story-copy"><small>{eyebrow}</small><h3>{title}</h3><p>{copy}</p></div><BatikMark /></article>
              </Reveal>
            ))}
          </div>
          <Reveal variant="zoom"><div className="love-quote"><span>✦</span><p>“Katresnan ingkang sejati mboten namung babagan kepanggih, nanging babagan milih tetep sesarengan.”</p><small>— {GROOM_SHORT} &amp; {BRIDE_SHORT}</small></div></Reveal>
        </section>

        <section className="events">
          <div className="section-inner">
            <div className="event-emblem"><span>DINTEN</span><strong>14</strong><b>JUNI · 2027</b><span>SENIN</span></div>
            <SectionHead no="04" eyebrow="DINTEN BAHAGIA" title="Akad, Panggih & Walimah" dark />
            <p className="section-intro">InsyaAllah, rangkaian acara badhe kalampahan kanthi jadwal ing ngandhap menika.</p>
            <div className="event-grid">
              <Reveal variant="left"><article className="event-card"><span>01</span><small>AKAD NIKAH</small><h3>Akad Nikah</h3><strong>Senin, 14 Juni 2027</strong><p>09.00 WIB – selesai<br />Masjid / Gedung Pernikahan<br />Jakarta, Indonesia</p><a href={MAP_URL} target="_blank" rel="noreferrer">DELENG LOKASI ↗</a></article></Reveal>
              <Reveal variant="right" delay={120}><article className="event-card"><span>02</span><small>PANGGIH &amp; WALIMAH</small><h3>Panggih &amp; Resepsi</h3><strong>Senin, 14 Juni 2027</strong><p>11.00 – 14.00 WIB<br />Gedung Pernikahan<br />Jakarta, Indonesia</p><a href={MAP_URL} target="_blank" rel="noreferrer">DELENG LOKASI ↗</a></article></Reveal>
            </div>
            <div className="countdown"><div><small>NGENTENI DINTEN BAHAGIA</small><strong>MENUJU PAWIWAHAN</strong></div><div className="count-grid"><TimeBox value={countdown.days} label="DINTEN" /><TimeBox value={countdown.hours} label="JAM" /><TimeBox value={countdown.mins} label="MENIT" /><TimeBox value={countdown.secs} label="DETIK" /></div></div>
          </div>
        </section>

        <section className="prayer">
          <div className="prayer-pattern" />
          <Reveal variant="zoom"><div className="prayer-inner"><small>PANGESTU LAN DONGA</small><Kawung size={58} /><div className="arabic">بَارَكَ اللَّهُ لَكُمَا<br />وَبَارَكَ عَلَيْكُمَا<br />وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ</div><div className="gold-rule" /><p className="latin">Barakallahu lakuma, wa baraka 'alaikuma, wa jama'a bainakuma fi khair.</p><p className="translation">“Semoga Allah memberkahi kalian berdua, melimpahkan keberkahan kepada kalian, dan menyatukan kalian berdua dalam kebaikan.”</p><p className="javanese-prayer">Mugi Gusti Allah SWT tansah maringi tentrem, rahayu, rejeki ingkang berkah, saha ngukuhaken katresnan wonten ing antawisipun kalih manten.</p><strong>SAKINAH · MAWADDAH · RAHMAH</strong></div></Reveal>
        </section>

        <section className="section gallery">
          <SectionHead no="05" eyebrow="MOMEN KABAGYAN" title="Galeri" />
          <p className="section-intro">Sawetawis potongan momen ingkang badhe dados kenangan wonten ing lelampahan kami.</p>
          <div className="gallery-grid">{GALLERY.map((photo, i) => <Reveal key={`${photo.src}-${i}`} variant={i === 0 ? "zoom" : i % 2 ? "right" : "left"} delay={i * 80} className={i === 0 ? "gallery-main" : ""}><button className="gallery-photo" onClick={() => setActivePhoto(photo.src)} type="button"><img src={photo.src} alt={photo.alt} /><span>0{i + 1}</span><i>OPEN ↗</i></button></Reveal>)}</div>
        </section>

        <section className="section rsvp">
          <SectionHead no="06" eyebrow="PANYUWUN RAWUH" title="Konfirmasi" />
          <Reveal variant="clip"><div className="rsvp-card">{!submitted ? <><Kawung size={45} /><p>Rawuhipun panjenengan minangka kabagyan ingkang sanget ateges tumrap kami.</p><form onSubmit={submitRSVP}><label>NAMINING RAWUH<input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Nama lengkap" required /></label><label>RAWUH / MBOTEN<select value={form.attend} onChange={e => setForm({ ...form, attend: e.target.value })} required><option value="">Pilih jawaban</option><option value="hadir">InsyaAllah rawuh</option><option value="tidak-hadir">Nyuwun pangapunten, mboten saged rawuh</option></select></label><label>PANGESTU &amp; DONGA<textarea value={form.wishes} onChange={e => setForm({ ...form, wishes: e.target.value })} placeholder="Tuliskan doa atau ucapan..." rows={5} /></label><button type="submit">KIRIM PANGESTU <span>→</span></button></form></> : <div className="success"><Kawung size={68} /><small>MATUR NUWUN</small><h3>{form.name},<br />matur nuwun sanget.</h3><p>Pangestu saha doa panjenengan sampun dados bagean saking kabagyan kami.</p><b>꧁ MATUR NUWUN ꧂</b></div>}</div></Reveal>
        </section>

        <section className="closing">
          <img src={SECOND_IMAGE} alt="Kedua mempelai" /><div className="closing-shade" /><div className="closing-content"><small>WIWITANING LELAMPAHAN ANYAR</small><Kawung size={76} /><h2>{GROOM_SHORT}<em>&amp;</em>{BRIDE_SHORT}</h2><span>14 · 06 · 2027</span><p>Mugi pawiwahan menika dados wiwitaning kulawarga ingkang tansah kebak katresnan, pangapunten, kesabaran, saha pangestu saking Gusti Allah SWT.</p><strong>SAKINAH · MAWADDAH · RAHMAH</strong><div>Matur nuwun sanget atas rawuh saha pangestunipun.</div></div></section>

        <footer><Kawung size={42} /><div>{GROOM} <span>×</span> {BRIDE}</div><small>UNDANGAN PAWIWAHAN · 2027</small><p>Mugi tansah pinaringan berkah.</p></footer>
      </main>

      {musicVisible && (
        <div className={`music-dock ${musicExpanded ? "expanded" : ""}`}>
          <button className="music-main" type="button" onClick={toggleMusic} aria-label={musicPlaying ? "Pause musik" : "Putar musik"}><span className={musicPlaying ? "equalizer playing" : "equalizer"}><i /><i /><i /><i /></span><b>{musicPlaying ? "MUSIC ON" : "MUSIC PAUSED"}</b></button>
          <button className="music-expand" type="button" onClick={() => setMusicExpanded(v => !v)} aria-label="Buka kontrol musik">{musicExpanded ? "×" : "♪"}</button>
          {musicExpanded && <div className="music-info"><small>IRINGAN PAWIWAHAN</small><span>{musicPlaying ? "Sedang diputar" : "Tekan untuk melanjutkan"}</span></div>}
        </div>
      )}

      {activePhoto && <div className="lightbox" onClick={() => setActivePhoto(null)} role="dialog" aria-modal="true"><button onClick={() => setActivePhoto(null)} type="button">×</button><img src={activePhoto} alt="Foto diperbesar" onClick={e => e.stopPropagation()} /></div>}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap');
        :root{--ivory:#f7f1e5;--paper:#efe4d0;--paper2:#e5d5b9;--ink:#30231b;--sogan:#553725;--sogan2:#2d1b13;--jati:#795338;--moss:#414735;--moss2:#283025;--gold:#b28a4b;--gold2:#d7bb83;--line:rgba(80,55,35,.18);--muted:#786b5e;--serif:'Cormorant Garamond',Georgia,serif;--sans:'DM Sans',system-ui,sans-serif}
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#16110d;color:var(--ink);font-family:var(--sans)}body.javanese-wedding-page{overflow-x:hidden}button,input,select,textarea{font:inherit}button{cursor:pointer}img{display:block;max-width:100%}a{text-decoration:none;color:inherit}.shell{width:min(100%,430px);margin:auto;background:var(--ivory);overflow:hidden;box-shadow:0 0 90px rgba(0,0,0,.48)}
        /* WELCOME */
        .welcome{position:fixed;inset:0;z-index:9999;background:#24160f;color:var(--ivory);display:grid;place-items:center;overflow:hidden;transition:opacity 1.1s cubic-bezier(.77,0,.18,1),visibility 1.1s}.welcome-opened{animation:welcomeExit 1.1s cubic-bezier(.77,0,.18,1) 1.85s forwards}.welcome-noise{position:absolute;inset:0;opacity:.12;background:repeating-linear-gradient(90deg,transparent 0 3px,rgba(255,255,255,.04) 4px 5px),repeating-linear-gradient(0deg,transparent 0 10px,rgba(0,0,0,.06) 11px 12px)}.welcome-batik{position:absolute;inset:-10%;opacity:.13;background:radial-gradient(ellipse 18px 38px at 50% 50%,transparent 40%,var(--gold2) 42% 46%,transparent 48%),radial-gradient(ellipse 18px 38px at 50% 50%,transparent 40%,var(--gold2) 42% 46%,transparent 48%);background-size:82px 82px,82px 82px;background-position:0 0,41px 41px;transform:rotate(12deg);animation:patternDrift 24s linear infinite}.welcome-frame{position:absolute;inset:18px;border:1px solid rgba(215,187,131,.35)}.welcome-frame:before,.welcome-frame:after{content:"";position:absolute;inset:8px;border:1px solid rgba(215,187,131,.1)}.welcome-glow{position:absolute;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(178,138,75,.2),transparent 68%);filter:blur(4px)}.welcome-door{position:absolute;top:0;bottom:0;width:14%;background:linear-gradient(90deg,#24150e,#5a3b28 48%,#2d1b13);z-index:3;transition:transform 1.15s cubic-bezier(.77,0,.18,1) 0.05s}.welcome-door:after{content:"";position:absolute;inset:4%;border:1px solid rgba(215,187,131,.2);background:repeating-linear-gradient(90deg,transparent 0 15px,rgba(215,187,131,.08) 16px 17px)}.welcome-door.left{left:0}.welcome-door.right{right:0}.welcome-opened .welcome-door.left{transform:translateX(-105%)}.welcome-opened .welcome-door.right{transform:translateX(105%)}.welcome-content{position:relative;z-index:5;text-align:center;width:min(82%,350px);display:flex;align-items:center;flex-direction:column}.welcome-kicker{font-size:8px;letter-spacing:.32em;color:var(--gold2);margin-bottom:22px;animation:rise .9s .15s both}.welcome-arabic{font-family:var(--serif);font-size:18px;color:#e3c995;animation:rise .9s .3s both}.welcome-line{height:1px;width:72px;background:var(--gold);margin:20px auto;animation:lineIn 1s .5s both}.welcome-greeting{font:400 12px/1.7 var(--serif);color:rgba(247,241,229,.72);margin:0 0 14px;animation:rise .9s .65s both}.welcome-title{font:600 10px;letter-spacing:.3em;color:var(--gold2);text-transform:uppercase;animation:rise .9s .8s both}.welcome-names{display:flex;align-items:center;gap:10px;font:500 46px/.78 var(--serif);margin:19px 0 9px;animation:namesIn 1.1s .95s both}.welcome-names i{font-size:19px;color:var(--gold);font-style:normal}.welcome-date{font-size:8px;letter-spacing:.28em;color:rgba(247,241,229,.55);animation:rise .8s 1.15s both}.kawung{position:relative;display:inline-block;flex:none;animation:slowFloat 4s ease-in-out infinite}.kawung i{position:absolute;width:34%;height:54%;left:33%;top:23%;border:1px solid var(--gold2);border-radius:60% 40%;transform-origin:50% 50%}.kawung i:nth-child(1){transform:rotate(0) translateY(-34%)}.kawung i:nth-child(2){transform:rotate(90deg) translateY(-34%)}.kawung i:nth-child(3){transform:rotate(180deg) translateY(-34%)}.kawung i:nth-child(4){transform:rotate(270deg) translateY(-34%)}.kawung b{position:absolute;left:44%;top:44%;width:12%;height:12%;background:var(--gold);transform:rotate(45deg)}.welcome-content>.kawung{margin:10px 0 4px;animation:rise .8s 1.3s both,slowFloat 4s 2.1s ease-in-out infinite}.enter-button{width:205px;margin-top:18px;padding:15px 18px;border:1px solid rgba(215,187,131,.6);background:rgba(255,255,255,.035);color:var(--ivory);display:flex;justify-content:space-between;align-items:center;font-size:8px;letter-spacing:.22em;position:relative;animation:rise .9s 1.45s both;transition:.35s}.enter-button:before{content:"";position:absolute;inset:4px;border:1px solid rgba(215,187,131,.12)}.enter-button:hover{background:rgba(178,138,75,.16);transform:translateY(-3px)}.enter-button b{color:var(--gold2);font-size:14px}.enter-loading{font-size:8px;letter-spacing:.2em;color:var(--gold2);margin-top:28px}.enter-loading i{display:inline-block;width:7px;height:7px;border:1px solid var(--gold);border-radius:50%;margin-right:8px;animation:pulse 1s infinite}.welcome-blessing{font:italic 10px var(--serif);color:rgba(247,241,229,.42);margin-top:18px;animation:rise .8s 1.6s both}.welcome-footer{position:absolute;z-index:6;bottom:25px;left:0;right:0;display:flex;justify-content:center;gap:12px;align-items:center;font-size:6px;letter-spacing:.25em;color:rgba(215,187,131,.5)}.batik-mark{color:var(--gold);font-size:9px}
        /* HERO */
        .hero{position:relative;min-height:760px;padding:24px 24px 28px;background:linear-gradient(145deg,#f7f1e5,#e9dcc7);overflow:hidden}.hero-pattern{position:absolute;inset:0;opacity:.08;background:radial-gradient(ellipse 18px 36px at 50% 50%,transparent 38%,var(--sogan) 40% 45%,transparent 47%);background-size:76px 76px;transform:rotate(18deg);animation:patternDrift 30s linear infinite}.hero-topline,.hero-bottom{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;font-size:6px;letter-spacing:.24em;color:var(--sogan)}.hero-photo{position:relative;z-index:2;width:78%;height:395px;margin:34px auto 0;border:1px solid var(--gold);padding:8px;background:var(--paper);box-shadow:20px 28px 0 rgba(85,55,37,.08);overflow:hidden}.hero-photo img{width:100%;height:100%;object-fit:cover;filter:saturate(.75) sepia(.08)}.hero-photo-shade{position:absolute;inset:8px;background:linear-gradient(180deg,transparent 55%,rgba(36,24,16,.4))}.photo-stamp{position:absolute;right:19px;bottom:19px;color:var(--gold2);font-size:22px;animation:slowSpin 12s linear infinite}.hero-copy{position:relative;z-index:3;text-align:center;margin-top:-10px}.hero-eyebrow{font-size:7px;letter-spacing:.34em;color:var(--gold)}.hero h1{font:500 58px/.74 var(--serif);margin:16px 0;color:var(--sogan-dark)}.hero h1 em{font-size:22px;color:var(--gold);font-style:normal;margin:0 9px}.hero-copy p{font:400 11px/1.85 var(--serif);color:var(--muted);max-width:300px;margin:auto}.hero-date{position:relative;z-index:4;display:flex;align-items:center;justify-content:center;gap:12px;margin:25px auto;width:max-content;color:var(--sogan)}.hero-date strong{font:500 55px/.8 var(--serif)}.hero-date span{font-size:7px;line-height:1.5;letter-spacing:.2em}.hero-date i{font-size:8px;color:var(--gold);font-style:normal}.hero-bottom{justify-content:center;gap:12px;margin-top:28px}.hero-bottom span{height:1px;width:42px;background:var(--gold)}.hero-bottom small{font-size:6px;letter-spacing:.2em}
        /* MARQUEE */
        .marquee{overflow:hidden;background:var(--sogan-dark);color:var(--gold2);border-top:1px solid rgba(215,187,131,.15);border-bottom:1px solid rgba(215,187,131,.15);padding:13px 0}.marquee-muted{background:var(--moss2);color:rgba(239,228,208,.6);padding:9px 0}.marquee-track{display:flex;width:max-content;animation:marquee 22s linear infinite}.marquee-reverse .marquee-track{animation-name:marqueeReverse;animation-duration:28s}.marquee span{white-space:nowrap;font:500 9px var(--sans);letter-spacing:.25em;padding-right:26px}.marquee b{font-size:7px;margin-left:26px;color:var(--gold)}
        /* COMMON */
        .section{padding:82px 25px;background:var(--ivory)}.section-head{display:grid;grid-template-columns:42px 1fr;gap:15px;align-items:start;margin-bottom:34px}.section-no{font:500 24px var(--serif);color:var(--gold);border-top:1px solid var(--gold);padding-top:8px}.eyebrow{font-size:7px;letter-spacing:.3em;color:var(--gold);margin-bottom:8px}.section-head h2{font:500 39px/.9 var(--serif);color:var(--sogan-dark);margin:0}.section-head-dark h2{color:var(--ivory)}.section-intro{font:400 11px/1.9 var(--serif);color:var(--muted);margin:-10px 0 32px}.reveal{opacity:0;transition:opacity .9s cubic-bezier(.2,.8,.2,1),transform 1s cubic-bezier(.2,.8,.2,1),clip-path 1s cubic-bezier(.2,.8,.2,1)}.reveal-up{transform:translateY(35px)}.reveal-left{transform:translateX(-38px)}.reveal-right{transform:translateX(38px)}.reveal-zoom{transform:scale(.9)}.reveal-clip{clip-path:inset(0 0 100% 0);transform:translateY(12px)}.reveal.is-visible{opacity:1;transform:none;clip-path:inset(0)}
        /* OPENING */
        .opening-layout{display:grid;grid-template-columns:46px 1fr;gap:18px;border-top:1px solid var(--line);padding-top:24px}.opening-number{font:500 42px var(--serif);color:var(--gold);opacity:.65}.opening-layout p{font:400 11px/1.95 var(--serif);color:var(--muted);margin:0 0 14px}.opening-layout .lead{font-size:17px;color:var(--sogan-dark)}.signature-quote{margin:38px 0 0;padding:30px 24px;background:var(--sogan-dark);color:var(--ivory);font:400 22px/1.25 var(--serif);position:relative}.signature-quote:before{content:"“";position:absolute;left:13px;top:0;font:90px var(--serif);color:var(--gold);opacity:.35}.signature-quote small{display:block;margin-top:20px;font:600 7px var(--sans);letter-spacing:.2em;color:var(--gold2)}
        /* COUPLE */
        .section-dark{background:var(--sogan2);color:var(--ivory);padding:82px 0;position:relative;overflow:hidden}.section-dark:before{content:"";position:absolute;inset:0;opacity:.06;background:radial-gradient(ellipse 16px 32px at 50% 50%,transparent 40%,var(--gold2) 42% 47%,transparent 49%);background-size:70px 70px;transform:rotate(15deg)}.section-inner{position:relative;z-index:1;padding:0 25px}.couple-grid{display:grid;gap:42px}.person{display:grid;grid-template-columns:43% 1fr;gap:18px;align-items:end}.person-bride{grid-template-columns:1fr 43%}.person-bride .person-photo{order:2}.person-bride .person-info{order:1;text-align:right}.person-photo{height:245px;position:relative;border:1px solid rgba(215,187,131,.55);padding:5px}.person-photo img{width:100%;height:100%;object-fit:cover;filter:saturate(.7) sepia(.12)}.person-photo span{position:absolute;bottom:8px;left:8px;font-size:7px;letter-spacing:.15em;color:var(--gold2)}.person-info small{font-size:6px;letter-spacing:.25em;color:var(--gold2)}.person-info h3{font:500 27px/.9 var(--serif);margin:9px 0}.person-info p{font-size:7px;letter-spacing:.1em;color:rgba(247,241,229,.48)}.person-info div{height:1px;background:rgba(215,187,131,.3);margin:13px 0}.person-info>span{font:400 9px/1.6 var(--serif);color:rgba(247,241,229,.65)}.couple-center{display:flex;align-items:center;justify-content:center;gap:17px;margin-top:38px;color:var(--gold2);font-size:7px;letter-spacing:.35em}.couple-center .kawung{opacity:.55}
        /* FAMILY */
        .family{background:var(--paper);padding-top:58px}.family-card{border:1px solid rgba(85,55,37,.2);padding:34px 24px;text-align:center;position:relative;background:rgba(255,250,240,.35)}.family-card>.kawung{margin-bottom:18px}.family-card>small{font-size:6px;letter-spacing:.3em;color:var(--gold)}.family-card h2{font:500 34px/.9 var(--serif);color:var(--sogan-dark);margin:13px 0}.family-card>p{font:400 10px/1.8 var(--serif);color:var(--muted);max-width:290px;margin:0 auto 28px}.family-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line);padding-top:20px;gap:15px;text-align:left}.family-grid small{font-size:5px;letter-spacing:.16em;color:var(--gold)}.family-grid strong{display:block;font:500 10px/1.5 var(--serif);margin-top:7px;color:var(--sogan)}
        /* STORY */
        .story-list{display:grid;gap:0}.story-item{display:grid;grid-template-columns:42px 1fr 12px;gap:16px;padding:28px 0;border-top:1px solid var(--line);position:relative}.story-item:last-child{border-bottom:1px solid var(--line)}.story-no{font:500 24px var(--serif);color:var(--gold)}.story-copy small{font-size:6px;letter-spacing:.24em;color:var(--gold)}.story-copy h3{font:500 25px/.9 var(--serif);color:var(--sogan-dark);margin:8px 0}.story-copy p{font:400 10px/1.85 var(--serif);color:var(--muted);margin:0}.love-quote{margin-top:42px;padding:32px 24px;text-align:center;background:var(--paper);border:1px solid rgba(85,55,37,.14)}.love-quote span{color:var(--gold);font-size:16px}.love-quote p{font:500 23px/1.2 var(--serif);color:var(--sogan-dark);margin:13px 0}.love-quote small{font-size:6px;letter-spacing:.22em;color:var(--gold)}
        /* EVENTS */
        .events{background:var(--moss2);color:var(--ivory);padding:84px 0;position:relative;overflow:hidden}.events:after{content:"";position:absolute;inset:0;opacity:.05;background:radial-gradient(ellipse 17px 34px at 50% 50%,transparent 40%,var(--gold2) 42% 46%,transparent 48%);background-size:72px 72px;transform:rotate(-12deg)}.events .section-inner{z-index:1}.event-emblem{width:132px;height:132px;border:1px solid rgba(215,187,131,.55);border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 auto 50px;color:var(--gold2);position:relative}.event-emblem:before{content:"";position:absolute;inset:8px;border:1px solid rgba(215,187,131,.18);border-radius:50%}.event-emblem span{font-size:6px;letter-spacing:.3em}.event-emblem strong{font:500 51px/.8 var(--serif);margin:7px}.event-emblem b{font-size:6px;letter-spacing:.18em}.events .section-intro{color:rgba(247,241,229,.55)}.event-grid{display:grid;gap:15px}.event-card{padding:25px;background:rgba(255,255,255,.035);border:1px solid rgba(215,187,131,.2);position:relative}.event-card>span{font:500 22px var(--serif);color:var(--gold2)}.event-card small{display:block;font-size:6px;letter-spacing:.23em;color:var(--gold2);margin-top:18px}.event-card h3{font:500 29px var(--serif);margin:8px 0}.event-card>strong{font-size:8px;color:rgba(247,241,229,.72)}.event-card p{font:400 10px/1.7 var(--serif);color:rgba(247,241,229,.48);margin:14px 0 20px}.event-card a{display:inline-block;border-bottom:1px solid var(--gold);padding-bottom:5px;font-size:6px;letter-spacing:.18em;color:var(--gold2)}.countdown{margin-top:48px;padding-top:28px;border-top:1px solid rgba(215,187,131,.2)}.countdown small{font-size:6px;letter-spacing:.25em;color:var(--gold2)}.countdown strong{display:block;font:500 27px var(--serif);margin-top:5px}.count-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-top:18px}.time-box{padding:15px 3px;text-align:center;border:1px solid rgba(215,187,131,.18);background:rgba(0,0,0,.1)}.time-box strong{font:500 28px var(--serif);color:var(--gold2)}.time-box span{display:block;font-size:5px;letter-spacing:.16em;color:rgba(247,241,229,.5);margin-top:5px}
        /* PRAYER */
        .prayer{background:var(--sogan);color:var(--ivory);position:relative;overflow:hidden;padding:92px 25px}.prayer-pattern{position:absolute;inset:-10%;opacity:.08;background:radial-gradient(ellipse 18px 35px at 50% 50%,transparent 39%,var(--gold2) 42% 47%,transparent 49%);background-size:76px 76px;transform:rotate(18deg);animation:patternDrift 30s linear infinite}.prayer-inner{position:relative;text-align:center}.prayer-inner>small{font-size:6px;letter-spacing:.32em;color:var(--gold2)}.prayer-inner>.kawung{display:block;margin:20px auto 24px}.arabic{font:400 20px/1.9 var(--serif);color:var(--gold2)}.gold-rule{width:55px;height:1px;background:var(--gold);margin:23px auto}.latin,.translation,.javanese-prayer{font:400 10px/1.8 var(--serif);color:rgba(247,241,229,.68)}.translation{font-size:11px;color:var(--ivory);max-width:320px;margin:17px auto}.javanese-prayer{max-width:310px;margin:22px auto;color:rgba(247,241,229,.5)}.prayer-inner>strong{display:block;font-size:7px;letter-spacing:.3em;color:var(--gold2);margin-top:28px}
        /* GALLERY */
        .gallery-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}.gallery-grid>.gallery-main{grid-column:1/-1}.gallery-photo{display:block;width:100%;height:205px;padding:0;border:0;position:relative;overflow:hidden;background:var(--paper)}.gallery-main .gallery-photo{height:310px}.gallery-photo img{width:100%;height:100%;object-fit:cover;filter:saturate(.72);transition:transform 1s cubic-bezier(.2,.8,.2,1),filter .5s}.gallery-photo:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(28,18,12,.55));opacity:.8}.gallery-photo:hover img{transform:scale(1.07);filter:saturate(1)}.gallery-photo span,.gallery-photo i{position:absolute;z-index:2;color:var(--ivory)}.gallery-photo span{top:12px;left:12px;font:500 18px var(--serif)}.gallery-photo i{right:12px;bottom:12px;font-style:normal;font-size:5px;letter-spacing:.18em}
        /* RSVP */
        .rsvp{background:var(--paper)}.rsvp-card{padding:30px 23px;background:var(--ivory);border:1px solid rgba(85,55,37,.16);box-shadow:14px 14px 0 rgba(85,55,37,.08)}.rsvp-card>.kawung{display:block;margin:0 auto 16px}.rsvp-card>p{text-align:center;font:400 11px/1.8 var(--serif);color:var(--muted);margin:0 auto 28px}.rsvp form{display:grid;gap:17px}.rsvp label{font-size:6px;letter-spacing:.18em;color:var(--gold)}.rsvp input,.rsvp select,.rsvp textarea{display:block;width:100%;margin-top:8px;border:0;border-bottom:1px solid rgba(85,55,37,.24);background:transparent;padding:10px 2px;color:var(--ink);outline:none;font:400 11px var(--serif)}.rsvp textarea{resize:vertical}.rsvp input:focus,.rsvp select:focus,.rsvp textarea:focus{border-color:var(--gold)}.rsvp form button{margin-top:5px;border:0;background:var(--sogan);color:var(--ivory);padding:16px;font-size:7px;letter-spacing:.2em;display:flex;justify-content:space-between}.rsvp form button span{color:var(--gold2)}.success{text-align:center;padding:20px 0}.success>.kawung{display:block;margin:auto}.success small{display:block;color:var(--gold);font-size:6px;letter-spacing:.3em;margin-top:15px}.success h3{font:500 32px/.9 var(--serif);color:var(--sogan-dark);margin:12px 0}.success p{margin:0 auto 25px;max-width:240px}.success>b{font-size:7px;letter-spacing:.2em;color:var(--gold)}
        /* CLOSING */
        .closing{height:720px;position:relative;display:grid;place-items:center;overflow:hidden;color:var(--ivory)}.closing>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(.55)}.closing-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(32,20,13,.35),rgba(32,20,13,.88))}.closing-content{position:relative;text-align:center;width:82%;display:flex;flex-direction:column;align-items:center}.closing-content>small{font-size:6px;letter-spacing:.3em;color:var(--gold2)}.closing-content>.kawung{margin:22px 0}.closing h2{font:500 58px/.72 var(--serif);margin:0}.closing h2 em{font-size:21px;color:var(--gold2);font-style:normal;margin:0 8px}.closing-content>span{font-size:7px;letter-spacing:.3em;color:var(--gold2);margin-top:20px}.closing-content p{font:400 11px/1.8 var(--serif);max-width:310px;color:rgba(247,241,229,.72);margin:25px auto}.closing-content strong{font-size:7px;letter-spacing:.3em;color:var(--gold2)}.closing-content>div{font:italic 10px var(--serif);color:rgba(247,241,229,.52);margin-top:28px}
        footer{background:var(--sogan2);color:var(--ivory);text-align:center;padding:50px 20px}.footer-kawung{}.footer-names{}footer>.kawung{display:block;margin:0 auto 18px}footer>div{font:500 19px var(--serif)}footer>div span{color:var(--gold);margin:0 7px}footer small{display:block;font-size:5px;letter-spacing:.24em;color:var(--gold2);margin-top:13px}footer p{font:italic 10px var(--serif);color:rgba(247,241,229,.42)}
        /* MUSIC */
        .music-dock{position:fixed;right:max(14px,calc((100vw - 430px)/2 + 14px));bottom:16px;z-index:1000;display:flex;flex-direction:row-reverse;align-items:center;gap:6px;filter:drop-shadow(0 10px 22px rgba(0,0,0,.22));animation:dockIn .8s both}.music-main,.music-expand{border:1px solid rgba(215,187,131,.45);background:rgba(45,27,19,.93);backdrop-filter:blur(14px);color:var(--ivory);height:43px}.music-main{display:flex;align-items:center;gap:9px;padding:0 13px}.music-main b{font-size:6px;letter-spacing:.16em;font-weight:500;color:var(--gold2)}.music-expand{width:43px;font-size:16px;color:var(--gold2)}.equalizer{height:16px;display:flex;align-items:flex-end;gap:2px}.equalizer i{width:2px;height:5px;background:var(--gold2);display:block}.equalizer i:nth-child(2){height:9px}.equalizer i:nth-child(3){height:13px}.equalizer i:nth-child(4){height:7px}.equalizer.playing i{animation:bars .75s ease-in-out infinite alternate}.equalizer.playing i:nth-child(2){animation-delay:.15s}.equalizer.playing i:nth-child(3){animation-delay:.3s}.equalizer.playing i:nth-child(4){animation-delay:.45s}.music-info{position:absolute;right:0;bottom:51px;width:175px;background:rgba(45,27,19,.95);border:1px solid rgba(215,187,131,.3);padding:13px}.music-info small{display:block;font-size:5px;letter-spacing:.2em;color:var(--gold2)}.music-info span{font:400 10px var(--serif);display:block;margin-top:5px;color:rgba(247,241,229,.7)}
        /* LIGHTBOX */
        .lightbox{position:fixed;inset:0;z-index:10000;background:rgba(18,12,8,.94);display:grid;place-items:center;padding:25px;animation:fade .35s}.lightbox img{max-width:100%;max-height:82vh;object-fit:contain}.lightbox button{position:absolute;right:18px;top:14px;background:none;border:0;color:var(--ivory);font-size:36px;font-weight:200}
        /* KEYFRAMES */
        @keyframes welcomeExit{to{opacity:0;visibility:hidden}}@keyframes rise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}@keyframes namesIn{from{opacity:0;transform:translateY(20px) scale(.96);letter-spacing:.05em}to{opacity:1;transform:none;letter-spacing:0}}@keyframes lineIn{from{width:0;opacity:0}to{width:72px;opacity:1}}@keyframes patternDrift{from{background-position:0 0,41px 41px}to{background-position:82px 82px,123px 123px}}@keyframes slowFloat{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-6px) rotate(4deg)}}@keyframes slowSpin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.25;transform:scale(.7)}}@keyframes marquee{to{transform:translateX(-50%)}}@keyframes marqueeReverse{to{transform:translateX(50%)}}@keyframes dockIn{from{opacity:0;transform:translateY(20px) scale(.92)}to{opacity:1;transform:none}}@keyframes bars{from{transform:scaleY(.45)}to{transform:scaleY(1)}}@keyframes fade{from{opacity:0}to{opacity:1}}
        @media(max-width:360px){.hero{padding-left:18px;padding-right:18px}.section{padding-left:19px;padding-right:19px}.hero h1,.closing h2{font-size:49px}.person{grid-template-columns:41% 1fr}.person-bride{grid-template-columns:1fr 41%}.person-info h3{font-size:23px}.music-main b{display:none}.welcome-names{font-size:39px}}
        @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}.reveal{opacity:1!important;transform:none!important;clip-path:none!important}.marquee-track{animation:none!important}.welcome-opened{animation:none!important;opacity:0;visibility:hidden}.welcome-door{transition:none}}
      `}</style>
    </>
  );
}
