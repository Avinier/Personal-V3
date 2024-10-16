import React, { useState, useEffect } from "react";
import SpotifyNowPlaying from "./AboutSection/SpotifyNowPlaying";
import SkillsGrid from "./AboutSection/SkillSquare";
import BookDisplay from "./AboutSection/BookDisplay";
import AchievementsBoard from "./AboutSection/AchievementsBoard";
import TweetEmbedContainer from "./AboutSection/TweetEmbed";

import { motion, AnimatePresence } from "framer-motion";

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { text: "I can accept faliure, but I can't accept not trying.", author: "Micheal Jordan" },
  { text: "The most personal is the most creative.", author: "Martin Scorsese" },
  { text: "You gotta be the champ before you become the champ.", author: "Mike Tyson" },
  { text: "I don't know shit, neither does anyone.", author: "Tim Urban" },
  { text: "The only sign of intelligence is that you get what you want in life.", author: "Naval" },
  { text: "It isn't about how hard you hit, it's about how hard you get hit and keep moving forward.", author: "Rocky Balboa" },
  { text: "I know what I like, and don't like. And I'm decisive about what I like and don't like.", author: "Rick Rubin" },
  { text: "If you are a fan of Kanye West, you are a fan of yourself.", author: "Kanye West" },
  { text: "Everything I'm not made me everything I am.", author: "Kanye West" },
  { text: "All truly strong people are kind.", author: "Takuan, Vagabond" },
  { text: "This man is gazing up at something that I can't even see.", author: "Levi to Erwin"}
];

