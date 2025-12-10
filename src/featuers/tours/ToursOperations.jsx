import Filter from "../../components/Filter";
import SortBy from "../../components/SortBy";

function TourOperations() {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      {/* Filter by Location/Destination */}
      <Filter
        fieldValue="featured"
        options={[
          { value: "all", label: "All Tours" },
          { value: "true", label: "Featured Only" },
          { value: "false", label: "Regular Tours" },
        ]}
      />

      {/* Sort Options */}
      <SortBy
        options={[
          { value: "date-asc", label: "Date (earliest first)" },
          { value: "date-desc", label: "Date (latest first)" },
          { value: "price-asc", label: "Price (low to high)" },
          { value: "price-desc", label: "Price (high to low)" },
          { value: "title-asc", label: "Name (A-Z)" },
          { value: "title-desc", label: "Name (Z-A)" },
          { value: "availableSeats-desc", label: "Most seats available" },
          { value: "availableSeats-asc", label: "Few seats remaining" },
        ]}
      />
    </div>
  );
}

export default TourOperations;
