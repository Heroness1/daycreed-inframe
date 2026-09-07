import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  darkMode: true,        // default value (penting!)
  setDarkMode: () => {}, // dummy function
});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true); // default dark
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Ambil dari localStorage (opsional)
    const saved = localStorage.getItem('theme');
    if (saved) {
      setDarkMode(saved === 'dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, mounted]);

  // Hindari hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
