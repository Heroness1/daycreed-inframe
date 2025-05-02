import Head from 'next/head'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { motion } from 'framer-motion'

const testingData = [
  {
    name: 'Monad',
    website: 'https://testnet.monad.xyz/',
  },
  {
    name: '0GLabs',
    website: 'https://0g.ai/testnet-guide',
  },
  {
    name: 'Seismic',
    website: 'https://www.seismic.systems/',
  },
  {
    name: 'Aztec Protocol',
    website: 'https://aztec.network/',
  },
]

export default function Testing() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Testing Network'

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
        <title>Testing</title>
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 space-y-12">
        <motion.h1
          className="text-4xl font-bold border-b border-gray-600 pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {typedText}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {testingData.map((v, index) => (
            <motion.div
              key={index}
              variants={fadeIn(index * 0.2)}
              initial="hidden"
              animate="visible"
            >
              <Card title={v.name} url={v.website} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-between w-full max-w-xs">
          <a href="/">
            <button className="px-5 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition flex items-center gap-2">
              ← Back
            </button>
          </a>
          <a href="/web3-intro">
            <button className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 transition flex items-center gap-2">
              Next →
            </button>
          </a>
        </div>
      </main>
    </>
  )
}
