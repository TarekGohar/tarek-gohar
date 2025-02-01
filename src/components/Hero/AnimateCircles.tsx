"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/langImages/aws.png", color: "rgb(251, 193, 104)" },
  { src: "/langImages/c.png", color: "rgb(124,172,219)" },
  { src: "/langImages/c++.png", color: "rgb(31, 117, 182)" },
  { src: "/langImages/next.png", color: "rgb(255, 255, 255)" },
  { src: "/langImages/pandas.svg", color: "rgb(28, 20, 105)" },
  { src: "/langImages/postgresql.png", color: "rgb(143,171,196)" },
  { src: "/langImages/python.png", color: "rgb(70, 70, 70)" },
  { src: "/langImages/react.png", color: "rgb(48, 164, 206)" },
  { src: "/langImages/ts.png", color: "rgb(137,175,223)" },
  { src: "/langImages/prisma.svg", color: "rgb(27, 41, 51)" },
  { src: "/langImages/azure.png", color: "rgb(0, 120, 212)" },
];

export default function AnimatedCircles() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [circles, setCircles] = useState<
    { x: number; y: number; radius: number }[]
  >([]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const circlePositions = useMemo(() => {
    const isMobile = windowWidth < 768;
    const baseRadius = isMobile ? 100 : 350;

    // Grid layout for small screens
    const gridLayout = [
      { count: 2, yOffset: -95 }, // Row 1
      { count: 3, yOffset: -30 }, // Row 2
      { count: 3, yOffset: 45 }, // Row 3
      { count: 2, yOffset: 110 }, // Row 4
    ];

    let positions = [];
    let index = 0;

    if (isMobile) {
      gridLayout.forEach((row) => {
        let startX = -((row.count - 1) * 40); // Center align row
        for (let i = 0; i < row.count; i++) {
          positions.push({
            x: startX + i * 80,
            y: row.yOffset,
            radius: 70,
          });
          index++;
        }
      });
    } else {
      // Circular layout for large screens
      const angleStep = (Math.PI * 2) / images.length;
      for (let i = 0; i < images.length; i++) {
        const angle = i * angleStep;
        positions.push({
          x: Math.cos(angle) * baseRadius,
          y: Math.sin(angle) * baseRadius,
          radius: Math.random() * 70 + 70,
        });
      }
    }

    return positions;
  }, [windowWidth]);

  // Jiggling effect with small random movement
  useEffect(() => {
    const interval = setInterval(() => {
      setCircles(
        circlePositions.map((pos) => ({
          ...pos,
          x: pos.x + (Math.random() - 0.5) * 3,
          y: pos.y + (Math.random() - 0.5) * 3,
        }))
      );
    }, 300); // Adjust speed of jiggling

    return () => clearInterval(interval);
  }, [circlePositions]);

  return (
    <section className="h-[60rem] w-full bg-neutral-50 flex justify-center items-center">
      <div className="w-[30rem] h-full text-center flex justify-center items-center relative">
        <h1 className="text-5xl font-bold absolute top-[25%] md:top-[45%]">
          Using the latest tech for the best results.
        </h1>

        {circles.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ scale: 1 }}
            animate={{ x: pos.x, y: pos.y }}
            whileHover={{ scale: 1.4, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            style={{
              width: pos.radius,
              height: pos.radius,
              overflow: "hidden",
              background: images[i % images.length].color,
              backdropFilter: "blur(10px)",
            }}
            className="absolute top-[50%] md:top-[45%] rounded-full flex justify-center items-center"
          >
            <div className="relative w-3/4 h-3/4">
              <Image
                alt={`${i} lang logo`}
                src={images[i % images.length].src}
                fill
                style={{ objectFit: "contain" }}
                className="p-2"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
