import React from "react";
import Logo from "./Logo";
import NavMenues from "./NavMenues";
import Buttons from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Navbar = () => {
  return (
    <>
        <nav
          className="bg-[#f7f8fa] px-6 lg:px-2 fixed w-full z-40 py-6 lg:py-4 transition-all"
          id="navbar"
        >
          <div className="flex flex-row items-center justify-between sm:mx-8 md:mx-16 xl:mx-42">
            <Logo />
            <NavMenues />
            <div className="invisible md:visible order-3">
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
            
            <div className="flex visible order-4 md:invisible md:order-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </div>
            
          </div>
          
        </nav>
    </>
  );
};

export default Navbar;