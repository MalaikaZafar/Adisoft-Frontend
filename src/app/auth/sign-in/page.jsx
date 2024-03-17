import SignInForm from "@/components/forms/SignInForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex h-screen bg-rgb-green">
      <div className="flex w-1/2 items-center justify-center">
        <div className="mx-auto my-auto mb-10">
          <Image
            className="mx-auto mb-5"
            src="/adisoft.svg"
            alt="Logo"
            width={150}
            height={150}
          />
          <h1 className="flex justify-center text-3xl font-semibold tracking-[0.2rem] text-white">
            Welcome Back Pal!
          </h1>
          <br />
          <h3 className="flex justify-center text-lg font-light leading-8 tracking-widest text-white">
            Glad to have you back
          </h3>
          <SignInForm />
        </div>
      </div>
      <div className="relative flex w-1/2 items-end bg-svg-background bg-cover bg-center">
        <Image
          className="absolute -left-10 bottom-0"
          src="/welcomeBack.svg"
          alt="SignIn"
          width={700}
          height={200}
        />
      </div>
    </div>
  );
};

export default Page;
