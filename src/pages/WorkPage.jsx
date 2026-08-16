import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".work-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-x-hidden min-h-screen py-10">
      <h1 className="text-4xl md:text-6xl w-fit mx-4 sm:mx-8 py-5 border-b-2 sm:border-b-4 border-black font-medium mb-10">
        Selected Work
      </h1>

      <div
        ref={containerRef}
        className=" mx-auto px-4 sm:px-8  pb-24"
      >
        {/* Card 01 */}
        <div className="work-card sticky top-24 z-10 bg-white border-2 border-black/10 rounded-2xl shadow-xl overflow-hidden">
        <a href="#" rel="noopener noreferrer">
          <div className="grid group grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center p-6 md:p-12 relative">
            {/* Left: Text Side */}
            <div className="relative flex flex-col gap-6 z-10 sm:px-2">
              <span className="absolute -z-10 text-[8rem] md:text-[11rem] font-bold text-[#00000014] -top-16 -left-2 transition-colors duration-300 group-hover:text-[#00000033] select-none pointer-events-none">
                01
              </span>

              <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
                Personal <br /> Portfolio
              </h2>
              <p className="text-base md:text-lg font-mono text-gray-700 leading-relaxed lg:pr-8">
                A modern, interactive personal portfolio website showcasing projects, skills, and journey. Designed with smooth transitions, micro-interactions, and a bold visual aesthetic to provide a memorable user experience.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 bg-black/5 font-mono rounded-md text-sm">
                  React
                </span>
                <span className="px-5 py-2 bg-black/5 font-mono rounded-md text-sm">
                  Tailwind CSS
                </span>
                <span className="px-5 py-2 bg-black/5 font-mono rounded-md text-sm">
                  GSAP
                </span>
              </div>
            </div>

            {/* Right: Image Side */}
            <div className="w-full max-w-xl mx-auto flex justify-center items-center rounded -rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <img
                src="portfolio-screenshot.png"
                alt="Portfolio Screenshot"
                className="w-full h-auto hover:scale-105 rounded-lg object-cover border-2 shadow-[4px_4px_0px_0px_#111936] transition-all scale-105"
              />
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;