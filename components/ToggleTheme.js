import { useState, useEffect } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-3 px-4 py-2 bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white rounded-full transition-all duration-300 shadow hover:scale-105"
    >
      {darkMode ? <BsMoon className="text-xl" /> : <BsSun className="text-xl" />}
      <span className="font-medium">
        {darkMode ? 'Lights Off' : 'Lights On'}
      </span>
    </button>
  )
}
