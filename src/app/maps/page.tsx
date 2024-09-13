import { motion } from "framer-motion";
import * as React from "react";
import Navbar from "../help/navbar";
import { Component } from "./chart";
import UserComponent from "../Home/[id]/hallo";
import FeatureNew from "../Home/feature";

interface IAppProps {}

const Feature: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <Navbar />
      <div className="md:px-[160px] h-[800px] flex flex-nowrap items-center content-center justify-around bg-gray-100 border-b border-black">
        <div>
          {" "}
          <p className="lg:text-6xl flex justify-end md:text-2xl mr-24 w-[500px]">
            {" "}
            “Its Feature status chart 🗺️: can tell a great story from start to finish. its so Improve!”

             </p> {" "}
        </div> {" "} 
        <div className="flex justify-center flex-nowrap"> 
        <div className="w-90 flex justify-start flex-wrap">
        <p className="py-8 text-xl">     Analitic markey company#</p>
          <Component /> {" "}
         </div> </div>
        </div>
   <div> 
   <FeatureNew /> </div> 

                   </div> 
  );
};

export default Feature;
