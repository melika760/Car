import React from 'react'
import carimg from "../assets/Porsche.png"
const Cards = () => {
  return (
    <div className='w-[40%] border border-gray-300 shadow-sm flex flex-col  rounded-md '>
      <div className='w-[80%] '>
<img src={carimg} alt='porsche' className='w-full object-contain'/>
      </div>
      <div className='flex justify-between m-3'>
        <h2 className='text-xl'>class:</h2>
        <p className='text-xl'>1233</p>
      </div>
    </div>
  )
}

export default Cards
