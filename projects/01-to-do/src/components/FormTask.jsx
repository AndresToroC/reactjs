import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';

import { ListTask } from './ListTask'
import { useForm } from '../hooks/useForm'
import { statusData } from '../helpers/statusData';
import { taskStore } from '../store/taskStore';

export const FormTask = () => {
  const { tasks, selectedTask, setTasks, setselectedTask } = taskStore();

  const { valueForm, handleInputChange, resetForm, setValue } = useForm({
    id: '',
    name: '',
    description: '',
    date_start: '',
    date_end: '',
    status: ''
  });

  useEffect(() => {
    if (selectedTask !== null) {
      const task = tasks.find(task => task.id === selectedTask);

      setValue(task);
    }
  }, [selectedTask])
  
  const { id: idTask, name, description, date_start, date_end, status } = valueForm;

  const handleSubmitForm = (event) => {
    event.preventDefault();
    
    if (!name.length) {
      Swal.fire('', 'The name field is required', 'error')
      return
    } 
    
    if (!description.length) {
      Swal.fire('', 'The description field is required', 'error')
      return
    }

    if (Date.parse(date_start) > Date.parse(date_end)) {
      Swal.fire('', 'The start date is greater than the end date', 'error')
      return
    }

    if (!status.length) {
      Swal.fire('', 'The status field is required', 'error')
      return
    }

    if (idTask) {
      // Update task
      const taskIndex = tasks.findIndex(task => task.id === idTask);
      
      tasks[taskIndex] = valueForm;
      setTasks(tasks)
      Swal.fire('Updated', 'Task updated succesfully', 'success')
    } else {
      // Create task
      const id = uuidv4();
      valueForm.id = id;
      
      // Save tasks
      tasks.push(valueForm)
      setTasks(tasks)
      Swal.fire('Created', 'Task created succesfully', 'success')
    }

    setselectedTask(null)
    resetForm();
  }

  const clearForm = () => {
    resetForm()
    setselectedTask(null)
  }  
  
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='md:col-span-1'>
          {/* Card tasks */}
          <div className='bg-white border border-gray-200 rounded-lg p-6'>
            <h5 className='mb-4 font-bold text-2xl text-center'>Form Task</h5>
            {/* Form task */}
            <form onSubmit={ handleSubmitForm }>
              <fieldset className='mb-3'>
                <label htmlFor='task' className='block font-medium mb-2'>Task</label>
                <input type='text' id='task' name='name' value={ name } onChange={ handleInputChange } maxLength={ 30 } className='block bg-gray-50 border border-gray-300 p-2.5 rounded-md text-gray-900 text-sm w-full' placeholder='New task' required />
              </fieldset>
              <fieldset className='mb-3'>
                <label htmlFor='description' className='block font-medium mb-2'>Description</label>
                <textarea id='description' name='description' value={ description } onChange={ handleInputChange } className='block bg-gray-50 border border-gray-300 p-2.5 rounded-md text-gray-900 text-sm w-full' rows='5' placeholder='Decription' required></textarea>
              </fieldset>
              <div className='grid grid-cols-2 gap-4 mb-3'>
                <fieldset className='mb-3'>
                  <label htmlFor='date_start' className='block font-medium mb-2'>Date start</label>
                  <input type='date' id='date_start' name='date_start' value={ date_start } onChange={ handleInputChange } className='block bg-gray-50 border border-gray-300 p-2.5 rounded-md text-gray-900 text-sm w-full' required />
                </fieldset>
                <fieldset className='mb-3'>
                  <label htmlFor='date_end' className='block font-medium mb-2'>Date end</label>
                  <input type='date' id='date_end' name='date_end' value={ date_end } onChange={ handleInputChange } className='block bg-gray-50 border border-gray-300 p-2.5 rounded-md text-gray-900 text-sm w-full' required />
                </fieldset>
              </div>
              <fieldset className='mb-3'>
                <label htmlFor='status' className='block font-medium mb-2'>Status</label>
                <select name='status' id='status' value={ status } onChange={ handleInputChange } className='block bg-gray-50 border border-gray-300 p-2.5 rounded-lg text-sm w-full' required>
                  <option disabled={ true } value=''>Select a choice</option>
                  {
                    statusData.map(status => {
                      return (
                        <option key={ status.code } value={ status.code }>{ status.name }</option>
                      )
                    })
                  }
                </select>
              </fieldset>
              <fieldset className='flex gap-2'>
                <button type='submit' className={ `block ${ (selectedTask !== null) ? 'bg-blue-500' : 'bg-green-500' } px-2 py-1 rounded-lg
                  text-white font-medium ${ (selectedTask !== null) ? 'hover:bg-blue-700' : 'hover:bg-green-700' }` }>
                  { (selectedTask !== null) ? 'Edit' : 'Save' }
                </button>
                <button type='button' onClick={ () => clearForm() } className='block bg-gray-600 px-2 py-1 rounded-lg text-white font-medium hover:bg-gray-700'>Clear</button>
              </fieldset>
            </form>
            {/* End form task */}
          </div>
        </div>
        <div className='md:col-span-2'>
          <ListTask />
        </div>
      </div>
    </>
  )
}
