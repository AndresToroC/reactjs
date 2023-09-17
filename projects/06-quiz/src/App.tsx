import { Header } from './components/Header';
import { QuizProvider } from './context/QuizContext';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { Router } from './router/Router';

function App() {
  return (
    <main className='mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 px-10 py-8 text-sm dark:text-neutral-300 md:gap-20 md:py-16'>
      <UserProvider>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
        <QuizProvider>
          <Router />
        </QuizProvider>
      </UserProvider>
    </main>
  )
}

export default App