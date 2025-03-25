import React from "react";
import Buttons from "./Buttons";

const Cards = ({ src, cardTitle, cardDesc }) => {
  return (
    <div className="flex flex-col">
      <img  
        className=" scale-100 hover:scale-105 active:scale-105 w-16 h-16 mb-4 hover:ease-in-out duration-200 hover:transition-all"
        src={src}
        alt="card image"
        loading="lazy"
      />
      <h1 className="text-xl font-medium mb-4">
        {cardTitle.split(" ")[0]} <br /> {cardTitle.split(" ").slice(1).join(" ")}
      </h1>
      <p className="text-gray-500 mb-3">
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