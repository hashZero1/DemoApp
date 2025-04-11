import React from "react";

const AboutProp = () => {
  return (
    <div className="min-h-dvh mx-auto text-gray-50 bg-[#121212]">
      <div className="py-24 max-w-[90rem] mx-auto">
        <h2 className="text-5xl text-center pb-20">About the Property</h2>
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="">
            <iframe
              className="w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] lg:h-[400px] 2xl:w-[800px] 2xl:h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19648.67629492025!2d78.347653!3d17.421042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb935148bbb97b%3A0xca457ec883d6b3cd!2salt.f%20coworking%20%7C%20Shared%20Office%20Space%20In%20Financial%20District%20Hyderabad!5e1!3m2!1sen!2sin!4v1744380424074!5m2!1sen!2sin"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
          <ul className="text-2xl mt-14 md:mt-0">
            <li className="py-1">- 628 workstations</li>
            <li className="py-1">- 8 meeting rooms</li>
            <li className="py-1">- Podcast room</li>
            <li className="py-1">- Scandinavian aesthetics</li>
            <li className="py-1">- Ergonomic furniture</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutProp;
