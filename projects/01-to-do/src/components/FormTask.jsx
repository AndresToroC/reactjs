import React from 'react'
import { ListTask } from './ListTask'

export const FormTask = () => {
  return (
    <>
      {/* Card tasks */}
      <div className='bg-white border border-gray-200 rounded-lg p-6 lg:w-3/5'>
        <h5 className='mb-4 font-bold text-2xl text-center'>Form Task</h5>
        {/* Form task */}
        <form className='mb-3'>
          <fieldset className='mb-3'>
            <label htmlFor="task" className='block font-medium mb-2'>Task</label>
            <input type="text" id='task' className='block bg-gray-50 border border-gray-300 p-2.5 rounded-md text-gray-900 text-sm w-full' placeholder='New task' />
          </fieldset>
          <div className='grid grid-cols-2 gap-4'>
            <fieldset className='mb-3'>
              <label htmlFor="date_start" className='block font-medium mb-2'>Date start</label>
              <input type="date" id='date_start' className='block bg-gray-50 border border-gray-300 p-2.5 rounded-md text-gray-900 text-sm w-full' placeholder='New task' />
            </fieldset>
            <fieldset className='mb-3'>
              <label htmlFor="date_end" className='block font-medium mb-2'>Date end</label>
              <input type="date" id='date_end' className='block bg-gray-50 border border-gray-300 p-2.5 rounded-md text-gray-900 text-sm w-full' placeholder='New task' />
            </fieldset>
          </div>
          <fieldset className='flex gap-2'>
            <button type='submit' className='block bg-green-600 px-2 py-1 rounded-lg text-white font-medium hover:bg-green-700'>Save</button>
            <button className='block bg-gray-600 px-2 py-1 rounded-lg text-white font-medium hover:bg-gray-700'>Clear</button>
          </fieldset>
        </form>
        {/* End form task */}
        <ListTask />
      </div>
    </>
  )
}
