"use client";

import { FormEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/app/api/axios";

const ExpertSignUpForm = () => {
  const [error, setError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phno, setPhno] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [domain, setDomain] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
            name: name,
            email: email,
            password: password,
            phno: phno,
            linkedIn: linkedIn,
            domain: domain,
            type:"expert",
            verified: false,
      }
      const res = await axiosInstance.post("/auth/signup/expert", formData)
      if (res.status === 201){
        router.replace("/auth/sign-in")
      }

    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  };

  return (
    <form className="mt-10 max-w-sm" onSubmit={handleSubmit}>
      {error && <div className="">{error}</div>}

      <div className="border-b border-white py-3 ">
        <input
          className="mr-3 w-full border-b border-none bg-transparent py-2 font-light text-black focus:outline-none"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Image
          onClick={(e) => {
            e.preventDefault();
            setShowPassword(!showPassword);
          }}
          src="/passwordHide.svg"
          alt="Hide Password"
          width={25}
          height={20}
        />
      </div>

      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
          type="number"
          placeholder="Phone No"
          onChange={(e) => setPhno(e.target.value)}
        />
      </div>

      <div className="border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
          type="text"
          placeholder="LinkedIn Profile Link"
          onChange={(e) => setLinkedIn(e.target.value)}
        />
      </div>
      <div className="border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
          type="text"
          placeholder="Domain"
          onChange={(e) => setDomain(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center justify-center py-7">
        <button
          className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-14 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400"
          type="button"
          onClick={() => handleSubmit(event)}
        >
          Sign Up
        </button>
        <h3 className="pt-3 font-extralight text-white">Or Sign Up with</h3>
        <Image
          className="pt-4"
          src="/google.svg"
          alt="SignUp"
          width={50}
          height={50}
        />
        <h3 className="pt-2 font-extralight text-white">
          Already have an account?{" "}
          <Link href="/auth/sign-in">
            <span className="font-semibold">SIGN IN</span>
          </Link>
        </h3>
      </div>
    </form>
  );
};

export default ExpertSignUpForm;
