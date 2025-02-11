"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { linearGradient, section } from "framer-motion/client";
import Link from "next/link";

const TYPING_SPEED = 0.05;

export function GetAQuote() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const text = "Bring Your Vision to Life.";
  const subheader = "We’ll Handle the Code.";
  return (
    <section
      className="relative min-h-[47rem] min-w-[20rem] flex flex-col items-center justify-center overflow-hidden px-4 md:px-8"
      style={{
        background:
          "linear-gradient(220deg, rgba(22, 78, 99, 0.3), rgba(255, 255, 255, 1) 100%), " +
          "linear-gradient(180deg, rgba(22, 78, 99, 0.3), rgba(255, 255, 255, 1) 100%), " +
          "linear-gradient(270deg, rgba(22, 78, 99, .3), rgba(255, 255, 255, 1) 100%), " +
          "linear-gradient(0deg, rgba(22, 78, 99, .3), rgba(255, 255, 255, 1) 100%)",
      }}
    >
      <h2
        ref={ref}
        className="text-cyan-900 text-center font-semibold text-5xl md:text-7xl"
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: TYPING_SPEED,
              delay: index * TYPING_SPEED + 0.5,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h2>
      <h2
        ref={ref}
        className="text-cyan-800 text-center font-semibold text-5xl md:text-7xl"
      >
        {subheader.split("").map((subheader, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: TYPING_SPEED,
              delay: index * TYPING_SPEED + text.length * TYPING_SPEED + 0.5,
            }}
          >
            {subheader}
          </motion.span>
        ))}
      </h2>
      <Link
        className="mt-5 capitalize text-cyan-700 text-center header-underline font-semibold text-3xl"
        href="/contact"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay:
              TYPING_SPEED +
              text.length * TYPING_SPEED +
              text.length * TYPING_SPEED +
              0.5,
          }}
        >
          Get a quote
        </motion.h3>
      </Link>
      <motion.div
        className={`absolute inset-0 pointer-events-none z-40`}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1) 100%)",
        }}
      />

      <h1 className="absolute top-[4rem] max-w-[100rem] mx-auto w-full md:text-xl font-semibold text-cyan-800 opacity-60 px-4 md:px-8">
        Pricing
      </h1>
    </section>
  );
}
