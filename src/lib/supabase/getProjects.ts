import { supabase } from "../supabaseClient";
import { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      console.error(
        "an error ecurred while fetching projects from supabasee.",
        error.message
      );
      return [];
    }
    return data as Project[];
  } catch (err) {
    console.error("ther is a error which is i don't know the reason.", err);
    return [];
  }
}
