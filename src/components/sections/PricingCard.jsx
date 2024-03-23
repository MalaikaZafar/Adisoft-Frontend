import React from "react";

const PricingCard = ({ title, amount, services }) => {
  return (
    <div className="border-grey-500 mb-12 mt-12 w-screen max-w-sm transform cursor-pointer overflow-hidden rounded border bg-rgb-green text-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="mb-2 mt-10 text-center text-4xl font-semibold tracking-widest text-rgb-yellow">
        {title}
      </div>

      <div>
        <p className="mb-11 ml-3 mr-3 mt-4 text-center text-3xl font-bold text-white">
          {amount}
        </p>

        <div className="border-b"></div>

        <ul className="mb-10 mt-5 text-lg font-light leading-10 tracking-wide text-white">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
