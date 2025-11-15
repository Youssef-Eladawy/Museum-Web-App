import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchTour } from "../tours/toursHooks";
import {
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaCheckCircle,
  FaCalendarAlt,
  FaPhone,
  FaUser,
  FaStickyNote,
} from "react-icons/fa";
import { useSession } from "../auth/authHooks";
import { useCreateBooking } from "./bookingsHooks";
import { Loader2 } from "lucide-react";
import Spinner from "../../components/Spinner";

export default function OnlineBooking() {
  const { tourId } = useParams();
  const { tour, isLoading: isTourLoading, isError } = useFetchTour(tourId);

  const { user } = useSession();

  const { createBooking, isCreating } = useCreateBooking();

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      seats: "1",
      notes: "",
    },
  });

  const seats = watch("seats");

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (tour) {
      setTotalPrice(Number(tour.price) * Number(seats));
    }
  }, [tour, seats]);

  function onSubmit(data) {
    const booking = {
      userId: user.id,
      tourId: tour.id,
      numSeats: Number(seats),
      totalPrice,
      status: "PENDING",
      notes: data.notes.trim() || null,
    };

    createBooking(booking);
  }

  if (isTourLoading) return <Spinner />;

  if (isError || !tour)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-500 text-xl font-semibold">Tour not found</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-primary font-semibold uppercase tracking-wide text-sm mb-2">
            Complete Your Booking
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Reserve Your Spot
          </h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Tour Summary Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-8">
              {/* Tour Image */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className="text-xl sm:text-2xl font-bold mb-1">
                    {tour.title}
                  </h2>
                  <p className="text-sm flex items-center gap-1">
                    <FaMapMarkerAlt /> {tour.location}
                  </p>
                </div>
              </div>

              {/* Tour Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Tour Details
                </h3>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <FaCalendarAlt className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Date</p>
                    <p className="font-semibold text-sm">
                      {new Date(tour.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <FaClock className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Duration</p>
                    <p className="font-semibold text-sm">{tour.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <FaDollarSign className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">
                      Price per person
                    </p>
                    <p className="font-semibold text-sm">${tour.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <FaUsers className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">
                      Available seats
                    </p>
                    <p className="font-semibold text-sm">
                      {tour.availableSeats} remaining
                    </p>
                  </div>
                </div>

                {/* What's Included */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    What's Included
                  </p>
                  <div className="space-y-2">
                    {[
                      "Professional tour guide",
                      "All entrance fees",
                      "Transportation",
                      "Travel insurance",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <FaCheckCircle className="text-green-500 text-xs shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Booking Information
              </h2>
              <p className="text-gray-600 mb-8">
                Please fill in your details to complete the booking
              </p>

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      disabled
                      defaultValue={user.fullName}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed transition"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      disabled
                      defaultValue={user.phoneNumber}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed transition"
                    />
                  </div>
                </div>

                {/* Number of Seats */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Travelers *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUsers className="text-gray-400" />
                    </div>
                    <select
                      {...register("seats", { required: true })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none bg-white"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                    </select>
                  </div>
                </div>

                {/* Special Notes */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Notes (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-4 pointer-events-none">
                      <FaStickyNote className="text-gray-400" />
                    </div>
                    <textarea
                      placeholder="Any special requests or dietary requirements..."
                      {...register("notes")}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition h-32 resize-none"
                    />
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>Price per person</span>
                    <span className="font-semibold">${tour.price}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Number of travelers</span>
                    <span className="font-semibold">{seats}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Total Amount
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit(onSubmit)}
                  disabled={isCreating}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-primary"
                >
                  {isCreating ? (
                    <div className="flex justify-center items-center">
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </div>
                  ) : (
                    "Book now"
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  By booking, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
