"use client";

import { FormEvent, useEffect, useState } from "react";
import axiosInstance from "@/app/api/axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const SignUpForm = () => {
  const [error, setError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfmPassword, setCnfmPassword] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    const pattern = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/)
    const passPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)

    if(!pattern.test(email)){
      //handle wrong email message
    }
    else if (!pattern.test(password)){
      //handle wrong password message
    }
    else if (password !== cnfmPassword){
      //handle password mismatch
    }
    else {
      const formData = {
        name: fname+" "+lname,
        email: email,
        password: password,
        type: "user",
        otp: "",
        varified: false
      }

      try{
        const response = await axiosInstance.post(`/auth/signup`, userData)

        console.log(response.data);
        // require an account verification otp screen
      }
      catch(error){
          console.error("Sign Up Failed: ", error.message);
      }
    }
  };

  return (
    <form className="mt-10 max-w-sm" onSubmit={handleSubmit}>
      {error && <div className="">{error}</div>}
      <div className="flex gap-5 text-white">
        <div className="border-b border-white py-3 ">
          <input
            className="mr-3 w-full border-b border-none bg-transparent py-2 font-light text-black focus:outline-none"
            type="text"
            placeholder="First Name"
            onChange={(e)=> setFname(e.target.value)}
          />
        </div>

        <div className="border-b border-white py-3">
          <input
            className="mr-3 w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
            type="text"
            placeholder="Last Name"
            onChange={(e)=> setLname(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
          type="text"
          placeholder="Email"
          onChange={(e)=> setEmail(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e)=> setPassword(e.target.value)}
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
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          onChange={(e)=> setCnfmPassword(e.target.value)}
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

      <div className="flex flex-col items-center justify-center py-10">
        <button
          className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-14 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400"
          type="button"
          onClick={() => signUp()}
        >
          Sign Up
        </button>
        <h3 className="pt-4 font-extralight text-white">Or Sign Up with</h3>
        <Image
          className="pt-4"
          src="/google.svg"
          alt="SignUp"
          width={50}
          height={50}
        />
        <h3 className="pt-4 font-extralight text-white">
          Already have an account?{" "}
          <Link href="/auth/sign-in">
            <span className="font-semibold">SIGN IN</span>{" "}
          </Link>
        </h3>
      </div>
    </form>
  );
};

export default SignUpForm;
