import React from "react";
import ChatGpt from "../assets/search engines/ChatGpt.png";
import Windows from "../assets/search engines/Windows.png";
import Notion from "../assets/search engines/Notion.png";
import Make from "../assets/search engines/make.png";
import Zapier from "../assets/search engines/Zapier.png";
import Airtable from "../assets/search engines/Airtable.png";
import Google from "../assets/search engines/Gmail.png";
import { FaPaperPlane } from "react-icons/fa";
import Pic1 from "../assets/images/Pic1.jpg";
import Pic2 from "../assets/images/Pic2.jpg";
import Pic3 from "../assets/images/Pic3.jpg";
import Pic4 from "../assets/images/Pic4.jpg";

function Services() {
  return (
    <div
      className="relative md:top-50 pt-30 sm:pt-60 md:pt-50 bg-[#ECEDF1] flex flex-col overflow-x-hidden items-center "
      id="#services"
    >
      {/* Separate containers */}
      <div className="flex flex-col gap-[40px]">
        {/* top-heading */}
        <div className="gap-[10px] flex flex-col items-center justify-center ">
          <p className="bg-[ecedf1] text-[#6D7AFF] shadow-[inset_3px_3px_3px_#CACACA,inset_-5px_-5px_10px_white] py-1 md:py-2 px-4 rounded-3xl ">
            Services
          </p>
          {/* heading */}
          <h2 className="text-[29px] 2xl:text-[45px] md:text-[40px] text-center font-semibold text-[#6D7AFF]">
            Next-Gen <span className="text-[#1C1C1C]">AI Solutions</span>
          </h2>
          {/* tagline */}
          <p className="text-[16px] md:text-[18px]  text-[#1c1c1c] text-center w-70 sm:w-auto">
            Innovative solutions tailored to meet your unique business needs
          </p>
        </div>
      </div>
      {/* CONTAINERS */}
      <div className="flex justify-center flex-wrap py-[40px] gap-10 2xl:w-500">
        {/* container-1 */}
        <div className="flex justify-center flex-col items-center w-screen sm:w-[600px] md:w-[730px] xl:w-[700px] sm:h-[370px] md:h-[600px] xl:h-[570px] shadow-[-10px_-10px_20px_#FAFBFF,10px_10px_20px_#a6abbd40]  rounded-4xl">
          <div className="flex flex-col">
            {/* search icons */}
            <img
              src={ChatGpt}
              alt="chatgpt"
              className="w-[15px] h-[15px] md:w-15 md:h-15  object-cover"
            />
            <img
              src={Notion}
              alt="chatgpt"
              className="w-[15px] h-[15px] md:w-15 md:h-15  object-cover"
            />
            <img src={Make} alt="chatgpt" className="w-[15px] h-[15px] md:w-15 md:h-15  object-cover" />
            <img
              src={Windows}
              alt="chatgpt"
              className="w-[15px] h-[15px] md:w-15 md:h-15  object-cover"
            />
            <img
              src={Zapier}
              alt="chatgpt"
              className="w-[15px] h-[15px] md:w-15 md:h-15  object-cover"
            />
            <img
              src={Airtable}
              alt="chatgpt"
              className="w-[15px] h-[15px] md:w-15 md:h-15  object-cover"
            />
            <img
              src={Google}
              alt="chatgpt"
              className=" w-[15px] h-[15px] md:w-15 md:h-15 object-cover"
            />
          </div>
          {/* Heading and text*/}
          <div className="p-[33px] md:p-[63px] gap-[10px] text-center md:text-start">
            <h3 className="text-[18px] md:text-[20px] text-[#1C1C1C]  font-semibold">
              Workflow automation
            </h3>
            <p className="text-[#4D4D4D]  sm:text-[12px] md:text-[16px] ">
              We analyze your processes and implement tailored workflows to
              automate tasks and optimize operations efficiently.
            </p>
          </div>
          {/* Container-2 */}
        </div>
        {/* Message container */}
        <div className="w-screen sm:w-[600px] md:w-[730px] xl:w-[700px]  md:h-[600px] xl:h-[570px] shadow-[-10px_-10px_20px_#FAFBFF,10px_10px_20px_#a6abbd40]  rounded-4xl">
          {/* messages */}
          <div className="flex justify-center items-center h-25 md:h-85 relative  ">
            <p className=" text-[12px] md:text-base p-[9px] md:p-[15px] bg-[#6D7AFF] w-fit text-white absolute top-20 md:top-40 left-4 sm:left-40 md:left-10  rounded-tr-4xl rounded-tl-4xl rounded-br-4xl rounded-bl-xl ">
              Hi! How can i help you
            </p>
            <p className="text-[12px] md:text-base p-[9px] md:p-[15px] bg-[#ECEDF1] w-fit text-[#1C1C1C] absolute top-35 md:top-60 right-4 sm:right-40 md:right-10  rounded-tr-4xl rounded-tl-4xl rounded-bl-4xl rounded-br-xl  shadow-[6px_6px_12px_#BEBEBE,-6px_-6px_12px_#FFFFFF]">
              Hi! Can you tell me about digital
              <br /> marketing services?
            </p>
            {/* search-box */}
            <div className="flex justify-end items-center px-2 w-[290px] md:w-[672px] h-[40px] md:h-[65px] rounded-full relative top-50 shadow-[inset_-2px_-2px_3px_rgb(250,251,255),inset_2px_2px_3px_rgba(166,171,189,0.5)]">
              {/* plan-icon */}
              <div className="w-[31px] md:w-12 h-[31px] md:h-12  rounded-full flex justify-center items-center shadow-[-2px_-2px_5px_rgb(250,251,255),2px_2px_5px_rgba(166,171,189,0.25)]">
                <FaPaperPlane className="text-[#6D7AFF]  md:text-2xl" />
              </div>
            </div>
          </div>
          {/* heading and text */}
          <div className="py-14 sm:py-0 sm:p-[63px] gap-[10px] relative mt-25 md:mt-0 top-8 md:top-26 text-center md:text-start">
            <h3 className="text-[18px] md:text-[20px] text-[#1C1C1C]  font-semibold">
              Customer service chatbots
            </h3>
            <p className="text-[#4D4D4D]  sm:text-[12px] md:text-[16px] ">
              We understand your goals and customer needs, designing custom
              chatbots using advanced AI for seamless interactions.
            </p>
          </div>
        </div>

        <div className="flex  justify-center items-center w-screen sm:w-[600px] md:w-[730px] xl:w-[700px] md:h-[600px] xl:h-[570px]  shadow-[-10px_-10px_20px_#FAFBFF,10px_10px_20px_#a6abbd40]  rounded-4xl ">
          <div>
            {/* Pic , Subjects , mesaage CONTAINER */}

           <div className="flex justify-center items-center mt-10">
             <div className="p-4 w-[280px] md:w-[450px] shadow-[-10px_-10px_20px_#FAFBFF,10px_10px_20px_#a6abbd40] rounded-xl  gap-[15px] ">
              {/* pics */}

              <div className="flex ">
                {[Pic1, Pic2, Pic3, Pic4].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Profile ${index + 1}`}
                    className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] object-cover rounded-full "
                  />
                ))}
                <div className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#6D7AFF] flex justify-center items-center text-[#f5f6fa] rounded-full text-[10px]">
                  4K+
                </div>
              </div>

              {/* -------------- */}

              <p className="my-[8px] md:my-[15px] text-[12px] ">Subject</p>

              {/* dummybars */}

              <div className="flex gap-2">
                {["77px", "77px", "150px"].map((width, index) => (
                  <div
                    key={index}
                    className="h-[5px] md:h-[10px] bg-[#4d4d4d] rounded-full opacity-20"
                    style={{ width }}
                  />
                ))}
              </div>
              
                {/* -------------- */}
              
              <p className="my-[8px] md:my-[15px] text-[12px] ">Message</p>

              {/* dummybar */}

                <div className="flex flex-wrap gap-2 my-[15px]">
                {["77px", "77px", "77px" , "77px" , "77px" , "77px", "77px", "77px" , "77px" , "77px" , "77px", "77px", "77px" , "77px" , "77px" , "77px", "77px", "77px" , "77px" , "77px"].map((width, index) => (
                  <div
                    key={index}
                    className="h-[5px] md:h-[10px] bg-[#4d4d4d] rounded-full  opacity-20"
                    style={{ width }}
                  />
                ))}
              </div>

              {/* --------------- */}

              <div className="flex justify-end">
                <div className="p-1 md:p-3  md:my-[10px] bg-[#6d7aff] w-[35px] md:w-[65px] rounded-lg text-white flex justify-center items-center md:text-2xl">
                <FaPaperPlane/>
              </div>
              </div>
            </div>
           </div>
            
             <div className="p-[33px] md:p-[63px] gap-[10px] relative top-0 text-center md:text-start">
              <h3 className=" text-[18px] md:text-[20px] text-[#1C1C1C]  font-semibold">
              Personalized cold outreach
            </h3>
            <p className="text-[#4D4D4D] w-70 sm:w-auto sm:text-[12px] md:text-[16px] ">
              We analyze recipient data and generate personalized emails, resulting in higher response rates and improved conversions.
            </p>
             </div>
            
          </div>
        </div>

        {/* fourth container */}


        <div className="flex justify-center items-center w-[600px] md:w-[730px] xl:w-[700px] md:h-[600px] xl:h-[570px] shadow-[-10px_-10px_20px_#FAFBFF,10px_10px_20px_#a6abbd40]  rounded-4xl">
          <div>

            {/* dummybars CONTAINER */}

            <div className="flex justify-center items-center mt-10">
              <div className=" w-[275px] md:w-[450px] h-[225px] md:h-[350px]  rounded-2xl border-[#4d4d4d] opacity-20 border-3">
                {/* dummybars */}
            </div>
            </div>
            
            <div className="p-[33px] md:p-[63px] gap-[10px] relative top-0 text-center md:text-start">
              <h3 className=" text-[18px] md:text-[20px] text-[#1C1C1C]  font-semibold">
              Automated content creation
            </h3>
            <p className="text-[#4D4D4D] w-70 sm:w-auto sm:text-[12px] md:text-[16px]">
              We analyze your content needs and audience, crafting high-quality content, tailored to meet your specific requirements.
            </p>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
