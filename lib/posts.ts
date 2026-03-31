import { Post } from "@/types/types";

export default async function getAllPosts(){
      const data = await fetch("http://localhost:8080/posts/user/1");
      const posts = await data.json();

      const mappedPosts = posts.map((post: Post) => {
        return {
          title: post.title,
          imageUrl: post.imageUrl,
          celestialBody: post.celestialBody,
          equipment: post.equipment,
          createdAt: post.createdAt,
          atmosphereCondition: post.atmosphereCondition,
          description: post.description,
          location: post.location,
          postId: post.postId
        }
      })
      return mappedPosts

}
export async function getPostById(id: number) {
  const data = await fetch(`http://localhost:8080/posts/${id}`);
  const post = await data.json();
  const mappedPost = {
    title: post.title,
    imageUrl: post.imageUrl,
    celestialBody: post.celestialBody,
    equipment: post.equipment,
    createdAt: post.createdAt,
    atmosphereCondition: post.atmosphereCondition,
    description: post.description,
    location: post.location,
    postId: post.postId
  }
  return mappedPost;
}

export async function createPost(postData: Omit<Post, 'postId'>) {
  const response = await fetch("http://localhost:8080/posts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...postData,
      userId: 1
    }),
  });

  if (!response.ok) {
    throw new Error("TELEMETRY_TRANSMISSION_FAILED");
  }

  return response.json();
}