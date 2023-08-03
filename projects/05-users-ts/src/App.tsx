import { Header } from "./components/Header"
import { UserComponent } from "./components/users/UserComponent"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>

      <main className='mx-auto max-w-6xl p-4'>
        <UserComponent />
      </main>
    </>
  )
}

export default App
