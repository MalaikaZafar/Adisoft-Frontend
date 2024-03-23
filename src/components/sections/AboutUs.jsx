import React from "react";
import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  const cards = [
    {
      title: "Pitch to Prosper",
      description: "Present your startup ideas",
      imageSrc: "aboutUs1.svg",
    },
    {
      title: "Get Ideas Evaluated",
      description: "Let the experts and AI evaluate your ideas to success!",
      imageSrc: "aboutUs2.svg",
    },
    {
      title: "Meet Interested Investors",
      description: "Get interested Investors tol invest in your startup idea.",
      imageSrc: "aboutUs3.svg",
    },
  ];

  return (
    <>
      <div>  {/*Parent Div*/}
        <div className="my-12 flex flex-col items-center justify-center "> {/*Content Section Div*/}
          <h1 className="ml-2 mr-2 text-center text-lg font-semibold tracking-widest text-rgb-green md:text-2xl lg:text-3xl">
            Impress <span className="ml-2 text-rgb-yellow ">investors</span>{" "}
            with a one-page pitch of <br /> your plan designed to get you funded
          </h1>
          <p className="mb-10 mt-10 ml-3 text-center font-light leading-4 tracking-widest text-rgb-green sm:text-sm md:text-xl">
            AdiSoft provides you a one-page{" "}
            <span className="ml-2 text-rgb-yellow">pitch</span> template that
            focuses <br className="hidden sm:hidden md:inline" /> on what’s important about your startup
          </p>
        </div>
      </div>
      <div className="flex justify-evenly border-b border-t border-gray-200 flex-wrap"> {/*Card Div*/}
        {cards.map((card, index) => (
          <AboutUsCard key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default AboutUs;
