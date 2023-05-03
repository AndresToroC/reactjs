import React from 'react'
import { FormTask } from './components/FormTask'

export const App = () => {
  return (
    <>
      <header>
        <nav className='bg-gray-800 py-5 text-center'>
          <p className='text-3xl font-bold text-white'>To-Do App</p>
        </nav>
      </header>

      <main>
        <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
          <div className='grid justify-items-center'>
            <FormTask />
          </div>
        </div>
      </main>
    </>
  )
}
