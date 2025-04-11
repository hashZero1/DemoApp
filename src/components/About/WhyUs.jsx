import image from "../../assets/image6.jpg";

const WhyUs = () => {
  return (
    <div className="my-40">
      <h1 className="text-4xl lg:text-5xl text-center my-20 px-4 lg:px-0">
        Why Small Teams Love alt.f coworking:
      </h1>
      <div className="p-4">
        <div className="px-4 lg:px-6 2xl:px-12 w-full lg:max-w-[90rem] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center ">
            <ul className=" leading-[1.4rem] text-[#121212] tracking-wide lg:w-[40%] ">
              <li className="p-2 pt-4 text-lg border-t-2 border-gray-200 border-opacity-40">
                <span className="text-red-400 font-bold">
                  Private Offices at Startup-Friendly Pricing{" "}
                </span>
                Move-in-ready spaces with no long-term commitments.
              </li>
              <li className="p-2 text-lg ">
                <span className="text-red-400 font-bold capitalize">
                  Flexible Growth Options
                </span>{" "}
                Expand your office size as your team grows.
              </li>
              <li className="p-2 text-lg ">
                <span className="text-red-400 font-bold capitalize">
                  On-Demand Meeting Rooms
                </span>{" "}
                Pay only for what you use, without unnecessary overheads.
              </li>
              <li className="p-2 text-lg ">
                <span className="text-red-400 font-bold capitalize">
                  Vibrant Yet Professional Setting
                </span>{" "}
                Enjoy networking without the noise of a crowded open floor.
              </li>
              <li className="p-2 pb-4 text-lg border-b-2 border-gray-200 border-opacity-40">
                <span className="text-red-400 font-bold capitalize">
                  Hassle-Free Operations
                </span>{" "}
                We take care of utilities, internet, maintenance, and
                housekeeping so you can focus on work.
              </li>
            </ul>

            <div className="lg:w-[50%] mt-12 lg:mt-0 ">
              <img className="w-full rounded-xl" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
