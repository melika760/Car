import React from 'react'
import Lambo2 from "../assets/Lambo2.png"
import lamboCar from "../assets/Lambo.png"
const AboutUs = () => {
  return (
    <section className='m-[80px] flex justify-between '>
        {/* <h2 className='font-bold text-4xl mt-[5rem] mb-[3rem] '>Who We Are?</h2> */}
<div className=' w-[40%]'>
    <img src={lamboCar} alt='Bentley in City of London' className='w-full object-contain'/>
</div>
<div className=' w-[40%]'>
    <img src={Lambo2} alt='Bentley in City of London' className='w-full object-contain'/>
</div>
<div className='w-[30%]'>
<h2 className='font-bold text-4xl mt-[5rem] mb-[3rem] font-[Poppins] '>Who We Are?</h2> 
<p className='font-[Poppins] text-gray-800'>Welcome to the coolest car rental in London! We’re here to make your driving dreams come true. Whether you’ve always wanted to cruise around town in a sleek sports car or a luxury ride, we’ve got you covered.

Our mission is simple: give you the chance to drive the world’s best cars, right here, right now. No boring paperwork or endless waiting—just pick your car and hit the road in style.

So, why settle for average when you can ride in something extraordinary? Let’s make your trip unforgettable, one epic drive at a time.</p>
</div>

    </section>
  )
}

export default AboutUs
