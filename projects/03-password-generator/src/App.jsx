import { Header } from './components/Header';
import { DarkModeProvider } from './context/DarkModeProvider';

function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
      </DarkModeProvider>
    </>
  )
}

export default App
