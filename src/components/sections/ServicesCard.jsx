import Image from "next/image";
import React from "react";

const ServicesCard = ({ title, description, imageSrc }) => {
  return (
    <div className="border-grey-500 mb-3 w-screen max-w-sm transform cursor-pointer overflow-hidden rounded border text-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="mt-10">
        <Image
          className="mx-auto"
          src={imageSrc}
          alt={title}
          width={100}
          height={100}
        />
      </div>
      <div className="mb-2 mt-10 text-center text-xl font-semibold tracking-widest text-rgb-green">
        {title}
      </div>

      <div>
        <p className="mb-11 ml-3 mr-3 mt-4 text-center text-rgb-green">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
