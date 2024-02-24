import React from 'react'
import Trishala from '../assets/trishala.jpg'
import vibin from '../assets/vibin.jpg'


const Speakers2 = () => {
  return (
    <div className='w-full max-w-[1340px] h-[75vh] mx-auto grid'>
        <div className='grid grid-cols-3 border-black rounded-md w-full row-span-3 my-2 border-2 border-opacity-50 overflow-hidden hover:scale-105 duration-300'>
            <div className='col-span-2'>
                <div className='h-full flex flex-col '>
                    <h1 className='text-3xl font-gbold ml-4 mt-4 '>Trishala Pillai</h1>
                    <h2 className='text-slate-500 ml-4 font-greg'>Women in Tech</h2>
                    <p className='ml-4 py-4 font-gmed'>Board member at AnitaB.org</p>
                </div>
            </div>
            <div className='relative h-full w-full max-w-full max-h-full overflow-hidden'>
              <img src={Trishala} alt='/' className='absolute object-cover h-full w-full inset-0' style={{
          clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)', // Define the shape of the trapezium
          WebkitClipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' // For Safari
            }}></img>
            </div>
             

        </div>
        <div className='grid grid-cols-3 border-black rounded-md w-full row-span-3 my-2 border-2 border-opacity-50 hover:scale-105 duration-300'>
            <div className='col-span-2'>
                <div className='h-full flex flex-col '>
                    <h1 className='text-3xl font-semibold ml-4 mt-4 font-gbold'>Vibin Varghese</h1>
                    <h2 className='text-slate-500 ml-4 font-greg'>Autism</h2>
                    <p className='ml-4 py-4 font-gmed'>Founder & CEO - Metanoa</p>
                </div>
            </div>
            <div className='relative h-full w-full max-w-full max-h-full overflow-hidden'>
              <img src={vibin} alt='/' className='absolute object-cover h-full w-full inset-0' style={{
                clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)', // Define the shape of the trapezium
                WebkitClipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' // For Safari
                }}></img>
            </div>
             

        </div>
    </div>
  )
}

export default Speakers2