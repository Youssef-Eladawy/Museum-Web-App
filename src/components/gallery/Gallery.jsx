import HeadSection from "../shared/headSection/HeadSection";
import SectionTitle from "../shared/sectionTitle/SectionTitle";
import ButtonsBelt from "../shared/buttonsBelt/ButtosBelt";
import "./Gallery.css";
//Photos
import world1 from "./images/Paris2.jpg";
import world2 from "./images/Europe2.jpg";
import summer1 from "./images/summerTour.jpg";
import summer2 from "./images/summerTour2.jpg";
import ocean1 from "./images/oceanTour.jpg";
import ocean2 from "./images/oceanTour2.jpg";
import sport1 from "./images/sportTour1.jpg";
import sport2 from "./images/sportTour2.jpg";

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

function Gallery() {
    const images = [
        { src: world1, type: "worldTour" , content: "World Tour"},
        { src: world2, type: "worldTour" , content: "World Tour"},
        { src: summer1, type: "summerTour" , content: "Summer Tour"},
        { src: summer2, type: "summerTour" , content: "Summer Tour"},
        { src: ocean1, type: "oceanTour" , content: "Ocean Tour"},
        { src: ocean2, type: "oceanTour" , content: "Ocean Tour"},
        { src: sport1, type: "sportTour" , content: "Sport Tour"},
        { src: sport2, type: "sportTour" , content: "Sport Tour"},
    ];

    return (
        <>
            <HeadSection title={"Our Gallery"} path={"gallery"} />
            <div className="body">
                <SectionTitle
                    title={"Our Gallery"}
                    sentence={"Tourism & Traveling Gallery."}
                    desc={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi."
                    }
                />
                <ButtonsBelt
                    buttons={[
                        { content: "All", attr: "all" },
                        { content: "World Tour", attr: "worldTour" },
                        { content: "Ocean Tour", attr: "oceanTour" },
                        { content: "Summer Tour", attr: "summerTour" },
                        { content: "Sport Tour", attr: "sportTour" },
                    ]}
                    editClasses={".photos .image"}
                    tagsDataSet={"type"}
                />
                <div className="Gallery-photos row pb-5 justify-content-center align-items-center mx-2">
                    {images.map((img, index) => (
                            <div
                                className="image pb-2 col-md-6 col-lg-3"
                                data-type={img.type}
                                key={index}>
                                <div className="img-cont">
                                    <div
                                        className="seePhoto position-absolute"
                                        data-imgsrc={img.src}
                                        onClick={card}>
                                        <i
                                            className="bi bi-plus"
                                            data-imgsrc={img.src}></i>
                                    </div>
                                    <div
                                        className="imgDesc position-absolute text-light fw-bold"
                                        data-type={img.type}>
                                        {img.content}
                                    </div>
                                    <img
                                        src={img.src}
                                        alt={img.type.toUpperCase()}
                                        className="w-100"
                                    />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default Gallery;
