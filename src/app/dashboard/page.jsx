import Table from "@/components/tables/Table";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  { id: 1, name: "Example 1", url: "https://example.com/1" },
  { id: 2, name: "Example 2", url: "https://example.com/2" },
  { id: 3, name: "Example 3", url: "https://example.com/3" },
];

const page = () => {
  return (
    <>
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
              className="my-auto mr-4"
              src="/user.svg"
              alt="User"
              width={33}
              height={70}
            />
          </div>
        </div>
      </div>
      <div className="mt-5 flex h-52 flex-col lg:flex-row">
        {" "}
        {/*Parent Div 2*/}
        <div className="ml-4 flex h-52 w-full items-center gap-5 lg:w-1/6 lg:flex-row">
          {" "}
          {/*Left Div*/}
          <Image
            className=""
            src="/user.svg"
            alt="Message"
            width={60}
            height={70}
          />
          <h1 className="my-auto text-xl font-semibold tracking-widest text-black">
            Welcome!
          </h1>
          <div className="mb-5 mt-5 border-r-2 border-rgb-green px-4 lg:mb-0 lg:mt-0 lg:border-r-0 "></div>
        </div>
        <div className="w-full px-4 lg:w-5/6">
          {" "}
          {/*Right Div*/}
          <div className="px-5 text-center lg:text-left">
            <h1 className="py-4 text-2xl font-medium tracking-widest text-black">
              Hi, Welcome!
            </h1>
            <p className="">
              AdiSoft is all set to help you grow your startup!
            </p>
          </div>
          <div className="mb-12 mt-5 flex flex-row items-center justify-between shadow-lg lg:flex-row lg:justify-around">
            <p className="my-auto px-5 text-lg font-medium tracking-wide text-black lg:text-xl">
              Pitches made -
            </p>
            <Link href="">
              <button
                className="mb-5 mt-5 flex-shrink-0 rounded-xl border-4 border-none bg-rgb-yellow px-6 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400 lg:px-7 lg:text-base"
                type="button"
              >
                Initiate a Pitch
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto shadow-xl md:w-2/4 ">
        {" "}
        {/*Center Div*/}
        <h1 className="mt-20 px-3 text-2xl font-medium tracking-widest text-black md:mt-5">
          Pitches
        </h1>
        <div className="bg-slate-200">
          <ul className="mt-5 flex flex-wrap justify-around text-sm font-light">
            <li className="bg-rgb-green px-2 py-2 text-white">
              <Link href="" className="hover:text-rgb-yellow">
                Active
              </Link>
            </li>

            <li className="py-2">
              <Link href="" className="text-gray-700 hover:text-rgb-yellow">
                To Modify
              </Link>
            </li>

            <li className="py-2">
              <Link href="" className="text-gray-700 hover:text-rgb-yellow">
                Approved
              </Link>
            </li>

            <li className="py-2">
              <Link href="" className="text-gray-700 hover:text-rgb-yellow">
                Disapproved
              </Link>
            </li>

            <li className="py-2">
              <Link href="" className="text-gray-700 hover:text-rgb-yellow">
                Drafts
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between px-4 py-5 lg:flex-row">
          <h1 className="my-auto py-3 text-center font-medium lg:text-left">
            Active Pitches
          </h1>
          <div className="flex justify-center gap-3 lg:gap-7">
            <button
              className="flex-shrink-0 rounded-3xl border-4 border-none bg-rgb-yellow px-6 py-2 text-sm font-light text-rgb-green  transition duration-300 ease-in-out hover:bg-orange-400 lg:px-5"
              type="button"
            >
              Edit Pitch
            </button>
            <button
              className="flex-shrink-0 rounded-3xl border-4 border-none bg-rgb-green px-6 py-2 text-sm font-light text-white  transition duration-300 ease-in-out hover:bg-red-800 lg:px-5"
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="border-grey-50 border-b border-t"></div>
        <div className="container mx-auto">
          <Table data={data} />
        </div>
      </div>
    </>
  );
};

export default page;
