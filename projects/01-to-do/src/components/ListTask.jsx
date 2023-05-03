import React from 'react'

export const ListTask = () => {
  return (
    <>
      <hr />
      <div className='mt-5 h-80 overflow-y-auto'>
        <h2 className='mb-4 font-bold text-lg text-center'>List Tasks</h2>
        {/* <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>
            At least 10 characters (and up to 100 characters)
          </li>
          <li>
            At least 10 characters (and up to 100 characters)
          </li>
        </ul> */}

        <div className='relative overflow-x-auto overflow-y-auto h-48'>
          <table className='w-full text-sm text-center'>
            <thead className='uppercase bg-gray-50'>
              <tr>
                <th className='px-6 py-3'>Task</th>
                <th className='px-6 py-3'>Date</th>
                <th className='px-6 py-3'>Status</th>
                <th className='px-6 py-3'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td scope="row" className='px-6 py-4'>React js</td>
                <td className='px-6 py-4'>2023-05-03 | 2023-05-03</td>
                <td className='px-6 py-4'>Success</td>
                <td className='px-6 py-4'>
                  <button className='bg-blue-600 px-2 py-1 rounded-lg text-white'>Edit</button>
                </td>
              </tr>
              <tr className='border-b'>
                <td className='px-6 py-4 w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore ullam deleniti quia sint autem esse, inventore vel perferendis aliquid quod soluta quasi dolores ea, adipisci aspernatur. Eligendi, doloremque quisquam!</td>
                <td className='px-6 py-4'>2023-05-03 | 2023-05-03</td>
                <td className='px-6 py-4'>Success</td>
                <td className='px-6 py-4'>
                  <button className='bg-blue-600 px-2 py-1 rounded-lg text-white'>Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
