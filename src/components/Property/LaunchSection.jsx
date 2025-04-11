import React from "react";

const LaunchSection = () => {
  return (
    <div className="h-[80vh] lg:h-[60vh] flex flex-col items-center justify-center mx-auto text-gray-800">
      <div className="flex flex-col items-center p-4 lg:p-2">
        <h1 className="font-semibold text-center text-5xl">
          Launching in Hyderabad – May 1, 2025
        </h1>
        <p className="text-xl lg:text-2xl mt-20 text-center w-full lg:w-[60rem] ">
          We are excited to bring alt.f coworking to Hyderabad with a workspace
          that perfectly fits the needs of 4-30 member teams. Whether you're a
          tech startup, creative agency, consulting firm, or remote team, we
          provide a distraction-free, professional, and high-energy environment
          to help you grow.
        </p>
      </div>
    </div>
  );
};

export default LaunchSection;
