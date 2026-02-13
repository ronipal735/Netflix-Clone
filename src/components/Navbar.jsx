import bgimage from "../assets/images/bgimage.jpg";

const Navbar = () => {
  return (
    <>
      <div className="py-5 bg-black text-white z-10">
        <div
          className="absolute inset-0 bg-cover opacity-20 bg-center"
          style={{ backgroundImage: `url(${bgimage})` }}
        ></div>
        <div className="relative z-0">
          <div className="flex items-center justify-between">
            <div className="text-4xl sm:text-5x font-bold text-red-600 mr-16">
              NETFLIX
            </div>

            <div className="flex items-center gap-3">
              <div>
                <select
                  className="text-sm pr-17 border p-1 border-gray-500 mr-3 rounded"
                  name=""
                  id=""
                >
                  <option className="text-black" value="English">
                    English
                  </option>
                  <option className="text-black" value="Hindi">
                    हिन्दी
                  </option>
                </select>
              </div>
              <button className="bg-red-600 px-3 py-1 rounded font-semibold min-w-fit">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
