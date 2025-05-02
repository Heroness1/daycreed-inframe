import Head from 'next/head'
import { useState, useEffect } from 'react'
import Card from '../components/Card'

const validators = [
  {
    name: 'Akash',
    website: 'https://akash.network',
  },
  {
    name: 'Gitopia',
    website: 'https://gitopia.com',
  },
  {
    name: 'Q Blockchain',
    website: 'https://q.org/',
  },
  {
    name: 'Avail',
    website: 'https://availproject.org',
  },
]

export default function Validator() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Validator Nodes'

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
          {validators.map((v, index) => (
            <Card key={index} title={v.name} url={v.website} />
          ))}
        </div>

        {/* Tombol Next */}
        <div className="mt-10 flex space-x-4">
          <a href="/web3-intro">
            <button className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
              Next
            </button>
          </a>
        </div>
      </main>
    </>
  )
}
