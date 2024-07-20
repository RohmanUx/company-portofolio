import * as React from "react";
import Navbar from "./navbar";

interface IAppProps {}

const Help: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <Navbar />
      <div className="h-[740px] text-center flex flex-col justify-center items-center ">
        <div>
          <h1 className="my-12  text-6xl"> help request : </h1>
        </div>
        <div>
          <p className="my-12">
            Please detail your issue. Thanks, we can support this.
          </p>
        </div>
        <button className="bg-[#535c47] hover:bg-black text-white py-2 px-4 rounded-full"> 
          Contact Ticket | ✉️ 
        </button>
      </div>
    </div>
  );
};

export default Help;
