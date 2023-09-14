import { createContext, useState } from 'react'
import { PropsContext, UserType, UserContextType, UserInitial } from '../types/types'

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider: React.FC<PropsContext> = ({ children }) => {
  const [user, setUser] = useState<UserType>(UserInitial)

  const handleLogin = (userData: UserType) => {
    userData.isAuth = false
    if (userData.document && userData.email) {
      userData.isAuth = true
    }

    localStorage.setItem('user', JSON.stringify(userData))

    setUser(userData)
  }

  return (
    <UserContext.Provider value={{ user, handleLogin }}>
      { children }
    </UserContext.Provider>
  )
}