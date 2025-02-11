"use client";

import DotGrid from "@/components/GridDots";
import Navbar from "@/components/navbar";
import PerformanceSection from "@/components/Websites/PerformanceSection";
import SecuritySection from "@/components/Websites/SecuritySection";
import WordStyleSection from "@/components/Websites/WordStyleSection";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const ref = useRef(null);
  const t1 = "First";
  const t2 = "impressions";
  const t3 = "matter";

  const direction = "up";
  const value = 50;

  const ref2 = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 120,
  });
  const isInView = useInView(ref2, { once: true, margin: "-100px" });

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
        className="bg-cyan-50 relative"
        initial={{
          background:
            "linear-gradient(45deg, #062a33 0%, #0f3c4f 15%, #067e99 50%, #0496b5 60%, #99c1d3 100%)",
        }}
        animate={{
          background: [
            "linear-gradient(45deg, #062a33 0%, #0f3c4f 15%, #067e99 50%, #0496b5 60%, #99c1d3 100%)",
            "linear-gradient(90deg, #062a33 0%, #0f3c4f 15%, #067e99 50%, #0496b5 60%, #99c1d3 100%)",
            "linear-gradient(180deg, #062a33 0%, #0f3c4f 15%, #067e99 50%, #0496b5 60%, #99c1d3 100%)",
            "linear-gradient(270deg, #062a33 0%, #0f3c4f 15%, #067e99 50%, #0496b5 60%, #99c1d3 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          zIndex: 0,
          backgroundSize: "400% 400%",
          backgroundPosition: "0% 50%",
        }}
      >
        {/* Noise Overlay covering everything */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "url(/noise2.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "300px 300px",
            opacity: 0.1,
            backgroundBlendMode: "overlay",
            zIndex: 1, // Ensure it overlays everything
          }}
        />

        <section className="h-screen flex flex-col items-start justify-center text-white relative">
          <div className="max-w-[120rem] mx-auto px-4 md:px-8 flex flex-col items-start justify-center space-y-4 md:space-y-0 opacity-80 text-neutral-300 mix-blend-plus-lighter z-50">
            <h1 className="w-full overflow-hidden tracking-tighter font-bold text-6xl md:text-[5.4rem] lg:text-[9rem] uppercase">
              {t1.split("").map((t1, index) => (
                <motion.span
                  key={index}
                  className="inline-block h-fit"
                  initial={{ y: index % 2 === 0 ? -300 : 300, opacity: 0 }}
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

            <h1 className="w-full pr-1 overflow-hidden tracking-tighter font-bold text-6xl md:text-[5.4rem] lg:text-[9rem] uppercase">
              {t2.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block h-fit"
                  initial={{ y: index % 2 === 0 ? -300 : 300, opacity: 0 }}
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

            <h1 className="w-full overflow-hidden tracking-tighter font-bold text-6xl md:text-[5.4rem] lg:text-[9rem] uppercase">
              {t3.split("").map((t3, index) => (
                <motion.span
                  key={index}
                  className="inline-block h-fit"
                  initial={{ y: index % 2 === 0 ? -300 : 300, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay:
                      index * 0.055 + t1.length * 0.055 + t2.length * 0.055,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {t3}
                </motion.span>
              ))}
            </h1>
          </div>
        </section>
      </motion.div>

      <section className="h-[40rem] md:h-[45rem] relative max-w-[100rem] mx-auto w-full flex items-center justify-center">
        <div className=" px-4 md:px-8 flex flex-col items-center justify-center text-cyan-800 mix-blend-plus-lighter">
          <div className="w-full">
            <h2 className="md:w-[40%] overflow-hidden text-left font-bold text-3xl md:text-4xl uppercase tracking-tighter">
              Time it takes for someone to form an opinion about your website.
            </h2>
          </div>

          <div className="w-fit mt-[5rem]">
            <span
              className="italic w-[18rem] h-[11.7rem] md:w-[22.5rem] md:h-[14.55rem] lg:w-[25.5rem] lg:h-[16.2rem] inline-block text-left font-extrabold text-[16rem] leading-[12rem] md:text-[20rem] md:leading-[15rem] lg:text-[23rem] lg:leading-[16rem] uppercase tracking-tighter"
              ref={ref2}
            />
            <span className="italic w-fit inline-block font-bold text-left text-xl md:text-[2rem] tracking-tighter">
              ms
            </span>
          </div>
        </div>
      </section>

      <section className="h-[30rem] bg-neutral-100 w-full flex justify-center items-center">
        <h2 className="max-w-[40rem] text-center font-bold text-4xl md:text-5xl uppercase text-cyan-800 tracking-tighter">
          We'll make sure yours is worth the click.
        </h2>
      </section>

      <WordStyleSection />
      <PerformanceSection />
      <SecuritySection />

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
    </>
  );
}
