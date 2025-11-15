import HeadSection from "../components/shared/headSection/HeadSection";
import ToursList from "../featuers/tours/TourList";
import TourOperations from "../featuers/tours/ToursOperations";

function Tours() {
  return (
    <>
      <HeadSection title={"Tours"} />

      <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Explore Our Tours
            </h1>
            <p className="text-gray-600">
              Discover amazing destinations and book your next adventure
            </p>
          </div>

          {/* Filter & Sort Operations */}
          <div className="mb-8">
            <TourOperations />
          </div>

          {/* Tours List */}
          <ToursList />
        </div>
      </div>
    </>
  );
}

export default Tours;
