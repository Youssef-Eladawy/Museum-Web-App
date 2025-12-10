import { useState } from "react";
import { Loader2, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetBookingsAdmin, useUpdateBookingStatus } from "./bookingsHooks";
import Pagination from "../../components/Pagination";

function BookingsTable() {
  const { bookings, count, isLoading, isFetching, error } =
    useGetBookingsAdmin();

  console.log(error);

  console.log(bookings);

  const { updateStatus, isPending: isUpdating } = useUpdateBookingStatus();
  const [actioningId, setActioningId] = useState(null);

  if (isLoading && !bookings) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600">Loading bookings...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg font-medium">
          Failed to load bookings. Please try again later.
        </p>
      </div>
    );
  }

  if (!bookings || bookings.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl shadow-sm">
        <p className="text-gray-500 text-lg">No bookings found.</p>
      </div>
    );
  }

  const handleStatusChange = (bookingId, newStatus) => {
    setActioningId(bookingId);
    updateStatus(
      { bookingId, newStatus },
      {
        onSettled: () => setActioningId(null),
      }
    );
  };

  return (
    <div className="space-y-6 relative">
      {/* Loading Overlay */}
      {isFetching && (
        <div className="fixed top-4 right-4 bg-white px-3 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-primary" />
          <span className="text-sm text-gray-600">Updating...</span>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Booking ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tour
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tour Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Seats
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Total Price
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{booking.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">
                        {booking.profiles?.fullName || "N/A"}
                      </div>

                      <div className="text-gray-400 text-xs">
                        {booking.profiles?.phoneNumber || ""}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <div className="font-medium text-gray-900 max-w-xs truncate">
                        {booking.tours?.title || "N/A"}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {booking.tours?.location || "N/A"}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.tours?.date
                      ? new Date(booking.tours.date).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    {booking.numSeats || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    ${Number(booking.totalPrice || 0).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {actioningId === booking.id && isUpdating ? (
                      <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    ) : (
                      <select
                        value={booking.status}
                        onChange={(e) =>
                          handleStatusChange(booking.id, e.target.value)
                        }
                        disabled={isUpdating}
                        className="text-xs font-semibold rounded-full px-3 py-1 border-0 focus:ring-2 focus:ring-primary cursor-pointer disabled:cursor-wait disabled:opacity-50"
                        style={{
                          backgroundColor:
                            booking.status === "PENDING"
                              ? "#fef3c7"
                              : booking.status === "CONFIRMED"
                              ? "#d1fae5"
                              : "#fee2e2",
                          color:
                            booking.status === "PENDING"
                              ? "#92400e"
                              : booking.status === "CONFIRMED"
                              ? "#065f46"
                              : "#991b1b",
                        }}
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="CONFIRMED">CONFIRMED</option>
                        <option value="CANCELLED">CANCELLED</option>
                      </select>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Link
                      to={`/admin/bookings/${booking.id}`}
                      className="text-primary hover:text-primary/80 transition inline-flex items-center gap-1"
                      title="View Details"
                    >
                      <Eye className="w-5 h-5" />
                      <span className="text-xs font-medium">View</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <Pagination count={count} />
    </div>
  );
}

export default BookingsTable;
