import { country_list } from "../country_list";

export const SelectCurrency = ({ name, label }) => {
  
  return (
    <>
      <fieldset>
        <label htmlFor={ name } className='block font-medium mb-2'>{ label }</label>
        <select name={ name } id={ name } className='block bg-gray-100 border border-gray-300 p-2.5 rounded-md w-full text-sm' defaultValue=''>
          <option disabled value=''>Select a choice</option>
          {
            Object.entries(country_list).map((country, index) => {
              return (
                <option value={ country[0] } key={ index }>{ country[1] }</option>
              )
            })
          }
        </select>
      </fieldset>
    </>
  )
}