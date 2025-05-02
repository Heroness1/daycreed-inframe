import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme()

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-6 right-6 text-2xl transition hover:scale-110"
      aria-label="Toggle Theme"
    >
      {darkMode ? <
