import Filter from "../../components/Filter";
import SortBy from "../../components/SortBy";

function BookingsTableOperations() {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      {/* Filter by Status */}
      <Filter
        fieldValue="status"
        options={[
          { value: "all", label: "All Bookings" },
          { value: "PENDING", label: "Pending" },
          { value: "CONFIRMED", label: "Confirmed" },
          { value: "CANCELLED", label: "Cancelled" },
        ]}
      />

      {/* Sort Options */}
      <SortBy
        options={[
          { value: "created_at-desc", label: "Recent first" },
          { value: "created_at-asc", label: "Oldest first" },
          { value: "totalPrice-desc", label: "Price (high to low)" },
          { value: "totalPrice-asc", label: "Price (low to high)" },
        ]}
      />
    </div>
  );
}

export default BookingsTableOperations;
