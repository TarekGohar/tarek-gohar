"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function SlotsSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Remap the scroll range so that everything completes at 0.5
  const adjustedScroll = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  // Staggered animation with the adjusted scroll
  const opacity1 = useTransform(adjustedScroll, [0.5, 1], [0, 1]);
  const opacity2 = useTransform(adjustedScroll, [0.6, 1], [0, 1]);
  const opacity3 = useTransform(adjustedScroll, [0.7, 1], [0, 1]);
  const opacity4 = useTransform(adjustedScroll, [0.8, 1], [0, 1]);
  const opacity5 = useTransform(adjustedScroll, [0.9, 1], [0, 1]);

  // Staggered animation with bounce (overshoot)
  const xOffset1 = useTransform(adjustedScroll, [0.5, 1], [100, -3]);
  const xOffset2 = useTransform(adjustedScroll, [0.6, 1], [100, -3]);
  const xOffset3 = useTransform(adjustedScroll, [0.7, 1], [100, -3]);
  const xOffset4 = useTransform(adjustedScroll, [0.8, 1], [100, -3]);
  const xOffset5 = useTransform(adjustedScroll, [0.9, 1], [100, -3]);

  // Apply `useSpring` for smoother bounce effect
  const springX1 = useSpring(xOffset1, { stiffness: 300, damping: 30 });
  const springX2 = useSpring(xOffset2, { stiffness: 300, damping: 25 });
  const springX3 = useSpring(xOffset3, { stiffness: 300, damping: 20 });
  const springX4 = useSpring(xOffset4, { stiffness: 300, damping: 15 });
  const springX5 = useSpring(xOffset5, { stiffness: 300, damping: 10 });

  return (
    <section className="bg-neutral-50 w-full h-[40rem] md:h-[35rem] mb-[0rem] md:mb-[0rem] px-4 flex flex-col justify-center items-center">
      <div
        ref={targetRef}
        className="bg-neutral-50 rounded-[2rem] px-2 gap-x-6 py-[4rem] max-w-[80rem] w-fit mx-auto flex items-center justify-center md:gap-x-12 overflow-hidden"
      >
        <h1 className="text-5xl md:text-7xl text-neutral-900/50 font-bold w-[65%] md:w-[70%] capitalize h-fit">
          Full-stack apps built from the ground up.
        </h1>
        <div className="w-fit text-center flex flex-col space-y-4 md:space-y-8">
          <motion.div
            style={{ opacity: opacity5, x: springX5 }}
            className="bg-cyan-800/80 text-white p-5 md:p-6 text-center rounded-2xl w-[7rem] md:w-40 mx-auto"
          />
          <motion.div
            style={{ opacity: opacity4, x: springX4 }}
            className="bg-cyan-800/90 text-white p-5 md:p-6 text-center rounded-2xl w-[7rem] md:w-40 mx-auto"
          />
          <motion.div
            style={{ opacity: opacity3, x: springX3 }}
            className="bg-cyan-800 text-white p-5 md:p-6 text-center rounded-2xl w-[7rem] md:w-40 mx-auto"
          />
          <motion.div
            style={{ opacity: opacity2, x: springX2 }}
            className="bg-cyan-900 text-white p-5 md:p-6 text-center rounded-2xl w-[7rem] md:w-40 mx-auto"
          />
          <motion.div
            style={{ opacity: opacity1, x: springX1 }}
            className="bg-cyan-950 text-white p-5 md:p-6 text-center rounded-2xl w-[7rem] md:w-40 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
