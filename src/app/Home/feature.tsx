import * as React from "react";
import { RocketIcon, MagicWandIcon, CheckIcon, StarIcon } from "@radix-ui/react-icons"; // Using Radix icons

interface IAppProps {}

const FeatureNew: React.FunctionComponent<IAppProps> = () => {
  return (
    <div className="flex flex-col justify-center  items-center h-full lg:h-[740px] md:h-[920px] px-52 pt-16 bg-gray-100">
      {/* Title and Description */}
      <div className="text-center text-gray-800 mb-14">
        <h1 className="text-4xl font-semibold mb-2">Feature Financial Solutions</h1>
              </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 - Saving */}
        <div className="bg-gray-700 bg-opacity-80 rounded-xl p-6 text-center shadow-lg">
          <RocketIcon className="text-white h-10 w-10 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Saving</h2>
          <p className="text-white text-sm">
            Manage your money daily with effective saving strategies to secure your financial future.
          </p>
        </div>

        {/* Card 2 - Invest */}
        <div className="bg-gray-700 bg-opacity-80 rounded-xl p-6 text-center shadow-lg">
          <MagicWandIcon className="text-white h-10 w-10 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Invest</h2>
          <p className="text-white text-sm">
            Take advantage of investment opportunities and grow your wealth before its too late.
          </p>
        </div>

        { /* Card 3 - Loan */ }
        <div className="bg-gray-700 bg-opacity-80 rounded-xl p-6 text-center shadow-lg">
          <CheckIcon className="text-white h-10 w-10 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Loan</h2>
          <p className="text-white text-sm">
            Need funds for a holiday or important matter? Secure a loan that fits your needs. 
          </p>
        </div>
  
        { /* Card 4 - Trust Pilot */ }
        <div className="bg-gray-700 bg-opacity-80 rounded-xl p-6 text-center shadow-lg">
          <StarIcon className="text-white h-10 w-10 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Trust Pilot</h2>
          <p className="text-white text-sm">
           Customer Rank: 80% <br />
            Customers trust us because we offer reliable financial solutions.
          </p>
        </div> 

        
      </div>
        <div className="text-center text-gray-800 py-14">
                <p className="text-lg text-gray-800">
          Change the way you manage money — from side hustles to everyday  <br />
          spending, at home or abroad, to your financial goals.
        </p>
      </div>
    </div>
  );
};

export default FeatureNew;
