import Head from 'next/head'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import ThemeToggle from '../components/ThemeToggle'
import { useState } from 'react'

export default function Home() {
  const [showAssistant, setShowAssistant] = useState(false)
  const [assistantText, setAssistantText] = useState('')
  const [orderPreview, setOrderPreview] = useState(null)

  // =========================
  // SMART ORDER
  // =========================

  const analyzeOrder = (text) => {
    const lower = text.toLowerCase()

    const products = [
      'x banner',
      'y banner',
      'kartu nama',
      'cetak foto',
      'stiker',
      'spanduk',
      'banner',
      'brosur',
      'undangan',
      'poster',
      'nota',
      'flyer',
      'stempel',
      'hardcover',
      'kalender',
    ]

    const product = products.find((item) =>
      lower.includes(item)
    )

    // Ukuran seperti:
    // 3x1
    // 3 x 1 meter
    // 60x160 cm

    const sizeMatch = lower.match(
      /(\d+(?:[.,]\d+)?)\s*[x×]\s*(\d+(?:[.,]\d+)?)\s*(meter|m|cm)?/
    )

    let size = 'Belum disebutkan'

    if (sizeMatch) {
      const unit = sizeMatch[3] || ''

      size = `${sizeMatch[1]} × ${sizeMatch[2]}${
        unit ? ` ${unit}` : ''
      }`
    }

    // Jumlah
    const quantityMatch = lower.match(
      /(\d+)\s*(pcs|pc|lembar|buah|biji|eksemplar|exemplar)?/
    )

    let quantity = 'Belum disebutkan'

    if (quantityMatch) {
      quantity = `${quantityMatch[1]} ${
        quantityMatch[2] || 'pcs'
      }`
    }

    // Deadline
    const deadlines = [
      'hari ini',
      'besok',
      'lusa',
      'senin',
      'selasa',
      'rabu',
      'kamis',
      'jumat',
      'sabtu',
      'minggu',
    ]

    const deadline = deadlines.find((item) =>
      lower.includes(item)
    )

    // Bahan
    const materials = [
      'flexi',
      'flexi china',
      'flexi korea',
      'vinyl',
      'art paper',
      'art carton',
      'ivory',
      'hvs',
      'stiker vinyl',
      'stiker chromo',
      'transparan',
    ]

    const material = materials.find((item) =>
      lower.includes(item)
    )

    // Warna
    const colors = [
      'merah',
      'biru',
      'hijau',
      'kuning',
      'hitam',
      'putih',
      'orange',
      'oranye',
      'ungu',
      'pink',
      'coklat',
      'abu-abu',
      'full color',
      'hitam putih',
    ]

    const color = colors.find((item) =>
      lower.includes(item)
    )

    return {
      product: product
        ? product.charAt(0).toUpperCase() +
          product.slice(1)
        : 'Belum disebutkan',

      size,

      quantity,

      deadline: deadline
        ? deadline.charAt(0).toUpperCase() +
          deadline.slice(1)
        : 'Belum disebutkan',

      material: material
        ? material.charAt(0).toUpperCase() +
          material.slice(1)
        : 'Belum disebutkan',

      color: color
        ? color.charAt(0).toUpperCase() +
          color.slice(1)
        : 'Belum disebutkan',
    }
  }

  // =========================
  // ANALYZE
  // =========================

  const handleAnalyze = (e) => {
    e.preventDefault()

    if (!assistantText.trim()) return

    const result = analyzeOrder(assistantText)

    setOrderPreview(result)
  }

  // =========================
  // WHATSAPP
  // =========================

  const handleWhatsApp = () => {
    if (!orderPreview) return

    const message = `Halo Kak, saya mau order dari website Subur Maju Printing.

Detail Pesanan:

Produk: ${orderPreview.product}
Ukuran: ${orderPreview.size}
Jumlah: ${orderPreview.quantity}
Bahan: ${orderPreview.material}
Warna: ${orderPreview.color}
Deadline: ${orderPreview.deadline}

Catatan:
${assistantText}

Mohon info harga dan ketersediaannya.
Terima kasih 🙏`

    const url =
      `https://wa.me/6282246926544?text=` +
      encodeURIComponent(message)

    window.open(url, '_blank')
  }

  return (
    <>
      <Head>
        <title>Subur Maju Printing</title>
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white relative">

        <ThemeToggle />

        {/* HERO */}

        <h1 className="text-4xl font-bold mb-4 text-center">
          <Typewriter
            options={{
              strings: [
                'Percetakan 24 jam',
                'Digital printing',
                'Hardcover Skripsi Termurah',
              ],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
              deleteSpeed: 50,
            }}
          />
        </h1>

        <img
          src="/avatar.png"
          alt="Subur Maju Printing"
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
        />

        <p className="text-lg mb-8">
          Subur Maju Printing
        </p>

        {/* SOCIAL */}

        <div className="flex space-x-6 justify-center mb-10">

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

        {/* BUTTONS */}

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">

          <a
            href="https://daycreed-inframe.vercel.app/testing#katalog"
            className="w-full"
          >
            <button className="w-full px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition font-semibold">
              LIHAT KATALOG
            </button>
          </a>

          <button
            onClick={() => setShowAssistant(true)}
            className="w-full px-6 py-3 bg-black text-white rounded-xl hover:opacity-80 transition dark:bg-white dark:text-black font-semibold"
          >
            ORDER VIA WHATSAPP
          </button>

        </div>

        {/* SMART ORDER BOX */}

        {showAssistant && (

          <div className="w-full max-w-2xl mt-8 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 border border-orange-200 dark:border-gray-700 rounded-3xl p-6 md:p-8 shadow-xl">

            <div className="flex items-center gap-3 mb-5">

              <span className="text-3xl">
                ✨
              </span>

              <div>

                <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                  Pesan Lebih Mudah
                </h2>

                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Tulis kebutuhan cetakmu dengan bahasa biasa.
                </p>

              </div>

            </div>

            <form
              onSubmit={handleAnalyze}
              className="space-y-4"
            >

              <textarea
                rows="5"
                value={assistantText}
                onChange={(e) => {
                  setAssistantText(e.target.value)
                  setOrderPreview(null)
                }}
                placeholder="Contoh: Min mau cetak spanduk 3x1 meter 2 pcs buat hari Sabtu..."
                className="w-full p-4 bg-white dark:bg-gray-950 border border-orange-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition text-sm resize-none"
              />

              {/* CONTOH CEPAT */}

              <div className="flex flex-wrap gap-2">

                {[
                  'Spanduk',
                  'Banner',
                  'Stiker',
                  'Undangan',
                  'Brosur',
                  'Kartu Nama',
                ].map((item) => (

                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setAssistantText((prev) =>
                        prev
                          ? `${prev} ${item}`
                          : `Saya mau cetak ${item}`
                      )
                    }
                    className="px-3 py-1.5 text-xs rounded-full border border-orange-200 bg-white text-gray-700 hover:bg-orange-100 transition dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                  >
                    + {item}
                  </button>

                ))}

              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-md"
              >
                ✨ Rapikan Pesanan
              </button>

            </form>

            {/* PREVIEW */}

            {orderPreview && (

              <div className="mt-6 bg-white dark:bg-gray-950 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">

                <h3 className="font-bold mb-5 text-gray-900 dark:text-white">
                  📋 Ringkasan Pesanan
                </h3>

                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">

                  <div className="flex justify-between gap-4">
                    <span className="font-semibold">
                      Produk
                    </span>
                    <span>
                      {orderPreview.product}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="font-semibold">
                      Ukuran
                    </span>
                    <span>
                      {orderPreview.size}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="font-semibold">
                      Jumlah
                    </span>
                    <span>
                      {orderPreview.quantity}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="font-semibold">
                      Bahan
                    </span>
                    <span>
                      {orderPreview.material}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="font-semibold">
                      Warna
                    </span>
                    <span>
                      {orderPreview.color}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="font-semibold">
                      Deadline
                    </span>
                    <span>
                      {orderPreview.deadline}
                    </span>
                  </div>

                </div>

                {/* WARNING */}

                {(orderPreview.product === 'Belum disebutkan' ||
                  orderPreview.size === 'Belum disebutkan' ||
                  orderPreview.quantity === 'Belum disebutkan') && (

                  <div className="mt-5 p-3 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-300 text-xs">
                    ⚠️ Beberapa detail belum disebutkan.
                    Tidak masalah, kamu tetap bisa mengirim
                    pesanan dan melengkapinya langsung dengan
                    admin.
                  </div>

                )}

                {/* WHATSAPP */}

                <button
                  onClick={handleWhatsApp}
                  className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-md"
                >
                  📱 Kirim Pesanan ke WhatsApp
                </button>

              </div>

            )}

            {/* CLOSE */}

            <button
              onClick={() => {
                setShowAssistant(false)
                setOrderPreview(null)
                setAssistantText('')
              }}
              className="w-full mt-4 text-xs text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
            >
              Tutup
            </button>

          </div>

        )}

      </main>
    </>
  )
}
