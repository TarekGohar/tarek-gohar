"use client";

import { useEffect, useRef } from "react";

export default function MovingLinesBackground() {
  const canvasRef = useRef(null);
  const lines = [];
  const numLines = 200;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      lines.length = 0;
      for (let i = 0; i < numLines; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          movingHorizontally: Math.random() > 0.5,
          speed: (Math.random() - 0.5) * 4,
          switchTimer: Math.random() * 100 + 50,
          trail: [],
        });
      }
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function animate() {
      ctx.fillStyle = "rgba(230, 230, 230, )";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 0.5;

      lines.forEach((line) => {
        line.switchTimer--;
        if (line.switchTimer <= 0) {
          line.movingHorizontally = !line.movingHorizontally;
          line.switchTimer = Math.random() * 100 + 50;
        }

        if (line.movingHorizontally) {
          line.x += line.speed;
        } else {
          line.y += line.speed;
        }

        if (line.x < 0 || line.x > canvas.width) {
          line.speed *= -1;
        }
        if (line.y < 0 || line.y > canvas.height) {
          line.speed *= -1;
        }

        line.trail.push({ x: line.x, y: line.y });
        if (line.trail.length > 20) line.trail.shift();

        ctx.beginPath();
        for (let i = 0; i < line.trail.length - 1; i++) {
          const opacity = i / line.trail.length;
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.moveTo(line.trail[i].x, line.trail[i].y);
          ctx.lineTo(line.trail[i + 1].x, line.trail[i + 1].y);
          ctx.stroke();
        }
      });
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className=" top-0 left-0 w-full h-full" />;
}
