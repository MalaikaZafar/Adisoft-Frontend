import React from "react";
import PricingCard from "@/components/sections/PricingCard";
import Link from "next/link";

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

const page = () => {
  return (
    <div className="h-full bg-cover">
      <Link href="/dashboard/payment">
        <div className="mt-5 flex flex-wrap justify-evenly">
          {" "}
          {/*Card Div*/}
          {cards.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default page;
