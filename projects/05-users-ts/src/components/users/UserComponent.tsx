import { UserForm } from './UserForm'
import { UserList } from './UserList'

export const UserComponent = () => {
  return (
    <div className='grid grid-cols-1 gap-4'>
      <UserForm />
      <UserList />
    </div>
  )
}
