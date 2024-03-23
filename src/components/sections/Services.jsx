import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const cards = [
    {
      title: "What is your best target market?",
      description:
        "AdiSoft’s evaluation helps you discover who is most likely to be excited by your product or service",
      imageSrc: "questionMark.svg",
    },
    {
      title: "What is the demand for your business?",
      description:
        "AdiSoft’s evaluation helps you figure out if you’ll have enough customers to sustain your business",
      imageSrc: "questionMark.svg",
    },
    {
      title: "Will your idea generate a profit?",
      description:
        "AdiSoft’s evaluation helps you get an idea of what your expenses and revenue would look like",
      imageSrc: "questionMark.svg",
    },
  ];

  return (
    <>
      <div> {/*Parent Div*/}
        <div className="flex flex-col my-16 items-center justify-center "> {/*Content Section Div*/}
          <h1 className="ml-2 mr-2 text-center text-lg font-semibold tracking-widest text-rgb-green md:text-2xl lg:text-3xl">
          You have a <span className="ml-2 text-rgb-yellow ">great idea,</span> but you’re not sure
            with a one-page pitch of <br /> how it will work...
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly"> {/*Card Div*/}
        {cards.map((card, index) => (
          <ServicesCard key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default Services;
