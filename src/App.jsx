import React from "react";
import Navbar from "./components/Navbar";
import Buttons from "./components/Buttons";
import "./index.css";
import "./App.css";
import CardsSection from "./components/CardsSection";
import SecondHeroSection from "./components/SecondHeroSection";
import CaseStudies from "./components/CaseStudies";
import Testimonals from "./components/Testimonals";
import Logo from "./components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="mx-auto pt-42 bg-[#f7f8fa] z-0 max-w-full" id="#">
        <div className="text-center">
          <h1 className="text-5xl font-semibold z-0 text-gray-900">
            Search engine optimisation & <br /> Marketing.
          </h1>
          <p className="mt-4 text-xl font-lg  text-gray-500">
            Simple is a simple template with a creative design that solves all
            your marketing and SEO queries.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Buttons
              btnText="Get Started"
              bg="bg-[#fec4af]"
              textColor="text-[#fc7341]"
              borderWidth="hover:outline-2"
              textHoverColor="hover:text-[#fc7341]"
              borderColor="text-[#fec4af]"
              paddingX="px-5"
              paddingY="py-3"
            />
            <Buttons
              btnText="Learn More"
              bg="bg-[#b7eddd]"
              textColor="text-[#5ed6b3]"
              borderWidth="hover:outline-2"
              textHoverColor="hover:text-[#5ed6b3]"
              borderColor="border-[#5ed6b3]"
              paddingX="px-5"
              paddingY="py-3"
            />
          </div>
          <div className="flex items-center justify-center">
            <img src="assets/Group171.svg" alt="image not found" />
          </div>
        </div>
      </div>

      {/*Cards Section*/}
      <CardsSection />
      <SecondHeroSection
        flex="flex-row"
        img="assets/Group1.png"
        secHead="We Offer a Full Range of Digital Marketing Services!"
        display="hidden"
        desc="Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse."
        desc2="Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer"
      />
      <SecondHeroSection
        flex="flex-row-reverse"
        img="assets/Group2.png"
        secHead="Leading Digital Agency for  Business Solution."
        desc="Power-packed with impressive features and well-optimized, this template is designed to provide the best performance in all circumstances."
        desc2="Its smart features make it a powerful stand-alone website building tool."
      />

      {/* CaseStudies */}
      <CaseStudies />

      {/* Testimonial */}
      <Testimonals />

      {/* Contact Section */}
      <div className="flex bg-[url('./assets/gdpr.jpg')] bg-no-repeat bg-center lg:px-40 md:mx-15 flex-col items-center justify-center py-40">
        <h1 className="text-3xl ">Do you have any projects?</h1>
        <h1 className="text-3xl mb-8">Contact us</h1>
        <button className="px-5 py-2 rounded-full text-red-500 xs:text-blue-600 hover:bg-red-500 hover:cursor-pointer transition-colors duration-300 hover:text-white bg-white border-solid border-2 border-red-500">
          Contact us
        </button>
      </div>

      {/* Footer */}
      <div className="flex flex-col  px-42">
        <div className="grid grid-cols-4 border-b-1 border-[#dee2e6] text-center pb-30">
          <div className="flex flex-col items-start justify-start">
            <Logo />
            <p className="mt-3 text-[#6e6e6e]">mikayla_beer@feil.name</p>
            <p className="text-[#6e6e6e]">906-179-8309</p>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-medium">Get in Touch</h1>
            <p className="text-start pr-12 mt-3 text-[#6e6e6e]">
              Don’t miss any updates of our new templates and extensions.!
            </p>
            <input
              className="mt-3 mb-4 bg-[#f6f7fb] py-1 px-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email id"
            />
            <Buttons
              btnText="Subscribe"
              bg="bg-black"
              textColor="text-white"
              borderWidth="hover:outline-1"
              textHoverColor="hover:text-black"
              borderColor="border-black"
              paddingX="px-5"
              paddingY="py-3"
            />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-medium">Our Guidelines</h1>
            <ul className="text-start">
              <li>
                <a
                  id="#home"
                  href="#"
                  className="block pt-3 text-[#6e6e6e]ver:text-[#FF0000] transition-colors duration-300"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  id="#about"
                  className="block pt-3 text-[#6e6e6e] rounded-sm hover:text-[#FF0000] transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  id="#blog"
                  className="block pt-3 text-[#6e6e6e] rounded-sm hover:text-[#FF0000] transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  id="#testimonial"
                  className="block pt-3 text-[#6e6e6e] rounded-sm hover:text-[#FF0000] transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-xl font-medium">Our Address</h1>
            <p className="mt-3 text-[#6e6e6e] text-start">
              518 Schmeler Neck
              <br /> Bartlett. Illinois
            </p>
            <div className="flex pt-4 flex-row text-[#6e6e6e] gap-2 text-start cursor-pointer">
              <div className="text-xs  transition-all duration-800 ease-in-out  hover:bg-[#6e6e6e] hover:text-white  outline-1 outline-[#9797973d] px-3 py-2  rounded-full">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="text-xs  transition-all duration-800 ease-in-out  hover:bg-[#6e6e6e] hover:text-white  outline-1 outline-[#9797973d] px-3 py-2  rounded-full">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="text-xs  transition-all duration-800 ease-in-out  hover:bg-[#6e6e6e] hover:text-white  outline-1 outline-[#9797973d] px-3 py-2  rounded-full">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="text-xs  transition-all duration-800 ease-in-out  hover:bg-[#6e6e6e] hover:text-white  outline-1 outline-[#9797973d] px-3 py-2  rounded-full">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full pt-8 pb-10 text-[#6e6e6e] items-center justify-center">
          <p>
            Copyright © 2019{" "}
            <a
              href="#"
              id="#testimonial"
              className="pt-3 text-[#FF0000] rounded-sm hover:text-[#000637] transition-colors duration-300"
            >
              Bootstrapdash.
            </a>{" "}
            All rights reserved. Distributed by{" "}
            <a
              href="#"
              id="#testimonial"
              className="pt-3 text-[#FF0000] rounded-sm hover:text-[#000637] transition-colors duration-300"
            >
              ThemeWagon
            </a>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
