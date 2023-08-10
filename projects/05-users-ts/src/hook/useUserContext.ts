import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { UserContextType } from '../types/ContextTypes'

export const useUserContext = () => {
  const context = useContext(UserContext) as UserContextType

  return context
}
