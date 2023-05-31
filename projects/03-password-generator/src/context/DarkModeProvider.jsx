import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const themeLocal = localStorage.getItem('theme') === 'false' ? false : true;
  
  const [theme, setTheme] = useState(themeLocal)

  const toogleDarkMode = () => {
    const newTheme = !theme;
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    // Add class dark in html
    if (!theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])
  
  return (
    <DarkModeContext.Provider value={{ theme, toogleDarkMode }}>
      { props.children }
    </DarkModeContext.Provider>
  )
}

export {
  DarkModeContext,
  DarkModeProvider
}