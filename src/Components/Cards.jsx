import React from 'react'
import carimg from "../assets/Porsche.png"
import tire from "../assets/tire.png";
import gas from "../assets/gas.png";
import Wheel from "../assets/steering-wheel.png";
const Cards = () => {
  return (
    <div className='border border-gray-100 shadow-sm flex flex-col  rounded-lg p-4 space-y-10 bg-gray-100 relative hover:bg-white'>
      <h1 className='text-2xl font-semibold '>Toyota Camery</h1>
      <p className='flex mt-6 text-[32px] font-extrabold font-[Poppins]'>
    <span className='self-start text-[14px] font-semibold'>$</span>22
    <span className='self-end text-[14px] font-medium'>/day</span>
</p>
      <div className=' m-auto items-center'>
<img src={carimg} alt='porsche' className='w-full object-contain'/>
      </div>
      <div className='flex justify-between m-3 group-hover:invisible'>
     <div className='flex flex-col space-y-3 m-2  items-center'>
      <img src={Wheel} alt='Steering Wheel' className='w-[23px]'/>
      <p className='font-[Poppins] text-gray'>Manual</p>
     </div>
     <div className='flex flex-col space-y-3 m-2  items-center'>
      <img src={tire} alt='Tire' className='w-[23px]'/>
      <p className='font-[Poppins] text-gray'>FWD</p>
     </div>
     <div className='flex flex-col space-y-3 m-2  items-center'>
      <img src={gas} alt='Fuel' className='w-[23px]'/>
      <p className='font-[Poppins] text-gray'>Gas</p>
     </div>
      </div>

    </div>
  )
}

export default Cards
