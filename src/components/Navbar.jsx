import React, { useState } from 'react'
import gdsc from '../assets/gdsc-logo.png'

const Navbar = () => {

  const [toggle,changeToggle]=useState(false)
  const [image,changeImage]=useState(false)
  const [text,changeText]=useState(false)

  const handleToggle= ()=>{
    changeToggle(!toggle)
  }

  const handleImage= ()=>{
    changeImage(!image)
  }

  const handleText= ()=>{
    changeText(!text)
  }
  

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
        <button className='rounded-lg  text-base sm:text-lg text-white bg-blue-500 p-2 font-greg' onClick={handleToggle}>Register now</button>
      </div>
      <div className={toggle ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-0 top-0 left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] pt-3 m-2'>REACT.</h1>
        <div className='grid md:grid-cols-2 w-full max-w-[60%] mx-auto gap-2 p-8'>
          <div className='rounded-md bg-white text-black'>
            <button onClick={handleImage}>No images</button>

          </div>
          <div className='rounded-md bg-white text-black'>
            <button className={handleText}>Larger text</button>
          </div>

        </div>
    </div>
    </div>
  )
}

export default Navbar