import React from 'react';
import Buttons from './Buttons';

const SecondHeroSection = ({ flex, img, display, secHead, desc, desc2 }) => {
  return (
    <div className={`flex ${flex} flex-col px-8 lg:px-42 lg:items-center justify-center w-full gap-8`}>
      <div className="flex sm:mt-10 flex-col w-full lg:w-[50%]">
        <h1 className="text-3xl lg:pr-34 font-medium mb-8">{secHead}</h1>
        <p className="mb-8 lg:pr-40 text-[#6e6e6e]">{desc}</p>
        <p className="mb-8 lg:pr-40 text-md font-medium text-[#6e6e6e]">{desc2}</p>
        <div className={display}>
          <Buttons
            btnText="Readmore"
            bg="bg-[#1998ff]"
            textColor="text-white"
            borderWidth="hover:outline-1"
            textHoverColor="hover:text-[#3CA8FF]"
            paddingX = 'px-5'
            paddingY ='py-3'
          />
        </div>
      </div>

      <div className="flex lg:items-center sm:w-[100%] justify-center w-full lg:w-[50%]">
        <img src={img} alt="Hero Section" />
      </div>
    </div>
  );
};

export default SecondHeroSection;