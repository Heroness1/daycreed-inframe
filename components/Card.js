import Link from 'next/link'

export default function Card({ title, link, website }) {
  return (
    <Link href={link}>
      <div className="p-6 bg-zinc-800 hover:bg-zinc-700 transition rounded-2xl shadow-md cursor-pointer">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="mt-3">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Supaya gak ikut klik kartu
            className="text-sm text-blue-400 hover:underline"
          >
            Visit website →
          </a>
        </div>
      </div>
    </Link>
  )
}
