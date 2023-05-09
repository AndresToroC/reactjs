import { useEffect, useState } from 'react';

export const SelectCurrency = ({ name, label, value, selectOnChange, required }) => {
  const API_URL = import.meta.env.VITE_API_URL
  const API_TOKEN = import.meta.env.VITE_API_TOKEN

  const [countries, setCountries] = useState([])

  const getCountries = async() => {
    const data = await fetch(`${ API_URL }${ API_TOKEN }/codes`);
    const json = await data.json();

    const options = json.supported_codes.map(country => {
      return {
        value: country[0],
        label: country[0] + ' - ' + country[1]
      }
    })
    
    setCountries(options)
  }

  useEffect(() => {
    getCountries();
  }, [])

  return (
    <>
      <fieldset>
        <label htmlFor={ name } className='block font-medium mb-2'>{ label }</label>
        <select name={ name } id={ name } value={ value } onChange={ selectOnChange } required={ required } className='block bg-gray-100 border border-gray-300 p-2.5 rounded-md w-full text-sm'>
          <option disabled value=''>Select a choice</option>
          {
            countries.map((country, index) => {
              return (
                <option value={ country.value } key={ index }>{ country.label }</option>
              )
            })
          }
        </select>
      </fieldset>
    </>
  )
}