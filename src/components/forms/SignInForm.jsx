"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axiosInstance from "@/app/api/axios";

import Image from "next/image";

const SignInForm = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      console.log(res.data.token);
      if (res.status === 201) {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("email", email)
        console.log("login success");
        const response = await axiosInstance.post("/user/type", {} , {headers: {
          "Authorization" : `Bearer ${res.data.token}`
        }})
        console.log(response.data);
        if (response.data.type == "user" && response.data.verified){
          router.push("/dashboard");
        }
        else if (response.data.type == "user" && !response.data.verified){
          alert("You are not Verified!")
          router.push("/auth/otp-code-signup")
        }
        else if (response.data.type == "expert" && response.data.verified){
          router.push("/expert-dashboard");
        }
        else if (response.data.type == "expert" && !response.data.verified){
          alert("You are not Verified! Wait for admin to verify you.")
        }
        else if (response.data.type == "investor" && response.data.verified){
          router.push("/investor-dashboard");
        }
        else if (response.data.type == "investor" && !response.data.verified){
          alert("You are not Verified! Wait for admin to verify you.")
        }
      }
    } catch (err) {
      alert("Invalid Email or Password!")
      console.log("Invalid Email or Password" + err);
    }
  };

  return (
    <form className="mt-10 max-w-sm" onSubmit={handleSubmit}>
      {error && <div className="">{error}</div>}
      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-5 flex items-center justify-evenly border-b border-white py-3">
        <input
          className="w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
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

      <div className="mt-5 flex justify-between">
        <div className="flex gap-2">
          <Image src="/checkBox.svg" alt="SignIn" width={20} height={100} />
          <h3 className="font-extralight text-white">Remember Me</h3>
        </div>
        <div>
          <Link href="/auth/forgot-password">
            {" "}
            <h3 className="font-extralight text-white">
              Forgot Password?
            </h3>{" "}
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <button
          className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-14 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          Sign In
        </button>
        <h3 className="pt-4 text-lg font-bold text-white">OR </h3>
        {/* <Image
          onClick={(e) => {
            e.preventDefault();
            signIn("google");
          }}
          className="pt-4"
          src="/google.svg"
          alt="SignIn"
          width={50}
          height={50}
        /> */}

        <div className="mt-5 flex gap-5">
          <Link href="/auth/investor-sign-up">
            <button
              className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-4 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400"
              type="button"
            >
              Become an Investor
            </button>
          </Link>

          <Link href="/auth/expert-sign-up">
            <button
              className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-4 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400"
              type="button"
            >
              Become an Expert
            </button>
          </Link>
        </div>

        <h3 className="pt-4 font-extralight text-white">
          Doesn't have an account?{" "}
          <Link href="/auth/sign-up">
            {" "}
            <span className="font-semibold">SIGN UP</span>{" "}
          </Link>
        </h3>
      </div>
    </form>
  );
};

export default SignInForm;
