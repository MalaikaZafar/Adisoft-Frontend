"use client";

import { FormEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BiLogoGoogle } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import Image from "next/image";

const SignUpForm = () => {
  const [error, setError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const signupResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/signup`,
        {
          firstName: formData.get("First Name"),
          lastName: formData.get("Last Name"),
          email: formData.get("email"),
          password: formData.get("password"),
          confirmPassword: formData.get("ConfirmPassword"),
        },
      );

      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

      if (res?.ok) return router.push("/");
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
      <div className="flex gap-5 text-white">
        <div className="border-b border-white py-3 ">
          <input
            className="mr-3 w-full border-b border-none bg-transparent py-2 font-light focus:outline-none"
            type="text"
            placeholder="First Name"
          />
        </div>

        <div className="border-b border-white py-3">
          <input
            className="mr-3 w-full border-none bg-transparent py-2 font-light focus:outline-none"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>

      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light focus:outline-none"
          type="text"
          placeholder="Email"
        />
      </div>

      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light focus:outline-none"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
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
          className="mr-3 w-full border-none bg-transparent py-2 font-light focus:outline-none"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
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
          className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-4 py-2.5 text-sm text-rgb-green"
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
          <span className="font-semibold">SIGN IN</span>
        </h3>
      </div>
    </form>
  );
};

export default SignUpForm;
