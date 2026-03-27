import type { Post } from "@/types/types";
import { MapPin } from "lucide-react";

export default function Post(post: Post) {
  return (
    <article className="w-full max-w-112.5 bg-transparent flex flex-col p-4">
      <figure className="w-full mb-6">
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full aspect-4/5 object-cover rounded-xl shadow-ambient-glow"
        />
      </figure>

      <div className="flex items-center gap-3 mb-4">
        <div className="bg-surface-container-high px-3 py-1 rounded-md">
          <p className="text-primary font-display text-label-sm uppercase tracking-instrument font-bold">
            {post.celestial_body}
          </p>
        </div>
        <p className="text-on-surface-variant/50 font-body text-body-md">
          {post.created_at}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-on-surface font-display text-headline-md font-bold leading-tight">
          {post.title}
        </h1>

        <p className="text-on-surface-variant font-body text-body-md leading-relaxed opacity-80">
          {post.description}
        </p>

        <div className="flex flex-col gap-1.5 pt-2">
          <p className="text-on-surface-variant/40 font-body text-label-sm uppercase tracking-widest">
            Instrument:
            <span className="text-on-surface-variant/70">
              {` ` + post.equipment}
            </span>
          </p>
          <p className="text-on-surface-variant/40 font-body text-label-sm uppercase tracking-widest">
            Condition:
            <span className="text-on-surface-variant/70">
              {` ` + post.atmosphereCondition}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 border-t border-outline-variant/10 pt-4">
        <span className="text-primary/60 text-xs">
          <MapPin />
        </span>
        <p className="text-on-surface-variant/60 font-body text-label-sm uppercase tracking-instrument">
          {post.location}
        </p>
      </div>
    </article>
  );
}
