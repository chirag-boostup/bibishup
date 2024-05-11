import React from 'react'
import logo from '../../assets/Home/logo.png'
const Navbar = () => {
  return (
    <div className='w-full py-5 flex justify-between items-center px-48'>
        <div className='flex items-center gap-10'>
            <img className='w-52' src={logo} alt="" />
            <div className='w-80 py-3 bg-gray-100  shadow rounded-full flex gap-2'>
                <input type="text" className='w-full bg-gray-100 ml-2 outline-none pl-5' placeholder='Search...' />
                <button  className='px-5 '><i class="ri-search-line"></i></button>
            </div>
        </div>
        <div className='flex items-center gap-14'>
            <p className='font-semibold'>Home</p>
            <p className='font-semibold'>About</p>
            <p className='font-semibold'>Shop</p>
            <p className='font-semibold'>Contact</p>
            <p className='font-semibold'>Pages <i class="ri-arrow-down-s-fill"></i></p>
        </div>
    </div>
  )
}

export default Navbar