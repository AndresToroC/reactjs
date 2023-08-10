import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ThemeContextType } from '../types/ContextTypes'

export const useThemeContext = () => {
  const context = useContext(ThemeContext) as ThemeContextType

  return context
}