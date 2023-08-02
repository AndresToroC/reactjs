import { HeaderComponent } from "./components/HeaderComponent"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <ThemeProvider>
      <HeaderComponent />

    </ThemeProvider>
  )
}

export default App
