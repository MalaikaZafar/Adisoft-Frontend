"use client";

import axiosInstance from "@/app/api/axios";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const OtpCodeForm = () => {
  const [email, setEmail] = useState("")
  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    setEmail(storedEmail);
  }, []);

  const router = useRouter();
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));
  const [values, setValues] = useState(Array(6).fill(''));
  const handleSubmit = async ()=> {
    var otpCode = ""

    for (let i = 0; i < values.length; i++){
      otpCode += values[i]
    }

    const formData = {
      email: email,
      otp: otpCode
    }

    if (typeof window !== 'undefined') {
      sessionStorage.setItem("otp", otpCode);
    }

    try {
      const res = await axiosInstance.post("/auth/password-reset", formData)

      if(res.status == 201){
        alert("Otp Verified")
        router.push('/auth/recover-password');
      }
    } catch (error) {
      console.log("Failed"+error);
    }
  }

  const handleChange = (index, event) => {
    const newValues = [...values];
    const inputValue = event.target.value;

    // Update the value only if it's empty or a single digit
    if (!inputValue || (inputValue.length === 1 && !isNaN(inputValue))) {
      newValues[index] = inputValue;
      setValues(newValues);
    }

    // Move to next input field if the current one is filled
    if (inputValue && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !values[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <form className="mt-10 max-w-sm">
      <div className="flex items-center justify-between">
        {values.map((value, index) => (
          <div key={index} className="flex items-center justify-center border-b border-white">
            <input
              ref={inputRefs[index]}
              className="flex w-10 border-none bg-transparent py-2 font-light text-black focus:outline-none"
              type="number"
              placeholder="0"
              value={value}
              onChange={(event) => handleChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              maxLength={1}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <h3 className="mb-10 font-extralight text-white">
          Didn't get the code? <span className="font-semibold">Resend</span>
        </h3>
        <button
          className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-14 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400"
          type="button"
          onClick={handleSubmit}
        >
          Recover Account
        </button>
      </div>
    </form>
  );
};
export default OtpCodeForm;
