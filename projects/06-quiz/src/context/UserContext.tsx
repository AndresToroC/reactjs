import { createContext, useState, useEffect } from 'react'
import { PropsContext, UserType, UserContextType, UserInitial } from '../types/types'

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider: React.FC<PropsContext> = ({ children }) => {
  const [user, setUser] = useState<UserType>(UserInitial)

  const handleLogin = (userData: UserType) => {
    userData.isAuth = false
    if (userData.document && userData.email) {
      userData.isAuth = true
    }

    setUser(userData)
  }

  useEffect(() => {
    if (user.isAuth) {
      console.log(user);
      
    }
  }, [user])
  

  return (
    <UserContext.Provider value={{ handleLogin }}>
      { children }
    </UserContext.Provider>
  )
}