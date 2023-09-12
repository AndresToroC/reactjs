import { useContext } from 'react'
import { UserContext, UserContextType } from '../context/UserContext'

export const useUserContext = () => {
  const context = useContext(UserContext) as UserContextType

  return context
}
