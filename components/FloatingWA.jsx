import { CONTACT_INFO } from '@/config/constants';

export function FloatingWA() {
  return (
    <a
      href={CONTACT_INFO.WA_URL(CONTACT_INFO.PHONE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-700 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-2xl z-50 transition-all duration-300"
    >
      💬
      <span className="absolute inset-0 rounded-2xl border-4 border-orange-400 animate-ping opacity-75"></span>
      <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></span>
    </a>
  );
}
