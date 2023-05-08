import React from 'react'

export const FormCurrency = () => {
  return (
    <>
      <div className='bg-white p-6 border border-gray-200 rounded-lg'>
        <h2 className='text-2xl font-bold text-center mb-4'>Currency Convert</h2>
        <form >
          <fieldset className='mb-3'>
            <label htmlFor='amount' className='block font-medium mb-2'>Amount</label>
            <input type='number' id='amount' name='amount' className='block border border-gray-300 bg-gray-100 w-full rounded-md text-sm p-2.5' />
          </fieldset>
          <div className='grid grid-cols-2 gap-4 mb-3'>
            <fieldset>

            </fieldset>
            <fieldset>

            </fieldset>
          </div>
          <fieldset className='flex gap-2'>
            <button type="submit" className='bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded-lg'>Convert</button>
            <button className='bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded-lg'>Clear</button>
          </fieldset>
        </form>
      </div>
    </>
  )
}
