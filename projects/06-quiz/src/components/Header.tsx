import { MoonIcon, SunIcon } from './Icons'
import { useThemeContext } from '../hook/useThemeContext'

export const Header = () => {
  const { theme, handleChangeTheme } = useThemeContext()

  return (
    <header className='p-4'>
      <nav className='flex justify-center'>
        <p className='text-2xl font-bold'>Quiz</p>
        <div className='group absolute right-4 p-2.5 -m-2.5'>
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
