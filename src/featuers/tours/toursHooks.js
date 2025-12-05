import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getHomeTours,
  getTour,
  getTours,
  createTour,
  updateTour,
  deleteTour,
} from "../../services/apiTours";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

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

export function useCreateTour() {
  const queryClient = useQueryClient();

  const { mutate: create, isPending } = useMutation({
    mutationFn: createTour,
    onSuccess: () => {
      toast.success("Tour created successfully!");
      queryClient.invalidateQueries({ queryKey: ["tours"] });
      queryClient.invalidateQueries({ queryKey: ["home-tours"] });
      queryClient.invalidateQueries({ queryKey: ["all-tours"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create tour");
    },
  });

  return { create, isPending };
}

export function useUpdateTour() {
  const queryClient = useQueryClient();

  const { mutate: update, isPending } = useMutation({
    mutationFn: ({ id, tourData }) => updateTour(id, tourData),
    onSuccess: () => {
      toast.success("Tour updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["tours"] });
      queryClient.invalidateQueries({ queryKey: ["home-tours"] });
      queryClient.invalidateQueries({ queryKey: ["all-tours"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update tour");
    },
  });

  return { update, isPending };
}

export function useDeleteTour() {
  const queryClient = useQueryClient();

  const { mutate: remove, isPending } = useMutation({
    mutationFn: deleteTour,
    // Temporarily disable optimistic update to isolate refetch behavior
    onError: (error) => {
      toast.error(error?.message || "Failed to delete tour");
    },
    onSuccess: () => {
      toast.success("Tour deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["tours"] });
      queryClient.invalidateQueries({ queryKey: ["home-tours"] });
      queryClient.invalidateQueries({ queryKey: ["all-tours"] });
    },
  });

  return { remove, isPending };
}
