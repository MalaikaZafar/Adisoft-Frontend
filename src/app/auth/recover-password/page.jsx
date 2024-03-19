import RecoverPasswordForm from "@/components/forms/RecoverPasswordForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex h-screen flex-col bg-rgb-green md:flex-row">
      <div className="my-auto flex w-full items-center justify-center md:w-1/2">
        <div className="mx-auto my-auto text-center">
          <Image
            className="mx-auto mb-5"
            src="/adisoft.svg"
            alt="Logo"
            width={150}
            height={150}
          />
          <h1 className="text-3xl font-semibold tracking-wide text-white">
            Reset your Password
          </h1>
          <br />
          <h3 className="text-sm font-light leading-8 tracking-normal text-white">
            Here's a tip: Use a combination of numbers, uppercase, <br />{" "}
            lowercase and special characters
          </h3>
          <RecoverPasswordForm />
        </div>
      </div>
      <div className="relative hidden w-1/2 items-end bg-svg-background bg-cover bg-center md:flex">
        <Image
          className="absolute -left-16 bottom-0"
          src="/recoverPassword.svg"
          alt="RecoverPassword"
          width={500}
          height={200}
        />
      </div>
    </div>
  );
};

export default Page;
