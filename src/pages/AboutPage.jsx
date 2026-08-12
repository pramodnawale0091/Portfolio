import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    
    const ctx = gsap.context(() => {
      
      gsap.fromTo(
        videoRef.current,
        { 
          y: 100,     
          opacity: 0.2 
        }, 
        {
          y: -30,     
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: containerRef.current, 
            start: "top 85%",               
            end: "bottom 15%",              
            scrub: 1,                       
          }
        }
      );

      // 2. Text Reveal Animation
      gsap.from('.heading', { 
        yPercent: 60,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: containerRef.current, 
          start: "top 80%",               
          end: "bottom 20%",              
          scrub: 1, 
        }
      });

      gsap.from('.about-p', {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: containerRef.current, 
          start: "top 75%",               
          end: "bottom 20%",              
          scrub: 1, 
        }
      });

    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-100 md:min-h-screen  grid gap-0 grid-cols-1 md:grid-cols-2 md:gap-10 p-5 sm:p-8 md:p-40  items-center"
    >
      {/* Left: Video Box */}
      <div className="videoContainer flex justify-center items-center py-6 sm:py-0">
        <div 
          ref={videoRef} 
          
          className="w-200 relative rotate-1 bg-transparent p-2.5 sm:p-4 font-mono border-2 border-black rounded cursor-pointer shadow-[4px_4px_0px_0px_#111936] sm:shadow-[6px_6px_0px_0px_#111936] transition-shadow"
        >
          <video 
            src="about.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover rounded"
          ></video>

          
          <p className="px-3 py-1 sm:px-5 sm:py-2 text-xs sm:text-base md:text-xl border-2 border-black absolute uppercase -top-5 -left-4 sm:-top-8 sm:-left-6 md:-top-10 md:-left-8 bg-[#CEE5FF] -rotate-4 shadow-sm font-semibold">
            React
          </p>
          <p className="px-3 py-1 sm:px-5 sm:py-2 text-xs sm:text-sm md:text-base border-2 border-black absolute uppercase -right-4 -bottom-4 sm:-right-6 sm:-bottom-5 md:-right-8 rotate-3 bg-[#FFDAD5] shadow-sm font-semibold">
            JavaScript
          </p>
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="flex flex-col justify-center gap-4 sm:gap-6 px-2 sm:px-30">
        <div className="border-b-2 sm:border-b-4 border-black w-full h-fit py-2 sm:py-3  overflow-hidden">
          {/* FIXED: Heading size on mobile */}
          <h1 className="heading text-4xl sm:text-6xl md:text-7xl font-bold">Hello.</h1>
        </div>
        
        
        <p className="about-p text-base sm:text-lg md:text-xl font-mono text-[#46464D] leading-relaxed">
          Building thoughtful digital experiences with code, interaction,
          and motion. I focus on creating interfaces that feel alive,
          blending technical precision with a hand-crafted aesthetic.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;