import React, { useState, useEffect } from "react";
import SpotifyNowPlaying from "./AboutSection/SpotifyNowPlaying";
import SkillsGrid from "./AboutSection/SkillSquare";
import BookDisplay from "./AboutSection/BookDisplay";

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
];

const QuoteBlock: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  if (!quote) return null;

  return (
    <div className="w-[300px] px-5 pt-2 pb-0 border-l-4 border-text rounded-md cursor-pointer hover:bg-[#eeeae67d]">
      <div className="flex space-x-4">
        <div className="flex-shrink-0">
          <svg className="h-8 w-8 text-text" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <div className="flex-grow">
          <p className="text-lg font-body text-text mb-2 text-justify leading-5">{quote.text}</p>
          <p className="text-md font-heading text-slate-400 text-right">~ {quote.author}</p>
        </div>
      </div>
    </div>
  );
};

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
                <p className="text-text text-sm text-center font-body">
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
          {/* <SpotifyNowPlaying/> */}
          <div className="absolute left-[50%] bottom-[10%]">
            <QuoteBlock/>
          </div>
          <div className="absolute right-[50%] top-[50%]">
            <SkillsGrid/>
          </div>
          <div className="absolute right-[75%] top-0">
            <BookDisplay/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
