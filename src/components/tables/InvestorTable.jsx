import Link from "next/link";
import React, { useState } from "react";

const InvestorTable = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPitch, setSelectedPitch] = useState(null);

  const togglePopup = (pitch) => {
    setSelectedPitch(pitch);
    setShowPopup(!showPopup);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
            >
              PDF
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
            >
              View
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((item, index) => (
            <tr key={item._id}>
              <td className="whitespace-nowrap text-center">
                <a className="text-sm font-medium text-gray-600 hover:text-indigo-900">
                  {item._id}
                </a>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-center text-sm font-medium text-gray-900">
                  {item.title}
                </div>
              </td>
              <td className="whitespace-nowrap text-center">
                <a
                  // onClick={() => openPdf(item.pdf)}
                  onClick={() => togglePopup(item.title)}
                  className="cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-900"
                >
                  {item.pdf}
                </a>
              </td>
              <td className="whitespace-nowrap text-center">
                <button
                  className="mb-3 mt-4 rounded-3xl bg-rgb-green px-3 py-2 text-sm text-white"
                  onClick={() => togglePopup(item.title)}
                >
                  View Pitch
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          <div className="w-2/4 rounded-lg bg-white p-6">
            <h2 className="mb-4 text-lg font-bold">Non-Disclosure Agreement</h2>
            <p className="mb-4">
              Note that now you are going to view the complete pitch and startup
              idea of this entrepreneur thus you must agree to not disclose any
              information you get through the pitch.
            </p>
            <div className="flex justify-end">
              <button
                className="mr-2 rounded-lg bg-rgb-yellow px-4 py-2 text-gray-800"
                onClick={togglePopup}
              >
                Go back
              </button>
              <Link href="/investor-dashboard/agreement">
                <button
                  className="rounded-lg bg-rgb-green px-4 py-2 text-white"
                  onClick={togglePopup}
                >
                  Sign Non-Disclosure Agreement
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default InvestorTable;