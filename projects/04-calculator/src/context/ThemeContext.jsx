import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const localTheme = localStorage.getItem('theme') === 'true' ? true : false
  const [theme, setTheme] = useState(localTheme)

  const changeTheme = () => {
    const newTheme = !theme

    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}