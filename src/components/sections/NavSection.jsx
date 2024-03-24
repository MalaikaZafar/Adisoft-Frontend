"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavSection = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="h-screen overflow-hidden bg-svg-background bg-cover">
        {" "}
        {/*Background Div*/}
        <div className="flex items-center justify-between md:px-10 lg:px-16">
          {" "}
          {/*Parent Div*/}
          <div className="ml-10 mt-5">
            {" "}
            {/*Image Div*/}
            <Image
              className="my-auto"
              src="/adisoft.svg"
              alt="Logo"
              width={150}
              height={150}
            />
          </div>
          <div className="mt-9 hidden text-lg md:block">
            {" "}
            {/*Links Div*/}
            <ul className="flex gap-10 font-light text-white">
              <li>
                <Link href="" className="hover:text-rgb-yellow">
                  Home
                </Link>
              </li>

              <li>
                <Link href="" className="hover:text-rgb-yellow">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="" className="hover:text-rgb-yellow">
                  Pricing
                </Link>
              </li>

              <li>
                <Link href="" className="hover:text-rgb-yellow">
                  Services
                </Link>
              </li>

              <li>
                <Link href="" className="hover:text-rgb-yellow">
                  Learn
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-7 mr-10 mt-8 flex">
            {" "}
            {/*Button Div*/}
            <Link href="/auth/sign-in">
              <button
                className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-3 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400"
                type="button"
              >
                Get Started
              </button>
            </Link>
            <button
              className="h-10 w-10 items-center justify-center rounded-md bg-transparent text-white focus:outline-none md:hidden"
              onClick={toggleMenu}
            >
              {showMenu ? "X" : "☰"}
            </button>
            {showMenu && (
              <div
                className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-rgb-green"
                onClick={() => setShowMenu(false)}
              >
                <ul className="gap-10 text-xl font-semibold leading-10 tracking-widest text-white">
                  <li>
                    <Link href="" className="hover:text-rgb-yellow">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link href="" className="hover:text-rgb-yellow">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link href="" className="hover:text-rgb-yellow">
                      Pricing
                    </Link>
                  </li>

                  <li>
                    <Link href="" className="hover:text-rgb-yellow">
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link href="" className="hover:text-rgb-yellow">
                      Learn
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 border-b border-white"> </div>{" "}
        {/*Bottom Border Div*/}
        <div className="flex h-screen flex-col items-center justify-center ">
          {" "}
          {/*Hero Section  Div*/}
          <h1 className="ml-2 mr-2  font-bold tracking-widest text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            MAKE YOUR IDEAS
            <span className="ml-2 text-rgb-yellow ">A REALITY</span>
          </h1>
          <p className="mt-5 text-center font-light tracking-widest text-white sm:text-lg md:text-xl">
            Pitch your ideas and become the entrepreneurs who <br /> plan, fund
            and grow their companies!
          </p>
          <div className="mt-8 flex flex-col gap-5 md:flex-row">
            {" "}
            {/*Button Div*/}
            <button
              className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-9 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400"
              type="button"
            >
              Pitch Now
            </button>
            <Link href="/auth/investor-sign-up">
              <button
                className="flex-shrink-0 rounded border-4 border-none bg-white px-10 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-amber-100"
                type="button"
              >
                Become an Investor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSection;