const QuoteBlock: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [key, setKey] = useState(0); 

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    // Initial quote
    setQuote(getRandomQuote());

    // Set up interval to change quote every 30 seconds
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1); // Change key to trigger animation
      setQuote(getRandomQuote());
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  if (!quote) return null;

  return (
    <div className="w-[300px] h-max-[120px] px-5 pt-2 pb-0 border-l-4 border-text rounded-md cursor-pointer hover:bg-[#eeeae67d]">
      <div className="flex space-x-4">
        <div className="flex-shrink-0">
          <svg className="h-8 w-8 text-text" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg font-body text-text mb-2 text-justify leading-5">{quote.text}</p>
              <p className="text-md font-heading text-slate-400 text-right">~ {quote.author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const gifs = [
  "https://giphy.com/embed/Ku1FyPdoBXVg4",
  "https://giphy.com/embed/JRlqKEzTDKci5JPcaL",
  "https://giphy.com/embed/l4FGDAx6u3hthMhgI",
  "https://giphy.com/embed/1dBOHESEOYQa4",
  "https://giphy.com/embed/K0JrA2VbkFy2A",
  "https://giphy.com/embed/3o6Zt6czQXwQhQjHQQ",
  "https://giphy.com/embed/12CSpwCtoy1Vfy",
  "https://giphy.com/embed/oHsKFiT28Id0I",
  "https://giphy.com/embed/VwH0xaBKMDdXW",
  "https://giphy.com/embed/USUIlS7b3qnD9S2A57",
  
];

const GifContainer = () => {
  const [currentGif, setCurrentGif] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGif((prev) => (prev + 1) % gifs.length);
    }, 7500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-[280px] h-[150px] relative rounded-lg cursor-not-allowed">
      <AnimatePresence mode="wait">
        <motion.iframe
          key={currentGif}
          src={gifs[currentGif]}
          className="absolute top-1/2 left-1/2 object-fill transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-lg"
          frameBorder="0"
          allowFullScreen
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
};


const About: React.FC = () => {
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isSSAIHovered, setIsSSAIHovered] = useState(false);
  const [isNotionHovered, setIsNotionHovered] = useState(false);



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
  const handleNotionClick = () => {
    window.open("https://complete-pyjama-132.notion.site/READLIST-11b84879fc0680fe9c1ef5859751129f", "_blank")
  }

  return (
    <section className="bg-background">
      <div className="w-[75%] mx-auto">
        <h1 className="font-heading text-4xl text-text text-right">About</h1>
        <h4 className="font-body text-lg italic mb-[50px] text-right">
          What my life looks like right now.
        </h4>
        <div className="relative h-[600px] w-[100%]">
  {/* AchievementsBoard - top-left corner */}
  <div className="absolute top-0 left-0">
    <AchievementsBoard/>
  </div>

  {/* Resume - right to AchievementsBoard */}
  <div
    className="absolute w-[200px] h-[250px] border border-gray top-0 left-[27%] cursor-pointer scroll-hide"
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
        <h3 className="text-text text-2xl text-center font-body">Resume</h3>
        <p className="text-text text-sm text-center font-body">
          Check out my resume to know more about my work and experience
        </p>
      </div>
    </div>
  </div>

  {/* SpotifyNowPlaying - top-right corner */}
  <div className="absolute top-0 right-0">
    <SpotifyNowPlaying/>
  </div>

  {/* SuperServerAI logo - below SpotifyNowPlaying */}
  <div 
      className="absolute top-[15%] h-fit w-[600px] right-0 cursor-pointer"
      onClick={handleSSAIClick}
      onMouseEnter={() => setIsSSAIHovered(true)}
      onMouseLeave={() => setIsSSAIHovered(false)}
    >
      <div className="h-6 overflow-hidden">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: isSSAIHovered ? 0 : 20,
            opacity: isSSAIHovered ? 1 : 0
          }}
          transition={{ 
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
          className="font-body text-slate-400 text-md text-center"
        >
          Something I'm working on with my friends
        </motion.p>
      </div>
      <img 
        src="/superserverai-logo.png" 
        className="w-full h-full object-fit m-0" 
        alt="logo"
      />
    </div>
    <div className="absolute top-[44%] left-[26%]">
      <GifContainer/>
    </div>

  {/* TweetEmbedContainer - bottom-right corner */}
  <div className="absolute bottom-[3%] right-0">
    <TweetEmbedContainer/>
  </div>

  {/* Github logo - left to TweetEmbedContainer */}
  <div
    className="absolute bottom-[2%] right-[29%] w-[220px] h-[220px] cursor-pointer"
    onClick={handleGithubClick}
    onMouseEnter={() => setIsGithubHovered(true)}
    onMouseLeave={() => setIsGithubHovered(false)}
  >
    {isGithubHovered && (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px]">
        <img
          src="/morework.png"
          className="w-full h-full object-fit animate-spin-slower"
          alt="More Work Border"
        />
      </div>
    )}
    <img
      src="/github-logo.png"
      alt="GitHub"
      className="relative z-10 w-full h-full object-fit animate-spin-slow"
    />
  </div>

  {/* QuoteBlock - left to Github */}
  <div className="absolute bottom-[46%] right-[20%]">
    <QuoteBlock/>
  </div>

  {/* SkillsGrid - center, slightly above QuoteBlock */}
  <div className="absolute top-[48%] left-[90%] transform -translate-x-1/2 -translate-y-1/2">
    <SkillsGrid/>
  </div>

  {/* BookDisplay - bottom-left corner */}
  <div className="absolute bottom-[18%] left-0">
    <BookDisplay/>
  </div>
  <div className="absolute bottom-[10%] left-[21%] w-[100px]">
  <div className="h-6 overflow-hidden"
  onMouseEnter={() => setIsNotionHovered(true)}
  onMouseLeave={() => setIsNotionHovered(false)}
  >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: isNotionHovered ? 0 : 20,
            opacity: isNotionHovered ? 1 : 0
          }}
          transition={{ 
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
          className="font-body text-slate-400 text-md text-center"
        >
          Top 10 fav reads rn
        </motion.p>
      </div>
    <button onClick={handleNotionClick} className="text-center text-lg underline text-blue-600 font-[900] font-heading">
      https://complete-pyjama-132.notion.site/READLIST-11b84879fc0680fe9c1ef5859751129f
    </button>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;
