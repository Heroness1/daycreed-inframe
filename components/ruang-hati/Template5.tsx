import { useEffect, useRef, useState } from "react";

const WEDDING = {
  groom: "BUDI",
  bride: "SITI",
  groomFull: "Budi Pratama",
  brideFull: "Siti Rahma",
  date: "14.06.2027",
  dateLong: "Senin, 14 Juni 2027",

  heroImage:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",

  coupleImages: [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85",
  ],

  gallery: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=85",
  ],

  events: [
    {
      type: "AKAD NIKAH",
      date: "Senin, 14 Juni 2027",
      time: "08.00 WIB",
      place: "Kediaman Mempelai Wanita",
      address: "Jl. Pasundan No. 18, Bandung",
    },
    {
      type: "RESEPSI",
      date: "Senin, 14 Juni 2027",
      time: "11.00 – 14.00 WIB",
      place: "Gedung Graha Pasundan",
      address: "Jl. Asia Afrika No. 88, Bandung",
    },
  ],
};

/* =========================================================
   COUNTDOWN
========================================================= */

function useCountdown(targetDate) {
  const calculate = () => {
    const difference = new Date(targetDate).getTime() - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculate);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

/* =========================================================
   REVEAL ANIMATION
========================================================= */

function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("sunda-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: "sunda-from-up",
    left: "sunda-from-left",
    right: "sunda-from-right",
    scale: "sunda-from-scale",
  }[direction];

  return (
    <div
      ref={ref}
      className={`sunda-reveal ${directionClass} ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   MARQUEE COMPONENT (ANIMASI TEKS BERJALAN)
========================================================= */

function MarqueeText({ dark = false }) {
  const ContentGroup = () => (
    <div className="flex w-max items-center text-[10px] uppercase tracking-[0.4em]">
      {[...Array(3)].map((_, i) => (
        <span key={i} className="flex items-center">
          <span className="mx-6">{WEDDING.groom} & {WEDDING.bride}</span>
          <span className={`mx-2 ${dark ? "text-[#D6B878]" : "text-[#B78A43]"}`}>✦</span>
          <span className="mx-6">SILIH ASIH, SILIH ASAH, SILIH ASUH</span>
          <span className={`mx-2 ${dark ? "text-[#D6B878]" : "text-[#B78A43]"}`}>✦</span>
          <span className="mx-6">{WEDDING.date}</span>
          <span className={`mx-2 ${dark ? "text-[#D6B878]" : "text-[#B78A43]"}`}>✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`sunda-marquee-container flex w-full border-y py-4 ${
        dark
          ? "border-[#D6B878]/30 bg-[#283A2F] text-[#D6B878]"
          : "border-[#B78A43]/20 bg-[#F3E8D0] text-[#8B6740]"
      }`}
    >
      <div className="sunda-marquee flex w-max">
        <ContentGroup />
        <ContentGroup />
      </div>
    </div>
  );
}

/* =========================================================
   SPINNING BADGE (STEMPEL PUTAR)
========================================================= */

function SpinningBadge() {
  return (
    <div className="absolute -bottom-8 -right-8 z-30 flex h-28 w-28 items-center justify-center rounded-full border border-[#B78A43]/20 bg-[#F3E8D0] shadow-xl md:h-32 md:w-32">
      <svg viewBox="0 0 100 100" className="sunda-spin absolute inset-0 h-full w-full">
        <path
          id="circlePath"
          d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          fill="none"
        />
        <text className="text-[11px] uppercase tracking-[0.22em] fill-[#B78A43]">
          <textPath href="#circlePath" startOffset="0%">
            THE WEDDING OF BUDI & SITI • 14 JUNI 2027 •
          </textPath>
        </text>
      </svg>
      <div className="font-serif text-[22px] text-[#B78A43] md:text-2xl">B&S</div>
    </div>
  );
}

/* =========================================================
   SVG & PARTICLES DECORATIONS
========================================================= */

function MountainLine() {
  return (
    <svg viewBox="0 0 800 220" className="absolute bottom-0 left-0 w-full opacity-20" preserveAspectRatio="none">
      <path d="M0 190 C70 165 90 170 145 110 C190 60 220 90 265 135 C310 180 335 165 385 105 C430 50 455 75 505 130 C550 180 580 175 630 100 C675 35 710 90 750 125 C775 145 790 150 800 145" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M0 205 C90 185 120 195 180 145 C235 95 255 125 300 155 C350 190 375 185 420 140 C470 90 495 110 540 155 C600 210 625 180 675 130 C720 85 750 120 800 155" fill="none" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}

function GoldParticles() {
  const particles = [
    ["12%", "18%", "2px"], ["82%", "13%", "3px"], ["22%", "48%", "2px"],
    ["91%", "54%", "2px"], ["7%", "72%", "3px"], ["76%", "81%", "2px"],
    ["42%", "88%", "2px"], ["58%", "26%", "2px"],
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map(([left, top, size], index) => (
        <span
          key={index}
          className="sunda-particle absolute rounded-full bg-[#B78A43]"
          style={{ left, top, width: size, height: size, animationDelay: `${index * 0.8}s` }}
        />
      ))}
    </div>
  );
}

function AksaraRail() {
  return (
    <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-5 text-[#B78A43] md:flex">
      <span className="text-[13px] [writing-mode:vertical-rl] tracking-[0.3em]">ᮞᮤᮜᮤᮠ᮪ ᮃᮞᮤᮠ᮪</span>
      <span className="h-16 w-px bg-[#B78A43]/40" />
      <span className="text-[13px] [writing-mode:vertical-rl] tracking-[0.3em]">ᮞᮤᮜᮤᮠ᮪ ᮃᮞᮠ᮪</span>
      <span className="h-16 w-px bg-[#B78A43]/40" />
      <span className="text-[13px] [writing-mode:vertical-rl] tracking-[0.3em]">ᮞᮤᮜᮤᮠ᮪ ᮃᮞᮥ</span>
    </div>
  );
}

function SectionTitle({ eyebrow, title, light = false }) {
  return (
    <div className="mb-12">
      <div className={`mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] ${light ? "text-[#D6B878]" : "text-[#B78A43]"}`}>
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </div>
      <h2 className={`font-serif text-[38px] leading-[0.95] tracking-[-0.03em] ${light ? "text-[#F3E8D0]" : "text-[#39231E]"}`}>
        {title}
      </h2>
    </div>
  );
}

/* =========================================================
   MAIN TEMPLATE
========================================================= */

export default function TemplateSunda() {
  const targetDate = "2027-06-14T09:00:00+07:00";
  const countdown = useCountdown(targetDate);

  return (
    <main className="min-h-screen bg-[#F3E8D0] text-[#39231E]">
      
      {/* =================================================
          HERO
      ================================================= */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F3E8D0] px-5 py-12">
        <GoldParticles />
        <AksaraRail />

        <div className="absolute inset-x-0 bottom-0">
          <MountainLine />
        </div>

        <div className="relative z-10 w-full max-w-[430px]">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="mb-3 text-[9px] uppercase tracking-[0.55em] text-[#8B6740]">
                Sebuah Undangan Pernikahan
              </p>
              <div className="font-serif text-[15px] tracking-[0.2em] text-[#B78A43]">
                ᮝᮤᮜᮥᮏᮨᮀ ᮞᮥᮙ᮪ᮕᮤᮀ
              </div>
            </div>
          </Reveal>

          {/* Hero Image & Ciamik Spinning Badge */}
          <Reveal delay={150} direction="scale">
            <div className="relative mx-auto w-[82%]">
              
              <div className="absolute -inset-2 border border-[#B78A43]/50" />
              <div className="absolute -inset-5 border border-[#B78A43]/15" />

              <div className="relative aspect-[4/5] overflow-hidden">
                {/* Ken Burns Effect pada img */}
                <img
                  src={WEDDING.heroImage}
                  alt="Budi dan Siti"
                  className="sunda-kenburns h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#160C08]/45 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5">
                  <span className="block text-[8px] uppercase tracking-[0.35em] text-white/70">
                    Bandung · Indonesia
                  </span>
                  <span className="mt-1 block font-serif text-lg italic text-white">
                    Sebuah awal yang baru
                  </span>
                </div>
              </div>

              {/* Animasi Spinning Badge */}
              <SpinningBadge />
            </div>
          </Reveal>

          {/* Names */}
          <Reveal delay={300}>
            <div className="relative mt-12 text-center">
              <div className="font-serif text-[58px] leading-[0.82] tracking-[-0.06em] text-[#39231E]">
                {WEDDING.groom}
              </div>
              <div className="my-2 font-serif text-xl italic text-[#B78A43]">&</div>
              <div className="font-serif text-[58px] leading-[0.82] tracking-[-0.06em] text-[#39231E]">
                {WEDDING.bride}
              </div>
            </div>
          </Reveal>

          <Reveal delay={450}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#B78A43]/50" />
              <span className="text-[10px] tracking-[0.3em] text-[#8B6740]">
                {WEDDING.date}
              </span>
              <span className="h-px w-12 bg-[#B78A43]/50" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Animasi Marquee 1 */}
      <MarqueeText dark />

      {/* =================================================
          QUOTE
      ================================================= */}
      <section className="relative overflow-hidden bg-[#5A1F24] px-6 py-28 text-[#F3E8D0]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-[-20%] top-[-20%] h-[350px] w-[350px] rounded-full border border-[#D6B878]" />
          <div className="absolute right-[-20%] bottom-[-20%] h-[350px] w-[350px] rounded-full border border-[#D6B878]" />
        </div>

        <Reveal className="relative mx-auto max-w-[430px] text-center">
          <div className="mb-8 text-3xl text-[#D6B878]">ᮞᮤᮜᮤᮠ᮪</div>
          <p className="font-serif text-[30px] italic leading-[1.15]">
            “Silih asih,
            <br /> silih asah,
            <br /> silih asuh.”
          </p>
          <div className="mx-auto mt-8 h-px w-10 bg-[#D6B878]" />
          <p className="mt-6 text-[11px] leading-6 tracking-wide text-[#F3E8D0]/65">
            Saling mengasihi, saling belajar,
            <br /> dan saling menjaga.
          </p>
        </Reveal>
      </section>

      {/* =================================================
          INVITATION
      ================================================= */}
      <section className="bg-[#F3E8D0] px-6 py-28">
        <div className="mx-auto max-w-[430px]">
          <Reveal>
            <SectionTitle eyebrow="Dengan penuh kebahagiaan" title="Kami mengundang Anda" />
          </Reveal>

          <Reveal delay={100}>
            <div className="border-l border-[#B78A43]/50 pl-6">
              <p className="font-serif text-[22px] leading-9 text-[#39231E]">
                Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan menjadi bagian dari hari bahagia kami.
              </p>
              <p className="mt-6 text-[12px] leading-6 text-[#72594D]">
                Kehadiran dan doa restu Anda merupakan kebahagiaan yang begitu berarti bagi kami.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          COUPLE
      ================================================= */}
      <section className="bg-[#283A2F] px-5 py-28 text-[#F3E8D0]">
        <div className="mx-auto max-w-[430px]">
          <Reveal>
            <SectionTitle eyebrow="Mereka yang dipertemukan" title="Dua hati" light />
          </Reveal>

          <div className="grid grid-cols-2 gap-3">
            <Reveal direction="left">
              <div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={WEDDING.coupleImages[0]} alt={WEDDING.groomFull} className="sunda-kenburns h-full w-full object-cover grayscale-[15%]" />
                  <div className="absolute inset-0 border border-[#D6B878]/40" />
                </div>
                <div className="mt-5">
                  <p className="font-serif text-2xl">{WEDDING.groom}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#D6B878]">Mempelai Pria</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} direction="right">
              <div className="pt-12">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={WEDDING.coupleImages[1]} alt={WEDDING.brideFull} className="sunda-kenburns h-full w-full object-cover grayscale-[15%]" />
                  <div className="absolute inset-0 border border-[#D6B878]/40" />
                </div>
                <div className="mt-5">
                  <p className="font-serif text-2xl">{WEDDING.bride}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#D6B878]">Mempelai Wanita</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <p className="mt-14 text-center font-serif text-[18px] italic leading-8 text-[#F3E8D0]/80">
              “Dua hate patepang,
              tuluy ngahiji dina hiji carita.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          STORY
      ================================================= */}
      <section className="bg-[#F3E8D0] px-6 py-28">
        <div className="mx-auto max-w-[430px]">
          <Reveal>
            <SectionTitle eyebrow="Perjalanan kami" title="Sebuah cerita" />
          </Reveal>

          <div className="relative ml-2 border-l border-[#B78A43]/40">
            {[
              { year: "2022", title: "Pertama Bertemu", text: "Sebuah pertemuan sederhana yang ternyata menjadi awal dari cerita panjang." },
              { year: "2024", title: "Bertumbuh Bersama", text: "Belajar memahami, menjaga, dan berjalan melewati berbagai cerita bersama." },
              { year: "2027", title: "Satu Tujuan", text: "Hari ketika dua perjalanan memilih untuk menjadi satu." },
            ].map((item, index) => (
              <Reveal key={item.year} delay={index * 120}>
                <div className="relative mb-12 pl-8">
                  <span className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full border border-[#B78A43] bg-[#F3E8D0]" />
                  <span className="text-[10px] tracking-[0.3em] text-[#B78A43]">{item.year}</span>
                  <h3 className="mt-2 font-serif text-[25px]">{item.title}</h3>
                  <p className="mt-3 text-[12px] leading-6 text-[#72594D]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          WEDDING DAY
      ================================================= */}
      <section className="relative overflow-hidden bg-[#5A1F24] px-6 py-28 text-[#F3E8D0]">
        <MountainLine />

        <div className="relative z-10 mx-auto max-w-[430px]">
          <Reveal>
            <SectionTitle eyebrow="Catat tanggalnya" title="Hari bahagia" light />
          </Reveal>

          {/* Date circle with Pulse Effect */}
          <Reveal delay={100} direction="scale">
            <div className="relative mx-auto mb-14 h-52 w-52">
              {/* Animasi Pulse Ring */}
              <div className="sunda-pulse-ring absolute inset-0 rounded-full border border-[#D6B878]" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full border border-[#D6B878]/50 bg-[#5A1F24]">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#D6B878]">Juni</span>
                <span className="font-serif text-[76px] leading-none">14</span>
                <span className="mt-1 text-[10px] tracking-[0.3em]">2027</span>
              </div>
            </div>
          </Reveal>

          {/* Countdown */}
          <Reveal delay={200}>
            <div className="mb-16 grid grid-cols-4 border-y border-[#D6B878]/25 py-5">
              {[
                ["Hari", countdown.days],
                ["Jam", countdown.hours],
                ["Menit", countdown.minutes],
                ["Detik", countdown.seconds],
              ].map(([label, value]) => (
                <div key={label} className="text-center">
                  <div className="font-serif text-2xl">{String(value).padStart(2, "0")}</div>
                  <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-[#D6B878]">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Events */}
          <div className="space-y-4">
            {WEDDING.events.map((event, index) => (
              <Reveal key={event.type} delay={index * 120}>
                <article className="border border-[#D6B878]/30 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] tracking-[0.3em] text-[#D6B878]">{event.type}</span>
                    <span className="font-serif text-xl">0{index + 1}</span>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-serif text-2xl">{event.place}</h3>
                    <p className="mt-3 text-[11px] text-[#F3E8D0]/65">{event.date}</p>
                    <p className="mt-1 text-[11px] text-[#F3E8D0]/65">{event.time}</p>
                    <p className="mt-4 text-[11px] leading-5 text-[#F3E8D0]/50">{event.address}</p>
                  </div>
                  <button className="mt-6 border border-[#D6B878]/40 px-4 py-2 text-[9px] uppercase tracking-[0.25em] transition hover:bg-[#D6B878] hover:text-[#5A1F24]">
                    Lihat Lokasi
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          SUNDA QUOTE
      ================================================= */}
      <section className="bg-[#F3E8D0] px-6 py-28">
        <Reveal className="mx-auto max-w-[430px] text-center">
          <div className="mb-8 font-serif text-[32px] text-[#B78A43]">ᮙᮥᮌᮤᮃ</div>
          <p className="font-serif text-[27px] italic leading-[1.25] text-[#39231E]">
            “Mugia kanyaah ieu
            <br /> langgeng salalawasna,
            <br /> dugi ka sepuh babarengan.”
          </p>
          <p className="mx-auto mt-7 max-w-[290px] text-[11px] leading-6 text-[#72594D]">
            Semoga cinta ini langgeng selamanya, sampai kita menua bersama.
          </p>
        </Reveal>
      </section>

      {/* =================================================
          GALLERY
      ================================================= */}
      <section className="bg-[#283A2F] px-5 py-28">
        <div className="mx-auto max-w-[430px]">
          <Reveal>
            <SectionTitle eyebrow="Potret perjalanan" title="Momen yang kami simpan" light />
          </Reveal>

          <div className="grid grid-cols-2 gap-3">
            {WEDDING.gallery.map((image, index) => (
              <Reveal key={image} delay={index * 100} direction="scale">
                <div className={`relative overflow-hidden ${index === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"}`}>
                  <img
                    src={image}
                    alt={`Momen ${index + 1}`}
                    className="h-full w-full object-cover transition duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 border border-[#D6B878]/25" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Animasi Marquee 2 */}
      <MarqueeText />

      {/* =================================================
          RSVP
      ================================================= */}
      <section className="bg-[#F3E8D0] px-6 py-28">
        <div className="mx-auto max-w-[430px]">
          <Reveal>
            <SectionTitle eyebrow="Kehadiran Anda" title="Konfirmasi Kehadiran" />
          </Reveal>

          <Reveal delay={100}>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Nama lengkap"
                className="w-full border-b border-[#B78A43]/40 bg-transparent px-0 py-4 text-sm outline-none placeholder:text-[#8B7166]"
              />
              <select className="w-full border-b border-[#B78A43]/40 bg-transparent px-0 py-4 text-sm outline-none" defaultValue="">
                <option value="" disabled>Konfirmasi kehadiran</option>
                <option>Hadir</option>
                <option>Tidak dapat hadir</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tulis ucapan dan doa..."
                className="w-full resize-none border-b border-[#B78A43]/40 bg-transparent px-0 py-4 text-sm outline-none placeholder:text-[#8B7166]"
              />
              <button
                type="submit"
                className="mt-5 w-full bg-[#5A1F24] px-6 py-4 text-[10px] uppercase tracking-[0.35em] text-[#F3E8D0] transition hover:bg-[#283A2F]"
              >
                Kirim Konfirmasi
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          CLOSING
      ================================================= */}
      <section className="relative overflow-hidden bg-[#160C08] px-6 py-32 text-center text-[#F3E8D0]">
        <GoldParticles />

        <div className="relative z-10 mx-auto max-w-[430px]">
          <Reveal>
            <div className="mb-8 text-2xl text-[#D6B878]">ᮞᮤᮜᮤᮠ᮪ ᮃᮞᮤᮠ᮪</div>
            <p className="font-serif text-[30px] italic leading-[1.2]">
              Sampai bertemu
              <br /> di hari bahagia kami.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="my-12 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#D6B878]/40" />
              <span className="text-[9px] tracking-[0.3em] text-[#D6B878]">{WEDDING.date}</span>
              <span className="h-px w-12 bg-[#D6B878]/40" />
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="font-serif text-[42px] leading-none">
              {WEDDING.groom}
              <span className="mx-2 text-[#D6B878]">&</span>
              {WEDDING.bride}
            </div>
            <p className="mt-8 text-[9px] uppercase tracking-[0.4em] text-[#F3E8D0]/40">
              Dengan penuh cinta
            </p>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          BOTTOM NAV
      ================================================= */}
      <nav className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-[398px] -translate-x-1/2 items-center justify-around rounded-full border border-[#B78A43]/20 bg-[#160C08]/90 px-3 py-3 shadow-2xl backdrop-blur-xl">
        {[
          ["⌂", "Mula"],
          ["♡", "Cerita"],
          ["◌", "Acara"],
          ["✦", "RSVP"],
        ].map(([icon, label]) => (
          <button key={label} className="flex flex-col items-center gap-1 px-4 text-[#F3E8D0]/70 transition hover:text-[#D6B878]">
            <span className="text-sm">{icon}</span>
            <span className="text-[7px] uppercase tracking-[0.2em]">{label}</span>
          </button>
        ))}
      </nav>

      {/* =================================================
          STYLES (TAMBAHAN KEYFRAMES MARQUEE DLL ADA DI SINI)
      ================================================= */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #F3E8D0;
        }

        .sunda-reveal {
          opacity: 0;
          transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1), transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--delay);
        }

        .sunda-from-up { transform: translateY(35px); }
        .sunda-from-left { transform: translateX(-35px); }
        .sunda-from-right { transform: translateX(35px); }
        .sunda-from-scale { transform: scale(0.94); }

        .sunda-visible {
          opacity: 1;
          transform: translate(0) scale(1);
        }

        /* --- ANIMASI FLOATING PARTICLES --- */
        .sunda-particle {
          opacity: 0;
          animation: sundaFloat 5s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(183, 138, 67, 0.7);
        }
        @keyframes sundaFloat {
          0%, 100% { opacity: 0; transform: translateY(10px) scale(0.7); }
          30% { opacity: 0.8; }
          50% { opacity: 1; transform: translateY(-18px) scale(1); }
          80% { opacity: 0.3; }
        }

        /* --- NEW: ANIMASI MARQUEE BERJALAN --- */
        .sunda-marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }
        .sunda-marquee {
          animation: marquee-scroll 25s linear infinite;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Scroll hingga separuh panjangnya (looping sempurna) */
        }

        /* --- NEW: ANIMASI SPIN SLOW (BADGE) --- */
        .sunda-spin {
          animation: spin-slow 15s linear infinite;
          transform-origin: center;
        }
        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }

        /* --- NEW: KEN BURNS EFFECT --- */
        .sunda-kenburns {
          animation: kenburns 20s ease-in-out infinite alternate;
        }
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.12); }
        }

        /* --- NEW: PULSE RING --- */
        .sunda-pulse-ring {
          animation: pulse-ring 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .sunda-reveal { opacity: 1; transform: none; transition: none; }
          .sunda-particle, .sunda-marquee, .sunda-spin, .sunda-kenburns, .sunda-pulse-ring { animation: none; }
        }
      `}</style>
    </main>
  );
}
