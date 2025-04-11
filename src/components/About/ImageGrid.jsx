import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.webp";
import Solutions from "./Solutions";

const ImageGrid = () => {
  return (
    <main className="my-32 w-full px-5 lg:max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      <div className=" ">
        <img className="w-full rounded-xl" src={image2} />
      </div>
      <div className=" ">
        <img className="w-full rounded-xl" src={image2} />
      </div>
      <div className=" ">
        <img className="w-full rounded-xl" src={image2} />
      </div>
      <div className=" ">
        <img className="w-full rounded-xl" src={image2} />
      </div>

      <div className=" col-span-2">
        <Solutions />
      </div>
    </main>
  );
};

export default ImageGrid;
