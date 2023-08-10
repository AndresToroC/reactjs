import { useState, createContext } from 'react'
import { toast } from 'react-toastify';

import { User } from '../types/UserTypes'
import { UserContextType } from '../types/ContextTypes';

import usersData from '../assets/users.json'

interface Props {
  children: React.ReactNode
}

const dataUsers: User[] = JSON.parse(localStorage.getItem('users') || JSON.stringify(usersData))

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [users, setUsers] = useState(dataUsers)
  const [userSelected, setUserSelected] = useState<User | null>(null)

  const handleDeleteUser = (uid: string) => {
    const newUsers = users.filter(user => user.uid !== uid)

    setUsers(newUsers)
    localStorage.setItem('users', JSON.stringify(newUsers))
    toast.success('User deleted successfully')
  }

  const handleAddUser = (user: User) => {
    const newUsers = [
      ...users,
      user
    ]

    setUsers(newUsers)
    localStorage.setItem('users', JSON.stringify(newUsers))
  }

  const handleSelectedEdit = (id: string) => {
    const user = users.find(user => user.uid === id)

    if (user) {
      setUserSelected(user)
    }
  }

  const handleSelectedEditClear = () => {
    setUserSelected(null)
  }

  const handleUpdateUser = (user: User) => {
    const userFind = users.findIndex(userI => userI.uid === user.uid)
    
    const newUsers = structuredClone(users)
    
    newUsers[userFind] = user
    setUsers(newUsers)
    setUserSelected(null)

    localStorage.setItem('users', JSON.stringify(newUsers))
  }
  
  return (
    <UserContext.Provider value={{ 
      users,
      userSelected,
      handleDeleteUser,
      handleAddUser,
      handleSelectedEdit,
      handleSelectedEditClear,
      handleUpdateUser
     }}>
      { children }
    </UserContext.Provider>
  )
}