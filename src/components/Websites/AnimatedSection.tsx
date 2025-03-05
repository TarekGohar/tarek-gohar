"use client";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";

// Define interfaces for line properties
interface Line {
  id: number;
  direction: number; // 0 = Top → Bottom, 1 = Bottom → Top, 2 = Left → Right, 3 = Right → Left
  size: number; // Thickness: 2px - 5px
  length: number; // Length: 40px - 120px
  position: number; // Random position along the edge
  duration: number; // Random duration (2s to 4s)
  delay: number; // Random delay (0 to 2s)
}

interface LineProps {
  direction: number;
  size: number;
  length: number;
  position: number;
  duration: number;
  delay: number;
}

interface PositionStyle {
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  width: string;
  height: string;
}

interface AnimationStyle {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  opacity: number | number[];
}

export default function AnimatedSection(): JSX.Element {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    let newLines: Line[] = Array.from({ length: 15 }, () => ({
      id: Math.random(),
      direction: Math.floor(Math.random() * 4), // 0 = Top → Bottom, 1 = Bottom → Top, 2 = Left → Right, 3 = Right → Left
      size: Math.random() * 3 + 1, // Thickness: 2px - 5px
      length: Math.random() * 80 + 40, // Length: 40px - 120px
      position: Math.random() * 60 + 20, // Random position along the edge
      duration: Math.random() * 2 + 4, // Random duration (2s to 4s)
      delay: Math.random() * 2, // Random delay (0 to 2s)
    }));
    setLines(newLines);
  }, []);

  return (
    <div className="relative w-full md:w-[30rem] lg:w-[60%] h-full rounded-lg overflow-hidden flex">
      {/* Radial Gradient Layer */}
      <div
        className="absolute inset-0 w-full h-full z-50"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 70%)",
          mixBlendMode: "lighten", // Fix transparency issue
        }}></div>
      {/* Lines */}
      {lines.map((line) => (
        <Line key={line.id} {...line} />
      ))}
    </div>
  );
}

const Line = ({
  direction,
  size,
  length,
  position,
  duration,
  delay,
}: LineProps): JSX.Element => {
  return (
    <motion.div
      className="absolute bg-cyan-800"
      initial={{ ...getInitialPosition(direction, position, size, length) }} // Start OFF-SCREEN
      animate={{ ...getLoopingAnimation(direction) }} // Move THROUGH the section and EXIT
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    />
  );
};

// Function to start the lines COMPLETELY OUTSIDE the section
const getInitialPosition = (
  direction: number,
  position: number,
  size: number,
  length: number
): PositionStyle => {
  switch (direction) {
    case 0:
      return {
        left: `${position}%`,
        top: "-100%",
        width: `${size}px`,
        height: `${length}px`,
      }; // Top → Bottom
    case 1:
      return {
        left: `${position}%`,
        bottom: "-100%",
        width: `${size}px`,
        height: `${length}px`,
      }; // Bottom → Top
    case 2:
      return {
        top: `${position}%`,
        left: "-100%",
        width: `${length}px`,
        height: `${size}px`,
      }; // Left → Right
    case 3:
      return {
        top: `${position}%`,
        right: "-100%",
        width: `${length}px`,
        height: `${size}px`,
      }; // Right → Left
    default:
      return {
        width: `${size}px`,
        height: `${size}px`,
      };
  }
};

// Function to move lines THROUGH the section and EXIT completely
const getLoopingAnimation = (direction: number): AnimationStyle => {
  switch (direction) {
    case 0:
      return { top: "200%", opacity: [1, 0.8, 0.6, 0.4, 0] }; // Move Down (Top → Bottom)
    case 1:
      return { bottom: "200%", opacity: [1, 0.8, 0.6, 0.4, 0] }; // Move Up (Bottom → Top)
    case 2:
      return { left: "200%", opacity: [1, 0.8, 0.6, 0.4, 0] }; // Move Right (Left → Right)
    case 3:
      return { right: "200%", opacity: [1, 0.8, 0.6, 0.4, 0] }; // Move Left (Right → Left)
    default:
      return { opacity: 0 };
  }
};
