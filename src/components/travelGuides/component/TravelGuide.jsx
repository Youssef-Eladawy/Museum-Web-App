
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import guide1 from "../../../assets/guide-1.jpg";

import '../../../styles/componentsStyles.css'
import SectionTitle from "../../shared/sectionTitle/SectionTitle";

function TravelGuide() {
    return ( 
    <>
              <section className="travelGuideSection w-full flex flex-col justify-center items-center px-5 max-w-7xl mx-auto my-5">
        <SectionTitle title={"TOUR GUIDE"} sentence={"Meet Our Guide"} />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="guider overflow-hidden px-3">
            <div className="flex flex-col border border-gray-300 rounded-3xl overflow-hidden">
              <div className="relative w-full">
                <div className="w-full overflow-hidden relative img-container">
                  <img src={guide1} alt="" className="w-full" />
                </div>
                <div className="flex justify-around gap-1 border border-gray-200 rounded-full p-2 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-10">
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <IoLogoInstagram />
                  </a>
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="guiderDesc pt-9 pb-2 bg-gray-100 w-full relative">
                <h2 className="text-center font-bold">Full Name</h2>
                <p className="text-center text-gray-600">Designation</p>
              </div>
            </div>
          </div>
          <div className="guider overflow-hidden px-3">
            <div className="flex flex-col border border-gray-300 rounded-3xl overflow-hidden">
              <div className="relative w-full">
                <div className="w-full overflow-hidden relative img-container">
                  <img src={guide1} alt="" className="w-full" />
                </div>
                <div className="flex justify-around gap-1 border border-gray-200 rounded-full p-2 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-10">
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <IoLogoInstagram />
                  </a>
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="guiderDesc pt-9 pb-2 bg-gray-100 w-full relative">
                <h2 className="text-center font-bold">Full Name</h2>
                <p className="text-center text-gray-600">Designation</p>
              </div>
            </div>
          </div>
          <div className="guider overflow-hidden px-3">
            <div className="flex flex-col border border-gray-300 rounded-3xl overflow-hidden">
              <div className="relative w-full">
                <div className="w-full overflow-hidden relative img-container">
                  <img src={guide1} alt="" className="w-full" />
                </div>
                <div className="flex justify-around gap-1 border border-gray-200 rounded-full p-2 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-10">
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <IoLogoInstagram />
                  </a>
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="guiderDesc pt-9 pb-2 bg-gray-100 w-full relative">
                <h2 className="text-center font-bold">Full Name</h2>
                <p className="text-center text-gray-600">Designation</p>
              </div>
            </div>
          </div>
          <div className="guider overflow-hidden px-3">
            <div className="flex flex-col border border-gray-300 rounded-3xl overflow-hidden">
              <div className="relative w-full">
                <div className="w-full overflow-hidden relative img-container">
                  <img src={guide1} alt="" className="w-full" />
                </div>
                <div className="flex justify-around gap-1 border border-gray-200 rounded-full p-2 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-10">
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <IoLogoInstagram />
                  </a>
                  <a
                    href=""
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-gray-800"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="guiderDesc pt-9 pb-2 bg-gray-100 w-full relative">
                <h2 className="text-center font-bold">Full Name</h2>
                <p className="text-center text-gray-600">Designation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </> 
    );
}

export default TravelGuide;