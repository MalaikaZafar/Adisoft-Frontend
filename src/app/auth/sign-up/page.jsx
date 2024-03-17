import SignUpForm from "@/components/forms/SignUpForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex h-screen bg-rgb-green">
      <div className="flex w-1/2 items-center justify-center">
        <div className="mx-auto my-auto mb-10">
          <h1 className="flex justify-center text-3xl font-semibold tracking-[0.2rem] text-white">
            Welcome to AdiSoft
          </h1>
          <br />
          <h3 className="flex justify-center text-lg font-light leading-8 tracking-widest text-white">
            Thank you for choosing us!
          </h3>
          <SignUpForm />
        </div>
      </div>
      <div className="relative flex w-1/2 items-end bg-svg-background bg-cover bg-center">
        <Image
          className="absolute -left-10 bottom-0"
          src="/joinUs.svg"
          alt="SignUp"
          width={700}
          height={200}
        />
      </div>
    </div>
  );
};

export default Page;
