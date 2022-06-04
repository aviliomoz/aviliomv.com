import { supabase } from "./supabase";

export const getPosts = async () => {
  try {
    const { data: posts, error } = await supabase
      .from("posts")
      .select("title,description,date,cover,slug,status")
      .eq("status", true);

    if (error) throw new Error(error.message);

    return posts;
  } catch (error) {
    alert(error.message);
  }
};

export const getPostBySlug = async (slug) => {
  try {
    const { data: post, error } = await supabase
      .from("posts")
      .select()
      .eq("slug", slug)
      .single();

    if (error) throw new Error(error.message);

    return post;
  } catch (error) {
    alert(error.message);
  }
};

export const getExternalPosts = async () => {
  try {
    const { data: posts, error } = await supabase
      .from("external_posts")
      .select()
      .eq("status", true);

    if (error) throw new Error(error.message);

    return posts;
  } catch (error) {
    alert(error.message);
  }
};
