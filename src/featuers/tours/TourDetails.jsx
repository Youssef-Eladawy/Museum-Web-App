import { useNavigate, useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaClock,
  FaStar,
  FaUser,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { useFetchTour } from "./toursHooks";

export default function TourDetails() {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const { tour, isLoading, isError } = useFetchTour(tourId);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-primary text-lg font-semibold">
            Loading tour details...
          </p>
        </div>
      </div>
    );

  if (isError || !tour)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <FaInfoCircle className="text-red-500 text-5xl mx-auto mb-4" />
          <p className="text-red-500 text-xl font-semibold">
            Failed to load tour details.
          </p>
        </div>
      </div>
    );

  return (
    <div className="bg-gray-50 font-primary">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-3 text-sm font-medium">
              <FaMapMarkerAlt className="text-primary" />
              <span className="uppercase tracking-wide">{tour.location}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 max-w-3xl">
              {tour.title}
            </h1>
            {tour.shortdescription && (
              <p className="text-base sm:text-lg text-gray-200 max-w-2xl">
                {tour.shortdescription}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tour Overview */}
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                About This Tour
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {tour.description}
              </p>
            </div>

            {/* Tour Highlights */}
            {tour.highlights && tour.highlights.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  Tour Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary mt-1 shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {tour.gallery && tour.gallery.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  Photo Gallery
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tour.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-xl group aspect-video"
                    >
                      <img
                        src={img}
                        alt={`Tour gallery ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What to Bring */}
            {tour.broughts && tour.broughts.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  What to Bring
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tour.broughts.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              {/* Price */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-600 text-sm mb-1">From</p>
                <p className="text-4xl font-bold text-primary">${tour.price}</p>
                <p className="text-gray-500 text-sm mt-1">per person</p>
              </div>

              {/* Tour Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <FaCalendarAlt className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Date
                    </p>
                    <p className="font-semibold text-sm">
                      {new Date(tour.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <FaClock className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Duration
                    </p>
                    <p className="font-semibold text-sm">{tour.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <FaUserFriends className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Availability
                    </p>
                    <p className="font-semibold text-sm">
                      {tour.availableSeats} seats available
                    </p>
                  </div>
                </div>

                {tour.guidename && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <FaUser className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        Tour Guide
                      </p>
                      <p className="font-semibold text-sm">{tour.guidename}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Book Button */}
              <button
                onClick={() => navigate(`/confirmBooking/${tour.id}`)}
                className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Book This Tour
              </button>
              {/* Additional Info */}
              <div className="mt-6 space-y-2 text-xs text-gray-500 text-center">
                <p className="flex items-center justify-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Free cancellation up to 24 hours
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Instant confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
