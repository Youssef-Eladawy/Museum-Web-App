import HeadSection from "../components/shared/headSection/HeadSection";
import TravelSection from "../components/typeOfTravels/TravelSection";

function Travels(){
    return(
        <>
            <HeadSection path={"Travels"} title={"Travels Category"}/>
            <TravelSection/>
        </>
    )
}

export default Travels;