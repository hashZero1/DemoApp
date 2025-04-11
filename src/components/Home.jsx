import React from "react";
import AltComponent from "./AltComponent";
import AboutSection from "./About/AboutSection";
import LaunchSection from "./Property/LaunchSection";
import AboutProp from "./Property/AboutProp";
import ImageGrid from "./About/ImageGrid";
import OurStory from "./About/OurStory";
import Footer from "./Footer";
import WhyUs from "./About/WhyUs";

const Home = () => {
  return (
    <main className="">
      <AltComponent />
      <AboutSection />
      <OurStory />
      <LaunchSection />
      <AboutProp />
      {/* <ImageGrid /> */}
      <WhyUs />
      <Footer />
    </main>
  );
};

export default Home;
