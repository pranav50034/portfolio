import React from "react";

const Home = () => {
   return (
      <div className="h-screen flex-center flex-col" id="home">
         
         <h1 className="text-[40px] font-extralight md:text-[70px]">
            Hello, I&apos;m
         </h1>
         <h1 className="text-[50px] font-black -mt-3 md:text-[80px] md:max-w-[6ch] lg:max-w-full text-center md:leading-[1.2] ">
            Pranav Pokale
         </h1>
         <p className="uppercase text-[16px] tracking-[3.2px] mt-[15px]">
            And this is my resume
         </p>
      </div>
   );
};

export default Home;
