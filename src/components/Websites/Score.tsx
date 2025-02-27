import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function NinetyPercentCircle({ delay = 0 }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // Adjust margin for better control
  const [size, setSize] = useState(100);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 768) setSize(200); // Large screens
      else setSize(100); // Extra small screens
    };

    updateSize(); // Set initial size
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (isInView) {
      const startAnimation = async () => {
        await new Promise((resolve) => setTimeout(resolve, delay * 1000)); // Apply delay before animation
        controls.start({ strokeDashoffset: 100 });

        await new Promise((resolve) => setTimeout(resolve, 50)); // Small delay to sync counting smoothly

        let start = 0;
        const end = 100;
        const duration = 1500; // 1.5 seconds
        const increment = (end - start) / (duration / 11.5); // Update every 10ms

        let timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCount(Math.round(start));
        }, 10);

        return () => clearInterval(timer);
      };

      startAnimation();
    }
  }, [controls, delay, isInView]);

  return (
    <div
      ref={ref}
      className="relative w-[6.25rem] h-[6rem] md:w-[12.5rem] md:h-[12.5rem] flex items-center justify-center"
    >
      {/* Background Gray Circle */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="absolute top-0 left-0"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="transparent"
          stroke="#f5f5f5"
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray="565"
          strokeDashoffset="100"
          transform="rotate(121.5 100 100)"
        />
      </svg>

      {/* Animated Progress Circle */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="absolute top-0 left-0" // Position on top of the background circle
      >
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="transparent"
          stroke="#0e7490"
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray="565"
          strokeDashoffset="100"
          transform="rotate(121.5 100 100)"
          initial={{ strokeDashoffset: 564 }}
          animate={controls}
          transition={{ duration: 1.5, ease: "easeInOut", delay: delay }}
        />
      </svg>

      {/* Centered Count-Up Number */}
      <div className="absolute flex items-center justify-center text-cyan-900/60">
        <h3 className="font-bold text-xl md:text-4xl">{count}</h3>
      </div>
    </div>
  );
}
