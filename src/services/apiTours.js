import { RES_PER_PAGE } from "../../constants";
import supabase from "./supabase";

// Expose supabase to window for debugging (temporary)
window.supabase = supabase;

export async function getHomeTours() {
  const { data: tours, error } = await supabase
    .from("tours")
    .select("*")
    .limit(3);

  if (error) {
    throw new Error("error loading tours");
  }

  return tours;
}
export async function getTour(id) {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("error loading tour");
  }

  return data;
}

export async function getTours({ filter, sortBy, page }) {
  let query = supabase.from("tours").select("*", { count: "exact" });

  console.log(filter);

  // Filter
  if (filter && filter.value !== "all") {
    const booleanValue = filter.value === "true";
    query = query.eq(filter.field, booleanValue);
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

  const { data: tours, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Tours not found");
  }

  return { tours, count };
}

export async function createTour(tourData) {
  const { data, error } = await supabase
    .from("tours")
    .insert([tourData])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Failed to create tour");
  }

  return data;
}

export async function updateTour(id, tourData) {
  const { data, error } = await supabase
    .from("tours")
    .update(tourData)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Failed to update tour");
  }

  return data;
}

export async function deleteTour(id) {
  try {
    // Step 1: Validate tour ID
    if (!id) {
      throw new Error("Tour ID is required");
    }

    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new Error("Invalid tour ID format");
    }

    // Step 2: Fetch the tour to verify it exists
    const { data: tours, error: fetchError } = await supabase
      .from("tours")
      .select("id")
      .eq("id", numericId);

    if (fetchError) {
      console.error("Error fetching tour:", fetchError);
      throw new Error("Error fetching tour details: " + fetchError.message);
    }

    if (!tours || tours.length === 0) {
      throw new Error("Tour not found");
    }

    // Step 3: Delete related bookings first
    const { error: deleteBookingsError } = await supabase
      .from("bookings")
      .delete()
      .eq("tourId", numericId);

    if (deleteBookingsError) {
      console.error("Error deleting related bookings:", deleteBookingsError);
      throw new Error("Could not delete tour: failed to remove related bookings");
    }

    // Step 4: Now delete the tour
    const { error: deleteError } = await supabase
      .from("tours")
      .delete()
      .eq("id", numericId);

    if (deleteError) {
      console.error("Error deleting tour:", deleteError);
      throw new Error("Error deleting tour: " + deleteError.message);
    }

    return {
      success: true,
      message: "Tour and related bookings deleted successfully",
      deletedId: numericId,
    };
  } catch (error) {
    console.error("Error in deleteTour:", error);
    throw error;
  }
}

// Expose a test function to the window for manual console testing
window.testDeleteTour = async (id) => {
  console.log(`Manual delete test for id: ${id}`);
  try {
    const result = await deleteTour(id);
    console.log("Manual delete success:", result);
    return result;
  } catch (error) {
    console.error("Manual delete error:", error);
    throw error;
  }
};
