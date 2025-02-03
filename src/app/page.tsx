"use client";

import Navbar from "@/components/navbar";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SlotsSection from "@/components/Hero/SlotsSection";
import AnimatedCirclesSection from "@/components/Hero/AnimateCircles";
import MovingLinesBackground from "@/components/MovingLines";
import SpeedyDevelopmentSection from "@/components/Hero/SpeedyDevelopmentSection";

export default function Page() {
  const firstName = "TAREK";
  const lastName = "GOHAR";
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
        className={`h-screen min-h-[55rem] flex items-center justify-center transition-all duration-700 ${
          bgBlack ? "bg-white text-black" : "bg-black text-white"
        } ${isLocked ? "fixed inset-0 z-10" : "absolute top-0 w-full"}`}
      >
        <div className="border-[1.5rem] border-black border-opacity-5 p-10 max-w-[80rem] mx-auto w-fit text-center grid grid-cols-2 md:gap-y-8 md:grid-cols-1">
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
      </section>
      {/* Spacer - Prevents instant scrolling when fixed section disappears */}
      <section className="min-h-screen flex items-center justify-center"></section>
      <SlotsSection />
      <AnimatedCirclesSection />
      <SpeedyDevelopmentSection />

      <section className="min-h-screen flex items-center justify-center">
        <h1 className="typewriter text-7xl font-semibold">Tarek Gohar</h1>
      </section>
      <section className="min-h-screen flex items-center justify-center">
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
