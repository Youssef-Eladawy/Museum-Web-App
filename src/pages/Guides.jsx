import HeadSection from "../components/shared/headSection/HeadSection";
import TravelGuide from "../components/TravelGuide";

function Guides() {
    return ( 
        <>  
            <HeadSection path={"guides"} title={"Travel Guides"} />
            <TravelGuide />
        </>
     );
}

export default Guides;