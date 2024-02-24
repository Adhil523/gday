import React from 'react'
import gdsc from '../assets/gdsc-logo.png'
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-24 bg-zinc-500 mt-4'>
        <div className='max-w-[1240px] w-full h-full flex gap-4 mx-auto'>
            <img src={gdsc} alt='/' className='h-full'></img>
            <p className='text-center mt-auto mb-auto font-gmed text-xl'>GDSC GECT</p>
            <p className='text-center mt-auto mb-auto font-gmed text-xl'>|</p>
            <p className='text-center mt-auto mb-auto font-gmed text-xl'> GDSC KERALA</p>
            <div className='flex gap-8 ml-auto mt-auto mb-auto'>
            <MdOutlineEmail size={30}/>
            <FaInstagram size={30}/>
            <FaPhoneAlt size={30}/>

            </div>
        </div>

    </div>
  )
}

export default Footer