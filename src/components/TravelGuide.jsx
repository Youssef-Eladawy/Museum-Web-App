import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import guide1 from "../assets/guide-1.jpg";
import "../styles/componentsStyles.css";

function TravelGuide() {
  return (
    <>
      <section className="travelGuideSection w-100 d-flex flex-column justify-content-center align-items-center  px-5 container my-5">
        <div className="d-flex gap-3 mb-1">
          <div className="line"></div>
          <h5 className="m-0 position-relative text-uppercase">Tour Guide</h5>
          <div className="line"></div>
        </div>
        <h1 className="mb-5">Meet Our Guide</h1>
        <div className="row w-100 row-gap-5">
          <div className="guider col-lg-3 col-md-6 overflow-hidden px-3 my-0">
            <div className="d-flex flex-column border rounded-3  overflow-hidden">
              <div className="position-relative w-100">
                <div className="w-100 overflow-hidden position-relative img-container">
                  <img src={guide1} alt="" className="w-100" />
                </div>
                <div className=" d-flex justify-content-around gap-1 border border-1 rounded-5 border-primary-subtle p-2 position-absolute top-100 start-50 translate-middle bg-white z-3">
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <IoLogoInstagram />
                  </a>
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="guiderDesc pt-5 pb-2 bg-light w-100 position-relative">
                <h2 className="text-center">Full Name</h2>
                <p className="text-center">Designation</p>
              </div>
            </div>
          </div>
          <div className="guider col-lg-3 col-md-6 overflow-hidden px-3 my-0">
            <div className="d-flex flex-column border rounded-3  overflow-hidden">
              <div className="position-relative w-100">
                <div className="w-100 overflow-hidden position-relative img-container">
                  <img src={guide1} alt="" className="w-100" />
                </div>
                <div className=" d-flex justify-content-around gap-1 border border-1 rounded-5 border-primary-subtle p-2 position-absolute top-100 start-50 translate-middle bg-white z-3">
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <IoLogoInstagram />
                  </a>
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="guiderDesc pt-5 pb-2 bg-light w-100 position-relative">
                <h2 className="text-center">Full Name</h2>
                <p className="text-center">Designation</p>
              </div>
            </div>
          </div>
          <div className="guider col-lg-3 col-md-6 overflow-hidden px-3 my-0">
            <div className="d-flex flex-column border rounded-3  overflow-hidden">
              <div className="position-relative w-100">
                <div className="w-100 overflow-hidden position-relative img-container">
                  <img src={guide1} alt="" className="w-100" />
                </div>
                <div className=" d-flex justify-content-around gap-1 border border-1 rounded-5 border-primary-subtle p-2 position-absolute top-100 start-50 translate-middle bg-white z-3">
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <IoLogoInstagram />
                  </a>
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="guiderDesc pt-5 pb-2 bg-light w-100 position-relative">
                <h2 className="text-center">Full Name</h2>
                <p className="text-center">Designation</p>
              </div>
            </div>
          </div>
          <div className="guider col-lg-3 col-md-6 overflow-hidden px-3 my-0">
            <div className="d-flex flex-column border rounded-3  overflow-hidden">
              <div className="position-relative w-100">
                <div className="w-100 overflow-hidden position-relative img-container">
                  <img src={guide1} alt="" className="w-100" />
                </div>
                <div className=" d-flex justify-content-around gap-1 border border-1 rounded-5 border-primary-subtle p-2 position-absolute top-100 start-50 translate-middle bg-white z-3">
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <IoLogoInstagram />
                  </a>
                  <a
                    href=""
                    className="btn btn-square border border-2 rounded-circle text-light bg-dark pb-2"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="guiderDesc pt-5 pb-2 bg-light w-100 position-relative">
                <h2 className="text-center">Full Name</h2>
                <p className="text-center">Designation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TravelGuide;
