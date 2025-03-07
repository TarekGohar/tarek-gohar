"use client";
import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

interface ParallaxSectionProps {
  id: string;
  service: string;
  industry: string;
  title: string;
  description: string;
  link?: string;
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
  link,
}: ParallaxSectionProps) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Reduce the travel distance for better mobile performance
  const contentY = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

  // Smoother opacity transition
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.7, 1, 1, 0.7]
  );

  // Split by paragraphs first, then by words, to maintain structure
  const paragraphs = useMemo(() => {
    return description.split("\n\n").map((paragraph, pIndex) => {
      // Split each paragraph into words
      return {
        pIndex,
        words: paragraph.split(" ").map((word, wIndex) => ({
          word,
          wIndex,
          // Calculate global word index for more precise timing
          globalIndex: pIndex * 100 + wIndex, // Using 100 as buffer between paragraphs
        })),
      };
    });
  }, [description]);

  // Count total words for timing calculations
  const totalWords = paragraphs.reduce((sum, p) => sum + p.words.length, 0);

  // Find the highest global index for normalization
  const maxGlobalIndex = paragraphs.reduce(
    (max, p) => Math.max(max, ...p.words.map((w) => w.globalIndex)),
    0
  );

  // Memoize the link text if it exists
  const linkWords = useMemo(() => {
    if (!link) return [];
    const linkText = "View Web Site →";
    return linkText.split(" ").map((word, index) => ({
      word,
      index,
    }));
  }, [link]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative h-screen min-h-[50rem] flex items-center justify-center overflow-hidden will-change-transform">
      {/* Optional noise overlay */}
      <div className="noisecontainer absolute inset-0 z-[10] opacity-80" />

      {/* Content with Parallax */}
      <motion.div
        className="md:max-w-[90%] mx-auto w-full h-[60%] flex flex-col items-start justify-start space-y-4 px-4 md:px-8 relative z-10 will-change-transform"
        style={{
          y: contentY,
          opacity,
        }}
        initial={{ translateZ: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 80,
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

        {/* Description text reveal animation - now with more pronounced sequential reveal */}
        <div className={`md:max-w-[50rem] text-left md:text-2xl`}>
          {paragraphs.map((paragraph, pIndex) => {
            return (
              <div
                key={`p-${pIndex}`}
                className={`flex flex-wrap ${pIndex > 0 ? "mt-6" : ""}`}>
                {paragraph.words.map((item) => {
                  // Create a more spread out timing sequence
                  // Normalize the global index to a 0-1 range for better control
                  const normalizedIndex = item.globalIndex / maxGlobalIndex;

                  // Create a much wider spread in animation timing (0.1 to 0.7)
                  // This gives us 60% of scroll progress to reveal all words sequentially
                  const startReveal = 0.2 + normalizedIndex * 0.2;

                  // Make each word's reveal happen over a very short scroll distance (0.05)
                  // This creates a sharper opacity transition
                  const endReveal = startReveal + 0.05;

                  return (
                    <motion.span
                      key={`word-${pIndex}-${item.wIndex}`}
                      className={`text-${textColor} will-change-opacity`}
                      initial={{ opacity: 0 }}
                      style={{
                        opacity: useTransform(
                          scrollYProgress,
                          [startReveal, endReveal],
                          [0, 1],
                          { clamp: true } // Ensure opacity stays clamped between 0-1
                        ),
                      }}>
                      {item.word}
                      {/* Add space after each word except last word in paragraph */}
                      {item.wIndex < paragraph.words.length - 1 && "\u00A0"}
                    </motion.span>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Link with enhanced sequential reveal animation */}
        {link && (
          <a
            href={link}
            target="_blank"
            className="mt-8 group"
            style={{ zIndex: 5000 }}>
            <div className="flex flex-wrap items-center">
              {linkWords.map((item, index) => {
                // Start link reveal after most words are visible
                // Each word reveals over a short scroll distance for more distinct transitions
                const startReveal =
                  0.3 + (index / Math.max(1, linkWords.length)) * 0.2;
                const endReveal = startReveal + 0.03;

                return (
                  <motion.span
                    key={`link-word-${index}`}
                    className={`text-${textColor} will-change-opacity md:text-xl font-medium transition-all duration-300`}
                    initial={{ opacity: 0 }}
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [startReveal, endReveal],
                        [0, 1],
                        { clamp: true }
                      ),
                    }}>
                    {item.word}
                    {/* Add space after each word except last word */}
                    {index < linkWords.length - 1 && "\u00A0"}
                  </motion.span>
                );
              })}
            </div>
          </a>
        )}
      </motion.div>
    </section>
  );
}
