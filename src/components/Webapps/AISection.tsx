"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const TYPING_SPEED = 0.08;

export default function AISection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const text = "Powered by AI.";
  return (
    <section
      className="relative min-h-[47rem] min-w-[20rem] flex flex-col items-start justify-center overflow-hidden px-4 md:px-8"
      style={{
        background:
          "linear-gradient(220deg, rgba(39, 97, 117, 0.3), rgba(255, 255, 255, 1) 100%), " +
          "linear-gradient(180deg, rgba(39, 97, 117, 0.3), rgba(255, 255, 255, 1) 100%), " +
          "linear-gradient(270deg, rgba(39, 97, 117, 0.3), rgba(255, 255, 255, 1) 100%), " +
          "linear-gradient(0deg, rgba(39, 97, 117, 0.3), rgba(255, 255, 255, 1) 100%)",
      }}
    >
      <div className="max-w-[120rem] mx-auto w-full flex flex-col items-center justify-center space-y-[2rem] z-40 ">
        <h1 className="max-w-[120rem] absolute top-[4rem] w-full mx-auto md:text-xl font-semibold text-cyan-800 opacity-60 px-4 md:px-8">
          Artificial Intelligence
        </h1>
        <h2
          ref={ref}
          className="relative w-fit py-[.75rem] px-[6rem] md:px-[8rem] mx-auto flex items-center justify-start text-cyan-800/90 text-left font-medium text-3xl md:text-5xl uppercase tracking-wider rounded-full border-[2px] border-cyan-800/10"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.4)", // Slightly higher opacity for frostiness
            backdropFilter: "blur(20px) saturate(150%)", // Increase blur and add saturation for an icy effect
            WebkitBackdropFilter: "blur(20px) saturate(150%)",
            boxShadow: "0 4px 10px rgba(255, 255, 255, 0.3)", // Adds a subtle frosty glow
          }}
        >
          <Image
            src="/ai.svg"
            height={50}
            width={50}
            alt={"AI icon"}
            className="absolute left-[1.2rem] w-[2.5rem] h-[2.5rem] md:w-[3.25rem] md:h-[3.25rem]"
          />
          <div className="flex items-center space-x-[.5rem]">
            <div>
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
            </div>

            {/* Cursor */}
            <motion.span
              className="mb-[.05rem] w-[.2rem] md:w-[.275rem] h-[1.65rem] md:h-[2.25rem] bg-cyan-800"
              initial={{ opacity: 1 }}
              animate={isInView ? { opacity: [0, 1, 0] } : {}}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: text.length * TYPING_SPEED + 0.7,
              }}
            />
          </div>
        </h2>
        <p className="md:max-w-[50rem] text-cyan-800/60 text-center font- md:text-xl">
          We integrate AI-driven features into our web apps to enhance
          automation, efficiency, and user experience. Chatbots, predictive
          analytics, and AI-driven recommendations streamline operations,
          enhance decision-making, and boost user engagement.
        </p>
      </div>

      <motion.div
        className={`absolute inset-0 pointer-events-none z-10`}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 80%, rgba(255, 255, 255, 1) 100%)",
        }}
      />
    </section>
  );
}
