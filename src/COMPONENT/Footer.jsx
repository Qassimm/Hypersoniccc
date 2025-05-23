import React from 'react'
import { FaTwitter , FaInstagram , FaLinkedin , FaFacebook } from 'react-icons/fa'

function Footer() {

    const socialIcons = [
  { icon: FaLinkedin, hoverColor: "hover:bg-blue-500" },
  { icon: FaTwitter, hoverColor: "hover:bg-blue-400" },
  { icon: FaInstagram, hoverColor: "hover:bg-pink-500" },
  { icon: FaFacebook, hoverColor: "hover:bg-blue-600" },
];
  return (
    <div className='relative md:top-50 pt-30 md:pt-50 bg-[#ECEDF1] flex flex-col overflow-x-hidden items-center pb-5'>
      
      {/* logo */}

      <div className='flex items-center gap-[10px]'>
      <div className='font-bold bg-[#6D7AFF] p-1 md:p-3 w-fit rounded-full'>
      <div className='w-5 h-5 rounded-full bg-white' />
    </div>
    <p className=' text-[24px] font-medium '>Hyper<span className='text-[#6d7aff]'>Sonic</span></p>
    </div>

    {/* Navbar Links*/}
    <ul className='flex flex-col md:flex-row items-center  gap-5 mt-10'>
      {["Process", "Services", "Benifits", "About", "Plans","Testimonial" , "FAQ" , "404"].map((nav, index) => (
        <li key={index}>
          <a href="#" className=' text-[#1c1c1c] p-2   rounded-3xl  hover:text-[#6D7AFF]  active:border-[0.5px] active:border-[#6d7aff] duration-300 opacity-70'>{nav}</a>
        </li>
      ))}
    </ul>

    <p className='mt-10 text-[#1c1c1c]'>Animated icons from Lordicon</p>

    <div className='relative bottom-0 mt-10 flex flex-col-reverse md:flex-row md:justify-between items-center gap-10 w-full px-10'>
        <p className='text-[]1c1c1c] text-[16px] '>© Copyright 2024 HyperSonic</p>
        <div className="flex justify-between w-75">
  {socialIcons.map((item, index) => {
    const Icon = item.icon;
    return (
      <Icon
        key={index}
        className={`text-5xl p-3 rounded-full shadow-[-5px_-5px_10px_0px_rgb(250,251,255),_5px_5px_10px_0px_rgba(166,171,189,0.25)] duration-300 hover:text-white ${item.hoverColor}`}
      />
    );
  })}
</div>
    </div>
    {/* ------------------------- */}
    </div>
  )
}

export default Footer
