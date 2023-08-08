import React from 'react'
import { User } from '../../types/UserTypes'
import { UserItem } from './UserItem';

interface Props {
  users: User[],
  handleDeleteUser: (id: string) => void,
  handleSelectedEdit: (id: string) => void
}

export const UserList: React.FC<Props> = ({ users, handleDeleteUser, handleSelectedEdit }) => {
  return (
    <section className='border border-gray-200 p-4 rounded-lg dark:border-slate-700'>
      <h5 className='font-medium text-2xl'>List users</h5>
      <div className='grid grid-col-1 md:grid-cols-3 gap-4 mt-4'>
        {
          (users.length) 
            ?
              users.map(user => (
                <UserItem key={ user.uid } user={ user } deleteUser={ handleDeleteUser } handleSelectedEdit={ handleSelectedEdit } />
              ))
            : 'Not found registers'
        }
      </div>
    </section>
  )
}
