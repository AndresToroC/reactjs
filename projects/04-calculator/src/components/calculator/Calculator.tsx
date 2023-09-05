import { useState } from "react"

export const Calculator = () => {
  const [number, setNumber] = useState('')
  const [operation, setOperation] = useState('')

  const handleAddNumber = (e) => {
    const val = e.target.value
    const newValue = `${ number }${ val }`

    setNumber(newValue)
  }

  const handleAddSymbol = (symbol: string) => {
    if (!number && symbol === '.') setNumber(`0${ symbol }`)
    if (!number) return

    if (symbol !== '.') {
      setNumber(number + ` ${ symbol } `)
    } else {      
      setNumber(number + symbol)
    }
  }

  const handleClearCalculator = () => {
    setOperation('')
    setNumber('')
  }

  const handleCalculate = () => {
    const result = eval(number)

    setOperation(number)
    setNumber(result)
  }

  return (
    <>
      <div className='grid grid-cols-4 gap-4'>
        <section className='relative col-span-4 bg-slate-100 dark:bg-slate-600 p-4 rounded-2xl h-32'>
          <div className={` absolute right-4 ${ number ? 'bottom-16' : 'bottom-4' } text-2xl `}>
            { operation }
          </div>
          <div className='absolute right-4 bottom-4 text-2xl'>
            { number }
          </div>
        </section>
        <section className='col-span-4 grid grid-cols-4 gap-4'>
          <button className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2 font-bold col-span-2' onClick={ handleClearCalculator }>C</button>
          <button className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2 font-bold'>DEL</button>
          <button className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2 font-bold' onClick={ () => handleAddSymbol('/') }>/</button>
        </section>
        <section className='col-span-4 grid grid-cols-4 gap-4'>
          <input type='button' value={ '7' } onClick={ handleAddNumber } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
          <input type='button' value={ '8' } onClick={ handleAddNumber } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
          <input type='button' value={ '9' } onClick={ handleAddNumber } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
          <input type='button' value='X' onClick={ () => handleAddSymbol('*') } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
        </section>
        <section className='col-span-4 grid grid-cols-4 gap-4'>
          <input type='button' value={ '4' } onClick={ handleAddNumber } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
          <input type='button' value={ '5' } onClick={ handleAddNumber } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
          <input type='button' value={ '6' } onClick={ handleAddNumber } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
          <input type='button' value='-' onClick={ () => handleAddSymbol('-') } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
        </section>
        <section className='col-span-4 grid grid-cols-4 gap-4'>
          <input type='button' value={ '1' } onClick={ handleAddNumber } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
          <input type='button' value={ '2' } onClick={ handleAddNumber } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
          <input type='button' value={ '3' } onClick={ handleAddNumber } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
          <input type='button' value='+' onClick={ () => handleAddSymbol('+') } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
        </section>
        <section className='col-span-4 grid grid-cols-4 gap-4'>
          <input type='button' value={ '0' } onClick={ handleAddNumber } className='col-span-2 bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
          <input type='button' value='.' onClick={ () => handleAddSymbol('.') } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2' />
          <input type='button' value='=' onClick={ handleCalculate } className='bg-slate-100 dark:bg-slate-600 rounded-md px-4 py-2 font-bold text-xl' />
        </section>
      </div>
    </>
  )
}
