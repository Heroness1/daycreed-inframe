import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaGithub } from 'react-icons/fa'

export default function Home() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Welcome'

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Head>
        <title>Daycreed</title>
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">{typedText}</h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg mb-8">
            Explore my journey in Web3, testnets, and validator setups.
          </p>

          <div className="flex space-x-6 justify-center mb-6">
            <a
              href="https://twitter.com/Daycreeed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl hover:text-blue-400 transition" />
            </a>
            <a
              href="https://github.com/Heroness1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-gray-400 transition" />
            </a>
          </div>

          <div className="mt-10">
            <a href="/testing">
              <button className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition">
                Go to Testing
              </button>
            </a>
          </div>
        </motion.div>
      </main>
    </>
  )
}
