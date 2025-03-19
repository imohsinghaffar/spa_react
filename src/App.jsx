import React from "react";
import Navbar from "./components/Navbar";
import Buttons from "./components/Buttons";
import "./index.css";
import "./App.css";
import CardsSection from "./components/CardsSection";
import SecondHeroSection from "./components/SecondHeroSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto pt-42 bg-[#f7f8fa] z-0 max-w-full">
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
              btnText="Contact Us"
              bg="[#fec4af]"
              textColor="[#fc7341]"
              borderWidth="2"
              textHoverColor="[#fec4af]"
              borderColor="[#fec4af]"
            />
            <Buttons
              btnText="Learn More"
              bg="[#b7eddd]"
              textColor="[#5ed6b3]"
              borderWidth="2"
              textHoverColor="[#5ed6b3]"
              borderColor="[#5ed6b3]"
            />
          </div>
          <div className="flex items-center justify-center">
            <img src="assets/Group171.svg" alt="image not found" />
          </div>
        </div>
      </div>

      <CardsSection />
      <SecondHeroSection flex='row' img='assets/Group1.png' secHead = 'We Offer a Full Range <br /> of Digital Marketing Services!' display='hidden'/>
      <SecondHeroSection flex='row-reverse' img='assets/Group2.png'/>
    </>
  );
};

export default App;
