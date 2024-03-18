const OtpCodeForm = () => {
  return (
    <form className="mt-10 max-w-sm">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center justify-center border-b border-white">
          <input
            className="flex w-10 border-none bg-transparent py-2 font-light focus:outline-none"
            type="number"
            placeholder="0"
          />
        </div>

        <div className="flex items-center justify-center border-b border-white">
          <input
            className="flex w-10 border-none bg-transparent py-2 font-light focus:outline-none"
            type="number"
            placeholder="0"
          />
        </div>

        <div className="flex items-center justify-center border-b border-white">
          <input
            className="flex w-10 border-none bg-transparent py-2 font-light focus:outline-none"
            type="number"
            placeholder="0"
          />
        </div>

        <div className="flex items-center justify-center border-b border-white">
          <input
            className="flex w-10 border-none bg-transparent py-2 font-light focus:outline-none"
            type="number"
            placeholder="0"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <h3 className="mb-10 font-extralight text-white">
          Didn't get the code? <span className="font-semibold">Resend</span>
        </h3>
        <button
          className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-4 py-2.5 text-sm text-rgb-green"
          type="button"
        >
          Recover Account
        </button>
      </div>
    </form>
  );
};
export default OtpCodeForm;
