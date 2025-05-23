import React from 'react'
import { FaPlus } from 'react-icons/fa'

function FAQ() {

    const faqData = [
  "What is AI automation and how can it benefit my business?",
  "What services does your agency offer?",
  "How long does it take to implement an AI automation solution?",
  "What kind of support do you provide after deploying an AI automation solution?",
  "How much does an AI automation solution cost?",
];

  return (
    <div className='relative md:top-50 pt-30 sm:pt-60 md:pt-25 bg-[#ECEDF1] flex flex-col overflow-x-hidden items-center pb-5'>
      
       {/* heading section */}

      <div className="flex flex-col gap-[40px] py-[40px]">
        <div className="gap-[10px] flex flex-col items-center justify-center">
          <p className="bg-[ecedf1] text-[#6D7AFF] shadow-[inset_3px_3px_3px_#CACACA,inset_-5px_-5px_10px_white] py-1 md:py-2 px-4 rounded-3xl">
            FAQ
          </p>
          <h2 className="text-[29px] 2xl:text-[45px] md:text-[40px] font-semibold text-[#1C1C1C] text-center">
           Your Questions, Answered
          </h2>
          <p className="text-[16px] md:text-[18px] text-[1c1c1c] text-center w-70 sm:w-auto">
           Answers to your most common questions about our AI services
          </p>
        </div>
      </div>

     {/* FAQ-container */}
<div className="gap-[15px] flex flex-col">
  {faqData.map((question, index) => (
    <div
      key={index}
      className="w-[280px] sm:w-[510px] md:w-[770px] sm:h-[80px] p-[15px] md:p-[24px]  rounded-4xl shadow-[-5px_-5px_10px_0px_rgb(250,251,255),_5px_5px_10px_0px_rgba(166,171,189,0.25)] cursor-pointer flex justify-center md:justify-between 2xl:w-[1000px]  "
    >
      <div className="w-[280px] sm:w-auto flex justify-between items-center text-[#333333] p-[24px] sm:p-0 sm:gap-2 ">
        <p className="text-[18px] font-medium duration-300 hover:text-[#6d7aff] sm:w-[415px] md:w-[690px] 2xl:w-[750px] w-70  text-start">{question}</p>
        <FaPlus className='text-[#7c7c7c] sm:ml-10 md:ml-0 2xl:ml-45 ' />
      </div>
    </div>
  ))}
</div>

{/* Booking-card-container */}

  <div className='w-[280px] sm:w-[770px] 2xl:w-[1000px] flex flex-col justify-center items-center gap-[18px] p-[25px] sm:p-[50px] mt-[25px] shadow-[-5px_-5px_10px_0px_rgb(250,251,255),_5px_5px_10px_0px_rgba(166,171,189,0.25)] rounded-3xl'>
    <p className=' text-[24px] sm:text-[36px] font-medium w-70 sm:w-100 text-center'>Ready to <span className='text-[#6d7aff]'>Transform Your Business</span>?</p>
    <p className='sm:text-[18px] text-[#1c1c1c] font-light sm:font-normal text-center w-50 sm:w-auto'>Schedule a consultation with our AI experts</p>

    <button className='w-auto px-[30px] py-[12px] bg-[#6d7aff] rounded-4xl text-white  text-[18px]  cursor-pointer duration-300 hover:bg-black '>Book a 15-min call</button>

    <p>It's <span className='text-[#6d7aff]'>100% free</span></p>
  </div>

      {/* ------------------------- */}
    </div>
  )
}

export default FAQ
