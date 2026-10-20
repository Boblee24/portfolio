import { experience, profile } from "../data/content";
import { Arrow, Reveal, SectionHead } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="page scroll-mt-16 pt-28 sm:pt-36">
      <Reveal>
        <SectionHead index="02" title="Experience" aside="2023 — now" />
      </Reveal>

      <ol>
        {experience.map((job, i) => (
          <Reveal
            as="li"
            key={job.company}
            delay={i * 0.04}
            className="grid gap-3 border-b border-line py-8 sm:grid-cols-12 sm:gap-8"
          >
            <p className="font-mono text-xs text-muted sm:col-span-2 sm:pt-1.5">{job.period}</p>
            <div className="sm:col-span-4">
              <h3 className="font-serif text-3xl leading-tight">
                {job.href ? (
                  <a href={job.href} target="_blank" rel="noreferrer" className="group inline-flex items-baseline gap-2">
                    <span className="link-u">{job.company}</span>
                    <Arrow className="text-[0.55em] text-muted transition-colors group-hover:text-accent" />
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <p className="mt-1 text-sm text-muted">{job.what}</p>
            </div>
            <div className="sm:col-span-6">
              <p className="font-medium">{job.role}</p>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink/70">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink/30" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-8">
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-[15px] font-medium"
        >
          <span className="link-u">Full résumé (PDF)</span>
          <Arrow className="text-accent" />
        </a>
      </Reveal>
    </section>
  );
}
