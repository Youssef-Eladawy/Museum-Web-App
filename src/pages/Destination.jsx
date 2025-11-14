import HeadSection from "../components/shared/headSection/HeadSection";
import DestinationSection from "../components/destination/DestinationSection";

function Destination() {
    return (
        <>
            <HeadSection title={"Travel Destination"} path={"Destination"} />
            <DestinationSection />
        </>
    );
}

export default Destination;
