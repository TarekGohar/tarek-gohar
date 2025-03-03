"use client";
import Card from "./ProgressCard";
import { useScroll } from "framer-motion";
import { title } from "process";
import { useEffect, useRef } from "react";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const projects = [
    {
      step: 1,
      color: "#f5f5f5",
      title: "First Step",
      description: "Description 1",
      src: "default.jpg",
      url: "#",
    },
    {
      step: 2,
      color: "#e8e8e8",
      title: "Second Step",
      description: "Description 2",
      src: "default.jpg",
      url: "#",
    },
    {
      step: 3,
      color: "#d0d0d0",
      title: "Third Step",
      description: "Description 3",
      src: "default.jpg",
      url: "#",
    },
    {
      step: 4,
      color: "#b0b0b0",
      title: "Fourth Step",
      description: "Description 4",
      src: "default.jpg",
      url: "#",
    },
  ];

  return (
    <section ref={container} className="relative px-4 md:px-8">
      <h1 className="max-w-[120rem] mx-auto md:text-xl font-semibold opacity-80 px-4 md:px-8">
        Our Process
      </h1>
      <div className="flex flex-col items-center justify-center space-y-[.5rem] mt-[5rem] md:mt-[10rem] md:mb-[-5rem]">
        <h2 className=" text-cyan-800 text-center font-medium text-4xl md:text-5xl uppercase tracking-wider">
          How We Build <span className="text-cyan-800/60">Your Web App</span>
        </h2>
        <p className="md:max-w-[35rem] text-cyan-800/60 text-center font- md:text-xl">
          A seamless journey from idea to launch.
        </p>
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}
