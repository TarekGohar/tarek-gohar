"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/langImages/aws.png", color: "rgb(251, 193, 104)" },
  { src: "/langImages/c.png", color: "rgb(124,172,219)" },
  { src: "/langImages/c++.png", color: "rgb(31, 117, 182)" },
  { src: "/langImages/next.png", color: "rgb(245, 245, 245)" },
  { src: "/langImages/pandas.svg", color: "rgb(28, 20, 105)" },
  { src: "/langImages/postgresql.png", color: "rgb(143,171,196)" },
  { src: "/langImages/python.png", color: "rgb(70, 70, 70)" },
  { src: "/langImages/react.png", color: "rgb(48, 164, 206)" },
  { src: "/langImages/ts.png", color: "rgb(137,175,223)" },
  { src: "/langImages/prisma.svg", color: "rgb(27, 41, 51)" },
  { src: "/langImages/azure.png", color: "rgb(0, 120, 212)" },
];

export default function AnimatedCircles() {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [initialCircles, setInitialCircles] = useState<
    { x: number; y: number; radius: number }[]
  >([]);
  const [jiggledCircles, setJiggledCircles] = useState<
    { x: number; y: number; radius: number }[]
  >([]);

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile((prev) => (prev !== newIsMobile ? newIsMobile : prev)); // Update only if changed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const baseRadius = isMobile ? 100 : 350;

    const gridLayout = [
      { count: 2, xOffset: -110 },
      { count: 3, xOffset: -40 },
      { count: 3, xOffset: 40 },
      { count: 2, xOffset: 110 },
    ];

    let positions = [];

    if (isMobile) {
      let index = 0;
      gridLayout.forEach((row) => {
        let startY = -((row.count - 1) * 40);
        for (let i = 0; i < row.count; i++) {
          positions.push({
            x: row.xOffset,
            y: startY + i * 80,
            radius: 70,
          });
          index++;
        }
      });
    } else {
      const angleStep = (Math.PI * 2) / images.length;
      for (let i = 0; i < images.length; i++) {
        const angle = i * angleStep;
        positions.push({
          x: Math.cos(angle) * baseRadius,
          y: (Math.sin(angle) * baseRadius) / 1.25,
          radius: Math.random() * 70 + 70,
        });
      }
    }

    setInitialCircles(positions); // Store initial positions
    setJiggledCircles(positions); // Initialize jiggled positions with the same values
  }, [isMobile]);

  useEffect(() => {
    if (initialCircles.length === 0) return;
    const interval = setInterval(() => {
      if (isMobile) {
        setJiggledCircles((prevCircles) =>
          prevCircles.map((pos, index) => {
            const initialPos = initialCircles[index]; // Get corresponding initial position
            return {
              ...pos,
              x: initialPos.x + (Math.random() - 0.5) * 2, // Small movement around initial x
              y: initialPos.y + (Math.random() - 0.5) * 2, // Small movement around initial y
            };
          })
        );
      } else {
        setJiggledCircles((prevCircles) =>
          prevCircles.map((pos, index) => {
            const initialPos = initialCircles[index]; // Get corresponding initial position
            return {
              ...pos,
              x: initialPos.x + (Math.random() - 0.5) * 3, // Small movement around initial x
              y: initialPos.y + (Math.random() - 0.5) * 3, // Small movement around initial y
            };
          })
        );
      }
    }, 100);

    return () => clearInterval(interval);
  }, [initialCircles]); // Depend only on `initialCircles`

  return (
    <section className="h-[40rem] md:h-[70rem] w-full flex justify-center items-center">
      <div className="h-full w-[30rem] text-center flex justify-center items-center relative">
        <h1 className="text-5xl font-bold absolute top-[18%] md:top-[45%] text-cyan-900">
          Using the latest tech for the best results.
        </h1>

        {jiggledCircles.map((pos, i) => (
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
            className="absolute rounded-full flex justify-center items-center top-[58%] md:top-[45%]"
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
