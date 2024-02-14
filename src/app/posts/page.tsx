import Search from "@/components/Search";
import prisma from "@/lib/prisma";
import PostItem from "@/components/PostItem";

const Posts = async () => {
  const posts = await prisma.post.findMany({});
  return (
    <div>
      <Search />
      <h2 className="text-center mt-4 px-2 text-2xl py-2 font-bold">
        All Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 mb-5 px-4 py-5">
        {posts?.length > 0 &&
          posts?.map((post) => {
            return <PostItem key={post?.id} post={post} />;
          })}
      </div>
    </div>
  );
};
export default Posts;
