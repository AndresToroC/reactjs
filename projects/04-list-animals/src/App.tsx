import { HeaderComponent } from "./components/HeaderComponent"
import { AnimalComponent } from "./components/animals/AnimalComponent"
import { AnimalProvider } from "./context/AnimalContext"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <ThemeProvider>
      <HeaderComponent />
      <main className="mx-auto max-w-6xl py-6 px-4">
        <AnimalProvider>
          <AnimalComponent />
        </AnimalProvider>
      </main>
    </ThemeProvider>
  )
}

export default App
