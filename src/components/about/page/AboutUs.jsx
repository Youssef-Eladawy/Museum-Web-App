import TravelGuide from "../../travelGuides/component/TravelGuide.jsx";

import '../../../styles/componentsStyles.css'
import HeadSection from '../../shared/headSection/HeadSection';

import AboutUsDesc from "../component/AboutUsDesc.jsx";

function AboutUs() {
  const headerName = "About Us";
  return (
    <>
      <HeadSection path={"about"} title={"About Us"} />

      <AboutUsDesc />

      <TravelGuide />
    </>
  );
}

export default AboutUs;
