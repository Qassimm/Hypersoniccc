import React, { useState } from 'react'
import { FaPhone , FaBars } from 'react-icons/fa'

function Navbar() {
  
  
  
  return (
    <div className='flex justify-center '>
     <nav className=' flex items-center justify-between md:justify-center  gap-15 p-1 md:p-3 fixed  md:top-3 md:rounded-[50px] bg-[#ecedf1] shadow-[inset_5px_5px_8px_#cacaca,inset_-5px_-5px_10px_white] w-full md:w-auto z-100'>
    {/* Logo */}
    <div className='font-bold bg-[#6D7AFF] p-1 md:p-3 rounded-full'>
      <div className='w-5 h-5 rounded-full bg-white' />
    </div>

    {/* Navbar Links*/}
    <ul className='hidden md:flex gap-5'>
      {["Process", "Services", "Benifits", "About", "Plans", "FAQ"].map((nav, index) => (
        <li key={index}>
          <a href="#" className=' text-[#1c1c1c] p-2   rounded-3xl  hover:text-[#6D7AFF]  active:border-[0.5px] active:border-[#6d7aff] font-medium opacity-70'>{nav}</a>
        </li>
      ))}
    </ul>

    {/* Phone Icon Button */}
    <button className='hidden md:block border p-3 text-xl text-white bg-[#6D7AFF] cursor-pointer rounded-full duration-300 hover:bg-black'>
      <FaPhone />
    </button>

    {/* Hamburger Menu Icon (Visible on smaller screens) */}
    <button className='md:hidden p-3 text-xl text-black  cursor-pointer rounded-full duration-300 hover:text-white hover:bg-black'>
      <FaBars />
    </button>
  </nav>
    </div>
  )
}

export default Navbar
