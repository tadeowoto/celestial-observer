import { getPostById } from "@/lib/posts";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params;
  const numericId = Number(id);

  if (isNaN(numericId)) {
    return notFound();
  }

  const post = await getPostById(numericId);

  if (!post) {
    return notFound();
  }
  return (
    <main className="flex justify-center p-12 bg-background">
      <h1>{post.title}</h1>
    </main>
  );
}
