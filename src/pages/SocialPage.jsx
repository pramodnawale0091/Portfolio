import React from "react";

const SocialPage = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="image3.png"
          alt="Contact background"
          className="w-full h-full object-cover scale-105 filter grayscale"
        />
      </div>

      {/* Overlay Text Box */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
        <div className="bg-[#e6e0e0e1] text-center p-6 sm:p-10 rounded-lg border-3 shadow-[2px_2px_0_0] w-full max-w-xs sm:max-w-md md:max-w-xl floating">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            LET`S BUILD SOMETHING TOGETHER.
          </h2>

          <div className="flex gap-4 sm:gap-6 justify-center text-base sm:text-lg font-semibold flex-wrap">
            <a
              href="https://github.com/pramodnawale0091"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-black hover:italic hover:underline duration-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pramod-nawale-451818384?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-black hover:italic hover:underline duration-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:pramodnawale1436@gmail.com"
              className="text-primary hover:text-black hover:italic hover:underline duration-300 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
