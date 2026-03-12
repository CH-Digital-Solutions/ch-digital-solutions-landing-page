import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ inline = false }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const iconSize = inline ? 'w-[17px] h-[17px]' : 'w-[20px] h-[20px]'
  const strokeW  = inline ? 1.6 : 1.5

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={inline ? 'theme-toggle-inline' : 'theme-toggle-btn'}
    >
      {theme === 'dark' ? (
        <Sun className={iconSize} strokeWidth={strokeW} />
      ) : (
        <Moon className={iconSize} strokeWidth={strokeW} />
      )}
    </button>
  )
}
