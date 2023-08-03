
export const UserForm = () => {
  return (
    <section className='border border-gray-200 p-4 rounded-lg dark:border-slate-700'>
      <h5 className='font-medium text-2xl'>Form user</h5>
      <hr className='border dark:border-gray-700' />
      <form className='mt-4'>
        <fieldset>
          <label htmlFor='' className='block font-medium'>Name</label>
          <input type='text' className='block w-full border boder-gray-100 rounded-md bg-gray-50 text-sm px-4 py-2 dark:bg-gray-700 dark:border-slate-700'  />
        </fieldset>
      </form>
    </section>
  )
}
