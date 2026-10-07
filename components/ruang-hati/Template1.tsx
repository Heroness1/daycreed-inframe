"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/* =========================================================
   NUSANTARA ISLAMIC WEDDING
   ULTIMATE EDITION 3.1
   ---------------------------------------------------------
   Ahmad Fadillah, S.Kom.
   ×
   Aisyah Rahmawati, S.E.

   Visual:
   Premium Indonesian Muslim Wedding
   Nusantara Editorial × Islamic Luxury
   Forest Green × Maroon × Antique Gold × Ivory

   AUDIO:
   /public/music/nusantara-wedding.mp3
   ========================================================= */

const WEDDING_DATE = "2027-06-14T09:00:00";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=90&w=1600";

const SECOND_IMAGE =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=90&w=1400";

const WEDDING_MUSIC = "/music/casablanca.webm";
const GALLERY = [
  {
    src: HERO_IMAGE,
    alt: "Momen pernikahan",
  },
  {
    src: SECOND_IMAGE,
    alt: "Momen pasangan",
  },
  {
    src: HERO_IMAGE,
    alt: "Momen bahagia",
  },
];

type Countdown = {
  days: number;
  hours: number;
  mins: number;
  secs: number;
};

type Direction =
  | "up"
  | "left"
  | "right"
  | "scale";

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

function useCountdown(
  target: string
): Countdown {
  const calculate = (): Countdown => {
    const difference =
      new Date(target).getTime() - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
      };
    }

    return {
      days: Math.floor(
        difference /
          (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor(
        (difference /
          (1000 * 60 * 60)) %
          24
      ),
      mins: Math.floor(
        (difference /
          (1000 * 60)) %
          60
      ),
      secs: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [time, setTime] =
    useState<Countdown>(calculate);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () =>
      window.clearInterval(timer);
  }, [target]);

  return time;
}

/* =========================================================
   REVEAL
   ========================================================= */

function useReveal() {
  const ref =
    useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.12,
        }
      );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return {
    ref,
    visible,
  };
}

