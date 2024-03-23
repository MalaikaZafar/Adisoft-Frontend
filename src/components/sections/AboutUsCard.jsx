import Image from "next/image";
import React from "react";

const AboutUsCard = ({ title, description, imageSrc }) => {
  return (
    <div className="mb-3 w-screen max-w-sm transform cursor-pointer overflow-hidden rounded text-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="mb-2 mt-10 text-center text-2xl font-semibold tracking-wide text-rgb-green">
        {title}
      </div>

      <div>
        <p className="mb-10 text-center text-rgb-green">{description}</p>
      </div>

      <div className="flex h-72 items-end justify-center">
        <Image
          className="mx-auto"
          src={imageSrc}
          alt={title}
          width={180}
          height={150}
        />
      </div>
    </div>
  );
};

export default AboutUsCard;
