import { IconCopy, IconRefresh } from '@tabler/icons-react'
import React, { useState } from 'react'

export const PasswordGenerator = () => {
  const [lengthPassword, setLengthPassword] = useState(12)

  return (
    <main>
      <div className='mx-auto p-6 lg:px-48 max-w-7xl'>
        <div className='text-center mb-6'>
          <h2 className='font-bold text-4xl capitalize'>Generate a random and secure password</h2>
        </div>
        <div className='bg-white border border-gray-200 rounded-lg p-8 mb-6'>
          <div className='flex justify-between'>
            <p className='font-bold text-3xl'>asjhgdasdhfjg6468</p>
            <div className='flex gap-4'>
              <IconCopy size={ 36 } />
              <IconRefresh size={ 36 } />
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
      </div>
    </main>
  )
}
