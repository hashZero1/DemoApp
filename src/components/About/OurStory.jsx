import React from "react";

const OurStory = () => {
  return (
    <div className="bg-[#121212] px-4 lg:p-2 h-screen lg:h-[60vh] pt-20 flex flex-col items-center justify-center">
      <div className=" flex flex-col items-center">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly mx-auto w-[80rem]">
          <div className="border border-gray-400 my-2 lg:my-0 rounded-lg w-full py-8 lg:w-[24%] text-center bg-gray-200 hover:scale-105 transition-all cursor-pointer hover:bg-red-100">
            <h2 className="text-4xl font-black py-2">16</h2>
            <p>Centres in Delhi NCR</p>
          </div>
          <div className="border border-gray-400 my-2 lg:my-0 rounded-lg  w-full py-8 lg:w-[26%] text-center bg-gray-200 hover:scale-105 transition-all cursor-pointer hover:bg-red-100">
            <h2 className="text-4xl font-black py-2">10,000+</h2>
            <p>seats</p>
          </div>
          <div className="border border-gray-400 my-2 lg:my-0 rounded-lg  w-full py-8 lg:w-[26%] text-center bg-gray-200 hover:scale-105 transition-all cursor-pointer hover:bg-red-100">
            <h2 className="text-4xl font-black py-2">93%</h2>
            <p>Occupancy rate</p>
          </div>
        </div>
        <div className=" pt-20">
          <button className="px-14 py-4 text-xl text-gray-50 bg-red-400 rounded-full hover:bg-red-500">
            Here's our Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
