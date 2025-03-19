import React from "react";
import Logo from "./Logo";
import NavMenues from "./NavMenues";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <>
      <header className="">
        <nav
          className="bg-[#f7f8fa] white fixed top-0 left-0 w-full z-40 pt-4  pb-2 transition-all"
          id="navbar"
        >
          <div className="flex flex-row items-center justify-around mx-34">
            <Logo />
            <NavMenues />
            <div className="flex md:order-2 space-x-3 md:space-x-2 ">
              <button
                data-collapse-toggle="navbar-fixed"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only ">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
