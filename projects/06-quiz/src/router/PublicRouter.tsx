import { Outlet, Navigate } from 'react-router-dom'
import { UserType } from '../types/types'

interface Props {
  user: UserType
}

export const PublicRouter = ({ user } :Props) => {
  return !user.isAuth ? <Outlet /> : <Navigate to='/quiz' />
}
