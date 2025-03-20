import React from "react";
import Buttons from "./Buttons";

const CasestudiesCards = ({ img, title, bg, paragraph1, tags }) => {
  return (
    <div className="flex flex-col w-full group">
      <div
        className={`flex flex-col items-center relative justify-center hover:opacity-100 ${bg} hover:bg-[#022aae] h-60`}
      > 
        <img
          className="transition-opacity duration-500 group-hover:opacity-50"
          src={img}
          alt="Group95.svg"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:bg-[#022aae] group-hover:opacity-100 transition-opacity duration-900">
          <p className="text-white text-center text-lg font-semibold leading-6 mb-4">
            {title}
          </p>
          <Buttons
            btnText="Read More"
            bg="bg-white"
            textHoverColor="hover:text-white"
            bgHoverColor="hover:bg-red-500"
            borderWidth="hover:outline-0"
          />
        </div>
      </div>

      <div className="text-center flex flex-col items-center justify-center pt-4 group-hover:opacity-100 transition-opacity duration-500">
        <h1 className="text-lg font-medium group-hover:text-[#007bff]">{paragraph1}</h1>
        <p className="text-md font-medium gr text-[#6e6e6e] group-hover:text-[#007bff]">{tags}</p>
      </div>
    </div>
  );
};

export default CasestudiesCards;