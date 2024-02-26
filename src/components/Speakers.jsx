import React from 'react'
import kiran from '../assets/kiran.jpg'
import don from "../assets/don.jpg"
import { FaLinkedin } from "react-icons/fa6";

const Speakers = () => {
  return (
    <div className='w-full max-w-[1340px] h-screen mx-auto grid'>
      <div className='w-[50%] mx-auto text-center'>
        <h1 className='text-5xl font-gbold py-4'>Events for <span className='text-blue-600'>everyone</span></h1>
        <p className='p-2 font-gbold text-slate-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at maiores iure asperiores iste, neque inventore cum ullam. Dolor, iure?</p>
      </div>
      <div className='grid grid-cols-3 border-black rounded-md w-full row-span-3 my-2 border-2 border-opacity-50 overflow-hidden hover:scale-105 duration-300'>
        <div className='col-span-2'>
          <div className='h-full flex flex-col '>
            <h1 className='text-3xl font-gbold ml-4 mt-4'>Kiran S Raj</h1>
            <h2 className='text-slate-500 ml-4 font-greg'>Neurodivergence in Technology</h2>
            <p className='ml-4 mt-4 font-gmed'>Lead Data Scientist at BuildNext | Lead Organizer at GDG Cloud Kochi<br></br>Lead at Code Vipassana by Google  AI/IA Influencer</p>

          </div>
        </div>
        <div className='relative h-full w-full max-w-full max-h-full overflow-hidden'>
          <img src={kiran} alt='/' className='absolute object-cover h-full w-full inset-0 ' style={{
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)', // Define the shape of the trapezium
            WebkitClipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' // For Safari
          }}></img>
        </div>
      </div>
      <div className='grid grid-cols-3 border-black rounded-md w-full row-span-3 my-2 border-2 border-opacity-50 overflow-hidden hover:scale-105 duration-300'>
        <div className='col-span-2'>
          <div className='h-full flex flex-col '>
            <h1 className='text-3xl font-gbold ml-4 mt-4'>Don Paul</h1>
            <h2 className='text-slate-500 ml-4 font-greg'>Enable differently-abled through Technological solutions</h2>
            <p className='ml-4 mt-4 py-4 font-gmed'>Founder, CEO Desintox Tech</p>

          </div>
        </div>
        <div className='relative h-full w-full max-w-full max-h-full overflow-hidden'>
          <img src={don} alt='/' className='absolute object-cover h-full w-full inset-0' style={{
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)', // Define the shape of the trapezium
            WebkitClipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' // For Safari
          }}></img>
        </div>

      </div>
      {/* <div className='grid grid-cols-3 border-black rounded-md w-full row-span-2 my-2 border-2 border-opacity-50'>

        </div> */}
      {/* <div className='grid grid-cols-3 border-black rounded-md w-full row-span-2'>

        </div>
        <div className='grid grid-cols-3 border-black rounded-md w-full row-span-2'>

        </div>
        <div className='grid grid-cols-3 border-black rounded-md w-full row-span-2'>

        </div> */}

    </div>
  )
}

export default Speakers