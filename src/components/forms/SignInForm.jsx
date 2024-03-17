import Image from "next/image";

const SignInForm = () => {
  return (
    <form className="mt-10 max-w-sm">
      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light focus:outline-none"
          type="text"
          placeholder="Email"
        />
      </div>

      <div className="mt-5 flex items-center justify-evenly border-b border-white py-3">
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

      <div className="mt-5 flex justify-between">
        <div className="flex gap-2">
          <Image
            className=""
            src="/checkBox.svg"
            alt="SignIn"
            width={20}
            height={100}
          />
          <h3 className="font-extralight text-white">Remember Me</h3>
        </div>
        <div>
          <h3 className="font-extralight text-white">Forgot Password?</h3>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <button
          className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-4 py-2.5 text-sm text-rgb-green"
          type="button"
        >
          Sign In
        </button>
        <h3 className="pt-4 font-extralight text-white">Or Login with</h3>
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
