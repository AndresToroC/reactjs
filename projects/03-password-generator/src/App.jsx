import { Header } from './components/Header';
import { PasswordGenerator } from './components/PasswordGenerator';
import { DarkModeProvider } from './context/DarkModeProvider';

function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <PasswordGenerator />
      </DarkModeProvider>
    </>
  )
}

export default App
