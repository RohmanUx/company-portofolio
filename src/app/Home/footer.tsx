const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center bg-gray-50 border-t border-black h-[700px]">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl font-medium pt-10 font-mono">
          Ready to start a new
          <br />
          Experience
        </h1>
        <p className="max-w-lg mx-4 text-sm md:text-base lg:text-lg my-4 font-mono">
          The most trusted place for people and businesses to track all of your account balances, transactions, etc.
        </p>
        <button className="bg-[#535c47] hover:bg-black hover:text-white py-2 px-4 text-white rounded-full mt-4 transition duration-300 ease-in-out text-sm">
          Contact ✉️
        </button>
        <p className="text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-[#000000bd] font-bold mt-10 font-mono">
          Blue<span className="text-orange-700">.money </span>
        </p>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100 py-1 px-14">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16">
          <p className="text-sm md:text-base"> ©2024 Rahman, All rights reserved</p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li className="text-sm md:text-base hover:underline cursor-pointer">
              Terms & Conditions
            </li>
            <li className="text-sm md:text-base hover:underline cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
