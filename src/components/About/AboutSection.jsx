import React from "react";

const AboutSection = () => {
  return (
    <div className="h-fit my-20 lg:my-0 md:h-[60vh] flex flex-col items-center max-w-[90rem] justify-center mx-auto text-gray-800">
      <div className="flex flex-col items-center p-4 lg:p-2">
        <h1 className="font-semibold text-5xl">About Us</h1>
        <p className="text-2xl mt-14 text-center w-full lg:w-[60rem] ">
          At alt.f coworking, we specialize in creating cost-effective, fully
          serviced workspaces designed for small teams, startups, and growing
          businesses. Since 2016, we’ve helped 500+ businesses scale by
          providing plug-and-play private offices that eliminate the hassle of
          long leases and overhead costs.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
