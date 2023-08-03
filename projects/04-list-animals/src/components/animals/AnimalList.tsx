import { useContext } from "react"
import { AnimalContext } from "../../context/AnimalContext";
import { AnimalsType } from "../../types/interfaceContext.d";

export const AnimalList = () => {
  const { animals } = useContext(AnimalContext) as AnimalsType

  return (
    <section className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-800 rounded-lg p-6">
      <div className="relative overflow-x-auto h-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Race</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {
              animals.map(animal => (
                <tr key={ animal.code } className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900  dark:text-white">{ animal.name }</td>
                  <td className="px-6 py-4">{ animal.race }</td>
                  <td className="px-6 py-4">{ animal.type }</td>
                  <td className="px-6 py-4"></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}
