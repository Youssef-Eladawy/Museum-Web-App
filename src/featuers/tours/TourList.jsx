import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaStar } from "react-icons/fa";
import { useGetTours } from "./toursHooks";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
import TourCard from "../../components/TourCard";

function ToursList() {
  const { tours, count, isLoading, error } = useGetTours();

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg font-medium">
          Failed to load tours. Please try again later.
        </p>
      </div>
    );

  if (!tours || tours.length === 0)
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No tours found.</p>
      </div>
    );

  return (
    <div className="space-y-8">
      {/* Tours Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tours.map((tour) => (
          <TourCard tour={tour} key={tour.id} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination count={count} />
    </div>
  );
}

export default ToursList;
