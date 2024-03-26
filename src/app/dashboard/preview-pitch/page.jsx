import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center bg-gray-100 ">
      <div className=" mt-10 flex w-4/5 flex-col rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-3 text-center text-2xl font-semibold text-black">
          One Page Pitch
        </h2>

        <label className="font-medium">Market Analysis</label>
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:gap-10 ">
          <label className="w-full border-b bg-transparent py-3 font-normal text-gray-400 focus:outline-none">
            Here Goes Your Target Audience
          </label>
          <label className="w-full border-b bg-transparent py-4 font-normal text-gray-400 focus:outline-none">
            Here Goes your Market Size Estimates
          </label>
        </div>

        <label className="font-medium">Product Description</label>
        <label className="mb-5 w-full border-b bg-transparent py-4 font-normal text-gray-400 focus:outline-none">
          Here Goes your Product Description
        </label>
        <label className="font-medium">Financial Data</label>
        <div className="flex flex-col gap-3 md:flex-row md:gap-10">
          <label className="w-full border-b bg-transparent py-4 font-normal text-gray-400 focus:outline-none">
            Here Goes your Revenue Projections
          </label>

          <label className="w-full border-b bg-transparent py-4 font-normal text-gray-400 focus:outline-none">
            Here Goes your Funding Requirements
          </label>
        </div>

        <label className="mt-5 font-medium">Team Info</label>
        <label className="w-full border-b bg-transparent py-4 font-normal text-gray-400 focus:outline-none">
          Here Goes your Team Info
        </label>

        <label className="mt-5 font-medium">Goal</label>
        <label className="w-full border-b bg-transparent py-4  font-normal text-gray-400 focus:outline-none">
          Here Goes your Company's Goal
        </label>

        <Link href="/dashboard/create-download-pitch">
          <button className="mx-auto mt-8 flex w-40 justify-center rounded-3xl bg-rgb-yellow px-4 py-4 font-bold tracking-wider text-rgb-green transition-colors duration-300 hover:bg-rgb-green hover:text-white">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
