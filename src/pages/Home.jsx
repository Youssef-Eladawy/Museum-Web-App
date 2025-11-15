import Destination from "../components/Home_Sections/destination/Destination";
import GallerySection from "../components/Home_Sections/gallery/Gallery";
import AboutSection from "../components/Home_Sections/AboutSection";
import BlogSection from "../components/Home_Sections/BlogSection";
import HeaderSection from "../components/Home_Sections/hero";
import Services from "../components/Home_Sections/ServicesSection";
import Tours from "../featuers/tours/ToursHome";
import Testimonial from "../components/Home_Sections/testmonial/Testomonial";
import TravelGuide from "../components/Home_Sections/GuidesSection";
import TravelSection from "../components/Home_Sections/TravelSection";

function Home() {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <Services />
      <Tours />
      <Destination />
      <BlogSection />
      <TravelGuide />
      <GallerySection />
      <TravelSection />
      <Testimonial />
    </>
  );
}

export default Home;
