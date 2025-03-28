import { supabase } from "../supabaseClient";

export async function getProjectDetails(id: string) {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error fetching project details:", error);
    return null;
  }
}
