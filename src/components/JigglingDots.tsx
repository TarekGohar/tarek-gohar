"use client";

import { useEffect, useRef } from "react";

export default function JigglingDotsBackground() {
  const canvasRef = useRef(null);
  const dots = [];
  const numDots = 1000;
  const jiggleAmount = 40;
  let mouseX = 0,
    mouseY = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots.length = 0;
      for (let i = 0; i < numDots; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = (y / canvas.height) * 1 + 0.3;
        dots.push({ x, y, size, baseX: x, baseY: y });
      }
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function handleMouseMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot, i) => {
        const dx = dot.baseX - mouseX;
        const dy = dot.baseY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 100;
        const force = Math.max(0, (maxDist - distance) / maxDist);

        dot.x =
          dot.baseX +
          Math.sin(performance.now() * 0.002 + i) * jiggleAmount +
          dx * force * 0.2;
        dot.y =
          dot.baseY +
          Math.cos(performance.now() * 0.002 + i) * jiggleAmount +
          dy * force * 0.2;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
  );
}
