"use client"

import axiosInstancePython from "@/app/api/axiosPython";
import { useRouter } from "next/navigation";
import { useState } from "react";



const PredictSuccessForm = () => {
  const [fundingRound, setFundingRound] = useState(0)
  const [firstFundingYear, setFirstFundingYear] = useState(0)
  const [lastFundingYear, setLastFundingYear] = useState(0);
  const [fundingTotal, setFundingTotal] = useState(0);
  const [milesstones, setMilesstones] = useState(0);
  const [firstMilestoneYear, setFirstMilestoneYear] = useState(0);
  const [lastMilestoneYear, setLastMilestoneYear] = useState(0);
  const [relationships, setRelationships] = useState(0);
  const [roundA, setRoundA] = useState(0);
  const [roundB, setRoundB] = useState(0);
  const [roundC, setRoundC] = useState(0);
  const [roundD, setRoundD] = useState(0);
  const [selectedOption, setSelectedOption] = useState("")
  const [success, setSuccess] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter()

  const handleSubmit = async () => {

    var data = {
      "age_first_funding_year": Number(firstFundingYear),
      "age_last_funding_year": Number(lastFundingYear),
      "age_first_milestone_year": Number(firstMilestoneYear),
      "age_last_milestone_year": Number(lastMilestoneYear),
      "relationships": Number(relationships),
      "funding_rounds": Number(fundingRound),
      "funding_total_usd": Number(fundingTotal),
      "milestones": Number(milesstones),
      "has_roundA": Number(roundA),
      "has_roundB": Number(roundB),
      "has_roundC": Number(roundC),
      "has_roundD": Number(roundD),
      "avg_participants": Number(4.75),
      "category_code_advertising": 0,
      "category_code_analytics": 0,
      "category_code_automotive": 0,
      "category_code_biotech": 0,
      "category_code_cleantech": 0,
      "category_code_consulting": 0,
      "category_code_ecommerce": 0,
      "category_code_education": 0,
      "category_code_enterprise": 0,
      "category_code_fashion": 0,
      "category_code_finance": 0,
      "category_code_games_video": 0,
      "category_code_hardware": 0,
      "category_code_health": 0,
      "category_code_hospitality": 0,
      "category_code_manufacturing": 0,
      "category_code_medical": 0,
      "category_code_messaging": 0,
      "category_code_mobile": 0,
      "category_code_music": 0,
      "category_code_network_hosting": 0,
      "category_code_news": 0,
      "category_code_other": 0,
      "category_code_photo_video": 0,
      "category_code_public_relations": 0,
      "category_code_real_estate": 0,
      "category_code_search": 0,
      "category_code_security": 0,
      "category_code_semiconductor": 0,
      "category_code_social": 0,
      "category_code_software": 0,
      "category_code_sports": 0,
      "category_code_transportation": 0,
      "category_code_travel": 0,
      "category_code_web": 0
  }

  var selects = "category_code_"+selectedOption
  data[selects] = 1


  try {
    const res = await axiosInstancePython.post('success-prediction', data)
    .then((response)=> {
      const value = (Number(response.data.message)*100).toFixed(2)
      if (value < 0){
        setSuccess(0)
      }
      else{
        setSuccess(value);
      }
      setShowModal(true)
    }) 
  } catch (error) {
    console.log(error);
  }
  }

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="mt-10 flex w-4/5 flex-col rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold text-rgb-green">
          Predict your Business Success
        </h2>

        <div className="mb-5 flex flex-col gap-3 md:flex-row md:gap-10">
          <input
            type="number"
            placeholder="Funding Rounds"
            className="w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
            onChange={(e)=> setFundingRound(e.target.value)}
          />

          <input
            type="number"
            placeholder="First Funding Year"
            className="w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
            onChange={(e)=> setFirstFundingYear(e.target.value)}
          />

          <input
            type="number"
            placeholder="Last Funding Year"
            className="w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
            onChange={(e)=> setLastFundingYear(e.target.value)}
          />
        </div>
        <input
          type="number"
          placeholder="Funding Total"
          className="w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
          onChange={(e)=> setFundingTotal(e.target.value)}
        />

        <div className="mb-5 mt-5 flex flex-col gap-3 md:flex-row md:gap-10">
          <input
            type="number"
            placeholder="Milestones"
            className="w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
            onChange={(e)=> setMilesstones(e.target.value)}
          />

          <input
            type="number"
            placeholder="First Milestone Year"
            className="w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
            onChange={(e)=> setFirstMilestoneYear(e.target.value)}
          />

          <input
            type="number"
            placeholder="Last Milestone Year"
            className="w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
            onChange={(e)=> setLastMilestoneYear(e.target.value)}
          />
        </div>

        <input
          type="number"
          placeholder="Relationships"
          className="w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
          onChange={(e)=> setRelationships(e.target.value)}
        />

        <div className="flex w-full justify-center border-b py-8 text-gray-500">
          {/* Radio buttons */}
          <div className="border-l px-3"></div>
          <label className="ml-5 mr-5 font-medium">Has Round A</label>
          <div className="flex">
            <input type="radio" name="hasRoundA" value="yes" className="" onClick={()=>setRoundA(1)}/>
            <span className="ml-2">Yes</span>

            <input type="radio" className="ml-3" name="hasRoundA" value="no" />
            <span className="ml-2">No</span>
            <div className="border-r px-3"></div>
          </div>

          <label className="ml-5 mr-5 font-medium">Has Round B</label>
          <div className="flex">
            <input type="radio" name="hasRoundB" value="yes" onClick={()=>setRoundB(1)}/>
            <span className="ml-2">Yes</span>

            <input type="radio" className="ml-3" name="hasRoundB" value="no" />
            <span className="ml-2">No</span>
            <div className="border-r px-3"></div>
          </div>

          <label className="ml-5 mr-5 font-medium">Has Round C</label>
          <div className="flex">
            <input type="radio" name="hasRoundC" value="yes" onClick={()=>setRoundC(1)}/>
            <span className="ml-2">Yes</span>

            <input type="radio" className="ml-3" name="hasRoundC" value="no" />
            <span className="ml-2">No</span>
            <div className="border-r px-3"></div>
          </div>

          <label className="ml-5 mr-5 font-medium">Has Round D</label>
          <div className="flex">
            <input type="radio" name="hasRoundD" value="yes" onClick={()=>setRoundD(1)}/>
            <span className="ml-2">Yes</span>

            <input type="radio" className="ml-3" name="hasRoundD" value="no" />
            <span className="ml-2">No</span>
            <div className="border-r px-3"></div>
          </div>
        </div>

        {/* Dropdown menu */}

        <select className="mt-4 w-full border-b bg-transparent py-4 font-normal text-black focus:outline-none"
        onChange={(e)=> setSelectedOption(e.target.value)}
        >
          <option className="" value="">
            Select Category Code
          </option>

          <option value="advertising">Advertising</option>
          <option value="analytics">Analytics</option>
          <option value="automotive">Automotive</option>
          <option value="bioTech">Bio Tech</option>
          <option value="cleanTech">Clean Tech</option>
          <option value="consulting">Consulting</option>
          <option value="ecommerce">Ecommerce</option>
          <option value="education">Education</option>
          <option value="enterprise">Enterprise</option>
          <option value="fashion">Fashion</option>
          <option value="finance">Finance</option>
          <option value="videoGames">Video Games</option>
          <option value="hardware">Hardware</option>
          <option value="health">Health</option>
          <option value="hospitality">Hospitality</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="medical">Medical</option>
          <option value="messaging">Messaging</option>
          <option value="mobile">Mobile</option>
          <option value="music">Music</option>
          <option value="networkHosting">Network Hosting</option>
          <option value="news">News</option>
          <option value="photoVideo">Photo Video</option>
          <option value="publicRelations">Public Relations</option>
          <option value="realEstate">Real Estate</option>
          <option value="search">Search</option>
          <option value="security">Security</option>
          <option value="semiConductor">Semi Conductor</option>
          <option value="social">Social</option>
          <option value="software">Software</option>
          <option value="sports">Sports</option>
          <option value="transportation">Transportation</option>
          <option value="travel">Travel</option>
          <option value="web">Web</option>
          <option value="others">Others</option>
        </select>

        <button className="mx-auto mt-8 w-44 rounded-3xl bg-rgb-yellow px-3 py-3 font-bold tracking-wider text-rgb-green transition-colors duration-300 hover:bg-rgb-green hover:text-white"
        onClick={handleSubmit}
        >
          Predict
        </button>
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
                <h4 className="mx-auto mb-5 mt-5 px-4 text-2xl font-medium text-black">
                  Success Chances
                </h4>
                <p className="font-medium px-4"> {success}%</p>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false)
                      router.push('/dashboard')
                    }}
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-rgb-yellow px-4 py-2 text-base font-semibold text-rgb-green shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Ok
                  </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictSuccessForm;
