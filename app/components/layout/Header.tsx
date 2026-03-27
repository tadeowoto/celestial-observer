import { ChevronLeft, Share2 } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  showBack?: boolean;
  title?: string;
}

export default function Header({
  showBack = false,
  title = "Celestial Observer",
}: HeaderProps) {
  return (
    <header className="w-full h-16">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {showBack ? (
            <Link
              href="/"
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
              <span className="text-label-sm uppercase tracking-instrument font-bold">
                Back
              </span>
            </Link>
          ) : (
            <h1 className="text-on-surface font-display font-bold uppercase tracking-instrument">
              {title}
            </h1>
          )}
        </div>

        <div className="flex gap-4 items-center">
          <button className="hover:opacity-70 transition-opacity">
            <Share2
              size={20}
              className="text-on-surface-variant"
              strokeWidth={1.5}
            />
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/20" />
        </div>
      </nav>
    </header>
  );
}
