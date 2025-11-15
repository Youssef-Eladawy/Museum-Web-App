import '../../../styles/componentsStyles.css'
import HeadSection from '../../shared/headSection/HeadSection';
import TestimonialComponent from "../../testimonial/component/TestimonialComponent";
import ServicesComponent from "../component/ServicesComponent";
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
