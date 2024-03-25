'use client'

import axiosInstance from "@/app/api/axios";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RecoverPasswordForm = () => {

  const router = useRouter()
  const [password, setPassword] = useState("")
  const [cnfmPassword, setCnfmPassword] = useState("")
  const passPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    setEmail(storedEmail);
    const storedOtp = sessionStorage.getItem("otp")
    setOtp(storedOtp)
  }, []);

  const handleSubmit = async () => {
    const formData = {
      email: email,
      password: password,
      otp: otp
    }
    if ( password !== cnfmPassword ){
      alert("Passowrds do not match!")
    }
    else if (!passPattern.test(password)){
      alert("Please enter a Strong Password")
    }
    else{
      try {
        const res = await axiosInstance.post('/auth/confirm', formData)
        if(res.data.message === "Password reset successful"){
          if (typeof window !== 'undefined') {
            sessionStorage.removeItem("email")
            sessionStorage.removeItem("otp")
          }
          alert("Password Changed Successfully!")
          router.push('/auth/sign-in')
        }
      } catch (error) {
        
      }
    }

  }
  return (
    <form className="mt-10 max-w-sm">
      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
          type="password"
          placeholder="Password"
          onChange={(e)=> setPassword(e.target.value)}
        />
        <Image
          src="/passwordHide.svg"
          alt="Hide Password"
          width={25}
          height={20}
        />
      </div>

      <div className="mt-5 flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light text-black focus:outline-none"
          type="password"
          placeholder="Confirm Password"
          onChange={(e)=> setCnfmPassword(e.target.value)}
        />
        <Image
          src="/passwordHide.svg"
          alt="Hide Password"
          width={25}
          height={20}
        />
      </div>

      <div className="flex items-center justify-center py-10">
        <button
          className="flex-shrink-0 rounded border-4 border-none  bg-rgb-yellow px-14 py-2.5 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400"
          type="button"
          onClick={handleSubmit}
        >
          Reset Password
        </button>
      </div>
    </form>
  );
};

export default RecoverPasswordForm;
