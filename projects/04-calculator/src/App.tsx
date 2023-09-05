import { Header } from './components/Header';
import { Calculator } from './components/calculator/Calculator';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <main className='mx-auto max-w-sm p-4'>
        <Calculator />
      </main>
    </>
  )
}

export default App
