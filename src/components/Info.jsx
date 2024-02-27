import React from 'react'
import { AiOutlineBulb } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";

const Info = ({text,image,colour }) => {
  return (
    <div className='w-full max-w-[1340px] h-auto sm:h-[57vh] mx-auto grid p-8 border-b-2 border-black'>
        <div>
            <h1 className='font-gmed text-2xl text-black'>What's happening</h1>
            <p className='font-greg text-black'>This year, the GDSC techfest - GDSC Day - is based on the theme of inclusivity, about doing what we can to help those around us use and understand technology, making it more usable and understandable for all people. We have kickstarted this by making this website neurodivergent-friendly! Do check oout its cool features.</p>

        </div>
        <div className='grid sm:grid-cols-2 gap-8'>
            <div className=' mx-auto lg:w-[50%] w-full shadow-2xl flex flex-col p-4 my-4 bg-white text-center rounded-lg hover:scale-105 duration-300'>
                
                <div className={!image?'block':'hidden'}>
                    <AiOutlineBulb color='orange' size={20}/>
                </div>
                <p className='font-gmed p-2 text-black'>Find out what <span className={!colour?"text-blue-600":"text-black"}>neurodivergence</span> is, and explore our features for an inclusive website!</p>
                <p className={!colour?'font-gmed text-blue-600':'font-gmed text-black'}>
                <a className="link link-hover">Learn more</a>
                </p>
            </div>
            <div className=' mx-auto lg:w-[50%] w-full shadow-2xl flex flex-col p-4 my-4 bg-white text-center rounded-lg hover:scale-105 duration-300'>
                <div className={!image?'block':'hidden'}>
                    <MdPeopleAlt color='green' size={20}/>
                </div>
                <p className='font-gmed p-2 text-black'>Explore a variety of solutions and ideas to help overcome these</p>
                <p className={!colour?'font-gmed text-blue-600':'font-gmed text-black'}>
                <a className="link link-hover" href='https://info.kpmg.us/news-perspectives/technology-innovation/neurodiversity-in-tech.html'>Learn more</a>
                </p>
            </div>

            </div>
        </div>
    )
}

export default Info