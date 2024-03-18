const ForgotPasswordForm = () => {
  return (
    <form className="mt-10 max-w-sm">
      <div className="flex items-center justify-evenly border-b border-white py-3">
        <input
          className="mr-3 w-full border-none bg-transparent py-2 font-light focus:outline-none"
          type="text"
          placeholder="Email"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-extralight text-white">
          A link will be sent to your email to reset your password
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <button
          className="flex-shrink-0 rounded border-4 border-none bg-rgb-yellow px-4 py-2.5 text-sm text-rgb-green"
          type="button"
        >
          Send Recovery Link
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
