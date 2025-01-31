"use client";

import Navbar from "@/components/navbar";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Page() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const [isVisible, setIsVisible] = useState(false);

  // Remap the scroll range so that everything completes at 0.5
  const adjustedScroll = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Staggered animation with the adjusted scroll
  const opacity1 = useTransform(adjustedScroll, [0, 1], [0, 1]);
  const opacity2 = useTransform(adjustedScroll, [0.1, 1], [0, 1]);
  const opacity3 = useTransform(adjustedScroll, [0.2, 1], [0, 1]);
  const opacity4 = useTransform(adjustedScroll, [0.3, 1], [0, 1]);
  const opacity5 = useTransform(adjustedScroll, [0.4, 1], [0, 1]);

  const xOffset1 = useTransform(adjustedScroll, [0, 1], [150, 0]);
  const xOffset2 = useTransform(adjustedScroll, [0.1, 1], [150, 0]);
  const xOffset3 = useTransform(adjustedScroll, [0.2, 1], [150, 0]);
  const xOffset4 = useTransform(adjustedScroll, [0.3, 1], [150, 0]);
  const xOffset5 = useTransform(adjustedScroll, [0.4, 1], [150, 0]);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.8 } // Adjust threshold as needed
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
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
        className={`h-screen flex items-center justify-center transition-all duration-700 ${
          bgBlack ? "bg-white text-black" : "bg-black text-white"
        } ${isLocked ? "fixed inset-0 z-10" : "absolute top-0 w-full"}`}
      >
        <div className="max-w-[80rem] mx-auto w-fit text-center grid grid-cols-2 md:gap-y-8 md:grid-cols-1">
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
      <div className="h-[40rem] flex flex-col justify-center items-center">
        <div
          ref={targetRef}
          className="px-4 max-w-[80rem] mx-auto flex items-center justify-center overflow-hidden"
        >
          <h1 className="text-5xl md:text-8xl font-extrabold w-[60%] md:w-[75%] capitalize h-fit">
            Full-stack apps built from the ground up.
          </h1>
          <div className="max-w-[80rem] mx-auto w-fit text-center flex flex-col space-y-4 md:space-y-8">
            <motion.div
              style={{ opacity: opacity5, x: xOffset5 }}
              className="bg-neutral-500 text-white p-5 md:p-6 text-center rounded-2xl w-[7rem] md:w-40 mx-auto"
            ></motion.div>
            <motion.div
              style={{ opacity: opacity4, x: xOffset4 }}
              className="bg-neutral-600 text-white p-5 md:p-6 text-center rounded-2xl w-[7rem] md:w-40 mx-auto"
            ></motion.div>
            <motion.div
              style={{ opacity: opacity3, x: xOffset3 }}
              className="bg-neutral-700 text-white p-5 md:p-6 text-center rounded-2xl w-[7rem] md:w-40 mx-auto"
            ></motion.div>
            <motion.div
              style={{ opacity: opacity2, x: xOffset2 }}
              className="bg-neutral-800 text-white p-5 md:p-6 text-center rounded-2xl w-[7rem] md:w-40 mx-auto"
            ></motion.div>
            <motion.div
              style={{ opacity: opacity1, x: xOffset1 }}
              className="bg-neutral-900 text-white p-5 md:p-6 text-center rounded-2xl w-[7rem] md:w-40 mx-auto"
            ></motion.div>
          </div>
        </div>
      </div>
      {/* Other Sections */}
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="typewriter text-7xl font-semibold">Tarek Gohar</h1>
      </section>
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
