"use client";

import Navbar from "@/components/navbar";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const ref = useRef(null);
  const t1 = "First";
  const t2 = "impressions";
  const t3 = "matter.";
  const t4 = "Make\u00a0it\u00a0count.";

  const direction = "up";
  const value = 50;

  const ref2 = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 120,
  });
  const isInView = useInView(ref2, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref2.current) {
          ref2.current.textContent = Intl.NumberFormat("en-US").format(
            Number(latest.toFixed(0))
          );
        }
      }),
    [springValue]
  );

  return (
    <>
      <Navbar light={false} />

      <motion.div
        className="bg-cyan-50"
        initial={{
          background:
            "linear-gradient(45deg, #062a33 0%, #0f3c4f 15%, #067e99 50%, #0496b5 60%, #99c1d3 100%)",
        }}
        animate={{
          background: [
            "linear-gradient(45deg, #062a33 0%, #0f3c4f 15%, #067e99 50%, #0496b5 60%, #99c1d3 100%)", // 0deg
            "linear-gradient(90deg, #062a33 0%, #0f3c4f 15%, #067e99 50%, #0496b5 60%, #99c1d3 100%)", // 90deg
            "linear-gradient(180deg, #062a33 0%, #0f3c4f 15%, #067e99 50%, #0496b5 60%, #99c1d3 100%)", // 180deg
            "linear-gradient(270deg, #062a33 0%, #0f3c4f 15%, #067e99 50%, #0496b5 60%, #99c1d3 100%)", // 270deg
          ],
        }}
        transition={{
          duration: 10, // Adjust for speed
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          height: "200vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          backgroundSize: "400% 400%",
          backgroundPosition: "0% 50%", // Keep this fixed for now
        }}
      />

      <div className="h-screen flex flex-col items-start justify-center text-white">
        <div className="max-w-[120rem] mx-auto px-4 md:px-8 flex flex-col items-start justify-center space-y-4 md:space-y-0 opacity-100 text-neutral-400 mix-blend-plus-lighter z-40">
          <h1 className="w-full overflow-hidden text-left font-bold text-5xl md:text-[5.4rem] lg:text-[8.75rem] uppercase">
            {t1.split("").map((t1, index) => (
              <motion.span
                key={index}
                className="inline-block h-fit"
                initial={{ y: index % 2 == 0 ? -300 : 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  y: {
                    delay: index * 0.055,
                    duration: 0.3,
                    ease: "easeOut",
                  },
                  opacity: {
                    delay: index * 0.055,
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
              >
                {t1}
              </motion.span>
            ))}
          </h1>
          <h1 className="w-fit overflow-hidden text-left font-bold text-5xl md:text-[5.4rem] lg:text-[8.75rem] uppercase">
            {t2.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block h-fit"
                initial={{ y: -index % 2 == 0 ? -300 : 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.055 + t1.length * 0.055,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <h1 className="w-full overflow-hidden text-left font-bold text-5xl md:text-[5.4rem] lg:text-[8.75rem] uppercase">
            {t3.split("").map((t3, index) => (
              <motion.span
                key={index}
                className="inline-block h-fit"
                initial={{ y: index % 2 == 0 ? -300 : 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.055 + t1.length * 0.055 + t2.length * 0.055,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                {t3}
              </motion.span>
            ))}
          </h1>
          <h1 className="w-full overflow-hidden text-left font-bold text-5xl md:text-[5.4rem] lg:text-[8.75rem] uppercase">
            {t4.split("").map((t4, index) => (
              <motion.span
                key={index}
                className="inline-block h-fit"
                initial={{ y: index % 2 == 0 ? -300 : 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay:
                    index * 0.055 +
                    t1.length * 0.055 +
                    t2.length * 0.055 +
                    t3.length * 0.055 +
                    0.5,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                {t4}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>

      <div className="h-screen">
        <div className="max-w-[100rem] mx-auto w-[90%] md:w-full px-4 md:px-8 flex flex-col md:flex-row items-start justify-between space-y-4 md:space-y-0 opacity-100 text-neutral-100 mix-blend-plus-lighter z-40">
          <h2 className="md:w-1/2 overflow-hidden text-left font-bold text-4xl md:text-6xl uppercase text-white">
            Seconds it takes for someone to form an opinion about your website.
          </h2>
          <div>
            <span
              className="w-full text-right font-bold text-[6rem] md:text-[10rem] uppercase text-white"
              ref={ref2}
            />
            <span className="font-bold text-xl md:text-[3.5rem] text-white">
              ms
            </span>
          </div>
        </div>
      </div>

      {/* Cool */}
      {/* <div
        className="h-[200vh] absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1))",
          backgroundRepeat: "repeat",
          backgroundSize: "30px 30px", // Try a different value for density
          opacity: 0.3,
          backgroundBlendMode: "overlay",
          zIndex: 20,
        }}
      /> */}

      <div
        className="h-[200vh] absolute inset-0 pointer-events-none"
        style={{
          background: "url(/noise2.png)",
          backgroundRepeat: "repeat", // Tiling the image
          backgroundSize: "100px 100px", // Adjust this value for more density (smaller size increases density)
          opacity: 0.15,
          backgroundBlendMode: "overlay",
          zIndex: 20,
        }}
      />
    </>
  );
}
