import SectionTitle from "../shared/sectionTitle/SectionTitle";
import { useState } from "react";

function TravelSection() {
  const [activeCategory, setActiveCategory] = useState("national");

  const National = [
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      content: "Beach Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
      content: "Family Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&h=600&fit=crop",
      content: "History Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
      content: "Holiday Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
      content: "Road Tour",
    },
    {
      src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&h=600&fit=crop",
      content: "Weekend Tour",
    },
  ];

  return (
    <div className="px-4 pb-10">
      <SectionTitle
        title="Explore Travels"
        sentence="The World"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi."
      />

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          className={`rounded-full px-6 py-2 border border-primary transition-colors duration-200 ${
            activeCategory === "national"
              ? "bg-primary text-white"
              : "bg-transparent text-primary"
          }`}
          onClick={() => setActiveCategory("national")}
        >
          National Travel Category
        </button>
        <button
          className={`rounded-full px-6 py-2 border border-primary transition-colors duration-200 ${
            activeCategory === "international"
              ? "bg-primary text-white"
              : "bg-transparent text-primary"
          }`}
          onClick={() => setActiveCategory("international")}
        >
          International Travel Category
        </button>
      </div>

      {/* Photos Grid */}
      <div className="container mx-auto">
        {activeCategory === "national" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {National.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.content}
                  className="w-full h-72 object-cover transition-transform duration-200 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

                {/* Description */}
                <div className="absolute top-[calc(100%-3.5rem)] left-1/2 -translate-x-1/2 text-white font-bold text-2xl transition-all duration-500 group-hover:top-1/2 group-hover:-translate-y-1/2 whitespace-nowrap">
                  {image.content}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCategory === "international" && (
          <div className="text-center py-20">
            <p className="text-grey text-lg">
              International travel content coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TravelSection;
