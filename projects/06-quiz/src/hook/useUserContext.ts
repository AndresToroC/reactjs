import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { UserContextType } from '../types/types'

export const useUserContext = () => {
  const context = useContext(UserContext) as UserContextType

  return context
}
