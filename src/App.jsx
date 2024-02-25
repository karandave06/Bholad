import React from "react";
import logo from "../src/assets/logo.png";
import profile from "../src/assets/volunteer.webp";
import horse from "../src/assets/horse.png";

const App = () => {
  return (
    <div className="w-full   flex-col h-screen flex items-center justify-center">
      <div className="w-full md:h-[8rem]  bg-red-500 flex flex-col items-center justify-center">
        <div className="text-[#FFEA00] font-semibold md:text-xl text-md">
          सेवा | धर्म | शौर्य{" "}
        </div>
        <div className="text-white font-bold md:text-4xl text-md">
          શ્રી સુરાપુરા ધામ ભોળાદ (ભાલ)
        </div>
      </div>
      <div className="w-full md:h-[32rem]    h-full flex md:flex-row flex-col">
        <div className="md:w-[30%]  flex   items-center justify-center w-full h-full">
          <div className="w-full   items-center justify-center md:gap-0 gap-10 h-full flex flex-col">
            <div className="relative w-[80%]  left-0 top-0">
              <form>
                <div className="md:w-[80%] w-full  gap-3 flex items-center">
                  <labe className=" text-[2rem] font-semibold">RegNo:</labe>
                  <input className="outline-none w-full bg-transparent border-dashed border-b-[1px] border-black" />
                </div>
              </form>
            </div>
            <div className="md:h-[8rem] h-[6rem] w-[6rem]  md:w-[8rem]">
              <img
                src={horse}
                alt="horse"
                className="w-full h-full opacity-30"
              />
            </div>
            <div className="w-full flex gap-1 flex-col items-center justify-center md:h-[60%]  h-[10rem]">
              <img
                className="w-full h-[80%] object-contain  "
                src={profile}
                alt="profile"
              />
              <div>
                <h1 className="md:text-2xl text-xl  font-bold text-red-600">
                  Volunteer
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="relative md:w-[70%] flex items-center justify-center w-full h-full  ">
          <form className="absolute md:w-[80%]   flex-col z-50 left-0 md:top-0 top-5   h-full flex items-center md:justify-between md:p-10 gap-5 p-5">
            <div className="md:w-[80%] w-full gap-3 flex items-center">
              <labe className=" text-[2rem]   font-semibold">Name:</labe>
              <input className="outline-none w-full bg-transparent border-dashed border-b-[1px] border-black" />
            </div>

            <div className="md:w-[80%] w-full  gap-3 flex items-center">
              <labe className=" text-[2rem] font-semibold">Village/City:</labe>
              <input className="outline-none w-full bg-transparent border-dashed border-b-[1px] border-black" />
            </div>

            <div className="md:w-[80%] w-full  gap-3 flex items-center">
              <labe className=" text-[2rem] font-semibold">Day:</labe>
              <input className="outline-none w-full bg-transparent border-dashed border-b-[1px] border-black" />
            </div>

            <div className="md:w-[80%] w-full  gap-3 flex items-center">
              <labe className=" text-[2rem] font-semibold">Shift:</labe>
              <input className="outline-none w-full bg-transparent border-dashed border-b-[1px] border-black" />
            </div>

            <div className="md:w-[80%] w-full  gap-3 flex items-center">
              <labe className=" text-[2rem] font-semibold">Sign:</labe>
              <input className="outline-none w-full bg-transparent border-dashed border-b-[1px] border-black" />
            </div>
          </form>
          <div className="md:w-[28rem] w-[22rem] h-[22rem]  md:h-[28rem]">
            <img
              src={logo}
              className="w-full opacity-20 bg-cover"
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:h-[2rem] bg-red-500"></div>
    </div>
  );
};

export default App;
