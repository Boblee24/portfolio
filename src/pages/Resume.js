import React from "react";
import { motion } from "framer-motion";
import HeaderAnimation from "../components/HeaderAnimation";

const Resume = () => {
  const heading = "My Resume";

  const experiences = [
    {
      title: "Software Engineer",
      company: "GRANTWRITE AI (AI Grant Writing Platform)",
      location: "REMOTE",
      year: "2026",
      description: [
        "Developed clean, reusable UI components for an AI-powered grant writing web application using modern frontend practices.",
        "Integrated AI-based content generation APIs to enable automated proposal drafting and real-time content refinement.",
        "Worked alongside backend and AI contributors to optimize API integration and UX performance."
      ],
      link: "LINK"
    },
    {
      title: "Frontend Engineer",
      company: "CARBONNOTE (AI Newsletter Generator)",
      location: "REMOTE",
      year: "2024-2025",
      description: [
        "Engineered clean, reusable UI components and integrated GPT-based content APIs, ensuring a seamless UX for AI-driven content generation.",
        "Collaborated closely with backend and AI teams to optimize API response handling and data flow for dynamic content customization.",
        "Collaborated with backend and AI teams to integrate GPT-based content APIs with seamless UX."
      ],
      link: "LINK"
    },
    {
      title: "Software Engineer",
      company: "AEGORAPAY (Crypto Escrow & Payments Platform)",
      location: "REMOTE",
      year: "2024",
      description: [
        "Built full-stack features for a blockchain-based escrow payments platform, integrating frontend UI with backend APIs and XRP Ledger workflows.",
        "Developed reusable UI components and integrated backend APIs to support milestone-based contract and payment workflows.",
        "Collaborated with cross-functional teams to optimize API integration, data flow, and overall system performance."
      ],
      link: "LINK"
    },
    {
      title: "Frontend Engineer",
      company: "PHILVEST (Content Monetization Platform)",
      location: "REMOTE",
      year: "2023-2024",
      description: [
        "Built the core creator dashboard in React + TypeScript, enabling content upload, analytics tracking, and payout monitoring.",
        "Integrated real-time engagement metrics (views, likes, shares) using Supabase and WebSocket APIs.",
        "Collaborated with backend and design teams to deliver a smooth, responsive, and accessible user experience."
      ],
      link: null
    }
  ];

  const skills = {
    languages: "JavaScript, TypeScript, SQL, Rust",
    frameworks: "Node.js, Next.js, Redux Toolkit, Tailwind CSS, Mantine UI, Material UI",
    tools: "Git/GitHub, Firebase, Supabase, NeonDB, Docker, Postman, Figma",
    testing: "Jest, React Testing Library, TDD familiarity"
  };

  const professionalSummary = "Software Engineer with 4+ years of experience building scalable web applications. Strong frontend focus with solid backend experience using React, Next.js, TypeScript, and Node.js. Experienced in API integration, cross-functional collaboration, and delivering clean, performant solutions.";

  return (
    <motion.div
      className="flex justify-center items-center pt-[3rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="resume"
    >
      <div className="flex flex-col w-full relative m-3">
        <div className="z-10 flex items-center justify-center w-full mb-[1.5rem]">
          <HeaderAnimation heading={heading} />
        </div>

        <div className="flex flex-col items-center px-4 xii:px-9 max-w-6xl mx-auto w-full">
          {/* Professional Summary */}
          <motion.div
            className="w-full mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">PROFESSIONAL SUMMARY</h2>
            <motion.div
              className="bg-gradient-to-br from-blue-50 via-purple-50 to-slate-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{professionalSummary}</p>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="w-full mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">SKILLS</h2>
            <motion.div
              className="bg-gradient-to-br from-blue-50 via-purple-50 to-slate-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6"
              whileHover={{ y: -5 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
              >
                <p className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Languages:</p>
                <p className="text-gray-700 text-xs md:text-sm">{skills.languages}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Frameworks:</p>
                <p className="text-gray-700 text-xs md:text-sm">{skills.frameworks}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 }}
              >
                <p className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Tools:</p>
                <p className="text-gray-700 text-xs md:text-sm">{skills.tools}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Testing:</p>
                <p className="text-gray-700 text-xs md:text-sm">{skills.testing}</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Professional Experience Timeline */}
          <motion.div
            className="w-full mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">PROFESSIONAL EXPERIENCE</h2>

            <div className="relative">
              {/* Timeline line - hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-purple-600 to-indigo-600"></div>

              {/* Timeline items */}
              <div className="space-y-6 md:space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-stretch md:items-center gap-4 md:gap-8`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + index * 0.15, duration: 0.7 }}
                  >
                    {/* Content */}
                    <div className="flex-1 order-2 md:order-none">
                      <motion.div
                        className="bg-gradient-to-br from-blue-50 via-purple-50 to-slate-100 p-5 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative h-full"
                        whileHover={{ y: -8, scale: 1.02 }}
                      >
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                        <p className="text-purple-600 font-semibold mb-1 text-sm md:text-base">
                          {exp.company}
                          {exp.link && <span className="ml-2 text-blue-500 cursor-pointer hover:underline text-xs md:text-sm">{exp.link}</span>}
                        </p>
                        <p className="text-gray-600 text-xs md:text-sm mb-3">{exp.location}</p>
                        <ul className="text-gray-700 text-xs md:text-sm space-y-2">
                          {exp.description.map((desc, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + index * 0.15 + i * 0.05 }}
                            >
                              <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
                              <span>{desc}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Timeline Circle and Year - Desktop */}
                    <div className="hidden md:flex flex-col items-center gap-2 flex-shrink-0 relative z-10">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-4 border-purple-400 flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1C6.48 1 2 5.48 2 11v6h4v6h12v-6h4v-6c0-5.52-4.48-10-10-10zm-2 15h-2v-2h2v2zm0-4h-2v-4h2v4zm4 4h-2v-2h2v2zm0-4h-2v-4h2v4zm4 4h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                        </svg>
                      </motion.div>
                      {/* Year Badge - positioned on opposite sides */}
                      <motion.div
                        className={`bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-md`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.15 }}
                      >
                        {exp.year}
                      </motion.div>
                    </div>

                    {/* Year Badge - Mobile (below card) */}
                    <div className="md:hidden order-3 w-full flex justify-center">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shadow-md"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.15 }}
                      >
                        {exp.year}
                      </motion.div>
                    </div>

                    {/* Spacer for alignment on desktop */}
                    <div className="hidden md:block flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.a
              href="/resume1.pdf"
              download="resume"
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold text-sm md:text-base rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg inline-block"
              whileHover={{ scale: 1.08, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              📥 Download Resume (PDF)
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;