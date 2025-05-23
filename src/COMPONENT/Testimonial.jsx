import React from 'react'
import { FaStar } from 'react-icons/fa'
import Pic1 from '../assets/images/Pic1.jpg'
import Pic2 from '../assets/images/Pic2.jpg'
import Pic3 from '../assets/images/Pic3.jpg'
import Pic4 from '../assets/images/Pic4.jpg'


function Testimonial() {

    const stars = Array(5).fill(0);

    const cardData = [
  {
    name: "Sarah Thompson",
    role: "COO, Tech Solutions Inc.",
    review: "Our sales conversion rates increased significantly thanks to Hypersonic's AI-driven lead scoring system.",
    image: Pic1,
  },
  {
    name: "Sam Sulek",
    role: "COO, Tech Solutions Inc.",
    review: "Hypersonic's AI chatbot drastically cut our response times and boosted customer satisfaction.",
    image: Pic2,
  },
  {
    name: "James Martinez",
    role: "CFO, FinancePro Inc.",
    review: "Hypersonic streamlined our invoicing process, saving us time and reducing errors effectively.",
    image: Pic3,
  },
  {
    name: "Michael Johnson",
    role: "CEO, InnovateTech Corp",
    review: "Their personalized cold outreach system greatly improved our email response rates.",
    image: Pic4,
  },
];


  return (
    <div className='relative md:top-50 pt-30 sm:pt-60 md:pt-50 bg-[#ECEDF1] flex flex-col overflow-x-hidden items-center pb-5'>
    
     {/* heading section */}

      <div className="flex flex-col gap-[40px] py-[40px]">
        <div className="gap-[10px] flex flex-col items-center justify-center">
          <p className="bg-[ecedf1] text-[#6D7AFF] shadow-[inset_3px_3px_3px_#CACACA,inset_-5px_-5px_10px_white] py-1 md:py-2 px-4 rounded-3xl">
            Testimonials
          </p>
          <h2 className="text-[29px] 2xl:text-[45px] md:text-[40px] font-semibold text-[#1C1C1C] text-center w-70 sm:w-auto">
            What Our Clients Say
          </h2>
          <p className="text-[16px] md:text-[18px] text-[1c1c1c] text-center w-70 sm:w-auto">
            Discover how our clients have transformed their businesses with AI
          </p>
        </div>
      </div>

      {/* Card-container */}

      <div className="flex flex-wrap w-[810px] 2xl:w-full justify-center gap-[25px]">
  {cardData.map((client, index) => (

    // cards  
    <div
      key={index}
      className="w-[510px] md:w-[370px] 2xl:w-[660px] p-[30px] shadow-[-10px_-10px_20px_#fafbff,_10px_10px_20px_#a6abbd40] flex justify-center items-center flex-col gap-[25px] rounded-3xl"
    >
      {/* client description */}
      <div className="gap-[8px] flex flex-col items-center ">
        <img src={client.image} className="w-[70px] h-[70px] rounded-full object-cover" />
        <p className="text-[22px] text-[#1c1c1c] font-medium">{client.name}</p>
        <p className="text-[16px] text-[#1c1c1c]">{client.role}</p>
        <div className="flex">
          {stars.map((_, index) => (
            <FaStar key={index} className="text-[#6d7aff] text-2xl" />
          ))}
        </div>
      </div>

      {/* review */}
      <p className="sm:text-[18px] text-[#4d4d4d] text-center w-70 sm:w-auto">"{client.review}"</p>
    </div>
  ))}
</div>

      {/* ------------------- */}
    </div>
  )
}

export default Testimonial
