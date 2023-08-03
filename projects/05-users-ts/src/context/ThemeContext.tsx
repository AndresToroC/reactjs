import { createContext, useEffect, useState } from 'react';
import { Theme } from '../types/ContextTypes';

interface Props {
  children: React.ReactNode
}

export const ThemeContext = createContext<Theme | null>(null)

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const themeLocal = localStorage.getItem('theme') === 'true' ? true : false
  const [theme, setTheme] = useState(themeLocal)

  const handleChangeTheme = () => {
    const newTheme = !theme
    setTheme(newTheme)

    localStorage.setItem('theme', newTheme.toString())
  }

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}