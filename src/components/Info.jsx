import React from 'react'
import { AiOutlineBulb } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";

const Info = () => {
  return (
    <div className='w-full max-w-[1340px] h-[57vh] mx-auto grid p-8 border-b-2 border-black'>
        <div>
            <h1 className='font-gmed text-2xl'>What's happening</h1>
            <p className='font-greg'>This year, the GDSC techfest - GDSC Day - is based on the theme of inclusivity, about doing what we can to help those around us use and understand technology, making it more usable and understandable for all people. We have kickstarted this by making this website neurodivergent-friendly! Do check oout its cool features.</p>

        </div>
        <div className='grid grid-cols-2 gap-8'>
            <div className=' mx-auto lg:w-[50%] w-full shadow-2xl flex flex-col p-4 my-4 text-center rounded-lg hover:scale-105 duration-300'>
                <AiOutlineBulb color='orange' size={20}/>
                <p className='font-gmed p-2'>Find out what neurodivergence is, and how it makes a difference to others</p>
                <p className='font-gmed text-blue-600'>Learn more</p>
            </div>
            <div className=' mx-auto lg:w-[50%] w-full shadow-2xl flex flex-col p-4 my-4 text-center rounded-lg hover:scale-105 duration-300'>
                <MdPeopleAlt color='green' size={20}/>
                <p className='font-gmed p-2'>Explore a variety of solutions and ideas to help overcome these</p>
                <p className='font-gmed text-blue-600'>Learn more</p>
            </div>

        </div>
    </div>
  )
}

export default Info