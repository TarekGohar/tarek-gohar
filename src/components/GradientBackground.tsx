"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NUM_PARTICLES = 10;

const FloatingParticles: React.FC = () => {
  interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }

  const [particles, setParticles] = useState<Particle[]>([]);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024, // Default width for SSR
    height: typeof window !== "undefined" ? window.innerHeight : 768, // Default height for SSR
  });

  // Handle window resize
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    const MOBILE_BREAKPOINT = 768; // Define mobile breakpoint

    const handleResize = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= MOBILE_BREAKPOINT) {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      }, 500); // Debounce delay
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Generate particles when window size changes
  useEffect(() => {
    const newParticles = Array.from({ length: NUM_PARTICLES }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.2) * windowSize.width, // Random X position based on window width
      y: Math.random() * windowSize.height, // Random Y position based on window height
      size: Math.random() * 100 + windowSize.width * 0.2, // Random size
      duration: Math.random() * 6 + 10, // Animation duration
      delay: Math.random() * 3, // Animation delay
    }));
    setParticles(newParticles);
  }, [windowSize]); // Re-run when window size updates

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.y,
            left: particle.x,
            backgroundImage: "radial-gradient(#0b586b, #FFFFFF)",
            zIndex: -10,
          }}
          animate={{
            y: ["0%", "-30%", "30%", "-20%", "0%"], // Floating motion
            x: ["0%", "-30%", "30%", "-20%", "0%"], // Floating motion
            opacity: [0, 1, 1, 0], // Fade in and out
            scale: [1, 1.5, 1], // Pulsating effect
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "mirror",
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Blurred Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8rem)",
          WebkitBackdropFilter: "blur(8rem)",
          zIndex: 0,
        }}
      />

      {/* Grainy Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "url(/noise.png)",
          opacity: 0.0,
          backgroundBlendMode: "overlay",
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default FloatingParticles;
