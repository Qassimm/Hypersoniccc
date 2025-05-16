import React from 'react'
import { FaStar } from 'react-icons/fa'
import Pic1 from '../assets/images/Pic1.jpg'
import Pic2 from '../assets/images/Pic2.jpg'
import Pic3 from '../assets/images/Pic3.jpg'
import Pic4 from '../assets/images/Pic4.jpg'
import Logo1 from '../assets/logos/Logo1.svg'
import Logo2 from '../assets/logos/Logo2.svg'
import Logo3 from '../assets/logos/Logo3.svg'
import Logo4 from '../assets/logos/Logo4.svg'


function Hero() {

    const stars = Array(5).fill(0); // 5 Stars rating

  return (
    <div>
      <hero className='flex justify-center items-center flex-col  relative top-35 md:top-50 gap-6 bg-[#ecedf1]'>
        
        {/*sponsor button */}

        <button className='font-poppins text-sm md:text-base text-[#1c1c1c] py-1 md:py-2 px-5  rounded-4xl shadow-[1px_1px_2px_#a6a6a6,-5px_-5px_10px_#ffffff] duration-300 hover:text-[#6D7AFF]'>
          <span className='font-bold text-xl'>F</span>  Powered by Framer
        </button>
        {/* Hero Heading */}
        <h1 className='text-[#1c1c1c]   text-[35px] md:text-[48px] text-center font-semibold'>Transform Your Business with <br/> <span className='text-[#6d7aff]'>AI-Driven Automation</span></h1>

        {/* Tagline */}

        <p className='text-center text-[12px] md:text-[16px] text-[#4d4d4d] opacity-90 font-light'>Harness the power of artificial intelligence to automate your most critical business processes,<br/> saving time and reducing costs.</p>

        {/* button */}

        <button className='px-[30px] py-[12px] bg-[#6d7aff] rounded-4xl text-white  text-[18px]  cursor-pointer duration-300 hover:bg-black'>See plans</button>

       {/* clients and rating */}

       <div className=' flex flex-col md:flex-row justify-center items-center gap-10 w-full mt-8'>
        
         {/* CLients bar */}

        <div className='flex justify-center items-center h-fit p-2 rounded-[40px]  shadow-[2px_3px_5px_#a6a6a6,-5px_-5px_10px_#ffffff]'>
            {[Pic1, Pic2, Pic3, Pic4].map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Profile ${index + 1}`}
          className='w-10 h-10 object-cover rounded-full border border-white'
        />
      ))}
        </div>

        {/* rating star and text */}

        <div className='flex flex-col justify-center items-center md:items-start'>
            {/* Rating stars */}

        <div className='flex '>
            {stars.map((_, index) => (
        <FaStar key={index} className=" text-[#6d7aff] text-2xl" />
      ))}
        </div>

        {/* rating text */}

        <p className='text-[#1c1c1c] font-semibold'>Loved by <span className='text-[#6d7aff]'>4000+ clients</span></p>
        </div>
       </div>

       {/* Sponsors */}

        <div className="flex gap-10 md:gap-15 my-10 md:my-15 ">
      {[Logo1, Logo2, Logo3, Logo4].map((logo, index) => (
        <img key={index} src={logo} alt={`Logo ${index + 1}`} className="w-30 md:w-35 filter grayscale z-20" />
      ))}
    </div>
      </hero>
    </div>
  )
}

export default Hero
