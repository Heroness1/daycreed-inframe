import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaGithub, FaSun, FaMoon } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <>
      <Head>
        <title>Daycreed</title>
      </Head>
      <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center p-8 relative">

        {/* Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 text-xl"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg mb-8">Angga Fadillah</p>

          <div className="flex space-x-6 justify-center">
            <a href="https://twitter.com/Daycreeed" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400 transition" />
            </a>
            <a href="https://github.com/Heroness1" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-400 transition" />
            </a>
          </div>

          <div className="mt-10">
            <a href="/testing">
              <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded hover:opacity-80 transition">
                Go to Testing
              </button>
            </a>
          </div>
        </motion.div>
      </main>
    </>
  )
}
