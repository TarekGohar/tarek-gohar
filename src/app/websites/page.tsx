"use client";

import Navbar from "@/components/navbar";
import PerformanceSection from "@/components/Websites/PerformanceSection";
import SecuritySection from "@/components/Websites/SecuritySection";
import WordStyleSection from "@/components/Websites/WordStyleSection";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const ref = useRef(null);
  const t1 = "First";
  const t2 = "impressions";
  const t3 = "matter";

  const [displayNumber, setDisplayNumber] = useState<number>(0);
  const targetRef = useRef(null); // Reference to track visibility
  const isInView = useInView(targetRef, { once: true });
  const [offset, setOffset] = useState({ x: "-4rem", y: "-4rem" });

  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 50, {
        duration: 3, // 3-second animation
        ease: "easeOut",
        onUpdate: (latest) => setDisplayNumber(Math.floor(latest)),
      });

      return controls.stop; // Cleanup animation when unmounted
    }
  }, [isInView]);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth >= 1024) {
        // Large screens (lg+)
        setOffset({ x: "-4rem", y: "-0rem" });
      } else if (window.innerWidth >= 768) {
        // Medium screens (md)
        setOffset({ x: "-2.5rem", y: "-0rem" });
      } else {
        // Small screens (sm)
        setOffset({ x: "-1.5rem", y: "-0rem" });
      }
    };

    updateOffset(); // Run on mount
    window.addEventListener("resize", updateOffset); // Update on resize

    return () => window.removeEventListener("resize", updateOffset);
  }, []);

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

        {/* <section className="h-screen flex flex-col items-start justify-center text-white relative">
          <div className="max-w-[120rem] mx-auto w-full px-4 md:px-8 flex flex-col items-start justify-center space-y-4 md:space-y-0 opacity-80 text-neutral-300 mix-blend-plus-lighter z-50">
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
        </section> */}

        <section className="h-screen min-h-[50rem]">
          <div className="flex flex-col items-start justify-end text-white relative h-[85%] space-y-4 ">
            <div className="max-w-[120rem] mx-auto w-full flex flex-col items-start opacity-80 text-neutral-300 mix-blend-plus-lighter z-50 px-4 md:px-8">
              <h1 className="-ml-[.1rem] md:-ml-[.5rem] tracking-tighter font-bold text-6xl md:text-[5.4rem] lg:text-[9rem] leading-[3rem] md:leading-[4.2rem] lg:leading-[7rem] uppercase">
                First
              </h1>

              <h1 className="-ml-[.1rem] md:-ml-[.5rem] tracking-tighter font-bold text-6xl md:text-[5.4rem] lg:text-[9rem] leading-[3rem] md:leading-[4.2rem] lg:leading-[7rem] uppercase">
                Impressions
              </h1>

              <h1 className="-ml-[.1rem] md:-ml-[.5rem] tracking-tighter font-bold text-6xl md:text-[5.4rem] lg:text-[9rem] leading-[3rem] md:leading-[4.2rem] lg:leading-[7rem] uppercase">
                Matter
              </h1>
            </div>
            <div className="max-w-[120rem] mx-auto w-full text-2xl md:text-3xl lg:text-5xl font-medium tracking-tighter px-4 md:px-8 mix-blend-plus-lighter">
              <h2>We'll make yours count.</h2>
            </div>
          </div>
        </section>
      </motion.div>

      <section className="relative max-w-[120rem] mx-auto w-full">
        <div className="pt-[5rem] md:pt-[15rem] w-full h-[40rem] px-4 md:px-8 flex flex-col md:flex-row items-center md:items-start justify-center text-cyan-800 mix-blend-plus-lighter space-y-[8rem]">
          <div className=" w-full p-4">
            <h2 className="w-full md:w-[20rem] overflow-hidden text-cyan-800 opacity-80 text-left font-bold text-3xl md:text-4xl tracking-tighter">
              Time it takes for someone to form an opinion about your website.
            </h2>
          </div>

          <div className="w-fit flex items-end justify-center">
            <motion.span
              ref={targetRef}
              className={`italic w-[23rem] h-[13rem] md:w-[28rem] md:h-[16rem] lg:w-[43rem] lg:h-[18.65rem] inline-block text-left font-extrabold text-[20rem] leading-[12rem] md:text-[25rem] md:leading-[15rem] lg:text-[40rem] lg:leading-[16rem] uppercase tracking-tighter duration-500 transition-opacity mix-blend-lighten text-cyan-800 -mr-[3rem]`}
            >
              {/* First digit (normal) */}
              <span>{displayNumber.toString()[0]}</span>

              {/* Second digit (elevated) */}
              <motion.span
                initial={{ y: 0 }}
                animate={offset} // Adjust elevation as needed
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="inline-block opacity-90"
              >
                {displayNumber.toString()[1]}
              </motion.span>
            </motion.span>
            <span
              className={`italic w-fit inline-block font-bold text-left text-xl md:text-[2rem] tracking-tighter }`}
            >
              ms
            </span>
          </div>
        </div>
        <div className="my-[10rem] md:my-[20rem] h-[20rem] w-full flex flex-col items-center justify-center space-y-[2rem]">
          <p className="w-[80%] md:w-[40%] text-cyan-700 text-left font-bold text-3xl md:text-4xl tracking-tighter">
            People decide fast, and options are endless. If your website doesn’t
            make an impact immediately, they move on.
          </p>
          <p className="w-[80%] md:w-[40%] text-cyan-900 text-left font-bold text-3xl md:text-4xl tracking-tighter">
            You don’t get a second chance at a first impression.
          </p>
        </div>
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
