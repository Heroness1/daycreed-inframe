import Head from 'next/head'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <>
      <Head>
        <title>Subur Maju Printing</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white relative">

        <ThemeToggle />

        <h1 className="text-4xl font-bold mb-4">
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

        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
        />

        <p className="text-lg mb-8">Subur Maju Printing</p>

        <div className="flex space-x-6 justify-center mb-10">
          <a href="https://twitter.com/Daycreeed" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://github.com/Heroness1" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400 transition" />
          </a>
        </div>

        {/* Tombol digabung ke dalam flexbox agar rapi bersebelahan di layar besar & bertumpuk di HP */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Tombol Launch ke Web Vercel */}
          <a href="https://daycreed-inframe.vercel.app/testing">
            <button className="w-full px-6 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 transition">
              KUNJUNGI WEBSITE
            </button>
          </a>

          {/* Tombol Order WhatsApp */}
          <a 
            href={`https://wa.me/6282246926544?text=${encodeURIComponent(
              `Halo Kak, saya mau order dari website Subur Maju Printing.

Produk:
Jumlah:
Ukuran:
Deadline:`
            )}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="w-full px-6 py-3 bg-black text-white rounded hover:opacity-80 transition dark:bg-white dark:text-black border border-transparent">
              ORDER VIA WHATSAPP
            </button>
          </a>
        </div>

      </main>
    </>
  )
}
