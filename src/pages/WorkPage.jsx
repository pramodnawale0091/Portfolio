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
        <a href="https://www.linkedin.com/posts/shrijal-gupta-413aa3359_reactjs-redux-reduxthunk-activity-7491927826418491393-p9Va?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFlUCI8BBsFEDXPUhBuFIfl80E9indsoq88" target="_blank" rel="noopener noreferrer">
          <div className="grid group grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center p-6 md:p-12 relative">
            {/* Left: Text Side */}
            <div className="relative flex flex-col gap-6 z-10 sm:px-2">
              <span className="absolute -z-10 text-[8rem] md:text-[11rem] font-bold text-[#00000014] -top-16 -left-2 transition-colors duration-300 group-hover:text-[#00000033] select-none pointer-events-none">
                01
              </span>

              <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
                E-Commerce <br /> Experience
              </h2>
              <p className="text-base md:text-lg font-mono text-gray-700 leading-relaxed lg:pr-8">
                A fully immersive shopping journey focusing on seamless
                transitions and micro-interactions to enhance user engagement.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 bg-black/5 font-mono rounded-md text-sm">
                  React
                </span>
                <span className="px-5 py-2 bg-black/5 font-mono rounded-md text-sm">
                  Redux
                </span>
              </div>
            </div>

            {/* Right: Image Side */}
            <div className="w-full max-w-xl mx-auto  flex justify-center items-center rounded -rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <img
                src="image-3.png"
                alt="E-commerce"
                className="w-full h-auto hover:scale-105 rounded-lg object-cover border-2 shadow-[4px_4px_0px_0px_#111936] transition-all scale-105"
              />
            </div>
          </div>
          </a>
        </div>

        {/* Card 02 */}
        <div className="work-card sticky top-28  z-20 bg-white border-2 border-black/10 rounded-2xl shadow-xl overflow-hidden">
        <a href="https://productivity-dashboard-smoky-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="grid group grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center p-6 md:p-12 relative">
            {/* Image Side */}
            <div className="order-2 md:order-1 w-full max-w-xl mx-auto flex justify-center items-center rounded rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <img
                src="image2.png"
                alt="Portfolio"
                className="w-full h-auto rounded-lg object-cover border-2 shadow-[4px_4px_0px_0px_#111936]"
              />
            </div>

            {/* Text Side */}
            <div className="order-1 md:order-2 relative flex flex-col gap-6 z-10 sm:px-2">
              <span className="absolute -z-10 text-[8rem] md:text-[11rem] font-bold text-[#00000014] -top-16 right-0 transition-colors duration-300 group-hover:text-[#00000033] select-none pointer-events-none">
                02
              </span>

              <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
                Productivity <br /> Dashboard
              </h2>
              <p className="text-base md:text-lg font-mono text-gray-700 leading-relaxed lg:pr-8">
                A complete productivity workspace combining task management, daily planning, goal tracking, Pomodoro sessions, and real-time weather information into one focused experience.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 bg-black/5 font-mono rounded-md text-sm">
                  HTML
                </span>
                <span className="px-5 py-2 bg-black/5 font-mono rounded-md text-sm">
                  CSS
                </span>
                <span className="px-5 py-2 bg-black/5 font-mono rounded-md text-sm">
                  Java Script
                </span>
              </div>
            </div>
          </div>
          </a>
        </div>

        {/* Card 03 */}
        <div className="work-card sticky top-32 z-30 bg-white border-2 border-black/10 rounded-2xl shadow-xl overflow-hidden">
    <a href="https://finance-dashboard-vanilla-js-two.vercel.app" target="_blank" rel="noopener noreferrer">
          <div className="grid group grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center p-6 md:p-12 relative">
            {/* Left: Text Side */}
            <div className="relative flex flex-col gap-6 z-10 sm:px-2">
              <span className="absolute -z-10 text-[8rem] md:text-[11rem] font-bold text-[#00000014] -top-16 -left-2 transition-colors duration-300 group-hover:text-[#00000033] select-none pointer-events-none">
                03
              </span>

              <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
                FINANCE <br /> MANAGER
              </h2>
              <p className="text-base md:text-lg font-mono text-gray-700 leading-relaxed lg:pr-8">
                A frontend finance management experience built to simplify income and expense tracking with real-time calculations, transaction management, search, filters, and local data persistence.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 bg-black/5 font-mono rounded-md text-sm">
                  HTML
                </span>
                <span className="px-5 py-2 bg-black/5 font-mono rounded-md text-sm">
                  CSS
                </span>
                <span className="px-5 py-2 bg-black/5 font-mono rounded-md text-sm">
                  Java Script
                </span>
              </div>
            </div>

            {/* Right: Image Side */}
            <div className="w-full max-w-xl mx-auto flex justify-center items-center rounded -rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <img
                src="image1.png"
                alt="Creative Studio"
                className="w-full h-auto rounded-lg object-cover border-2 shadow-[4px_4px_0px_0px_#111936]"
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