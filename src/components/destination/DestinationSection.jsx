import "./Destination.css";
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
    let card = document.querySelector(`.bgCard`);
    card.remove();
}

function card(e) {
    let src = e.target.dataset.imgsrc;

    let bg = document.createElement(`div`);
    bg.className = `bgCard position-fixed`;
    bg.addEventListener(`click`, removeCard);

    let cardDiv = document.createElement(`div`);
    cardDiv.className = `imgCard p-2 bg-light`;

    let img = document.createElement(`img`);
    img.src = src;
    img.alt = "image";

    cardDiv.append(img);
    bg.append(cardDiv);

    document.body.append(bg);
}


function DestinationSection() {
    let images = [
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
        <>
            <div className="body">
                <SectionTitle
                    title={"Destination"}
                    sentence={"Popular Destination"}
                />
                <div className="container">
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
                    <div className="photos row mb-4 justify-content-center align-items-center">
                        {images.map((img, index) => (
                            <div
                                className="image pb-4 col-md-6 col-lg-4"
                                data-country={img.country}
                                key={index}>
                                <div className="img-cont">
                                    <div
                                        className="seePhoto position-absolute p-3 rounded-pill"
                                        data-imgsrc={img.src}
                                        onClick={card}>
                                        <i
                                            className="bi position-relative bi-plus-square"
                                            data-imgsrc={img.src}></i>
                                    </div>
                                    <div
                                        className="imgDesc position-absolute text-light fw-bold"
                                        data-city={img.city}>
                                        {img.city}
                                    </div>
                                    <img
                                        src={img.src}
                                        alt={img.country.toUpperCase()}
                                        className="w-100"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DestinationSection;
