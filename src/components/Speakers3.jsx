import React from 'react'
import anju from '../assets/anju.jpg'
import ananya from '../assets/ananya.jpg'

const Speakers3 = () => {
  return (
    <div className='w-full max-w-[1340px] h-[75vh] mx-auto grid border-b-2'>
        <div className='grid grid-cols-3 border-black rounded-md w-full row-span-3 my-2 border-2 border-opacity-50 hover:scale-105 duration-300 overflow-hidden'>
            <div className='col-span-2'>
                <div className='h-full flex flex-col '>
                    <h1 className='text-3xl font-gbold ml-4 mt-4 '>Anju Dinesh</h1>
                    <h2 className='text-slate-500 ml-4 font-greg'>Diversity, Equality, Inclusion</h2>
                    <p className='ml-4 py-4 font-gmed'>Board member at Tinkerhub Foundation</p>
                </div>
            </div>
            <div className='relative h-full w-full max-w-full max-h-full overflow-hidden'>
              <img src={anju} alt='/' className='absolute object-cover h-full w-full inset-0' style={{
              clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)', // Define the shape of the trapezium
              WebkitClipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' // For Safari
              }}></img>
            </div>
            
        </div>
        <div className='grid grid-cols-3 border-black rounded-md w-full row-span-3 my-2 border-2 border-opacity-50 hover:scale-105 duration-300 overflow-hidden'>
              <div className='col-span-2'>
                <div className='h-full flex flex-col '>
                    <h1 className='text-3xl font-gbold ml-4 mt-4 '>Ananya R</h1>
                    <h2 className='text-slate-500 ml-4 font-greg'>Diversity, Equality, Inclusion</h2>
                    <p className='ml-4 py-4 font-gmed'>Global Community Manager, She Loves Tech</p>
                </div>
            </div>
            <div className='relative h-full w-full max-w-full max-h-full overflow-hidden'>
              <img src={ananya} alt='/' className='absolute object-cover h-full w-full inset-0' style={{
              clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)', // Define the shape of the trapezium
              WebkitClipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' // For Safari
              }}></img>
            </div>
        </div>
    </div>
  )
}

export default Speakers3