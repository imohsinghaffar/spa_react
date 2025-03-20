import React from "react";
import Buttons from "./Buttons";

const NavMenues = () => {
  return (
    <>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex flex-col items-end justify-around p-4 md:p-0  ml-62 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row  ">
          <li>
            <a
              id="#home"
              className="block py-2 px-2 text-red-500 rounded-sm "
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              id="#about"
              className="block py-2 px-2 text-gray-900 rounded-sm md:hover:text-[#FF0000]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              id="#blog"
              className="block py-2 px-2 text-gray-900 rounded-sm md:hover:text-[#FF0000]"
            >
              Blog
            </a>
          </li>

          <li>
            <a
              href="#"
            id="#testimonial"
              className="block py-2 px-2 text-gray-900 rounded-sm md:hover:text-[#FF0000]"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <div className="ml-32">
          <Buttons
            btnText="Contact Us"
            bg="bg-[#1998ff]"
            textColor="text-white"
            borderWidth="hover:outline-1"
            textHoverColor="hover:text-[#3CA8FF]"
          />
        </div>
      </div>
    </>
  );
};

export default NavMenues;
