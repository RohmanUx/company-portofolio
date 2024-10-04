import * as React from "react";
import { RocketIcon, MagicWandIcon, CheckIcon, StarIcon } from "@radix-ui/react-icons";

interface IAppProps {}

const FeatureNew: React.FunctionComponent<IAppProps> = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen lg:h-auto px-6 sm:px-10 md:px-20 lg:px-28 xl:px-32 py-40 ">
      {/* Title and Description */}
      <div className="text-center text-gray-900 mb-10 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-2xl  mb-3"> benefit saving money with stock market</h1>
             </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card 1 - Saving */}
        <div className="bg-blue-900/60 bg-opacity-90 rounded-full p-5 text-center shadow-lg transform transition-transform hover:scale-105 hover:bg-opacity-100">
          <RocketIcon className="text-yellow-900 h-10 w-12 sm:h-12 sm:w-10 mx-auto mb-3 sm:mb-4" />
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Simple buy sell</h2>
          <p className="text-xs sm:text-sm text-white">
            Manage your money daily with effective saving strategies to secure your financial future.
          </p>
        </div>

        {/* Card 2 - Invest */}
        <div className="bg-blue-900/60 bg-opacity-90 rounded-full p-5 text-center shadow-lg transform transition-transform hover:scale-105 hover:bg-opacity-100">
          <MagicWandIcon className="text-yellow-900 h-10 w-12 sm:h-12 sm:w-10 mx-auto mb-3 sm:mb-4" />
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Stability market </h2>
          <p className="text-xs sm:text-sm text-white">
            Take advantage of investment opportunities and grow your wealth before it’s too late.
          </p>
        </div>

        {/* Card 3 - Loan */}
        <div className="bg-blue-900/60 bg-opacity-90 rounded-full p-5 text-center shadow-lg transform transition-transform hover:scale-105 hover:bg-opacity-100">
          <CheckIcon className="text-yellow-900 h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
          <h2 className="text-lg sm:text-full font-bold text-white mb-2">invest with low loan</h2>
          <p className="text-xs sm:text-sm text-white">
            Secure a loan that fits your needs for holidays or important matters.
          </p>
        </div>

        {/* Card 4 - Trust Pilot */}
        <div className="bg-blue-900/60 bg-opacity-90 rounded-full p-5 text-center shadow-lg transform transition-transform hover:scale-105 hover:bg-opacity-100">
          <StarIcon className="text-yellow-900 h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Trust pilot users</h2>
          <p className="text-xs sm:text-sm text-white">
            Customer Rank: 80% <br />
            Customers trust us for reliable financial solutions.
          </p>
        </div>
      </div>

      {/* Footer Description */}
      <div className="text-center text-gray-900 py-10 sm:py-12">
        <p className="text-sm sm:text-base lg:text-lg text-gray-700">
          change the way you manage money — from side hustles to everyday <br />
                </p>
      </div>
    </div>
  );
};

export default FeatureNew;
