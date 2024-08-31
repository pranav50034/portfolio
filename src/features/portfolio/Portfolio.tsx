import React from 'react'
import Image from 'next/image';
import podcast from "@/assets/podcast.png"
import finance from "@/assets/finance.png"
import googleMeet from "@/assets/googleMeet.png"
import Link from 'next/link';

const Portfolio = () => {
  return (
     <div className="max-w-[1200px] mx-auto pt-[72px]" id="portfolio">
        <h1 className=" text-heading font-extralight mb-8">
           Featured <span className="font-extrabold">Portfolio</span>
        </h1>
        <div className="flex flex-col md:flex-row md:flex-center md:gap-6 md:h-[600px]">
           <Link
              href={"https://pranavcodes.in"}
              className="mb-6 md:w-[400px] cursor-pointer transition-all hover:scale-[1.02]"
           >
              <div className="relative w-full h-[300px]">
                 <Image
                    src={googleMeet}
                    alt="podcast platform"
                    layout="fill"
                    objectFit="cover"
                 />
              </div>
              <div className="m-2">
                 <p className="text-textMedium">Google Meet Clone</p>
                 <p className="text-textSmall">
                    NextJs, Redux, SocketIO, WebRTC, TailwindCSS
                 </p>
              </div>
           </Link>
           <Link
              href={"https://podcast-platform-react-pp.netlify.app/"}
              className="mb-6 md:w-[400px] cursor-pointer transition-all hover:scale-[1.02] md:self-end"
           >
              <div className="relative w-full h-[300px]">
                 <Image
                    src={podcast}
                    alt="podcast platform"
                    layout="fill"
                    objectFit="cover"
                 />
              </div>
              <div className="m-2">
                 <p className="text-textMedium">Podcast Platform</p>
                 <p className="text-textSmall">
                    ReactJS, React Router, Redux, Google Firebase
                 </p>
              </div>
           </Link>
           <Link
              href={"https://react-personal-finance-tracker.web.app/"}
              className="mb-6  md:w-[400px] cursor-pointer transition-all hover:scale-[1.02]"
           >
              <div className="relative w-full h-[300px]">
                 <Image
                    src={finance}
                    alt="finance tracker"
                    layout="fill"
                    objectFit="cover"
                 />
              </div>
              <div className="m-2">
                 <p className="text-textMedium">Finance Tracker</p>
                 <p className="text-textSmall">
                    ReactJS, Redux, Google Firebase, ChartJS
                 </p>
              </div>
           </Link>
        </div>
     </div>
  );
}

export default Portfolio