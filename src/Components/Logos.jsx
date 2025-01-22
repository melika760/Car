import React from 'react'
import { Carlogos } from './Constants'

const Logos = () => {
  return (
  <section className='m-[5rem] grid grid-cols-6 gap-20 max-md:grid-cols-3'>
 {Carlogos.map((item)=>(<div key={item.make} className='w-[220px] h-[120px] max-md:w-[90%] border border-gray-200 shadow-md rounded-md flex flex-col justify-center items-center p-2 hover:scale-105 hover:shadow-2xl cursor-pointer scale-90'>
    <div>
    <img src={item.img} alt={item.make} className='object-contain w-full h-[105px] max-md:h-[80px]'/>
    </div>
 {/* <p className='text=gray-500 text-lg'>{item.make}</p> */}
  </div>)
 )}
  </section>
  )
}

export default Logos
