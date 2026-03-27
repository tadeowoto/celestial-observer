import Header from "@/app/components/layout/Header";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header showBack={true} />
      {children}
    </>
  );
}
