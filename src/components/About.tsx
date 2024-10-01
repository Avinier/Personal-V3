import React, { useState } from "react";

const About: React.FC = () => {
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isSSAIHovered, setIsSSAIHovered] = useState(false);


  const handleImageClick = () => {
    window.open(
      "https://docs.google.com/document/d/e/2PACX-1vRHA8mSTTW8dV4aS6bub4olf1Ea-0kR0Dd2Yl_syu9ue-ujQTLxQghRTvNUpAcOyA/pub",
      "_blank"
    );
  };
  const handleGithubClick = () => {
    window.open("https://github.com/Avinier?tab=repositories", "_blank");
  };
  const handleSSAIClick = () => {
    window.open("https://site.quantumsenses.com", "_blank");
  };

  return (
    <section className="bg-background">
      <div className="w-[75%] mx-auto">
        <h1 className="font-heading text-4xl text-text text-right">About</h1>
        <h4 className="font-body text-lg italic mb-[50px] text-right">
          My life right now.
        </h4>
        <div className="relative h-[600px]">
          <div
            className="absolute w-[200px] h-[250px] border border-gray top-[10%] left-[10%] cursor-pointer scroll-hide"
            onClick={handleImageClick}
            onMouseEnter={() => setIsResumeHovered(true)}
            onMouseLeave={() => setIsResumeHovered(false)}
          >
            <img
              src="/resume.png"
              alt="About Me Preview"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gray transition-opacity duration-300 ${
                isResumeHovered ? "opacity-50" : "opacity-0"
              }`}
            ></div>
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isResumeHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div>
                <h3 className="text-text text-2xl text-center font-body">
                  Resume
                </h3>
                <p className="text-gray-200 text-sm text-center font-body">
                  Check out my resume to know more about my work and experience
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-[5%] right-[5%] w-[200px] h-[200px] cursor-pointer"
            onClick={handleGithubClick}
            onMouseEnter={() => setIsGithubHovered(true)}
            onMouseLeave={() => setIsGithubHovered(false)}
          >
            {isGithubHovered && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px]">
                <img
                  src="/morework.png"
                  className="w-full h-full object-contain animate-spin-slower"
                  alt="More Work Border"
                />
              </div>
            )}
            <img
              src="/github-logo.png"
              alt="GitHub"
              className="relative z-10 w-full h-full object-contain animate-spin-slow"
            />
          </div>
          <div className="absolute bottom-[50%] left-[50%] cursor-pointer" onClick={handleSSAIClick} onMouseEnter={() => setIsSSAIHovered(true)} onMouseLeave={() => setIsSSAIHovered(false)}>
            {isSSAIHovered && <p className="font-body text-slate-400 text-md mb-1 text-center">Something I'm working on with my frnds</p>}
            <img src="/superserverai-logo.png" className="w-full h-full object-contain" alt="more work"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
