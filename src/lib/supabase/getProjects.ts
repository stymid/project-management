import { supabase } from "../supabaseClient";
import { Project } from "@/types/project";
import { Filter } from "@/types/Filter";

export async function getProjects(filters: Filter): Promise<Project[]> {
  const {
    searchTerm = "",
    status = "all",
    minPrice = undefined,
    maxPrice = undefined,
  } = filters;

  try {
    let query = supabase.from("projects").select("*");

    if (searchTerm) {
      query = query.ilike("name", `%${searchTerm}%`);
    }

    if (status && status !== "all") {
      query = query.eq("status", status);
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
      query = query.gte("price", minPrice).lte("price", maxPrice);
    }

    const { data, error } = await query;

    if (error) {
      console.error(
        "An error occurred while fetching projects from Supabase.",
        error.message
      );
      return [];
    }
    return data as Project[];
  } catch (err) {
    console.error("There is an error which I don't know the reason.", err);
    return [];
  }
}
