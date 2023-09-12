import { createContext } from 'react'

interface User {
  document: string,
  email: string,
  // isAuth: boolean,
}

export interface UserContextType {
  handleLogin: (User: User) => void
}

interface Props {
  children: React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider: React.FC<Props> = ({ children }) => {
  const handleLogin = (User: User) => {
    
  }

  return (
    <UserContext.Provider value={{ handleLogin }}>
      { children }
    </UserContext.Provider>
  )
}