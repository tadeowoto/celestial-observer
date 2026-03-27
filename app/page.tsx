import Footer from "./components/layout/Footer";
import PostList from "./components/features/PostList";
export default function Home() {
  return (
    <main className="w-full min-h-screen h-fit flex flex-col items-center">
      <PostList />
      <Footer />
    </main>
  );
}
