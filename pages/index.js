import Head from 'next/head'
import { useState, useEffect } from 'react'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { MdFlashlightOn, MdFlashlightOff } from 'react-icons/md'
import Typewriter from 'typewriter-effect'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <>
      <Head>
        <title>Daycreed</title>
      </Head>

      <main className={`min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-500 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {/* Toggle Theme Icon */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 z-50 text-3xl transition-transform hover:scale-110"
        >
          {darkMode ? (
            <MdFlashlightOn className="text-yellow-300 animate-pulse" />
          ) : (
            <MdFlashlightOff className="text-gray-800" />
          )}
        </button>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">
          <Typewriter
            options={{
              strings: ['Yapper', 'Web3 Enthusiast', 'Node', 'Testnet', 'Validator'],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
              deleteSpeed: 50,
            }}
          />
        </h1>

        {/* Avatar */}
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
        />

        {/* Name */}
        <p className="text-lg mb-8">Angga Fadillah</p>

        {/* Socials */}
        <div className="flex space-x-6 justify-center mb-10">
          <a href="https://twitter.com/Daycreeed" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://github.com/Heroness1" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400 transition" />
          </a>
        </div>

        {/* Go to Testing */}
        <a href="/testing">
          <button className="px-6 py-3 bg-black text-white rounded hover:opacity-80 transition dark:bg-white dark:text-black">
            Go to Testing
          </button>
        </a>
      </main>
    </>
  )
}
