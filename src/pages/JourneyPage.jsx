import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JourneyPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-up").forEach((el, i) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 sm:py-20 px-5 sm:px-8 md:px-10 relative border-t border-b border-primary/10"
      id="journey"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        {/* Left Side Title */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-4 md:gap-8 md:sticky md:top-32 md:self-start reveal-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
            The <br /> Journey
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-on-surface-variant">
            From basics to complex choreographies of motion and logic.
          </p>
        </div>

        {/* Right Side Timeline */}
        <div className="col-span-1 md:col-span-7 md:col-start-6 relative mt-8 md:mt-0">
          {/* Timeline Line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-primary/20"></div>

          <div className="flex flex-col gap-16 relative side-line">
            {/* Milestone 1 */}
            <div className="relative pl-10 sm:pl-12 group reveal-up ">
              <div className="absolute left-0 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2  bg-white border-black  transition-all group-hover:bg-black"></div>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                The Foundation
              </h4>
              <p className="text-base sm:text-lg md:text-xl text-on-surface-variant mb-4">
                Started with the fundamentals of the web, learning how structure, styling, and logic come together to create functional interfaces.
              </p>
              <span className="text-sm sm:text-lg font-mono text-on-surface-variant border border-on-surface-variant px-2 py-1">
                2025
              </span>
            </div>

            {/* Milestone 2 */}
            <div className="relative pl-10 sm:pl-12  group reveal-up ">
              <div className="absolute left-0 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2  bg-white border-black  transition-all group-hover:bg-black"></div>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                The Interface Builder
              </h4>
              <p className="text-base sm:text-lg md:text-xl text-on-surface-variant mb-4">
                Moved beyond static pages into component-driven interfaces, building responsive applications and working with real-world APIs.
              </p>
              <span className="text-sm sm:text-lg font-mono text-on-surface-variant border border-on-surface-variant px-2 py-1">
                Jul, 2026
              </span>
            </div>

            {/* Milestone 3 */}
            <div className="relative pl-10 sm:pl-12 group reveal-up">
              <div className="absolute left-0 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2  bg-white border-black  transition-all group-hover:bg-black"></div>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                The State of Things
              </h4>
              <p className="text-base sm:text-lg md:text-xl text-on-surface-variant mb-4">
                Went deeper into application architecture, learning to manage complex client state and server data with scalable patterns
              </p>
              <span className="text-sm sm:text-lg font-mono text-on-surface-variant border border-on-surface-variant px-2 py-1">
                Aug, 2026
              </span>
            </div>
            {/* Milestone 4 */}
            <div className="relative pl-10 sm:pl-12 group reveal-up">
              <div className="absolute left-0 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2  bg-white border-black  transition-all group-hover:bg-black"></div>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                Motion &amp; Polish
              </h4>
              <p className="text-base sm:text-lg md:text-xl text-on-surface-variant mb-4">
                Refining the user experience with GSAP, bringing interfaces to
                life through nuanced animations.
              </p>
              <span className="text-sm sm:text-lg font-mono text-on-surface-variant border border-on-surface-variant px-2 py-1">
                PRESENT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyPage;
