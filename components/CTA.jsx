import { CONTACT_INFO } from '@/config/constants';

export function CTA() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold">Siap Cetak Sekarang?</h2>
        <p className="mt-4 text-xl text-gray-500">
          Kirim file Anda dan konsultasikan kebutuhan cetak melalui WhatsApp.
        </p>
        <a
          href={CONTACT_INFO.WA_URL(CONTACT_INFO.PHONE)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition"
        >
          Order Via WhatsApp
        </a>
      </div>
    </section>
  );
}
