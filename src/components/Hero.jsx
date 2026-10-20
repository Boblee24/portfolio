import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data/content";
import { Arrow, useClock } from "./ui";

export default function Hero() {
  const reduce = useReducedMotion();
  const time = useClock(profile.timezone);
  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="top" className="page pt-28 sm:pt-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <motion.p {...rise(0)} className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-muted/60" />
            {profile.role} · {profile.location}
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="mt-7 font-serif text-[clamp(3.1rem,8.4vw,7.6rem)] leading-[0.92] tracking-[-0.025em]"
          >
            I build software where the numbers{" "}
            <em className="text-accent">have to be right.</em>
          </motion.h1>

          <motion.p {...rise(0.18)} className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl">
            Right now that means a real-time risk engine for a prop-trading firm and survey computation for
            Nigerian land surveyors. Before that, four years of React and TypeScript product work for AI,
            fintech and creator startups.
          </motion.p>

          <motion.div {...rise(0.26)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] text-paper transition-colors hover:bg-accent"
            >
              See selected work
              <Arrow diagonal={false} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-[15px] transition-colors hover:border-ink"
            >
              Résumé <Arrow />
            </a>
          </motion.div>
        </div>

        <motion.figure {...rise(0.3)} className="lg:col-span-4 lg:pt-4">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[6px] bg-paper-2 lg:max-w-none">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="aspect-[4/5] w-full object-cover object-[50%_30%] grayscale-[35%] transition duration-700 hover:grayscale-0"
            />
          </div>
          <figcaption className="eyebrow mx-auto mt-3 flex max-w-sm justify-between lg:max-w-none">
            <span>Fig. 01 — {profile.short}</span>
            <span>{time} WAT</span>
          </figcaption>
        </motion.figure>
      </div>

      <motion.dl
        {...rise(0.4)}
        className="mt-20 grid grid-cols-1 border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-line"
      >
        {[
          ["Currently", "FundedGreen Capital · Azimetra"],
          ["Focus", "Go, TypeScript, real-time systems"],
          ["Experience", "4+ years shipping product"],
        ].map(([k, v]) => (
          <div key={k} className="border-b border-line py-5 sm:border-b-0 sm:px-6 sm:first:pl-0">
            <dt className="eyebrow">{k}</dt>
            <dd className="mt-1.5 text-[15px]">{v}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
