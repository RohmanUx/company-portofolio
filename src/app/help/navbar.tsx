"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Corrected import for useRouter
import Image from "next/image";

interface IAppProps {}

const Navbar: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          padding: "24px",
          justifyContent: "space-between",
        }}
      >
        <div className="items-center flex-no-wrap flex w-56 md:w-64"> 
          <h1
            id="logo-0"
            style={{
              fontSize: 24,
              fontWeight: 600,
  
              color: "black",
            }}
            className="text-[24px] ml-2 md:ml-0"
          >
            Greenly.id
          </h1>
        </div>
        <div className="flex justify-start w-full">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: 50,
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
                        <li>
              <Link href="/maps">Maps</Link>
            </li>
            <li>
              <Link href="/help">Help</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button className="text-base rounded-full flex-nowrap flex py-[2px] border-[1px] border-black px-2">
            Meeting
          </button>
          <button className="text-white bg-[#535c47] text-base rounded-full flex-nowrap flex py-[2px] px-4 ml-2">
            Contract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
