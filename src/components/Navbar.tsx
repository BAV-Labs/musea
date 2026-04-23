import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { Button } from "./ui/button";

const links = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Screens", href: "#screens" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/75 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Brand />
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink-soft hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild size="sm" className="rounded-full bg-ink text-paper hover:bg-ink/90 px-5">
          <a href="#download">Get the app</a>
        </Button>
      </nav>
    </header>
  );
};
