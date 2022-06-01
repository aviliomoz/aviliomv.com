import { supabase } from "./supabase";

export const getImageURL = (imageName) => {
  try {
    const { publicURL, error } = supabase.storage
      .from("images")
      .getPublicUrl(imageName);

    if (error) throw new Error(error.message);

    return publicURL;
  } catch (error) {
    alert(error.message);
  }
};
