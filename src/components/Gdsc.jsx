import React from 'react'

const Gdsc = ({text,image,colour}) => {
  return (
    <div className='max-w-[1340px] mx-auto text-center py-8 flex:col h-auto'>
        <h1 className='ml-auto justify-center text-black text-3xl font-gbold'>GDSC Gect</h1>
        <h3 className={!colour?'mx-auto justify-center text-3xl font-gbold text-blue-600':'mx-auto justify-center text-3xl font-gbold text-black'}>X</h3>
        <h1 className='mx-auto justify-center text-black text-3xl font-gbold'>GDSC Kerala</h1>
    </div>
  )
}

export default Gdsc