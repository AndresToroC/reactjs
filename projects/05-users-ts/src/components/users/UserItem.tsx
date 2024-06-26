import { User } from '../../types/UserTypes'
import { EditIcon, TrashIcon } from '../Icons'
import { useUserContext } from '../../hook/useUserContext'

interface Props {
  user: User
}

export const UserItem: React.FC<Props> = ({ user }) => {
  const { handleDeleteUser, handleSelectedEdit } = useUserContext()

  return (
    <figure className='relative border border-gray-100 p-4 rounded-md md:flex dark:border-slate-700'>
      {/* <UserIcon /> */}
      <img className='w-24 h-auto rounded-lg mx-auto md:mx-0' src='https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg'/>
      <div className='p-4 text-center md:text-left'>
        <p className='font-bold'>{ user.name }</p>
        <p className='text-sm text-gray-600 dark:text-gray-400'>{ user.profession }</p>
        <p className='text-sm text-gray-600 dark:text-gray-400'>{ user.email }</p>
        {/* {
          user?.links?.map((link, x) => (
            <a key={`${ i }_${ x }`} href={ link.url } target='_blank'>
              { link.name }
            </a>
          ))
        } */}
      </div>
      <div className='absolute top-4 right-4'>
        <button onClick={ () => handleSelectedEdit(user.uid) }>
          <EditIcon />
        </button>
        <button onClick={ () => handleDeleteUser(user.uid) }>
          <TrashIcon />
        </button>
      </div>
    </figure>
  )
}
