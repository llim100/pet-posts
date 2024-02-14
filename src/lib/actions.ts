"use server";

import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const fetchPosts = async () => {
  const posts = await prisma.post.findMany({});
  return posts;
};

export const fetchSinglePost = async (id) => {
  const post = await prisma.post.findFirst({
    where: { id },
  });
  return post;
};

export const addPost = async (formData) => {
  const imageUrl = formData.get("imageUrl");
  const title = formData.get("title");
  const description = formData.get("description");
  const new_post = await prisma.post.create({
    data: {
      imageUrl: imageUrl ? imageUrl : null,
      title,
      description,
    },
  });
};

export const updatePost = async (id, formData) => {
  const imageUrl = formData.get("imageUrl");
  const title = formData.get("title");
  const description = formData.get("description");

  const update_post = await prisma.post.update({
    where: { id: id },
    data: {
      imageUrl: imageUrl ? imageUrl : null,
      title,
      description,
    },
  });
  revalidatePath(`/posts/update_post/${id}`);
  redirect("/posts");
};
