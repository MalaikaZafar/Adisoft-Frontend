"use client";

import Image from "next/image";
import Link from "next/link";

import React from "react";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <div className="h-28 bg-rgb-green">
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
                <Link
                  href=""
                  className="border-b py-2 font-semibold tracking-widest text-rgb-yellow"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link href="" className="tracking-wider hover:text-rgb-yellow">
                  Pricing
                </Link>
              </li>

              <li>
                <Link href="" className="tracking-wider hover:text-rgb-yellow">
                  Learn
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-5 flex lg:flex-row lg:gap-5">
            {" "}
            {/*Image Div*/}
            <Image
              className="my-auto"
              src="/message.svg"
              alt="Message"
              width={50}
              height={70}
            />
            <Image
              className="my-auto"
              src="/notifications.svg"
              alt="Notifications"
              width={50}
              height={70}
            />
            <Image
              className="my-auto mr-4 cursor-pointer"
              src="/user.svg"
              alt="User"
              width={33}
              height={70}
              onClick={toggleModal}
            />
            {isOpen && (
              <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
                <div className="w-1/3 rounded-lg bg-white p-5">
                  {/* Modal header with cross button */}
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-center text-2xl font-semibold">
                      Profile Settings
                    </h2>
                    <button onClick={toggleModal} className="text-black">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  {/* Modal content */}
                  <div className="mb-4">
                    <label className="font-semibold text-black">Name</label>
                    <input
                      className="mb-3 mt-2 w-full rounded-md border border-black px-4 py-2"
                      type="text"
                    />
                    <button className="mx-auto mt-3 flex rounded-3xl bg-rgb-yellow px-4 py-2 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400">
                      Update Name
                    </button>
                  </div>
                  <div>
                    <div className="mb-4 flex">
                      <label className="py-2 font-semibold text-black">
                        Password
                      </label>
                      <p className="my-auto ml-3 text-sm">
                        (Click on the button below to reset password)
                      </p>
                    </div>
                    <Link href="/auth/update-password">
                      <button className="mx-auto mb-3 mt-3 flex rounded-3xl bg-rgb-yellow px-4 py-2 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400">
                        Update Password
                      </button>
                    </Link>
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="rounded-3xl bg-red-600 px-4 py-2 text-sm text-white"
                      onClick={toggleModal}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default DashboardLayout;
