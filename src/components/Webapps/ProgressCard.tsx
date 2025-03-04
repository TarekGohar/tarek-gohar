"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  i: number;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  progress: any;
  range: any;
  targetScale: number;
}

const Card = ({
  i,
  title,
  subtitle,
  description,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[80vh] min-h-[60rem]"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: "0px",
      }}
    >
      <motion.div
        className="relative flex flex-col items-start justify-between h-[26rem] w-[59rem] rounded-2xl p-[3rem]"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(0vh + ${i * 25}px)`,
          transformOrigin: "top",
        }}
      >
        <div className="flex flex-col items-start justify-start h-full space-y-4">
          <h2 className=" text-cyan-800/40 text-center font-medium text-sm md:text-sm uppercase tracking-wider">
            {title}
          </h2>
          <h3 className=" text-cyan-800 text-center font-medium text-3xl md:text-4xl uppercase tracking-wider">
            {subtitle}
          </h3>
        </div>

        <p className=" text-cyan-800/60 font- md:text-xl">{description}</p>
      </motion.div>
    </div>
  );
};

export default Card;
