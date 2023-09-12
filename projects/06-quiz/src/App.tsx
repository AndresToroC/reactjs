import { AuthComponent } from './components/Auth/AuthComponent';
import { Header } from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <main className='mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 px-10 py-8 text-sm text-neutral-400 md:gap-20 md:py-16'>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <UserProvider>
        <AuthComponent />
      </UserProvider>
    </main>
  )
}

export default App