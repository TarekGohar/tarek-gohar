"use client";

import { useEffect, useState, useRef } from "react";
import FlipCard from "../FlipCard";

type SectionData = {
  title: string;
  src: string;
  content: string;
};

const useWindowWidth = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    setWidth(window.innerWidth); // Set initial width on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const chunkSections = (sections: SectionData[], width: number) => {
  let chunked: SectionData[][] = [];
  let index = 0;

  while (index < sections.length) {
    let chunkSize: number;

    if (width < 768) {
      chunkSize = chunked.length % 3 === 0 ? 1 : 2;
    } else if (width < 1024) {
      chunkSize = chunked.length % 2 === 0 ? 5 : 3;
    } else {
      chunkSize = chunked.length % 2 === 0 ? 3 : 4;
    }

    chunked.push(sections.slice(index, index + chunkSize));
    index += chunkSize;
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
      title: "Performance",
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
        "Applications designed to perform flawlessly across all devices and platforms.",
    },
  ];

  const width = useWindowWidth();
  if (width === null) return null; // Avoid mismatch in hydration

  const sectionGroups = chunkSections(sections, width);

  return (
    <section className="py-[4rem] md:py-[10rem] bg-neutral-50 text-white">
      <div className="max-w-[120rem] mx-auto w-full h-full flex flex-col items-start justify-center space-y-12 px-4 md:px-8">
        <h1 className="w-full text-left md:text-xl font-semibold opacity-80 text-cyan-950 ">
          Our Services
        </h1>
        <h2 className="max-w-[80rem] mx-auto w-full text-left text-3xl md:text-5xl font-semibold text-cyan-900 uppercase tracking-wider">
          WHAT Vereon HAS TO OFFER
        </h2>
        <div className="max-w-[80rem] mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 h-[80rem] md:h-[55rem]">
          {(() => {
            let globalIndex = 0;
            return sectionGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="grid gap-2 md:gap-4">
                {group.map((section) => {
                  const currentIndex = globalIndex++;
                  return (
                    <div key={currentIndex}>
                      <FlipCard index={currentIndex} section={section} />
                    </div>
                  );
                })}
              </div>
            ));
          })()}
        </div>
      </div>
    </section>
  );
}
