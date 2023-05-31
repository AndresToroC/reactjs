import React, { useState } from 'react'
import { IconCopy, IconRefresh } from '@tabler/icons-react'

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const PasswordGenerator = () => {
  const [lengthPassword, setLengthPassword] = useState(12)
  const [password, setPassword] = useState('asjhgdasdhfjg6468');

  const copyPassword = () => {
    navigator.clipboard.writeText(password)

    toast.success('Password copied successfully', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500
    });
  }

  return (
    <main>
      <ToastContainer />
      <div className='mx-auto py-12 lg:px-48 max-w-6xl'>
        <div className='text-center mb-6'>
          <h2 className='font-bold text-4xl capitalize'>Generate a random and secure password</h2>
        </div>
        <div className='bg-white border border-gray-200 rounded-lg p-8 mb-6'>
          <div className='flex justify-between'>
            <p className='font-bold text-3xl'>{ password }</p>
            <div className='flex gap-4'>
              <IconCopy size={ 36 } onClick={ copyPassword } style={{ cursor: 'pointer' }} />
              <IconRefresh size={ 36 } style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </div>
        <div className='bg-white p-6 rounded-lg border border-gray-200'>
          <p className='font-bold text-2xl capitalize'>Personalize password</p>
          <hr />
          <form>
            <div className='grid grid-cols-4 gap-4 mt-4'>
              <div className='col-span-2'>
                <fieldset>
                  <label htmlFor='password_length' className='block font-medium mb-2'>Password length</label>
                  <div className='flex items-center gap-4'>
                    <input type='number' name='password_length' id='password_length' className='block border border-gray-200 bg-gray-100 w-20 text-sm rounded-md p-2.5' 
                      value={ lengthPassword } onChange={ (e) => setLengthPassword(e.target.value) } max={ 50 } min={ 1 } />
                    <input type='range' name='' id='' value={ lengthPassword } onChange={ (e) => setLengthPassword(e.target.value) } max={ 50 } min={ 1 } className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' />
                  </div>
                </fieldset>
              </div>
              <div className='col-span-1 mt-4'>
                <fieldset>
                  <input id='filter_uppercase' type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded' />
                  <label htmlFor='filter_uppercase' className='ml-2 text-sm font-medium text-gray-600'>Uppercase</label>
                </fieldset>
                <fieldset>
                  <input id='filter_lowerCase' type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded' />
                  <label htmlFor='filter_lowerCase' className='ml-2 text-sm font-medium text-gray-600'>Lower case</label>
                </fieldset>
              </div>
              <div className='col-span-1 mt-4'>
                <fieldset>
                  <input id='filter_numbers' type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded' />
                  <label htmlFor='filter_numbers' className='ml-2 text-sm font-medium text-gray-600'>Numbers</label>
                </fieldset>
                <fieldset>
                  <input id='filter_Ssmbols' type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded' />
                  <label htmlFor='filter_Ssmbols' className='ml-2 text-sm font-medium text-gray-600'>Symbols</label>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        <div className='mt-4 text-center'>
          <button className='bg-blue-700 hover:bg-blue-600 p-4 rounded-full text-white font-bold' onClick={ copyPassword }>
            Copy Password
          </button>
        </div>
      </div>
    </main>
  )
}
