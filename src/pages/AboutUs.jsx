import AboutSection from "../components/Home_Sections/AboutSection";
import Testimonial from "../components/Home_Sections/testmonial/Testomonial";
import HeadSection from "../components/shared/headSection/HeadSection";

function AboutUs() {
  return (
    <>
      <HeadSection title={"About Us"} />
      <AboutSection />
      <Testimonial />
    </>
  );
}

export default AboutUs;
