import React, { createContext, useEffect, useState } from 'react';
import { PropsContext, ThemeContextType } from '../types/types';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<PropsContext> = ({ children }) => {
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

    window.addEventListener('storage', (e) => {
      if (e.key === 'theme') {
        const themeLocalData = localStorage.getItem('theme') === 'true' ? true : false
        setTheme(themeLocalData)
      }
    })
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}