import React from 'react'

const Faq = () => {
  const faq_details=[
    {qn:"What is GDSC Day",
    ans:"Lorem ipsum"},
    {qn:"What is does our theme mean?",
    ans:"Lorem ipsum"},
    {qn:"How can we attend this event?",
    ans:"Lorem ipsum"}

  ]
  return (
    <div className='py-4 mx-auto m-4 p-4 h-auto '>
      <h1 className='py-4 pl-4 font-gbold text-black text-3xl'>FAQs</h1>
    {faq_details.map((detail,index)=>(
      <div key={index} className="collapse collapse-arrow bg-white">
           <input type="radio" name="my-accordion-2" defaultChecked />
           <div className="collapse-title text-xl font-medium text-black font-gmed">
            {detail.qn}
           </div>
           <div className="collapse-content text-black font-greg"> 
            <p>{detail.ans}</p>
            </div>
      </div>
  ))}
  </div>
    
//     <div className='py-4'>
//     <div className="collapse collapse-arrow bg-white">
//   <input type="radio" name="my-accordion-2" defaultChecked /> 
//   <div className="collapse-title text-xl font-medium">
//     Click to open this one and close others
//   
//   <div className="collapse-content"> 
//     <p>hello</p>
//   </div>
// </div>
// <div className="collapse collapse-arrow bg-base-200">
//   <input type="radio" name="my-accordion-2" /> 
//   <div className="collapse-title text-xl font-medium">
//     Click to open this one and close others
//   </div>
//   <div className="collapse-content"> 
//     <p>hello</p>
//   </div>
// </div>
// <div className="collapse collapse-arrow bg-base-200">
//   <input type="radio" name="my-accordion-2" /> 
//   <div className="collapse-title text-xl font-medium">
//     Click to open this one and close others
//   </div>
//   <div className="collapse-content"> 
//     <p>hello</p>
//   </div>
// </div>
// </div>
  )
}

export default Faq