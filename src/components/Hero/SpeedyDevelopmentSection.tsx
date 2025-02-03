"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import FlipCard from "../FlipCard";
import { div } from "framer-motion/client";

type SectionData = {
  title: string;
  src: string;
  content: string;
};

const chunkSections = (sections: SectionData[]) => {
  let chunked = [];
  let index = 0;
  while (index < sections.length) {
    let chunkSize: number = chunked.length % 2 === 0 ? 1 : 2; // Alternate between 4 and 3
    chunked.push(sections.slice(index, index + chunkSize));
    index += chunkSize;
  }

  for (let i = 0; i < chunked.length; i++) {
    console.log("chunked", i);
    console.log(chunked[i].length);
  }
  return chunked;
};

export default function SquigglyPathSection() {
  const sections: SectionData[] = [
    {
      title: "Scalable",
      src: "/icons/scale.svg",
      content:
        "Built to grow with your business, handling increased traffic and data effortlessly.",
    },
    {
      title: "Secure",
      src: "/icons/lock.svg",
      content:
        "Advanced security measures ensure data protection, encryption, and compliance.",
    },
    {
      title: "Seamless UX",
      src: "/icons/ux.svg",
      content:
        "Intuitive interfaces that provide smooth navigation and engaging user experiences.",
    },
    {
      title: "Full Support",
      src: "/icons/support.svg",
      content:
        "Ongoing assistance, updates, and troubleshooting to keep your app running smoothly.",
    },
    {
      title: "Maintenance",
      src: "/icons/gear.svg",
      content:
        "Regular updates, bug fixes, and optimizations to keep your app performing at its best.",
    },
    {
      title: "Rapid Development",
      src: "/icons/speed.svg",
      content:
        "Agile workflows ensure quick turnaround times without compromising quality.",
    },
    {
      title: "Continuous Integration",
      src: "/icons/integration.svg",
      content:
        "Automated testing and deployment to ensure seamless updates and reliability.",
    },
    {
      title: "Cloud-Ready",
      src: "/icons/cloud.svg",
      content:
        "Optimized for cloud infrastructure to ensure flexibility, speed, and scalability.",
    },
    {
      title: "Performance Optimized",
      src: "/icons/performance.svg",
      content: "Fast, responsive, and efficient apps with minimal load times.",
    },
    {
      title: "AI & Automation",
      src: "/icons/ai.svg",
      content:
        "Smart automation and AI-driven solutions for efficiency and innovation.",
    },
    {
      title: "Data Analytics",
      src: "/icons/data.svg",
      content:
        "Insightful reporting and analytics to help you make data-driven decisions.",
    },
    {
      title: "Cross-Platform",
      src: "/icons/cross.svg",
      content:
        "Web apps designed to perform flawlessly across all devices and platforms.",
    },
  ];

  const refs = sections.map(() => useRef(null)); // Create separate refs for each section
  const sectionGroups = chunkSections(sections);

  return (
    <section className="py-[10rem] bg-neutral-100 text-white">
      <div className="w-full h-full max-w-[80rem] mx-auto flex flex-col items-start justify-center space-y-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-[#012A4A] capitalize">
          Why choose us?
        </h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[100rem] md:h-[70rem]">
          {sectionGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="grid gap-4">
              {group.map((section, index) => {
                useInView(refs[index], { once: true }); // Track each section separately

                return (
                  <div key={index}>
                    <FlipCard index={index + groupIndex} section={section} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
