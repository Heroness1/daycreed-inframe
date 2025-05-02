import Head from 'next/head'
import { useState, useEffect } from 'react'
import Card from '../components/Card'

const Testing = [
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

  return (
    <>
      <Head>
        <title>Validator</title>
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-8 border-b border-gray-600 pb-2">
          {typedText}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {testing.map((v, index) => (
            <Card key={index} title={v.name} url={v.website} />
          ))}
        </div>

        {/* Tombol Navigasi dengan Ikon Panah */}
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
