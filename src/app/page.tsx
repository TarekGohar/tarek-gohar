"use client";

import Navbar from "@/components/navbar";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SlotsSection from "@/components/Hero/SlotsSection";
import AnimatedCirclesSection from "@/components/Hero/AnimateCircles";
import SpeedyDevelopmentSection from "@/components/Hero/SpeedyDevelopmentSection";
import ParticlesBackground from "@/components/Hero/GradientBackground";
import WebAppsSection from "../components/Hero/WebAppsSection";
import WebSitesSection from "@/components/Hero/WebSitesSection";
import { GetAQuote } from "@/components/Hero/GetAQuoteSection";

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
        className={`relative h-screen min-h-[45rem] flex items-center justify-center transition-all ease-in duration-700 overflow-hidden z-10 ${
          bgBlack ? "text-cyan-800" : "text-white"
        } ${isLocked ? "fixed inset-0" : "absolute top-0 w-full"}`}
      >
        <div className="z-20 opacity-70 max-w-[80rem] mx-auto w-fit text-center grid grid-cols-2 md:gap-y-8 md:grid-cols-1">
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
          initial={{ opacity: 1 }}
          animate={{ opacity: isLocked ? 1 : 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.15) 70%, rgba(255, 255, 255, 0.35) 80%, rgba(255, 255, 255, 0.65) 90%, rgba(255, 255, 255, 1) 100%)",
          }}
        />
        {/* Transition background from black to white */}
        <motion.div
          className="absolute inset-0 z-0 w-full h-screen bg-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: bgBlack ? 0 : 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </section>

      <section className="h-[25rem] md:h-[40rem] flex items-center justify-center">
        <div className=" max-w-[120rem] mx-auto flex flex-col items-center justify-center space-y-4 px-4">
          <h1 className="md:text-xl font-semibold text-neutral-400 opacity-70 capitalize">
            What do we do?
          </h1>
          <h2 className="max-w-[50rem] text-cyan-800/60 text-center font-bold text-4xl md:text-6xl tracking-tighter">
            We help your business{" "}
            <span className="opacity-80 text-cyan-900">grow</span>,{" "}
            <span className="opacity-90 text-cyan-900">innovate</span>, and{" "}
            <span className="opacity-100 text-cyan-900">succeed</span>.
          </h2>
          <p className="max-w-[20rem] md:max-w-[32rem] text-cyan-700/50 text-center font-semibold md:text-xl tracking-tighter">
            We design and develop websites and web applications that are
            user-friendly, reliable, and built to support your business goals.
          </p>
        </div>
      </section>

      <SlotsSection />
      <AnimatedCirclesSection />
      <SpeedyDevelopmentSection />
      <WebAppsSection />
      <WebSitesSection />
      <GetAQuote />

      {/* Disable scrolling when locked */}
      <style jsx global>{`
        body {
          overflow: ${isLocked ? "hidden" : "auto"};
        }
      `}</style>
    </>
  );
}
