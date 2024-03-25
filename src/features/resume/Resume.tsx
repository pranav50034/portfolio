import Card from "@/common/card/Card";
import React from "react";

const Resume = () => {
   return (
      <div className="flex-grow flex-1 px-4">
         <div className="text-3xl font-extralight pb-[70px] pt-[110px] text-center">
            My <strong className="font-extrabold">Resume</strong>
         </div>
         <div className="pb-[50px]">
            <p className="text-2xl font-extralight">Education</p>
         </div>
         <>
            <Card
               title="Bachelors of Computer Applications"
               description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                "
               date="April 2019 - April 2023"
               university="Savitribai Phule University, Pune"
            />
            <Card
               title="Higher Secondary"
               description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                "
               date="April 2018 - April 2019"
               university="Maharashtra State Board of Higher Secondary Education"
            />
            <Card
               title="Secondary"
               description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                "
               date="April 2016 - April 2017"
               university="Central Board of Secondary Education"
            />
         </>
      </div>
   );
};

export default Resume;
