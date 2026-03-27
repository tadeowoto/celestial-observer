"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Form, User } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const navItems = [
    { label: "Observe", href: "/", icon: Compass },
    { label: "Entry", href: "/entry", icon: Form },
    { label: "Profile", href: "/profile", icon: User },
  ];

  return (
    <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md h-16 z-50 flex justify-evenly items-center bg-background/60 backdrop-blur-lg border border-outline-variant rounded-2xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
              isActive
                ? "text-primary scale-110"
                : "text-on-surface-variant/50 hover:text-on-surface-variant"
            }`}
          >
            <Icon size={isActive ? 24 : 20} strokeWidth={isActive ? 2 : 1.5} />
            <span className="text-[10px] uppercase font-bold tracking-instrument">
              {item.label}
            </span>
          </Link>
        );
      })}
    </footer>
  );
}
