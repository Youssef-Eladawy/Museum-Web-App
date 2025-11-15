import { Plus, X } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import ButtonsBelt from "../../shared/buttonsBelt/ButtonsBelt";

function GallerySection() {
  const [modalImage, setModalImage] = useState(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
      type: "worldTour",
      content: "World Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop",
      type: "worldTour",
      content: "World Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
      type: "summerTour",
      content: "Summer Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      type: "summerTour",
      content: "Summer Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      type: "oceanTour",
      content: "Ocean Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
      type: "oceanTour",
      content: "Ocean Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
      type: "sportTour",
      content: "Sport Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
      type: "sportTour",
      content: "Sport Tour",
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

      <div className="Gallery-photos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-2">
        {images.map((img, index) => (
          <div
            className="image relative overflow-hidden rounded-xl group cursor-pointer"
            data-type={img.type}
            key={index}
            onClick={() => openModal(img.src)}
          >
            <img
              src={img.src}
              alt={img.type.toUpperCase()}
              className="w-full h-64 object-cover transition-transform duration-200 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

            {/* See photo button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 p-3 rounded-full bg-primary text-white flex items-center justify-center z-10 transition-all duration-200">
              <Plus className="w-12 h-12" />
            </div>

            {/* Description */}
            <div className="absolute -bottom-16 left-4 text-white font-bold transition-all duration-200 group-hover:bottom-4">
              {img.content}
            </div>
          </div>
        ))}
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
              alt="Gallery"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default GallerySection;
