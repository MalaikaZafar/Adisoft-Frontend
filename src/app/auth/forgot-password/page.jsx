import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex h-screen bg-rgb-green">
      <div className="flex w-1/2 items-center justify-center">
        <div>
          <Image
            className="mx-auto mb-5"
            src="/adisoft.svg"
            alt="Logo"
            width={150}
            height={150}
          />
          <h1 className="flex justify-center text-3xl font-semibold tracking-[0.2rem] text-white">
            Forgot Your Password?
          </h1>
          <br />
          <h3 className="flex justify-center text-lg font-light leading-8 tracking-widest text-white">
            We have your back!
          </h3>
          <ForgotPasswordForm />
        </div>
      </div>
      <div className="relative flex w-1/2 items-end bg-svg-background bg-cover bg-center">
        <Image
          className="absolute -left-10 bottom-0"
          src="/forgotPassword.svg"
          alt="ForgotPassword"
          width={500}
          height={200}
        />
      </div>
    </div>
  );
};

export default Page;
