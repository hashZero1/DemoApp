import React from "react";

const Solutions = () => {
  return (
    <div className="w-full h-full rounded-xl bg-[#121212] text-gray-50">
      <div className="flex flex-col items-center pt-10">
        <div className=" p-5">
          <h1 className="text-5xl text-[#9d9d9d] text-center font-bold">
            Workspace Solutions
          </h1>
        </div>
        <div className="mt-5 w-full p-4 xl:p-10">
          <div className="flex flex-col md:flex-row justify-evenly">
            <ul className="border-b md:border-b-0 pb-4 md:pb-0 md:border-r md:pr-14">
              <h2 className="text-2xl lg:text-3xl text-[#9d9d9d] ">
                Private Office
              </h2>
              <li className="my-3 text-xl lg:text-sm xl:text-xl">
                1. Team Rooms
              </li>
              <li className="my-3 text-xl lg:text-sm xl:text-xl">
                2. Director Cabins
              </li>
              <li className="my-3 text-xl lg:text-sm xl:text-xl">
                3. Office Suites
              </li>
            </ul>
            <ul className="py-4 lg:py-0 px-4">
              <h2 className="text-2xl lg:text-3xl text-[#9d9d9d] ">
                Virtual Office
              </h2>
              <li className="my-3 text-xl lg:text-sm xl:text-xl">
                1. Business Address Plan
              </li>
              <li className="my-3 text-xl lg:text-sm xl:text-xl">
                2. GST Registration Plan
              </li>
              <li className="my-3 text-xl lg:text-sm xl:text-xl">
                3. Business Registration Plan
              </li>
            </ul>
            <ul className="border-t md:border-t-0 pt-4 md:pt-0 md:border-l md:pl-14">
              <h2 className="text-2xl lg:text-3xl text-[#9d9d9d] ">
                Flexible Office
              </h2>
              <li className="my-3 text-xl lg:text-sm xl:text-xl">
                1. Day Pass Bundles
              </li>

              <li className="my-3 text-xl lg:text-sm xl:text-xl">
                3. Meeting room
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
