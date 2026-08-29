import Head from 'next/head';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import ThemeToggle from '../components/ThemeToggle';
import SmartOrder from '../components/SmartOrder';
import { useState } from 'react';

export default function Home() {
  const [showAssistant, setShowAssistant] = useState(false);

  return (
    <>
      <Head>
        <title>Subur Maju Printing</title>
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white relative">
        <ThemeToggle />

        <h1 className="text-4xl font-bold mb-4 text-center">
          <Typewriter
            options={{
              strings: ['Percetakan 24 jam', 'Digital printing', 'Hardcover Skripsi Termurah'],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
              deleteSpeed: 50,
            }}
          />
        </h1>

        <img src="/avatar.png" alt="Subur Maju Printing" className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg" />
        <p className="text-lg mb-8">Subur Maju Printing</p>

        <div className="flex space-x-6 justify-center mb-10">
          <a href="https://twitter.com/Daycreeed" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-2xl hover:text-blue-400 transition" /></a>
          <a href="https://github.com/Heroness1" target="_blank" rel="noopener noreferrer"><FaGithub className="text-2xl hover:text-gray-400 transition" /></a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
          <a href="https://daycreed-inframe.vercel.app/testing#katalog" className="w-full">
            <button className="w-full px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition font-semibold">LIHAT KATALOG</button>
          </a>
          <button onClick={() => setShowAssistant(true)} className="w-full px-6 py-3 bg-black text-white rounded-xl hover:opacity-80 transition dark:bg-white dark:text-black font-semibold">
            ORDER VIA WHATSAPP
          </button>
        </div>

        {showAssistant && <SmartOrder onClose={() => setShowAssistant(false)} />}
      </main>
    </>
  );
}
