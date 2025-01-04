import React from 'react'
import porshce from '../assets/Porsche.png'
const Hero = () => {
  return (
    <section className='flex justify-between m-[6rem] align-center items-center'>
    <div className=''>
    <h1 className='text-6xl font-bold font-[Poppins] mb-4 '>Premium Car Rental in London</h1>
    <p className='text-xl text-gray-700 font-[Poppins]'>Don't deny yourself the pleasure of driving  the best permium cars from around the world here and now.</p>
    </div>
    <div className='w-[90%]'>
        <img src={porshce} className='w-full object-contain scale-110' alt='Porsche'/>
    </div>
    </section>
  )
}

export default Hero
