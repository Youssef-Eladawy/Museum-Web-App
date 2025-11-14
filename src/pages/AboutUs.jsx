
import TravelGuide from "../components/TravelGuide";
// import aboutImg from "../assets/aboutImg.jpg";
import "../styles/componentsStyles.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeadSection from "../components/shared/headSection/HeadSection";
import AboutUsDesc from "../components/AboutUseDesc";

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