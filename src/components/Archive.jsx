import { archive } from "../data/content";
import { Arrow, Reveal } from "./ui";

export default function Archive() {
  return (
    <section className="page pt-20">
      <Reveal>
        <p className="eyebrow">Earlier projects</p>
      </Reveal>
      <ul className="mt-5 border-t border-line">
        {archive.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 0.05} className="border-b border-line">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4 sm:grid-cols-[96px_minmax(0,1.2fr)_minmax(0,1fr)_auto] sm:gap-8"
            >
              <span className="hidden aspect-[16/10] w-24 overflow-hidden rounded-[4px] border border-line bg-paper-2 sm:block">
                <img src={p.image} alt="" width="240" height="150" loading="lazy" decoding="async" className="size-full object-cover grayscale transition duration-500 group-hover:grayscale-0" />
              </span>
              <span className="font-serif text-2xl leading-none sm:text-3xl">{p.name}</span>
              <span className="hidden text-[15px] text-ink/70 sm:block">
                {p.desc}
                <span className="ml-3 font-mono text-[11px] text-muted">{p.stack}</span>
              </span>
              <span className="flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-accent">
                <span className="hidden sm:inline">Visit</span>
                <Arrow className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
      <p className="mt-5 text-sm text-muted">
        More on{" "}
        <a href="https://github.com/Boblee24" target="_blank" rel="noreferrer" className="link-u text-ink">
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
