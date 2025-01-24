import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { CarApis } from '../utils/apis'


const PopularCars = () => {
  const [result,setresult]=useState([])
 
  useEffect(()=>{
   const fetchData=async()=>{
   const resp=[await CarApis("Porsche",2024),await CarApis("Bugatti",2022),await CarApis("Lamborghini",2020),await CarApis("Maserati",2023)]
  setresult(resp)
   }
fetchData();
 
  },[])
console.log(result)
  return (
    <section className='m-[80px] mt-[9rem]'id='Cars'>
        <h2 className='font-[Poppins] font-bold text-4xl mt-[5rem] mb-[3rem] '>Our Popular Cars</h2>
        <div className='flex  items-center jsutify-between space-x-8 w-full h-[450px]'>
       {result.map((Car,index)=><Cards key={index} Car={Car}/>)}
        </div>
       
    </section>
  )
}

export default PopularCars
