"use client";

import React from "react";
import { use, useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { useRouter } from "next/navigation";

const PitchCreateDownloadForm = () => {
  const [targetAudience, settargetAudience] = useState("");
  const [marketSizeEstimates, setmarketSizeEstimates] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [revenueProjections, setRevenueProjections] = useState("");
  const [fundingRequirements, setFundingRequirements] = useState("");
  const [totalMembers, setTotalMembers] = useState("");
  const [companyGoal, setCompanyGoal] = useState("");
  const router = useRouter()

  const createAndDownloadPdf = async () => {
    const state = {
      targetAudience: targetAudience,
      marketSizeEstimates: marketSizeEstimates,
      productDescription: productDescription,
      revenueProjections: revenueProjections,
      fundingRequirements: fundingRequirements,
      totalMembers: totalMembers,
      companyGoal: companyGoal,
    };

    const res = await axios
      .post("http://127.0.0.1:5000/generate_pdf", state)
      .then(() =>
        axios.get("http://127.0.0.1:5000/fetch-pdf", { responseType: "blob" }),
      )
      .then(async (res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "pitch.pdf");
      })
      .finally(()=> {
        alert("PDF Downloading!")
        router.push("/dashboard")
      })
    };
  return (
    <div className="flex justify-center bg-gray-100 ">
      <div className=" mt-10 flex w-4/5 flex-col rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-3 text-2xl font-semibold text-black">
          One Page Pitch
        </h2>
        <h3 className="mb-3 font-light text-gray-400">
          Fill out the form below with the information related to your start-up
          idea
        </h3>
        <h2 className="mb-4 text-center text-2xl font-semibold text-rgb-green">
          Your Opportunity
        </h2>
        <label className="font-medium">Market Analysis</label>
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:gap-10 ">
          <input
            type="text"
            placeholder="Target Audience"
            name="targetAudience"
            value={targetAudience}
            onChange={(e) => settargetAudience(e.target.value)}
            className="w-full border-b bg-transparent py-3 font-normal text-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Market Size Estimates"
            name="marketSizeEstimates"
            value={marketSizeEstimates}
            onChange={(e) => setmarketSizeEstimates(e.target.value)}
            className="w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
          />
        </div>

        <label className="font-medium">Product Description</label>
        <input
          type="text"
          placeholder="Describe your Product"
          name="productDescription"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="mb-5 w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
        />
        <label className="font-medium">Financial Data</label>
        <div className="flex flex-col gap-3 md:flex-row md:gap-10">
          <input
            type="text"
            placeholder="Revenue Projections"
            name="revenueProjections"
            value={revenueProjections}
            onChange={(e) => setRevenueProjections(e.target.value)}
            className="w-full border-b  bg-transparent py-4 font-normal text-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Funding Requirements"
            name="fundingRequirements"
            value={fundingRequirements}
            onChange={(e) => setFundingRequirements(e.target.value)}
            className="w-full border-b  bg-transparent py-4 font-normal text-black focus:outline-none"
          />
        </div>

        <label className="mt-5 font-medium">Team Info</label>
        <input
          type="text"
          placeholder="Total Members"
          name="totalMembers"
          value={totalMembers}
          onChange={(e) => setTotalMembers(e.target.value)}
          className="mb-5 w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
        />

        <label className="font-medium">Goal</label>
        <input
          type="text"
          placeholder="Company Goal"
          name="companyGoal"
          value={companyGoal}
          onChange={(e) => setCompanyGoal(e.target.value)}
          className="w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
        />
        <button
          className="mx-auto mt-8 w-52 rounded-3xl bg-rgb-yellow px-4 py-4 font-bold tracking-wider text-rgb-green transition-colors duration-300 hover:bg-rgb-green hover:text-white"
          onClick={createAndDownloadPdf}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PitchCreateDownloadForm;
