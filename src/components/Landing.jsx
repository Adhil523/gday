import React from 'react'
import Pic1 from '../assets/pic1.png'
import dino from '../assets/dinosaur.png'
import { ReactTyped } from "react-typed";

const Landing = ({text,image}) => {

  console.log(image)

  return (
    
    <div className='w-full max-w-[1340px] flex flex-col justify-between mx-auto h-auto sm:h-[70vh] pt-8 border-b-2 border-opacity-30 border-gray-500'>
      <div className='p-5 sm:pt-8 sm:pl-8 flex flex-col w-full'>
        <div className='flex'>
          <img alt='/' src={dino} className={!image?'w-10 h-6 object-contain':'hidden'}></img>
          <h1 className='text-xl font-greg text-black'><span className='font-gbold'>Google</span> Developers Student Clubs</h1>
        </div>
        <ReactTyped strings={["GDSC Day"]} typeSpeed={120} backspeed={140} className='text-8xl text-black font-pixel pt-2 tracking-wider text'></ReactTyped>
        {/* <h1 className='text-8xl font-pixel pt-2 tracking-wider text'>GDSC day</h1> */}
        <h2 className='text-xl opacity-50 font-greg pl-4 text-slate-600'>March 2</h2>
      </div>

      <div className=' flex-col sm:flex-row flex w-full sm:w-auto'>
        <div className='p-1 w-full sm:w-1/2 flex items-center justify-center sm:block'>
          <button className='sm:ml-8 bg-blue-600 w-[200px] mx-auto rounded-lg py-2.5 font-medium text-white'>Register</button>
        </div>
        <img src={Pic1}  alt='/' className={!image ? 'sm:h-[30vh] mx-auto' : 'hidden'}></img>
      </div>
    </div>
  )
}

export default Landing