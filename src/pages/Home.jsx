import AboutUsDesc from "../components/AboutUseDesc";
import OurServices from "./OurServices";
import DestinationSection from "../components/destination/DestinationSection";
import TravelGuide from "../components/TravelGuide";
import GallerySection from "../components/gallery/GallerySection";
import React from "react";
import HomeHero from "../components/Hero";

function Home() {
  return (
    <>
      <HomeHero />
      <AboutUsDesc />
      <OurServices />
      <DestinationSection />
      <TravelGuide />
      <GallerySection />
    </>
  );
}

export default Home;
