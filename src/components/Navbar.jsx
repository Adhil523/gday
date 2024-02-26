import React from 'react'
import gdsc from '../assets/gdsc-logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-20 max-w-[1340px] flex border-b-2 mx-auto border-opacity-50 border-black pb-4 gap-2 '>
        <div className='p-2 flex'>
            <img src={gdsc} alt=''></img>
            <h1 className='m-auto text-3xl font-greg'>GDSC Gect</h1>
        </div>
        <div className='p-2 flex'>
            <img src={gdsc} alt=''></img>
            <h1 className='m-auto text-3xl font-greg'>GDSC Kerala</h1>
        </div>
        <div className='ml-auto my-4 '>
            <button className='rounded-lg bg-blue-500 p-2 font-greg'>Register now</button>
        </div>
    </div>
  )
}

export default Navbar