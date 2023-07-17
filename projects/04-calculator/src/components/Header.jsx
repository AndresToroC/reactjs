import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

import { IconSun, IconMoon } from '@tabler/icons-react';

export const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={ changeTheme } className='group absolute right-4 top-4 -m-2.5 p-2.5'>
        {
          theme
            ? <IconSun className='text-white' size={ 28 } />
            : <IconMoon size={ 28 } />
        }
      </button>
    </>
  )
}