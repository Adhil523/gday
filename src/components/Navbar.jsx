import React, { useState } from 'react'
import gdsc from '../assets/gdsc-logo.png'
import { FaPerson } from "react-icons/fa6";

const Navbar = ({changeImage,changeText,changeColour,changeAni}) => {

  const [toggle,changeToggle]=useState(false)
  const [image,setImage]=useState(false)
  const [text,setText]=useState(false)
  const [colour,setColour]=useState(false)
  const [ani,setAni]=useState(false)


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
    setBcolour2(!bcolour2)
    changeColour()
    
  }

  const handleAni = ()=>{
    setAni(!ani)
    changeAni()

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
        <button className={!colour?'rounded-full text-base sm:text-lg text-white bg-blue-500 p-2 font-greg hover:bg-black ease-in-out duration-300':'rounded-full text-base sm:text-lg text-white bg-black p-2 font-greg hover:bg-black ease-in-out duration-300'} onClick={handleToggle}><FaPerson size={30}/></button>
      </div>
      <div className={toggle ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 flex:col z-50' : 'fixed hidden top-0 left-[-100%] ease-in-out duration-500'}>
        <div className='flex justify-between pt-3 m-2'>
        <h1 className='w-full sm:text-3xl text-lg font-bold text-black pt-3 m-2 text-center'>Test out our <span className={!colour?'text-blue-500':'text-black'}>Neurodivergence</span> tools!</h1>
        <button className="btn btn-circle btn-outline object-contain" onClick={handleToggle}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </div>
        <div className=' flex:col w-full mx-auto gap-6 p-8 md:m-8'>
            {/* <button className={!bcolour ? "btn btn-outline text-black" : "btn bg-slate-300 text-black "} onClick={handleText}>Larger text</button>
            <button className={!bcolour1 ? "btn btn-outline text-black" : "btn bg-slate-300 text-black "} onClick={handleImage}>No images</button>
            <button className={!bcolour2 ? "btn btn-outline text-black" : "btn bg-slate-300 text-black "} onClick={handleColour}>Mono-tone</button> */}
            <div className="form-control my-4 border-2 border-black rounded-lg md:max-w-[50%] md:mx-auto">
              <label className="label cursor-pointer">
              <span className="label-text text-black md:text-xl font-gbold">No images</span> 
              <input type="checkbox" className="toggle" onClick={handleImage}/>
              </label>
            </div>
            <div className="form-control my-4 border-2 border-black rounded-lg md:max-w-[50%] md:mx-auto">
              <label className="label cursor-pointer">
              <span className="label-text text-black md:text-xl font-gbold">Larger text</span> 
              <input type="checkbox" className="toggle" onClick={handleText}/>
              </label>
            </div>
            <div className="form-control border-2 border-black rounded-lg my-4 md:max-w-[50%] md:mx-auto">
              <label className="label cursor-pointer">
              <span className="label-text text-black md:text-xl font-gbold">Monotone</span> 
              <input type="checkbox" className="toggle" onClick={handleColour}/>
              </label>
            </div>
            <div className="form-control border-2 border-black rounded-lg my-4 md:max-w-[50%] md:mx-auto">
              <label className="label cursor-pointer">
              <span className="label-text text-black md:text-xl font-gbold">Disable animations</span> 
              <input type="checkbox" className="toggle" onClick={handleAni}/>
              </label>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Navbar