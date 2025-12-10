import BookingsTable from "../../featuers/bookings/BookingsTable";
import BookingsTableOperations from "../../featuers/bookings/BookingTableOperation";

function ManageBookings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Manage Bookings
        </h1>
        <p className="text-gray-600">View and manage all tour bookings</p>
      </div>

      {/* Filter & Sort Operations */}
      <BookingsTableOperations />

      {/* Bookings Table */}
      <BookingsTable />
    </div>
  );
}

export default ManageBookings;
