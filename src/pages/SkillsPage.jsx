import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const coreSkills = [
  {
    label: "Frontend",
    accent: "#CEE5FF",
    rotate: "-rotate-1",
    skills: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3", "GSAP", "Tailwind CSS"],
  },
  {
    label: "Backend",
    accent: "#FFDAD5",
    rotate: "rotate-1",
    skills: ["Node.js", "Express.js", "Python", "C++"],
  },
  {
    label: "Databases",
    accent: "#D4F5E0",
    rotate: "-rotate-1",
    skills: ["SQL (SQLite, PostgreSQL)", "MongoDB"],
  },
  {
    label: "DS & Algorithms",
    accent: "#FFF3CD",
    rotate: "rotate-1",
    skills: ["Algorithmic problem-solving", "Optimization"],
  },
];

const aiSkills = [
  {
    label: "AI Integration",
    accent: "#E8D5FF",
    rotate: "-rotate-1",
    skills: ["LLM Integration", "Google Gemini API", "Groq API", "Gradio"],
  },
  {
    label: "Workflow Automation",
    accent: "#FFE4B5",
    rotate: "rotate-1",
    skills: ["n8n", "AI Agent Architecture", "RAG Systems", "API Webhooks"],
  },
];

const SkillCard = ({ label, accent, rotate, skills }) => (
  <div
    className={`skill-card relative ${rotate} border-2 border-black rounded p-5 sm:p-6 shadow-[4px_4px_0px_0px_#111936] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#111936] cursor-default`}
    style={{ backgroundColor: `${accent}88` }}
  >
    {/* Category label tag */}
    <span
      className="absolute -top-4 left-4 px-3 py-1 text-xs font-mono font-bold uppercase border-2 border-black tracking-wider"
      style={{ backgroundColor: accent }}
    >
      {label}
    </span>

    {/* Skills pills */}
    <div className="flex flex-wrap gap-2 pt-3">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="px-3 py-1 text-xs sm:text-sm font-mono font-semibold border-2 border-black bg-[#f7f2e8] rounded-sm hover:bg-black hover:text-[#f7f2e8] transition-colors duration-150 cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading reveal
      gsap.from(".skills-heading", {
        yPercent: 60,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      // Section label slide in
      gsap.from(".skills-label", {
        x: -40,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          end: "bottom 30%",
          scrub: 1,
        },
      });

      // Core skill cards stagger
      gsap.from(".skill-card", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      // AI section heading
      gsap.from(".ai-badge", {
        x: -30,
        opacity: 0,
        scrollTrigger: {
          trigger: ".ai-section",
          start: "top 85%",
          end: "bottom 30%",
          scrub: 1,
        },
      });

      // AI cards stagger
      gsap.from(".ai-card", {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".ai-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen px-5 sm:px-8 md:px-28 lg:px-40 py-16 md:py-24"
    >
      {/* ── Section Header ── */}
      <div className="border-b-2 sm:border-b-4 border-black w-full h-fit py-2 sm:py-3 overflow-hidden mb-10 sm:mb-14">
        <div className="flex items-end gap-4 flex-wrap">
          <h2 className="skills-heading text-4xl sm:text-6xl md:text-7xl font-bold">
            Skills.
          </h2>
          <p className="skills-label font-mono uppercase font-bold tracking-widest text-xs border-l-4 px-4 border-black mb-2 sm:mb-3">
            What I work with
          </p>
        </div>
      </div>

      {/* ── Core Development ── */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="font-mono uppercase font-bold tracking-widest text-xs border-l-4 px-4 border-black py-1">
            Core Development
          </span>
        </div>

        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {coreSkills.map((cat, i) => (
            <SkillCard key={i} {...cat} />
          ))}
        </div>
      </div>

      {/* ── Dashed Divider ── */}
      <div className="flex items-center gap-4 my-10 sm:my-14">
        <div className="flex-1 border-t-2 border-dashed border-black opacity-40" />
        <span className="font-mono text-xs uppercase tracking-widest font-bold opacity-60 px-2">
          standout
        </span>
        <div className="flex-1 border-t-2 border-dashed border-black opacity-40" />
      </div>

      {/* ── AI & Automation ── */}
      <div className="ai-section">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="ai-badge font-mono uppercase font-bold tracking-widest text-xs px-4 py-1.5 border-2 border-black bg-[#E8D5FF] shadow-[2px_2px_0px_0px_#111936]">
            ✦ AI &amp; Automation — Standout Skills
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {aiSkills.map((cat, i) => (
            <div key={i} className="ai-card">
              <SkillCard {...cat} />
            </div>
          ))}
        </div>

        {/* Accent note */}
        <p className="mt-8 font-mono text-xs sm:text-sm text-[#46464D] border-l-4 border-black px-4 leading-relaxed max-w-xl">
          Specialising in bridging AI capabilities with real-world workflows —
          from building RAG pipelines to deploying production-grade LLM agents.
        </p>
      </div>
    </div>
  );
};

export default SkillsPage;
