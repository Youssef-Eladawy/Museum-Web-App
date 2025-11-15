import { Plus, X } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import ButtonsBelt from "../../shared/buttonsBelt/ButtonsBelt";

function DestinationSection() {
  const [modalImage, setModalImage] = useState(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=600&fit=crop",
      city: "Toronto",
      country: "canada",
    },
    {
      src: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=600&fit=crop",
      city: "Aswan",
      country: "egypt",
    },
    {
      src: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=600&fit=crop",
      city: "Islamic Cairo",
      country: "egypt",
    },
    {
      src: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop",
      city: "Great Wall of China",
      country: "china",
    },
    {
      src: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=800&h=600&fit=crop",
      city: "Shanghai",
      country: "china",
    },
    {
      src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
      city: "Paris",
      country: "europe",
    },
    {
      src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
      city: "London",
      country: "europe",
    },
    {
      src: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
      city: "Marina Bay",
      country: "singapore",
    },
  ];

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="pb-10">
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
              className="image w-full relative overflow-hidden rounded-xl group cursor-pointer"
              data-country={img.country}
              key={index}
            >
              <img
                src={img.src}
                alt={img.country.toUpperCase()}
                className="w-full h-72 object-cover transition-transform duration-200 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

              {/* See photo button */}
              <div
                className="absolute top-4 -right-20 p-3 rounded-full bg-primary text-white cursor-pointer transition-all duration-200 group-hover:right-4 flex items-center justify-center z-10"
                onClick={() => openModal(img.src)}
              >
                <Plus className="w-6 h-6" />
              </div>

              {/* City description */}
              <div className="absolute -bottom-16 left-4 text-white font-bold text-xl transition-all duration-200 group-hover:bottom-4">
                {img.city}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-8 text-white hover:text-grey transition-colors z-[60]"
            onClick={closeModal}
          >
            <X className="w-10 h-10" />
          </button>

          {/* Modal Image */}
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={modalImage}
              alt="Destination"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DestinationSection;
