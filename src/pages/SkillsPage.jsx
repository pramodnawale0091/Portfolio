import React, { useEffect, useRef } from "react";

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
    className={`relative ${rotate} border-2 border-black rounded p-5 sm:p-6 shadow-[4px_4px_0px_0px_#111936] transition-shadow duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#111936] cursor-default`}
    style={{ backgroundColor: `${accent}99` }}
  >
    <span
      className="absolute -top-4 left-4 px-3 py-1 text-xs font-mono font-bold uppercase border-2 border-black tracking-wider"
      style={{ backgroundColor: accent }}
    >
      {label}
    </span>
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
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("skills-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .skills-section .anim {
          opacity: 1;
          transform: translateY(0);
        }
        .skills-section:not(.skills-visible) .anim {
          opacity: 0;
          transform: translateY(30px);
          transition: none;
        }
        .skills-section.skills-visible .anim {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .skills-section.skills-visible .anim:nth-child(1) { transition-delay: 0ms; }
        .skills-section.skills-visible .anim:nth-child(2) { transition-delay: 100ms; }
        .skills-section.skills-visible .anim:nth-child(3) { transition-delay: 200ms; }
        .skills-section.skills-visible .anim:nth-child(4) { transition-delay: 300ms; }
        .skills-section.skills-visible .anim:nth-child(5) { transition-delay: 400ms; }
        .skills-section.skills-visible .anim:nth-child(6) { transition-delay: 500ms; }
        .skills-section.skills-visible .anim:nth-child(7) { transition-delay: 600ms; }
        .skills-section.skills-visible .anim:nth-child(8) { transition-delay: 700ms; }
      `}</style>

      <div
        ref={sectionRef}
        className="skills-section w-full px-5 sm:px-8 md:px-28 lg:px-40 py-16 md:py-24"
      >
        {/* Section Header */}
        <div className="border-b-2 sm:border-b-4 border-black w-full py-2 sm:py-3 overflow-hidden mb-10 sm:mb-14 anim">
          <div className="flex items-end gap-4 flex-wrap">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold">Skills.</h2>
            <p className="font-mono uppercase font-bold tracking-widest text-xs border-l-4 px-4 border-black mb-2 sm:mb-3">
              What I work with
            </p>
          </div>
        </div>

        {/* Core Development */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8 anim">
            <span className="font-mono uppercase font-bold tracking-widest text-xs border-l-4 px-4 border-black py-1">
              Core Development
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {coreSkills.map((cat, i) => (
              <div key={i} className="anim">
                <SkillCard {...cat} />
              </div>
            ))}
          </div>
        </div>

        {/* Dashed Divider */}
        <div className="flex items-center gap-4 my-10 sm:my-14 anim">
          <div className="flex-1 border-t-2 border-dashed border-black opacity-40" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold opacity-60 px-2">
            standout
          </span>
          <div className="flex-1 border-t-2 border-dashed border-black opacity-40" />
        </div>

        {/* AI & Automation */}
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8 anim">
            <span className="font-mono uppercase font-bold tracking-widest text-xs px-4 py-1.5 border-2 border-black bg-[#E8D5FF] shadow-[2px_2px_0px_0px_#111936]">
              ? AI &amp; Automation — Standout Skills
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {aiSkills.map((cat, i) => (
              <div key={i} className="anim">
                <SkillCard {...cat} />
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-xs sm:text-sm text-[#46464D] border-l-4 border-black px-4 leading-relaxed max-w-xl anim">
            Specialising in bridging AI capabilities with real-world workflows —
            from building RAG pipelines to deploying production-grade LLM agents.
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
