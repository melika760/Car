import React from 'react'
import Cards from './Cards'

const PopularCars = () => {
  return (
    <section className='m-[50px]'>
        <h2 className='font-bold text-4xl mb-5'>Our Vehicle Fleet</h2>
        <div className='flex  items-center jsutify-between space-x-8'>
        <Cards/>
        <Cards/> 
        <Cards/>
        </div>
       
    </section>
  )
}

export default PopularCars
