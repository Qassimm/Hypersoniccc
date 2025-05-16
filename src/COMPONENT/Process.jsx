import React from "react";
import { FaRocket } from "react-icons/fa";

function Process() {
  return (
    <div
      className="relative md:top-50 pt-60 md:pt-26 bg-[#ecedf1]"
      id="#process"
    >
      {/* pTag , heading , tagline */}

      <div className="gap-[10px] flex flex-col items-center justify-center ">
        <p className="bg-[ecedf1] text-[#6D7AFF] shadow-[inset_3px_3px_3px_#cacaca,inset_-5px_-5px_10px_white] py-1 md:py-2 px-4 rounded-3xl">
          Process
        </p>

        {/* heading */}

        <h2 className="text-[29px] md:text-[40px] font-semibold text-[#1c1c1c]">
          Our <span className="text-[#6d7aff]">Proven Process</span>
        </h2>

        {/* tagline */}

        <p className="text-[16px] md:text-[18px] text-[1c1c1c]">
          From concept to execution, see how we bring AI to life in your
          business
        </p>
      </div>

      {/* DummyBar container , text-div  -------CONTAINERS*/}

      <div className="flex flex-col justify-center items-center ">
        {/* ----------FIRST-CONTAINER---------- */}

        <div className="flex flex-col justify-center items-center mt-15 md:m-20  gap-[60px]">

          {/* DummyBar container */}

          <div className=" w-[340px] md:w-[32rem] h-[272px] md:h-[25rem] shadow-[19px_19px_38px_#cacaca,-10px_-10px_10px_#f6f6f6] rounded-3xl bg-[#ecedf1]">
            {/* DummyBars */}

            <div className="p-[10px] md:p-[25px] flex flex-col gap-[10px] md:gap-[20px]">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex gap-2">
                  <div className="w-8 h-4 bg-[#4d4d4d] rounded-lg opacity-30"></div>
                  <div className="w-full h-4 bg-[#4d4d4d] rounded-lg opacity-30"></div>
                </div>
              ))}
            </div>
          </div>

          {/* text-div */}

          <div className="gap-[10px]  text-center">
            <p className="text-5xl md:text-7xl text-[#6d7aff] font-semibold">01</p>
            <h3 className="text-[15px] md:text-[20px] text-[#1c1c1c] font-semibold">
              Discovery & Analysis
            </h3>
            <p className=" text-[12px] md:text-[16px] text-[#4d4d4d] font-light w-130 ">
              We delve deep into your business processes to identify areas
               ready for automation. We engage with your team, analyze
               workflows, and pinpoint where AI can make a big impact.
            </p>
          </div>
        </div>

        {/* ----------SECOND-CONTAINER---------- */}

        <div className="flex flex-col justify-center items-center mt-15 md:mt-20 gap-[60px]">
          {/* DummyBar container-second */}

          <div className="w-[340px] md:w-[32rem] h-[272px] md:h-[25rem] shadow-[19px_19px_38px_#cacaca,-10px_-10px_10px_#f6f6f6] rounded-3xl bg-[#ecedf1]">
            {/* dot coontainer */}

            <div className=" flex flex-col gap-[10px] md:gap-[20px]">
              {/* dots */}

              <div className="flex items-center pl-5 gap-1 md:gap-2 bg-[#ecedf1] h-10 md:h-15 rounded-t-3xl shadow-[6px_6px_10px_#c7c7c7,-12px_-12px_24px_#f9f9f9]">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="w-3 md:w-5 h-3 md:h-5 rounded-full bg-[#4d4d4d] opacity-40 " />
                  </div>
                ))}
              </div>

              {/* dummyBars */}

              <div className="flex flex-col gap-2 md:gap-4 px-3 md:px-5">
      {[
        [3, 5], [3, 5], [1], [3, 5], [3, 10], [3, 15], [3, 5], [1], [3, 5], [3, 10]
      ].map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-3">
          <div className={`w-5 md:w-8 h-3 md:h-4 bg-[#4d4d4d] opacity-20 rounded-xl mr-${row[1]}`} />
          {row[0] > 1 && (
            <>
              <div className="h-3 md:h-4 w-20 md:w-30 bg-[#4d4d4d] opacity-20 rounded-xl" />
              <div className="h-3 md:h-4 w-18 md:w-25 bg-[#4d4d4d] opacity-20 rounded-xl" />
            </>
          )}
        </div>
      ))}
    </div>

            </div>
            
          </div>

          {/* text-div */}

          <div className="gap-[10px] text-center">
            <p className="text-5xl md:text-7xl text-[#6d7aff] font-semibold">02</p>
            <h3 className="text-[15px] md:text-[20px] text-[#1c1c1c] font-semibold">
              Development
            </h3>
            <p className="text-[12px] md:text-[16px] text-[#4d4d4d] font-light w-130">
              This is where we bring your tailored solutions to life. We'll
               design interfaces that fit seamlessly into your workflows,
               integrating advanced AI technology along the way.
            </p>
          </div>
        </div>

        {/* ----------THIRD-CONTAINER---------- */}

        <div className="flex flex-col justify-center items-center mt-15 md:mt-20 gap-[60px]">
          {/* DummyBar container */}

          <div className="w-[340px] md:w-[32rem] h-[272px] md:h-[25rem] shadow-[19px_19px_38px_#cacaca,-10px_-10px_10px_#f6f6f6] rounded-3xl bg-[#ecedf1]">
          
            {/* ROcket animation */}

            <div className="p-[25px] flex  justify-center items-center h-full">

              {/* ROCKET */}

                <i className="text-[#6d7aff] text-5xl"><FaRocket/></i>

                            {/* Wind-lines */}

            </div>
           
          </div>

          {/* text-div */}

          <div className="gap-[10px] text-center">
            <p className="text-5xl md::text-7xl text-[#6d7aff] font-semibold">03</p>
            <h3 className="text-[15px] md:text-[20px] text-[#1c1c1c] font-semibold">
              Deployment
            </h3>
            <p className="text-[12px] md:text-[16px] text-[#4d4d4d] font-light w-130">
              We smoothly roll out the solutions into your workflow, provide
               thorough training, and offer ongoing support to keep things
               running smoothly. We're here for you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
