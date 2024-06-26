import { Outlet, Navigate } from 'react-router-dom'
import { UserType } from '../types/types'

interface Props {
  user: UserType
}

export const ProtectedRouter: React.FC<Props> = ({ user }) => {
  return (user.isAuth) ? <Outlet /> : <Navigate to='/' />
}
