import React from 'react'
import { SelectCurrency } from './SelectCurrency'
import { useForm } from '../hooks/useForm'

export const FormCurrency = () => {
  // console.log(import.meta.env.VITE_API_URL);

  // GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP/AMOUNT

  const { valuesForm, handleInputChange } = useForm({
    amount: 1,
    currency_from: '',
    currency_to: ''
  })

  const { amount, currency_from, currency_to } = valuesForm

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(valuesForm);
  }

  return (
    <>
      <div className='bg-white p-6 border border-gray-200 rounded-lg'>
        <h2 className='text-2xl font-bold text-center mb-4'>Currency Convert</h2>
        <form onSubmit={ handleSubmit }>
          <fieldset className='mb-3'>
            <label htmlFor='amount' className='block font-medium mb-2'>Amount</label>
            <input type='number' id='amount' name='amount' value={ amount } onChange={ handleInputChange } min={ 1 } className='block border border-gray-300 bg-gray-100 w-full rounded-md text-sm p-2.5' />
          </fieldset>
          <div className='grid grid-cols-2 gap-4 mb-3'>
            {/* From Currency */}
            <SelectCurrency name='currency_from' label='From' value={ currency_from } selectOnChange={ handleInputChange.bind(this) } />

            {/* To Currency */}
            <SelectCurrency name='currency_to' label='To' value={ currency_to } selectOnChange={ handleInputChange } />
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
