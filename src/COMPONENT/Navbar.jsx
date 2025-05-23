import React, { useState } from 'react'
import { FaPhone , FaBars } from 'react-icons/fa'

function Navbar() {
  
  
  
  return (
    <div className='flex justify-center '>
     <nav className=' flex items-center justify-between md:justify-center 2xl:justify-between  gap-15 p-1 md:p-3 fixed  md:top-3 md:rounded-[50px] bg-[#ecedf1] shadow-[inset_5px_5px_8px_#cacaca,inset_-5px_-5px_10px_white] px-10 sm:px-0 w-screen sm:w-full md:w-auto 2xl:w-[1430px] z-100'>
    {/* Logo */}
    <div className='flex items-center gap-[10px]'>
      <div className='font-bold bg-[#6D7AFF] p-1 md:p-3 w-fit rounded-full'>
      <div className='w-5 h-5 rounded-full bg-white' />
    </div>
    <p className='hidden 2xl:block text-[24px] font-semibold '>Hyper<span className='text-[#6d7aff]'>Sonic</span></p>
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
    <button className='hidden md:block 2xl:hidden border p-3 text-xl text-white bg-[#6D7AFF] cursor-pointer rounded-full duration-300 hover:bg-black'>
      <FaPhone />
    </button>

      {/* call-text-button */}

      <button className='hidden 2xl:block bg-[#6d7aff] py-3 px-5 rounded-3xl text-white duration-300 hover:bg-black'>
        Book a call
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
