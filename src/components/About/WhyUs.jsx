import image from "../../assets/image6.jpg";

const WhyUs = () => {
  return (
    <div className="flex h-screen max-w-[90rem] items-center justify-evenly mx-auto">
      <div className=" w-[40%] p-10 rounded-xl">
        <div>
          <h1>Private Offices at Startup-Friendly Pricing</h1>
          <p>Move-in-ready spaces with no long-term commitments.</p>
        </div>
        <div>
          <h1>Flexible Growth Options</h1>
          <p>Expand your office size as your team grows.</p>
        </div>
        <div>
          <h1>On-Demand Meeting Rooms </h1>
          <p>Pay only for what you use, without unnecessary overheads.</p>
        </div>
        <div>
          <h1>Vibrant Yet Professional Setting</h1>
          <p>Enjoy networking without the noise of a crowded open floor.</p>
        </div>
        <div>
          <h1>Hassle-Free Operations</h1>
          <p>
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
