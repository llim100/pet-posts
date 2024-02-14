import Image from "next/image";
import Link from "next/link";
import { TPost } from "@/lib/types";

const PostItem = ({ post }: {post:TPost}) => {
  const { id, title, imageUrl, description } = post || {};
  return (
    <div className="bg-gray-900 p-4 border-2 border-green-200 mx-2 my-2 rounded-lg shadow-md">
      <Link href={`/posts/${id}`}>
        {imageUrl ? (
          <Image
            blurDataURL={imageUrl}
            placeholder="blur"
            loading="lazy"
            width="600"
            height="400"
            quality={100}
            src={imageUrl}
            alt="image"
            className="w-full h-[200px]  lg:h-[250px] object-cover mb-4 rounded-md"
          />
        ) : null}
      </Link>

      <Link href={`/posts/${id}`}>
        <h2 className="text-xl text-white font-semibold mb-2">{title}</h2>
      </Link>

      <p className="text-gray-300">{description.slice(0, 100)}...</p>
    </div>
  );
};
export default PostItem;
