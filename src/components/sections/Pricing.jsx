import React from "react";
import PricingCard from "./PricingCard";

const cards = [
  {
    title: "FREE",
    amount: "$0",
    services: ["AI-Assessment", "Success Prediction"],
  },
  {
    title: "PREMIUM",
    amount: "$20",
    services: [
      "AI-Assessment",
      "Expert Assessment",
      "Success Prediction",
      "Pitch Creation",
      "Investor Scout",
      "Learning Material",
      "Chatbot",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="bg-svg-background1 h-full bg-cover">
      <div className="mt-16 flex flex-wrap justify-evenly"> {/*Card Div*/}
        {cards.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
