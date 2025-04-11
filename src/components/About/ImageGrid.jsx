import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.webp";

const ImageGrid = () => {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-7xl px-10 mx-auto xl:px-0 my-32">
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <img className="w-full rounded-xl" src={image1} />
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <img className="w-full rounded-xl" src={image2} />
            </div>
          </div>
          <div className="w-full mt-10 sm:mt-0 sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <img className="w-full rounded-xl" src={image3} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <img className="w-full rounded-xl" src={image4} />
            </div>
          </div>

          <div className="w-full sm:w-1/2 rounded-xl bg-[#121212] text-gray-50">
            <div className="relative h-full">
              <div className="col-start-1 row-start-2 p-5 mt-8">
                <h1 className="text-3xl text-center">Workspace Solutions</h1>
                <div className="mt-10">
                  <div className="flex flex-col sm:flex-row justify-evenly">
                    <ul className="border-b lg:border-b-0 pb-4 lg:pb-0 lg:border-r lg:pr-4">
                      <h2 className="text-2xl">Private Office</h2>
                      <li className="my-2 ">1. Team Rooms</li>
                      <li className="my-2 ">2. Director Cabins</li>
                      <li className="my-2 ">3. Office Suites</li>
                    </ul>
                    <ul className="py-4 lg:py-0">
                      <h2 className="text-2xl">Virtual Office</h2>
                      <li className="my-2 ">1. Team Rooms</li>
                      <li className="my-2 ">2. Director Cabins</li>
                      <li className="my-2 ">3. Office Suites</li>
                    </ul>
                    <ul className="border-t lg:border-t-0 lg:pt-0 pt-4 lg:border-l lg:pl-4">
                      <h2 className="text-2xl">Flexible Office</h2>
                      <li className="my-2 ">1. Team Rooms</li>
                      <li className="my-2 ">2. Director Cabins</li>
                      <li className="my-2 ">3. Office Suites</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
