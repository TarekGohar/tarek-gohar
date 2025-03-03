"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function WebAppsSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "1 0"],
  });

  const adjustedScroll = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  const opacityT1 = useTransform(adjustedScroll, [0, 0.33], [0, 0.65]);
  const yProgressT1 = useTransform(adjustedScroll, [0, 0.33], [-200, 0]);
  const springT1 = useSpring(yProgressT1, { stiffness: 100, damping: 30 });

  const opacityT2 = useTransform(adjustedScroll, [0.33, 0.66], [0, 0.8]);
  const yProgressT2 = useTransform(adjustedScroll, [0.33, 0.66], [-200, 0]);
  const springT2 = useSpring(yProgressT2, { stiffness: 100, damping: 30 });

  const opacityT3 = useTransform(adjustedScroll, [0.66, 1], [0, 0.95]);
  const yProgressT3 = useTransform(adjustedScroll, [0.66, 1], [-200, 0]);
  const springT3 = useSpring(yProgressT3, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // Use scrollYProgress.onChange() to track changes
    console.log("scrollYProgress:", scrollYProgress);
  }, [scrollYProgress]);

  return (
    <section
      ref={targetRef}
      className="min-h-[50rem] flex items-center justify-center bg-white text-cyan-900"
    >
      <div className="mt-10 md:mt-0 max-w-[120rem] mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="w-full flex flex-col items-start space-y-[1rem] md:space-y-[2rem] justify-between text-left">
          <h1 className="md:text-xl font-semibold opacity-80">Web Apps</h1>
          <h2 className="w-full md:max-w-[80rem] text-cyan-800 text-left font-medium text-4xl md:text-5xl uppercase tracking-wider">
            Your Ideas, Transformed into Powerful Web Applications.
          </h2>
          <Link
            className="md:max-w-[35rem] text-cyan-800/60 text-center font-medium md:text-xl header-underline-light"
            href="/web-apps"
          >
            Learn More
          </Link>
        </div>
        <div className="flex flex-col items-center md:items-end justify-center w-full md:mr-[6rem] -space-y-[140px] md:-space-y-[250px]">
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{
              transition: { duration: 2, ease: "easeInOut" },
            }}
            style={{ opacity: opacityT3, y: springT3 }}
            className="z-20"
          >
            <Image
              src="/icons/check-tile.svg"
              width={500}
              height={500}
              className=" w-[12rem] md:w-[20rem] "
              alt="check Tile"
              style={{ transform: "rotateX(70deg) rotateZ(-45deg)" }}
            />
          </motion.div>
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{
              transition: { duration: 2, ease: "easeInOut" },
            }}
            style={{ opacity: opacityT2, y: springT2 }}
            className="z-10"
          >
            <Image
              src="/icons/lock-tile.svg"
              width={500}
              height={500}
              className=" w-[12rem] md:w-[20rem] z-10"
              alt="Lock Tile"
              style={{ transform: "rotateX(70deg) rotateZ(-45deg)" }}
            />
          </motion.div>
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{
              transition: { duration: 2, ease: "easeInOut" },
            }}
            style={{ opacity: opacityT1, y: springT1 }}
            className="z-0"
          >
            <Image
              src="/icons/html-tile.svg"
              width={500}
              height={500}
              className=" w-[12rem] md:w-[20rem]"
              alt="HTML Tile"
              style={{ transform: "rotateX(70deg) rotateZ(-45deg)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
