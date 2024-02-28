import React from 'react'
import trishala from "../assets/trishala.jpg"
import vibin from "../assets/vipin.jpeg"
import kiran from "../assets/kiran.jpg"
import don from "../assets/don.jpg"
import anju from "../assets/anju.jpeg"
import ananya from "../assets/ananya.jpg"
import arun from "../assets/arun.jpeg"
import reshmi from "../assets/reshmi.jpg"
// import Fade from 'react-reveal/Fade'
import {motion} from "framer-motion"



const Speakers = ({text,image,colour,ani}) => {
  const speakersData = [
    {
      name: 'Don Paul',
      role: 'Fireside Chat: Tech for Inclusivity',
      organization: 'Founder & CEO of  Desintox Technologies Pvt Ltd | TEDx speaker ',
      image: don,
    },
    {
      name: 'Vibin Varghese',
      role: 'Talk : AI solutions for Neurodivergence',
      organization: 'Founder & CEO of Metanoa, a health care entrepreneur',
      image: vibin,
    },
    {
      name: 'Trishala Pillai',
      role: 'Fireside Chat: DEI',
      organization: 'Senior Product Manager- Walmart | Board Member at AnitaB.org. | Creator, Producer & Host of Newcomer Rise Up',
      image: trishala,
    },
    
    {
      name: 'Kiran S Raj',
      role: 'Workshop; AI for Accesibility',
      organization: 'Lead Data Scientist at BuildNext | Lead Organizer at GDG Cloud Kochi | Lead at Code Vipassana by Google | Development Junkie | AI/IA Influencer',
      image: kiran,
    },
    
    {
      name: 'Anju Dinesh',
      role: 'Talk ; Building yourself and your career ',
      organization: 'Senior Recruitment Consultant-impress.ai | Board Member - Tinkerhub Foundation | DEI Advocate',
      image: anju,
    },
    {
      name: 'Ananya R',
      role: '#IamRemarkable Event',
      organization: 'Global Community Manager at She Loves Tech | | DEI Advocate | Tedx Speaker',
      image: ananya,
    },
    {
      name: 'Arun C Rao',
      role: 'Fireside Chat: Tech for Inclusivity',
      organization: 'Head of Marketing at SignAble Communications | DEIB Consultant | Sign language professional',
      image: arun,
    },
    {
      name: 'Reshmi Ravindranathan',
      role: 'Fireside Chat: DEI',
      organization: 'Mentor-facilitator at Inclusys | Digital Transformation Lead | Accessibility campaigner',
      image: reshmi,
    },
  ];

  const SpeakerList = () => {
    return (
      
      <div>
        {speakersData.map((speaker, index) => (
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}}>
          <div key={index} className={!ani?'grid grid-cols-3 h-72 border-gray-500 rounded-md shadow-2xl row-span-3 m-4  border-opacity-30 overflow-hidden hover:scale-105 duration-300 bg-white':'grid grid-cols-3 h-72 border-gray-500 rounded-md shadow-2xl row-span-3 m-4  border-opacity-30 overflow-hidden bg-white'}>
            <div className='col-span-2 p-4'>
              <div className='h-full flex flex-col text-left'>
                <h1 className='text-3xl font-gbold text-black'>{speaker.name}</h1>
                <h2 className='text-slate-500  font-greg'>{speaker.role}</h2>
                <p className='py-4 font-gmed text-black text-sm md:text-xl'>{speaker.organization}</p>
              </div>
            </div>
            <div className='relative overflow-hidden'>
              <img
                src={speaker.image}
                alt='/'
                className={!image ? 'absolute object-cover h-full w-full inset-0' : 'hidden'}
                style={{
                  objectPosition: 'top',
                  clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
                  WebkitClipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
                }}
              />
            </div>
          </div>
          </motion.div>
        ))}
      </div>
      
    );
  }





  return (
    <div className='w-full max-w-[1340px] h-auto mx-auto grid'>
      <div className='w-[50%] mx-auto text-center'>
        <h1 className='text-5xl font-gbold py-8 text-black mb-8'>Our <span className={!colour?'text-blue-600': 'text-black'}>Speakers.</span></h1>
        {/* <p className='p-2 font-gbold text-slate-900'>Have a glance at the experts of their fields appearing for GDSC Day as speakers for each event.</p> */}
      </div>


      <SpeakerList />
    </div>

  )
}

export default Speakers