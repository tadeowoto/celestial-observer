import PostForm from "@/app/components/features/PostForm";

export default function entryPage() {
  return (
    <section className="w-full min-h-screen bg-background p-6 font-body text-on-surface">
      <header className="mb-8">
        <p className="text-label-sm uppercase tracking-instrument text-primary opacity-70 mb-1">
          Observation Session
        </p>
        <h1 className="text-on-surface font-display text-4xl font-bold tracking-tight">
          New Log Entry
        </h1>
      </header>

      <article className="w-full max-w-2xl mx-auto">
        <PostForm />
      </article>
    </section>
  );
}
