interface PostProps {
  title: string;
  image_url: string;
  celestial_body: string;
  equipment: string;
  created_at: string;
  atmosphere_condition: string;
  description: string;
  where: string;
}

export default function PostCard(post: PostProps) {
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
