import { useQuery } from "@tanstack/react-query";
import { getHomeTours, getTour, getTours } from "../../services/apiTours";
import { useSearchParams } from "react-router-dom";

export function useFetchHomeTours() {
  const {
    data: tours,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["home-tours"],
    queryFn: getHomeTours,
  });

  return { tours, isLoading, isError };
}

export function useFetchTour(tourId) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tour", tourId],
    queryFn: () => getTour(tourId),
    enabled: Boolean(tourId),
  });

  return { tour: data, isLoading, isError };
}

export function useGetTours() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("featured") || "all";
  const filter =
    filterValue === "all" ? null : { field: "featured", value: filterValue };

  // Sort
  const sortByRaw = searchParams.get("sortBy") || "date-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Query
  const {
    data: { tours, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tours", filter, sortBy, page],
    queryFn: () => getTours({ filter, sortBy, page }),
  });

  return { tours, count, isLoading, error };
}
