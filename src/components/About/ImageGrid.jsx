import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.webp";

const ImageGrid = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className=" w-[70%]">
          <img className="w-full object-contain" src={image1} />
        </div>
        <div className="col-span-2 col-start-2 row-start-2  w-[70%]">
          <img className="w-full object-contain" src={image2} />
        </div>
        <div className="col-start-2 row-start-1  w-[70%]">
          <img className="w-full object-contain" src={image3} />
        </div>
        <div className="col-start-3 row-start-1  w-[70%]">
          <img className="w-full object-cover " src={image4} />
        </div>
        <div className="col-start-1 row-start-2">6</div>
      </div>
    </div>
  );
};

export default ImageGrid;
