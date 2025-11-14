import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Testimonial from "./pages/Testimonial";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Guides from "./pages/Guides";
import Gallery from "./pages/Gallery";
import Destination from "./pages/Destination";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Subscription from "./components/Subscription";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./pages/404Page";
import Travels from "./pages/Travels";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
