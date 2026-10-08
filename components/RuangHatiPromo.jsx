import Link from "next/link";

export default function RuangHatiPromo() {
  return (
    <section id="ruang-hati" className="relative overflow-hidden border-y border-[#d6ae72]/10 bg-[#0b0907] px-6 py-24 text-white">
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#c18b4d]/10 blur-[100px]" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-orange-500/5 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <span className="inline-flex rounded-full border border-[#d6ae72]/20 bg-[#d6ae72]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.22em] text-[#d6ae72]">
            Ruang Hati • Digital Wedding
          </span>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Bukan sekadar undangan.
            <br />
            <span className="text-[#d6ae72]">Satu ruang untuk cerita kalian.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Buat website pernikahan yang personal, elegan, dan nyaman dibuka di
            HP. Pilih desain, kirim data, lalu biarkan tim Subur Maju menyiapkannya.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/ruang-hati"
              className="rounded-2xl bg-[#d6ae72] px-7 py-4 text-center text-sm font-bold text-[#17110b] transition hover:-translate-y-0.5 hover:bg-[#ebc98e]"
            >
              Lihat Ruang Hati
            </Link>
            <a
              href="https://wa.me/6282246926544?text=Halo%20Kak%2C%20saya%20tertarik%20dengan%20website%20pernikahan%20Ruang%20Hati."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[.03] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/[.06]"
            >
              Tanya Harga
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[#d6ae72]/5 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] border border-[#d6ae72]/20 bg-gradient-to-br from-[#342719] via-[#15110d] to-black p-5 shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center rounded-[1.7rem] border border-[#d6ae72]/20 text-center">
              <span className="text-5xl text-[#d6ae72]">♡</span>
              <span className="mt-8 text-[10px] uppercase tracking-[.4em] text-white/35">
                Your Wedding Website
              </span>
              <h3 className="mt-4 font-serif text-4xl">Ruang Hati</h3>
              <p className="mt-3 max-w-[220px] text-xs leading-6 text-white/45">
                Personal. Elegant. Made for your story.
              </p>
              <div className="mt-10 h-px w-16 bg-[#d6ae72]/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
