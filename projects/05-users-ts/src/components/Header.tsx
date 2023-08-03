import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Theme as ThemeType } from '../types/ContextTypes'
import { MoonIcon, SunIcon } from './Icons'

export const Header = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext) as ThemeType

  return (
    <header className='p-4'>
      <nav className='flex justify-center'>
        <p className='font-bold text-2xl'>Users</p>
        <div className='group absolute right-4 -m-2.5 p-2.5'>
          <button onClick={ handleChangeTheme }>
            {
              theme
                ? <SunIcon />
                : <MoonIcon />
            }
          </button>
        </div>
      </nav>
    </header>
  )
}
