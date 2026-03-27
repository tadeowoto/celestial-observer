import { Post } from "@/types/types";

export default async function getPosts(){
      const data = await fetch("http://localhost:8080/posts/user/1");
      const posts = await data.json();

      const mappedPosts = posts.map((post: Post) => {
        return {
          title: post.title,
          image_url: post.image_url,
          celestial_body: post.celestial_body,
          equipment: post.equipment,
          created_at: post.created_at,
          atmosphereCondition: post.atmosphereCondition,
          description: post.description,
          location: post.location,
          postId: post.postId
        }
      })
      return mappedPosts

}