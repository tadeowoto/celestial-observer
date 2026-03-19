import PostCard from "./PostCard";
import { MOCK_POSTS } from "@/mocks/data";

export default function PostList() {
  return (
    <section className="w-full h-fit min-h-screen  p-5">
      <div className="w-full h-20 border-b border-outline-variant">
        <p>Journal Feed</p>
        <h2 className="text-3xl font-bold">Discovery the Journal</h2>
      </div>
      <ul className="w-full h-full grid grid-cols-1 place-items-center gap-10 p-5 mt-10">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </ul>
    </section>
  );
}
