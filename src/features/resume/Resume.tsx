import { Calendar } from 'lucide-react';
import React from 'react'

const Resume = () => {
  return (
     <div className="max-w-[1200px] mx-auto mb-12 pt-[72px]" id="resume">
        <h1 className=" text-heading font-extralight mb-8">
           My <span className="font-extrabold">Resume</span>
        </h1>
        <div className="flex flex-col md:flex-row md:gap-14 md:justify-center">
           <div className="text-left">
              <h2 className="text-2xl mb-6 font-thin">Education</h2>
              <div className="flex flex-col">
                 <div className="mb-6 md:w-[400px] cursor-pointer transition-all hover:scale-[1.02] bg-[#333333] p-7 rounded-2xl">
                    <p className="font-bold flex gap-2 mb-3">
                       <Calendar />
                       April 2020 - March 2023
                    </p>
                    <p className="text-xl text-[#BAC964] mb-3">
                       Bachelor of Computer Applications
                    </p>
                    <p className="text-lg text-[#FFFFFF66] mb-5">
                       Developed skills in software development, programming,
                       and database management. Worked on projects focusing on
                       frontend development, gaining hands-on experience in web
                       development and problem-solving.
                    </p>
                    <p className="text-[#FFFFFF66]">
                       Savitribai Phule University, Pune
                    </p>
                 </div>
                 <div className="mb-6  md:w-[400px] cursor-pointer transition-all hover:scale-[1.02] bg-[#333333] p-7 rounded-2xl">
                    <p className="font-bold flex gap-2 mb-3">
                       <Calendar />
                       April 2018 - March 2019
                    </p>
                    <p className="text-xl text-[#BAC964] mb-3">
                       Higher Secondary Education
                    </p>
                    <p className="text-[#FFFFFF66]">Maharashtra</p>
                 </div>
                 <div className="mb-6  md:w-[400px] cursor-pointer transition-all hover:scale-[1.02] bg-[#333333] p-7 rounded-2xl">
                    <p className="font-bold flex gap-2 mb-3">
                       <Calendar />
                       April 2016 - March 2017
                    </p>
                    <p className="text-xl text-[#BAC964] mb-3">
                       Secondary Education
                    </p>
                    <p className="text-[#FFFFFF66]">CBSE</p>
                 </div>
              </div>
           </div>
           <div className="text-left">
              <h2 className="text-2xl mb-6 font-thin">Experience</h2>
              <div className="flex flex-col">
                 <div className="mb-6 md:w-[400px] cursor-pointer transition-all hover:scale-[1.02] bg-[#333333] p-7 rounded-2xl">
                    <p className="font-bold flex gap-2 mb-3">
                       <Calendar />
                       Feb 2024 - July 2024
                    </p>
                    <p className="text-xl text-[#BAC964] mb-3">
                       Frontend Developer Intern
                    </p>
                    <p className="text-lg text-[#FFFFFF66] mb-5">
                       Developed an end-to-end WebRTC module to enable real-time
                       communication, including video, audio, and data
                       streaming, enhancing the application’s interactive
                       capabilities. Collaborated with backend teams to
                       integrate APIs, ensuring seamless data flow and
                       functionality across the platform.Transformed Figma
                       designs into pixel-perfect UIs, ensuring visual
                       consistency and alignment with design specifications.
                    </p>
                    <p className="text-[#FFFFFF66]">Health First Priority</p>
                 </div>
              </div>
           </div>
        </div>
     </div>
  );
}

export default Resume