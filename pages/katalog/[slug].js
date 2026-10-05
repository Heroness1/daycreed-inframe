import Head from "next/head";
import Link from "next/link";
import { dataProduk } from "../../data/printData";
import { trackConversion } from "../../components/Analytics";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export async function getStaticPaths() {
  return {
    paths: dataProduk.map((produk) => ({ params: { slug: slugify(produk.nama) } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const produk = dataProduk.find((item) => slugify(item.nama) === params.slug);
  return { props: { produk } };
}

export default function ProdukLanding({ produk }) {
  const whatsappText = `Halo Kak, saya mau tanya harga untuk ${produk.nama}. Mohon info harga, pilihan bahan/ukuran, minimal order, dan estimasi pengerjaannya ya.`;
  const whatsappUrl = `https://wa.me/6282246926544?text=${encodeURIComponent(whatsappText)}`;
  const handleWhatsAppClick = () => {
    trackConversion("whatsapp_click", {
      event_category: "lead_generation",
      event_label: produk.nama,
      product_name: produk.nama,
    });
  };

  return (
    <>
      <Head>
        <title>{produk.nama} | Subur Maju Printing</title>
        <meta
          name="description"
          content={`${produk.nama} custom di Subur Maju Printing. ${produk.deskripsi} Tanya harga dan konsultasi melalui WhatsApp.`}
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={`${produk.nama} | Subur Maju Printing`} />
        <meta property="og:description" content={produk.deskripsi} />
        <meta property="og:image" content={produk.gambar} />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white">
        <div className="absolute inset-x-0 top-0 h-[520px] overflow-hidden pointer-events-none">
          <div className="absolute left-1/2 top-[-180px] -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-orange-500/10 blur-[130px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 py-6 md:px-8 md:py-10">
          <Link
            href="/#katalog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-orange-400 transition-colors"
          >
            <span aria-hidden="true">←</span> Kembali ke katalog
          </Link>

          <section className="grid lg:grid-cols-[1.05fr_.95fr] gap-8 lg:gap-14 items-center pt-10 md:pt-16">
            <div className="order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
                  {produk.kategori}
                </span>
                {produk.badge && (
                  <span className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold">
                    {produk.badge}
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
                {produk.nama}
              </h1>

              <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-400 max-w-2xl">
                {produk.deskripsi}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-400 px-6 py-4 text-slate-950 font-extrabold shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5"
                >
                  Tanya Harga via WhatsApp <span aria-hidden="true">↗</span>
                </a>
                <Link
                  href="/#katalog"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/70 hover:bg-slate-900 px-6 py-4 text-slate-200 font-bold transition-colors"
                >
                  Lihat Produk Lain
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-9 max-w-xl">
                {[
                  ["Custom", "Sesuai kebutuhan"],
                  ["Konsultasi", "Dibantu tim kami"],
                  ["WhatsApp", "Respon cepat"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                    <div className="text-sm font-bold text-white">{title}</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-500">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-2xl shadow-black/30">
                <img
                  src={produk.gambar}
                  alt={produk.nama}
                  className="w-full aspect-[16/10] object-cover"
                  priority="true"
                />
              </div>
            </div>
          </section>

          <section className="mt-20 md:mt-28 border-t border-slate-900 pt-10 pb-28">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Butuh bantuan?</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-black">Belum tahu spesifikasi yang cocok?</h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Kirim ukuran, jumlah, atau contoh desain yang kamu punya. Tim Subur Maju Printing bisa bantu menentukan pilihan yang sesuai kebutuhan.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="mt-6 inline-flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors"
              >
                Konsultasi sekarang <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-slate-950/95 px-4 py-3.5 shadow-2xl backdrop-blur-xl"
        >
          <span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Butuh harga?</span>
            <span className="block text-sm font-bold">Tanya via WhatsApp</span>
          </span>
          <span className="rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold">Chat</span>
        </a>
      </main>
    </>
  );
}
