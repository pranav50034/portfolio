import React from "react";
import Home from "@/features/home/Home";
import Portfolio from "@/features/portfolio/Portfolio";
import Resume from "@/features/resume/Resume";
import About from "@/features/about/About";
import Contact from "@/features/contact/Contact";


const HomePage = () => {
   return (
      <div>
         <Home />
         <Portfolio />
         <Resume />
         <About />
         <Contact />
      </div>
   );
};

export default HomePage;
