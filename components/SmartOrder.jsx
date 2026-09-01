// components/SmartOrder.jsx
import { useState } from 'react';
import { analyzeOrder } from '../utils/orderParser';

export default function SmartOrder({ onClose }) {
  const [assistantText, setAssistantText] = useState('');
  const [orderPreview, setOrderPreview] = useState(null);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (assistantText.trim()) setOrderPreview(analyzeOrder(assistantText));
  };

  const handleWhatsApp = () => {
    if (!orderPreview) return;
    const message = `Halo Kak, saya mau order dari website Subur Maju Printing.\n\nDetail Pesanan:\nProduk: ${orderPreview.product}\nUkuran: ${orderPreview.size}\nJumlah: ${orderPreview.quantity}\nBahan: ${orderPreview.material}\nWarna: ${orderPreview.color}\nDeadline: ${orderPreview.deadline}\n\nCatatan:\n${assistantText}\n\nMohon info harga dan ketersediaannya. Terima kasih 🙏`;
    window.open(`https://wa.me/6282246926544?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="w-full max-w-2xl mt-8 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 border border-orange-200 dark:border-gray-700 rounded-3xl p-6 md:p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl">✨</span>
        <div>
          <h2 className="font-bold text-lg text-gray-900 dark:text-white">Pesan Lebih Mudah</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400">Tulis kebutuhan cetakmu dengan admin.</p>
        </div>
      </div>

      <form onSubmit={handleAnalyze} className="space-y-4">
        <textarea
          rows="5"
          value={assistantText}
          onChange={(e) => { setAssistantText(e.target.value); setOrderPreview(null); }}
          placeholder="Contoh: Min mau cetak spanduk 3x1 meter 2 pcs buat hari Sabtu..."
          className="w-full p-4 bg-white dark:bg-gray-950 border border-orange-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition text-sm resize-none"
        />
        <div className="flex flex-wrap gap-2">
          {['Spanduk', 'Banner', 'Stiker', 'Undangan', 'Brosur', 'Kartu Nama'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setAssistantText(prev => prev ? `${prev} ${item}` : `Saya mau cetak ${item}`)}
              className="px-3 py-1.5 text-xs rounded-full border border-orange-200 bg-white text-gray-700 hover:bg-orange-100 transition dark:bg-gray-900 dark:text-gray-300"
            >
              + {item}
            </button>
          ))}
        </div>
        <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-md">
          ✨ Rapikan Pesanan
        </button>
      </form>

      {orderPreview && (
        <div className="mt-6 bg-white dark:bg-gray-950 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">
          <h3 className="font-bold mb-5 text-gray-900 dark:text-white">📋 Ringkasan Pesanan</h3>
          {/* Tampilan Ringkasan */}
          <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            {Object.entries(orderPreview).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-4">
                <span className="font-semibold capitalize">{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          {(orderPreview.product === 'Belum disebutkan' || orderPreview.size === 'Belum disebutkan' || orderPreview.quantity === 'Belum disebutkan') && (
            <div className="mt-5 p-3 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs">⚠️ Beberapa detail belum disebutkan. Silakan lengkapi nanti dengan admin.</div>
          )}
          <button onClick={handleWhatsApp} className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md">
            📱 Kirim Pesanan ke WhatsApp
          </button>
        </div>
      )}
      <button onClick={onClose} className="w-full mt-4 text-xs text-gray-500 hover:text-gray-800 dark:hover:text-white transition">Tutup</button>
    </div>
  );
}
