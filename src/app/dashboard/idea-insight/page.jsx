"use client";

import { useState } from "react";
import axios from "axios";
import axiosInstancePython from "@/app/api/axiosPython";

const page = () => {
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");
  const [tips, setTips] = useState("none");
  const [result, setResult] = useState("");
  const [remarks, setRemarks] = useState([]);
  const [display, setDisplay] = useState(false)
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

  const submit = async (event) => {
    event.preventDefault();
    var remarks = [];
    var temp = [];
    try {
      // backend path
      const response = await axios.post("http://127.0.0.1:5000/idea-insight", {
        name: name,
        domain: domain,
        description: description,
      });
      console.log(response);
      if (response.status === 200){
        const response = await axios.post('http://127.0.0.1:5000/idea', {
          prompt: description
        },  {headers: {
          'Content-Type': 'application/json'
      }})
        setResult(response.data?.content)
      }

      console.log(typeof response.data);
      var res = JSON.parse(response.data);
      console.log(res);
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          var temp = res[key].toString().split(".,");
          remarks.push(temp[0]);
        }
      }
      setRemarks(remarks)
      setDisplay(true)
    } catch (error) {
      console.error("Failed to Generate: ", error.message);
      alert(error);
    }
  };

  const handleTips = (event) => {
    event.preventDefault();
    if (tips == "none") {
      setTips("block");
    } else {
      setTips("none");
    }
  };

  return (
    <>
      <form action="">
        <div className="ml-5 mt-5 flex w-1/2 flex-col rounded-lg bg-gray-100 p-4 shadow-md">
          <label className="font-semibold text-gray-700">Project Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Project Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />

          <label className="mt-4 font-semibold text-gray-700">Domain</label>
          <select
            id="dropdown"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select a Domain</option>
            <option value="option1">Artificial Intelligence</option>
            <option value="option2">Cyber Security</option>
            <option value="option3">Data Science</option>
            <option value="option4">Software Development</option>
            <option value="option5">Database Management</option>
            <option value="option6">Operating Systems</option>
            <option value="option7">Cloud Computing</option>
            <option value="option8">Computer Graphics</option>
          </select>

          <label className="mt-4 font-semibold text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter Project Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={10} // Set the desired number of rows
            cols={50} // Set the desired number of columns
            style={{ resize: "none" }}
            className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={submit}
            className=" mx-auto mt-5 w-40 justify-center rounded-3xl bg-rgb-yellow py-3 font-bold tracking-wide text-rgb-green transition-colors duration-300 hover:bg-rgb-green hover:text-white"
          >
            Submit
          </button>
          <button
            className="mx-auto mt-5 w-40 rounded-3xl bg-rgb-yellow px-4 py-3 font-bold text-rgb-green transition-colors duration-300 hover:bg-rgb-green hover:text-white"
            onClick={handleTips}
          >
            Tips
          </button>
        </div>
      </form>

      <div className="w-1/2">
        <div
          className={`absolute right-0 top-20 mt-10 rounded-lg bg-white p-4 shadow-md ${tips === "block" ? "block" : "hidden"}`}
          style={{ width: "40%" }}
        >
          {/* Tips content */}
          <h6 className="mb-4 text-center text-lg font-bold">
            Project Judging Criteria
          </h6>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-red-700">Problem Statement</h5>
              <hr className="my-2" />
              <ul className="list-disc pl-5">
                <li>Clearly state the problem your project solves.</li>
                <li>Provide evidence of the market gap or need.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-red-700">Solution Viability</h5>
              <hr className="my-2" />
              <ul className="list-disc pl-5">
                <li>Explain your innovative solution.</li>
                <li>Emphasize efficiency and cost-effectiveness.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-700">Team</h5>
              <hr className="my-2" />
              <ul className="list-disc pl-5">
                <li>Highlight co-founder chemistry and collaboration.</li>
                <li>Specify team member skills and collaboration duration.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-700">USP</h5>
              <hr className="my-2" />
              <ul className="list-disc pl-5">
                <li>Define your product's uniqueness in Pakistan.</li>
                <li>Describe the technology platform used.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-700">Viability</h5>
              <hr className="my-2" />
              <ul className="list-disc pl-5">
                <li>Explain how your product will thrive in the market.</li>
                <li>Highlight any competitive advantages.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-700">Financials</h5>
              <hr className="my-2" />
              <ul className="list-disc pl-5">
                <li>Detail revenue generation plans.</li>
                <li>Address sustainability post-incubation.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-700">Market Size</h5>
              <hr className="my-2" />
              <ul className="list-disc pl-5">
                <li>Demonstrate understanding of your target market.</li>
                <li>Provide key market size insights.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-700">Business Model</h5>
              <hr className="my-2" />
              <ul className="list-disc pl-5">
                <li>Present a structured business model.</li>
                <li>Address potential challenges and mitigations.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {display ? 
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
          className={`outcome mt-4 rounded px-4 py-2 ${result == 'success' ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}
        >
          <h3 className="font-bold">{result == "success" ? "Success" : "Failed"}</h3>
        </div>
      </div>
    </> : <></>}
    </>
  );
};

export default page;
