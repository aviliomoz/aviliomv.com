import { supabase } from "./supabase";

export const getProjects = async () => {
  try {
    const { data: projects, error } = await supabase
      .from("projects")
      .select()
      .eq("status", true);

    if (error) throw new Error(error.message);

    return projects;
  } catch (error) {
    alert(error.message);
  }
};
