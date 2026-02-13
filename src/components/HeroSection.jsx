const HeroSection = () => {
  return (
    <div className="py-50 flex flex-col items-center relative">
      <div className="text-3xl sm:text-6xl font-bold max-w-2xl text-center">
        Unlimited movies, shows, and more
      </div>
      <div className="text-sm sm:text-base font-bold py-6">
        Starts at ₹149. Cancel at any time.
      </div>
      <p className="max-w-xl text-sm text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="w-full sm:w-auto mt-3 flex flex-col sm:flex-row items-center gap-3">
        <input
          type="text"
          placeholder="Email address"
          className="w-full sm:w-[420px] p-3 border-gray-500 pr-40 border rounded"
        />
        <button className=" sm:w-auto font-semibold bg-red-600 rounded p-3 px-15 min-w-fit">
          Get Started {">"}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
