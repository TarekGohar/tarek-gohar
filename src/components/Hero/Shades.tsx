"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Shades() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const seg_height = window.innerHeight / 10;

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 w-full"
      style={{
        zIndex: 50,
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
          [0, seg_height]
        );

        return (
          <motion.div
            key={index}
            className={`w-full bg-white`}
            style={{
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
