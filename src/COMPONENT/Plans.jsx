import React from 'react'
import { FaCheck , FaTimes , FaCrown} from 'react-icons/fa'

function Plans() {
  return (
    <div id='plans' className='relative md:top-50 pt-30 sm:pt-60 md:pt-50 bg-[#ECEDF1] flex flex-col overflow-x-hidden items-center pb-5'>
      
      {/* heading section */}

      <div className="flex flex-col gap-[40px] py-[40px]">
        <div className="gap-[10px] flex flex-col items-center justify-center">
          <p className="bg-[ecedf1] text-[#6D7AFF] shadow-[inset_3px_3px_3px_#CACACA,inset_-5px_-5px_10px_white] py-1 md:py-2 px-4 rounded-3xl">
            Plans
          </p>
          <h2 className="text-[29px] 2xl:text-[45px] text-center md:text-[40px] font-semibold text-[#1C1C1C]">
            Flexible Pricing, <span className="text-[#6D7AFF]">Maximum Impact</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[1c1c1c] w-70 sm:w-auto text-center">
            Choose the perfect plan for your business with no hidden costs
          </p>
        </div>
      </div>

        {/* card-container */}

        <div className='flex justify-center items-center flex-col 2xl:flex-row gap-[20px] md:gap-[25px] '>

            {/* cards */}

            <div className='w-[280px] sm:w-[600px] md:w-[500px] shadow-[-10px_-10px_20px_#fafbff,_10px_10px_20px_#a6abbd40] rounded-2xl'>

                {/* top-text */}

                <div className='py-[10px] md:py-auto px-[25px] md:px-auto md:p-[32px]'>
                    <p className='text-[24px] text-[#1c1c1c]  font-medium'>Standard</p>
                    <span className='text-[40px] text-[#6d7aff] font-semibold'>$ 2,499 <span className='text-base'>/ month</span></span>
                    <p className='text-[18px] text-[#666]'>Perfect for starters and small teams.</p>
                </div>

                {/* list-continer */}

               <div className="p-[25px] md:p-[32px] flex flex-col">
                 {[
                  { text: "Custom AI chatbot development", available: true },
                  { text: "Basic natural language processing", available: true },
                  { text: "Up to 3 integrations", available: true },
                  { text: "Monthly performance reports", available: true },
                  { text: "Email support", available: true },
                  { text: "Dedicated account manager", available: false },
                  { text: "Custom analytics dashboard", available: false },
                  { text: "Regular updates and optimization", available: false },
                    ].map((item, i) => (
                   <div key={i} className="flex gap-[16px]  items-center mb-[16px] ">
                   <div
                    className={`border-2 p-1 rounded-full ${
                      item.available ? "border-[#6d7aff] text-[#6d7aff]" : "border-[#6666]  text-[#6666]"
                   }`}
                 >
               {item.available ? <FaCheck /> : <FaTimes />}
             </div>
                  <p className="text-[15px] sm:text-[17px] text-black font-medium">{item.text}</p>
            </div>
            ))}
        </div>
                
                <div className='mx-3'>
                    <button className='w-full cursor-pointer rounded-3xl duration-300 mb-10  p-3 shadow-[5px_5px_10px_#d0d0d0,_-5px_-5px_10px_#f0f0f0] hover:text-[#6d7aff]'>Get started</button>
                </div>
            </div>
            
            {/* card-2 */}

             <div className='w-[280px] sm:w-[600px] md:w-[500px] shadow-[-10px_-10px_20px_#fafbff,_10px_10px_20px_#a6abbd40] rounded-2xl '>

                {/* top-text */}

                <div className='py-[10px] md:py-auto px-[25px] md:px-auto md:p-[32px]'>
                    <p className='text-[24px] text-[#1c1c1c]  font-medium flex items-center gap-2'>Premium <FaCrown className='text-[#6d7aff]'/></p>
                    <span className='text-[40px] text-[#6d7aff] font-semibold'>$ 5,499 <span className='text-base'>/ month</span></span>
                    <p className='text-[18px] text-[#666]'>Exclusive and advanced features</p>
                </div>

                {/* list-continer */}

               <div className="p-[25px] md:p-[32px] flex flex-col">
                 {[
                  { text: "Advanced AI chatbot development", available: true },
                  { text: "Enhanced natural language processing", available: true },
                  { text: "Unlimited integrations", available: true },
                  { text: "Weekly performance reports", available: true },
                  { text: "Priority email and phone support", available: true },
                  { text: "Dedicated account manager", available: true },
                  { text: "Custom analytics dashboard", available: true },
                  { text: "Regular updates and optimization", available: true },
                    ].map((item, i) => (
                   <div key={i} className="flex gap-[16px] items-center mb-[16px]">
                   <div
                    className={`border-2 p-1 rounded-full ${
                      item.available ? "border-[#6d7aff] text-[#6d7aff]" : "border-[#6666]  text-[#6666]"
                   }`}
                 >
               {item.available ? <FaCheck /> : <FaTimes />}
             </div>
                  <p className="text-[15px] sm:text-[17px] text-black font-medium">{item.text}</p>
            </div>
            ))}
        </div>
                
                <div className='mx-3'>
                    <button className='w-full cursor-pointer rounded-3xl duration-300 mb-10  p-3 shadow-[5px_5px_10px_#d0d0d0,_-5px_-5px_10px_#f0f0f0] hover:text-[#6d7aff]'>Get started</button>
                </div>
            </div>
            
        </div>
      {/* ------------------- */}
    </div>
  )
}

export default Plans
