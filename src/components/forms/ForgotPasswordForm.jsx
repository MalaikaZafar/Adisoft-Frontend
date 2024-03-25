'use client'

import axiosInstance from "@/app/api/axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ForgotPasswordForm = () => {

  const [email, setEmail] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { 
      email: email
    }

    try {
      const res = await axiosInstance.post("/auth/request", formData)
      sessionStorage.setItem("email", email)
      router.push('/auth/otp-code');
    } catch (error) {
      console.log("Incorrect Email"+error);
    }

  }

  return (
    <form className="mt-10 max-w-sm">
      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-extralight text-white">
          A link will be sent to your email to reset your password
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <button
          className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-14 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400"
          type="button"
          onClick={(e)=>handleSubmit(e)}
        >
          Send Recovery Link
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
