import { useContext } from 'react'
import { MoonIcon, SunIcon } from './Icons'
import { ThemeContext, ThemeContextType } from '../context/ThemeContext'

export const Header = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext) as ThemeContextType

  return (
    <header className='p-4'>
      <nav className='flex justify-center'>
        <p className='font-bold text-2xl'>Calculator App</p>
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
