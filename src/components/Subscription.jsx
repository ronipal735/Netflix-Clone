const Subscription = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-18 font-semibold max-w-2xl text-center">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="w-full sm:w-auto mt-4 flex flex-col sm:flex-row gap-3 items-center">
        <div>
          <input
            className="w-full sm:w-[400px] p-3 border border-gray-500 rounded pr-40 bg-transparent"
            type="text"
            placeholder="Email address"
          />
        </div>
        <button className="font-semibold bg-red-600 rounded p-3 px-15 w-full sm:w-auto min-w-fit">
          Get Started {">"}
        </button>
      </div>
    </div>
  );
};

export default Subscription;
