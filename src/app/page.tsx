"use client";

import Navbar from "@/components/navbar";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import SlotsSection from "@/components/Hero/SlotsSection";
import AnimatedCirclesSection from "@/components/Hero/AnimateCircles";
import MovingLinesBackground from "@/components/MovingLines";
import SpeedyDevelopmentSection from "@/components/Hero/SpeedyDevelopmentSection";
import ParticlesBackground from "@/components/GradientBackground";

export default function Page() {
  const firstName = "TAREK";
  const lastName = "GOHAR";
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, { once: true });
  const [firstLetters, setFirstLetters] = useState(
    Array(firstName.length).fill("A")
  );
  const [lastLetters, setLastLetters] = useState(
    Array(lastName.length).fill("A")
  );
  const [isLocked, setIsLocked] = useState(true);
  const [bgBlack, setBgBlack] = useState(false);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    // Letter animation
    const timeouts = [];

    firstName.split("").forEach((letter, index) => {
      let iteration = 0;
      const maxIterations = Math.floor(Math.random() * 15) + 10;

      const interval = setInterval(() => {
        setFirstLetters((prevLetters) => {
          const newLetters = [...prevLetters];
          newLetters[index] =
            characters[Math.floor(Math.random() * characters.length)];
          return newLetters;
        });

        iteration++;
        if (iteration >= maxIterations) {
          clearInterval(interval);
          setFirstLetters((prevLetters) => {
            const newLetters = [...prevLetters];
            newLetters[index] = letter;
            return newLetters;
          });
        }
      }, Math.random() * 100 + 100);

      timeouts.push(interval);
    });

    lastName.split("").forEach((letter, index) => {
      let iteration = 0;
      const maxIterations = Math.floor(Math.random() * 15) + 10;

      const interval = setInterval(() => {
        setLastLetters((prevLetters) => {
          const newLetters = [...prevLetters];
          newLetters[index] =
            characters[Math.floor(Math.random() * characters.length)];
          return newLetters;
        });

        iteration++;
        if (iteration >= maxIterations) {
          clearInterval(interval);
          setLastLetters((prevLetters) => {
            const newLetters = [...prevLetters];
            newLetters[index] = letter;
            return newLetters;
          });
        }
      }, Math.random() * 100 + 50);

      timeouts.push(interval);
    });

    return () => timeouts.forEach(clearInterval);
  }, []);

  useEffect(() => {
    const triggerScrollUnlock = (event) => {
      if (isLocked) {
        event.preventDefault(); // Prevent actual scrolling
        setBgBlack(true); // Change background to black
        setTimeout(() => {
          setIsLocked(false); // Unlock scrolling
        }, 1000);
      }
    };

    window.addEventListener("wheel", triggerScrollUnlock, { passive: false });
    window.addEventListener("touchmove", triggerScrollUnlock, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", triggerScrollUnlock);
      window.removeEventListener("touchmove", triggerScrollUnlock);
    };
  }, [isLocked]);

  return (
    <>
      <Navbar light={!bgBlack} />
      {/* First Section (Locks scroll initially) */}
      <section
        className={`relative h-screen min-h-[45rem] flex items-center justify-center transition-all ease-in duration-700 overflow-hidden ${
          bgBlack ? "text-cyan-800" : "text-white"
        } ${isLocked ? "fixed inset-0 z-10" : "absolute top-0 w-full"}`}
      >
        <div className="z-20 opacity-60 max-w-[80rem] mx-auto w-fit text-center grid grid-cols-2 md:gap-y-8 md:grid-cols-1">
          <h1 className="w-fit grid grid-cols-1 md:grid-cols-5 text-[7rem] leading-[7rem] md:text-[13rem] md:leading-[11rem] font-extrabold">
            {firstLetters.map((letter, index) => (
              <span
                key={index}
                className={` ${
                  (index == 0 && letter == "T") ||
                  (index == 1 && letter == "A") ||
                  (index == 2 && letter == "R") ||
                  (index == 3 && letter == "E") ||
                  (index == 4 && letter == "K")
                    ? "opacity-100"
                    : "opacity-40"
                } inline-block w-[8rem] md:w-[11rem] text-center`}
              >
                {letter}
              </span>
            ))}
          </h1>
          <h1 className="w-fit grid grid-cols-1 md:grid-cols-5 text-[7rem] leading-[7rem] md:text-[13rem] md:leading-[11rem] font-extrabold">
            {lastLetters.map((letter, index) => (
              <span
                key={index}
                className={` ${
                  (index == 0 && letter == "G") ||
                  (index == 1 && letter == "O") ||
                  (index == 2 && letter == "H") ||
                  (index == 3 && letter == "A") ||
                  (index == 4 && letter == "R")
                    ? "opacity-100"
                    : "opacity-40"
                } inline-block w-[8rem] md:w-[11rem] text-center`}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>
        <ParticlesBackground />
        {/* Gradient Fade to White at the Bottom */}
        <motion.div
          className={`absolute inset-0 pointer-events-none z-40`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLocked ? 0 : 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            background: isLocked
              ? "transparent"
              : "linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 100%)",
          }}
        />
        {/* Transition background from black to white */}
        <motion.div
          className="absolute inset-0 z-0 w-full h-screen bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: bgBlack ? 0 : 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </section>

      {/* Spacer - Prevents instant scrolling when fixed section disappears */}

      <section className="h-[30rem] md:h-[50rem] max-w-[70rem] mx-auto flex items-center justify-center px-4">
        <h1 className="typewriter text-5xl md:text-7xl font-semibold text-left nd:leading-[5.5rem]">
          Dedicated to helping your business{" "}
          <span className="opacity-80 text-cyan-800">grow</span>,{" "}
          <span className="opacity-90 text-cyan-800">innovate</span>, and{" "}
          <span className="opacity-100 text-cyan-800">succeed</span>.
        </h1>
      </section>

      <SlotsSection />
      <AnimatedCirclesSection />
      <SpeedyDevelopmentSection />

      <section className="min-h-screen flex items-center justify-center">
        <h1 className="typewriter text-7xl font-semibold">Web Apps</h1>
        <div>
          <motion.svg
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 18.01V18M8 3H16C17.1046 3 18 3.89543 18 5V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V5C6 3.89543 6.89543 3 8 3Z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      </section>
      <section
        ref={targetRef}
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="typewriter text-7xl font-semibold">Tarek Gohar</h1>
      </section>
      {/* Disable scrolling when locked */}
      <style jsx global>{`
        body {
          overflow: ${isLocked ? "hidden" : "auto"};
        }
      `}</style>
    </>
  );
}
