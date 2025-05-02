import { useState, useEffect } from 'react'
import { MdFlashlightOn, MdFlashlightOff } from 'react-icons/md'

export default function ToggleTheme() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-6 right-6 z-50 text-3xl transition-transform hover:scale-110"
    >
      {dark ? (
        <MdFlashlightOn className="text-yellow-300" />
      ) : (
        <MdFlashlightOff className="text-gray-800" />
      )}
    </button>
  )
}
