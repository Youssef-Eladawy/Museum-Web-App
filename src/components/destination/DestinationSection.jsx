// import "./Destination.css";
// import SectionTitle from "../shared/sectionTitle/SectionTitle";
// import ButtonsBelt from "../shared/buttonsBelt/ButtosBelt";
// // Photos
// import Canada from "./images/Canada2.jpg";
// import Egypt1 from "./images/Egypt1.jpg";
// import Egypt2 from "./images/Egypt2.jpg";
// import China from "./images/China.jpg";
// import China2 from "./images/China1.jpg";
// import Europe from "./images/Paris2.jpg";
// import Europe2 from "./images/Europe2.jpg";
// import Singapore from "./images/Singapore3.jpg";

// function removeCard() {
//     let card = document.querySelector(`.bgCard`);
//     card.remove();
// }

// function card(e) {
//     let src = e.target.dataset.imgsrc;

//     let bg = document.createElement(`div`);
//     bg.className = `bgCard position-fixed`;
//     bg.addEventListener(`click`, removeCard);

//     let cardDiv = document.createElement(`div`);
//     cardDiv.className = `imgCard p-2 bg-light`;

//     let img = document.createElement(`img`);
//     img.src = src;
//     img.alt = "image";

//     cardDiv.append(img);
//     bg.append(cardDiv);

//     document.body.append(bg);
// }

// function DestinationSection() {
//     let images = [
//         { src: Canada, city: "Toronto", country: "canada" },
//         { src: Egypt1, city: "Aswan", country: "egypt" },
//         { src: Egypt2, city: "Islamic Cairo", country: "egypt" },
//         { src: China, city: "Great wall of China", country: "china" },
//         { src: China2, city: "Shanghai", country: "china" },
//         { src: Europe, city: "Paris", country: "europe" },
//         { src: Europe2, city: "London", country: "europe" },
//         { src: Singapore, city: "Marina Bay", country: "singapore" },
//     ];
//     return (
//         <>
//             <div className="body">
//                 <SectionTitle
//                     title={"Destination"}
//                     sentence={"Popular Destination"}
//                 />
//                 <div className="container">
//                     <ButtonsBelt
//                         buttons={[
//                             { content: "All", attr: "all" },
//                             { content: "Egypt", attr: "egypt" },
//                             { content: "China", attr: "china" },
//                             { content: "Europe", attr: "europe" },
//                             { content: "Canada", attr: "canada" },
//                             { content: "Singapore", attr: "singapore" },
//                         ]}
//                         editClasses={".photos .image"}
//                         tagsDataSet={"country"}
//                     />
//                     <div className="photos row mb-4 justify-content-center align-items-center">
//                         {images.map((img, index) => (
//                             <div
//                                 className="image pb-4 col-md-6 col-lg-4"
//                                 data-country={img.country}
//                                 key={index}>
//                                 <div className="img-cont">
//                                     <div
//                                         className="seePhoto position-absolute p-3 rounded-pill"
//                                         data-imgsrc={img.src}
//                                         onClick={card}>
//                                         <i
//                                             className="bi position-relative bi-plus-square"
//                                             data-imgsrc={img.src}></i>
//                                     </div>
//                                     <div
//                                         className="imgDesc position-absolute text-light fw-bold"
//                                         data-city={img.city}>
//                                         {img.city}
//                                     </div>
//                                     <img
//                                         src={img.src}
//                                         alt={img.country.toUpperCase()}
//                                         className="w-100"
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default DestinationSection;

import SectionTitle from "../shared/sectionTitle/SectionTitle";
import ButtonsBelt from "../shared/buttonsBelt/ButtosBelt";

// Photos
import Canada from "./images/Canada2.jpg";
import Egypt1 from "./images/Egypt1.jpg";
import Egypt2 from "./images/Egypt2.jpg";
import China from "./images/China.jpg";
import China2 from "./images/China1.jpg";
import Europe from "./images/Paris2.jpg";
import Europe2 from "./images/Europe2.jpg";
import Singapore from "./images/Singapore3.jpg";

function removeCard() {
    const card = document.querySelector(`.bgCard`);
    card?.remove();
}

function card(e) {
    const src = e.target.dataset.imgsrc;

    const bg = document.createElement("div");
    bg.className =
        "bgCard fixed inset-0 bg-black/50 z-50 flex items-center justify-center";
    bg.addEventListener("click", removeCard);

    const cardDiv = document.createElement("div");
    cardDiv.className = "imgCard relative w-4/5 lg:w-1/2";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "image";
    img.className = "w-full";

    cardDiv.append(img);
    bg.append(cardDiv);
    document.body.append(bg);
}

function DestinationSection() {
    const images = [
        { src: Canada, city: "Toronto", country: "canada" },
        { src: Egypt1, city: "Aswan", country: "egypt" },
        { src: Egypt2, city: "Islamic Cairo", country: "egypt" },
        { src: China, city: "Great wall of China", country: "china" },
        { src: China2, city: "Shanghai", country: "china" },
        { src: Europe, city: "Paris", country: "europe" },
        { src: Europe2, city: "London", country: "europe" },
        { src: Singapore, city: "Marina Bay", country: "singapore" },
    ];

    return (
        <div className="body">
            <SectionTitle title="Destination" sentence="Popular Destination" />

            <div className="container mx-auto px-4 mt-8">
                <ButtonsBelt
                    buttons={[
                        { content: "All", attr: "all" },
                        { content: "Egypt", attr: "egypt" },
                        { content: "China", attr: "china" },
                        { content: "Europe", attr: "europe" },
                        { content: "Canada", attr: "canada" },
                        { content: "Singapore", attr: "singapore" },
                    ]}
                    editClasses={".photos .image"}
                    tagsDataSet={"country"}
                />

                <div className="photos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-8">
                    {images.map((img, index) => (
                        <div
                            className="image w-full relative overflow-hidden rounded-xl group"
                            data-country={img.country}
                            key={index}>
                            <img
                                src={img.src}
                                alt={img.country.toUpperCase()}
                                className="w-full h-auto object-cover transition-transform duration-200 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-main/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

                            {/* See photo button */}
                            <div
                                className="seePhoto absolute top-4 -right-20 p-3 rounded-full bg-main text-white cursor-pointer transition-all duration-200 group-hover:right-4 flex items-center justify-center z-10"
                                data-imgsrc={img.src}
                                onClick={card}>
                                <i
                                    className="bi bi-plus-square text-2l"
                                    data-imgsrc={img.src}></i>
                            </div>

                            {/* City description */}
                            <div className="imgDesc absolute -bottom-16 left-4 text-white font-bold transition-all duration-200 group-hover:bottom-4">
                                {img.city}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DestinationSection;
