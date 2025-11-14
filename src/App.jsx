import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";   

import Testimonial from "./pages/Testimonial";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Guides from "./pages/Guides";
import Gallery from "./pages/Gallery";
import Destination from "./pages/Destination";
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import Travels from "./components/typeOfTravels/Travels"

function App(){
	return(
		<>
			<Routes >
				<Route path="/travels" element={<Travels />} />
				<Route path="/" element={<Home/>} />
				<Route path="/contact" element={<Contact/>} />
				<Route path="/destination" element={<Destination />} />
				<Route path="/testimonial" element={<Testimonial />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/services" element={<OurServices />} />
				<Route path="/guides" element={<Guides />} />
				<Route path="/gallery" element={<Gallery/>} />
			</Routes>
			
		</>
	)
}

export default App;