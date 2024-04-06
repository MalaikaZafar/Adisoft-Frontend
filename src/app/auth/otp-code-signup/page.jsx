import SignUpOtpForm from "@/components/forms/SignUpOtpForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex h-screen flex-col bg-rgb-green md:flex-row">
      <div className="my-auto flex w-full items-center justify-center md:w-1/2">
        <div className="text-center">
          <Image
            className="mx-auto mb-5"
            src="/adisoft.svg"
            alt="Logo"
            width={150}
            height={150}
          />
          <h1 className="text-3xl font-semibold tracking-wide text-white">
            Check Your Email
          </h1>
          <br />
          <h3 className="text-lg font-light leading-8 tracking-widest text-white">
            We just sent a Verification code
          </h3>
          <SignUpOtpForm />
        </div>
      </div>
      <div className="relative hidden w-1/2 items-end bg-svg-background bg-cover bg-center md:flex">
        <Image
          className="absolute -left-10 bottom-0"
          src="/otpCode.svg"
          alt="OTPCode"
          width={700}
          height={200}
        />
      </div>
    </div>
  );
};

export default Page;
