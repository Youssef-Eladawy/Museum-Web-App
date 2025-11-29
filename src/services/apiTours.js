import { RES_PER_PAGE } from "../../constants";
import supabase from "./supabase";

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
  const { error } = await supabase.from("tours").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Failed to delete tour");
  }
}
