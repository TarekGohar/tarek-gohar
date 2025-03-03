"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 0.6,
        easing: (t) => 1 - Math.pow(1 - t, 5),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        // syncTouch: true,
        // smoothTouch: false,
      });

      const update = (time: number) => {
        lenisRef.current?.raf(time);
        setTimeout(() => requestAnimationFrame(update), 1000 / 240); // Maintain 60 FPS
      };

      requestAnimationFrame(update);
    }

    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
