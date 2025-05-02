import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme()

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded bg-gray-200 text-black hover:bg-gray-300 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 transition"
    >
      {darkMode ? <FaMoon /> : <FaSun />}
      {darkMode ? 'Lights Off' : 'Lights On'}
    </button>
  )
}
