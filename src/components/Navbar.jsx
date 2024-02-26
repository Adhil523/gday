import React, { useState } from 'react'
import gdsc from '../assets/gdsc-logo.png'
import { FaPerson } from "react-icons/fa6";

const Navbar = ({changeImage,changeText}) => {

  const [toggle,changeToggle]=useState(false)
  const [image,setImage]=useState(false)
  const [text,setText]=useState(false)
  const [colour,setColour]=useState(false)


  const [bcolour,setBcolour]=useState(false)
  const [bcolour1,setBcolour1]=useState(false)
  const [bcolour2,setBcolour2]=useState(false)


  const handleToggle= ()=>{
    changeToggle(!toggle)
  }

  const handleImage= ()=>{
    setImage(!image)
    setBcolour1(!bcolour1)
    changeImage()
  }

  const handleText= ()=>{
    setText(!text)
    setBcolour(!bcolour)
    changeText()
  }

  const handleColour=()=>{
    setColour(!colour)
    
  }
  

  return (
    <div className='w-full h-20 flex   border-opacity-30 border-gray-500  gap-2 px-4  sm:px-8 items-center justify-center'>
      <div className='flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-x-4  '>
        <div className='flex gap-x-2 '>
          <img src={gdsc} alt='logo' className={!image ? 'w-10  h-10' : 'hidden'}></img>
          {/* <h1 className='m-auto text-base line-clamp-1 sm:text-3xl font-greg w-full text-black'>GDSC Gect</h1> */}
        </div>
        {/* <div className='flex gap-x-2'>
          <img src={gdsc} alt='logo' className={!image ? 'w-10  h-10' : 'hidden'}></img>
          <h1 className='m-auto text-base line-clamp-1 sm:text-3xl font-greg text-black'>GDSC Kerala</h1>
        </div> */}
      </div>
      <div className='ml-auto my-4 '>
        <button className='rounded-full text-base sm:text-lg text-white bg-blue-500 p-2 font-greg hover:bg-black ease-in-out duration-300' onClick={handleToggle}><FaPerson size={30}/></button>
      </div>
      <div className={toggle ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 flex:col' : 'fixed hidden top-0 left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full sm:text-3xl text-lg font-bold text-white pt-3 m-2'>Test out our <span className='text-blue-500'>Neurodivergence</span> tools!</h1>
        <div className='grid md:grid-cols-2 w-full mx-auto gap-6 p-8'>
            <button className={!bcolour ? "btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg" : "btn bg-slate-300 text-black btn-xs sm:btn-sm md:btn-md lg:btn-lg"} onClick={handleText}>Larger text</button>
            <button className={!bcolour1 ? "btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg" : "btn bg-slate-300 text-black btn-xs sm:btn-sm md:btn-md lg:btn-lg"} onClick={handleImage}>No images</button>

        </div>
    </div>
    </div>
  )
}

export default Navbar