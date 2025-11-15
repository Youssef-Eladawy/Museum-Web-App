import HeadSection from '../../shared/headSection/HeadSection';
import TravelGuide from "../component/TravelGuide";

function Guides() {
    return ( 
        <>  
            <HeadSection path={"guides"} title={"Travel Guides"} />
            <TravelGuide />
        </>
     );
}

export default Guides;