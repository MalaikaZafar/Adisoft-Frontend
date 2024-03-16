import Image from "next/image";

const SignInForm = () => {
  return (
    <form className="max-w-sm mt-10">
      <div className="flex gap-5 text-white">
        <div className="border-b border-white py-3 ">
          <input
            className="border-b bg-transparent border-none w-full font-light mr-3 py-2 focus:outline-none"
            type="text"
            placeholder="First Name"
          />
        </div>

        <div className="border-b border-white py-3">
          <input
            className="bg-transparent border-none w-full font-light mr-3 py-2 focus:outline-none"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>

      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="bg-transparent border-none w-full font-light mr-3 py-2 focus:outline-none"
          type="text"
          placeholder="Email"
        />
      </div>

      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="bg-transparent border-none w-full font-light mr-3 py-2 focus:outline-none"
          type="text"
          placeholder="Password"
        />
        <Image
          src="/passwordHide.svg"
          alt="Hide Password"
          width={25}
          height={20}
        />
      </div>

      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="bg-transparent border-none w-full font-light mr-3 py-2 focus:outline-none"
          type="text"
          placeholder="Confirm Password"
        />
        <Image
          src="/passwordHide.svg"
          alt="Hide Password"
          width={25}
          height={20}
        />
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <button
          className="flex-shrink-0 bg-rgb-yellow hover:bg-rgb-green border-none text-sm border-4 text-rgb-green py-2.5 px-4 rounded"
          type="button"
        >
          Sign Up
        </button>
        <h3 className="text-white font-extralight pt-4">Or Sign Up with</h3>
        <Image
          className="pt-4"
          src="/google.svg"
          alt="SignIn"
          width={50}
          height={50}
        />
        <h3 className="text-white font-extralight pt-4">
          Already have an account?{" "}
          <span className="font-semibold">SIGN IN</span>
        </h3>
      </div>
    </form>
  );
};

export default SignInForm;
