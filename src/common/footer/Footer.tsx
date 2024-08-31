import { Github, GithubIcon, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
     <div className="flex items-center justify-center gap-6 bg-[#222222] text-black px-3 py-10 md:px-10 w-screen lg:px-40 z-20 ">
        <Link href={"https://github.com/pranav50034"} className="flex items-center p-5 bg-[#333333] rounded-full cursor-pointer">
           <GithubIcon color="#bac964" />
        </Link>
        <Link href={"https://www.linkedin.com/in/pranavpokale"} className="flex items-center p-5 bg-[#333333] rounded-full cursor-pointer">
           <Linkedin color="#bac964" />
        </Link>
     </div>
  );
}

export default Footer