

export const AnimalForm = () => {
  return (
    <section className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-800 rounded-lg p-6">
      <h5 className="text-center font-medium">Form Animal</h5>
      <form className="mt-4">
        <fieldset className="mb-3">
          <label htmlFor="name" className="block font-medium mb-2">Name</label>
          <input type="text" name="name" id="name" className="block w-full bg-gray-50 border border-gray-300 p-1.5 rounded-md text-sm dark:bg-slate-600 dark:border-slate-700" />
        </fieldset>
        <fieldset className="mb-3">
          <label htmlFor="race" className="block font-medium mb-2">Race</label>
          <input type="text" name="race" id="race" className="block w-full bg-gray-50 border border-gray-300 p-1.5 rounded-md text-sm dark:bg-slate-600 dark:border-slate-700" />
        </fieldset>
        <fieldset className="mb-3">
          <label htmlFor="type" className="block font-medium mb-2">Type</label>
          <input type="text" name="type" id="type" className="block w-full bg-gray-50 border border-gray-300 p-1.5 rounded-md text-sm dark:bg-slate-600 dark:border-slate-700" />
        </fieldset>
      </form>
    </section>
  )
}
