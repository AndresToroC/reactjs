import { AnimalForm } from "./AnimalForm"
import { AnimalList } from "./AnimalList"

export const AnimalComponent = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <AnimalForm />
        <section className="md:col-span-3">
          <AnimalList />
        </section>
      </div>
    </>
  )
}
