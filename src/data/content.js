// All site copy lives here. Edit this file to update the portfolio.

import fundedgreen from "../assets/projects/fundedgreen.webp";
import azimetra from "../assets/projects/azimetra.webp";
import azimetraVideo from "../assets/projects/azimetra-hero.webm";
import fairsplit from "../assets/projects/fairsplit.webp";
import fairsplitVideo from "../assets/projects/fairsplit-hero.webm";
import magent from "../assets/projects/magent.webp";
import larrysat from "../assets/projects/larrysat.webp";
import larrysatVideo from "../assets/projects/larrysat-hero.webm";
import farmconnect from "../assets/projects/farmconnect.webp";
import tradiant from "../assets/projects/tradiant.webp";
import quizzical from "../assets/projects/quizzical.webp";
import rogue from "../assets/projects/rogue.webp";
import bookmark from "../assets/projects/bookmark.webp";
// Swap this file to change the photo on the site (export it around 800x1000, WebP or JPG).
import portrait from "../assets/portrait.webp";

export const profile = {
  name: "Ayomiposi Aborisade",
  short: "Ayomiposi",
  role: "Software Engineer",
  location: "Nigeria · remote",
  timezone: "Africa/Lagos",
  email: "ayomiposiaborisade6@gmail.com",
  resume: "/resume1.pdf",
  available: true,
  photo: portrait,
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Boblee24" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayomiposi24/" },
  { label: "X / Twitter", href: "https://twitter.com/BOBLEE_AYO" },
];

