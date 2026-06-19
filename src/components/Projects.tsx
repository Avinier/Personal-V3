import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
      hex = hex.split('').map((c) => c + c).join('');
    }

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
  };

  const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    const rgbColor = hexToRgb(project.color);

    const dynamicBoxShadow = isHovered
      ? `rgba(${rgbColor}, 0.1) 0px 1px 1px 0px inset, rgba(${rgbColor}, 0.25) 0px 50px 100px -20px, rgba(${rgbColor}, 0.3) 0px 30px 60px -30px`
      : ``;

    return (
      <div
        className="bg-gray p-6 cursor-pointer relative"
        style={{
          boxShadow: dynamicBoxShadow,
          transition: 'box-shadow 0.3s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(project.github, '_blank')}
      >
        <img
          src="https://img.icons8.com/?size=100&id=hUqP035cA2Bd&format=png&color=6C757D"
          alt="Link"
          className="absolute top-2 right-2 w-4 h-4"
        />
        <p className="text-xs font-body text-darkgray mb-1">{project.year}</p>
        <h3 className="text-lg text-text font-heading mb-2">{project.name}</h3>
        <p className="text-darkgray font-body">{project.desc}</p>
      </div>
    );
  };

  const ProjectsGrid = ({ projects }) => {
    return (
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence initial={false}>
        {projects.map((project, index) => (
          <motion.div
            key={project.github}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1], delay: index >= CURR_INITIAL_LIMIT ? (index - CURR_INITIAL_LIMIT) * 0.04 : 0 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
        </AnimatePresence>
      </motion.div>
    );
  };

  const TimelineSlider = ({ years, onChange }) => {
    const [hoveredYear, setHoveredYear] = useState(null);
    const [clickedYear, setClickedYear] = useState('Curr');
    const sliderRef = useRef(null);
    const ballY = useMotionValue(0);
    const smoothY = useSpring(ballY, { damping: 20, stiffness: 300 });

    const getYearFromPointer = useCallback((clientY) => {
        if (!sliderRef.current) return years[0];
        const rect = sliderRef.current.getBoundingClientRect();
        const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
        ballY.set(y);

        const index = Math.round(y * (years.length - 1));
        return years[index];
    }, [years, ballY]);

    const handleYearChange = useCallback((year, isClick = false) => {
        if (isClick) {
            setClickedYear(year);
            onChange(year);
        } else {
            setHoveredYear(year);
            onChange(year);
        }
    }, [onChange]);

    const handleSliderMove = useCallback((e) => {
        handleYearChange(getYearFromPointer(e.clientY));
    }, [getYearFromPointer, handleYearChange]);

    const handleSliderLeave = useCallback(() => {
        setHoveredYear(null);
        onChange(clickedYear);
        const clickedIndex = Math.max(0, years.indexOf(clickedYear));
        ballY.set(clickedIndex / Math.max(1, years.length - 1));
    }, [ballY, clickedYear, onChange, years]);

    const handleSliderClick = useCallback((e) => {
        handleYearChange(getYearFromPointer(e.clientY), true);
    }, [getYearFromPointer, handleYearChange]);

    const ballPosition = useTransform(smoothY, [0, 1], ['0%', '100%']);

    return (
        <div className="h-full flex items-center justify-center relative">
            <div
                className="h-64 w-8 relative cursor-pointer"
                ref={sliderRef}
                onMouseMove={handleSliderMove}
                onMouseLeave={handleSliderLeave}
                onClick={handleSliderClick}
            >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] rounded-full h-full bg-gray" />
                {years.map((year, index) => (
                    <div
                        key={year}
                        className="w-3 h-3 bg-background border-2 border-gray rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"
                        style={{ top: `${(index / (years.length - 1)) * 100}%` }}
                        onMouseEnter={() => {
                            ballY.set(index / Math.max(1, years.length - 1));
                            handleYearChange(year);
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                            ballY.set(index / Math.max(1, years.length - 1));
                            handleYearChange(year, true);
                        }}
                    />
                ))}
                <motion.div
                    className="w-4 h-4 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2"
                    style={{ top: ballPosition }}
                />
            </div>
            <AnimatePresence>
                {(hoveredYear || clickedYear) && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-10 text-[15px] text-text font-heading pointer-events-none whitespace-nowrap"
                        style={{
                            top: ballPosition,
                            transform: 'translateY(-50%)'
                        }}
                    >
                        {hoveredYear || clickedYear}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const projectsArr = [
    // 2026
    {
      name: "reacher",
      desc: "Deep Research agent for outreach and GTM",
      github: "https://github.com/Avinier/reacher",
      color: "#ffbb00",
      year: 2026
    },
    {
      name: "superserverai-landing-v3",
      desc: "Latest landing page iteration for SuperServerAI",
      github: "https://github.com/Avinier/superserverai-landing-v3",
      color: "#ff006f",
      year: 2026
    },
    {
      name: "greenlit",
      desc: "OpenAI Engineers Day Hackathon Submission",
      github: "https://github.com/Avinier/greenlit",
      color: "#00b7ff",
      year: 2026
    },
    {
      name: "amd",
      desc: "A 2026 experimental project from my GitHub",
      github: "https://github.com/Avinier/amd",
      color: "#00ff33",
      year: 2026
    },
    // 2025
    {
      name: "superserverai-frontend-v1",
      desc: "Frontend v1 for SuperServerAI",
      github: "https://github.com/Avinier/superserverai-frontend-v1",
      color: "#ffbb00",
      year: 2025
    },
    {
      name: "heimdall",
      desc: "A specialized agent for automated VAPT",
      github: "https://github.com/Avinier/heimdall",
      color: "#ff006f",
      year: 2025
    },
    {
      name: "qrooper",
      desc: "A specialised agentic system for codebase analysis. Think of it as plug-n-play Claude Code",
      github: "https://github.com/Avinier/qrooper",
      color: "#00ff33",
      year: 2025
    },
    {
      name: "ssai-landing-page-v3",
      desc: "Landing page iteration for SSAI",
      github: "https://github.com/Avinier/ssai-landing-page-v3",
      color: "#ffbb00",
      year: 2025
    },
    {
      name: "superserverai-frontend",
      desc: "Remix frontend app for SuperServerAI",
      github: "https://github.com/Avinier/superserverai-frontend",
      color: "#00b7ff",
      year: 2025
    },
    {
      name: "moff-tarkin",
      desc: "An RL-experiment on character roleplaying",
      github: "https://github.com/Avinier/moff-tarkin",
      color: "#00b7ff",
      year: 2025
    },
    {
      name: "fixmyrepo",
      desc: "Autonomous debugger for biomolecular model repos",
      github: "https://github.com/Avinier/fixmyrepo",
      color: "#ff006f",
      year: 2025
    },
    {
      name: "aiux-composer",
      desc: "A UI experiment on how to have an interface for reasoning models",
      github: "https://github.com/Avinier/aiux-composer",
      color: "#ffbb00",
      year: 2025
    },
    {
      name: "ilya-top30-implementations",
      desc: "My quest in learning and implementing Ilya Sutskever's Top 30 Papers. Zero AI aid.",
      github: "https://github.com/Avinier/ilya-top30-implementations",
      color: "#00ff33",
      year: 2025
    },
    {
      name: "replit-mcp",
      desc: "MCP Server for Replit Extensions API",
      github: "https://github.com/Avinier/replit-mcp",
      color: "#00b7ff",
      year: 2025
    },
    {
      name: "MasterBrokerAI",
      desc: "A complete suite of agentic AI tools to help real estate brokers' lives easier",
      github: "https://github.com/Avinier/MasterBrokerAI",
      color: "#ff006f",
      year: 2025
    },
    {
      name: "UltraFounder-AI",
      desc: "The ultimate suite of AI tools for all your early-stage startup problems",
      github: "https://github.com/Avinier/UltraFounder-AI",
      color: "#ffbb00",
      year: 2025
    },
    {
      name: "ARTGuru-AI",
      desc: "Final project for the Level Supermind Hackathon, by Team Byters",
      github: "https://github.com/Avinier/ARTGuru-AI",
      color: "#00b7ff",
      year: 2025
    },
    {
      name: "Solana-Payments-System",
      desc: "A peer-to-peer payments system built on Anchor framework",
      github: "https://github.com/Avinier/Solana-Payments-System",
      color: "#00ff33",
      year: 2025
    },
    // 2024
    {
      name: "ssai",
      desc: "An AI employee for your devops tasks",
      github: "https://getssai.com",
      color: "#ffbb00",
      year: 2026
    },
    {
      name: "superserver-ai",
      desc: "Manage, scale and secure your projects with AI",
      github: "https://github.com/Avinier/superserver-ai",
      color: "#ff006f",
      year: 2024
    },
    {
      name: "SuperServerAI-LandingPage",
      desc: "Landing page for SuperServerAI",
      github: "https://github.com/Avinier/SuperServerAI-LandingPage",
      color: "#00b7ff",
      year: 2024
    },
    {
      name: "FastAI-Implementations",
      desc: "My own implementations of Fast.ai lessons",
      github: "https://github.com/Avinier/FastAI-Implementations",
      color: "#ff006f",
      year: 2024
    },
    {
      name: "Deep-ML-Challenges",
      desc: "My implementations of the Deep-ML Leetcode for ML Challenges",
      github: "https://github.com/Avinier/Deep-ML-Challenges",
      color: "#00b7ff",
      year: 2024
    },
    {
      name: "Coal-Detector-QualcommVisionX",
      desc: "A coal detector model for the Qualcomm VisionX Hackathon, Techfest'24",
      github: "https://github.com/Avinier/Coal-Detector-QualcommVisionX",
      color: "#00ff33",
      year: 2024
    },
    {
      name: "smart-dumbell",
      desc: "IMU based sensor project",
      github: "https://github.com/Avinier/smart-dumbell",
      color: "#ffbb00",
      year: 2024
    },
  ];

  const CURR_LIMIT = 9;
  const CURR_INITIAL_LIMIT = 6;

  const Projects = () => {
    const [selectedYear, setSelectedYear] = useState('Curr');
    const [showAllCurr, setShowAllCurr] = useState(false);
    const years = ['Curr', ...Array.from(new Set(projectsArr.map(p => p.year))).sort((a, b) => b - a)];
    const currProjects = projectsArr.slice(0, CURR_LIMIT);
    const projects = selectedYear === 'Curr'
      ? currProjects.slice(0, showAllCurr ? CURR_LIMIT : CURR_INITIAL_LIMIT)
      : projectsArr.filter(project => project.year === Number(selectedYear));
    const canToggleCurr = selectedYear === 'Curr' && currProjects.length > CURR_INITIAL_LIMIT;

    useEffect(() => {
      setShowAllCurr(false);
    }, [selectedYear]);

    return (
      <section className="bg-background min-h-screen py-8 md:py-12">
        <div className="w-[90%] md:w-[75%] mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl text-text mb-2">Projects</h1>
          <h4 className='font-body text-base md:text-lg italic mb-6 md:mb-[50px]'>My projects range from agentic systems to deep-learning, personal and production deployed.</h4>
          <div className="md:hidden mb-8">
            <TimelineSlider years={years} onChange={setSelectedYear} />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow md:mr-8">
              <ProjectsGrid projects={projects} />
              {canToggleCurr && (
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAllCurr((value) => !value)}
                    className="font-heading text-sm text-darkgray hover:text-text transition-colors duration-300"
                  >
                    {showAllCurr ? 'less' : 'more'}
                  </button>
                </div>
              )}
            </div>
            <div className="hidden md:block w-16 h-fit mt-20">
              <TimelineSlider years={years} onChange={setSelectedYear} />
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Projects;
