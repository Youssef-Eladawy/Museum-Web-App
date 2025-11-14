import Slider from "react-slick";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/componentsStyles.css";
import SectionTitle from "./shared/sectionTitle/SectionTitle";

function SampleNextArrow({ onClick }) {
  return (
    <button className="arrow-btn next" onClick={onClick}>
      <FaArrowRight />
    </button>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <button className="arrow-btn prev" onClick={onClick}>
      <FaArrowLeft />
    </button>
  );
}

function TestimonialSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 700,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "John Abraham",
      location: "New York, USA",
      img: "https://randomuser.me/api/portraits/women/60.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta.",
    },
    {
      id: 2,
      name: "John Abraham",
      location: "New York, USA",
      img: "https://randomuser.me/api/portraits/men/70.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta.",
    },
    {
      id: 3,
      name: "John Abraham",
      location: "New York, USA",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta.",
    },
    {
      id: 4,
      name: "John Abraham",
      location: "New York, USA",
      img: "https://randomuser.me/api/portraits/men/40.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta.",
    },
  ];

  return (
    <div className="testimonial-section py-5 container text-center my-5 position-relative">
      <SectionTitle title={"TESTIMONIAL"} sentence={"Our Clients Say!!!"} />

      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card px-3">
            <div className="card-content p-4 rounded-4 mb-5 pb-5">
              <p>{t.text}</p>
              <img src={t.img} alt={t.name} className="client-img p-1" />
            </div>
            <h5 className="">{t.name}</h5>
            <p className="text-muted mb-0">{t.location}</p>
            <div className="stars text-primary fs-5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
