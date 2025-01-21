import React from 'react'
import carimg from "../assets/Porsche.png"
import tire from "../assets/tire.png";
import gas from "../assets/gas.png";
import Wheel from "../assets/steering-wheel.png";
const Cards = () => {
  return (
    <div className='w-[40%] border border-gray-300 shadow-sm flex flex-col  rounded-md p-4 space-y-10'>
      <div className='w-[80%] m-auto items-center'>
<img src={carimg} alt='porsche' className='w-full object-contain'/>
      </div>
      <div className='flex justify-between m-3'>
     <div className='flex flex-col justify-center items-center'>
      <img src={Wheel} alt='' className='w-[23px]'/>
      <p className='font-[Poppins]'>Manual</p>
     </div>
      </div>

    </div>
  )
}

export default Cards
