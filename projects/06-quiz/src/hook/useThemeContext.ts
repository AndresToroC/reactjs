import { useContext } from 'react'
import { ThemeContext, ThemeContextType } from '../context/ThemeContext'

export const useThemeContext = () => {
  const context = useContext(ThemeContext) as ThemeContextType

  return context
}
