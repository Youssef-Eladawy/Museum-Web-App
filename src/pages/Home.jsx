import AboutUsDesc from "../components/about/component/AboutUseDesc";
import OurServices from "../components/services/page/OurServices";
import DestinationSection from "../components/destination/DestinationSection";
import TravelGuide from "../components/travelGuides/component/TravelGuide";
import GallerySection from "../components/gallery/GallerySection";
import React from "react";
import HomeHero from "../components/Hero";
import TravelSection from "../components/typeOfTravels/TravelSection";

function Home() {
  return (
    <>
      <HomeHero />
      <AboutUsDesc />
      <OurServices />
      <DestinationSection />
      <TravelSection />
      <TravelGuide />
      <GallerySection />
    </>
  );
}

export default Home;
