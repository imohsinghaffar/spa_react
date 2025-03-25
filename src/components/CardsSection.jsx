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
    <div className="flex flex-col items-center justify-center pt-20 pb-20 w-full px-8 lg:px-42">
      <div className="flex flex-col items-center gap-2 justify-center pb-10">
        <h1 className="text-4xl font-medium text-center">
          How does it works
        </h1>
        <p className="mx-5 lg:mx-0 text-center text-md  text-[#6e6e6e]">
          One theme that serves as an easy-to-use operational toolkit <br />
          that meets customer's needs.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-22 lg:gap-50">
        {cardDetails.map(({ img, title, desc }, index) => (
          <Cards key={index} src={img} cardTitle={title} cardDesc={desc} />
        ))}
      </div>
    </div>
  );
};

export default CardsSection;