import PostCard from "./PostCard";
import { Post } from "@/types/types";
import getPosts from "@/lib/posts";

export default async function PostList() {
  const posts = await getPosts();

  return (
    <section className="w-full h-fit min-h-screen  p-5">
      <div className="w-full h-20 border-b border-outline-variant">
        <p>Journal Feed</p>
        <h2 className="text-3xl font-bold">Discovery the Journal</h2>
      </div>
      <ul className="w-full h-full grid grid-cols-1 place-items-center gap-10 p-5 mt-10">
        {posts.map((post: Post) => (
          <PostCard key={post.postId} {...post} />
        ))}
      </ul>
    </section>
  );
}
