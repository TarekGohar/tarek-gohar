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
    { bg: "from-[#05262F] to-[#073040]", text: "#AFE8F2" }, // Darkest
    { bg: "from-[#082E39] to-[#0A3849]", text: "#5CD5EE" }, // Step 1
    { bg: "from-[#0B3643] to-[#0D4052]", text: "#87DFF0" }, // Step 2
    { bg: "from-[#0E3E4D] to-[#10485B]", text: "#AFE8F2" }, // Step 3
    { bg: "from-[#114657] to-[#135064]", text: "#D7F3F7" }, // Step 4
    { bg: "from-[#144E61] to-[#16586D]", text: "#87DFF0" }, // Step 5
    { bg: "from-[#17566B] to-[#196076]", text: "#5CD5EE" }, // Step 6
    { bg: "from-[#1A5E75] to-[#1C687F]", text: "#AFE8F2" }, // Step 7
    { bg: "from-[#1D667F] to-[#1F7088]", text: "#D7F3F7" }, // Step 8
    { bg: "from-[#206E89] to-[#227891]", text: "#87DFF0" }, // Step 9
    { bg: "from-[#237693] to-[#25809A]", text: "#5CD5EE" }, // Step 10
    { bg: "from-[#267E9D] to-[#2888A3]", text: "#D7F3F7" }, // Step 11 (lightest)
  ];

  // Select colors based on index
  const frontColor = colors[index % colors.length];

  return (
    <button
      className="flip-card w-full h-full"
      onMouseOver={handleFlip}
      onMouseLeave={handleMouseLeave}>
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.2, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}>
        {/* Front Side */}
        <div
          className={`rounded-xl overflow-hidden flip-card-front w-full h-full flex flex-col items-center justify-center space-y-1 md:space-y-1 lg:space-y-2 bg-gradient-to-br ${frontColor.bg} border-2 border-opacity-20 border-white`}>
          <Image
            src={section.src}
            alt={section.title}
            width={1000}
            height={1000}
            className={`p-1 md:p-2 w-[32%] lg:w-[34%] opacity-100 mix-blend-screen ${frontColor.text}`}
          />
          <h3
            className={`w-[90%] md:text-lg lg:text-xl font-medium tracking-wider ${frontColor.text}`}>
            {section.title}
          </h3>
        </div>

        {/* Back Side */}
        <div
          className={`rounded-xl overflow-hidden flip-card-back w-full h-full p-3 flex items-center justify-center bg-gradient-to-tl ${frontColor.bg}`}>
          <span
            className={`text-sm lg:text-lg font-medium tracking-wider ${frontColor.text}`}>
            {section.content}
          </span>
        </div>
      </motion.div>
    </button>
  );
}
