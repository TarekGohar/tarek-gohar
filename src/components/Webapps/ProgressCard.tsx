"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  i: number;
  title: string;
  color: string;
  progress: any;
  range: any;
  targetScale: number;
}

const Card = ({ i, title, color, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: "0px",
      }}
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          marginTop: "0%",
          height: "500px",
          width: "1000px",
          borderRadius: "25px",
          padding: "50px",
          transformOrigin: "top",
        }}
      >
        <h2>{title}</h2>
      </motion.div>
    </div>
  );
};

export default Card;
