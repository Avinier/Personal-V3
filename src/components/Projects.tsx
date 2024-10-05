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
      : `rgba(${rgbColor}, 0.2) 0px 1px 3px 0px`;
  
    return (
      <div
        className="bg-gray p-6 cursor-pointer"
        style={{
          boxShadow: dynamicBoxShadow,
          transition: 'box-shadow 0.3s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(project.github, '_blank')}
      >
        <h3 className="text-lg text-text font-heading mb-2">{project.name}</h3>
        <p className="text-darkgray font-body">{project.desc}</p>
      </div>
    );
  };
  
  const ProjectsGrid = ({ projects }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    );
  };
  
  const TimelineSlider = ({ years, onChange }) => {
    const [hoveredYear, setHoveredYear] = useState(null);
    const [clickedYear, setClickedYear] = useState(null);
    const sliderRef = useRef(null);
    const ballY = useMotionValue(0);
    const smoothY = useSpring(ballY, { damping: 20, stiffness: 300 });
  
    const handleYearChange = useCallback((year, isClick = false) => {
        if (isClick) {
            setClickedYear(year);
            onChange(year);
        } else {
            setHoveredYear(year);
            if (!clickedYear) {
                onChange(year);
            }
        }
    }, [onChange, clickedYear]);
  
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!sliderRef.current) return;
            const rect = sliderRef.current.getBoundingClientRect();
            const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
            ballY.set(y);
  
            const index = Math.round(y * (years.length - 1));
            handleYearChange(years[index]);
        };
  
        const handleMouseLeave = () => {
            setHoveredYear(null);
            if (!clickedYear) {
                handleYearChange('All');
                ballY.set(0);
            }
        };
  
        const handleClick = (e) => {
            const rect = sliderRef.current.getBoundingClientRect();
            const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
            ballY.set(y);
  
            const index = Math.round(y * (years.length - 1));
            handleYearChange(years[index], true);
        };
  
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('mousemove', handleMouseMove);
            slider.addEventListener('mouseleave', handleMouseLeave);
            slider.addEventListener('click', handleClick);
        }
  
        return () => {
            if (slider) {
                slider.removeEventListener('mousemove', handleMouseMove);
                slider.removeEventListener('mouseleave', handleMouseLeave);
                slider.removeEventListener('click', handleClick);
            }
        };
    }, [years, ballY, handleYearChange, clickedYear]);
  
    const ballPosition = useTransform(smoothY, [0, 1], ['0%', '100%']);
  
    return (
        <div className="h-full flex items-center justify-center relative" ref={sliderRef}>
            <div className="h-64 w-1 bg-gray-300 rounded-full relative cursor-pointer">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] rounded-full h-full bg-gray" />
                {years.map((year, index) => (
                    <div
                        key={year}
                        className="w-3 h-3 bg-background border-2 border-gray rounded-full absolute left-1/2 transform -translate-x-1/2"
                        style={{ top: `${(index / (years.length - 1)) * 100}%` }}
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
    {
      name: "SuperServer.AI",
      desc: "My startup i've been working on",
      github: "https://quantumsenses.com/",
      color: "#ff0000",
      year: 2024
    },
    {
      name: "FastAI Self-Implementations",
      desc: "My own implementations of the Fastai Practical Deep Learning Course",
      github: "https://github.com/Avinier/FastAI-Implementations",
      color: "#00ff00",
      year: 2023
    },
    {
      name: "Aviniercore AI Asset-Generator",
      desc: "Fine-tuned Diffusion model to make my own design genre assets",
      github: "https://github.com/Avinier/FastAI-Implementations",
      color: "#0000ff",
      year: 2024
    },
    {
      name: "IronManIt - AR/VR Project",
      desc: "a computer vison + 3d design project for fun",
      github: "https://github.com/Avinier/FastAI-Implementations",
      color: "#444",
      year: 2024
    },
    {
      name: "E-minor",
      desc: "An NFT Marketplace for Music Lovers",
      github: "https://github.com/Avinier/E-minor",
      color: "#444",
      year: 2023
    },
    {
      name: "Game of Life",
      desc: "A react based site which is a simulation of Conaway's Game of Life",
      github: "https://github.com/Avinier/Game-of-Life",
      color: "#444",
      year: 2022
    },
    
    {
      name: "RPSLS Game - React",
      desc: "A game inpsired from the sitcom The Big Bang Theory",
      github: "https://github.com/Avinier/RPSLS-Game",
      color: "#444",
      year: 2022
    },  
  ];

  const Projects = () => {
    const [projects, setProjects] = useState(projectsArr);
    const [selectedYear, setSelectedYear] = useState('All');
    const years = ['All', ...new Set(projectsArr.map(p => p.year))].sort();
  
    useEffect(() => {
      if (selectedYear === 'All') {
        setProjects(projectsArr);
      } else {
        setProjects(projectsArr.filter(project => project.year === selectedYear));
      }
    }, [selectedYear]);
  
    return (
      <section className="bg-background min-h-screen">
        <div className="w-[75%] mx-auto">
          <h1 className="font-heading text-4xl text-text">Projects</h1>
          <h4 className='font-body text-lg italic mb-[50px]'>My projects range from this to that</h4>
          <div className="flex">
            <div className="flex-grow mr-8 min-h-[100%]">
              <ProjectsGrid projects={projects} />
            </div>
            <div className="w-16 h-fit mt-20">
              <TimelineSlider years={years} onChange={setSelectedYear} />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  