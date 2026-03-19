import { Post } from "@/types/types";

export default function PostCard(post: Post) {
  return (
    <article className="w-full h-full flex flex-col items-center">
      <figure>
        <img src={post.image_url} alt={post.title} />
      </figure>
      <div>
        <p>{post.celestial_body}</p>
        <p>{post.created_at}</p>
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>{post.equipment}</p>
        <p>{post.atmosphere_condition}</p>
      </div>
      <p>{post.where}</p>
    </article>
  );
}
