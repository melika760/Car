import React from 'react'
import logo from '../assets/logo.png'
const Nav = () => {
  const menu=[{
    name:"Cars",
    id:1,
    path:'#Cars'
  },
  {
    name:"About Us",
    id:2,
    path:'#About'
  },
  {
    name:"Testemonial",
    id:3,
    path:'#Testemonial'
  },
]
  return (
  <nav className='flex m-3 justify-between items-center'>
    <div>
    <img src={logo} alt='logo' className='w-[100px] h-[100px]'/>
    </div>
  <ul className='flex space-x-9 items-center'>
{menu.map((item)=>(<li key={item.id} className='cursor-pointer'><a href={item.path} alt={item.name} className='text-lg hover:text-red-700'>{item.name}</a></li>))}
  {/* reactrouter needed */}
  <button className='text-red-700 border-red-700 border w-[100px] rounded-xl p-2 hover:bg-red-700 hover:text-white'><a href='/login' alt='login'>Login</a></button>
  </ul>
  </nav>
  )
}

export default Nav
