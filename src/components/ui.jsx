import { useEffect, useRef, useState } from "react";

// One shared observer for every scroll reveal: adds `.in` once, then stops watching.
const revealer =
  typeof window !== "undefined" && "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              revealer.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -10% 0px" }
      )
    : null;

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!revealer) return void el.classList.add("in");
    revealer.observe(el);
    return () => revealer.unobserve(el);
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </Tag>
  );
}

export function useReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduce, setReduce] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setReduce(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduce;
}

export function Arrow({ className = "", diagonal = true }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`inline-block size-[0.8em] shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      {diagonal ? <path d="M4 12 12 4M5.5 4H12v6.5" /> : <path d="M2 8h12M9 3l5 5-5 5" />}
    </svg>
  );
}

export function SectionHead({ index, title, aside, dark = false }) {
  return (
    <div
      className={`flex items-end justify-between gap-6 border-b pb-5 ${
        dark ? "border-paper/15" : "border-line"
      }`}
    >
      <div className="flex items-baseline gap-4">
        <span className={`eyebrow ${dark ? "text-paper/50" : ""}`}>{index}</span>
        <h2 className="font-serif text-4xl leading-none sm:text-5xl">{title}</h2>
      </div>
      {aside && <span className={`eyebrow hidden sm:block ${dark ? "text-paper/50" : ""}`}>{aside}</span>}
    </div>
  );
}

export function useClock(timeZone) {
  const fmt = () =>
    new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);
  return time;
}

export const hostOf = (href) => href.replace(/^https?:\/\//, "").replace(/\/$/, "");
