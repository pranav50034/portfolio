import React from "react";

interface CardProps {
   date: string;
   title: string;
   description: string;
   university: string;
}
const Card = ({ date, title, description, university }: CardProps) => {
   return (
      <div className="bg-foreground p-10 flex flex-col gap-4 mb-3 rounded-md">
         <p className="text-xs font-bold">{date}</p>
         <p className="text-xl text-title font-extralight">{title}</p>
         <p className="text-light font-light mb-5">{description}</p>
         <p className="text-light font-light">{university}</p>
      </div>
   );
};

export default Card;
