import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  createBooking as createBookingApi,
  getUserBookings,
  deleteUserBooking as deleteUserBookingApi,
  updateBookingStatus,
  getBookingsAdmin,
} from "../../services/apitBookings";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useCreateBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createBooking, isPending: isCreating } = useMutation({
    mutationFn: (booking) => createBookingApi(booking),
    onSuccess: () => {
      toast.success("Booking successfully");
      queryClient.invalidateQueries(["user-bookings"]);
      queryClient.invalidateQueries(["home-tours"]);
      queryClient.invalidateQueries(["tour"]);
      navigate("/user/bookings", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createBooking, isCreating };
}

export function useGetUserBookings(userId) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user-bookings", userId],
    queryFn: () => getUserBookings(userId),
    enabled: Boolean(userId),
  });

  return { bookings: data, isLoading, isError };
}

export function useDeleteUserBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteUserBooking, isPending: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteUserBookingApi(bookingId),
    onSuccess: () => {
      toast.success("Deleted successfully");

      queryClient.invalidateQueries(["user-bookings"]);
      queryClient.invalidateQueries(["home-tours"]);
      queryClient.invalidateQueries(["tour"]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteUserBooking, isDeleting };
}

export function useGetBookingsAdmin() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("status") || "all";
  const filter =
    filterValue === "all" ? null : { field: "status", value: filterValue };

  // Sort
  const sortByRaw = searchParams.get("sortBy") || "created_at-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Query with optimized settings
  const {
    data: { bookings, count } = {},
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["bookings-admin", filter, sortBy, page],
    queryFn: () => getBookingsAdmin({ filter, sortBy, page }),
    placeholderData: (previousData) => previousData,
  });

  return { bookings, count, isLoading, isFetching, error };
}

export function useUpdateBookingStatus() {
  const queryClient = useQueryClient();

  const { mutate: updateStatus, isPending } = useMutation({
    mutationFn: ({ bookingId, newStatus }) =>
      updateBookingStatus(bookingId, newStatus),
    onSuccess: () => {
      toast.success("Booking status updated successfully");
      queryClient.invalidateQueries(["bookings-admin"]);
    },
    onError: (err) => {
      toast.error(err.message || "Failed to update booking status");
    },
  });

  return { updateStatus, isPending };
}
