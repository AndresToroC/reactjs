import { Header } from './components/Header'
import { UserComponent } from './components/users/UserComponent'
import { ThemeProvider } from './context/ThemeContext'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <ThemeProvider>
      <Header />

      <main className='mx-auto max-w-6xl p-4'>
        <UserProvider>
          <UserComponent />
        </UserProvider>
      </main>

      <ToastContainer autoClose={ 1000 } />
    </ThemeProvider>
  )
}

export default App
