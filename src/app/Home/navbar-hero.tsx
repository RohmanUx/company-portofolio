"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../help/navbar";

interface IAppProps {}

const Hero: React.FunctionComponent<IAppProps> = (props) => {
  const [partners, setPartners] = useState<string[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      const partnersData = await new Promise<string[]>((resolve) =>
        setTimeout(
          () => resolve(["LinkedIn", "Jobseek", "Jooble", "Glints", "Deals"]),
          1000
        )
      );
      setPartners(partnersData);
    };

    fetchPartners();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      { /* Navbar */ }
      <Navbar /> { /* Hero Section */ }
      <div className="flex h-[600px] md:flex-row lg:md:items-center lg:md:flex-nowrap lg:flex-nowrap py-24 content-between md:mx-6 lg:px-8 md:py-2 lg:mb-16 justify-around ">
        <div className="lg:w-[540px] md:w-[520px] lg:mt-8 md:mt-28">
          <p>Why Need it  </p>
          <h1 className="py-2 lg:text-[52px] md:text-[28px]">
            Blue finance can <br /> help to save <br /> money
          </h1>
          <p className="py-2">
            We're the most trusted & loved place for people and businesses{" "}
            <br />
            to track all of your account money & since 2028 blue finance <br />
            can good management money with rank no.2 in Japan.
          </p>
          <button className="text-white bg-[#535c47] text-base rounded-full flex-nowrap flex py-[6px] px-4 mt-6 md:mt-3">
            Corp license
          </button>
        </div> 
        <div className="md:pl-5"> 
          { /* vidio */ }
          <div className="col-span-2 rounded-full">
            <iframe
              src="https://www.youtube.com/embed/9lcJabFsDXY"
              className="md:w-[440px] h-[340px] lg:w-[500px] 2xl:h-[380px] rounded-[16px] "
            > </iframe> 
          </div>
          <div className="flex-wrap flex col-span-2 bg-black/[0.895] rounded-[16px] items-center content-center h-[150px] mt-4  text-white/[0.6] backdrop-blur-sm md:w-[440px] 2xl:w-[500px] md:mt-[4px]">
           
           <div  className="text-[14px] mb-0 mx-20"> 
            <p>
              <q>
                It can help me manage money, including free mentor support if I
                lose a lot of money, it's so far
              </q>
            </p> </div> 
            <div id="img-0" className="mt-[10px] mx-20 flex items-center">
              <img
                id="img"
                src="https://cdn.dribbble.com/userupload/15332517/file/original-a64cd79737df1ee5c2451eb8c825a5d5.png?resize=1200x900"
                width={45}
                height={45}
                alt="rohman"
              />
              <div className="ml-4">
                <p id="list-5" className="text-[16px] text-white/[0.8]">
                  Muhammad Rachman
                </p>
                <p id="list-6" className="text-[12px] text-white/[0.6]">
                  Customer Reaction
                </p>
              </div>
            </div>
          </div>{" "}
        </div> 
              </div>
      <div
        id="partner"
        className="grid grid-cols-5 grid-rows-1 gap-[0px] " 
      >
        {partners.map((partner, index) => (
          <div 
            key={index}
            className="font-bold text-black/[0.722] text-[18px] leading-7 items-center justify-center flex h-16 bg-[#7fffd4a3] border-[0.2px]  border-white"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
