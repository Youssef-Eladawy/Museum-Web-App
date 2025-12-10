import {
  Loader2,
  Calendar,
  MapPin,
  Users,
  Clock,
  DollarSign,
  Trash2,
} from "lucide-react";
import { useDeleteUserBooking, useGetUserBookings } from "./bookingsHooks";
import { useSession } from "../auth/authHooks";

export default function UserBookings() {
  const { user } = useSession({ requireAuth: true });
  const { bookings, isLoading, isError } = useGetUserBookings(user.id);
  const { deleteUserBooking, isDeleting } = useDeleteUserBooking();

  function handleDelete(bookingId) {
    if (
      window.confirm(
        "Are you sure you want to delete this booking? This action cannot be undone."
      )
    ) {
      deleteUserBooking(bookingId);
    }
  }

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="animate-spin w-10 h-10 text-primary" />
      </div>
    );

  if (isError)
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
        <p className="text-red-600 font-medium text-lg">
          ⚠️ Something went wrong while loading your bookings
        </p>
        <p className="text-red-500 text-sm mt-2">Please try again later</p>
      </div>
    );

  if (!bookings?.length)
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <Calendar size={40} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          No Bookings Yet
        </h3>
        <p className="text-gray-500">
          Start exploring our tours and book your next adventure!
        </p>
      </div>
    );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">My Bookings</h2>
          <p className="text-gray-500 mt-1">
            {bookings.length} {bookings.length === 1 ? "booking" : "bookings"}{" "}
            found
          </p>
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left Section - Tour Image Placeholder or Color Block */}
              <div className="md:w-48 h-48 md:h-auto bg-linear-to-br from-primary to-primary/70 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <Calendar size={48} className="mx-auto mb-2 opacity-90" />
                  <p className="text-sm font-medium opacity-90">Tour Booking</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {booking.tours?.title || "Untitled Tour"}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin size={16} className="text-primary" />
                      <span>
                        {booking.tours?.location || "Unknown location"}
                      </span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide ${
                      booking.status === "CONFIRMED"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "CANCELLED"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>

                {/* Tour Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Date</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {new Date(booking.tours?.date).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Travelers</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {booking.numSeats}{" "}
                        {booking.numSeats === 1 ? "Person" : "Persons"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <DollarSign size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Total Price</p>
                      <p className="text-sm font-semibold text-gray-800">
                        ${booking.totalPrice}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Booked</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {new Date(booking.created_at).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notes if available */}
                {booking.notes && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-500 mb-1">Special Notes:</p>
                    <p className="text-sm text-gray-700">{booking.notes}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {booking.status === "PENDING" && (
                    <button
                      onClick={() => handleDelete(booking.id)}
                      disabled={isDeleting}
                      className="flex items-center gap-2 px-5 py-2.5 bg-red-50 border border-red-200 text-red-600 rounded-lg font-medium hover:bg-red-100 hover:border-red-300 transition-all duration-200 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-50"
                    >
                      {isDeleting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Deleting...</span>
                        </>
                      ) : (
                        <>
                          <Trash2 size={16} />
                          <span>Delete Booking</span>
                        </>
                      )}
                    </button>
                  )}
                  {booking.status !== "PENDING" && (
                    <div className="text-sm text-gray-500 italic py-2">
                      {booking.status === "CONFIRMED"
                        ? "This booking is confirmed and cannot be deleted"
                        : "This booking has been cancelled"}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
