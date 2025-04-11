import React, { useState } from "react";

const CallToAction = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="my-20 p-4">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-[90rem] mx-auto px-10 py-20 h-fit bg-gray-200 rounded-2xl">
        <div className="w-full lg:w-[40%] mx-auto mb-10">
          <h1 className="text-7xl lg:text-[7rem] leading-[5rem] lg:leading-[6.2rem]">
            Be Bold, <br /> Be You.
          </h1>
        </div>
        <div className="p-2 w-full lg:w-[50%] ">
          <p className="w-full lg:w-[80%] tracking-wide text-2xl lg:text-3xl leading-[2.2rem]">
            Don’t wait to seek the workspace you deserve. Enter your details
            below to schedule your free call with our dedicated team.
          </p>
          <form
            className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 p-4 md:p-2 xl:p-0 mt-10"
            onSubmit={handleSubmit}
          >
            <input
              className="outline-none py-2 lg:py-0 border-b-2 border-[#121212]"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="outline-none py-2 lg:py-0 border-b-2 border-[#121212]"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="outline-none py-2 lg:py-0 border-b-2 border-[#121212]"
              type="text"
              placeholder="Phone number"
              required
            />
            <button className="bg-red-400 text-white px-4 py-2 hover:bg-red-500 transition-all">
              {" "}
              Schedule a call now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
