import React from 'react'
import Cards from './Cards'

const PopularCars = () => {
  return (
    <section className='m-[80px] mt-[9rem]'id='Cars'>
        <h2 className='font-[Poppins] font-bold text-4xl mt-[5rem] mb-[3rem] '>Our Vehicle Fleet</h2>
        <div className='flex  items-center jsutify-between space-x-8'>
        <Cards/>
        <Cards/> 
        <Cards/>
        </div>
       
    </section>
  )
}

export default PopularCars
