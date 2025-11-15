// import "./Travels.css";
// import SectionTitle from "../shared/sectionTitle/SectionTitle";
// import ButtonsBelt from "../shared/buttonsBelt/ButtosBelt";
// //photos
// import NatBeach from "./images/Nat-beach2.jpg";
// import NatFamily from "./images/Nat-family.jpg";
// import NatHist from "./images/Nat-hist.jpg";
// import NatHoli from "./images/Nat-holi.jpg";
// import NatRoad from "./images/Nat-road.jpg";
// import NatWeek from "./images/Nat-week.jpg";

// function TravelSection() {
//     function show(e) {
//         let lastActive = document.querySelector(`button.active`);
//         lastActive.classList.remove("active");
//         e.target.classList.add("active");

//         let natio = document.querySelector(`.national`);
//         let internatio = document.querySelector(`.international`);

//         if (e.target.dataset.attr === "international") {
//             natio.classList.add("d-none");

//             internatio.classList.remove("d-none");
//             internatio.classList.add("d-block");
//         } else if (e.target.dataset.attr === "national") {
//             internatio.classList.add("d-none");

//             natio.classList.remove("d-none");
//             natio.classList.add("d-block");
//         }
//     }

//     const National = [
//         { src: NatBeach, content: "Beach Tour", alt: "Beach Tour" },
//         { src: NatFamily, content: "Family Tour", alt: "Family Tour" },
//         { src: NatHist, content: "History Tour", alt: "History Tour" },
//         { src: NatHoli, content: "Holiday Tour", alt: "Holiday Tour" },
//         { src: NatRoad, content: "Road Tour", alt: "Road Tour" },
//         { src: NatWeek, content: "Weekend Tour", alt: "Weekend Tour" },
//     ];

//     return (
//         <>
//             <SectionTitle
//                 title={"Explore Travels"}
//                 sentence={"The World"}
//                 desc={
//                     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi."
//                 }
//             />

//             <div className="travelsBelt d-flex justify-content-evenly flex-wrap gap-4 mb-4">
//                 <button
//                     onClick={show}
//                     data-attr="national"
//                     className="rounded-pill p-2 active">
//                     National Travel Category
//                 </button>
//                 <button
//                     onClick={show}
//                     data-attr="international"
//                     className="rounded-pill p-2">
//                     International Travel Category
//                 </button>
//             </div>

//             <div className="TravelsPhoto container">
//                 <div className="national">
//                     <div className="Nat-images row mb-4 justify-content-center align-items-center">
//                         {National.map((image, index) => (
//                             <div
//                                 className="image pb-4 col-md-6 col-lg-4"
//                                 key={index}>
//                                 <div className="img-cont position-relative overflow-hidden rounded-3">
//                                     <img
//                                         src={image.src}
//                                         alt={image.src}
//                                         className="w-100"
//                                     />
//                                     <div className="imgDesc position-absolute fs-3">
//                                         {image.content}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="international d-none"></div>
//             </div>
//         </>
//     );
// }

// export default TravelSection;

import SectionTitle from "../shared/sectionTitle/SectionTitle";
import { useState } from "react";

// Photos
import NatBeach from "./images/Nat-beach2.jpg";
import NatFamily from "./images/Nat-family.jpg";
import NatHist from "./images/Nat-hist.jpg";
import NatHoli from "./images/Nat-holi.jpg";
import NatRoad from "./images/Nat-road.jpg";
import NatWeek from "./images/Nat-week.jpg";

function TravelSection() {
    const [activeCategory, setActiveCategory] = useState("national");

    const National = [
        { src: NatBeach, content: "Beach Tour" },
        { src: NatFamily, content: "Family Tour" },
        { src: NatHist, content: "History Tour" },
        { src: NatHoli, content: "Holiday Tour" },
        { src: NatRoad, content: "Road Tour" },
        { src: NatWeek, content: "Weekend Tour" },
    ];

    return (
        <div className="px-4">
            <SectionTitle
                title="Explore Travels"
                sentence="The World"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi."
            />

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
                <button
                    className={`rounded-full px-4 py-2 border border-main transition-colors duration-200 ${
                        activeCategory === "national"
                            ? "bg-main text-white"
                            : "bg-transparent text-main"
                    }`}
                    onClick={() => setActiveCategory("national")}>
                    National Travel Category
                </button>
                <button
                    className={`rounded-full px-4 py-2 border border-main transition-colors duration-200 ${
                        activeCategory === "international"
                            ? "bg-main text-white"
                            : "bg-transparent text-main"
                    }`}
                    onClick={() => setActiveCategory("international")}>
                    International Travel Category
                </button>
            </div>

            {/* Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCategory === "national" &&
                    National.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-xl group">
                            <img
                                src={image.src}
                                alt={image.content}
                                className="w-full h-auto object-cover transition-transform duration-200 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-main/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

                            {/* Description */}
                            <div className="absolute top-[calc(100%-3.5rem)] left-1/2 -translate-x-1/2 text-white font-bold text-xl transition-all duration-500 group-hover:top-1/2 group-hover:-translate-y-1/2">
                                {image.content}
                            </div>
                        </div>
                    ))}

                {activeCategory === "international" && (
                    <div className="col-span-full text-center py-10 text-gray-500">
                        International Travel content here.
                    </div>
                )}
            </div>
        </div>
    );
}

export default TravelSection;
