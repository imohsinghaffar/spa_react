import React from "react";
import Navbar from "./components/Navbar";
import Buttons from "./components/Buttons";
import "./index.css";
import "./App.css";
import CardsSection from "./components/CardsSection";
import SecondHeroSection from "./components/SecondHeroSection";
import CaseStudies from "./components/CaseStudies";
import Testimonals from "./components/Testimonals";

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
              paddingX = 'px-5'
              paddingY = 'py-3' 
            />
            <Buttons
              btnText="Learn More"
              bg="bg-[#b7eddd]"
              textColor="text-[#5ed6b3]"
              borderWidth="hover:outline-2"
              textHoverColor="hover:text-[#5ed6b3]"
              borderColor="border-[#5ed6b3]"
              paddingX = 'px-5'
              paddingY = 'py-3'
            />
          </div>
          <div className="flex items-center justify-center">
            <img src="assets/Group171.svg" alt="image not found" />
          </div>
        </div>
      </div>

      <CardsSection />
      <SecondHeroSection flex='flex-row' img='assets/Group1.png' secHead = 'We Offer a Full Range of Digital Marketing Services!' display='hidden'
      desc='Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.' desc2='Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer'/>
      <SecondHeroSection flex='flex-row-reverse' img='assets/Group2.png' secHead='Leading Digital Agency for  Business Solution.' desc='Power-packed with impressive features and well-optimized, this template is designed to provide the best performance in all circumstances.' 
      desc2 = 'Its smart features make it a powerful stand-alone website building tool.'/>
      <CaseStudies />
      <Testimonals />
    <div className="flex bg-[url(assets/gdpr.jpg)] bg-no-repeat bg-fit bg-center lg:px-40 md:mx-15 flex-col items-center justify-center py-40">
      <h1 className="text-3xl ">Do you have any projects?</h1>
      <h1 className="text-3xl mb-8" >Contact us</h1>
      <button className="px-5 py-2 rounded-full text-red-500 xs:text-blue-600 hover:bg-red-500 hover:cursor-pointer transition-colors duration-300 hover:text-white bg-white border-solid border-2 border-red-500">Contact us</button>
    </div>

    </>

  );
};

export default App;
