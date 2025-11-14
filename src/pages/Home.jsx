import AboutUsDesc from "../components/AboutUseDesc";
import OurServices from "./OurServices";
import DestinationSection from "../components/destination/DestinationSection";
import TravelGuide from "../components/TravelGuide";
import GallerySection from "../components/gallery/GallerySection";


function Home(){
    return(
        <>
            <AboutUsDesc/>
            <OurServices />
            <DestinationSection />
            <TravelGuide/>
            <GallerySection />
        </>
    )
}

export default Home