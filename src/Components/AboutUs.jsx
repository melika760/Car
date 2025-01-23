import React from 'react'
import lamboCar from "../assets/Lambo.png"
const AboutUs = () => {
  return (
    <section id="About" className='mt-[10rem]  flex justify-center  space-x-8'>
<div className=' w-[40%]'>
    <img src={lamboCar} alt='Bentley in City of London' className='w-full object-contain'/>
</div>
<div className='w-[30%]'>
<h2 className='font-bold text-4xl mt-[5rem] mb-[3rem] font-[Poppins] '>Who We Are?</h2> 
<p className='font-[Poppins] text-gray-800'>Welcome to London’s coolest car rental! Choose from sleek sports cars to luxury rides and hit the road in style—no hassle, no waiting. Make your trip unforgettable with an extraordinary drive today!</p>
</div>

    </section>
  )
}

export default AboutUs
