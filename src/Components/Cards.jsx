import React from 'react'
import carimg from "../assets/Porsche.png"
const Cards = () => {
  return (
    <div className='w-[40%] border border-gray-300 shadow-sm flex flex-col  items-center rounded-md'>
      <div className='w-[60%]'>
<img src={carimg} alt='porsche' className='w-full'/>
      </div>
      <div>Details</div>
    </div>
  )
}

export default Cards
