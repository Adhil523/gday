import React from 'react'
import trishala from "../assets/trishala.jpg"
import vibin from "../assets/vibin.jpg"
import kiran from "../assets/kiran.jpg"
import don from "../assets/don.jpg"
import anju from "../assets/anju.jpg"
import ananya from "../assets/ananya.jpg"



const Speakers = () => {
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
  ];

  const SpeakerList = () => {
    return (
      <div>
        {speakersData.map((speaker, index) => (
          <div key={index} className='grid grid-cols-3 h-72 border-black rounded-md  row-span-3 m-4  border-2 border-opacity-50 overflow-hidden hover:scale-105 duration-300'>
            <div className='col-span-2 p-4'>
              <div className='h-full flex flex-col text-left'>
                <h1 className='text-3xl font-gbold '>{speaker.name}</h1>
                <h2 className='text-slate-500  font-greg'>{speaker.role}</h2>
                <p className='py-4 font-gmed'>{speaker.organization}</p>
              </div>
            </div>
            <div className='relative overflow-hidden'>
              <img
                src={speaker.image}
                alt='/'
                className='absolute object-cover h-full w-full inset-0'
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
        <h1 className='text-5xl font-gbold py-4'>Events for <span className='text-blue-600'>everyone</span></h1>
        <p className='p-2 font-gbold text-slate-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at maiores iure asperiores iste, neque inventore cum ullam. Dolor, iure?</p>
      </div>


      <SpeakerList />
    </div>

  )
}

export default Speakers