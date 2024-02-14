"use client";
import { updatePost } from "@/lib/actions";
//import { useRef } from "react";
import Button from "../ui/Button";
import { TPost } from "@/lib/types";


const UpdatePostForm = ({ post}: {post: TPost})=> {
  //const ref = useRef();
  const { id, title, imageUrl, description } = post || {};
  const handleUpdatePost = async (formData: FormData) => {
    await updatePost(id, formData);
  };

  return (
    <form
      // ref={ref}
      action={handleUpdatePost}
      className="max-w-md mx-auto mt-8 p-8 bg-primary rounded shadow-md"
    >
      <h2 className="text-2xl text-white font-semibold mb-6">Update Post</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-white">
          Update Image Link
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          defaultValue={imageUrl ? imageUrl : ""}
          className="mt-1 p-2 w-full border text-primary rounded-md font-semibold"
          placeholder="Enter imageUrl"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-white">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={title}
          className="mt-1 p-2 w-full border text-primary rounded-md font-semibold"
          placeholder="Enter title"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-white"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          defaultValue={description}
          className="mt-1 p-2 text-primary w-full border rounded-md font-semibold"
          placeholder="Enter description"
        ></textarea>
      </div>

      <Button label={"Update Blog"} color={"white"} />
    </form>
  );
};
export default UpdatePostForm;
