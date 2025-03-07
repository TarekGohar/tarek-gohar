"use client";
import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxSectionProps {
  id: string;
  service: string;
  industry: string;
  title: string;
  description: string;
  dividerColor: string;
  textColor: string;
}

export default function ParallaxSection({
  id,
  service,
  industry,
  title,
  description,
  dividerColor,
  textColor,
}: ParallaxSectionProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for content
  const contentY = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);

  // Opacity effect for the overall section
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 0.6]
  );

  // Create an array of letters for the description
  const letters = useMemo(() => {
    return description.split("").map((letter, index) => {
      return {
        letter,
        index,
      };
    });
  }, [description]);

  // Calculate total number of letters for the reveal effect
  const totalLetters = description.length;

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Optional noise overlay */}
      <div className="noisecontainer absolute inset-0 z-1 opacity-20" />

      {/* Content with Parallax */}
      <motion.div
        className="max-w-[120rem] mx-auto w-full h-[60%] flex flex-col items-start justify-start space-y-4 px-4 md:px-8 relative z-10"
        style={{
          y: contentY,
          opacity,
        }}>
        <div className={`flex divide-x-2 divide-${dividerColor}`}>
          <h1 className="pr-[2rem] md:text-xl font-medium text-neutral-100 opacity-90 capitalize">
            {service}
          </h1>
          <h1 className="pl-[2rem] md:text-xl font-medium text-neutral-100 opacity-90 capitalize">
            {industry}
          </h1>
        </div>
        <h2
          className={`max-w-[70rem] w-full text-${textColor}/80 text-left font-semibold text-4xl md:text-5xl tracking-wider uppercase`}>
          {title}
        </h2>

        {/* Left-to-right text reveal effect for description */}
        <div
          className={`md:max-w-[50rem] text-left  md:text-2xl overflow-hidden`}>
          <div className="flex flex-wrap">
            {letters.map((item, index) => {
              // Calculate the scroll progress point where this letter reaches full opacity
              // Starting when scrollYProgress is at 0.2, full visibility at 0.6
              const revealPoint = 0.2 + (item.index / totalLetters) * 0.3;

              return (
                <motion.span
                  key={index}
                  className={`text-${textColor}`}
                  initial={{ opacity: 0.1 }}
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [
                        Math.max(0.2, revealPoint - 0.05), // Start transition slightly before reveal point
                        revealPoint, // Full opacity at reveal point
                      ],
                      [0.1, 1],
                      { clamp: true }
                    ),
                  }}>
                  {item.letter === " " ? "\u00A0" : item.letter}
                </motion.span>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
