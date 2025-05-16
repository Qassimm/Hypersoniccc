import React from 'react'
import ChatGpt from '../assets/search engines/ChatGpt.png';
import Windows from '../assets/search engines/Windows.png';
import Notion from '../assets/search engines/Notion.png';
import Make from '../assets/search engines/make.png';
import Zapier from '../assets/search engines/Zapier.png';
import Airtable from '../assets/search engines/Airtable.png';
import Google from '../assets/search engines/Gmail.png'

function Services() {
  return (
    <div className='relative md:top-50 pt-60 md:pt-50 bg-[#ecedf1]' id='#services'>

        {/* Separate containers */}

      <div className='flex flex-col gap-[40px]'>

        {/* top-heading */}

        <div className="gap-[10px] flex flex-col items-center justify-center ">
        <p className="bg-[ecedf1] text-[#6D7AFF] shadow-[inset_3px_3px_3px_#cacaca,inset_-5px_-5px_10px_white] py-1 md:py-2 px-4 rounded-3xl">
          Services
        </p>

        {/* heading */}

        <h2 className="text-[29px] md:text-[40px] font-semibold text-[#6d7aff]">
          AI Solutions <span className="text-[#1c1c1c]">Next-Gen</span>
        </h2>

        {/* tagline */}

        <p className="text-[16px] md:text-[18px] text-[1c1c1c]">
          Innovative solutions tailored to meet your unique business needs
        </p>
      </div>
        </div>

        {/* CONTAINERS */}

        <div className='flex justify-center flex-wrap py-[40px]'>
            
            {/* container-1 */}

            <div className='flex justify-center items-center w-[730px] h-[600px] shadow-[-10px_-10px_20px_#fafbff,10px_10px_20px_#a6abbd40]  rounded-4xl'>
                <div>
                    <img src={ChatGpt} alt="chatgpt" className='w-15 h-15 object-cover' />
                    <img src={Notion} alt="chatgpt" className='w-15 h-15 object-cover' />
                    <img src={Make} alt="chatgpt" className='w-15 h-15 object-cover' />
                    <img src={Windows} alt="chatgpt" className='w-15 h-15 object-cover' />
                    <img src={Zapier} alt="chatgpt" className='w-15 h-15 object-cover' />
                    <img src={Airtable} alt="chatgpt" className='w-15 h-15 object-cover' />
                    <img src={Google} alt="chatgpt" className='w-15 h-15 object-cover' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
