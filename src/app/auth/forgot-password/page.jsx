import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex h-screen flex-col bg-rgb-green md:flex-row">
      <div className="flex w-full items-center justify-center sm:my-auto md:w-1/2">
        <div className="text-center">
          <Image
            className="mx-auto mb-5"
            width={150}
            height={150}
            src="/adisoft.svg"
            alt="Logo"
          />
          <h1 className="text-3xl font-semibold tracking-wide text-white">
            Forgot Your Password?
          </h1>
          <br />
          <h3 className="text-lg font-light leading-8 tracking-widest text-white">
            We have your back!
          </h3>

          <ForgotPasswordForm />
        </div>
      </div>
      <div className="relative flex w-1/2 items-end bg-svg-background bg-cover bg-center sm:hidden md:flex">
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
