"use client";

import { useState } from "react";

const page = () => {
  const [result, setResult] = useState("");
  const [remarks, setRemarks] = useState([]);
  const [headings, setHeading] = useState([
    "Problem Assessment",
    "Solution Viability",
    "Team",
    "USP",
    "Viability",
    "Financials",
    "Market Size",
    "Business Model",
  ]);

  return (
    <>
      <div className="mt-4 flex flex-col">
        <div className="result_header py-4 text-center">
          <h1 className="text-2xl font-bold tracking-wider">Result</h1>
        </div>
        <div className="">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="w-1/2 border border-gray-300 px-4 py-2">
                  Heading
                </th>
                <th className="w-2/3 border border-gray-300 px-4 py-2">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody>
              {headings.map((heading, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border border-gray-300 px-8 py-2">
                    {heading}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {remarks[index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className={`outcome mt-4 rounded px-4 py-2 ${result >= 28 ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}
        >
          <h3 className="font-bold">{result >= 28 ? "Success" : "Failed"}</h3>
        </div>
      </div>
    </>
  );
};

export default page;
