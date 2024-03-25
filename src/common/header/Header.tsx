import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
     <>
        <nav
           className="h-[72px] border flex bg-white md:bg-transparent text-black px-3 md:px-10
        items-center justify-between w-screen lg:px-40 fixed "
        >
           {/* Logo */}
           <Link
              href="/"
              className="text-[3rem] flex items-center font-bold md:text-white md:w-[100px] md:h-[100px] relative uppercase"
           >
              PP
           </Link>

           {/* Hamburger */}
           <button
              className="w-10 h-8 flex flex-col justify-between z-50 md:hidden"
              onClick={() => {
                 setIsOpen(!isOpen);
                 console.log("Button clicked, isOpen: ", isOpen);
              }}
           >
              <span className="w-10 h-1 rounded-full origin-left bg-black"></span>
              <span className="w-10 h-1 rounded-full origin-left bg-black"></span>
              <span className="w-10 h-1 rounded-full origin-left bg-black"></span>
           </button>
           {isOpen && (
              <div className="h-screen w-screen z-40 absolute top-0 left-0 flex flex-col justify-center gap-6 text-xl items-center bg-black text-white uppercase md:hidden">
                 <div className="tracking-wide">
                    <div
                       className="cursor-pointer"
                       onClick={() => {
                          setIsOpen(false);
                          router.push("/");
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
                          router.push("/portfolio");
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
                          router.push("/resume");
                       }}
                    >
                       Resume
                    </div>
                 </div>
                 <div className="tracking-wide">
                    <div
                       className="cursor-pointer"
                       onClick={() => {
                          setIsOpen(false);
                          router.push("/about");
                       }}
                    >
                       About
                    </div>
                 </div>
                 <div className="tracking-wide">
                    <div
                       className="cursor-pointer"
                       onClick={() => {
                          setIsOpen(false);
                          router.push("/contact");
                       }}
                    >
                       Contact
                    </div>
                 </div>
              </div>
           )}

           <ul className="hidden md:flex md:gap-8 lg:gap-10 xl:gap-12 text-md lg:text-lg xl:text-xl text-white uppercase font-semibold tracking-wide">
              <li>
                 <Link href="/">Home</Link>
              </li>
              <li>
                 <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                 <Link href="/resume">Resume</Link>
              </li>
              <li>
                 <Link href="/about">About</Link>
              </li>
              <li>
                 <Link href="/contact">Contact</Link>
              </li>
           </ul>
        </nav>
     </>
  );
}

export default Header
