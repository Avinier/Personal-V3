import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookDisplay() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-[300px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        className="absolute -top-10 left-20 w-full text-lg font-body text-slate-400 text-center"
      >
        This is what I've been reading
      </motion.div>
      <motion.div 
        className="relative h-[160px] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          border: isHovered ? '2px solid #e2e8f0' : '2px solid transparent',
          borderRadius: '8px'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Book covers */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Default (center) book */}
          <img
            src="/miyamotobook.jpeg"
            alt="Book 1"
            className="relative h-[150px] w-[100px] rounded shadow-lg z-10"
          />
          
          {/* Right sliding books */}
          <motion.div
            className="absolute z-20"
            animate={{
              x: isHovered ? 90 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/hawkingbook.jpg"
              alt="Book 2"
              className="h-[150px] w-[100px] rounded shadow-lg"
            />
          </motion.div>
          
          <motion.div
            className="absolute z-30"
            animate={{
              x: isHovered ? 180 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <img
              src="/thielbook.jpeg"
              alt="Book 3"
              className="h-[150px] w-[100px] rounded shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}