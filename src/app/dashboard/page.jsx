"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Table from "@/components/tables/Table";

const data = [
  { id: 1, name: "Example 1", url: "https://example.com/1" },
  { id: 2, name: "Example 2", url: "https://example.com/2" },
  { id: 3, name: "Example 3", url: "https://example.com/3" },
];

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [files, setFiles] = useState("");
  const [lastUpload, setLastUpload] = useState(Date.now());

  useEffect(() => {
    fetch("http://localhost:8080/pitch/files")
      .then((response) => response.json())
      .then((data) => setFiles(data))
      .catch((error) => console.error("Error fetching files:", error));
  }, [lastUpload]);

  const openPdf = (filename) => {
    const url = `http://localhost:8080/pitch/pdf/${filename}`;
    window.open(url, "_blank");
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    // const result = await axios.post(
    //   "http://localhost:8080/pitch/upload",
    //   formData,
    //   {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   }
    // );
    // setLastUpload(Date.now());
    // console.log(result);
    // if (result.data.status == "ok") {
    //   alert("Uploaded Successfully!!!");
    // }
  };

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
            <button
              className="mb-5 mt-5 flex-shrink-0 rounded-3xl border-4 border-none bg-rgb-yellow px-6 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400 lg:px-7"
              type="button"
              onClick={() => setShowModal(true)} // Show modal on button click
            >
              Upload Pitch
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <form className="formStyle" onSubmit={submitImage}>
                <h4 className="mx-auto mb-5 mt-5 px-4 text-2xl font-medium text-black">
                  Upload Pitch
                </h4>
                <div className="px-4 py-5 sm:px-6">
                  <div className="flex flex-col">
                    <label className="bg-transparent font-medium text-black">
                      {" "}
                      Title{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control border-b py-4"
                      placeholder="Enter Title"
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <br />
                  <input
                    type="file"
                    accept="application/pdf"
                    required
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-rgb-green px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        <div className="flex w-1/6 items-center gap-9 text-center md:flex-col md:gap-1">
          <Link href="">
            <button
              className="mb-3flex-shrink-0 rounded-xl border-none bg-transparent px-14 py-3 font-semibold text-rgb-green shadow-md transition duration-300 ease-in-out hover:bg-slate-200"
              type="button"
            >
              Validate Idea
            </button>
          </Link>

          <Link href="">
            <button
              className="mt-3 flex-shrink-0 rounded-xl border-none bg-transparent px-16 py-3 font-semibold text-rgb-green shadow-md transition duration-300 ease-in-out hover:bg-slate-200"
              type="button"
            >
              Create Pitch
            </button>
          </Link>

          <Link href="">
            <button
              className="mt-3 flex-shrink-0 rounded-xl border-none bg-transparent px-16 py-3 font-semibold text-rgb-green shadow-md transition duration-300 ease-in-out hover:bg-slate-200"
              type="button"
            >
              Predict Success
            </button>
          </Link>
        </div>

        <div className="mx-auto shadow-xl md:w-8/12">
          <h1 className="mt-20 px-3 text-2xl font-medium tracking-widest text-black md:mt-5">
            Pitches
          </h1>
          <div className="bg-slate-200">
            <ul className="mt-5 flex flex-wrap justify-around text-sm font-light md:gap-8">
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
                className="flex-shrink-0 rounded-3xl border-4 border-none bg-rgb-yellow px-6 py-2 text-sm font-light text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400 lg:px-5"
                type="button"
              >
                Edit Pitch
              </button>
              <button
                className="flex-shrink-0 rounded-3xl border-4 border-none bg-rgb-green px-6 py-2 text-sm font-light text-white transition duration-300 ease-in-out hover:bg-red-800 lg:px-5"
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
      </div>
    </>
  );
};

export default Page;
