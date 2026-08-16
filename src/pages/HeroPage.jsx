import { MoveDownRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroPage = () => {
  const videoRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {


    const tl = gsap.timeline({ delay: 1 });

    // Video Zoom In
    tl.from(videoRef.current, {
      scale: 1.5,
      duration: 0.7,
      ease: "power2.in",
    });

    // Heading Reveal
    tl.from(".first-heading", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
    }).addLabel("first-h-complete");

    // Name Letter Stagger
    tl.fromTo(
      ".letter",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.6)",
        stagger: 0.08,
      },
      "first-h-complete"
    );

    // Label 1
    gsap.set(textRef1.current, { letterSpacing: "0px", x: -40, opacity: 0 });
    tl.to(
      textRef1.current,
      { x: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
      "-=0.6"
    ).to(
      textRef1.current,
      { letterSpacing: "0.2em", duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    // Label 2
    gsap.set(textRef2.current, { letterSpacing: "0px", x: -40, opacity: 0 });
    tl.to(
      textRef2.current,
      { x: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
      "-=0.4"
    ).to(
      textRef2.current,
      { letterSpacing: "0.2em", duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    // Subheading Paragraph
    tl.from(
      ".subHeading1",
      {
        opacity: 0,
        y: 15,
        duration: 0.5,
      },
      "-=0.6"
    );

    // Buttons Stagger Reveal
    tl.fromTo(
      ".hero-btn",
      {
        opacity: 0,
        y: 20,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.12,
      },
      "-=0.4"
    ).from(".lastHome", {
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
    });

    // Scroll Arrow Floating Animation
    gsap.to(".float-arrow", {
      y: 6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 0.8,
    });


    gsap.to(".videoContainer", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-page-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

  }, []);

  return (
    <div className="hero-page-wrapper w-full h-screen relative flex items-center justify-start overflow-hidden pt-28 md:pt-36 pb-12">
      {/* Video Container */}
      <div className="videoContainer absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="heroVideo.mp4"
          className="w-full h-full scale-110 object-cover paper-texture-2"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>

      {/* Main Content Container */}
      <div className="container relative z-10 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
        {/* Headings */}
        <div>
          <div className="w-fit h-fit overflow-hidden">
            <h2 className="first-heading py-1 font-semibold uppercase text-2xl sm:text-3xl md:text-4xl text-h2-clr">
              Hello, I'm
            </h2>
          </div>
          <div className="overflow-hidden py-4">
            <h1 className="second-heading font-bold uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-black tracking-tight leading-none flex flex-wrap">
              {"Pramod".split("").map((char, i) => (
                <span
                  key={i}
                  className="letter inline-block opacity-0 translate-y-10"
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>
        </div>

        {/* Subheadings & Action Area */}
        <div className="flex flex-col gap-6 md:gap-8 pl-0 sm:pl-5 pt-8 md:pt-12">
          <div className="flex flex-col gap-3">
            <p
              ref={textRef1}
              className="w-fit font-mono uppercase font-bold tracking-widest text-xs border-l-4 px-4 border-black"
            >
              Full-stack Developer
            </p>
            <p
              ref={textRef2}
              className="w-fit font-mono uppercase font-bold tracking-widest text-xs border-l-4 px-4 border-black"
            >
              Based in India
            </p>
          </div>

          <p className="subHeading1 font-mono font-semibold tracking-widest text-base sm:text-lg max-w-2xl leading-relaxed">
            Building thoughtful digital experiences <br className="hidden sm:inline" /> with code, interaction and motion.
          </p>

          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-4">
            {/* Buttons */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <button className="hero-btn px-6 py-2.5 font-mono text-base sm:text-lg bg-black text-white border-2 border-black rounded cursor-pointer shadow-[4px_4px_0px_0px_#111936] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#111936] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-shadow duration-150">
                <a href="#work"> View More </a>
              </button>

              <button className="hero-btn px-6 py-2.5 font-mono text-base sm:text-lg bg-transparent hover:bg-black text-black hover:text-white border-2 border-black rounded cursor-pointer shadow-[4px_4px_0px_0px_#111936] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#111936] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-shadow duration-150">
                <a href="#contact"> Contact </a>
              </button>
            </div>

            <div className="lastHome ">
              <a href="#about" className="flex items-center sm:flex-col justify-start sm:justify-center gap-2">
                <p className="uppercase font-mono tracking-widest text-xs font-bold sm:-rotate-2">
                  Scroll to explore
                </p>
                <MoveDownRight className="float-arrow w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;