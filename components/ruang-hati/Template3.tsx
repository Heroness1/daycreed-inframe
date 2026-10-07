import { useEffect, useRef, useState } from "react";

/* =========================================================
   THE EDITORIAL LETTER
   USA / NEW YORK MAGAZINE STYLE + EUROPEAN MARQUEE
========================================================= */

const WEDDING = {
  groom: {
    name: "Budi",
    fullName: "M. Budi",
    role: "Groom",
    photo:
      "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?w=800&h=1000&fit=crop",
  },

  bride: {
    name: "Siti",
    fullName: "S. Rahayu",
    role: "Bride",
    photo:
      "https://images.unsplash.com/photo-1563808599481-34a342e44508?w=800&h=1000&fit=crop",
  },

  date: "14",
  month: "JUNE",
  year: "2027",
  fullDateUS: "June 14, 2027",

  weddingDate: "2027-06-14T09:00:00",

  hero:
    "https://images.unsplash.com/photo-1596457221755-b96bc3a6df18?w=1000&h=1400&fit=crop",

  story: {
    eyebrow: "A note from the couple",
    title: "It started with a simple hello.",
    text:
      "Some stories arrive quietly. Ours began with a conversation, grew through countless little moments, and eventually became something we could no longer imagine living without. This is the next chapter.",
  },

  events: [
    {
      number: "01",
      type: "The Ceremony",
      title: "Akad Nikah",
      date: "Monday, June 14, 2027",
      time: "8:00 AM — 10:00 AM",
      venue: "Masjid Al-Hidayah",
      city: "South Jakarta",
      maps: "https://maps.google.com/",
    },
    {
      number: "02",
      type: "The Celebration",
      title: "Reception",
      date: "Monday, June 14, 2027",
      time: "11:00 AM — 2:00 PM",
      venue: "The Garden Ballroom",
      city: "Central Jakarta",
      maps: "https://maps.google.com/",
    },
  ],
};

const gallery = [
  {
    url: "https://images.unsplash.com/photo-1774814327605-830b3fbfdf4d?w=900&h=1100&fit=crop",
    alt: "Couple portrait",
    className: "w-[85%] ml-auto border border-[#111111] p-1",
  },
  {
    url: "https://images.unsplash.com/photo-1759309607967-9e56fd347acc?w=700&h=700&fit=crop",
    alt: "Wedding detail",
    className: "w-[55%] mt-[-60px] border border-[#111111] p-1 bg-[#F4EFEA]",
  },
  {
    url: "https://images.unsplash.com/photo-1774814325035-49a997534c48?w=700&h=900&fit=crop",
    alt: "Wedding moment",
    className: "w-[60%] ml-auto mt-[-40px] border border-[#111111] p-1",
  },
  {
    url: "https://images.unsplash.com/photo-1774814327306-9d7d3062ecf7?w=900&h=1100&fit=crop",
    alt: "Editorial portrait",
    className: "w-[100%] mt-12 border border-[#111111] p-1",
  },
];

/* =========================================================
   COUNTDOWN HOOK
========================================================= */
function useCountdown(targetDate) {
  const calculate = () => {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };

    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculate);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculate), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

/* =========================================================
   REVEAL OBSERVER HOOK
========================================================= */
function useReveal({ threshold = 0.12, rootMargin = "0px 0px -50px 0px" } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}

function Reveal({ children, delay = 0, y = 30, duration = 1000, className = "" }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "opacity-100" : "opacity-0"} ${className}`}
      style={{
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   EUROPEAN MARQUEE COMPONENT
========================================================= */
function MarqueeEU({ reverse = false, dark = false }) {
  const textColor = dark ? "text-[#F4EFEA]" : "text-[#111111]";
  const bgColor = dark ? "bg-[#111111]" : "bg-[#F4EFEA]";
  const borderColor = dark ? "border-[#F4EFEA]/20" : "border-[#111111]";

  const Phrase = () => (
    <div className="flex items-center">
      <span className="mx-6 font-serif text-sm italic tracking-widest">A Celebration of Love</span>
      <span className="mx-2 text-[9px] opacity-40">✦</span>
      <span className="mx-6 text-[10px] font-bold uppercase tracking-[0.4em]">{WEDDING.groom.name} & {WEDDING.bride.name}</span>
      <span className="mx-2 text-[9px] opacity-40">✦</span>
      <span className="mx-6 text-[10px] font-bold uppercase tracking-[0.4em]">{WEDDING.fullDateUS}</span>
      <span className="mx-2 text-[9px] opacity-40">✦</span>
    </div>
  );

  return (
    <div className={`flex w-full overflow-hidden border-y py-4 ${bgColor} ${borderColor} ${textColor}`}>
      <div className={`flex w-max whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN APP