// `video` (optional) plays a muted loop in place of the image; `image` is then its poster.
// Featured images are 1400x700 WebP (2:1). Archive thumbnails are 240x150.
export const featured = [
  {
    name: "FundedGreen Capital",
    year: "2026",
    role: "Engine architect",
    pitch: "A prop-trading platform for Nigerian traders, with a risk engine I wrote in Go.",
    body:
      "Traders buy a challenge account, trade live market prices in the browser, and lose the account the moment they breach a drawdown limit. It is a two-person build: I own the Go engine, the Next.js trading terminal and the overall architecture, and work on the NestJS API alongside the teammate who leads it.",
    points: [
      "Go engine checks every open account against live ticks and reports breaches to the API, with retries and a lock so nothing trades after a breach.",
      "Streams real FX, metals and index prices into Redis, and refuses to fill on stale quotes or abnormally wide spreads.",
      "One symbol registry shared by the engine and the browser, so displayed P&L and settled P&L agree.",
      "Trading terminal on TradingView Lightweight Charts with candle history and live floating P&L.",
    ],
    stack: ["Go", "gRPC", "Redis", "PostgreSQL", "NestJS", "Next.js", "Tailwind"],
    links: [],
    note: "Private codebase",
    image: fundedgreen,
    tone: "dark",
  },
  {
    name: "Azimetra",
    role: "Full-stack & GIS engineer",
    pitch: "Survey computation and plan plotting for Nigerian land surveyors.",
    body:
      "Surveyors juggle scanned plans, field books, spreadsheets and CAD files, and the link between them gets lost. Azimetra keeps one chain from the original evidence to the delivered plan, so every figure can be traced and defended. I held both the full-stack and GIS roles and designed much of the platform architecture, alongside an AI engineer who owns the models.",
    points: [
      "Values read from a scanned plan stay linked to the exact spot on the page they came from, and unreadable values are flagged instead of guessed.",
      "Closure, area and coordinates come from a deterministic engine, not a model, and every run records the coordinate system it used.",
      "Designed the architecture around a pure geodesy module with no network or model calls, a Postgres-backed job queue, and a single HTTP boundary to the AI service.",
      "Exports editable DXF for CAD, with SVG and PDF for review.",
      "Running a closed pilot with Nigerian survey firms.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "PostGIS", "pyproj", "React", "TypeScript", "Docker"],
    links: [{ label: "Live site", href: "https://useazimetra.com/" }],
    image: azimetra, // poster frame
    video: azimetraVideo,
  },
  {
    name: "FairSplit",
    role: "Solo · hackathon build",
    pitch: "Group expenses that settle in USDC on Base for under a cent.",
    body:
      "Split trips, rent or dinners with anyone, anywhere. Balances settle onchain in about two seconds, and people connect with a wallet instead of handling seed phrases.",
    points: [
      "Live demo on Base Sepolia testnet, built for about a cent of gas per settlement on Base.",
      "Non-custodial: users always hold their own funds.",
    ],
    stack: ["Next.js", "TypeScript", "Viem", "Solidity", "Base"],
    links: [
      { label: "Live site", href: "https://fairsplit-ten.vercel.app/" },
      { label: "Code", href: "https://github.com/Boblee24/fairsplit" },
    ],
    image: fairsplit, // poster frame
    video: fairsplitVideo,
  },
  {
    name: "Magent",
    role: "Software engineer",
    pitch: "An AI marketing assistant for strategy and campaign analysis.",
    body:
      "Worked across the product interface and the Node.js backend for an assistant that helps businesses plan marketing strategy and make sense of campaign data.",
    points: [],
    stack: ["Next.js", "TypeScript", "React", "Node.js", "MongoDB", "Tailwind"],
    links: [{ label: "Live site", href: "https://hellomagent.com/" }],
    image: magent,
  },
  {
    name: "LarrySat Solar",
    role: "Client project",
    pitch: "Marketing site and project gallery for a Nigerian solar installer.",
    body:
      "A custom Next.js site that shows completed installations, explains each service and turns visitors into quote requests.",
    points: [],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    links: [{ label: "Live site", href: "https://larrysat.com.ng/" }],
    image: larrysat, // poster frame
    video: larrysatVideo,
  },
  {
    name: "FarmConnect",
    role: "Solo project",
    pitch: "A WhatsApp bot that helps farmers check prices and find buyers.",
    body:
      "Farmers ask for market prices in a WhatsApp chat and get nearby buyers by location, with no app to install.",
    points: [],
    stack: ["Node.js", "Twilio", "WhatsApp API"],
    links: [{ label: "Code", href: "https://github.com/Boblee24/farmconnect" }],
    image: farmconnect,
  },
];

export const archive = [
  {
    name: "Tradiant",
    desc: "Stock tracker with live market data",
    stack: "React · Tailwind",
    href: "https://tangent-ayomi.netlify.app",
    code: "https://github.com/Boblee24/coinhub",
    image: tradiant,
  },
  {
    name: "Quizzical",
    desc: "Quiz app with categories and scoring",
    stack: "React · Tailwind",
    href: "https://bob-quizzify.netlify.app/",
    code: "https://github.com/Boblee24/quiziccal",
    image: quizzical,
  },
  {
    name: "Rogue",
    desc: "Responsive landing page clone",
    stack: "React · CSS",
    href: "https://ayomi-rogue.netlify.app/",
    code: "https://github.com/Boblee24/Rogue",
    image: rogue,
  },
  {
    name: "Bookmark",
    desc: "Bookmark manager landing page",
    stack: "React · CSS",
    href: "https://ayo-bookmark.netlify.app/",
    code: "https://github.com/Boblee24/Bookmark.github.io",
    image: bookmark,
  },
];

export const experience = [
  {
    company: "FundedGreen Capital",
    what: "Prop-trading platform",
    role: "Engine Architect",
    period: "2026 —",
    points: [
      "Designed the system architecture and wrote the Go risk engine, the price feed and the Next.js trading terminal, and contributed to the NestJS API.",
      "Built the price-safety checks that keep orders from filling on bad market data.",
    ],
  },
  {
    company: "Azimetra",
    what: "Survey computation platform",
    role: "Full-stack & GIS Engineer",
    period: "2026 —",
    href: "https://useazimetra.com/",
    points: [
      "Held the full-stack and GIS roles: API, database, review flow, exports and deploy, plus the geodesy module and coordinate-system rules.",
      "Shaped the platform architecture so every computed figure is deterministic, reproducible and traceable to its source.",
    ],
  },
  {
    company: "GrantWrite AI",
    what: "AI grant writing",
    role: "Software Engineer",
    period: "2026",
    href: "https://grantwriteai.com/",
    points: [
      "Built reusable UI for the proposal editor and wired in AI generation for drafting and real-time refinement.",
      "Worked with backend and AI contributors on API integration and editor performance.",
    ],
  },
  {
    company: "CarbonNote",
    what: "AI newsletter generator",
    role: "Frontend Engineer",
    period: "2024 — 2025",
    href: "https://dashboard.carbonnote.ai/",
    points: [
      "Built the dashboard UI and integrated GPT-based content APIs for newsletter generation.",
      "Reworked API response handling with the backend and AI teams to support per-user content customisation.",
    ],
  },
  {
    company: "AegoraPay",
    what: "Crypto escrow & payments",
    role: "Software Engineer",
    period: "2024",
    href: "https://www.aegorapay.com/",
    points: [
      "Built full-stack features for milestone-based escrow on the XRP Ledger, from UI to backend APIs.",
      "Improved data flow between the contract, payment and frontend layers.",
    ],
  },
  {
    company: "Philvest",
    what: "Creator monetisation",
    role: "Frontend Engineer",
    period: "2023 — 2024",
    points: [
      "Built the creator dashboard in React and TypeScript: uploads, analytics and payout tracking.",
      "Added real-time engagement metrics with Supabase and WebSockets.",
    ],
  },
];

export const toolbox = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Go", "SQL", "Rust"] },
  { group: "Frontend", items: ["React", "Next.js", "Redux Toolkit", "React Query", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Express", "gRPC", "Redis", "PostgreSQL", "Supabase"] },
  { group: "Web3", items: ["Viem", "Solidity", "Base", "XRP Ledger"] },
  { group: "Tooling", items: ["Git", "Docker", "Jest", "Testing Library", "Figma"] },
];
