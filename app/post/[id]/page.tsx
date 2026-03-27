import { getPostById } from "@/lib/posts";
import { notFound } from "next/navigation";
import { ChevronLeft, Share2, Compass, Zap, Quote } from "lucide-react";
import Link from "next/link";

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
    <main className="min-h-screen text-pretty bg-background text-on-surface font-body pb-24">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/10 px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
          <span className="text-label-sm uppercase tracking-instrument">
            Observation Entry
          </span>
        </Link>
        <div className="flex gap-4">
          <Share2
            size={20}
            className="text-on-surface-variant"
            strokeWidth={1.5}
          />
          <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/20" />
        </div>
      </nav>

      <section className="relative w-full h-[55vh] overflow-hidden">
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />

        <div className="absolute bottom-8 left-6 flex gap-2">
          <span className="bg-surface-container-low/60 backdrop-blur-sm border border-primary/20 text-primary px-3 py-1 rounded-md text-label-sm font-bold tracking-instrument uppercase">
            {post.celestial_body || "Unknown"}
          </span>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 -mt-6 relative z-10">
        <h1 className="font-display text-4xl font-bold leading-tight mb-8">
          {post.title}
        </h1>

        <div className="flex gap-4 mb-10 py-5 border-l-2 border-primary/30 pl-6 bg-primary/5 rounded-r-lg">
          <p className="text-on-surface-variant text-body-md leading-relaxed italic">
            Located in the sector of {post.celestial_body}, this observation
            reveals the intricate telemetry captured by the {post.equipment}.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-label-sm uppercase tracking-[0.2em] text-on-surface-variant/40 mb-4 font-bold">
            Core Dynamics
          </h3>
          <p className="text-on-surface-variant text-body-md leading-relaxed">
            {post.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10">
            <span className="text-label-sm text-on-surface-variant/40 uppercase mb-2 block">
              Atmosphere
            </span>
            <span className="text-xl font-display text-primary">
              {post.atmosphereCondition}
            </span>
          </div>
          <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10">
            <span className="text-label-sm text-on-surface-variant/40 uppercase mb-2 block">
              Captured At
            </span>
            <span className="text-xl font-display text-secondary">
              {post.created_at}
            </span>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Zap size={18} className="text-primary" />
            <h3 className="text-label-sm uppercase tracking-instrument font-bold">
              Spectroscopic Profile
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-outline-variant/5 pb-2">
              <span className="text-on-surface-variant/60 text-body-md">
                Primary Instrument
              </span>
              <span className="text-on-surface font-mono text-body-md text-right">
                {post.equipment}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-outline-variant/5 pb-2">
              <span className="text-on-surface-variant/60 text-body-md">
                Observation Site
              </span>
              <span className="text-on-surface font-mono text-body-md text-right">
                {post.location}
              </span>
            </div>
          </div>
        </div>

        <div className="relative p-8 bg-surface-container-high/20 rounded-2xl border border-outline-variant/10 mb-10">
          <Quote
            className="absolute top-4 right-4 text-on-surface-variant/10"
            size={40}
          />
          <p className="text-body-md italic text-on-surface-variant leading-relaxed mb-4">
            {`"The data streams from ${post.celestial_body} show a consistent
            ionization pattern. The clarity achieved with the ${post.equipment} 
            provides an unprecedented look at this sector." `}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-primary" />
            <span className="text-label-sm uppercase tracking-instrument font-bold text-primary">
              Author of the Observation
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
