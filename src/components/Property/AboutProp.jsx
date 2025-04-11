import React from "react";
import computer from "../../assets/computer.png";
import conference from "../../assets/conference.png";
import microphone from "../../assets/microphone.png";
import furniture from "../../assets/workspace.png";
import asthetic from "../../assets/aesthetic.png";

const AboutProp = () => {
  return (
    <div className="min-h-dvh mx-auto text-gray-50 bg-[#121212]">
      <div className="py-24 max-w-[90rem] mx-auto">
        <h2 className="text-4xl lg:text-5xl p-2 lg:p-0 text-center pb-20">
          About the Property
        </h2>
        <div className="flex flex-col lg:flex-row justify-evenly items-center lg:mt-20">
          <div className=" mb-10 lg:mb-0">
            <iframe
              className="w-[300px] rounded-xl sm:w-[600px] h-[300px] lg:h-[400px] 2xl:w-[650px] 2xl:h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19648.67629492025!2d78.347653!3d17.421042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb935148bbb97b%3A0xca457ec883d6b3cd!2salt.f%20coworking%20%7C%20Shared%20Office%20Space%20In%20Financial%20District%20Hyderabad!5e1!3m2!1sen!2sin!4v1744380424074!5m2!1sen!2sin"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
          <div className="text-2xl mt-14 md:mt-0">
            <div className="flex items-center my-5">
              <div className="w-18 mr-4 rounded-full bg-gray-200 p-3">
                <img className="" src={computer} />
              </div>

              <p>628 workstations</p>
            </div>
            <div className="flex items-center my-5">
              <div className="w-18 mr-4 rounded-full bg-gray-200 p-3">
                <img className="w-12" src={conference} />
              </div>

              <p>8 meeting rooms</p>
            </div>
            <div className="flex items-center my-5">
              <div className="w-18 mr-4 rounded-full bg-gray-200 p-3">
                <img className="w-12" src={microphone} />
              </div>

              <p>Podcast room</p>
            </div>
            <div className="flex items-center my-5">
              <div className="w-18 mr-4 rounded-full bg-gray-200 p-3">
                <img className="w-12" src={asthetic} />
              </div>

              <p>Scandinavian aesthetics</p>
            </div>
            <div className="flex items-center my-5">
              <div className="w-18 mr-4 rounded-full bg-gray-200 p-3">
                <img className="w-12" src={furniture} />
              </div>

              <p>Ergonomic furniture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProp;
