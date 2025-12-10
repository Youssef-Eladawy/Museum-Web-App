import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaStar } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import { useFetchHomeTours } from "./toursHooks";
import MainHeader from "../../components/MainHeader";
import { Link } from "react-router-dom";
import TourCard from "../../components/TourCard";

export default function Tours() {
  const { tours, isLoading, isError } = useFetchHomeTours();

  // Handle loading and error states
  if (isLoading) {
    return (
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white font-primary text-center">
        <MainHeader title="Tours" />
        <h2 className="mt-6 text-xl sm:text-2xl text-grey">Loading tours...</h2>
      </section>
    );
  }
  if (isError || !tours) {
    return (
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white font-primary text-center">
        <MainHeader title="Tours" />
        <h2 className="mt-6 text-xl sm:text-2xl text-red-600">
          Could not load tours.
        </h2>
      </section>
    );
  }

  // If no tours are found
  if (tours.length === 0) {
    return (
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white font-primary text-center">
        <MainHeader title="Tours" />
        <h2 className="mt-6 text-xl sm:text-2xl text-grey">
          No tours available.
        </h2>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white font-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <MainHeader title="Tours" />

          <h2 className="text-3xl font-bold mt-2">Our Awesome Tours</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour) => (
            <TourCard tour={tour} key={tour.id} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/tours"
            className="group bg-primary text-white px-12 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <span>Explore All Tours</span>
            <HiArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
