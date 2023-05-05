import React from 'react'

export const ListTask = () => {
  return (
    <>
      <div className='bg-white border border-gray-200 rounded-lg p-6'>
        <h5 className='mb-4 text-2xl font-bold text-center'>List Tasks</h5>
        <div>
          <div className='relative overflow-x-auto h-full'>
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
                  <td className='px-6 py-4 w-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae labore</td>
                  <td className='px-6 py-4'>2023-05-03 | 2023-05-03</td>
                  <td className='px-6 py-4'>Success</td>
                  <td className='px-6 py-4'>
                    <button className='bg-blue-600 px-2 py-1 rounded-lg text-white'>Edit</button>
                  </td>
                </tr>
                <tr className='border-b'>
                  <td className='px-6 py-4 w-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae labore</td>
                  <td className='px-6 py-4'>2023-05-03 | 2023-05-03</td>
                  <td className='px-6 py-4'>Success</td>
                  <td className='px-6 py-4'>
                    <button className='bg-blue-600 px-2 py-1 rounded-lg text-white'>Edit</button>
                  </td>
                </tr>
                <tr className='border-b'>
                  <td className='px-6 py-4 w-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae labore</td>
                  <td className='px-6 py-4'>2023-05-03 | 2023-05-03</td>
                  <td className='px-6 py-4'>Success</td>
                  <td className='px-6 py-4'>
                    <button className='bg-blue-600 px-2 py-1 rounded-lg text-white'>Edit</button>
                  </td>
                </tr>
                <tr className='border-b'>
                  <td className='px-6 py-4 w-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae labore</td>
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
      </div>
    </>
  )
}
