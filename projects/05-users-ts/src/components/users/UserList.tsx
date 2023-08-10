import { useContext } from 'react'
import { UserItem } from './UserItem';
import { UserContext } from '../../context/UserContext';
import { UserContextType } from '../../types/ContextTypes';

export const UserList = () => {
  const { users } = useContext(UserContext) as UserContextType

  return (
    <section className='border border-gray-200 p-4 rounded-lg dark:border-slate-700'>
      <h5 className='font-medium text-2xl'>List users</h5>
      <div className='grid grid-col-1 md:grid-cols-3 gap-4 mt-4'>
        {
          (users.length) 
            ?
              users.map(user => (
                <UserItem key={ user.uid } user={ user } />
              ))
            : 'Not found registers'
        }
      </div>
    </section>
  )
}
