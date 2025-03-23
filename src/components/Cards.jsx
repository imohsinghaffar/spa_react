import React from "react";
import Buttons from "./Buttons";

const Cards = ({ src, cardTitle, cardDesc }) => {
  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 sm:">
      <img  
        className=" scale-100 hover:scale-105 active:scale-105 w-16 h-16 mb-4 hover:ease-in-out duration-200 hover:transition-all"
        src={src}
        alt="card image"
        loading="lazy"
      />
      <h1 className="text-xl font-medium mb-4 text-start">
        {cardTitle.split(" ")[0]} <br /> {cardTitle.split(" ").slice(1).join(" ")}
      </h1>
      <p className="text-start text-md text-gray-600 pr-0 sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16 mb-6">
        {cardDesc}
      </p>
      <div className="text-start">
        <Buttons
          btnText="Readmore"
          textColor="text-[#97a3be]"  
          textHoverColor="hover:text-red-500"
          borderWidth="hover:outline-0"
        />
      </div>
    </div>
  );
};

export default Cards;