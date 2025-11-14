import aboutImg from "../assets/aboutImg.jpg";
import "../styles/componentsStyles.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutUsDesc() {
    return ( 
        <>
            {/* Remove the headSection to can call the section in Home Page */}
            {/* <HeadSection path={"about"} title={"About Us"} /> */}
            <section className="AboutUsDescSection container my-5">
                <div className="row row-gap-4">
                    <div className="col-lg-5">
                        <img src={aboutImg} alt="" className="w-100 img-fluid" />
                    </div>
                    <div className="col-lg-7  ">
                    <div className="w-100 h-100 d-flex flex-column justify-content-center gap-1 px-4">
                        <h5 className="text-uppercase mb-2 position-relative">About Us</h5>
                        <h1>Welcome to Museum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam perferendis provident placeat molestiae quia?</p>
                        <div className="row row-gap-2">
                            <div className="col-6"><FaArrowRight /> First Class Flights</div>
                            <div className="col-6"><FaArrowRight /> 5 Star Accommodations</div>
                            <div className="col-6"><FaArrowRight /> 150 Premium City Tours</div>
                            <div className="col-6"><FaArrowRight /> Handpicked Hotels</div>
                            <div className="col-6"><FaArrowRight /> Latest Model Vehicles</div>
                            <div className="col-6"><FaArrowRight /> 24/7 Service</div>
                        </div>
                        <Link className="ReadMoreLink btn btn-primary rounded-5 align-self-start mt-5 px-5 py-3">Read More</Link>
                    </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default AboutUsDesc;