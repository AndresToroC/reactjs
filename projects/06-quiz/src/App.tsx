import { Header } from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { Router } from './router/Router';

function App() {
  return (
    <main className='mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 px-10 py-8 text-sm text-neutral-400 md:gap-20 md:py-16'>
      <UserProvider>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
        <Router />
      </UserProvider>
    </main>
  )
}

export default App