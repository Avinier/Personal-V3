import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookDisplay() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-[200px]">
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-8 left-0 w-full text-lg font-body text-slate-400"
        >
          This is what I've been reading
        </motion.div>
      )}
      <div 
        className="relative h-[160px] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
      </div>
    </div>
  );
}