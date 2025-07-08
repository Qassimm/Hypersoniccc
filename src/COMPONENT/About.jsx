// import React from 'react'

// function About() {
//   return (
//     <div  className='relative md:top-50 pt-30 sm:pt-60 md:pt-50 bg-[#ECEDF1] flex flex-col overflow-x-hidden items-center'>
      
//       {/* headingsection */}

//       <div  className="flex flex-col gap-[40px] py-[40px]">
//         <div className="gap-[10px] flex flex-col items-center justify-center">
//           <p className="bg-[ecedf1] text-[#6D7AFF] shadow-[inset_3px_3px_3px_#CACACA,inset_-5px_-5px_10px_white] py-1 md:py-2 px-4 rounded-3xl">
//             About
//           </p>
//           <h2 className="text-[29px] 2xl:text-[45px] md:text-[40px] font-semibold text-[#1C1C1C] text-center">
//             Who We Are
//           </h2>
//           <p className="text-[16px] md:text-[24px] text-[#4d4d4d] text-center w-70 md:w-189 font-medium ">
//             We are <span className='text-[#6d7aff]'>HyperSonic</span>, a leading AI Automation Agency dedicated to transforming businesses with cutting-edge technology and innovative solutions. Our team is committed to driving efficiency and growth for your business
//           </p>

//           <button className='px-[30px] py-[12px] bg-[#6d7aff] rounded-4xl text-white  text-[18px]  cursor-pointer duration-300 hover:bg-black mt-[30px]'>Learn more</button>
//         </div>
//       </div>

//       {/* ------------------------ */}
//     </div>
    
//   )
// }

// export default About


import React from 'react'

function About() {
  return (
    <div id="about" className='relative md:top-50 pt-30 sm:pt-60 md:pt-50 bg-[#ECEDF1] flex flex-col overflow-x-hidden items-center'>
      
      {/* headingsection */}
      <div className="flex flex-col gap-[40px] py-[40px]">
        <div className="gap-[10px] flex flex-col items-center justify-center">
          <p className="bg-[ecedf1] text-[#6D7AFF] shadow-[inset_3px_3px_3px_#CACACA,inset_-5px_-5px_10px_white] py-1 md:py-2 px-4 rounded-3xl">
            About
          </p>
          <h2 className="text-[29px] 2xl:text-[45px] md:text-[40px] font-semibold text-[#1C1C1C] text-center">
            Who We Are
          </h2>
          <p className="text-[16px] md:text-[24px] text-[#4d4d4d] text-center w-70 md:w-189 font-medium ">
            We are <span className='text-[#6d7aff]'>HyperSonic</span>, a leading AI Automation Agency dedicated to transforming businesses with cutting-edge technology and innovative solutions. Our team is committed to driving efficiency and growth for your business
          </p>

          <button className='px-[30px] py-[12px] bg-[#6d7aff] rounded-4xl text-white text-[18px] cursor-pointer duration-300 hover:bg-black mt-[30px]'>
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
