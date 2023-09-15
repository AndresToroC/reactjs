import { createContext, useState, useEffect } from 'react'
import { PropsContext, UserType, UserContextType, UserInitial } from '../types/types'

export const UserContext = createContext<UserContextType | null>(null)

const getInitialUserState = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return user.isAuth ? user : UserInitial
}

export const UserProvider: React.FC<PropsContext> = ({ children }) => {
  const [user, setUser] = useState<UserType>(getInitialUserState())

  const handleLogin = (userData: UserType) => {
    userData.isAuth = false
    if (userData.document && userData.email) {
      userData.isAuth = true
    }

    localStorage.setItem('user', JSON.stringify(userData))

    setUser(userData)
  }

  const hanldleLogout = () => {
    localStorage.removeItem('user')
    setUser(getInitialUserState())
  }

  useEffect(() => {
    window.addEventListener('storage', (e) => {
      if (e.key === 'user') {
        setUser(getInitialUserState()) 
      }
    })
  }, [user])

  return (
    <UserContext.Provider value={{ user, handleLogin, hanldleLogout }}>
      { children }
    </UserContext.Provider>
  )
}