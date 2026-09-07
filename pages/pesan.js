import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import ThemeToggle from '../components/ThemeToggle';

// Lazy load komponen SmartOrder agar tidak membebani initial bundle & main-thread
const SmartOrder = dynamic(() => import('../components/SmartOrder'), {
  ssr: false,
});

export default function Home() {
  const [showAssistant, setShowAssistant] = useState(false);

  return (
    <>
      <Head>
        <title>Subur Maju Printing - Digital Printing Jakarta Timur</title>
        <meta name="description" content="Percetakan 24 jam, digital printing, dan hardcover skripsi termurah di Jakarta Timur." />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white relative">
        <ThemeToggle />

        {/* Judul dibuat statis agar LCP (Largest Contentful Paint) tampil cepat tanpa delay JavaScript */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-tight">
          Percetakan 24 Jam & Digital Printing
        </h1>

        <img 
          src="/avatar.png" 
          alt="Subur Maju Printing" 
          width={128}
          height={128}
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover" 
        />
        <p className="text-lg mb-8 font-medium">Subur Maju Printing</p>

        <div className="flex space-x-6 justify-center mb-10">
          <a href="#" aria-label="Twitter" className="text-2xl hover:text-blue-400 transition-colors"><FaTwitter /></a>
          <a href="#" aria-label="GitHub" className="text-2xl hover:text-gray-400 transition-colors"><FaGithub /></a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
          <a href="https://www.suburmajuprinting.com/#katalog" className="w-full">
            <button className="w-full px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition font-semibold">
              LIHAT KATALOG
            </button>
          </a>
          <button 
            onClick={() => setShowAssistant(true)} 
            className="w-full px-6 py-3 bg-black text-white rounded-xl hover:opacity-80 transition dark:bg-white dark:text-black font-semibold"
          >
            ORDER VIA WHATSAPP
          </button>
        </div>

        {showAssistant && <SmartOrder onClose={() => setShowAssistant(false)} />}
      </main>
    </>
  );
}
