import React from 'react'
import gmeet from "@/assets/googleMeet.png"
import Image from 'next/image';

const About = () => {
  return (
     <div className="max-w-[1200px] mx-auto pt-[80px]" id="about">
        <div className="flex flex-col gap-8 md:grid grid-cols-2 md:gap-14 md:justify-between">
           {/* TODO: Add Image */}
           <div className="relative h-[300px] lg:h-[500px] md:h-[400px]">
              <Image
                 src={gmeet}
                 alt="podcast platform"
                 objectFit="cover"
                 layout="fill"
              />
           </div>
           <div className="flex flex-col md: justify-center">
              <h1 className="text-left text-heading font-extralight mb-8">
                 About <span className="font-extrabold">Me</span>
              </h1>
              <p className="text-lg text-left text-[#FFFFFF66] mb-5">
                 Passionate Frontend Developer with six months of experience in
                 creating eye-catching, pixel-perfect UIs and enhancing user
                 experiences.
              </p>
              <p className="text-lg text-left text-[#FFFFFF66] mb-5">
                 Driven to continuously learn and leverage cutting-edge
                 technologies to build intuitive and responsive web applications
                 that delight users.
              </p>
              <div className="flex justify-start gap-2">
                 {/* TODO: Add Functionality to buttons */}
                 <button className="py-2 px-6 bg-[#BAC964] rounded-full">
                    Hire Me
                 </button>
                 <button className="py-2 px-6 bg-[#6C757D] rounded-full">
                    Download CV
                 </button>
              </div>
           </div>
        </div>
     </div>
  );
}

export default About