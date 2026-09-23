import { useRouter } from 'next/router';

export default function UndanganKlien() {
  const router = useRouter();
  const { slug } = router.query;

  // Mencegah error render saat Next.js pertama kali membaca URL
  if (!slug) return <div className="min-h-screen bg-stone-100"></div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-100">
      <h1 className="text-4xl font-bold text-stone-800">
        Undangan Pernikahan
      </h1>
      <p className="text-xl mt-4 text-stone-600 capitalize">
        {slug.replace('-', ' & ')}
      </p>
    </div>
  );
}