function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 800,
  className = "",
}: RevealProps) {
  const { ref, visible } =
    useReveal();

  return (
    <div
      ref={ref}
      className={`
        reveal
        reveal-${direction}
        ${visible ? "is-visible" : ""}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   DECORATIVE COMPONENTS
   ========================================================= */

function IslamicStar({
  size = 80,
}: {
  size?: number;
}) {
  return (
    <div
      className="islamic-star"
      style={{
        width: size,
        height: size,
      }}
      aria-hidden="true"
    >
      <span />
      <span />
    </div>
  );
}

function NusantaraLines() {
  return (
    <div
      className="nusantara-lines"
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
    </div>
  );
}

function OrnamentDivider() {
  return (
    <div
      className="ornament-divider"
      aria-hidden="true"
    >
      <span />
      <i>✦</i>
      <span />
    </div>
  );
}

function SectionLabel({
  number,
  eyebrow,
  title,
}: {
  number: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-number">
        {number}
      </div>

      <div>
        <div className="section-eyebrow">
          {eyebrow}
        </div>

        <h2>{title}</h2>
      </div>
    </div>
  );
}

function Marquee({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="marquee-wrap"
      aria-hidden="true"
    >
      <div className="marquee-track">
        <span>{children}</span>
        <span>{children}</span>
      </div>
    </div>
  );
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="time-box">
      <strong>
        {String(value).padStart(2, "0")}
      </strong>

      <span>{label}</span>
    </div>
  );
}

/* =========================================================
   MAIN
   ========================================================= */

export default function
  TemplateNusantaraIslamicWedding() {
  const countdown =
    useCountdown(WEDDING_DATE);

  /* -------------------------------------------------------
     AUDIO
     ------------------------------------------------------- */

  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const [musicPlaying, setMusicPlaying] =
    useState(false);

  const [introOpened, setIntroOpened] =
    useState(false);

  const [introLeaving, setIntroLeaving] =
    useState(false);

  /* -------------------------------------------------------
     UI
     ------------------------------------------------------- */

  const [form, setForm] =
    useState<RSVPForm>({
      name: "",
      attend: "",
      wishes: "",
    });

  const [submitted, setSubmitted] =
    useState(false);

  const [activePhoto, setActivePhoto] =
    useState<string | null>(null);

  /* -------------------------------------------------------
     DATE
     ------------------------------------------------------- */

  const weddingDate = useMemo(
    () =>
      new Intl.DateTimeFormat(
        "id-ID",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      ).format(
        new Date(WEDDING_DATE)
      ),
    []
  );

  /* =======================================================
     INTRO
     ======================================================= */

  const openInvitation = async () => {
    if (introOpened) return;

    setIntroOpened(true);

    /*
      Browser mobile biasanya mengizinkan audio
      karena dipicu langsung dari user interaction.
    */

    if (audioRef.current) {
      try {
        audioRef.current.volume = 0.45;

        await audioRef.current.play();

        setMusicPlaying(true);
      } catch (error) {
        console.warn(
          "BGM gagal diputar:",
          error
        );
      }
    }

    /*
      Beri waktu sedikit supaya user merasakan
      transition sebelum intro menghilang.
    */

    window.setTimeout(() => {
      setIntroLeaving(true);
    }, 450);
  };

  useEffect(() => {
    document.body.classList.add(
      "wedding-page"
    );

    return () => {
      document.body.classList.remove(
        "wedding-page"
      );
    };
  }, []);

  /* =======================================================
     AUDIO CONTROL
     ======================================================= */

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setMusicPlaying(true);
    } catch (error) {
      console.warn(
        "Audio gagal dimainkan:",
        error
      );
    }
  };

  /* =======================================================
     LIGHTBOX ESC
     ======================================================= */

  useEffect(() => {
    if (!activePhoto) return;

    const handleKey = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setActivePhoto(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, [activePhoto]);

  /* =======================================================
     RSVP
     ======================================================= */

  const handleSubmit = (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.attend
    ) {
      return;
    }

    setSubmitted(true);
  };

  /* =======================================================
     RETURN
     ======================================================= */

  return (
    <>
      {/* ===================================================
          AUDIO
          =================================================== */}

      <audio
        ref={audioRef}
        src={WEDDING_MUSIC}
        loop
        preload="auto"
      />

      {/* ===================================================
          CINEMATIC INTRO
          =================================================== */}

      {!introLeaving && (
        <div
          className={`
            cinematic-intro
            ${introOpened ? "intro-opened" : ""}
          `}
        >
          <div className="intro-glow" />

          <div className="intro-pattern" />

          <div className="intro-noise" />

          <div className="intro-content">
            <div className="intro-bismillah">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </div>

            <div className="intro-rule" />

            <p className="intro-small">
              Dengan menyebut nama Allah SWT
            </p>

            <div className="intro-names">
              <span>
                Ahmad Fadillah
              </span>

              <b>&</b>

              <span>
                Aisyah Rahmawati
              </span>
            </div>

            <div className="intro-degrees">
              S.Kom.
              <span>×</span>
              S.E.
            </div>

            <div className="intro-date">
              14 · 06 · 2027
            </div>

            <div className="intro-ornament">
              <IslamicStar size={76} />
            </div>

            {!introOpened ? (
              <button
                type="button"
                className="intro-open-button"
                onClick={openInvitation}
              >
                <span>
                  BUKA UNDANGAN
                </span>

                <i>✦</i>
              </button>
            ) : (
              <div className="intro-loading">
                <span />
                MEMBUKA UNDANGAN
              </div>
            )}
          </div>

          <div className="intro-bottom">
            UNDANGAN PERNIKAHAN
          </div>
        </div>
      )}

      {/* ===================================================
          MAIN
          =================================================== */}

      <main className="wedding-shell">

        {/* =================================================
            HERO
            ================================================= */}

        <section className="hero">
          <div className="hero-background">
            <div className="hero-pattern" />
          </div>

          <div className="hero-top">
            <div className="bismillah">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </div>

            <div className="hero-label">
              UNDANGAN PERNIKAHAN
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo-frame">
              <img
                src={HERO_IMAGE}
                alt="Foto kedua mempelai"
              />

              <div className="photo-overlay" />

              <div className="photo-corner top-left" />
              <div className="photo-corner top-right" />
              <div className="photo-corner bottom-left" />
              <div className="photo-corner bottom-right" />
            </div>
          </div>

          <div className="hero-copy">
            <p className="hero-pretitle">
              Dengan penuh rasa syukur
            </p>

            <h1>
              Ahmad
              <span>&</span>
              Aisyah
            </h1>

            <div className="hero-degrees">
              <span>
                Ahmad Fadillah, S.Kom.
              </span>

              <i>×</i>

              <span>
                Aisyah Rahmawati, S.E.
              </span>
            </div>

            <p className="hero-description">
              Dengan memohon ridha dan
              keberkahan Allah SWT, kami
              mengundang Bapak/Ibu/Saudara/i
              untuk hadir dan memberikan
              doa restu pada hari bahagia kami.
            </p>
          </div>

          <div className="hero-date">
            <span>14</span>

            <div>
              <small>JUNI</small>
              <small>2027</small>
            </div>

            <span>♡</span>
          </div>

          <div className="hero-scroll">
            <span />
            GESER UNTUK MELANJUTKAN
          </div>
        </section>

        {/* =================================================
            MUSIC CONTROL
            ================================================= */}

        <button
          type="button"
          className={`
            music-control
            ${musicPlaying ? "playing" : ""}
          `}
          onClick={toggleMusic}
          aria-label={
            musicPlaying
              ? "Matikan musik"
              : "Putar musik"
          }
        >
          <span className="music-icon">
            {musicPlaying
              ? "♫"
              : "♪"}
          </span>

          <span className="music-bars">
            <i />
            <i />
            <i />
            <i />
          </span>

          <span className="music-label">
            {musicPlaying
              ? "MUSIC ON"
              : "MUSIC OFF"}
          </span>
        </button>

        {/* =================================================
            MARQUEE
            ================================================= */}

        <Marquee>
          ALHAMDULILLAH · WALIMATUL URUS ·
          RAHMAT · KEBERKAHAN · SAKINAH ·
          MAWADDAH · RAHMAH ·
        </Marquee>

        {/* =================================================
            OPENING
            ================================================= */}

        <section className="section opening-section">
          <SectionLabel
            number="01"
            eyebrow="PEMBUKAAN"
            title="Dengan penuh rasa syukur"
          />

          <Reveal direction="up">
            <div className="opening-card">
              <div className="opening-arabic">
                الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
              </div>

              <OrnamentDivider />

              <p className="opening-lead">
                Alhamdulillahirabbil'alamin.
              </p>

              <p>
                Segala puji bagi Allah SWT
                yang telah melimpahkan rahmat,
                nikmat, dan kasih sayang-Nya
                kepada kami.
              </p>

              <p>
                Atas izin dan kehendak-Nya,
                dua insan dipertemukan untuk
                berjalan bersama dalam sebuah
                ikatan pernikahan yang insyaAllah
                penuh keberkahan.
              </p>

              <p>
                Dengan memohon ridha Allah SWT,
                serta dengan penuh kerendahan
                hati, kami bermaksud mengundang
                Bapak/Ibu/Saudara/i untuk hadir
                dan memberikan doa restu pada
                pernikahan kami.
              </p>
            </div>
          </Reveal>

          <Reveal
            direction="scale"
            delay={120}
          >
            <div className="quote-card">
              <IslamicStar size={54} />

              <blockquote>
                “Semoga langkah yang dimulai
                dengan Bismillah ini menjadi
                perjalanan panjang yang senantiasa
                dipenuhi kebaikan, kesabaran,
                dan keberkahan.”
              </blockquote>

              <div className="quote-sign">
                AHMAD & AISYAH
              </div>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            COUPLE
            ================================================= */}

        <section className="section couple-section">
          <SectionLabel
            number="02"
            eyebrow="KEDUA MEMPELAI"
            title="Mempelai"
          />

          <Reveal direction="left">
            <article className="person-card">
              <div className="person-image">
                <img
                  src={HERO_IMAGE}
                  alt="Ahmad Fadillah"
                />
              </div>

              <div className="person-meta">
                <span className="person-role">
                  MEMPELAI PRIA
                </span>

                <h3>
                  Ahmad
                  <br />
                  Fadillah
                </h3>

                <p className="degree">
                  Ahmad Fadillah, S.Kom.
                </p>

                <div className="person-line" />

                <p>
                  Putra pertama dari
                  <br />
                  Bapak H. Muhammad Fadli
                  <br />
                  & Ibu Hj. Nur Aisyah
                </p>
              </div>
            </article>
          </Reveal>

          <div className="couple-symbol">
            <span />
            &
            <span />
          </div>

          <Reveal
            direction="right"
            delay={120}
          >
            <article className="person-card person-card-reverse">
              <div className="person-image">
                <img
                  src={SECOND_IMAGE}
                  alt="Aisyah Rahmawati"
                />
              </div>

              <div className="person-meta">
                <span className="person-role">
                  MEMPELAI WANITA
                </span>

                <h3>
                  Aisyah
                  <br />
                  Rahmawati
                </h3>

                <p className="degree">
                  Aisyah Rahmawati, S.E.
                </p>

                <div className="person-line" />

                <p>
                  Putri kedua dari
                  <br />
                  Bapak H. Rahmat Hidayat
                  <br />
                  & Ibu Hj. Siti Aminah
                </p>
              </div>
            </article>
          </Reveal>
        </section>

        {/* =================================================
            FAMILY
            ================================================= */}

        <section className="section family-section">
          <Reveal direction="up">
            <div className="family-card">
              <span className="mini-label">
                KELUARGA BESAR
              </span>

              <h2>
                Dengan segala kerendahan hati,
              </h2>

              <p>
                kami mengharapkan kehadiran
                serta doa restu Bapak/Ibu/
                Saudara/i dalam momen sakral
                penyatuan dua keluarga ini.
              </p>

              <div className="family-grid">
                <div>
                  <small>
                    KELUARGA MEMPELAI PRIA
                  </small>

                  <strong>
                    H. Muhammad Fadli
                    <br />
                    & Hj. Nur Aisyah
                  </strong>
                </div>

                <div>
                  <small>
                    KELUARGA MEMPELAI WANITA
                  </small>

                  <strong>
                    H. Rahmat Hidayat
                    <br />
                    & Hj. Siti Aminah
                  </strong>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            STORY
            ================================================= */}

        <section className="section story-section">
          <SectionLabel
            number="03"
            eyebrow="PERJALANAN"
            title="Kisah Kami"
          />

          <div className="story-list">
            <Reveal direction="up">
              <article className="story-item">
                <div className="story-number">
                  01
                </div>

                <div>
                  <span>AWAL CERITA</span>

                  <h3>
                    Pertama Kali Bertemu
                  </h3>

                  <p>
                    Dari sebuah pertemuan
                    sederhana, tumbuh sebuah
                    cerita yang perlahan membawa
                    kami saling mengenal,
                    memahami, dan menghargai.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal
              direction="up"
              delay={100}
            >
              <article className="story-item">
                <div className="story-number">
                  02
                </div>

                <div>
                  <span>
                    SEBUAH KEPUTUSAN
                  </span>

                  <h3>
                    Memilih Untuk Bersama
                  </h3>

                  <p>
                    Kami belajar bahwa perjalanan
                    bukan tentang mencari seseorang
                    yang sempurna, melainkan
                    menemukan seseorang yang
                    bersedia bertumbuh bersama.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal
              direction="up"
              delay={200}
            >
              <article className="story-item">
                <div className="story-number">
                  03
                </div>

                <div>
                  <span>
                    HARI YANG DINANTI
                  </span>

                  <h3>
                    Menuju Satu Janji
                  </h3>

                  <p>
                    Dengan Bismillah, kami
                    melangkah menuju sebuah
                    kehidupan baru sebagai
                    keluarga, memohon agar Allah
                    senantiasa membimbing setiap
                    langkah kami.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            WEDDING DAY
            ================================================= */}

        <section className="section wedding-day-section">
          <div className="date-emblem">
            <span>WEDDING</span>

            <strong>14</strong>

            <div>
              JUNI
              <br />
              2027
            </div>

            <span>DAY</span>
          </div>

          <SectionLabel
            number="04"
            eyebrow="HARI BAHAGIA"
            title="Akad & Resepsi"
          />

          <p className="section-intro">
            InsyaAllah, kami akan melangsungkan
            rangkaian acara pernikahan pada:
          </p>

          <div className="event-list">
            <Reveal direction="left">
              <article className="event-card">
                <div className="event-icon">
                  ✦
                </div>

                <div className="event-info">
                  <span>AKAD NIKAH</span>

                  <h3>
                    Akad Nikah
                  </h3>

                  <strong>
                    Senin, 14 Juni 2027
                  </strong>

                  <p>
                    09.00 WIB – selesai
                    <br />
                    Masjid / Gedung Pernikahan
                    <br />
                    Jakarta, Indonesia
                  </p>

                  <button
                    type="button"
                    className="location-button"
                  >
                    LIHAT LOKASI
                  </button>
                </div>
              </article>
            </Reveal>

            <Reveal
              direction="right"
              delay={120}
            >
              <article className="event-card">
                <div className="event-icon">
                  ✦
                </div>

                <div className="event-info">
                  <span>
                    WALIMATUL URUS
                  </span>

                  <h3>
                    Resepsi
                  </h3>

                  <strong>
                    Senin, 14 Juni 2027
                  </strong>

                  <p>
                    11.00 – 14.00 WIB
                    <br />
                    Gedung Pernikahan
                    <br />
                    Jakarta, Indonesia
                  </p>

                  <button
                    type="button"
                    className="location-button"
                  >
                    LIHAT LOKASI
                  </button>
                </div>
              </article>
            </Reveal>
          </div>

          <div className="countdown-wrapper">
            <div className="countdown-heading">
              <span>
                MENUJU HARI BAHAGIA
              </span>

              <strong>
                COUNTDOWN
              </strong>
            </div>

            <div className="countdown-grid">
              <TimeBox
                value={countdown.days}
                label="HARI"
              />

              <TimeBox
                value={countdown.hours}
                label="JAM"
              />

              <TimeBox
                value={countdown.mins}
                label="MENIT"
              />

              <TimeBox
                value={countdown.secs}
                label="DETIK"
              />
            </div>
          </div>
        </section>

        {/* =================================================
            DOA
            ================================================= */}

        <section className="prayer-section">
          <div className="prayer-pattern" />

          <Reveal direction="scale">
            <div className="prayer-inner">
              <span className="prayer-label">
                DOA UNTUK KEDUA MEMPELAI
              </span>

              <IslamicStar size={60} />

              <div className="prayer-arabic">
                بَارَكَ اللَّهُ لَكُمَا،
                <br />
                وَبَارَكَ عَلَيْكُمَا،
                <br />
                وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
              </div>

              <div className="prayer-divider" />

              <p className="prayer-transliteration">
                Barakallahu lakuma,
                wa baraka 'alaikuma,
                wa jama'a bainakuma fi khair.
              </p>

              <p className="prayer-translation">
                “Semoga Allah memberkahi kalian
                berdua, melimpahkan keberkahan
                kepada kalian, dan menyatukan
                kalian berdua dalam kebaikan.”
              </p>

              <div className="prayer-wish">
                Semoga Allah SWT menganugerahkan
                keluarga yang sakinah, mawaddah,
                warahmah; melimpahkan rezeki
                yang berkah, keturunan yang saleh
                dan salehah, serta menuntun setiap
                langkah dalam kebaikan.
              </div>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            GALLERY
            ================================================= */}

        <section className="section gallery-section">
          <SectionLabel
            number="05"
            eyebrow="MOMEN"
            title="Galeri"
          />

          <Reveal direction="up">
            <p className="section-intro gallery-intro">
              Beberapa potongan kecil dari
              perjalanan yang akan selalu
              kami syukuri.
            </p>
          </Reveal>

          <div className="gallery-grid">
            {GALLERY.map(
              (photo, index) => (
                <Reveal
                  key={`${photo.src}-${index}`}
                  direction={
                    index === 0
                      ? "scale"
                      : index % 2 === 0
                      ? "left"
                      : "right"
                  }
                  delay={index * 100}
                  className={
                    index === 0
                      ? "gallery-large"
                      : "gallery-small"
                  }
                >
                  <button
                    type="button"
                    className="gallery-item"
                    onClick={() =>
                      setActivePhoto(
                        photo.src
                      )
                    }
                    aria-label={`Buka foto ${
                      index + 1
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                    />

                    <span className="gallery-number">
                      0{index + 1}
                    </span>
                  </button>
                </Reveal>
              )
            )}
          </div>
        </section>

        {/* =================================================
            RSVP
            ================================================= */}

        <section className="section rsvp-section">
          <SectionLabel
            number="06"
            eyebrow="KONFIRMASI KEHADIRAN"
            title="RSVP"
          />

          <Reveal direction="up">
            <div className="rsvp-card">
              {!submitted ? (
                <>
                  <p>
                    Kehadiran dan doa restu Anda
                    merupakan kebahagiaan yang
                    sangat berarti bagi kami.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                  >
                    <label>
                      <span>
                        NAMA
                      </span>

                      <input
                        type="text"
                        value={form.name}
                        onChange={(event) =>
                          setForm({
                            ...form,
                            name:
                              event.target
                                .value,
                          })
                        }
                        placeholder="Nama lengkap"
                        required
                      />
                    </label>

                    <label>
                      <span>
                        KONFIRMASI KEHADIRAN
                      </span>

                      <select
                        value={form.attend}
                        onChange={(event) =>
                          setForm({
                            ...form,
                            attend:
                              event.target
                                .value,
                          })
                        }
                        required
                      >
                        <option value="">
                          Pilih jawaban
                        </option>

                        <option value="hadir">
                          InsyaAllah saya hadir
                        </option>

                        <option value="tidak-hadir">
                          Mohon maaf, saya tidak
                          dapat hadir
                        </option>
                      </select>
                    </label>

                    <label>
                      <span>
                        UCAPAN & DOA
                      </span>

                      <textarea
                        value={form.wishes}
                        onChange={(event) =>
                          setForm({
                            ...form,
                            wishes:
                              event.target
                                .value,
                          })
                        }
                        placeholder="Tuliskan doa atau ucapan untuk kami..."
                        rows={5}
                      />
                    </label>

                    <button
                      type="submit"
                      className="submit-button"
                    >
                      KIRIM UCAPAN

                      <span>
                        →
                      </span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="rsvp-success">
                  <IslamicStar size={72} />

                  <div className="success-arabic">
                    شُكْرًا
                  </div>

                  <h3>
                    Terima kasih,
                    <br />
                    {form.name}.
                  </h3>

                  <p>
                    Doa dan ucapan Anda telah
                    menjadi bagian dari
                    kebahagiaan kami.
                  </p>

                  <div className="success-stamp">
                    TERIMA KASIH
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </section>

        {/* =================================================
            CLOSING
            ================================================= */}

        <section className="closing-section">
          <div className="closing-image">
            <img
              src={SECOND_IMAGE}
              alt="Ahmad dan Aisyah"
            />

            <div className="closing-overlay" />
          </div>

          <div className="closing-content">
            <span className="closing-arabic">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم
            </span>

            <div className="closing-star">
              <IslamicStar size={82} />
            </div>

            <p className="closing-small">
              Sebuah awal dari perjalanan baru
            </p>

            <h2>
              Ahmad
              <span>&</span>
              Aisyah
            </h2>

            <div className="closing-date">
              14 · 06 · 2027
            </div>

            <p className="closing-message">
              Semoga pernikahan ini menjadi
              tempat kami belajar mencintai
              dengan lebih baik, saling menjaga
              dalam suka dan duka, serta
              bersama-sama mendekat kepada
              Allah SWT.
            </p>

            <div className="closing-prayer">
              Sakinah · Mawaddah · Warahmah
            </div>

            <div className="closing-thanks">
              Jazakumullahu khairan katsiran
              <br />
              atas doa dan kehadiran Anda.
            </div>
          </div>
        </section>

        {/* =================================================
            FOOTER
            ================================================= */}

        <footer className="footer">
          <NusantaraLines />

          <div className="footer-names">
            Ahmad Fadillah
            <span>×</span>
            Aisyah Rahmawati
          </div>

          <p>
            UNDANGAN PERNIKAHAN
          </p>

          <small>
            © 2027 · Dengan penuh rasa syukur
          </small>
        </footer>
      </main>

      {/* ===================================================
          LIGHTBOX
          =================================================== */}

      {activePhoto && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Preview foto"
          onClick={() =>
            setActivePhoto(null)
          }
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() =>
              setActivePhoto(null)
            }
            aria-label="Tutup foto"
          >
            ×
          </button>

          <img
            src={activePhoto}
            alt="Foto diperbesar"
            onClick={(event) =>
              event.stopPropagation()
            }
          />
        </div>
      )}

      {/* ===================================================
          GLOBAL CSS
          =================================================== */}

      <style jsx global>{`
        :root {
          --ivory: #f5efe3;
          --cream: #ebe0ca;

          --green: #183c32;
          --green-dark: #0c241d;

          --maroon: #6b252b;
          --maroon-dark: #42171b;

          --gold: #b88a43;
          --gold-light: #d5b576;

          --brown: #2c211b;
          --black: #141310;

          --muted: #796d60;

          --serif:
            Georgia,
            "Times New Roman",
            serif;

          --sans:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #080c0a;
          color: var(--brown);
          font-family: var(--sans);
        }

        body.wedding-page {
          overflow-x: hidden;
        }

        button,
        input,
        textarea,
        select {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        img {
          display: block;
          max-width: 100%;
        }

        /* ================================================
           SHELL
           ================================================ */

        .wedding-shell {
          width: min(100%, 430px);
          margin: 0 auto;
          overflow: hidden;
          background: var(--ivory);
          box-shadow:
            0 0 80px
            rgba(0, 0, 0, 0.35);
        }

        /* ================================================
           INTRO
           ================================================ */

        .cinematic-intro {
          position: fixed;
          inset: 0;
          z-index: 9999;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 50% 40%,
              rgba(184, 138, 67, 0.15),
              transparent 31%
            ),
            var(--green-dark);

          color: var(--ivory);

          transition:
            opacity 900ms
              cubic-bezier(
                0.77,
                0,
                0.18,
                1
              ),
            transform 900ms
              cubic-bezier(
                0.77,
                0,
                0.18,
                1
              ),
            visibility 900ms ease;
        }

        .cinematic-intro.intro-opened {
          animation: introShake 500ms ease;
        }

        .intro-glow {
          position: absolute;

          width: 280px;
          height: 280px;

          border-radius: 50%;

          background:
            rgba(
              184,
              138,
              67,
              0.09
            );

          filter: blur(45px);

          animation:
            introGlow 3.6s
            ease-in-out infinite;
        }

        .intro-pattern,
        .hero-pattern,
        .prayer-pattern {
          position: absolute;
          inset: 0;

          opacity: 0.1;

          background-image:
            linear-gradient(
              30deg,
              transparent 46%,
              var(--gold) 47%,
              var(--gold) 53%,
              transparent 54%
            ),
            linear-gradient(
              150deg,
              transparent 46%,
              var(--gold) 47%,
              var(--gold) 53%,
              transparent 54%
            );

          background-size:
            52px 90px;
        }

        .intro-noise {
          position: absolute;
          inset: 0;
          opacity: 0.045;

          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .intro-content {
          position: relative;
          z-index: 2;

          width: calc(100% - 52px);

          text-align: center;
        }

        .intro-bismillah {
          font-family: var(--serif);
          font-size: 19px;

          color: var(--gold-light);

          opacity: 0;

          animation:
            introItem 900ms
            300ms forwards;
        }

        .intro-rule {
          width: 0;
          height: 1px;

          margin: 24px auto;

          background: var(--gold);

          animation:
            introRule 900ms
            700ms forwards;
        }

        .intro-small {
          margin: 0 0 20px;

          font-size: 9px;
          letter-spacing: 0.24em;
          text-transform: uppercase;

          color:
            rgba(
              245,
              239,
              227,
              0.6
            );

          opacity: 0;

          animation:
            introItem 700ms
            1000ms forwards;
        }

        .intro-names {
          display: flex;
          flex-direction: column;
          gap: 4px;

          font-family: var(--serif);

          font-size:
            clamp(
              30px,
              9vw,
              42px
            );

          line-height: 0.98;

          opacity: 0;

          animation:
            introNames 1100ms
            1200ms forwards;
        }

        .intro-names b {
          margin: 5px 0;

          font-family: var(--sans);

          font-size: 15px;
          font-weight: 400;

          color: var(--gold);
        }

        .intro-degrees {
          margin-top: 13px;

          font-size: 7px;
          letter-spacing: 0.22em;

          color:
            rgba(
              245,
              239,
              227,
              0.5
            );

          opacity: 0;

          animation:
            introItem 700ms
            1700ms forwards;
        }

        .intro-degrees span {
          margin: 0 8px;
          color: var(--gold);
        }

        .intro-date {
          margin-top: 20px;

          font-size: 10px;
          letter-spacing: 0.4em;

          color: var(--gold-light);

          opacity: 0;

          animation:
            introItem 700ms
            1900ms forwards;
        }

        .intro-ornament {
          display: flex;
          justify-content: center;

          margin-top: 25px;

          opacity: 0;

          animation:
            introItem 700ms
            2200ms forwards,
            floatSoft 3s
            2.9s ease-in-out infinite;
        }

        .intro-open-button {
          position: relative;

          display: flex;
          align-items: center;
          justify-content: space-between;

          width: 190px;

          margin:
            27px auto 0;

          padding: 13px 16px;

          border:
            1px solid
            rgba(
              213,
              181,
              118,
              0.65
            );

          background:
            rgba(
              255,
              255,
              255,
              0.025
            );

          color: var(--ivory);

          font-size: 8px;
          letter-spacing: 0.2em;

          backdrop-filter: blur(8px);

          opacity: 0;

          animation:
            introButton 900ms
            2500ms forwards;

          transition:
            background 300ms ease,
            border-color 300ms ease,
            transform 300ms ease;
        }

        .intro-open-button::before {
          content: "";

          position: absolute;
          inset: 3px;

          border:
            1px solid
            rgba(
              213,
              181,
              118,
              0.16
            );

          pointer-events: none;
        }

        .intro-open-button:hover {
          background:
            rgba(
             184,
              138,
              67,
              0.14
            );

          border-color:
            var(--gold-light);

          transform:
            translateY(-2px);
        }

        .intro-open-button i {
          font-size: 12px;
          font-style: normal;
          color: var(--gold-light);
        }

        .intro-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          margin-top: 30px;

          font-size: 7px;
          letter-spacing: 0.2em;

          color:
            rgba(
              245,
              239,
              227,
              0.55
            );

          animation:
            introLoading 1s
            ease-in-out infinite;
        }

        .intro-loading span {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: var(--gold);
        }

        .intro-bottom {
          position: absolute;

          bottom: 28px;

          left: 0;
          right: 0;

          text-align: center;

          font-size: 8px;
          letter-spacing: 0.3em;

          color:
            rgba(
              245,
              239,
              227,
              0.4
            );
        }

        /* ================================================
           MUSIC CONTROL
           ================================================ */

        .music-control {
          position: fixed;

          right:
            max(
              15px,
              calc(
                (100vw - 430px) / 2
                + 15px
              )
            );

          bottom: 18px;

          z-index: 100;

          display: flex;
          align-items: center;
          gap: 8px;

          height: 38px;

          padding: 0 11px;

          border:
            1px solid
            rgba(
              184,
              138,
              67,
              0.5
            );

          border-radius: 20px;

          background:
            rgba(
              12,
              36,
              29,
              0.92
            );

          color: var(--ivory);

          box-shadow:
            0 8px 30px
            rgba(0, 0, 0, 0.2);

          backdrop-filter: blur(12px);
        }

        .music-icon {
          color: var(--gold-light);
          font-size: 14px;
        }

        .music-label {
          font-size: 6px;
          letter-spacing: 0.12em;
          color:
            rgba(
              245,
              239,
              227,
              0.55
            );
        }

        .music-bars {
          display: flex;
          align-items: center;
          gap: 2px;
          height: 14px;
        }

        .music-bars i {
          display: block;
          width: 2px;
          height: 5px;
          background: var(--gold);

          animation:
            musicBar
            900ms
            ease-in-out
            infinite;
          animation-play-state: paused;
        }

        .music-bars i:nth-child(2) {
          animation-delay: 150ms;
        }

        .music-bars i:nth-child(3) {
          animation-delay: 300ms;
        }

        .music-bars i:nth-child(4) {
          animation-delay: 450ms;
        }

        .music-control.playing
          .music-bars i {
          animation-play-state: running;
        }

        /* ================================================
           HERO
           ================================================ */

        .hero {
          position: relative;

          min-height: 850px;

          padding:
            34px
            24px
            28px;

          overflow: hidden;

          background:
            linear-gradient(
              180deg,
              var(--green-dark) 0%,
              var(--green) 52%,
              var(--ivory) 100%
            );

          color: var(--ivory);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero-pattern {
          opacity: 0.08;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 80%
            );
        }

        .hero-top {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .bismillah {
          font-family: var(--serif);
          font-size: 13px;
          color: var(--gold-light);
        }

        .hero-label {
          writing-mode: vertical-rl;

          font-size: 8px;
          letter-spacing: 0.22em;

          color:
            rgba(
              245,
              239,
              227,
              0.6
            );
        }

        .hero-photo-wrap {
          position: relative;
          z-index: 2;

          width: 82%;

          margin:
            40px auto 0;
        }

        .hero-photo-frame {
          position: relative;

          aspect-ratio: 0.76;

          overflow: hidden;

          border:
            1px solid
            rgba(
              213,
              181,
              118,
              0.6
            );

          padding: 7px;

          background:
            rgba(
              245,
              239,
              227,
              0.08
            );

          box-shadow:
            15px 18px 0
            rgba(
              184,
              138,
              67,
              0.2
            );
        }

        .hero-photo-frame img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          filter:
            saturate(0.78)
            contrast(1.02);
        }

        .photo-overlay {
          position: absolute;
          inset: 7px;

          background:
            linear-gradient(
              180deg,
              transparent 55%,
              rgba(
                12,
                36,
                29,
                0.52
              )
            );
        }

        .photo-corner {
          position: absolute;

          width: 28px;
          height: 28px;

          border-color:
            var(--gold-light);

          border-style: solid;
        }

        .photo-corner.top-left {
          top: -1px;
          left: -1px;
          border-width:
            1px 0 0 1px;
        }

        .photo-corner.top-right {
          top: -1px;
          right: -1px;
          border-width:
            1px 1px 0 0;
        }

        .photo-corner.bottom-left {
          bottom: -1px;
          left: -1px;
          border-width:
            0 0 1px 1px;
        }

        .photo-corner.bottom-right {
          bottom: -1px;
          right: -1px;
          border-width:
            0 1px 1px 0;
        }

        .hero-copy {
          position: relative;
          z-index: 3;

          margin-top: 42px;

          text-align: center;
        }

        .hero-pretitle {
          margin:
            0 0 13px;

          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;

          color: var(--gold-light);
        }

        .hero h1 {
          margin: 0;

          font-family: var(--serif);

          font-size:
            clamp(
              50px,
              15vw,
              70px
            );

          font-weight: 400;

          line-height: 0.77;

          letter-spacing: -0.07em;
        }

        .hero h1 span {
          display: block;

          margin:
            8px 0;

          font-family: var(--sans);

          font-size: 15px;
          font-weight: 300;

          letter-spacing: 0.05em;

          color: var(--gold-light);
        }

        .hero-degrees {
          display: flex;

          justify-content: center;
          align-items: center;

          gap: 7px;

          margin-top: 22px;

          font-size: 8px;
          letter-spacing: 0.04em;

          color:
            rgba(
              245,
              239,
              227,
              0.68
            );
        }

        .hero-degrees i {
          color: var(--gold);
          font-style: normal;
        }

        .hero-description {
          max-width: 320px;

          margin:
            22px auto 0;

          font-size: 11px;
          line-height: 1.8;

          color:
            rgba(
              245,
              239,
              227,
              0.72
            );
        }

        .hero-date {
          position: relative;
          z-index: 3;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 12px;

          margin-top: 28px;

          color: var(--gold-light);
        }

        .hero-date > span:first-child {
          font-family: var(--serif);
          font-size: 36px;
        }

        .hero-date > span:last-child {
          font-size: 20px;
        }

        .hero-date div {
          display: flex;
          flex-direction: column;

          font-size: 8px;
          letter-spacing: 0.22em;

          text-align: center;
        }

        .hero-scroll {
          position: absolute;

          bottom: 22px;

          left: 0;
          right: 0;

          z-index: 3;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 9px;

          font-size: 7px;
          letter-spacing: 0.18em;

          color:
            rgba(
              245,
              239,
              227,
              0.48
            );
        }

        .hero-scroll span {
          display: block;

          width: 18px;
          height: 1px;

          background: var(--gold);
        }

        /* ================================================
           MARQUEE
           ================================================ */

        .marquee-wrap {
          overflow: hidden;

          background:
            var(--maroon);

          color: var(--ivory);

          border-top:
            1px solid
            rgba(
              213,
              181,
              118,
              0.3
            );

          border-bottom:
            1px solid
            rgba(
              213,
              181,
              118,
              0.3
            );
        }

        .marquee-track {
          display: flex;

          width: max-content;

          animation:
            marquee 22s linear infinite;
        }

        .marquee-track span {
          padding:
            13px 0;

          padding-right: 32px;

          white-space: nowrap;

          font-size: 8px;
          letter-spacing: 0.22em;
        }

        /* ================================================
           SECTIONS
           ================================================ */

        .section {
          position: relative;

          padding:
            78px 24px;

          background:
            var(--ivory);
        }

        .section-heading {
          display: grid;

          grid-template-columns:
            42px 1fr;

          gap: 14px;

          align-items: start;

          margin-bottom: 34px;
        }

        .section-number {
          padding-top: 5px;

          font-size: 9px;
          letter-spacing: 0.1em;

          color: var(--gold);
        }

        .section-eyebrow {
          margin-bottom: 7px;

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 0.22em;

          color: var(--maroon);
        }

        .section-heading h2 {
          margin: 0;

          font-family: var(--serif);

          font-size: 34px;
          font-weight: 400;

          line-height: 1;

          color: var(--green-dark);
        }

        .section-intro {
          margin:
            -8px 0 32px;

          font-size: 11px;
          line-height: 1.8;

          color: var(--muted);
        }

        /* ================================================
           OPENING
           ================================================ */

        .opening-section {
          background:
            linear-gradient(
              180deg,
              var(--ivory),
              #efe5d4
            );
        }

        .opening-card {
          padding:
            30px 24px;

          border:
            1px solid
            rgba(
              184,
              138,
              67,
              0.4
            );

          background:
            rgba(
              255,
              255,
              255,
              0.32
            );
        }

        .opening-arabic {
          text-align: center;

          font-family: var(--serif);

          font-size: 21px;
          line-height: 1.8;

          color: var(--green);
        }

        .opening-card p {
          margin:
            16px 0 0;

          font-size: 11px;
          line-height: 1.95;

          color: #65594e;
        }

        .opening-card
          .opening-lead {
          margin-top: 0;

          font-family: var(--serif);

          font-size: 19px;

          color: var(--maroon);
        }

        .ornament-divider {
          display: flex;

          align-items: center;

          gap: 9px;

          margin: 20px 0;
        }

        .ornament-divider span {
          flex: 1;

          height: 1px;

          background:
            rgba(
              184,
              138,
              67,
              0.35
            );
        }

        .ornament-divider i {
          color: var(--gold);

          font-size: 11px;

          font-style: normal;
        }

        .quote-card {
          position: relative;

          margin-top: 22px;

          padding:
            32px 24px;

          overflow: hidden;

          background:
            var(--green);

          color: var(--ivory);

          text-align: center;
        }

        .quote-card
          .islamic-star {
          margin: 0 auto 20px;
        }

        .quote-card blockquote {
          position: relative;
          z-index: 2;

          margin: 0;

          font-family: var(--serif);

          font-size: 20px;
          line-height: 1.6;
        }

        .quote-sign {
          margin-top: 22px;

          font-size: 8px;
          letter-spacing: 0.25em;

          color: var(--gold-light);
        }

        /* ================================================
           COUPLE
           ================================================ */

        .couple-section {
          background:
            var(--cream);
        }

        .person-card {
          display: grid;

          grid-template-columns:
            47% 1fr;

          min-height: 300px;

          background:
            var(--ivory);

          border:
            1px solid
            rgba(
              44,
              33,
              27,
              0.08
            );
        }

        .person-card-reverse {
          grid-template-columns:
            1fr 47%;
        }

        .person-card-reverse
          .person-image {
          order: 2;
        }

        .person-card-reverse
          .person-meta {
          order: 1;
        }

        .person-image {
          min-height: 300px;
          overflow: hidden;
        }

        .person-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          filter:
            saturate(0.72);
        }

        .person-meta {
          display: flex;

          flex-direction: column;

          justify-content: center;

          padding:
            20px 15px;
        }

        .person-role {
          font-size: 7px;

          letter-spacing: 0.18em;

          color: var(--maroon);
        }

        .person-meta h3 {
          margin:
            9px 0 0;

          font-family: var(--serif);

          font-size: 25px;
          font-weight: 400;

          line-height: 0.96;

          color: var(--green-dark);
        }

        .degree {
          margin:
            10px 0 0;

          font-size: 8px;

          color: var(--gold);
        }

        .person-line {
          width: 30px;
          height: 1px;

          margin: 14px 0;

          background:
            var(--gold);
        }

        .person-meta
          p:last-child {
          margin: 0;

          font-size: 8px;
          line-height: 1.65;

          color: var(--muted);
        }

        .couple-symbol {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 12px;

          height: 55px;

          font-family: var(--serif);

          font-size: 24px;

          color: var(--maroon);
        }

        .couple-symbol span {
          width: 40px;
          height: 1px;

          background:
            rgba(
              184,
              138,
              67,
              0.5
            );
        }

        /* ================================================
           FAMILY
           ================================================ */

        .family-section {
          padding-top: 0;

          background:
            var(--cream);
        }

        .family-card {
          padding:
            32px 23px;

          border-top:
            1px solid
            var(--gold);

          border-bottom:
            1px solid
            rgba(
              184,
              138,
              67,
              0.3
            );
        }

        .mini-label {
          font-size: 8px;
          letter-spacing: 0.2em;

          color: var(--maroon);
        }

        .family-card h2 {
          margin:
            12px 0;

          font-family: var(--serif);

          font-size: 25px;
          font-weight: 400;

          line-height: 1.15;

          color: var(--green-dark);
        }

        .family-card > p {
          margin: 0;

          font-size: 10px;
          line-height: 1.8;

          color: var(--muted);
        }

        .family-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 15px;

          margin-top: 28px;
        }

        .family-grid div {
          padding-top: 14px;

          border-top:
            1px solid
            rgba(
              184,
              138,
              67,
              0.35
            );
        }

        .family-grid small {
          display: block;

          margin-bottom: 8px;

          font-size: 6px;

          line-height: 1.5;

          letter-spacing: 0.13em;

          color: var(--maroon);
        }

        .family-grid strong {
          font-family: var(--serif);

          font-size: 11px;

          line-height: 1.5;

          font-weight: 400;

          color: var(--brown);
        }

        /* ================================================
           STORY
           ================================================ */

        .story-list {
          position: relative;
        }

        .story-list::before {
          content: "";

          position: absolute;

          top: 0;
          bottom: 0;

          left: 15px;

          width: 1px;

          background:
            rgba(
              184,
              138,
              67,
              0.4
            );
        }

        .story-item {
          position: relative;

          display: grid;

          grid-template-columns:
            31px 1fr;

          gap: 18px;

          padding-bottom: 42px;
        }

        .story-item:last-child {
          padding-bottom: 0;
        }

        .story-number {
          position: relative;
          z-index: 2;

          display: flex;

          align-items: center;
          justify-content: center;

          width: 31px;
          height: 31px;

          border:
            1px solid
            var(--gold);

          border-radius: 50%;

          background:
            var(--ivory);

          font-size: 8px;

          color: var(--maroon);
        }

        .story-item span {
          font-size: 7px;

          letter-spacing: 0.2em;

          color: var(--gold);
        }

        .story-item h3 {
          margin:
            6px 0 10px;

          font-family: var(--serif);

          font-size: 22px;
          font-weight: 400;

          color: var(--green-dark);
        }

        .story-item p {
          margin: 0;

          font-size: 10px;
          line-height: 1.85;

          color: var(--muted);
        }

        /* ================================================
           WEDDING DAY
           ================================================ */

        .wedding-day-section {
          background:
            var(--green-dark);

          color: var(--ivory);
        }

        .wedding-day-section
          .section-eyebrow {
          color:
            var(--gold-light);
        }

        .wedding-day-section
          .section-heading h2 {
          color:
            var(--ivory);
        }

        .date-emblem {
          width: 135px;
          height: 135px;

          margin:
            0 auto 55px;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(
              213,
              181,
              118,
              0.55
            );

          border-radius: 50%;

          text-align: center;

          color:
            var(--gold-light);
        }

        .date-emblem span {
          font-size: 6px;

          letter-spacing: 0.3em;
        }

        .date-emblem strong {
          margin:
            4px 0;

          font-family: var(--serif);

          font-size: 48px;
          line-height: 0.8;

          font-weight: 400;
        }

        .date-emblem div {
          margin-bottom: 6px;

          font-size: 7px;
          line-height: 1.5;

          letter-spacing: 0.18em;
        }

        .wedding-day-section
          .section-intro {
          color:
            rgba(
              245,
              239,
              227,
              0.58
            );
        }

        .event-list {
          display: grid;
          gap: 14px;
        }

        .event-card {
          display: grid;

          grid-template-columns:
            45px 1fr;

          gap: 16px;

          padding: 22px;

          border:
            1px solid
            rgba(
              213,
              181,
              118,
              0.22
            );

          background:
            rgba(
              255,
              255,
              255,
              0.035
            );
        }

        .event-icon {
          display: flex;

          align-items:
            flex-start;

          justify-content:
            center;

          padding-top: 2px;

          color:
            var(--gold-light);

          font-size: 22px;
        }

        .event-info > span {
          font-size: 7px;

          letter-spacing: 0.2em;

          color:
            var(--gold-light);
        }

        .event-info h3 {
          margin:
            6px 0 9px;

          font-family: var(--serif);

          font-size: 24px;
          font-weight: 400;
        }

        .event-info strong {
          font-size: 9px;
          font-weight: 500;
        }

        .event-info p {
          margin:
            8px 0 16px;

          font-size: 9px;
          line-height: 1.75;

          color:
            rgba(
              245,
              239,
              227,
              0.58
            );
        }

        .location-button {
          padding:
            9px 11px;

          border:
            1px solid
            rgba(
              213,
              181,
              118,
              0.45
            );

          background:
            transparent;

          color:
            var(--gold-light);

          font-size: 7px;

          letter-spacing: 0.15em;
        }

        .countdown-wrapper {
          margin-top: 55px;

          padding-top: 28px;

          border-top:
            1px solid
            rgba(
              213,
              181,
              118,
              0.22
            );
        }

        .countdown-heading {
          display: flex;

          justify-content:
            space-between;

          align-items:
            baseline;

          margin-bottom: 18px;
        }

        .countdown-heading span {
          font-size: 7px;

          letter-spacing: 0.17em;

          color:
            rgba(
              245,
              239,
              227,
              0.45
            );
        }

        .countdown-heading strong {
          font-family: var(--serif);

          font-size: 18px;
          font-weight: 400;

          color:
            var(--gold-light);
        }

        .countdown-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 5px;
        }

        .time-box {
          padding:
            13px 4px;

          border:
            1px solid
            rgba(
              213,
              181,
              118,
              0.18
            );

          text-align: center;
        }

        .time-box strong {
          display: block;

          font-family: var(--serif);

          font-size: 25px;
          font-weight: 400;

          color: var(--ivory);
        }

        .time-box span {
          font-size: 6px;

          letter-spacing: 0.14em;

          color:
            var(--gold-light);
        }

        /* ================================================
           PRAYER
           ================================================ */

        .prayer-section {
          position: relative;

          overflow: hidden;

          padding:
            85px 24px;

          background:
            var(--maroon-dark);

          color:
            var(--ivory);

          text-align: center;
        }

        .prayer-pattern {
          opacity: 0.06;
        }

        .prayer-inner {
          position: relative;
          z-index: 2;
        }

        .prayer-label {
          display: block;

          margin-bottom: 24px;

          font-size: 7px;

          letter-spacing: 0.25em;

          color:
            var(--gold-light);
        }

        .prayer-inner
          .islamic-star {
          margin:
            0 auto 25px;
        }

        .prayer-arabic {
          font-family: var(--serif);

          font-size: 22px;
          line-height: 2;

          color:
            var(--gold-light);
        }

        .prayer-divider {
          width: 45px;
          height: 1px;

          margin:
            25px auto;

          background:
            var(--gold);
        }

        .prayer-transliteration {
          font-family: var(--serif);

          font-size: 15px;

          font-style: italic;

          line-height: 1.7;

          color:
            var(--ivory);
        }

        .prayer-translation {
          margin:
            20px auto 0;

          max-width: 310px;

          font-size: 10px;
          line-height: 1.85;

          color:
            rgba(
              245,
              239,
              227,
              0.63
            );
        }

        .prayer-wish {
          margin-top: 30px;

          padding-top: 25px;

          border-top:
            1px solid
            rgba(
              213,
              181,
              118,
              0.2
            );

          font-size: 10px;
          line-height: 1.9;

          color:
            rgba(
              245,
              239,
              227,
              0.75
            );
        }

        /* ================================================
           GALLERY
           ================================================ */

        .gallery-section {
          background:
            var(--cream);
        }

        .gallery-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 8px;
        }

        .gallery-large {
          grid-column:
            1 / -1;
        }

        .gallery-item {
          position: relative;

          display: block;

          width: 100%;

          padding: 0;

          overflow: hidden;

          border: 0;

          background: none;
        }

        .gallery-large
          .gallery-item {
          aspect-ratio: 1.1;
        }

        .gallery-small
          .gallery-item {
          aspect-ratio: 0.82;
        }

        .gallery-item::after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 55%,
              rgba(
                12,
                36,
                29,
                0.42
              )
            );

          pointer-events: none;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          filter:
            saturate(0.72);

          transition:
            transform 700ms ease,
            filter 700ms ease;
        }

        .gallery-item:hover img {
          transform:
            scale(1.045);

          filter:
            saturate(0.9);
        }

        .gallery-number {
          position: absolute;

          z-index: 2;

          right: 12px;
          bottom: 10px;

          color: white;

          font-size: 7px;

          letter-spacing: 0.16em;
        }

        /* ================================================
           RSVP
           ================================================ */

        .rsvp-card {
          padding:
            28px 22px;

          border:
            1px solid
            rgba(
              184,
              138,
              67,
              0.4
            );

          background:
            #f9f4ea;
        }

        .rsvp-card > p {
          margin:
            0 0 25px;

          font-size: 10px;
          line-height: 1.8;

          color:
            var(--muted);
        }

        .rsvp-card form {
          display: grid;
          gap: 17px;
        }

        .rsvp-card label {
          display: grid;
          gap: 7px;
        }

        .rsvp-card label span {
          font-size: 7px;

          letter-spacing: 0.16em;

          color:
            var(--maroon);
        }

        .rsvp-card input,
        .rsvp-card select,
        .rsvp-card textarea {
          width: 100%;

          border: 0;

          border-bottom:
            1px solid
            rgba(
              44,
              33,
              27,
              0.22
            );

          border-radius: 0;

          padding:
            10px 0;

          outline: none;

          background:
            transparent;

          color:
            var(--brown);

          font-size: 10px;
        }

        .rsvp-card input:focus,
        .rsvp-card select:focus,
        .rsvp-card textarea:focus {
          border-bottom-color:
            var(--gold);
        }

        .rsvp-card textarea {
          resize: vertical;

          min-height: 80px;
        }

        .submit-button {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          margin-top: 5px;

          padding:
            15px 17px;

          border: 0;

          background:
            var(--green);

          color:
            var(--ivory);

          font-size: 8px;

          letter-spacing: 0.16em;
        }

        .submit-button span {
          color:
            var(--gold-light);

          font-size: 15px;
        }

        .rsvp-success {
          padding:
            18px 5px;

          text-align: center;
        }

        .rsvp-success
          .islamic-star {
          margin:
            0 auto 20px;
        }

        .success-arabic {
          font-family:
            var(--serif);

          font-size: 25px;

          color:
            var(--gold);
        }

        .rsvp-success h3 {
          margin:
            13px 0;

          font-family:
            var(--serif);

          font-size: 25px;
          font-weight: 400;

          line-height: 1.1;

          color:
            var(--green-dark);
        }

        .rsvp-success p {
          margin: 0;

          font-size: 10px;

          line-height: 1.8;

          color:
            var(--muted);
        }

        .success-stamp {
          width: 105px;

          margin:
            25px auto 0;

          padding: 10px;

          border:
            1px solid
            var(--maroon);

          color:
            var(--maroon);

          font-size: 7px;

          letter-spacing: 0.18em;

          transform:
            rotate(-4deg);
        }

        /* ================================================
           CLOSING
           ================================================ */

        .closing-section {
          position: relative;

          min-height: 730px;

          overflow: hidden;

          background:
            var(--green-dark);

          color:
            var(--ivory);
        }

        .closing-image {
          position: absolute;
          inset: 0;
        }

        .closing-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          opacity: 0.34;

          filter:
            saturate(0.5);
        }

        .closing-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(
                12,
                36,
                29,
                0.75
              ),
              rgba(
                12,
                36,
                29,
                0.92
              )
            );
        }

        .closing-content {
          position: relative;

          z-index: 2;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          min-height: 730px;

          padding:
            50px 30px;

          text-align: center;
        }

        .closing-arabic {
          font-family:
            var(--serif);

          font-size: 12px;

          color:
            var(--gold-light);
        }

        .closing-star {
          margin:
            25px 0;
        }

        .closing-small {
          margin:
            0 0 13px;

          font-size: 8px;

          letter-spacing: 0.2em;

          color:
            rgba(
              245,
              239,
              227,
              0.52
            );
        }

        .closing-content h2 {
          margin: 0;

          font-family:
            var(--serif);

          font-size: 55px;

          font-weight: 400;

          line-height: 0.76;

          letter-spacing:
            -0.06em;
        }

        .closing-content h2 span {
          display: block;

          margin:
            12px 0;

          font-family:
            var(--sans);

          font-size: 14px;

          color:
            var(--gold-light);
        }

        .closing-date {
          margin-top: 25px;

          font-size: 8px;

          letter-spacing: 0.35em;

          color:
            var(--gold-light);
        }

        .closing-message {
          max-width: 300px;

          margin:
            27px 0 0;

          font-size: 10px;

          line-height: 1.9;

          color:
            rgba(
              245,
              239,
              227,
              0.67
            );
        }

        .closing-prayer {
          margin-top: 28px;

          font-family:
            var(--serif);

          font-size: 15px;

          color:
            var(--gold-light);
        }

        .closing-thanks {
          margin-top: 38px;

          font-size: 8px;

          line-height: 1.8;

          letter-spacing: 0.08em;

          color:
            rgba(
              245,
              239,
              227,
              0.5
            );
        }

        /* ================================================
           FOOTER
           ================================================ */

        .footer {
          position: relative;

          padding:
            42px 24px 35px;

          background:
            #081a15;

          color:
            var(--ivory);

          text-align: center;
        }

        .nusantara-lines {
          display: flex;

          justify-content: center;

          gap: 5px;

          margin-bottom: 24px;
        }

        .nusantara-lines span {
          width: 35px;
          height: 1px;

          background:
            var(--gold);
        }

        .nusantara-lines span:nth-child(2) {
          width: 7px;
          height: 7px;

          margin-top: -3px;

          transform:
            rotate(45deg);
        }

        .footer-names {
          font-family:
            var(--serif);

          font-size: 18px;

          color:
            var(--gold-light);
        }

        .footer-names span {
          margin:
            0 5px;

          color:
            var(--ivory);
        }

        .footer p {
          margin:
            11px 0 20px;

          font-size: 7px;

          letter-spacing: 0.2em;

          color:
            rgba(
              245,
              239,
              227,
              0.4
            );
        }

        .footer small {
          font-size: 7px;

          color:
            rgba(
              245,
              239,
              227,
              0.25
            );
        }

        /* ================================================
           LIGHTBOX
           ================================================ */

        .lightbox {
          position: fixed;

          inset: 0;

          z-index: 10000;

          display: flex;

          align-items: center;
          justify-content: center;

          padding: 20px;

          background:
            rgba(
              5,
              10,
              8,
              0.96
            );

          animation:
            lightboxIn
            300ms ease
            forwards;
        }

        .lightbox img {
          max-width:
            min(100%, 420px);

          max-height: 85vh;

          object-fit: contain;
        }

        .lightbox-close {
          position: absolute;

          top: 18px;
          right: 18px;

          width: 38px;
          height: 38px;

          border:
            1px solid
            rgba(
              213,
              181,
              118,
              0.5
            );

          border-radius: 50%;

          background:
            transparent;

          color:
            var(--gold-light);

          font-size: 23px;
        }

        /* ================================================
           STAR
           ================================================ */

        .islamic-star {
          position: relative;

          flex:
            0 0 auto;
        }

        .islamic-star::before,
        .islamic-star::after,
        .islamic-star span {
          position: absolute;

          inset: 12%;

          content: "";

          border:
            1px solid
            var(--gold);

          transform:
            rotate(45deg);
        }

        .islamic-star::after {
          transform:
            rotate(22.5deg);
        }

        .islamic-star span:first-child {
          transform:
            rotate(67.5deg);
        }

        .islamic-star span:last-child {
          transform:
            rotate(0deg);
        }

        /* ================================================
           REVEAL
           ================================================ */

        .reveal {
          opacity: 0;

          transition-property:
            opacity,
            transform;

          transition-timing-function:
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .reveal-up {
          transform:
            translateY(28px);
        }

        .reveal-left {
          transform:
            translateX(-28px);
        }

        .reveal-right {
          transform:
            translateX(28px);
        }

        .reveal-scale {
          transform:
            scale(0.94);
        }

        .reveal.is-visible {
          opacity: 1;

          transform:
            translate(0)
            scale(1);
        }

        /* ================================================
           ANIMATIONS
           ================================================ */

        @keyframes introItem {
          from {
            opacity: 0;
            transform:
              translateY(12px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }
        }

        @keyframes introNames {
          from {
            opacity: 0;
            transform:
              translateY(18px)
              scale(0.97);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        @keyframes introButton {
          from {
            opacity: 0;
            transform:
              translateY(14px)
              scale(0.96);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        @keyframes introRule {
          from {
            width: 0;
          }

          to {
            width: 90px;
          }
        }

        @keyframes introGlow {
          0%,
          100% {
            transform:
              scale(0.95);

            opacity: 0.65;
          }

          50% {
            transform:
              scale(1.08);

            opacity: 1;
          }
        }

        @keyframes floatSoft {
          0%,
          100% {
            transform:
              translateY(0)
              rotate(0deg);
          }

          50% {
            transform:
              translateY(-5px)
              rotate(5deg);
          }
        }

        @keyframes introShake {
          0% {
            transform: scale(1);
          }

          35% {
            transform:
              scale(1.008);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes introLoading {
          0%,
          100% {
            opacity: 0.45;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes musicBar {
          0%,
          100% {
            height: 4px;
          }

          50% {
            height: 13px;
          }
        }

        @keyframes marquee {
          from {
            transform:
              translateX(0);
          }

          to {
            transform:
              translateX(-50%);
          }
        }

        @keyframes lightboxIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        /* ================================================
           REDUCED MOTION
           ================================================ */

        @media (
          prefers-reduced-motion: reduce
        ) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration:
              0.01ms !important;

            animation-iteration-count:
              1 !important;

            transition-duration:
              0.01ms !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
        }

        /* ================================================
           SMALL MOBILE
           ================================================ */

        @media (max-width: 360px) {
          .hero {
            padding-left: 18px;
            padding-right: 18px;
          }

          .section {
            padding-left: 19px;
            padding-right: 19px;
          }

          .hero h1 {
            font-size: 48px;
          }

          .person-card {
            grid-template-columns:
              44% 1fr;
          }

          .person-meta h3 {
            font-size: 22px;
          }

          .event-card {
            grid-template-columns:
              35px 1fr;

            padding: 17px;
          }

          .music-control {
            right: 12px;
          }
        }
      `}</style>
    </>
  );
}
