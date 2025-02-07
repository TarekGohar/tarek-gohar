import { AnimatePresence, motion } from "framer-motion";
import { section } from "framer-motion/client";
import { useState, useEffect } from "react";

const words = [
  { text: "Innovative", font: "serif" },
  { text: "Dynamic", font: "Primeform Pro" },
  { text: "Creative", font: "sans-serif" },
  { text: "Elegant", font: "monospace" },
  { text: "Bold", font: "sans-serif" },
  { text: "Modern", font: "serif" },
  { text: "Dark", font: "monospace" },
  { text: "Responsive", font: "sans-serif" },
  { text: "High-Performance", font: "serif" },
];

const transitionDuration = 0.5; // seconds
const intervalTime = 1500; // 2 seconds per word

export default function WordFlip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[40rem] max-w-[100rem] mx-auto w-full flex items-center justify-center">
      <AnimatePresence>
        <motion.div
          key={words[index].text}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: transitionDuration, ease: "easeInOut" }}
          style={{
            fontFamily: words[index].font,
            position: "absolute",
            fontSize: "3rem",
          }}
        >
          {words[index].text}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
