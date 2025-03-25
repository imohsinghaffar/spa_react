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
  const testimonialsData = [
    {
      image: 'assets/face16.jpg',
      clientName: 'Sophia Armstrong',
      designation: 'Marketing Manager',
      desc: 'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
      divider : 'text-red-500 mt-3 mb-3 bg-red-500 w-20 h-[3px]'
    },
    {
      image: 'assets/face15.jpg',
      clientName: 'Cody Lambert',
      designation: 'Marketing Manager',
      desc: 'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
      divider : 'text-black bg-black mt-3 mb-3 w-20 h-[3px]'
    } ,
    {
      image: 'assets/face1.jpg',
      clientName: 'Tony Martinez',
      designation: 'Marketing Manager',
      desc: 'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
      divider : 'text-red-500 mt-3 mb-3 bg-red-500 w-20 h-[3px]'
    },
    {
      image: 'assets/face3.jpg',
      clientName: 'Sophia Armstrong',
      designation: 'Marketing Manager',
      desc: 'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
      divider : 'text-black bg-black mt-3 mb-3 w-20 h-[3px]'
    },
    {
      image: 'assets/face2.jpg',
      clientName: 'Tony Martinez',
      designation: 'Marketing Manager',
      desc: 'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
      divider : 'text-red-500 mt-3 mb-3 bg-red-500 w-20 h-[3px]'
    },
    {
      image: 'assets/face20.jpg',
      clientName: 'Cody Lambert',
      designation: 'Marketing Manager',
      desc: 'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
      divider : 'text-black bg-black mt-3 mb-3 w-20 h-[3px]'
    }
  ]
  return (
    <>
      <Navbar />

      <div className="pt-35 bg-[#f7f8fa] z-0 px-0" id="#">
        <div className="text-center">
          <h1 className=" px-20 text-4xl font-extrabold z-0 text-black">
            Search engine optimisation & <br /> Marketing.
          </h1>
          <p className="px-5 mt-2 text-medium font-medium text-gray-500">
            Simple is a simple template with a creative design that solves all
            your marketing and SEO queries.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 px-42">
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
          <div className="flex items-center justify-center px-8 lg:px-none">
            <img src="assets/Group171.svg" alt="image not found" />
          </div>
        </div>
      </div>

      {/*Cards Section*/}
      <CardsSection />
      <SecondHeroSection
        flex="lg:flex-row"
        img="assets/Group1.png"
        secHead="We Offer a Full Range of Digital Marketing Services!"
        display="hidden"
        desc="Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse."
        desc2="Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer"
      />
      <SecondHeroSection
        flex="lg:flex-row-reverse"
        img="assets/Group2.png"
        secHead="Leading Digital Agency for  Business Solution."
        desc="Power-packed with impressive features and well-optimized, this template is designed to provide the best performance in all circumstances."
        desc2="Its smart features make it a powerful stand-alone website building tool."
      />

      {/* CaseStudies */}
      <CaseStudies />

      {/* Testimonial */}
      <Testimonals testimonialsData = {testimonialsData} />

      {/* Contact Section */}
      <div className="flex bg-[url('/assets/gdpr.jpg')] bg-no-repeat bg-center mx-8 lg:px-40 mx- md:mx-15 flex-col items-center justify-center mt-20 py-40">
        <h1 className="text-2xl lg:text-3xl ">Do you have any projects?</h1>
        <h1 className="text-2xl lg:text-3xl mb-8">Contact us</h1>
        <button className="px-5 py-2 rounded-full text-red-500 xs:text-blue-600 hover:bg-red-500 hover:cursor-pointer transition-colors duration-300 hover:text-white bg-white border-solid border-2 border-red-500">
          Contact us
        </button>
      </div>

      {/* Footer */}
      <div className="flex flex-col mx-8 lg:px-42">
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-4 border-b-1 border-[#dee2e6] lg:pb-30 pb-15">
          <div className="flex flex-col mb-12 items-start lg:items-start">
            <Logo />  
            <p className="mt-3 text-[#6e6e6e]">mikayla_beer@feil.name</p>
            <p className="text-[#6e6e6e]">906-179-8309</p>
          </div>
          <div className="flex flex-col lg:items-start px-8 items-center sm:justify-center">
            <h1 className="text-xl font-medium">Get in Touch</h1>
            <p className="w-full text-center lg:text-start pr-10 mt-3 text-[#6e6e6e]">
              Don’t miss any updates of our new templates and extensions.!
            </p>
            <input
              className=" w-full lg:w-fit mt-3 lg:mb-4 mb-3 bg-[#f6f7fb] py-1 px-2"
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
          <div className="flex flex-col mt-12 lg:mt-0 items-center lg:items-start">
            <h1 className="text-xl font-medium">Our Guidelines</h1>
            <ul className="lg:text-start text-center ">
              <li>
                <a
                  id="#home"
                  href="#"
                  className="block pt-3 hover:text-[#FF0000] text-[#6e6e6e] transition-colors duration-300"
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
          <div className="flex flex-col lg:items-start items-center lg:mt-0 mt-14 lg:justify-start">
            <h1 className="text-xl font-medium">Our Address</h1>
            <p className="mt-3 text-[#6e6e6e] text-center lg:text-start">
              518 Schmeler Neck
              <br /> Bartlett. Illinois
            </p>
            <div className="flex  pt-4 flex-row text-[#6e6e6e] gap-2 text-start cursor-pointer">
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
        <div className="flex w-full pt-8 pt-4 pb-10 text-[#6e6e6e] lg:items-center items-center justify-center">
          <p className="text-center">
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