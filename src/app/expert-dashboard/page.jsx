"use client";
import ExpertTable from "@/components/tables/ExpertTable";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

const page = () => {
  const [data, setData] = useState([
    {_id: 1, name: "Adisoft", url: "https://example.com"}
  ])

  const getReviewablePitches = async () => {
    try {
      const res = await axiosInstance.get("/user/all/reviewable/pitches");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching reviewable pitches:", error);
    }
  };

  useEffect(()=> {
    getReviewablePitches()
  }, [])
  
  return (
    <>
      <div className="mt-5 flex h-52 flex-col lg:flex-row ">
        <div className=" my-auto lg:w-1/6 lg:flex-row">
          <div className="ml-4 flex items-center gap-5">
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
          </div>
          <div className="mb-5 mt-5 border-r-2 border-rgb-green px-4 lg:mb-0 lg:mt-0 lg:border-r-0 "></div>
        </div>
        <div className="w-full px-4 lg:w-5/6">
          <div className="px-5 text-center lg:text-left">
            <h1 className="py-2 text-2xl font-medium tracking-widest text-black">
              Hi Expert, Welcome!
            </h1>
            <p className="">
              You have lots of pitches lined up for evaluation!
            </p>
          </div>
          <div className="mb-12 mt-5 flex flex-row items-center justify-between shadow-lg lg:flex-row lg:justify-around">
            <p className="my-auto px-5 py-3 text-lg font-medium tracking-wide text-black lg:text-xl">
              Pitches for evaluation -
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="mx-auto shadow-xl md:w-8/12">
          <h1 className="mt-20 px-3 text-2xl font-medium tracking-widest text-black md:mt-5">
            Pitches
          </h1>
          <div className="bg-slate-200">
            <ul className="mt-5 flex flex-wrap justify-around text-sm font-light md:gap-8">
              <li className="bg-rgb-green px-2 py-2 text-white">
                <Link href="" className="hover:text-rgb-yellow">
                  Available
                </Link>
              </li>

              <li className="py-2">
                <Link href="" className="text-gray-700 hover:text-rgb-yellow">
                  Reviewed
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between px-4 py-5 lg:flex-row">
            <h1 className="my-auto py-3 text-center font-medium lg:text-left">
              Active Pitches
            </h1>
            <div className="flex justify-center gap-3 lg:gap-7"></div>
          </div>
          <div className="border-grey-50 border-b border-t"></div>
          <div className="container mx-auto">
            {<ExpertTable data={data} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
