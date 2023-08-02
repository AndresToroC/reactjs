import { useContext } from 'react'
import { ThemeContext, ThemeContextInterface } from '../context/ThemeContext'

import SunSvg from '../assets/sun.svg'
import MoonSvg from '../assets/moon.svg'

export const HeaderComponent = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext) as ThemeContextInterface

  return (
    <header className='p-4'>
      <nav className='flex justify-center'>
        <p className='text-2xl'>Animals</p>
        <button className='group absolute right-4 top-4 -m-2.5 p-2.5' onClick={ handleChangeTheme }>
          {
            theme
              ? <img src={ SunSvg } />
              : <img src={ MoonSvg } />
          }
        </button>
      </nav>
    </header>
  )
}
