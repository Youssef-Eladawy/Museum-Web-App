import { memo } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaStar } from "react-icons/fa";

const TourCard = memo(({ tour }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={
            tour.image ||
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
          }
          alt={tour.title}
          className="w-full h-52 sm:h-56 lg:h-60 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/40 transition-opacity duration-700"></div>

        {/* Price Badge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-white px-3 sm:px-4 py-1 rounded-b-lg text-xs sm:text-sm font-semibold shadow-lg z-10">
          ${Number(tour.price).toFixed(2)}
        </div>

        {/* Info Bar */}
        <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-sm text-white flex text-xs justify-between border-t border-white/30">
          <span className="flex items-center justify-center flex-1 border-r border-white/30 py-2 px-1">
            <FaMapMarkerAlt className="mr-1 shrink-0 text-xs" />
            <span className="truncate text-xs">{tour.location}</span>
          </span>
          <span className="flex items-center justify-center flex-1 border-r border-white/30 py-2 px-1">
            <FaCalendarAlt className="mr-1 shrink-0 text-xs" />
            <span className="truncate text-xs">
              {tour.date
                ? new Date(tour.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                : "TBA"}
            </span>
          </span>
          <span className="flex items-center justify-center flex-1 py-2 px-1">
            <FaUser className="mr-1 shrink-0 text-xs" />
            <span className="truncate text-xs">{tour.availableSeats}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h5 className="text-base sm:text-lg font-semibold mb-1 line-clamp-2">
          {tour.title}
        </h5>
        <small className="uppercase text-gray-500 block text-xs mb-2 line-clamp-1">
          {tour.shortDescription || "Explore amazing destinations"}
        </small>

        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-3">
          {tour.description || "No description provided."}
        </p>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-between gap-2 text-white py-3 text-xs sm:text-sm bg-primary mt-auto">
        <Link
          to={`/tours/${tour.id}`}
          className="flex-1 transition flex items-center justify-center font-semibold shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 text-white "
        >
          Read More
        </Link>
        <Link
          to={`/confirmBooking/${tour.id}`}
          className="flex-1 transition flex items-center justify-center font-semibold shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 text-white"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
});

TourCard.displayName = "TourCard";

export default TourCard;
