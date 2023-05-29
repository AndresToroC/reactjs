import React, { useContext } from 'react'
import { IconBrightnessDown, IconMoonFilled } from '@tabler/icons-react';
import { DarkModeContext } from '../context/DarkModeProvider';

export const Header = () => {
  const { theme, toogleDarkMode } = useContext(DarkModeContext)
  
  return (
    <header className={ theme ? `bg-white border border-b-gray-300 text-black` : `bg-slate-800 text-white` }>
      <nav className="p-4">
        <div className='flex justify-between'>
          {/* Logo */}
          <div>
            <p className="uppercase font-bold">Password Generator</p>
          </div>
          <div>
            {
              theme
                ? <IconBrightnessDown size={ 26 } stroke={ 2 } onClick={ () => toogleDarkMode(!theme) } />
                : <IconMoonFilled size={ 26 } stroke={ 2 } onClick={ () => toogleDarkMode(!theme) } />
            }
          </div>
        </div>
      </nav>
    </header>
  )
}
