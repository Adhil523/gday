import React from 'react'
import Pic1 from '../assets/pic1.png'
import dino from '../assets/dinosaur.png'
import { ReactTyped } from "react-typed";

const Landing = () => {
  return (
    <div className='w-full max-w-[1340px] grid mx-auto h-[65vh] pt-8 border-b-2 border-opacity-50 border-black'>
        <div className='pt-8 pl-8'>
          <div className='flex'>
            <img alt='/' src={dino} className='w-10 h-6 object-contain'></img>
            <h1 className='text-xl font-greg'><span className='font-gbold'>Google</span> Developers Student Clubs</h1>

          </div>
            <ReactTyped strings={["GDSC Day"]} typeSpeed={120} backspeed={140} className='text-8xl font-pixel pt-2 tracking-wider text'></ReactTyped>
            {/* <h1 className='text-8xl font-pixel pt-2 tracking-wider text'>GDSC day</h1> */}
            <h2 className='text-xl opacity-50 font-greg pl-4'>Mar 2</h2>
            
        </div>
        <div className='grid md:grid-cols-2'>
                <div className='p-1'>
                <button className='ml-8 bg-blue-600 w-[200px] mx-auto rounded-lg py-1 font-medium'>Let's Go</button>
                </div>
                
                <img src={Pic1} alt='/' className='mx-auto mt-[-4rem] md:size-min w-full h-64'></img>


        </div>
    </div>
  )
}

export default Landing