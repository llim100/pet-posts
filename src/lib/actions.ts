"use server";

import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface FormDataValues {
  title: string;
  imageUrl: string;
  description: string;
}

export const fetchPosts = async () => {
  const posts = await prisma.post.findMany({});
  return posts;
};

export const fetchSinglePost = async (id: string) => {
  const post = await prisma.post.findFirst({
    where: { id },
  });
  return post;
};

export const addPost = async (formData:FormData) => {
  const imageUrl = formData.get("imageUrl") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const new_post = await prisma.post.create({
    data: {
      imageUrl: imageUrl,
      title,
      description,
    },
  });
};

export const updatePost = async (id: string, formData: FormData) => {
  const imageUrl = formData.get("imageUrl") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  const update_post = await prisma.post.update({
    where: { id: id },
    data: {
      imageUrl: imageUrl,
      title,
      description,
    },
  });
  revalidatePath(`/posts/update_post/${id}`);
  redirect("/posts");
};
