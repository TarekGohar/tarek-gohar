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
        setIsFlipped((prev) => !prev);
      }, 200); // 200ms debounce delay
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (!hovering) {
        setIsFlipped(false);
      }
    }, 2000);
  });

  // Array of background colors
  const colors = [
    { bg: "bg-[#012A4A]", text: "text-[#A9D6E5]" }, // Dark Blue & Light Blue
    { bg: "bg-[#013A63]", text: "text-[#89C2D9]" }, // Deep Blue & Sky Blue
    { bg: "bg-[#01497C]", text: "text-[#61A5C2]" }, // Navy & Muted Blue
    { bg: "bg-[#014F86]", text: "text-[#468FAF]" }, // Slightly Brighter Navy & Teal
    { bg: "bg-[#2A6F97]", text: "text-[#A9D6E5]" }, // Darker Teal & Soft Teal
    { bg: "bg-[#468FAF]", text: "text-[#01497C]" }, // Teal & Navy
    { bg: "bg-[#61A5C2]", text: "text-[#013A63]" }, // Light Teal & Deep Blue
    { bg: "bg-[#89C2D9]", text: "text-[#012A4A]" }, // Sky Blue & Dark Blue
    { bg: "bg-[#A9D6E5]", text: "text-[#014F86]" }, // Soft Blue & Medium Navy
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
          className={`rounded-2xl overflow-hidden flip-card-front w-full h-full flex flex-col items-center justify-center space-y-2 lg:space-y-4 ${frontColor.bg}`}
        >
          <Image
            src={section.src}
            alt={section.title}
            width={1000}
            height={1000}
            className={`w-[32%] lg:w-[40%] opacity-70 ${frontColor.text}`}
          />
          <h3
            className={`w-[90%] text-2xl lg:text-4xl font-bold ${frontColor.text}`}
          >
            {section.title}
          </h3>
        </div>

        {/* Back Side */}
        <div
          className={`rounded-2xl overflow-hidden flip-card-back w-full h-full p-4 flex items-center justify-center ${frontColor.bg}`}
        >
          <span
            className={`text-lg lg:text-2xl font-semibold ${frontColor.text}`}
          >
            {section.content}
          </span>
        </div>
      </motion.div>
    </button>
  );
}
