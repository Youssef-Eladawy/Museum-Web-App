import { RES_PER_PAGE } from "../../constants";
import { getCurrentUser } from "./apiAuth";
import supabase from "./supabase";

export async function createBooking(booking) {
  const { userId, tourId, numSeats, totalPrice, status, notes } = booking;

  try {
    // Step 1: Check if tour exists and has enough available seats
    const { data: tour, error: tourError } = await supabase
      .from("tours")
      .select("availableSeats")
      .eq("id", tourId)
      .single();

    if (tourError) throw new Error("Failed to fetch tour info.");
    if (!tour) throw new Error("Tour not found.");
    if (tour.availableSeats < numSeats)
      throw new Error("Not enough available seats for this tour.");

    // Step 2: Insert booking into "bookings" table
    const { data: newBooking, error: bookingError } = await supabase
      .from("bookings")
      .insert([
        {
          userId,
          tourId,
          numSeats,
          totalPrice,
          status,
          notes,
        },
      ])
      .select()
      .single();

    if (bookingError) throw new Error("Failed to create booking.");

    // Step 3: Decrease available seats in the "tours" table
    const { error: updateError } = await supabase
      .from("tours")
      .update({
        availableSeats: tour.availableSeats - numSeats,
      })
      .eq("id", tourId);

    if (updateError) throw new Error("Failed to update available seats.");

    // Step 4: Return created booking
    return newBooking;
  } catch (error) {
    console.error("❌ createBooking error:", error.message);
    throw new Error(error.message || "Booking failed. Please try again.");
  }
}

export async function getUserBookings(userId) {
  const { data: bookings, error } = await supabase
    .from("bookings")
    .select(
      `
      id,
      userId,
      tourId,
      numSeats,
      totalPrice,
      status,
      notes,
      created_at,
      tours (
        title,
        location,
        date
      )
      `
    )
    .eq("userId", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Error loading bookings");
  }

  return bookings;
}

//there is no a feature of transaction so this function will be written sequentially and the last two steps if one doesnt happen will be a problem
export async function deleteUserBooking(bookingId) {
  try {
    // Step 1: Validate booking ID
    if (!bookingId) {
      throw new Error("Booking ID is required");
    }

    // Step 2: Fetch the booking details
    const { data: booking, error: fetchError } = await supabase
      .from("bookings")
      .select("id, status, userId, tourId, numSeats")
      .eq("id", bookingId)
      .single();

    if (fetchError) {
      throw new Error("Error fetching booking details: " + fetchError.message);
    }

    if (!booking) {
      throw new Error("Booking not found");
    }

    // Step 3: Get current user
    const user = await getCurrentUser();
    if (!user || !user.id) {
      throw new Error("User not authenticated");
    }

    // Step 4: Verify ownership
    if (booking.userId !== user.id) {
      throw new Error("You cannot delete a booking that doesn't belong to you");
    }

    // Step 5: Verify status
    if (booking.status !== "PENDING") {
      throw new Error("Only pending bookings can be deleted");
    }

    // Step 6: Delete the booking
    const { error: deleteError } = await supabase
      .from("bookings")
      .delete()
      .eq("id", bookingId)
      .eq("userId", user.id)
      .eq("status", "PENDING");

    if (deleteError) {
      throw new Error("Error deleting booking: " + deleteError.message);
    }

    // Step 7: Restore seats to the tour
    const { data: tour, error: tourError } = await supabase
      .from("tours")
      .select("availableSeats")
      .eq("id", booking.tourId)
      .single();

    if (tourError) {
      throw new Error("Error fetching tour: " + tourError.message);
    }

    if (!tour) {
      throw new Error("Tour not found");
    }

    // Step 8: Update available seats
    const { error: updateError } = await supabase
      .from("tours")
      .update({
        availableSeats: tour.availableSeats + booking.numSeats,
      })
      .eq("id", booking.tourId);

    if (updateError) {
      throw new Error("Error restoring seats: " + updateError.message);
    }

    return {
      success: true,
      message: "Booking deleted and seats restored",
      seatsRestored: booking.numSeats,
    };
  } catch (error) {
    console.error("Error in deleteUserBooking:", error);
    throw new Error(error.message || "Failed to delete booking");
  }
}

export async function getBookingsAdmin({ filter, sortBy, page }) {
  let query = supabase.from("bookings").select(
    `
      id,
      created_at,
      tourId,
      userId,
      numSeats,
      totalPrice,
      status,
      tours(title, location, date),
      profiles(fullName, phoneNumber)
    `,
    { count: "exact" }
  );

  // Filter by status
  if (filter && filter.value !== "all") {
    query = query.eq(filter.field, filter.value);
  }

  // Sorting
  if (sortBy) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  }

  // Pagination
  if (page) {
    const pageNum = Number(page) || 1;
    const from = (pageNum - 1) * RES_PER_PAGE;
    const to = from + RES_PER_PAGE - 1;
    query = query.range(from, to);
  }

  const { data: bookings, error, count } = await query;

  if (error) {
    console.error("getBookingsAdmin error:", error);
    throw new Error("Failed to fetch bookings");
  }

  return { bookings, count };
}

// Update booking status
export async function updateBookingStatus(bookingId, newStatus) {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: newStatus })
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    console.error("updateBookingStatus error:", error);
    throw new Error("Failed to update booking status");
  }

  return data;
}

// Delete booking
// export async function deleteBooking(bookingId) {
//   const { error } = await supabase
//     .from("bookings")
//     .delete()
//     .eq("id", bookingId);

//   if (error) {
//     console.error("deleteBooking error:", error);
//     throw new Error("Failed to delete booking");
//   }
// }
