import React, { Fragment } from 'react'
import carimg from "../assets/Porsche.png"
import tire from "../assets/tire.png";
import gas from "../assets/gas.png";
import Wheel from "../assets/steering-wheel.png";
import { Calculation } from '../utils/apis';
import CarDetails from './CarDetails';
const Cards = ({Car}) => {
  const Cardetails=Car[0];
  console.log(Cardetails.transmission)
  const rent= Calculation(Cardetails)
  function ShowDetails(){
document.getElementById("CarDetails").showModal()
  }
  return (<Fragment>
   <div className=' w-full h-full group border border-gray-100 shadow-sm flex flex-col p-4 space-y-10 bg-gray-100   hover:bg-white hover:shadow-md hover:scale-105  rounded-3xl relative'>
      <h1 className='text-xl font-semibold capitalize font-[Poppins]'>{Cardetails.make} {Cardetails.model}</h1>
      <p className='flex mt-6 text-[32px] font-extrabold font-[Poppins]'>
    <span className='self-start text-[14px] font-semibold'>£</span>{rent}
    <span className='self-end text-[14px] font-medium'>/day</span>
</p>
      <div className=' m-auto items-center'>
<img src={carimg} alt='porsche' className='w-full object-contain'/>
      </div>
      <div className='flex justify-between m-3 group-hover:invisible'>
     <div className='flex flex-col space-y-3 m-2  items-center'>
      <img src={Wheel} alt='Steering Wheel' className='w-[23px]'/>
      <p className='font-[Poppins] text-gray'>{Cardetails.transmission==="a"?"Automatic":"Manual"}</p>
     </div>
     <div className='flex flex-col space-y-3 m-2  items-center'>
      <img src={tire} alt='Tire' className='w-[23px]'/>
      <p className='font-[Poppins] text-gray capitalize'>{Cardetails.drive}</p>
     </div>
     <div className='flex flex-col space-y-3 m-2  items-center'>
      <img src={gas} alt='Fuel' className='w-[23px]'/>
      <p className='font-[Poppins] text-gray capitalize'>{Cardetails.fuel_type}</p>
     </div>
      </div>
      <div className='hidden group-hover:flex absolute bottom-0 left-0 right-0 w-full items-center justify-center z-10'>
      <button onClick={ShowDetails} className='w-[90%] items-center mb-8 py-[14px] rounded-full bg-primary-blue bg-red-700 text-white text-[14px] leading-[17px] font-bold' type='button'>View More</button>
      </div>

    </div>
    <dialog className='m-auto items-center text-center w-[500px]' id='CarDetails' >
      <CarDetails/>
    </dialog>
  </Fragment>
   
  )
}

export default Cards
