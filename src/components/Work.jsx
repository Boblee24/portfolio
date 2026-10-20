import { useEffect, useRef, useState } from "react";
import { featured } from "../data/content";
import { Arrow, Reveal, SectionHead, hostOf, useReducedMotion } from "./ui";

const pad = (n) => String(n).padStart(2, "0");

// Shows a lazy poster image; the video is only fetched once the frame is near the
// viewport, plays while visible, pauses when scrolled away. Reduced motion keeps the poster.
function Clip({ src, poster, label }) {
  const box = useRef(null);
  const vid = useRef(null);
  const reduce = useReducedMotion();
  const [near, setNear] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          vid.current?.play().catch(() => {});
        } else {
          vid.current?.pause();
        }
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(box.current);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <div ref={box} className="relative size-full">
      <img src={poster} alt={label} width="1400" height="700" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
      {near && !reduce && (
        <video
          ref={vid}
          src={src}
          muted
          loop
          playsInline
          autoPlay
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${playing ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}

function Frame({ project }) {
  const live = project.links.find((l) => l.label === "Live site");
  const dark = project.tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-[8px] border shadow-[0_30px_60px_-30px_rgba(20,20,18,0.35)] ${
        dark ? "border-ink bg-ink" : "border-line bg-paper-2"
      }`}
    >
      <div
        className={`flex items-center gap-3 border-b px-4 py-2.5 ${
          dark ? "border-paper/10 text-paper/50" : "border-line text-muted"
        }`}
      >
        <span className="flex gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`size-2 rounded-full ${dark ? "bg-paper/20" : "bg-ink/15"}`} />
          ))}
        </span>
        <span className="truncate font-mono text-[11px]">
          {live ? hostOf(live.href) : project.note || project.name}
        </span>
      </div>
      <div className="aspect-[2/1] overflow-hidden">
        {project.video ? (
          <Clip src={project.video} poster={project.image} label={`${project.name} product demo`} />
        ) : (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            width="1400"
            height="700"
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          />
        )}
      </div>
    </div>
  );
}

function Project({ project, i, total }) {
  const meta = [project.year, project.role].filter(Boolean).join(" · ");
  return (
    <article className="group grid gap-10 border-b border-line py-14 sm:py-20 lg:grid-cols-12 lg:gap-12">
      <Reveal className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow">
            {pad(i + 1)} / {pad(total)}
          </p>
          <h3 className="mt-4 font-serif text-5xl leading-[0.95] tracking-[-0.01em] sm:text-6xl">{project.name}</h3>
          <p className="mt-3 font-mono text-xs text-muted">{meta}</p>

          <p className="mt-7 text-xl leading-snug">{project.pitch}</p>
          <p className="mt-4 leading-relaxed text-ink/70">{project.body}</p>

          {project.points.length > 0 && (
            <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-ink/80">
              {project.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}

          {project.stack.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li key={s} className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink/70">
                  {s}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px]">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="link-u inline-flex items-center gap-1.5 font-medium"
              >
                {l.label} <Arrow className="text-accent" />
              </a>
            ))}
            {project.links.length === 0 && project.note && (
              <span className="font-mono text-xs text-muted">{project.note}</span>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="self-start lg:sticky lg:top-28 lg:col-span-7">
        {project.links[0] ? (
          <a href={project.links[0].href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
            <Frame project={project} />
          </a>
        ) : (
          <Frame project={project} />
        )}
      </Reveal>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="page scroll-mt-16 pt-28 sm:pt-36">
      <Reveal>
        <SectionHead index="01" title="Selected work" aside={`${featured.length} projects`} />
      </Reveal>
      {featured.map((p, i) => (
        <Project key={p.name} project={p} i={i} total={featured.length} />
      ))}
    </section>
  );
}
