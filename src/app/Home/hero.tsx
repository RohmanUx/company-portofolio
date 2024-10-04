"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../help/navbar";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <div className="bg-gray-50">
      { /* Navbar */ }
      <Navbar /> 
      { /* Hero Section */ }
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex h-[800px] md:flex-row lg:md:items-center lg:md:flex-nowrap lg:flex-nowrap py-24 content-between md:mx-6 lg:px-8 md:py-2 lg:mb-16 justify-around bg-gray-00 rounded-xl"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-[540px] md:w-[520px] lg:mt-8 md:mt-28"
        >
          <p className="py-1 w-28 border-black border-[1px] flex items-center text-center justify-center rounded-full text-sm">Why Need it</p>
          <h1 className="pt-2 lg:text-5xl md:text-xl text-thin font-mono my-1">
            Blue finance can <br /> help to save <br /> money
          </h1>
          <p className="py-2 font-sm font-mono text-black/80">
            We&aposre the most trusted & loved place for people and businesses{" "}
            <br />
            to track all of your account money & since 2028 blue finance <br />
            can good management money with rank no.2 in Japan.
          </p>
          <button className="text-white bg-[#535c47] text-base rounded-full flex-nowrap flex py-[6px] px-4 mt-6 md:mt-3 text-sm">
            Corp license 🔑 
          </button>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:pl-5"
        >
          { /* Video */ }
          <motion.div className="col-span-2 rounded-full">
            <iframe
              src="https://www.youtube.com/embed/9lcJabFsDXY"
              className="md:w-[440px] h-[340px] lg:w-[500px] 2xl:h-[380px] rounded-[16px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex-wrap flex col-span-2 bg-black/[0.72] rounded-[16px] items-center content-center h-[150px] mt-4 text-white/[0.6] backdrop-blur-[8px] md:w-[440px] 2xl:w-[500px] md:mt-[4px]"
          >
            <div className="text-[14px] mb-0 mx-8">
              <p>
                <q>
                  It can help me manage money, including free mentor support if
                  I lose a lot of money, it&apos;s so far.
                </q>
              </p>
            </div>
            <div className="mt-[10px] mx-0 flex items-center ml-12">
              <Image
                id="img"
                src="https://cdn.dribbble.com/userupload/15332517/file/original-a64cd79737df1ee5c2451eb8c825a5d5.png?resize=1200x900"
                width={45}
                height={45}
                alt="rohman"
              />
              <div className="ml-2">
                <p className="text-lg text-white/[0.8]">
                  Muhammad Rachman
                </p>
                <p id="list-6" className="text-[12px] text-white/[0.6]">
                  Customer Reaction
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        id="partner"
        className="grid grid-cols-5 grid-rows-1 gap-[0px] mx-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            className="font-bold text-white/[100] text-[18px] leading-7 items-center justify-center flex h-8 bg-[#535c47a3]/60 border-[0.2px] border-white backdrop-blur-3xl font-mono text-xl "
          >
            {partner}
          </div>
        ))}
      </motion.div>
  </div>
  );
};

export default Hero;
