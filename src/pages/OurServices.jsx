import { FaGlobe } from "react-icons/fa";
import { MdMuseum } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import "../styles/componentsStyles.css";
import HeadSection from "../components/shared/headSection/HeadSection";
import Testimonial from "./Testimonial";
import TestimonialComponent from "../components/TestimonialComponent";
import ServicesComponent from "../components/ServicesComponent";

function OurServices() {
  return (
    <>
      <HeadSection path={"services"} title={"Our Services"} />
        <ServicesComponent />
      <TestimonialComponent />
    </>
  );
}

export default OurServices;
