import { motion } from "framer-motion";
import * as React from "react";
import Navbar from "../help/navbar";
import { Component } from "./chart";
import UserComponent from "../Home/[id]/hallo";
import FeatureNew from "../Home/feature";
interface IAppProps {}

const Feature: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="w-full px-32 mt-[-150px]">
      <Navbar />
      <div className="md:px-[0px] h-[1800px] flex flex-nowrap items-center content-center justify-around bg-gray-00 border-black flex-col w-full x-20">
        <div className="border-b-[1px] border-black/80 w-full flex items-center justify-center">
          <p className="lg:text-2xl flex justify-center md:text-2xl w-full items-center h-screen text-gray-900/80">
            <q>
              Explore the chart below 
              <span className="text-orange-900/80 ml-1">
                to see how this feature works and the valuable benefits it
                offers!
              </span>
            </q>
          </p>
        </div>
        <div className="flex justify-center flex-nowrap">
          <div className="w-90 flex justify-start flex-wrap">
            <p className="py-8 text-xl w-full text-center text-900/80">
              stock market live
            </p>
            <div className="w-full flex justify-center">
              <Component /> 
            </div>
          </div>
        </div>
      </div>
      <FeatureNew />
    </div>
  );
};

export default Feature;
