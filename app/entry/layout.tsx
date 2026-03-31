import Header from "@/app/components/layout/Header";

export default function EntryLayout({
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
