import React from "react";
import Buttons from "./Buttons";

const NavMenues = () => {
  return (
    <>
      <div
        className="items-center justify-end hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex flex-col  p-4 md:p-0 ml-0 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-32 2xl:ml-40 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row">
          <li>
            <a
              id="#home"
              className="block py-2 px-2 text-red-500 rounded-sm hover:text-[#FF0000] transition-colors duration-300"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              id="#about"
              className="block py-2 px-2 text-gray-900 rounded-sm hover:text-[#FF0000] transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              id="#blog"
              className="block py-2 px-2 text-gray-900 rounded-sm hover:text-[#FF0000] transition-colors duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              id="#testimonial"
              className="block py-2 px-2 text-gray-900 rounded-sm hover:text-[#FF0000] transition-colors duration-300"
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavMenues;