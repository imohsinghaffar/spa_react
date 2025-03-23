import React from "react";
import Logo from "./Logo";
import NavMenues from "./NavMenues";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <>
        <nav
          className="lg:bg-[#f7f8fa] fixed  left-0 w-full z-40 pt-4 pb-2 transition-all"
          id="navbar"
        >
          <div className="flex flex-row items-center justify-between sm:mx-8 md:mx-16 xl:mx-42">
            <Logo />
            <NavMenues />
            
            <div className="flex md:order-2 space-x-3">
      <button data-collapse-toggle="navbar-fixed" type="button" className="flex text-end items-center justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <svg className=" text-black flex  w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
              <div className="sm:invisible md:invisible lg:visible">
          <Buttons
            btnText="Contact Us"
            bg="bg-[#1998ff]"
            textColor="text-white"
            borderWidth="hover:outline-1"
            textHoverColor="hover:text-[#3CA8FF]"
            paddingX ='px-5'
            paddingY ='py-3'
          />
          </div>
            </div>
          </div>
          
        </nav>
    </>
  );
};

export default Navbar;