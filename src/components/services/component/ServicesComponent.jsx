import { FaGlobe } from "react-icons/fa";
import { MdMuseum } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import '../../../styles/componentsStyles.css'
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
function ServicesComponent() {
    return ( 
        <section className="OurServicesSection container">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center my-5">
                <SectionTitle title={"SERVICES"} sentence={"Our Services"} />
                <div className="row w-100 row-gap-4">
                    <div className="col-lg-6 d-flex flex-column row-gap-4">
                        <div className="serviceBox d-flex border rounded-3 p-4 gap-4 ">
                            <div className="d-flex flex-column justify-content-around">
                                <h5 className="text-end">WorldWide Tours</h5>
                                <p className="text-end text-secondary">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                            </div>
                            <FaGlobe className="icon text-secondary" />
                        </div>
                        <div className="serviceBox d-flex border rounded-3 p-4 gap-4 ">
                            <div className="d-flex flex-column justify-content-around">
                                <h5 className="text-end">WorldWide Tours</h5>
                                <p className="text-end text-secondary">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                            </div>
                            <MdMuseum  className="icon text-secondary" />
                        </div>
                        <div className="serviceBox d-flex border rounded-3 p-4 gap-4 ">
                            <div className="d-flex flex-column justify-content-around">
                                <h5 className="text-end">WorldWide Tours</h5>
                                <p className="text-end text-secondary">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                            </div>
                            <FaUserAlt  className="icon text-secondary" />
                        </div>
                        <div className="serviceBox d-flex border rounded-3 p-4 gap-4 ">
                            <div className="d-flex flex-column justify-content-around">
                                <h5 className="text-end">WorldWide Tours</h5>
                                <p className="text-end text-secondary">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                            </div>
                            <FaGear  className="icon text-secondary" />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column row-gap-4">
                        <div className="serviceBox d-flex border rounded-3 p-4 gap-4 ">
                            <FaGlobe className="icon text-secondary" />
                            <div className="d-flex flex-column justify-content-around">
                                <h5>WorldWide Tours</h5>
                                <p className="text-secondary" >Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                            </div> 
                        </div>
                        <div className="serviceBox d-flex border rounded-3 p-4 gap-4 ">
                            <MdMuseum  className="icon text-secondary" />
                            <div className="d-flex flex-column justify-content-around">
                                <h5>WorldWide Tours</h5>
                                <p className="text-secondary" >Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                            </div> 
                        </div>
                        <div className="serviceBox d-flex border rounded-3 p-4 gap-4 ">
                            <FaUserAlt  className="icon text-secondary" />
                            <div className="d-flex flex-column justify-content-around">
                                <h5>WorldWide Tours</h5>
                                <p className="text-secondary" >Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                            </div> 
                        </div>
                        <div className="serviceBox d-flex border rounded-3 p-4 gap-4 ">
                            <FaGear  className="icon text-secondary" />
                            <div className="d-flex flex-column justify-content-around">
                                <h5>WorldWide Tours</h5>
                                <p className="text-secondary" >Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <button className="btn btn-secondary btn-lg mt-5 rounded-5 px-5 py-3">See More</button>
            </div>
        </section>
     );
}

export default ServicesComponent;
