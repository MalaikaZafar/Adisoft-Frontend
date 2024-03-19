import SignUpForm from "@/components/forms/SignUpForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex h-screen flex-col bg-rgb-green md:flex-row">
      <div className="my-auto flex w-full items-center justify-center text-sm md:w-1/2">
        <div className="mx-auto my-auto text-center">
          <h1 className="text-3xl font-semibold tracking-wide text-white">
            Welcome to AdiSoft
          </h1>
          <br />
          <h3 className="text-lg font-light leading-8 tracking-widest text-white">
            Thank you for choosing us!
          </h3>
          <SignUpForm />
        </div>
      </div>
      <div className="relative hidden w-1/2 items-end bg-svg-background bg-cover bg-center md:flex">
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
