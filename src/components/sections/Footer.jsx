import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
    <div className="h-72 bg-rgb-green flex flex-col md:flex-row">  {/*Parent Div*/}
      <div className="flex my-auto mx-auto">   {/*List Div*/}
        <ul className="text-lg font-thin leading-10 tracking-widest text-white hidden lg:block">
          <li>About Us</li>
          <li>Pricing</li>
          <li>Services</li>
          <li>Learn</li>
        </ul>
      </div>
      <div className="text-center flex flex-col py-10 leading-10 mx-auto text-white lg:my-auto"> {/*Signup Div*/}
        <h1 className="tracking-wider font-bold text-2xl lg:text-3xl mb-7">Sign Up Now</h1>
        <p className="font-thin text-xl md:text-2xl mb-7">Conquer the World!</p>
        <button
          className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-4 py-2.5 text-sm text-rgb-green"
          type="button"
        >
          Get Started
        </button>
      </div>
      <div className="my-auto mr-10 hidden lg:block"> {/*Logo Div*/}
      <Image
              className="mx-auto mb-5"
              src="/adisoft.svg"
              alt="Logo"
              width={150}
              height={150}
            />
            <p className="text-lg font-thin tracking-widest text-white">Tools to plan, fund and grow your business</p>
            
      </div>
      </div>
      <div className="border-b border-white-50 bg-gray-500"> </div> {/*Border Bottom Div*/}
      <div> {/*Footer Text Div*/}
        <p className="bg-rgb-green text-white font-light text-center text-sm md:text-lg py-5">© 2023 Palo Alto Software. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
