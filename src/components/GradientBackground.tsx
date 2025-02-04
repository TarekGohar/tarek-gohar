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

    const handleResize = () => {
      clearTimeout(resizeTimeout); // Clear previous timeout
      resizeTimeout = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 500); // Delay updates by 500ms
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
      y: (Math.random() + 0.2) * windowSize.height, // Random Y position based on window height
      size: Math.random() * 100 + windowSize.width * 0.2, // Random size
      duration: Math.random() * 6 + 10, // Animation duration
      delay: Math.random() * 3, // Animation delay
    }));
    setParticles(newParticles);
  }, [windowSize]); // Re-run when window size updates

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full -z-10"
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.y,
            left: particle.x,
            backgroundImage: "radial-gradient(#0b586b, #FFFFFF)",
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
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(70px)",
          WebkitBackdropFilter: "blur(70px)",
        }}
      />

      {/* Grainy Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: "url(/noise.png)",
          opacity: 0.2,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
};

export default FloatingParticles;
