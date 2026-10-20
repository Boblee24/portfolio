import { profile, socials } from "../data/content";
import { Arrow, Reveal, useClock } from "./ui";

export default function Contact() {
  const time = useClock(profile.timezone);
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-28 scroll-mt-16 bg-ink text-paper sm:mt-36">
      <div className="page pt-24 pb-10 sm:pt-32">
        <Reveal>
          <p className="eyebrow text-paper/50">04 — Contact</p>
          <h2 className="mt-6 max-w-4xl font-serif text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
            Building something that <em className="text-accent">has to be right?</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex max-w-full items-center gap-3 border-b border-paper/25 pb-2 text-[clamp(1.05rem,3.2vw,2.25rem)] transition-colors hover:border-accent hover:text-accent"
          >
            <span className="truncate">{profile.email}</span>
            <Arrow className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
          <p className="mt-4 max-w-md text-paper/60">
            Open to full-time roles and focused contract work. I usually reply within a day.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-10 border-t border-paper/15 pt-8 sm:grid-cols-3">
          <div>
            <p className="eyebrow text-paper/50">Elsewhere</p>
            <ul className="mt-3 space-y-1.5">
              {socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 hover:text-accent">
                    {s.label} <Arrow className="text-paper/40 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-paper/50">Résumé</p>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="group mt-3 inline-flex items-center gap-2 hover:text-accent">
              Download PDF <Arrow className="text-paper/40 group-hover:text-accent" />
            </a>
          </div>
          <div>
            <p className="eyebrow text-paper/50">Local time</p>
            <p className="mt-3">{time} WAT, UTC+1</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 font-mono text-[11px] text-paper/40 sm:flex-row">
          <span>
            © {year} {profile.name}
          </span>
          <a href="#top" className="hover:text-paper">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
