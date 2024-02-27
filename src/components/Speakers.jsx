import React from 'react'
import trishala from "../assets/trishala.jpg"
import vibin from "../assets/vipin.jpeg"
import kiran from "../assets/kiran.jpg"
import don from "../assets/don.jpg"
import anju from "../assets/anju.jpeg"
import ananya from "../assets/ananya.jpg"
import arun from "../assets/arun.jpeg"
import reshmi from "../assets/reshmi.jpg"



const Speakers = ({text,image,colour}) => {
  const speakersData = [
    {
      name: 'Trishala Pillai',
      role: 'Women in Tech',
      organization: 'Board member at AnitaB.org',
      image: trishala,
    },
    {
      name: 'Vibin Varghese',
      role: 'Autism',
      organization: 'Founder & CEO - Metanoa',
      image: vibin,
    },
    {
      name: 'Kiran S Raj',
      role: 'Neurodivergence in Technology',
      organization: 'Lead Data Scientist at BuildNext | Lead Organizer at GDG Cloud Kochi\nLead at Code Vipassana by Google  AI/IA Influencer',
      image: kiran,
    },
    {
      name: 'Don Paul',
      role: 'Enable differently-abled through Technological solutions',
      organization: 'Founder, CEO Desintox Tech',
      image: don,
    },
    {
      name: 'Anju Dinesh',
      role: 'Diversity, Equality, Inclusion',
      organization: 'Board member at Tinkerhub Foundation',
      image: anju,
    },
    {
      name: 'Ananya R',
      role: 'Diversity, Equality, Inclusion',
      organization: 'Global Community Manager, She Loves Tech',
      image: ananya,
    },
    {
      name: 'Arun C Rao',
      role: 'Neurodivergence in Technology',
      organization: 'Head of marketing - SignAble Communications',
      image: arun,
    },
    {
      name: 'Reshmi Ravindranathan',
      role: 'Accessibility',
      organization: 'Associate Consultant -TCS',
      image: reshmi,
    },
  ];

  const SpeakerList = () => {
    return (
      <div>
        {speakersData.map((speaker, index) => (
          <div key={index} className='grid grid-cols-3 h-72 border-gray-500 rounded-md shadow-2xl row-span-3 m-4  border-opacity-30 overflow-hidden hover:scale-105 duration-300 bg-white'>
            <div className='col-span-2 p-4'>
              <div className='h-full flex flex-col text-left'>
                <h1 className='text-3xl font-gbold text-black'>{speaker.name}</h1>
                <h2 className='text-slate-500  font-greg'>{speaker.role}</h2>
                <p className='py-4 font-gmed text-black'>{speaker.organization}</p>
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
        ))}
      </div>
    );
  }





  return (
    <div className='w-full max-w-[1340px] h-auto mx-auto grid'>
      <div className='w-[50%] mx-auto text-center'>
        <h1 className='text-5xl font-gbold py-4 text-black'>Events for <span className={!colour?'text-blue-600': 'text-black'}>everyone.</span></h1>
        <p className='p-2 font-gbold text-slate-900'>Have a glance at the experts of their fields appearing for GDSC Day as speakers for each event.</p>
      </div>


      <SpeakerList />
    </div>

  )
}

export default Speakers