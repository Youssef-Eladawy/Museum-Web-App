
import "../styles/componentsStyles.css";
import HeadSection from "../components/shared/headSection/HeadSection";

import TestimonialComponent from "../components/TestimonialComponent";
import ServicesComponent from "../components/ServicesComponent";
function OurServices() {
    return ( <>
        <HeadSection path={"services"} title={"Our Services"} />
        <ServicesComponent />
        <TestimonialComponent />
    </> );
}

export default OurServices;