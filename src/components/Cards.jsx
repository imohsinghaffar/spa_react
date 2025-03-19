import React from "react";
import Buttons from "./Buttons";

const Cards = ({ src, cardTitle, cardDesc }) => {
  return (
    <div className="flex flex-col w-full flex-wrap">
      <img className="w-16 h-16 mb-4" src={src} alt="card image" />
      <h1 className="text-xl font-medium mb-4 text-start">
        {cardTitle.split(" ")[0]} <br /> {cardTitle.split(" ").slice(1).join(" ")}
      </h1>
      <p className="text-start text-md text-gray-600 pr-30 mb-6">{cardDesc}</p>
      <div className="flex justify-start">
        <Buttons
          btnText="Read More"
          textColor="text-[#97a3be]"
          textHoverColor="hover:text-red-700"
          borderWidth='0'
        />
      </div>
    </div>
  );
};

export default Cards;