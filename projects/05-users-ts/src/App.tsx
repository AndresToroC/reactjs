import { Header } from './components/Header'
import { UserComponent } from './components/users/UserComponent'
import { ThemeProvider } from './context/ThemeContext'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>

      <main className='mx-auto max-w-6xl p-4'>
        <UserComponent />
      </main>

      <ToastContainer autoClose={ 1000 } />
    </>
  )
}

export default App
