import React from 'react'

const Contact = () => {
  return (
     <div className="max-w-[1200px] mx-auto pt-[72px]" id="contact">
        <h1 className="text-heading font-extralight mb-8">
           Get <span className="font-extrabold">In Touch</span>
        </h1>
        <div className="md:grid grid-cols-[3fr_2fr] gap-8">
           <div className="mb-8">
              <h2 className="text-2xl mb-6 font-thin text-left">Write to me</h2>
              <form className="flex flex-col gap-4">
                 <input
                    className="bg-[#333333] p-3 rounded-sm focus:outline-none"
                    type="text"
                    placeholder="Your Name"
                 />
                 <input
                    className="bg-[#333333] p-3 rounded-sm focus:outline-none"
                    type="email"
                    placeholder="Your Email"
                 />
                 <textarea
                    className="bg-[#333333] p-3 rounded-sm min-h-60 focus:outline-none"
                    placeholder="Message"
                 />
                 <input
                    type="submit"
                    className="py-2 px-8 bg-[#BAC964] rounded-full self-start uppercase"
                    value={"Send Message"}
                 />
              </form>
           </div>
           <div className="text-left">
              <h2 className="text-2xl mb-6 font-thin">My Contact Details</h2>
              <p className="text-[#2C3E50] uppercase mb-2">Email</p>
              <p className="mb-4 text-[#FFFFFF91]">pokalepranav41@gmail.com</p>
              <p className="mb-2 text-[#2C3E50] uppercase">Contact</p>
              <p className="mb-4 text-[#FFFFFF91]">+91 7218543923</p>
              <p className="mb-2 text-[#2C3E50] uppercase">Address</p>
              <p className="mb-4 text-[#FFFFFF91]">Pune, Maharashtra</p>
           </div>
        </div>
     </div>
  );
}

export default Contact