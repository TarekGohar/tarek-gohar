"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export default function SlotsSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Remap the scroll range so that everything completes at 0.5
  const adjustedScroll = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Staggered opacity (both for scroll down and scroll up)
  const opacity1 = useSpring(useTransform(adjustedScroll, [0.5, 1], [0, 1]), {
    stiffness: 200,
    damping: 30,
  });
  const opacity2 = useSpring(useTransform(adjustedScroll, [0.6, 1], [0, 1]), {
    stiffness: 200,
    damping: 30,
  });
  const opacity3 = useSpring(useTransform(adjustedScroll, [0.7, 1], [0, 1]), {
    stiffness: 200,
    damping: 30,
  });
  const opacity4 = useSpring(useTransform(adjustedScroll, [0.8, 1], [0, 1]), {
    stiffness: 200,
    damping: 30,
  });
  const opacity5 = useSpring(useTransform(adjustedScroll, [0.9, 1], [0, 1]), {
    stiffness: 200,
    damping: 30,
  });

  // Staggered bounce animation for x-offset (smooth in & out)
  const xOffset1 = useSpring(
    useTransform(adjustedScroll, [0.5, 1], [400, -10]),
    { stiffness: 300, damping: 30 }
  );
  const xOffset2 = useSpring(
    useTransform(adjustedScroll, [0.6, 1], [400, -10]),
    { stiffness: 300, damping: 27.5 }
  );
  const xOffset3 = useSpring(
    useTransform(adjustedScroll, [0.7, 1], [400, -10]),
    { stiffness: 300, damping: 25 }
  );
  const xOffset4 = useSpring(
    useTransform(adjustedScroll, [0.8, 1], [400, -10]),
    { stiffness: 300, damping: 22.5 }
  );
  const xOffset5 = useSpring(
    useTransform(adjustedScroll, [0.9, 1], [400, -10]),
    { stiffness: 300, damping: 20 }
  );

  return (
    <section className="w-full md:h-[40rem] px-4 flex flex-col justify-center items-center overflow-hidden bg-neutral-50">
      <div
        ref={targetRef}
        className="px-2 gap-x-6 py-[4rem] max-w-[100rem] w-fit mx-auto flex items-center justify-between">
        <h1 className="text-4xl md:text-7xl text-neutral-900 font-semibold w-[65%] md:w-[50%] uppercase tracking-wider">
          Full-stack apps from the{" "}
          <span className="text-neutral-800/80">ground up</span>
        </h1>
        <div className="w-fit text-center flex flex-col space-y-4">
          <motion.div
            style={{ opacity: opacity5, x: xOffset5 }}
            className="bg-neutral-900/20 text-white p-[.85rem] md:p-5 text-center rounded-2xl w-[7rem] md:w-[14rem] mx-auto"
          />
          <motion.div
            style={{ opacity: opacity4, x: xOffset4 }}
            className="bg-neutral-900/40 text-white p-[.85rem] md:p-5 text-center rounded-2xl w-[7rem] md:w-[14rem] mx-auto"
          />
          <motion.div
            style={{ opacity: opacity3, x: xOffset3 }}
            className="bg-neutral-900/60 text-white p-[.85rem] md:p-5 text-center rounded-2xl w-[7rem] md:w-[14rem] mx-auto"
          />
          <motion.div
            style={{ opacity: opacity2, x: xOffset2 }}
            className="bg-neutral-900/80 text-white p-[.85rem] md:p-5 text-center rounded-2xl w-[7rem] md:w-[14rem] mx-auto"
          />
          <motion.div
            style={{ opacity: opacity1, x: xOffset1 }}
            className="bg-neutral-950 text-white p-[.85rem] md:p-5 text-center rounded-2xl w-[7rem] md:w-[14rem] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
