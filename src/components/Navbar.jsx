import React from 'react'
import gdsc from '../assets/gdsc-logo.png'

const Navbar = () => {
  return (
    <div className='w-full  h-20 flex border-b-2  border-opacity-50 border-black  gap-2 px-4  sm:px-8 items-center justify-center'>
      <div className='flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-x-4  '>
        <div className='flex gap-x-2 '>
          <img src={gdsc} alt='logo' className='w-10  h-10'></img>
          <h1 className='m-auto text-base line-clamp-1 sm:text-3xl font-greg w-full text-black'>GDSC Gect</h1>
        </div>
        <div className='flex gap-x-2'>
          <img src={gdsc} alt='logo' className='w-10 h-10'></img>
          <h1 className='m-auto text-base line-clamp-1 sm:text-3xl font-greg text-black'>GDSC Kerala</h1>
        </div>
      </div>
      <div className='ml-auto my-4 '>
        <button className='rounded-lg  text-base sm:text-lg text-white bg-blue-500 p-2 font-greg'>Register now</button>
      </div>
    </div>
  )
}

export default Navbar