import { FormCurrency } from "./components/FormCurrency"


function App() {

  return (
    <>
      <header>
        <nav className="bg-gray-800 py-5 text-center">
          <p className="text-3xl font-bold text-white">Currency Convert</p>
        </nav>
      </header>

      <main>
        <div className="mx-auto p-6 lg:px-8">
          <FormCurrency />
        </div>
      </main>
    </>
  )
}

export default App
