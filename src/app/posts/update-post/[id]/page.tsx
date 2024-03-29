import { fetchSinglePost } from "@/lib/actions";
import UpdatePostForm from "@/components/forms/UpdatePostForm";
import { TPost } from "@/lib/types";

const UpdatePostPage = async ({ params }: {params: {id: string}}) => {
  const id = params?.id;
  const post = await fetchSinglePost(id);
  return (
    <div>
      <h2 className="text-center mt-4 px-2 text-2xl py-2 font-bold">
        Update Blog Page
      </h2>

      <UpdatePostForm post={post} />
    </div>
  );
};
export default UpdatePostPage;
