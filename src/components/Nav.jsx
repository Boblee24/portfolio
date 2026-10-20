import { useEffect, useState } from "react";
import { profile } from "../data/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/favicon.svg" alt="" className="size-7" />
          <span className="text-[15px] font-medium tracking-tight">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-u text-sm text-ink/75 hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          {profile.available && (
            <span className="flex items-center gap-2 text-xs text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
              </span>
              Open to work
            </span>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-ink px-4 py-2 text-sm text-paper transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="page flex flex-col pb-6 md:hidden">
          {links.map((l) => (
            <li key={l.href} className="border-t border-line">
              <a href={l.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-3xl">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
