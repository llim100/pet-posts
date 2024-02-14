"use client";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { addPost } from "@/lib/actions";

const AddPostForm = () => {
  const ref = useRef();

  const addBlogHandler = async (FormData) => {
    await addPost(FormData);
    ref?.current?.reset();
  };

  return (
    <form
      ref={ref}
      action={addBlogHandler}
      className="max-w-md mx-auto mt-8 p-8 bg-primary rounded shadow-md"
    >
      <h2 className="text-2xl text-white font-semibold mb-6">
        Create a New Post
      </h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-white">
          Upload Image Link
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
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
          rows="4"
          className="mt-1 p-2 text-primary w-full border rounded-md font-semibold"
          placeholder="Enter description"
        ></textarea>
      </div>

      <Button label={"Add Post"} color={"white"} />
    </form>
  );
};
export default AddPostForm;
