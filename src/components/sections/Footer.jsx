import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex h-72 flex-col bg-rgb-green md:flex-row">
        {" "}
        {/*Parent Div*/}
        <div className="mx-auto my-auto flex">
          {" "}
          {/*List Div*/}
          <ul className="hidden text-lg font-thin leading-10 tracking-widest text-white lg:block">
            <li>About Us</li>
            <li>Pricing</li>
            <li>Services</li>
            <li>Learn</li>
          </ul>
        </div>
        <div className="mx-auto flex flex-col py-10 text-center leading-10 text-white lg:my-auto">
          {" "}
          {/*Signup Div*/}
          <h1 className="mb-7 text-2xl font-bold tracking-wider lg:text-3xl">
            Sign Up Now
          </h1>
          <p className="mb-7 text-xl font-thin md:text-2xl">
            Conquer the World!
          </p>
          <Link href="/auth/sign-up">
            <button
              className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-14 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400"
              type="button"
            >
              Get Started
            </button>
          </Link>
        </div>
        <div className="my-auto mr-10 hidden lg:block">
          {" "}
          {/*Logo Div*/}
          <Image
            className="mx-auto mb-5"
            src="/adisoft.svg"
            alt="Logo"
            width={150}
            height={150}
          />
          <p className="text-lg font-thin tracking-widest text-white">
            Tools to plan, fund and grow your business
          </p>
        </div>
      </div>
      <div className="border-white-50 border-b bg-gray-500"> </div>{" "}
      {/*Border Bottom Div*/}
      <div>
        {" "}
        {/*Footer Text Div*/}
        <p className="bg-rgb-green py-5 text-center text-sm font-light text-white md:text-lg">
          © 2023 Palo Alto Software. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
