import React from 'react'


const settings = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <h2 className='flex justify-center text-lg font-bold'>
        Settings
      </h2>
      <div className='grid lg:grid-cols-4 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full p-4 border rounded-lg'>
          <div className='flex flex-col w-full pb-4'>
              <p className='text-2xl font-bold'>$8000</p>
              <p className='text-gray-600'>Total revenue</p>
          </div>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>$8000</p>
            <p className='text-gray-600'>Daily revenue</p>
        </div>
      </div>
    </div>

    <div className='grid lg:grid-cols-4 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full p-4 border rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>$8000</p>
            <p className='text-gray-600'>Total revenue</p>
        </div>
      </div>
      <div className='lg:col-span-2 col-span-1  bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>$8000</p>
            <p className='text-gray-600'>Daily revenue</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default settings
