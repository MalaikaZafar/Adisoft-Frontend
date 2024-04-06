import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen flex flex-col  items-center bg-svg-background bg-cover">
      <div className="w-2/5 rounded-2xl bg-white py-6 ">
        <Image
          className="mx-auto"
          src="/successIcon.svg"
          alt="Success"
          width={300}
          height={300}
        />
        <p className="py-4 text-center">
          You have successfully subscribed to AdiSoft Standard!
        </p>
        <Link href="/dashboard">
        <button className="mx-auto mt-3 flex rounded-3xl bg-rgb-yellow px-5 py-3 text-sm text-rgb-green transition duration-300 ease-in-out hover:bg-orange-400">
          Continue
        </button>
        </Link>
      </div>
      <div className="mt-5">
        <Image
          className="mx-auto"
          src="/thankYou.svg"
          alt="Success"
          width={600}
          height={300}
        />
      </div>
    </div>
  );
};

export default Page;

