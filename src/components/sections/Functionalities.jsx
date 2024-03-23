import React from "react";
import FunctionCard from "./FunctionCard";

const cards = [
  {
    title: "One-Page Pitch Planner",
    description: "Impress investors and focus on what's important.",
    imageSrc: "pitch.svg",
  },
  {
    title: "Expert Guidance & Evaluation",
    description: "Plan confidently with guidance at every step.",
    imageSrc: "expert.svg",
  },
  {
    title: "AI-Powered Evaluation",
    description: "Strengthen your plan with AI suggested ideas.",
    imageSrc: "ai.svg",
  },
];

const Functionalities = () => {
  return (
    <>
      <div className="my-12 flex flex-col items-center justify-center "> {/*Content Section Div*/}
        <h1 className="ml-2 mr-2 text-center font-semibold tracking-widest text-rgb-green md:text-3xl lg:text-4xl">
          Our Services
        </h1>
      </div>

      <div className="flex flex-wrap justify-evenly">  {/*Card Div*/}
        {cards.map((card, index) => (
          <FunctionCard key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default Functionalities;
