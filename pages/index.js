import Head from 'next/head'
import { useState, useEffect } from 'react'
import { FaTwitter, FaGithub } from 'react-icons/fa'
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
      <main className={`min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {/* Toggle Theme Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Toggle {darkMode ? 'Light' : 'Dark'}
        </button>

        {/* Content */}
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

        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
        />

        <p className="text-lg mb-8">Angga Fadillah</p>

        <div className="flex space-x-6 justify-center mb-10">
          <a href="https://twitter.com/Daycreeed" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://github.com/Heroness1" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400 transition" />
          </a>
        </div>

        <a href="/testing">
          <button className="px-6 py-3 bg-black text-white rounded hover:opacity-80 transition dark:bg-white dark:text-black">
            Go to Testing
          </button>
        </a>
      </main>
    </>
  )
}
