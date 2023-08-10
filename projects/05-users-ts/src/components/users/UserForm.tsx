import { useEffect, useState, useContext } from 'react'
import { uid } from 'uid';
import { toast } from 'react-toastify';

import { User } from '../../types/UserTypes'
import { UserContext } from '../../context/UserContext';
import { UserContextType } from '../../types/ContextTypes';

const initial = {
  uid: '',
  name: '',
  email: '',
  profession: '',
  description: '',
  birthDay: ''
}

export const UserForm = () => {
  const { userSelected, handleAddUser, handleSelectedEditClear, handleUpdateUser } = useContext(UserContext) as UserContextType

  const [valuesForm, setValuesForm] = useState<User>(initial)

  const handleOnChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement
    
    setValuesForm({
      ...valuesForm,
      [target.name]: target.value
    })
  }

  const { name, email, profession, description, birthDay } = valuesForm

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!name || !email || !profession || !birthDay) {
      toast.error('Incomplete data')
      return
    }

    const user = valuesForm

    if (!userSelected) {
      user.uid = uid()
      handleAddUser(user)

      toast.success('User created successfully')
    } else {
      handleUpdateUser(user)

      toast.success('User updated successfully')
    }

    setValuesForm(initial)
  }

  useEffect(() => {
    if (userSelected) {
      setValuesForm(userSelected)
    } else {
      setValuesForm(initial)
    }
  }, [userSelected])
  
  return (
    <section className='border border-gray-200 p-4 rounded-lg dark:border-slate-700'>
      <h5 className='font-medium text-2xl'>{ userSelected ? 'Update User' : 'Create User' }</h5>
      <hr className='border dark:border-gray-700' />
      <form onSubmit={ handleSubmit } className='mt-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <fieldset>
            <label htmlFor='name' className='block font-medium'>Name</label>
            <input type='text' id='name' name='name' value={ name } onChange={ handleOnChange } placeholder='Name' className='block w-full border boder-gray-100 rounded-md bg-gray-50 text-sm px-4 py-2 dark:bg-gray-700 dark:border-slate-700' />
          </fieldset>
          <fieldset>
            <label htmlFor='email' className='block font-medium'>Email</label>
            <input type='email' id='email' name='email' value={ email } onChange={ handleOnChange } placeholder='Email' className='block w-full border boder-gray-100 rounded-md bg-gray-50 text-sm px-4 py-2 dark:bg-gray-700 dark:border-slate-700' />
          </fieldset>
          <fieldset>
            <label htmlFor='profession' className='block font-medium'>Profession</label>
            <input type='text' id='profession' name='profession' value={ profession } onChange={ handleOnChange } placeholder='Profession' className='block w-full border boder-gray-100 rounded-md bg-gray-50 text-sm px-4 py-2 dark:bg-gray-700 dark:border-slate-700' />
          </fieldset>
        </div>
        <fieldset className='mt-4'>
          <label htmlFor='description' className='block font-medium'>Description</label>
          <textarea name='description' id='description' value={ description } onChange={ handleOnChange } placeholder='Description ...' rows={ 3 } className='block w-full border boder-gray-100 rounded-md bg-gray-50 text-sm px-4 py-2 dark:bg-gray-700 dark:border-slate-700'></textarea>
        </fieldset>
        <fieldset className='mt-4'>
          <label htmlFor='birthDay' className='block font-medium'>BirthDay</label>
          <input type='date' name='birthDay' id='birthDay' value={ birthDay } onChange={ handleOnChange } className='block w-full border boder-gray-100 rounded-md bg-gray-50 text-sm px-4 py-2 dark:bg-gray-700 dark:border-slate-700' />
        </fieldset>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          <fieldset>
            <label htmlFor='links' className='block font-medium'>WEB</label>
            <input type='text' id='links' value={ links } onChange={ (e) => handleLinks(e) } placeholder='Link of your website' name='links[]' className='block w-full border boder-gray-100 rounded-md bg-gray-50 text-sm px-4 py-2 dark:bg-gray-700 dark:border-slate-700' />
          </fieldset>
          <fieldset>
            <label htmlFor='links' className='block font-medium'>GitHub</label>
            <input type='text' id='links' value={ links } onChange={ (e) => handleLinks(e) } placeholder='Link of your GitHub' name='links[]' className='block w-full border boder-gray-100 rounded-md bg-gray-50 text-sm px-4 py-2 dark:bg-gray-700 dark:border-slate-700' />
          </fieldset>
          <fieldset>
            <label htmlFor='links' className='block font-medium'>Linkedin</label>
            <input type='text' id='links' value={ links } onChange={ handleOnChange } placeholder='Link of your Linkedin' name='links[]' className='block w-full border boder-gray-100 rounded-md bg-gray-50 text-sm px-4 py-2 dark:bg-gray-700 dark:border-slate-700' />
          </fieldset>
          <fieldset>
            <label htmlFor='links' className='block font-medium'>Twitter</label>
            <input type='text' id='links' value={ links } onChange={ handleOnChange } placeholder='Link of your Twitter' name='links[]' className='block w-full border boder-gray-100 rounded-md bg-gray-50 text-sm px-4 py-2 dark:bg-gray-700 dark:border-slate-700' />
          </fieldset>
        </div> */}
        <div className={`mt-4 grid ${ userSelected ? 'grid-cols-2' : 'grid-cols-1' } gap-4`}>
          <button type='submit' className='w-full bg-blue-700 text-white font-medium px-4 py-2 rounded-xl hover:bg-blue-600'>
            { userSelected ? 'Update' : 'Save' }
          </button>
          {
            userSelected
              ? <button type='button' onClick={ handleSelectedEditClear } className='w-full bg-gray-700 text-white font-medium px-4 py-2 rounded-xl hover:bg-gray-600'>
                  Cancel
                </button>
              : ''
          }
        </div>
      </form>
    </section>
  )
}
