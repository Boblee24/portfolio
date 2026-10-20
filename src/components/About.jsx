import { toolbox } from "../data/content";
import { Reveal, SectionHead } from "./ui";

export default function About() {
  return (
    <section id="about" className="page scroll-mt-16 pt-28 sm:pt-36">
      <Reveal>
        <SectionHead index="03" title="About" />
      </Reveal>

      <div className="grid gap-12 pt-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <p className="font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.01em]">
            Frontend by training. These days I spend more time making sure the interface shows{" "}
            <em className="text-accent">what the system actually did.</em>
          </p>
        </Reveal>

        <div className="space-y-5 text-[17px] leading-relaxed text-ink/75 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p>
              I started out building interfaces and I still care most about the part people use. Over the past
              year my work has moved further down the stack. I learned Go to write FundedGreen's risk engine, and
              most of my problems now involve live data, money, or measurements that someone will have to defend
              later.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              I do my best work on small teams where engineers talk directly to the people using the product. I
              write things down, I check numbers against a second source, and I would rather show a value as
              unknown than guess it.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              I'm based in Nigeria and work remotely. West Africa Time overlaps fully with the UK and Europe and
              for most of the US East Coast working day.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-16">
        <dl className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
          {toolbox.map((t) => (
            <div key={t.group} className="border-b border-line py-6 sm:pr-6 lg:border-b-0">
              <dt className="eyebrow">{t.group}</dt>
              <dd className="mt-3 space-y-1 text-[15px]">
                {t.items.map((it) => (
                  <div key={it}>{it}</div>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
