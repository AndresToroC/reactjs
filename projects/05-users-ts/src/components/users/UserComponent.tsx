import { useState } from 'react'
import { UserForm } from './UserForm'
import { UserList } from './UserList'

import { toast } from 'react-toastify';
import { User } from '../../types/UserTypes';

const usersData = [
  {
    "uid": "u001",
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "profession": "Ingeniero de Software",
    "description": "Apasionado por la tecnología y el desarrollo web.",
    "birthDay": "1990-05-15"
  },
  {
    "uid": "u002",
    "name": "María López",
    "email": "maria@example.com",
    "profession": "Diseñadora Gráfica",
    "description": "Amante del arte y el diseño creativo.",
    "birthDay": "1985-09-22"
  },
  {
    "uid": "u003",
    "name": "Carlos Gómez",
    "email": "carlos@example.com",
    "profession": "Contador",
    "description": "Apasionado por los números y las finanzas.",
    "birthDay": "1988-11-30"
  },
  {
    "uid": "u004",
    "name": "Ana Martínez",
    "email": "ana@example.com",
    "profession": "Médico",
    "description": "Comprometida con la salud y el bienestar de sus pacientes.",
    "birthDay": "1975-06-10"
  },
  {
    "uid": "u005",
    "name": "Pedro Ramírez",
    "email": "pedro@example.com",
    "profession": "Chef",
    "description": "Apasionado por la gastronomía y la comida deliciosa.",
    "birthDay": "1983-04-25"
  },
  {
    "uid": "u006",
    "name": "Laura García",
    "email": "laura@example.com",
    "profession": "Arquitecta",
    "description": "Apasionada por el diseño y la creación de espacios.",
    "birthDay": "1992-08-18"
  }
]

export const UserComponent = () => {
  const [users, setUsers] = useState(usersData)

  const handleDeleteUser = (uid: string) => {
    const newUsers = users.filter(user => user.uid !== uid)

    setUsers(newUsers)
    toast.success('User deleted successfully')
  }

  const handleAddUser = (user: User) => {
    setUsers([
      ...users,
      user
    ])
  }

  return (
    <div className='grid grid-cols-1 gap-4'>
      <UserForm handleAddUser={ handleAddUser } />
      <UserList users={ users } handleDeleteUser={ handleDeleteUser } />
    </div>
  )
}
