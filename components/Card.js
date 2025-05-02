import Link from 'next/link'

export default function Card({ title, url }) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="p-6 bg-zinc-800 hover:bg-zinc-700 transition rounded-2xl shadow-md cursor-pointer">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm mt-2 text-zinc-400">Visit website →</p>
      </div>
    </Link>
  )
}