========================================================= */
export default function App() {
  const countdown = useCountdown(WEDDING.weddingDate);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", attend: "", wishes: "" });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.attend) return;
    setSubmitted(true);
  };

  return (
    <main className="mx-auto min-h-screen max-w-[430px] overflow-x-hidden bg-[#F4EFEA] text-[#111111] selection:bg-[#111111] selection:text-[#F4EFEA]">
      
      {/* Paper Texture Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[999] opacity-[0.04]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")' }}
      />

      {/* =====================================================
          01 — HERO (NEW YORK TIMES EDITORIAL VIBE)
      ===================================================== */}
      <section className="relative min-h-[100svh] px-6 pb-8 pt-8">
        
        {/* MAG HEADER */}
        <div className="relative z-30 flex items-end justify-between border-b-2 border-[#111111] pb-3">
          <div>
            <p className="text-[7px] font-bold uppercase tracking-[0.4em] opacity-60">The Wedding Issue</p>
            <p className="mt-1 font-serif text-sm font-medium italic">Vol. I — No. 02</p>
          </div>
          <div className="text-right">
            <p className="text-[7px] font-bold uppercase tracking-[0.4em] opacity-60">Exclusive</p>
            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em]">{WEDDING.fullDateUS}</p>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative mt-8 h-[55vh] min-h-[420px] w-full overflow-hidden border border-[#111111] bg-[#DED5C8] p-1">
          <img
            src={WEDDING.hero}
            alt="Wedding cover"
            onLoad={() => setHeroLoaded(true)}
            className={`h-full w-full object-cover object-center grayscale-[20%] transition-all duration-[2000ms] ${
              heroLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />
          {/* Overlay text on image */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white">
            <span className="text-[7px] font-bold uppercase tracking-[0.4em] drop-shadow-md">A New Beginning</span>
            <span className="font-serif text-xs italic drop-shadow-md">B & S</span>
          </div>
        </div>

        {/* BOLD TYPOGRAPHY */}
        <div className="relative z-20 mt-8">
          <Reveal>
            <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.35em] text-[#111111]/60">
              Together with their families
            </p>
            <h1 className="font-serif text-[18vw] font-medium leading-[0.8] tracking-[-0.05em] uppercase">
              Budi
            </h1>
            <h1 className="ml-[15%] font-serif text-[18vw] font-medium leading-[0.8] tracking-[-0.05em] uppercase">
              <span className="mr-3 font-sans font-light italic text-[#111111]/50">&</span>Siti
            </h1>
          </Reveal>
        </div>

      </section>

      {/* =====================================================
          EUROPEAN MARQUEE (DARK)
      ===================================================== */}
      <MarqueeEU dark />

      {/* =====================================================
          02 — STORY (MAGAZINE COLUMN)
      ===================================================== */}
      <section className="px-6 py-24">
        <Reveal>
          <div className="mb-12 flex items-center justify-between border-b border-[#111111] pb-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]">02</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#111111]/50">Editorial</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.4em] text-[#111111]">
            {WEDDING.story.eyebrow}
          </p>
          <h2 className="font-serif text-[42px] leading-[1.05] tracking-[-0.03em]">
            {WEDDING.story.title}
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 ml-auto w-[85%] border-l-2 border-[#111111] pl-5">
            <p className="text-[12px] uppercase leading-[1.8] tracking-[0.05em] text-[#111111]/80">
              <span className="float-left mr-2 font-serif text-5xl leading-none">{WEDDING.story.text.charAt(0)}</span>
              {WEDDING.story.text.substring(1)}
            </p>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          03 — PORTRAITS
      ===================================================== */}
      <section className="bg-[#111111] px-6 py-24 text-[#F4EFEA]">
        <Reveal>
          <div className="mb-16 border-b border-[#F4EFEA]/30 pb-4 text-center">
            <span className="font-serif text-[60px] italic leading-none tracking-tight">The Couple</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          <Reveal>
            <article>
              <div className="aspect-[3/4] overflow-hidden border border-[#F4EFEA]/20 bg-[#222]">
                <img src={WEDDING.groom.photo} alt={WEDDING.groom.fullName} loading="lazy" className="h-full w-full object-cover grayscale transition duration-1000 hover:scale-105" />
              </div>
              <div className="mt-4 border-t border-[#F4EFEA]/30 pt-2 text-center">
                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#F4EFEA]/50">{WEDDING.groom.role}</p>
                <h3 className="mt-1 font-serif text-2xl uppercase tracking-widest">{WEDDING.groom.name}</h3>
              </div>
            </article>
          </Reveal>

          <Reveal delay={200}>
            <article className="pt-20">
              <div className="aspect-[3/4] overflow-hidden border border-[#F4EFEA]/20 bg-[#222]">
                <img src={WEDDING.bride.photo} alt={WEDDING.bride.fullName} loading="lazy" className="h-full w-full object-cover grayscale transition duration-1000 hover:scale-105" />
              </div>
              <div className="mt-4 border-t border-[#F4EFEA]/30 pt-2 text-center">
                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#F4EFEA]/50">{WEDDING.bride.role}</p>
                <h3 className="mt-1 font-serif text-2xl uppercase tracking-widest">{WEDDING.bride.name}</h3>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          04 — GIANT DATE & COUNTDOWN
      ===================================================== */}
      <section className="overflow-hidden border-b-2 border-[#111111] px-6 py-24">
        <Reveal>
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-60">The Date</p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8">
            <p className="font-serif text-[140px] font-medium leading-[0.75] tracking-[-0.06em]">
              {WEDDING.date}
            </p>
            <div className="mt-8 flex items-end justify-between border-t border-[#111111] pt-4">
              <div>
                <p className="font-serif text-5xl uppercase tracking-wider">{WEDDING.month}</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.4em] opacity-70">{WEDDING.year}</p>
              </div>
              <p className="text-right text-[8px] font-bold uppercase leading-loose tracking-[0.3em] opacity-70">
                New York Time<br />EST. 2027
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-16 grid grid-cols-4 divide-x divide-[#111111]/20 border-y border-[#111111] py-6">
            {[
              [countdown.days, "Days"], [countdown.hours, "Hrs"],
              [countdown.mins, "Min"], [countdown.secs, "Sec"],
            ].map(([value, label], idx) => (
              <div key={label} className={`text-center ${idx === 0 ? "pl-0" : ""} ${idx === 3 ? "pr-0" : ""}`}>
                <p className="font-serif text-3xl tabular-nums tracking-tighter">{String(value).padStart(2, "0")}</p>
                <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.3em] opacity-50">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          05 — DETAILS (GRID LIST)
      ===================================================== */}
      <section className="px-6 py-24">
        <Reveal>
          <div className="mb-14 flex items-center justify-between border-b border-[#111111] pb-4">
            <span className="font-serif text-3xl uppercase tracking-widest">Details</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#111111]/50">05</span>
          </div>
        </Reveal>

        <div className="space-y-12">
          {WEDDING.events.map((event, index) => (
            <Reveal key={event.number} delay={index * 150}>
              <article className="relative grid grid-cols-[1fr_2fr] items-start gap-4">
                <div>
                  <span className="font-serif text-4xl italic text-[#111111]/20">{event.number}</span>
                  <p className="mt-4 text-[7px] font-bold uppercase tracking-[0.4em]">{event.type}</p>
                </div>
                
                <div className="border-l border-[#111111]/20 pl-4">
                  <h3 className="font-serif text-2xl uppercase tracking-wide">{event.title}</h3>
                  <div className="mt-4 space-y-1 text-[10px] font-bold uppercase leading-relaxed tracking-[0.15em] opacity-80">
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p className="pt-2">{event.venue}</p>
                    <p className="opacity-60">{event.city}</p>
                  </div>
                  <a href={event.maps} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block border-b border-[#111111] pb-1 text-[8px] font-bold uppercase tracking-[0.3em] transition-opacity hover:opacity-50">
                    View Location ↗
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          EUROPEAN MARQUEE (LIGHT)
      ===================================================== */}
      <MarqueeEU reverse />

      {/* =====================================================
          06 — ARCHIVE (EDITORIAL GALLERY)
      ===================================================== */}
      <section className="px-6 py-24">
        <Reveal>
          <div className="mb-16 flex items-end justify-between border-b border-[#111111] pb-4">
            <h2 className="font-serif text-4xl uppercase tracking-widest">Archive</h2>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#111111]/50">Gallery</p>
          </div>
        </Reveal>

        <div>
          {gallery.map((photo, index) => (
            <Reveal key={photo.url} delay={index * 100} y={45}>
              <figure className={`overflow-hidden grayscale-[30%] ${photo.className}`}>
                <img src={photo.url} alt={photo.alt} loading="lazy" className="block w-full object-cover transition duration-1000 hover:scale-105 hover:grayscale-0" />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          07 — RSVP (MINIMALIST FORM)
      ===================================================== */}
      <section className="bg-[#111111] px-6 py-24 text-[#F4EFEA]">
        <Reveal>
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-50">07 / RSVP</p>
          <h2 className="mt-6 font-serif text-5xl uppercase leading-[0.9] tracking-widest">
            RSVP
          </h2>
          <div className="mt-6 h-px w-full bg-[#F4EFEA]/20" />
        </Reveal>

        {submitted ? (
          <Reveal delay={150}>
            <div className="mt-14 border border-[#F4EFEA]/30 p-8 text-center">
              <p className="font-serif text-3xl italic">Thank you.</p>
              <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.3em] opacity-60">Your reply is noted, {form.name}.</p>
            </div>
          </Reveal>
        ) : (
          <form onSubmit={handleSubmit} className="mt-14 space-y-12">
            <div>
              <label htmlFor="name" className="mb-3 block text-[8px] font-bold uppercase tracking-[0.4em] opacity-70">Guest Name</label>
              <input
                id="name" type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="ENTER YOUR FULL NAME" required
                className="w-full border-b border-[#F4EFEA]/30 bg-transparent py-3 font-serif text-xl uppercase tracking-widest outline-none placeholder:text-[#F4EFEA]/20 focus:border-[#F4EFEA]"
              />
            </div>

            <div>
              <label htmlFor="attendance" className="mb-3 block text-[8px] font-bold uppercase tracking-[0.4em] opacity-70">Attendance</label>
              <select
                id="attendance" value={form.attend} onChange={(e) => handleChange("attend", e.target.value)} required
                className="w-full border-b border-[#F4EFEA]/30 bg-transparent py-3 font-serif text-xl uppercase tracking-widest outline-none [&>option]:bg-[#111111]"
              >
                <option value="" disabled>SELECT ATTENDANCE</option>
                <option value="yes">JOYFULLY ACCEPT</option>
                <option value="no">REGRETFULLY DECLINE</option>
              </select>
            </div>

            <div>
              <label htmlFor="wishes" className="mb-3 block text-[8px] font-bold uppercase tracking-[0.4em] opacity-70">Message</label>
              <textarea
                id="wishes" rows={3} value={form.wishes} onChange={(e) => handleChange("wishes", e.target.value)} placeholder="WRITE A MESSAGE..."
                className="w-full resize-none border-b border-[#F4EFEA]/30 bg-transparent py-3 font-serif text-xl uppercase tracking-widest outline-none placeholder:text-[#F4EFEA]/20 focus:border-[#F4EFEA]"
              />
            </div>

            <button type="submit" className="w-full bg-[#F4EFEA] px-6 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111] transition duration-300 hover:bg-[#DED5C8]">
              Submit Reply
            </button>
          </form>
        )}
      </section>

      {/* =====================================================
          08 — CLOSING (MAGAZINE BACK COVER)
      ===================================================== */}
      <section className="relative flex min-h-[85svh] flex-col justify-between overflow-hidden px-6 py-10">
        <Reveal>
          <div className="flex justify-between border-b-2 border-[#111111] pb-3 text-[8px] font-bold uppercase tracking-[0.4em]">
            <span>End of Issue</span>
            <span>2027</span>
          </div>
        </Reveal>

        <div className="text-center">
          <Reveal delay={120}>
            <h2 className="font-serif text-[22vw] leading-[0.8] tracking-[-0.05em] uppercase">
              Budi<br /><span className="italic text-[#111111]/40">&</span> Siti
            </h2>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="flex items-end justify-between border-t-2 border-[#111111] pt-4">
            <p className="max-w-[200px] text-[8px] font-bold uppercase leading-[1.8] tracking-[0.3em] opacity-70">
              Thank you for being part of our story.
            </p>
            <p className="font-serif text-3xl font-medium tracking-tight">
              B&S
            </p>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          ANIMATION STYLES
      ===================================================== */}
      <style jsx global>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee-scroll 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-scroll-reverse 25s linear infinite;
        }

        /* Prevent animation for users preferring reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
