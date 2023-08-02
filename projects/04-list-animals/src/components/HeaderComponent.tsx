import { useState } from 'react'

import SunSvg from '../assets/sun.svg'
import MoonSvg from '../assets/moon.svg'

export const HeaderComponent = () => {
  const [theme, setTheme] = useState(false)

  return (
    <header className='p-4'>
      <nav className='flex justify-center'>
        <p className='text-2xl'>Animals</p>
        <button className='group absolute right-4 top-4 -m-2.5 p-2.5' onClick={ () => setTheme(!theme) }>
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
