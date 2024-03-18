import Image from "next/image";

const RecoverPasswordForm = () => {
  return (
    <form className="mt-10 max-w-sm">
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

      <div className="mt-5 flex items-center justify-evenly border-b border-white py-3">
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

      <div className="flex items-center justify-center py-10">
        <button
          className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-4 py-2.5 text-sm text-rgb-green"
          type="button"
        >
          Reset Password
        </button>
      </div>
    </form>
  );
};

export default RecoverPasswordForm;
