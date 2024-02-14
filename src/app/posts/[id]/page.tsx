import { fetchSinglePost } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

const PostDetail = async ({ params }) => {
  const id = params?.id;
  const post = await fetchSinglePost(id);
  return (
    <div className="">
      <div className="text-center bg-gray-800 rounded-md border-2 border-green-600 shadow-md px-4 py-2 mx-3 my-3">
        {post?.imageUrl ? (
          <Image
            blurDataURL={post?.imageUrl}
            placeholder="blur"
            loading="lazy"
            quality={100}
            src={post?.imageUrl}
            alt={post?.title}
            width="600"
            height="400"
            className="w-full h-[600px] mt-2 px-2 py-2 object-cover mb-2 rounded-sm shadow-sm"
          />
        ) : null}

        <h3 className="font-semibold text-center text-2xl text-gray-200 my-2 mx-2 px-2 py-2">
          {post?.title}
        </h3>

        <p className="text-center text-gray-300 my-2 mx-2 px-2 py-2">
          {post?.description}
        </p>

        <Link
          className="text-gray-700 bg-gray-200 my-2 border-2 py-2 rounded-lg border-gray-400 shadow-sm mx-2 px-2"
          href={`/posts/update-post/${post?.id}`}
        >
          Update Post
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
