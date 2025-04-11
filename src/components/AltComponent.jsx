import React from "react";
import Header from "./Header";
import hero from "../assets/background.webp";

const AltComponent = () => {
  return (
    <section
      className="min-h-svh p-4 md:p-10"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${hero})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[90rem] mx-auto">
        <Header />
        <div className="w-full lg:w-[70%] 2xl:w-[60%] mt-[10rem] md:mt-[5rem] 2xl:mt-[8rem]">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] 2xl:text-[6.9rem] text-gray-50">
            Get the workspace you deserve
          </h1>
          <p className=" text-2xl lg:text-xl 2xl:text-3xl text-red-50 mb-8 mt-6 md:mb-4 2xl:mb-10 lg:mt-10">
            Starting at <br />
            <strong className="">₹8,000</strong>/seat/month
          </p>
          <button className="text-white  text-xl rounded-full border py-4 px-10 sm:px-16 hover:bg-slate-50/50 cursor-pointer transition-all">
            Grab the offer now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AltComponent;
