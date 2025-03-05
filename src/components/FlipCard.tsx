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
    { bg: "from-[#083344] to-[#0C4155]", text: "#AFE8F2" }, // Deepest Cyan
    { bg: "from-[#0C435A] to-[#105066]", text: "#5CD5EE" },
    { bg: "from-[#0E4B65] to-[#145B72]", text: "#87DFF0" },
    { bg: "from-[#12566F] to-[#18667C]", text: "#AFE8F2" },
    { bg: "from-[#16607A] to-[#1E7189]", text: "#D7F3F7" },
    { bg: "from-[#1C6B86] to-[#25809A]", text: "#87DFF0" },
    { bg: "from-[#237592] to-[#2D8CA6]", text: "#5CD5EE" },
    { bg: "from-[#2A809E] to-[#3598B2]", text: "#AFE8F2" }, // Moving toward Lighter Cyan
    { bg: "from-[#309BAA] to-[#3DA7BE]", text: "#D7F3F7" }, // Transitioning to bg-cyan-700
    { bg: "from-[#36A5B6] to-[#45B5CA]", text: "#87DFF0" },
    { bg: "from-[#3DB0C2] to-[#4DC2D6]", text: "#5CD5EE" },
    { bg: "from-[#45BBCE] to-[#55D0E4]", text: "#D7F3F7" }, // Almost at bg-cyan-600
    { bg: "from-[#4DC6DA] to-[#5DDAF0]", text: "#FFFFFF" }, // Final Step to bg-cyan-600
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
            className={`w-[90%] md:text-xl lg:text-2xl font-medium tracking-wider ${frontColor.text}`}>
            {section.title}
          </h3>
        </div>

        {/* Back Side */}
        <div
          className={`rounded-xl overflow-hidden flip-card-back w-full h-full p-3 flex items-center justify-center bg-gradient-to-tl ${frontColor.bg}`}>
          <span
            className={`text-sm lg:text-xl font-medium tracking-wider ${frontColor.text}`}>
            {section.content}
          </span>
        </div>
      </motion.div>
    </button>
  );
}
