import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

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
      name: "greenlit",
      desc: "OpenAI Engineers Day Hackathon Submission",
      github: "https://github.com/Avinier/greenlit",
      color: "#00b7ff",
      year: 2026
    },
    // 2025
    {
      name: "heimdall",
      desc: "A specialized agent for automated VAPT (vulnerability analysis and penetration testing)",
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
  ];

  const ITEMS_PER_PAGE = 3;

  const Projects = () => {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const totalPages = Math.ceil(projectsArr.length / ITEMS_PER_PAGE);

    const currentProjects = projectsArr.slice(
      page * ITEMS_PER_PAGE,
      (page + 1) * ITEMS_PER_PAGE
    );

    const goTo = (newPage: number) => {
      setDirection(newPage > page ? 1 : -1);
      setPage(newPage);
    };

    const variants = {
      enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
    };

    return (
      <section className="bg-background min-h-screen py-8 md:py-12">
        <div className="w-[90%] md:w-[75%] mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl text-text mb-2">Projects</h1>
          <h4 className='font-body text-base md:text-lg italic mb-6 md:mb-[50px]'>My projects range from agentic systems to deep-learning, personal and production deployed.</h4>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {currentProjects.map((project, index) => (
                  <ProjectCard key={`${page}-${index}`} project={project} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              className="font-heading text-sm text-text disabled:text-darkgray disabled:cursor-not-allowed transition-colors"
            >
              &larr; prev
            </button>

            <span className="font-body text-sm text-darkgray">
              {page + 1} / {totalPages}
            </span>

            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages - 1}
              className="font-heading text-sm text-text disabled:text-darkgray disabled:cursor-not-allowed transition-colors"
            >
              next &rarr;
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default Projects;
