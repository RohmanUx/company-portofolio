import * as React from "react";
import Navbar from "./navbar";

interface IAppProps {}

const Help: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <Navbar />
      <div className="h-[740px] text-center flex flex-col justify-center items-center ">
        <div>
          <h1 className="my-0  text-3xl text-black/80"> help request: </h1>
        </div>
        <div>
          <p className="mt-2 mb-5">
            Please detail your issue. Thanks, we can support this.
          </p>
        </div>
        <button className="bg-[#535c47]/80 hover:bg-black text-white py-2 px-4 rounded-full border border-black/80"> 
          Contact Ticket | ✉️ 
        </button>
      </div>
    </div>
  );
};

export default Help;
