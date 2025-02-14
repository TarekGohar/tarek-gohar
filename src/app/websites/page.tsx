"use client";

import Navbar from "@/components/navbar";
import AnimatedSection from "@/components/Websites/AnimatedSection";
import InterestedSection from "@/components/Websites/InterestedSection";
import PerformanceSection from "@/components/Websites/PerformanceSection";
import SecuritySection from "@/components/Websites/SecuritySection";
import SupportSection from "@/components/Websites/SupportSection";
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

      {/* About Our Services */}

      <section className="h-[40rem] md:h-[30rem] my-[5rem] md:my-[10rem] flex items-center justify-center bg-white">
        <div className="relative max-w-[120rem] mx-auto w-full h-[85%] md:h-[70%] flex flex-col md:flex-row items-center justify-center px-4 md:px-8 space-y-[4rem] md:space-x-[2rem]">
          <div className="md:w-[40%] flex flex-col lg:flex-col items-start justify-start space-y-[1rem]">
            <h1 className="w-full md:text-xl font-semibold text-cyan-800/40 capitalize">
              Websites that impress
            </h1>
            <h2 className="max-w-[30rem] md:max-w-[50rem] text-cyan-800 text-left font-bold text-4xl md:text-5xl tracking-tighter">
              We Build High-Performance, Visually Stunning Websites That Help
              Your Business Grow
            </h2>
            <p className="max-w-[20rem] md:max-w-[30rem] text-cyan-800/60 text-left font-semibold md:text-xl tracking-tighter">
              Whether you're a small business, entrepreneur, or growing brand,
              our websites captivate audiences and drive engagement,
              conversions, and success.
            </p>
          </div>
          <AnimatedSection />
        </div>
      </section>

      {/* Time */}
      <section className="relative max-w-[120rem] mx-auto w-full flex flex-col md:flex-row items-center justify-center space-y-[3rem] md:space-y-0 px-4 pb-[5rem] md:pb-[10rem] bg-white">
        {/* Time */}
        <div className=" w-full flex flex-col items-center justify-center space-y-[2rem] md:space-y-[4rem] max-w-[50%] md:max-w-[20rem] z-10">
          {/* Number */}
          <div className="w-fit flex items-end justify-start font-number">
            <span
              className={`-mt-[5rem] inline-block md:w-[18rem] text-left font-extrabold text-[20rem] leading-[18.5rem] md:text-[40rem] md:leading-[36rem] uppercase tracking-tight duration-500 transition-opacity mix-blend-lighten text-neutral-300`}
            >
              50
            </span>
            <span
              className={`inline-block font-medium tracking-wider text-left text-xl md:text-[2rem] text-neutral-400`}
            >
              ms
            </span>
          </div>

          <p className="w-full overflow-hidden text-neutral-400 text-left font-semibold md:text-xl lg:text-xl tracking-tighter">
            Time it takes for someone to form an opinion about your website.
          </p>
        </div>

        {/* Text */}
        <div className="md:w-[37rem] flex flex-col items-center justify-center space-y-[2rem]">
          <p className="w-full md:w-[70%] text-cyan-700 text-left font-bold text-3xl md:text-4xl tracking-tighter">
            People decide fast, and options are endless. If your website doesn’t
            make an impact immediately, they move on.
          </p>
          <p className="w-full md:w-[70%] text-cyan-900 text-left font-bold text-3xl md:text-4xl tracking-tighter">
            You don’t get a second chance at a first impression.
          </p>
        </div>
      </section>

      <WordStyleSection />
      <PerformanceSection />
      <SecuritySection />
      <SupportSection />
      <InterestedSection />

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
