import "./contact.css";
import HeadSection from "../shared/headSection/HeadSection";
import SectionTitle from "../shared/sectionTitle/SectionTitle";

function Contact() {
    return (
        <>
            <HeadSection path={"contact"} />
            <div className="contact py-5">
                <SectionTitle title={"Contact Us"} sentence={"Contact For Any Query"} />
                <div className="contact-contact">
                    <div className="container px-4">
                        <div className="row gap-5 justify-content-center">
                            <div className="left col-lg-4 d-flex flex-column bg-white rounded-3 p-3 gap-4">
                                <div className="info d-flex flex-column align-items-center">
                                    <div className="icon">
                                        <i className="bi bi-geo-fill"></i>
                                    </div>
                                    <div className="details text-center text-secondary">
                                        <div className="up">
                                            123 ranking Street,
                                        </div>
                                        <div className="down">
                                            New York, USA
                                        </div>
                                    </div>
                                </div>
                                <div className="info d-flex flex-column align-items-center">
                                    <div className="icon">
                                        <i className="bi bi-telephone-fill"></i>
                                    </div>
                                    <div className="details text-center text-secondary">
                                        +012 345 67890
                                    </div>
                                </div>
                                <div className="info d-flex flex-column align-items-center">
                                    <div className="icon">
                                        <i className="bi bi-envelope-paper-heart-fill"></i>
                                    </div>
                                    <div className="details text-center text-secondary">
                                        info@example.com
                                    </div>
                                </div>
                            </div>
                            <div className="right col-lg-7 ">
                                <div className="title">
                                    <div className="title-title fs-4 fw-bold">
                                        Send us a message
                                    </div>
                                    <div className="title-desc text-secondary">
                                        Lets keep in touch and send us a message
                                    </div>
                                </div>
                                <form className="mt-3 d-flex flex-column gap-3">
                                    <div className="firstRow d-flex gap-3">
                                        <div className="field w-100">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder=""
                                                className="w-100 pb-3 pt-4 px-3 rounded-3 text-secondary"
                                            />
                                            <label
                                                htmlFor="name"
                                                className="text-secondary">
                                                Your Name
                                            </label>
                                        </div>
                                        <div className="field w-100">
                                            <input
                                                type="email"
                                                name="mail"
                                                id="mail"
                                                placeholder=""
                                                className="w-100 pb-3 pt-4 px-3 rounded-3 text-secondary"
                                            />
                                            <label
                                                htmlFor="mail"
                                                className="text-secondary">
                                                Your Email
                                            </label>
                                        </div>
                                    </div>
                                    <div className="secondRow">
                                        <div className="field w-100">
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                placeholder=""
                                                className="w-100 pb-3 pt-4 px-3 rounded-3 text-secondary"
                                            />
                                            <label
                                                htmlFor="subject"
                                                className="text-secondary">
                                                Subject
                                            </label>
                                        </div>
                                    </div>
                                    <div className="thirdRow">
                                        <div className="field w-100">
                                            <textarea
                                                name="message"
                                                id="message"
                                                rows="7"
                                                placeholder=""
                                                className="w-100 pb-3 pt-4 px-3 rounded-3 text-secondary"></textarea>
                                            <label
                                                htmlFor="message"
                                                className="text-secondary">
                                                Message
                                            </label>
                                        </div>
                                    </div>
                                    <div className="fourthRow">
                                        <button
                                            type="submit"
                                            className="w-100 px-2 py-3 rounded-3">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d821.1591626379268!2d31.220157253931976!3d30.04754661491687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAyJzUyLjUiTiAzMcKwMTMnMTEuOSJF!5e1!3m2!1sar!2seg!4v1762687218009!5m2!1sar!2seg"
                                className="col-12 mt-5 rounded-4"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
