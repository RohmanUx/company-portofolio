import * as React from "react";
import Navbar from "../help/navbar";
import { Component } from "./chart";
import UserComponent from "../Home/[id]/hallo";

interface IAppProps {}

const Feature: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <Navbar />
      <div className="px-[280px] md:px-[100px] h-[700px] flex flex-nowrap items-center content-center justify-around">
        <div>
          {" "}
          <p className="lg:text-[58px] flex justify-end md:text-[24px] mr-24">
            {" "}
            we have status <br /> Chart 🗺️ <br /> can be good story <br /> until
            end {" "}
          </p> {" "}
        </div> {" "}
        <div className="h-60 w-90">
          {" "} 
         <p className="py-8">     Data analist Greenly :  </p>
          <Component /> {" "}
        </div>
      </div>

      <div id="page-4" className="h-[700px] flex items-center justify-center">
        <div className="flex justify-center flex-wrap flex-col "> 
        <div>
          <div className="flex flex-nowrap flex-col mx-52 py-8 items-center">
            <div className=" lg:text-[32px] justify-start flex text-white text-center items-center md:text-[24px] pb-30">
                  {" "} 
              congralation !! <br /> 
              History of people the past <br /> we give honored to { " "}
            </div>
            <p className="text-[14px] flex justify-start py-8 text-white"> 
              {" "}
              Kariawan terbaik dan sekaligus teramah .. 
            </p>
          </div>
        </div>
        <div className="justify-center flex text-center "> 
          <UserComponent />  
          <div className="bg-[#7fffd4a3] my-6 py-2 rounded-2xl mx-[20px] px-3 pt-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#000000"
              id="img-1"
              className="mt-[11px]"
            >
              {" "}
              <path d="M448.67-195.33h60v-51.34q57.33-7.66 92-38 34.66-30.33 34.66-84 0-48-27.33-81t-97.33-61Q452-533.33 427-551q-25-17.67-25-47.67Q402-628 423.17-645q21.16-17 58.83-17 30.67 0 51.33 14.5Q554-633 566.67-606.67l53.33-24q-15-35-43.5-57t-65.83-25.66V-764h-60v50.67Q400-705 371-673.67q-29 31.34-29 75 0 48.34 29.17 77.34 29.16 29 88.83 52.66 65.67 26.34 90.5 47.34 24.83 21 24.83 52.66 0 32.34-25.5 50.5Q524.33-300 486.67-300q-37 0-65.84-21.5Q392-343 380-382l-56 20q18.67 46.67 48.83 74.17 30.17 27.5 75.84 39.16v53.34ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z" />{" "}
            </svg>
            <div id="room-0">
              {" "}
              <div id="img-2"> John  </div>
              <div id="img-3">
                {" "}
                manage money to work <br /> income per day <br /> with saving so
                help to your {" "}
              </div>
            </div> {" "}
          </div>

          <div className="bg-[#7fffd4a3] my-6 py-6 px-2 rounded-2xl mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="38px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#fffff"
              id="img-1"
              className="mt-[2px]"
            >
              {" "}
              <path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm60-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T630-796q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z" />{" "}
            </svg>
            <div id="room-0">
              {" "}
              <div id="img-2"> Bob  </div>
              <div id="img-3">
                 {" "}
                Take advantage your dream <br /> with investasion <br /> before
                late rich {" "}
              </div>
            </div> {" "}
          </div>
        </div> {" "}
      </div>  </div> 
    </div>
  );
};

export default Feature;
