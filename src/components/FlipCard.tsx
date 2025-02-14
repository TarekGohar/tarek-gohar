"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface SectionDataProps {
  index: number;
  section: { title: string; src: string; content: string };
}

export default function FlipCard({ index, section }: SectionDataProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hovering, setHovering] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  function handleMouseLeave() {
    setHovering(false);
  }

  function handleFlip() {
    if (hovering) {
      return;
    }
    if (!isAnimating && !hovering) {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        setHovering(true);
        setIsAnimating(true);
        setIsFlipped(true);
      }, 200); // 200ms debounce delay
    }
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout | null;

    if (isFlipped) {
      timeout = setTimeout(() => {
        setIsFlipped(false);
      }, 4000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [hovering]); // Add dependency to only trigger when `hovering` changes

  // Array of background colors
  const colors = [
    { bg: "from-[#012A4A] to-[#013A63]", text: "text-[#A9D6E5]" }, // Dark Blue to Deep Blue
    { bg: "from-[#013A63] to-[#01497C]", text: "text-[#89C2D9]" }, // Deep Blue to Navy
    { bg: "from-[#01497C] to-[#014F86]", text: "text-[#61A5C2]" }, // Navy to Slightly Brighter Navy
    { bg: "from-[#014F86] to-[#2A6F97]", text: "text-[#72B6C9]" }, // Brighter Navy to Darker Tea
    { bg: "from-[#2A6F97] to-[#468FAF]", text: "text-[#A9D6E5]" }, // Darker Teal to Teal
    { bg: "from-[#468FAF] to-[#61A5C2]", text: "text-[#01497C]" }, // Teal to Light Teal
    { bg: "from-[#61A5C2] to-[#89C2D9]", text: "text-[#013A63]" }, // Light Teal to Sky Blue
    { bg: "from-[#89C2D9] to-[#A9D6E5]", text: "text-[#012A4A]" }, // Sky Blue to Soft Blue
    { bg: "from-[#A9D6E5] to-[#014F86]", text: "text-[#014F86]" }, // Soft Blue to Medium Navy
  ];

  // Select colors based on index
  const frontColor = colors[index % colors.length];

  return (
    <button
      className="flip-card w-full h-full"
      onMouseOver={handleFlip}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.2, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Front Side */}
        <div
          className={`rounded-2xl overflow-hidden flip-card-front w-full h-full flex flex-col items-center justify-center space-y-1 md:space-y-1 lg:space-y-2 bg-gradient-to-br ${frontColor.bg} border-2 border-opacity-20 border-white`}
        >
          <Image
            src={section.src}
            alt={section.title}
            width={1000}
            height={1000}
            className={`md:p-2 w-[32%] lg:w-[40%] opacity-100 mix-blend-screen ${frontColor.text}`}
          />
          <h3
            className={`w-[90%] md:text-xl lg:text-2xl font-bold ${frontColor.text}`}
          >
            {section.title}
          </h3>
        </div>

        {/* Back Side */}
        <div
          className={`rounded-2xl overflow-hidden flip-card-back w-full h-full p-3 flex items-center justify-center bg-gradient-to-tl ${frontColor.bg}`}
        >
          <span
            className={`text-md lg:text-xl font-semibold ${frontColor.text}`}
          >
            {section.content}
          </span>
        </div>
      </motion.div>
    </button>
  );
}
