import React, { useState } from "react";
import scrollToSection from "@/utils/scrollToSection";
import clsx from "clsx";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <nav className="h-[72px] flex bg-white md:bg-[#222222] text-black px-3 md:px-10 items-center justify-between w-full lg:px-40">
         {/* Hamburger */}
         <button
            className="w-10 h-8 flex flex-col justify-between z-50 md:hidden"
            onClick={() => {
               setIsOpen(!isOpen);
            }}
         >
            <span
               className={clsx(
                  "w-10 h-1 rounded-full origin-left transition-all duration-100",
                  isOpen ? "bg-white rotate-45" : "bg-black"
               )}
            ></span>
            <span
               className={clsx(
                  "w-10 h-1 rounded-full origin-left bg-black transition-all duration-100",
                  isOpen ? "hidden" : "block"
               )}
            ></span>
            <span
               className={clsx(
                  "w-10 h-1 rounded-full origin-left transition-all duration-100",
                  isOpen ? "bg-white -rotate-45" : "bg-black "
               )}
            ></span>
         </button>
         {isOpen && (
            <div className="h-screen w-screen z-40 absolute top-0 left-0 flex flex-col justify-center gap-6 text-xl items-center bg-black text-white uppercase md:hidden">
               <div className="tracking-wide">
                  <div
                     className="cursor-pointer"
                     onClick={() => {
                        setIsOpen(false);
                        scrollToSection("home");
                     }}
                  >
                     Home
                  </div>
               </div>
               <div className="tracking-wide">
                  <div
                     className="cursor-pointer"
                     onClick={() => {
                        setIsOpen(false);
                        scrollToSection("portfolio");
                     }}
                  >
                     Portfolio
                  </div>
               </div>
               <div className="tracking-wide">
                  <div
                     className="cursor-pointer"
                     onClick={() => {
                        setIsOpen(false);
                        scrollToSection("resume");
                     }}
                  >
                     Resume
                  </div>
               </div>
               <div className="tracking-wide">
                  <a
                     className="cursor-pointer"
                     onClick={() => {
                        setIsOpen(false);
                        scrollToSection("about");
                     }}
                  >
                     About
                  </a>
               </div>
               <div className="tracking-wide">
                  <a
                     className="cursor-pointer"
                     onClick={() => {
                        setIsOpen(false);
                        scrollToSection("contact");
                     }}
                  >
                     Contact
                  </a>
               </div>
            </div>
         )}

         <ul className="hidden md:flex w-full justify-center items-center md:gap-8 lg:gap-10 xl:gap-12 text-md lg:text-lg xl:text-xl text-white uppercase tracking-wide">
            <li>
               <a
                  className="cursor-pointer"
                  onClick={(e) => {
                     scrollToSection("home");
                  }}
               >
                  Home
               </a>
            </li>
            <li>
               <a
                  className="cursor-pointer"
                  onClick={(e) => {
                     scrollToSection("portfolio");
                  }}
               >
                  Portfolio
               </a>
            </li>
            <li>
               <a
                  className="cursor-pointer"
                  onClick={(e) => {
                     scrollToSection("resume");
                  }}
               >
                  Resume
               </a>
            </li>
            <li>
               <a
                  className="cursor-pointer"
                  onClick={(e) => {
                     e.preventDefault();
                     scrollToSection("about");
                  }}
               >
                  About
               </a>
            </li>
            <li>
               <a
                  className="cursor-pointer"
                  onClick={(e) => {
                     scrollToSection("contact");
                  }}
               >
                  Contact
               </a>
            </li>
         </ul>
      </nav>
   );
};

export default Header;
