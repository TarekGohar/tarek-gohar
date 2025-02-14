import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const DotGrid = () => {
  const [gridSize, setGridSize] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768 ? 20 : 33
  ); // Set initial gridSize dynamically based on screen width

  useEffect(() => {
    const handleResize = () => {
      setGridSize(window.innerWidth < 768 ? 20 : 33);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dots = useMemo(() => {
    return Array.from({ length: gridSize * gridSize }, (_, i) => {
      const randomDuration = 1 + Math.random();
      const randomDelay = Math.random() * 2;

      return (
        <motion.div
          key={i}
          className="dot"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{
            duration: randomDuration,
            delay: randomDelay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      );
    });
  }, [gridSize]); // ✅ Now updates when `gridSize` changes

  return <div className="dot-grid gap-[1.5rem]">{dots}</div>;
};

export default DotGrid;
