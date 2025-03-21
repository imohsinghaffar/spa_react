import React from "react";
import Cards from "./Cards";

const CardsSection = () => {
  const cardDetails = [
    {
      img: "assets/Group12.svg",
      title: "Speed Optimization",
      desc: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
    },
    {
      img: "assets/Group7.svg",
      title: "SEO and Backlinks",
      desc: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
    },
    {
      img: "assets/Group5.svg",
      title: "Content Marketing",
      desc: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-20 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="flex flex-col items-center gap-4 justify-center pb-10">
        <h1 className="text-3xl sm:text-4xl font-medium text-center">
          How does it work
        </h1>
        <p className="text-center text-md font-medium text-[#6e6e6e]">
          One theme that serves as an easy-to-use operational toolkit <br />
          that meets customer's needs.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-14 justify-between w-full max-w-6xl mx-auto">
        {cardDetails.map(({ img, title, desc }, index) => (
          <Cards key={index} src={img} cardTitle={title} cardDesc={desc} />
        ))}
      </div>
    </div>
  );
};

export default CardsSection;