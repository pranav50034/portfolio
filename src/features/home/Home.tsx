import React from "react";

const Home = () => {
   return (
      <div className="flex-1 flex-grow flex flex-col items-center justify-center text-white">
         <h1 className="text-[40px] font-extralight md:text-[70px]">
            Hello, I&apos;m
         </h1>
         <h1 className="text-[50px] font-black -mt-3 md:text-[80px] md:max-w-[6ch] lg:max-w-full text-center md:leading-[1.2] ">
            Pranav Pokale
         </h1>
         <p className="uppercase text-[16px] text-light tracking-[3.2px] mt-[15px]">
            And this is my portfolio
         </p>
      </div>
   );
};

export default Home;
