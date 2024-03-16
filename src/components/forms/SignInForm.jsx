import Image from "next/image";

const SignInForm = () => {
  return (
    <form className="mt-10 max-w-sm">
      <div className="flex gap-5 text-white">
        <div className="border-b border-white py-3 ">
          <input
            className="mr-3 w-full border-b border-none bg-transparent py-2 font-light focus:outline-none"
            type="text"
            placeholder="First Name"
          />
        </div>

        <div className="border-b border-white py-3">
          <input
            className="mr-3 w-full border-none bg-transparent py-2 font-light focus:outline-none"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>

      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light focus:outline-none"
          type="text"
          placeholder="Email"
        />
      </div>

      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light focus:outline-none"
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
          className="mr-3 w-full border-none bg-transparent py-2 font-light focus:outline-none"
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
          className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-4 py-2.5 text-sm text-rgb-green hover:bg-rgb-green"
          type="button"
        >
          Sign Up
        </button>
        <h3 className="pt-4 font-extralight text-white">Or Sign Up with</h3>
        <Image
          className="pt-4"
          src="/google.svg"
          alt="SignIn"
          width={50}
          height={50}
        />
        <h3 className="pt-4 font-extralight text-white">
          Already have an account?{" "}
          <span className="font-semibold">SIGN IN</span>
        </h3>
      </div>
    </form>
  );
};

export default SignInForm;
