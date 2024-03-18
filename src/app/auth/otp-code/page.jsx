import OtpCodeForm from "@/components/forms/OtpCodeForm";
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
            Check Your Email
          </h1>
          <br />
          <h3 className="flex justify-center text-lg font-light leading-8 tracking-widest text-white">
            We just sent a recovery code
          </h3>
          <OtpCodeForm />
        </div>
      </div>
      <div className="relative flex w-1/2 items-end bg-svg-background bg-cover bg-center">
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
