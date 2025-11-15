// import SectionTitle from "../shared/sectionTitle/SectionTitle";
// import ButtonsBelt from "../shared/buttonsBelt/ButtosBelt";
// import "./Gallery.css";
// //Photos
// import world1 from "./images/Paris2.jpg";
// import world2 from "./images/Europe2.jpg";
// import summer1 from "./images/summerTour.jpg";
// import summer2 from "./images/summerTour2.jpg";
// import ocean1 from "./images/oceanTour.jpg";
// import ocean2 from "./images/oceanTour2.jpg";
// import sport1 from "./images/sportTour1.jpg";
// import sport2 from "./images/sportTour2.jpg";

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

// function GallerySection() {
//     const images = [
//         { src: world1, type: "worldTour", content: "World Tour" },
//         { src: world2, type: "worldTour", content: "World Tour" },
//         { src: summer1, type: "summerTour", content: "Summer Tour" },
//         { src: summer2, type: "summerTour", content: "Summer Tour" },
//         { src: ocean1, type: "oceanTour", content: "Ocean Tour" },
//         { src: ocean2, type: "oceanTour", content: "Ocean Tour" },
//         { src: sport1, type: "sportTour", content: "Sport Tour" },
//         { src: sport2, type: "sportTour", content: "Sport Tour" },
//     ];
//     return (
//         <>
//             <div className="body">
//                 <SectionTitle
//                     title={"Our Gallery"}
//                     sentence={"Tourism & Traveling Gallery."}
//                     desc={
//                         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi."
//                     }
//                 />
//                 <ButtonsBelt
//                     buttons={[
//                         { content: "All", attr: "all" },
//                         { content: "World Tour", attr: "worldTour" },
//                         { content: "Ocean Tour", attr: "oceanTour" },
//                         { content: "Summer Tour", attr: "summerTour" },
//                         { content: "Sport Tour", attr: "sportTour" },
//                     ]}
//                     editClasses={".Gallery-photos .image"}
//                     tagsDataSet={"type"}
//                 />
//                 <div className="Gallery-photos row pb-5 justify-content-center align-items-center mx-2">
//                     {images.map((img, index) => (
//                         <div
//                             className="image pb-2 col-md-6 col-lg-3"
//                             data-type={img.type}
//                             key={index}>
//                             <div className="img-cont">
//                                 <div
//                                     className="seePhoto position-absolute"
//                                     data-imgsrc={img.src}
//                                     onClick={card}>
//                                     <i
//                                         className="bi bi-plus"
//                                         data-imgsrc={img.src}></i>
//                                 </div>
//                                 <div
//                                     className="imgDesc position-absolute text-light fw-bold"
//                                     data-type={img.type}>
//                                     {img.content}
//                                 </div>
//                                 <img
//                                     src={img.src}
//                                     alt={img.type.toUpperCase()}
//                                     className="w-100"
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default GallerySection;

import SectionTitle from "../shared/sectionTitle/SectionTitle";
import ButtonsBelt from "../shared/buttonsBelt/ButtosBelt";

// Photos
import world1 from "./images/Paris2.jpg";
import world2 from "./images/Europe2.jpg";
import summer1 from "./images/summerTour.jpg";
import summer2 from "./images/summerTour2.jpg";
import ocean1 from "./images/oceanTour.jpg";
import ocean2 from "./images/oceanTour2.jpg";
import sport1 from "./images/sportTour1.jpg";
import sport2 from "./images/sportTour2.jpg";

function removeCard() {
    const card = document.querySelector(".bgCard");
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

function GallerySection() {
    const images = [
        { src: world1, type: "worldTour", content: "World Tour" },
        { src: world2, type: "worldTour", content: "World Tour" },
        { src: summer1, type: "summerTour", content: "Summer Tour" },
        { src: summer2, type: "summerTour", content: "Summer Tour" },
        { src: ocean1, type: "oceanTour", content: "Ocean Tour" },
        { src: ocean2, type: "oceanTour", content: "Ocean Tour" },
        { src: sport1, type: "sportTour", content: "Sport Tour" },
        { src: sport2, type: "sportTour", content: "Sport Tour" },
    ];

    return (
        <div className="body">
            <SectionTitle
                title="Our Gallery"
                sentence="Tourism & Traveling Gallery."
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi."
            />

            <ButtonsBelt
                buttons={[
                    { content: "All", attr: "all" },
                    { content: "World Tour", attr: "worldTour" },
                    { content: "Ocean Tour", attr: "oceanTour" },
                    { content: "Summer Tour", attr: "summerTour" },
                    { content: "Sport Tour", attr: "sportTour" },
                ]}
                editClasses={".Gallery-photos .image"}
                tagsDataSet={"type"}
            />

            <div className="Gallery-photos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 mx-2">
                {images.map((img, index) => (
                    <div
                        className="image relative overflow-hidden rounded-xl group"
                        data-type={img.type}
                        key={index}>
                        <img
                            src={img.src}
                            alt={img.type.toUpperCase()}
                            className="w-full h-auto object-cover transition-transform duration-200 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-main/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

                        {/* See photo button */}
                        <div
                            className="seePhoto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 p-3 rounded-full bg-main text-white cursor-pointer flex items-center justify-center z-10 transition-all duration-200"
                            data-imgsrc={img.src}
                            onClick={card}>
                            <i
                                className="bi bi-plus text-5xl"
                                data-imgsrc={img.src}></i>
                        </div>

                        {/* Description */}
                        <div className="imgDesc absolute -bottom-16 left-4 text-white font-bold transition-all duration-200 group-hover:bottom-4">
                            {img.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GallerySection;
