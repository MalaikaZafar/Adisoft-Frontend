import SignInForm from "@/components/forms/SignInForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex h-screen bg-rgb-green">
      <div className="flex items-center justify-center w-1/2">
        <div className="mb-10 mx-auto my-auto">
          <h1 className="flex justify-center text-3xl font-semibold text-white tracking-[0.2rem]">
            Welcome to AdiSoft
          </h1>
          <br />
          <h3 className="flex justify-center text-lg leading-8 font-light text-white tracking-widest">
            Thank you for choosing us!
          </h3>
          <SignInForm />
        </div>
      </div>
      <div className="flex w-1/2 items-end bg-svg-background bg-cover bg-center relative">
        <Image
          className="absolute bottom-0 -left-10"
          src="/joinUs.svg"
          alt="SignIn"
          width={700}
          height={200}
        />
      </div>
    </div>
  );
};

export default Page;
