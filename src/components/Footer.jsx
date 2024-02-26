import React from 'react'
import gdsc from '../assets/gdsc-logo.png'
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-24 bg-gradient-to-t from-neutral-200 via-neutral-300 to-white'>
        <div className='h-full flex gap-4 px-4'>
            <img src={gdsc} alt='/' className='h-full'></img>
            <p className='text-center mt-auto mb-auto font-gmed md:text-xl text-black text-base'>GDSC GECT</p>
            <p className='text-center mt-auto mb-auto font-gmed md:text-xl text-black text-base'>|</p>
            <p className='text-center mt-auto mb-auto font-gmed md:text-xl text-black text-base'> GDSC KERALA</p>
            <div className='flex gap-8 ml-auto mt-auto mb-auto'>
            <MdOutlineEmail size={20} color='black'/>
            <FaInstagram size={20} color='black'/>
            <FaPhoneAlt size={20} color='black'/>

            </div>
        </div>

    </div>
  )
}

export default Footer