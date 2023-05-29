import React from 'react'
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