import Head from "next/head";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Subur Maju Printing</title>

        <meta
          name="description"
          content="Percetakan 24 Jam, Digital Printing, Hardcover Skripsi Termurah."
        />
      </Head>

      <main className="min-h-screen bg-white text-black">

        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center gap-3">
            <img
              src="/avatar.png"
              alt="Subur Maju Printing"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h2 className="font-bold">
                Subur Maju Printing
              </h2>

              <p className="text-xs text-gray-500">
                Digital Printing
              </p>
            </div>
          </div>

          <button className="text-3xl">
            ☰
          </button>
        </nav>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>

              <p className="text-green-600 font-semibold mb-3">
                Buka 24 Jam
              </p>

              <h1 className="text-5xl font-bold leading-tight mb-6">
                <Typewriter
                  options={{
                    strings: [
                      "Percetakan 24 Jam",
                      "Digital Printing",
                      "Hardcover Skripsi Termurah",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              <p className="text-gray-600 text-lg">
                Melayani cetak skripsi, banner,
                stiker, brosur, undangan dan berbagai
                kebutuhan percetakan lainnya.
              </p>

              <div className="mt-8 flex gap-4">

                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Order Via WhatsApp
                  </button>
                </a>

                <a href="/testing">
                  <button className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition">
                    Lihat Layanan
                  </button>
                </a>

              </div>

            </div>

            {/* Right */}
            <div>
              <img
                src="/printer.png"
                alt="Digital Printing"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

          </div>

        </section>

      </main>
    </>
  );
}
