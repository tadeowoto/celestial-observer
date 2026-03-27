import Link from "next/link";
import { Compass, Form, User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-90 rounded-md text-on-surface  bottom-0 fixed h-16 flex justify-evenly items-center bg-background/60 backdrop-blur-lg border border-outline-variant">
      <Link
        href="/"
        className="flex flex-col items-center justify-center uppercase text-xs gap-1"
      >
        <Compass size={25} strokeWidth={1.5} />
        <p>Observe</p>
      </Link>
      <Link
        href="/"
        className="flex flex-col items-center justify-center uppercase text-xs gap-1"
      >
        <Form size={20} strokeWidth={1.5} />
        <p>Entry</p>
      </Link>
      <Link
        href="/"
        className="flex flex-col items-center justify-center uppercase text-xs gap-1"
      >
        <User size={20} strokeWidth={1.5} />
        <p>Profile</p>
      </Link>
    </footer>
  );
}
