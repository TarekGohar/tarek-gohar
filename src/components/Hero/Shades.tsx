"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface ShadesProps {
  color?: string;
}

export default function Shades({ color = "#FFF" }: ShadesProps) {
  const ref = useRef(null);
  const [segHeight, setSegHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    // Set segHeight once the component mounts on the client side
    setSegHeight(window.innerHeight / 10);

    // Optional: Update on window resize
    const handleResize = () => {
      setSegHeight(window.innerHeight / 10);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 w-full"
      style={{
        zIndex: 60,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}>
      {Array.from({ length: 10 }).map((_, index) => {
        // Stagger the start of animation for each div
        // Top divs start earlier, bottom divs start later
        const startProgress = 0.5 + index * 0.03;
        const endProgress = 0.8 + index * 0.03;

        const height = useTransform(
          scrollYProgress,
          [startProgress, endProgress],
          [0, segHeight]
        );

        return (
          <motion.div
            key={index}
            className={`w-full`}
            style={{
              backgroundColor: color,
              height: height,
              minHeight: 0,
              position: "absolute",
              bottom: `${index * 8}%`,
            }}
          />
        );
      })}
    </div>
  );
}
