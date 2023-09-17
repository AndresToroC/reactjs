import { MoonIcon, SunIcon } from './Icons'
import { useThemeContext } from '../hook/useThemeContext'
import { useUserContext } from '../hook/useUserContext'

export const Header = () => {
  const { theme, handleChangeTheme } = useThemeContext()
  const { user, hanldleLogout } = useUserContext()

  return (
    <header>
      <div className='flex gap-4'>
        <section className='flex flex-1'></section>
        {
          user.isAuth
            ?
              <section className='flex flex-1 justify-end md:justify-center'>
                <nav className='hidden md:block'>
                  <ul className='flex gap-3 rounded-full bg-white/90 border border-gray-500 p-3 dark:bg-zinc-800'>
                    <li>Datos</li>
                    <li>Quiz</li>
                    <li onClick={ hanldleLogout }>Salir</li>
                  </ul>
                </nav>
              </section>
            : ''
        }
        <section className='flex flex-1 justify-end'>
          <button onClick={ handleChangeTheme }>
             {
               theme
                 ? <SunIcon />
                 : <MoonIcon />
             }
           </button>
        </section>
      </div>
    </header>
  )
}
