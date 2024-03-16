import Image from "next/image";

const SignInForm = () => {
  return (
    <form class="w-full max-w-sm mx-auto">
      <div class="flex items-center justify-evenly border-b border-white py-3 text-white">
        <input
          class="bg-transparent border-none w-full font-light mr-3 py-2 focus:outline-none"
          type="text"
          placeholder="First Name"
        />
        <input
          class="bg-transparent border-none w-full font-light mr-3 py-2 focus:outline-none"
          type="text"
          placeholder="Last Name"
        />
      </div>

      <div class="flex items-center justify-evenly border-b border-white py-3">
        <input
          class="bg-transparent border-none w-full font-light mr-3 py-2 focus:outline-none"
          type="text"
          placeholder="Email"
        />
      </div>

      <div class="flex items-center justify-evenly border-b border-white py-3">
        <input
          class="bg-transparent border-none w-full font-light mr-3 py-2 focus:outline-none"
          type="text"
          placeholder="Password"
        />
      </div>

      <div class="flex items-center justify-evenly border-b border-white py-3">
        <input
          class="bg-transparent border-none w-full font-light mr-3 py-2 focus:outline-none"
          type="text"
          placeholder="Confirm Password"
        />
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <button
          class="flex-shrink-0 bg-rgb-yellow hover:bg-rgb-green border-none text-sm border-4 text-rgb-green py-2.5 px-4 rounded"
          type="button"
        >
          Sign Up
        </button>
        <h3 className="text-white font-light pt-4">Or Sign Up with</h3>
        <Image className="pt-4" src="/google.svg" alt="SignIn" width={50} height={50} />
        <h3 className="text-white font-light pt-4">Already have an account? <span className="font-semibold">SIGN IN</span></h3>
      </div>
    </form>
  );
};

export default SignInForm;
