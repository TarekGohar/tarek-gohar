"use client";

import * as React from "react";
import * as motion from "motion/react-client";
import { useInView } from "framer-motion";
import Link from "next/link";

const TYPING_SPEED = 0.05;

export default function GetAQuote() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const text = "Your next big project starts here.";
  return (
    <section
      className="relative min-h-[47rem] min-w-[20rem] z-[300] flex flex-col items-start justify-center overflow-hidden px-4 md:px-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.0) 80%, rgba(255, 255, 255, 1) 100%)",
      }}>
      <div className="max-w-[120rem] mx-auto w-full flex flex-col items-start justify-start">
        <h2
          ref={ref}
          className="max-w-[30rem] mx-auto text-cyan-900 text-left font-semibold text-4xl md:text-5xl uppercase tracking-wider">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: TYPING_SPEED,
                delay: index * TYPING_SPEED + 0.5,
              }}>
              {letter}
            </motion.span>
          ))}
        </h2>

        <div className="mt-4 w-full flex items-center justify-center">
          <Link
            className="md:max-w-[35rem] text-cyan-900/80 text-center font-medium md:text-xl underline underline-offset-8 capitalize"
            href="/get-a-quote">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: TYPING_SPEED + text.length * TYPING_SPEED + 0.5,
              }}>
              Get a quote
            </motion.h3>
          </Link>
        </div>
      </div>

      <motion.div
        className={`absolute inset-0 pointer-events-none z-40`}
        initial={{ opacity: 0.5 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1) 100%)",
        }}
      />
    </section>
  );
}
