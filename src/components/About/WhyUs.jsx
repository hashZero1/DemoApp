import image from "../../assets/image6.jpg";

const WhyUs = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen max-w-[90rem] items-center justify-evenly mx-auto">
      <div className="w-full lg:w-[40%] p-4 lg:p-10 rounded-xl">
        <div className="mt-4">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Private Offices at Startup-Friendly Pricing
          </h1>
          <p className="text-lg lg:text-xl">
            Move-in-ready spaces with no long-term commitments.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Flexible Growth Options
          </h1>
          <p className="text-lg lg:text-xl">
            Expand your office size as your team grows.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl lg:text-4xl font-bold">
            On-Demand Meeting Rooms{" "}
          </h1>
          <p className="text-lg lg:text-xl">
            Pay only for what you use, without unnecessary overheads.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Vibrant Yet Professional Setting
          </h1>
          <p className="text-lg lg:text-xl">
            Enjoy networking without the noise of a crowded open floor.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Hassle-Free Operations
          </h1>
          <p className="text-lg lg:text-xl">
            We take care of utilities, internet, maintenance, and housekeeping
            so you can focus on work.
          </p>
        </div>
      </div>
      <div className="w-[40%]">
        <img className="w-full" src={image} />
      </div>
    </div>
  );
};

export default WhyUs;
