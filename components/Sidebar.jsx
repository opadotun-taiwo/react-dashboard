import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'

const SideBar = ({children}) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
            <Link href='/'>
                <div className='text-white bg-purple-800 inline-block rounded-lg p-3'>
                    <RxSketchLogo size={20}/>
                </div>
            </Link>
            <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
            <Link href='/'>
                <div className=' bg-gray-100 hover:bg-gray-200 inline-block rounded-lg p-3 my-4 cursor-pointer'>
                    <RxDashboard size={20}/>
                </div>
            </Link>
            <Link href='/customers'>
                <div className=' bg-gray-100 hover:bg-gray-200 inline-block rounded-lg p-3 my-4 cursor-pointer'>
                    <RxPerson size={20}/>
                </div>
            </Link>
            <Link href='/orders'>
                <div className=' bg-gray-100 hover:bg-gray-200 inline-block rounded-lg p-3 my-4 cursor-pointer'>
                    <HiOutlineShoppingBag size={20}/>
                </div>
            </Link>
            <Link href='/settings'>
                <div className=' bg-gray-100 hover:bg-gray-200 inline-block rounded-lg p-3 my-4 cursor-pointer'>
                    <FiSettings size={20}/>
                </div>
            </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default SideBar
