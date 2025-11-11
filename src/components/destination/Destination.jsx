import HeadSection from "../shared/headSection/HeadSection";
import SectionTitle from "../shared/sectionTitle/SectionTitle";
import "./Destination.css";
// Photos
import Canada from "./images/Canada2.jpg";
import Egypt1 from "./images/Egypt1.jpg";
import Egypt2 from "./images/Egypt2.jpg";
import China from "./images/China.jpg";
import China2 from "./images/China1.jpg";
import Europe from "./images/Paris2.jpg";
import Europe2 from "./images/Europe2.jpg";
import Singapore from "./images/Singapore3.jpg";

function show(e) {
    let photos = document.querySelectorAll(`.photos .image`);
    let lastActive = document.querySelector(`button.active`);

    lastActive.classList.remove("active");
    e.target.classList.add("active");

    if (e.target.dataset.country === "all") {
        for (const tag of photos) {
            tag.classList.add("d-block");
            tag.classList.remove("d-none");
        }
        return;
    }

    for (const tag of photos) {
        if (tag.dataset.country !== e.target.dataset.country) {
            tag.classList.add("d-none");
            tag.classList.remove("d-block");
        } else {
            tag.classList.add("d-block");
            tag.classList.remove("d-none");
        }
    }
}

// function wImgDesc() {
//     let imageDescs = document.querySelectorAll(`.imgDesc`);

//     for (let imageDesc of imageDescs) {
//         imageDesc.innerText = imageDesc.dataset.city;
//     }
// }
// wImgDesc();

function Destination() {
    let images = [
        { src: Canada, city: "Toronto", country:"canada" },
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
            <HeadSection title={"Travel Destination"} path={"Destination"} />
            <div className="body">
                <SectionTitle
                    title={"Destination"}
                    sentence={"Popular Destination"}
                />
                <div className="container">
                    <div className="belt d-flex justify-content-evenly flex-wrap gap-4">
                        <button
                            onClick={show}
                            data-country="all"
                            className="rounded-pill p-2 active">
                            All
                        </button>
                        <button
                            onClick={show}
                            data-country="egypt"
                            className="rounded-pill p-2">
                            Egypt
                        </button>
                        <button
                            onClick={show}
                            data-country="china"
                            className="rounded-pill p-2">
                            China
                        </button>
                        <button
                            onClick={show}
                            data-country="europe"
                            className="rounded-pill p-2">
                            Europe
                        </button>
                        <button
                            onClick={show}
                            data-country="canada"
                            className="rounded-pill p-2">
                            Canada
                        </button>
                        <button
                            onClick={show}
                            data-country="singapore"
                            className="rounded-pill p-2">
                            Singapore
                        </button>
                    </div>
                    <div className="photos row my-4 justify-content-center align-items-center">
                        {images.map((img,index) => (
                            <div
                                className="image pb-4 col-md-6 col-lg-4"
                                data-country={img.country}
                                key={index}>
                                <div className="img-cont">
                                    <div className="seePhoto position-absolute p-3 rounded-pill">
                                        <i className="bi position-relative bi-plus-square"></i>
                                    </div>
                                    <div
                                        className="imgDesc position-absolute text-light fw-bold"
                                        data-city={img.city}>{img.city}</div>
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

export default Destination;
