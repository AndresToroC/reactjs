import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { statusData } from '../helpers/statusData'

export const ListTask = () => {
  const [tasks, setTasks] = useState([])

  const deleteTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        tasks.splice(index, 1)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        setTasks(tasks)

        Swal.fire(
          'Deleted!',
          'The record has been deleted.',
          'success'
        )
      }
    })
  }

  const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    
    setTasks(tasks)
  }

  useEffect(() => {
    getTasks()
  }, [])
  
  return (
    <>
      <div className='bg-white border border-gray-200 rounded-lg p-6'>
        <h5 className='mb-4 text-2xl font-bold text-center'>List Tasks</h5>
        <div>
          <div className='relative overflow-x-auto h-full'>
            <table className='w-full text-sm text-center'>
              <thead className='uppercase bg-gray-50'>
                <tr>
                  <th className='px-6 py-3'>Task</th>
                  <th className='px-6 py-3'>Date</th>
                  <th className='px-6 py-3'>Status</th>
                  <th className='px-6 py-3'></th>
                </tr>
              </thead>
              <tbody>
                {
                  tasks.length ?
                      tasks.map((task, i) => {
                        const status = statusData.filter(e => e.code == task.status);

                        return (
                          <tr key={ i } className='border-b'>
                            <td scope="row" className='px-6 py-4'>{ task.name }</td>
                            <td className='px-6 py-4'>{ task.date_start } | { task.date_end }</td>
                            <td className='px-6 py-4'>{ (status[status.length - 1]) ? status[status.length - 1]['name'] : '-' }</td>
                            <td className='px-6 py-4'>
                              <div className='flex gap-2'>
                                <button className='bg-blue-600 px-2 py-1 rounded-lg text-white'>Edit</button>
                                <button onClick={ () => deleteTask(i) } className='bg-red-600 px-2 py-1 rounded-lg text-white'>Delete</button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    :
                      <tr className='border-b'>
                        <td colSpan={ 4 } className='px-6 py-4'>There's not records</td>
                      </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
