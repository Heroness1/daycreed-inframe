import Head from 'next/head'
import { motion } from 'framer-motion'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daycreed</title>
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
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

        {/* AVATAR */}
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
          <p className="text-lg mb-8">
            My List on Web3.
          </p>

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
