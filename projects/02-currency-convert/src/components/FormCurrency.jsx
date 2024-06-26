import React, { useState } from 'react'
import { SelectCurrency } from './SelectCurrency'
import { useForm } from '../hooks/useForm'

export const FormCurrency = () => {
  const API_URL = import.meta.env.VITE_API_URL
  const API_TOKEN = import.meta.env.VITE_API_TOKEN

  const [currency, setCurrency] = useState({})

  const { valuesForm, handleInputChange, reset, setValuesForm } = useForm({
    amount: 1,
    currency_from: '',
    currency_to: ''
  })

  const { amount, currency_from, currency_to } = valuesForm

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const data = await fetch(`${ API_URL }${ API_TOKEN }/pair/${ currency_from }/${ currency_to }/${ amount }`)    
    const res = await data.json();
    
    setCurrency(res);
  }

  const clearForm = () => {
    reset()
    setCurrency({})
  }

  const changeCurrency = () => {
    const from = currency_from;
    const to = currency_to;

    setValuesForm({
      ...valuesForm,
      currency_from: to,
      currency_to: from
    })

  }

  return (
    <>
      <div className='bg-white p-6 border border-gray-200 rounded-lg'>
        <h2 className='text-2xl font-bold text-center mb-4'>Currency Convert</h2>
        <form onSubmit={ handleSubmit } className='mb-4'>
          <fieldset className='mb-3'>
            <label htmlFor='amount' className='block font-medium mb-2'>Amount</label>
            <input type='number' id='amount' name='amount' value={ amount } onChange={ handleInputChange } min={ 1 } className='block border border-gray-300 bg-gray-100 w-full rounded-md text-sm p-2.5' />
          </fieldset>
          <div className='flex gap-4 mb-3'>
            <div className='flex-1'>
              {/* From Currency */}
              <SelectCurrency name='currency_from' label='From' value={ currency_from } selectOnChange={ handleInputChange.bind(this) } required={ true } />
            </div>
            <div className='flex-none self-end'>
              <button type='submit' onClick={ () => changeCurrency() } className='bg-gray-200 hover:bg-gray-300 p-2.5 border border-gray-300 rounded-lg'>Change</button>
            </div>
            <div className='flex-1'>
              {/* To Currency */}
              <SelectCurrency name='currency_to' label='To' value={ currency_to } selectOnChange={ handleInputChange } required={ true } />
            </div>
          </div>
          <fieldset className='flex gap-2'>
            <button type='submit' className='bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded-lg'>Convert</button>
            <button type='button' onClick={ () => clearForm() } className='bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded-lg'>Clear</button>
          </fieldset>
        </form>
        {
          (currency?.conversion_result) ?
            <>
              <hr />
              <div className='mt-4'>
                <h2 className='text-2xl font-medium text-center mb-4'>Results conversion: $ { new Intl.NumberFormat().format(currency.conversion_result) }</h2>
              </div>
            </>
          : ''
        }
      </div>
    </>
  )
}
