import { useState } from 'react';
import { useUserContext } from '../../hook/useUserContext';
import { UserInitial, UserType } from '../../types/types';

export const AuthComponent = () => {
  const { handleLogin } = useUserContext();

  const [valuesForm, setValuesForm] = useState<UserType>(UserInitial)

  const handleInputChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement

    setValuesForm({
      ...valuesForm,
      [target.name]: target.value
    })
  }

  const { document, email } = valuesForm

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    handleLogin(valuesForm)
  }

  return (
    <>
      <section className='bg-zinc-100 border border-gray-200 rounded-lg p-5 dark:border-gray-700 dark:bg-slate-900'>
        <h5 className='text-2xl'>Login</h5>
        <hr className='mt-2 mb-3 border dark:border-gray-700' />
        <form onSubmit={ handleSubmit }>
          <fieldset>
            <label htmlFor='document' className='font-medium block mb-2'># Document</label>
            <input type='text' id='document' name='document' value={ document } onChange={ handleInputChange } className='block w-full border border-gray-200 bg-gray-50 text-sm px-2 py-3 rounded-md dark:bg-slate-700 dark:border-gray-700' />
          </fieldset>
          <fieldset className='mt-3'>
            <label htmlFor='email' className='font-medium block mb-2'>Email</label>
            <input type='email' id='email' name='email' value={ email } onChange={ handleInputChange } className='block w-full border border-gray-200 bg-gray-50 text-sm px-2 py-3 rounded-md dark:bg-slate-700 dark:border-gray-700' />
          </fieldset>
          <fieldset className='mt-4'>
            <button className='w-full px-2 py-3 bg-blue-700 rounded-full hover:bg-blue-600 font-medium text-white'>Log in</button>
          </fieldset>
        </form>
      </section>
    </>
  )
}
