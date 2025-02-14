import React from "react";
import { motion } from "framer-motion";

const GRID_SIZE = 50; // 10x10 Grid (Adjustable)

const DotGrid = () => {
  const dots = [];

  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    dots.push(
      <motion.div
        key={i}
        className="dot"
        animate={{ opacity: [0, 0.8, 0] }}
        transition={{
          duration: 1 + Math.random(), // Random pulse duration between 1-2s
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2, // Random delay for a scattered effect
        }}
      />
    );
  }

  return <div className="dot-grid">{dots}</div>;
};

export default DotGrid;
