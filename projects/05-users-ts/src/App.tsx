import { Header } from "./components/Header"
import { UserComponent } from "./components/users/UserComponent"

function App() {
  return (
    <>
      <Header />

      <main className='mx-auto max-w-6xl p-4'>
        <UserComponent />
      </main>
    </>
  )
}

export default App
