import React from 'react'
import {
  FaChartLine,
  FaWallet,
  FaPersonBooth,
  FaBalanceScale,
  FaBolt,
  FaPuzzlePiece,
} from 'react-icons/fa'

const benefitsData = [
  {
    icon: <FaChartLine className="text-[#6D7AFF] text-5xl" />,
    title: 'Increased Efficiency',
    desc: 'We streamline processes with AI automation, reducing manual effort and saving time.',
  },
  {
    icon: <FaWallet className="text-[#6D7AFF] text-5xl" />,
    title: 'Cost Savings',
    desc: 'By automating tasks, we lower operational costs and reallocate resources effectively.',
  },
  {
    icon: <FaPersonBooth className="text-[#6D7AFF] text-5xl" />,
    title: 'Personalization',
    desc: 'We deliver personalized experiences, enhancing customer satisfaction.',
  },
  {
    icon: <FaBalanceScale className="text-[#6D7AFF] text-5xl" />,
    title: 'Scalability',
    desc: 'Our AI Automation solutions allows us to scale operations easily to meet growing demands.',
  },
  {
    icon: <FaBolt className="text-[#6D7AFF] text-5xl" />,
    title: 'Faster Decision-Making',
    desc: 'We analyze data swiftly, providing actionable insights for faster decision-making.',
  },
  {
    icon: <FaPuzzlePiece className="text-[#6D7AFF] text-5xl" />,
    title: 'Adaptive Solutions',
    desc: 'We adapt to changing circumstances, ensuring our solutions remain effective.',
  },
]

function Benifits() {
  return (
    <div id="benefits" className="relative md:top-50 pt-30 sm:pt-60 md:pt-50 bg-[#ECEDF1] flex flex-col overflow-x-hidden items-center">
      {/* Heading Section */}
      <div className="flex flex-col gap-[40px] py-[40px]">
        <div className="gap-[10px] flex flex-col items-center justify-center">
          <p className="bg-[ecedf1] text-[#6D7AFF] shadow-[inset_3px_3px_3px_#CACACA,inset_-5px_-5px_10px_white] py-1 md:py-2 px-4 rounded-3xl">
            Benefits
          </p>
          <h2 className="text-[29px] 2xl:text-[45px] md:text-[40px] font-semibold text-[#1C1C1C] text-center">
            Experience the <span className="text-[#6D7AFF] ">AI Advantage</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#1c1c1c] text-center w-70 sm:w-auto">
            Innovative solutions tailored to meet your unique business needs
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full md:w-[810px] 2xl:w-[1440px] flex justify-center items-center flex-wrap gap-[24px] mb-5">
        {benefitsData.map((item, index) => (
          <div
            key={index}
            className="w-screen sm:w-[600px] md:w-[353px] 2xl:w-[437px] h-[299px] shadow-[-10px_-10px_20px_#fafbff,_10px_10px_20px_#a6abbd40] rounded-2xl flex flex-col justify-center items-center gap-[24px] 2xl:p-5"
          >
            <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center shadow-[inset_-5px_-5px_10px_#fafbff,_inset_5px_5px_10px_#a6abbd40]">
              {item.icon}
            </div>
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <h3 className="text-[#1c1c1c] text-[18px] md:text-[20px] 2xl:text-[24px] font-semibold">
                {item.title}
              </h3>
              <p className="text-[#4d4d4d] sm:text-[12px] md:text-[18px] text-center  w-70 sm:w-auto font-light">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benifits
