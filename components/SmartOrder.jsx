import { useState } from 'react';
import { analyzeOrder } from '../utils/orderParser';

const QUICK_ITEMS = ['Spanduk', 'Banner', 'Stiker', 'Undangan', 'Brosur', 'Kartu Nama'];

function RegMark({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" />
      <path d="M12 1v6M12 17v6M1 12h6M17 12h6" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function WhatsAppIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.34a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.78 14.02c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.02.28-3.44-.75-2.87-1.22-4.7-4.15-4.84-4.34-.14-.19-1.16-1.55-1.16-2.95s.72-2.09.98-2.38c.24-.26.53-.33.71-.33.18 0 .35 0 .5.01.16.01.38-.06.6.46.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.3.37-.44.5-.14.14-.29.28-.13.56.17.28.75 1.24 1.6 2.01 1.1.98 2.03 1.28 2.31 1.43.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.1 1.55.73 1.82.86.26.14.44.2.5.31.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

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

  const incomplete = orderPreview && (
    orderPreview.product === 'Belum disebutkan' ||
    orderPreview.size === 'Belum disebutkan' ||
    orderPreview.quantity === 'Belum disebutkan'
  );

  return (
    <div className="relative w-full max-w-2xl mt-8 bg-[#F6F4EF] dark:bg-[#15171C] border border-[#1B2A4A]/15 dark:border-white/10 rounded-2xl p-6 md:p-9 shadow-[0_24px_48px_-28px_rgba(27,42,74,0.45)]">
      <RegMark className="absolute -top-3 -left-3 w-6 h-6 text-[#1B2A4A]/25 dark:text-white/20" />
      <RegMark className="absolute -top-3 -right-3 w-6 h-6 text-[#1B2A4A]/25 dark:text-white/20" />

      <div className="mb-7 pb-5 border-b border-dashed border-[#1B2A4A]/20 dark:border-white/15">
        <h2 className="font-serif text-2xl text-[#1B2A4A] dark:text-white">Susun pesanan cetak</h2>
        <p className="text-sm text-[#1B2A4A]/60 dark:text-white/50 mt-1.5 leading-relaxed">
          Ceritakan kebutuhanmu, tim Subur Maju Printing yang rapikan jadi order.
        </p>
      </div>

      <form onSubmit={handleAnalyze} className="space-y-4">
        <textarea
          rows="5"
          value={assistantText}
          onChange={(e) => { setAssistantText(e.target.value); setOrderPreview(null); }}
          placeholder="Contoh: Min mau cetak spanduk 3x1 meter 2 pcs buat hari Sabtu..."
          className="w-full p-4 bg-white dark:bg-[#1B1D24] border border-[#1B2A4A]/15 dark:border-white/10 rounded-xl text-[#1B2A4A] dark:text-white placeholder-[#1B2A4A]/35 dark:placeholder-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C1432B]/40 focus:border-[#C1432B]/50 transition text-sm leading-relaxed resize-none"
        />

        <div className="flex flex-wrap gap-2">
          {QUICK_ITEMS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setAssistantText(prev => prev ? `${prev} ${item}` : `Saya mau cetak ${item}`)}
              className="px-3 py-1.5 text-xs rounded-md border border-[#1B2A4A]/15 dark:border-white/15 bg-white/70 dark:bg-white/5 text-[#1B2A4A]/75 dark:text-white/70 hover:border-[#C1432B]/40 hover:text-[#C1432B] dark:hover:text-[#E1685A] transition"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-[#1B2A4A] hover:bg-[#233a63] text-white px-6 py-3 rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2A4A]/40 focus-visible:ring-offset-2"
        >
          Rapikan pesanan
        </button>
      </form>

      {orderPreview && (
        <div className="mt-6 bg-white dark:bg-[#1B1D24] rounded-xl border border-[#1B2A4A]/12 dark:border-white/10 overflow-hidden">
          <div className="px-5 pt-5 pb-4 border-b border-dashed border-[#1B2A4A]/15 dark:border-white/10">
            <h3 className="font-serif text-base text-[#1B2A4A] dark:text-white">Ringkasan pesanan</h3>
          </div>

          <div className="px-5 py-1">
            {Object.entries(orderPreview).map(([key, value], i, arr) => (
              <div
                key={key}
                className={`flex justify-between gap-4 py-3 text-sm ${i !== arr.length - 1 ? 'border-b border-[#1B2A4A]/8 dark:border-white/8' : ''}`}
              >
                <span className="capitalize text-[#1B2A4A]/55 dark:text-white/45">{key}</span>
                <span className="text-right font-medium text-[#1B2A4A] dark:text-white tabular-nums">{value}</span>
              </div>
            ))}
          </div>

          {incomplete && (
            <div className="mx-5 mb-5 mt-2">
              <div className="inline-block -rotate-1 border border-[#C1432B]/50 text-[#C1432B] px-3 py-1.5 rounded text-xs font-semibold tracking-wide">
                Perlu dilengkapi bersama admin
              </div>
            </div>
          )}

          <div className="p-5 pt-0">
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#2F6B4F] hover:bg-[#285d44] text-white px-6 py-3 rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6B4F]/40 focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Kirim ke admin via WhatsApp
            </button>
          </div>
        </div>
      )}

      <button
        onClick={onClose}
        className="w-full mt-5 text-xs text-[#1B2A4A]/45 hover:text-[#1B2A4A]/80 dark:text-white/40 dark:hover:text-white/80 transition"
      >
        Tutup
      </button>
    </div>
  );
}
