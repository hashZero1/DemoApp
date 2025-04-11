import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.webp";
import Solutions from "./Solutions";

const ImageGrid = () => {
  return (
    <div className="max-w-[90rem] p-4 mx-auto my-32">
      <div className=" grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="">
          <img className="w-full rounded-xl" src={image1} />
        </div>
        <div className="">
          <img className="w-full rounded-xl" src={image2} />
        </div>
        <div className="">
          <img className="w-full rounded-xl" src={image3} />
        </div>
        <div className="h-[25rem] lg:h-auto">
          <img
            className="w-full h-[100%] object-cover rounded-xl"
            src={image4}
          />
        </div>

        <div className=" lg:col-span-2">
          <Solutions />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
