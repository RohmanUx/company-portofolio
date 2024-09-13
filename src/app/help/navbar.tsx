  "use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

interface IAppProps {}

const Navbar: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="fixed top-0 left-0 right-0 pt-4 z-10">
      <div className="flex items-center justify-between mx-4 md:mx-8 lg:mx-32 py-4 px-6 md:px-10 lg:px-16 border border-black rounded-full  bg-gray-100/80 backdrop-blur-md">
        <h1 className="text-xl md:text-2xl font-semibold text-black">
          blueMoney
        </h1>

        <ul className="flex gap-6 md:gap-12 list-none text-sm md:text-lg">
          <li>
            <Link href="/">Home </Link>
          </li>
          <li>
            <Link href="/maps">Feature </Link>
          </li>
          <li>
            <Link href="/teams">Teams </Link>
          </li>
          <li>
            <Link href="/help">Help </Link>
          </li>
        </ul>

        <div className="flex gap-2">
          <button className="text-sm md:text-base rounded-full border border-black px-3 py-1 md:px-4 md:py-1">
            Meeting
          </button>
          <button className="text-sm md:text-base text-white bg-[#535c47] rounded-full pl-3 py-1 md:px-4 md:py-1 ">
            Contract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
