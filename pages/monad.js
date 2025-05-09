import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const monadApps = [
  { name: 'Kuru Exchange', url: 'https://www.kuru.io/markets' },
  { name: 'LFJ Trading', url: 'https://lfj.gg/' },
  { name: 'Curvance', url: 'https://monad.curvance.com/' },
  { name: 'Apriori', url: 'https://stake.apr.io/' },
  { name: 'Nadfun', url: 'https://testnet.nad.fun' },
  { name: 'OpinionLab', url: 'https://app.olab.xyz/' },
  { name: 'Kizzy', url: 'https://testnet.kizzy.io/home' },
  { name: 'FantasyTOP', url: 'https://monad.fantasy.top/' },
]

export default function MonadPage() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Monad Ecosystem'

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { delay, duration: 0.5 },
    },
  })

  return (
    <>
      <Head>
        <title>Monad Ecosystem</title>
      </Head>
      <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center space-y-10">
        <motion.h1
          className="text-3xl md:text-4xl font-bold border-b border-gray-600 pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {typedText}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
          {monadApps.map((app, idx) => (
            <motion.a
              key={idx}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn(idx * 0.1)}
              initial="hidden"
              animate="visible"
              className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition shadow"
            >
              <h2 className="text-lg font-semibold">{app.name}</h2>
              <p className="text-sm text-zinc-400 mt-1">Visit →</p>
            </motion.a>
          ))}
        </div>

        <div>
          <a href="/testing">
            <button className="px-5 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition">
              ← Back to Testing
            </button>
          </a>
        </div>
      </main>
    </>
  )
}
