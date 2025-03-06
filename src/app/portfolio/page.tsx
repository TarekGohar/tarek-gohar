"use client";

import { useEffect, useState, useRef } from "react";

export default function Page() {
  const [textureIndex, setTextureIndex] = useState(0);

  // Array of noise texture paths
  const noiseTextures = [
    "/noise2.webp",
    "/noise3.webp",
    "/noise4.webp",
    "/noise5.webp",
  ];

  useEffect(() => {
    noiseTextures.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Use requestAnimationFrame instead of setInterval
  useEffect(() => {
    let prevTime = 0;
    let rotationUpdateTime = 0;
    let textureUpdateTime = 0;
    let rafId: number;

    interface AnimateParams {
      time: number;
    }

    const animate = (time: AnimateParams["time"]) => {
      if (prevTime === 0) {
        prevTime = time;
      }

      const deltaTime = time - prevTime;

      // Update texture every 2000ms
      if (time - textureUpdateTime > 50) {
        setTextureIndex((prev) => (prev + 1) % noiseTextures.length);
        textureUpdateTime = time;
      }

      prevTime = time;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <div className="bg-cyan-950 relative overflow-hidden h-screen w-screen">
        {/* Static background with blur - no animation */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/portfolio.webp)",
            backgroundSize: "150% 100%", // This will stretch the image to fill the container completely
            backgroundPosition: "center",
            transform: "scale(1.5)",
          }}
        />

        {/* Animated noise texture - only changes when visible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${noiseTextures[textureIndex]})`,
            backgroundRepeat: "repeat",
            backgroundSize: "225px 225px",
            opacity: 0.1,
            backgroundBlendMode: "overlay",
            zIndex: 5,
          }}
        />

        <section className="h-screen max-h-[100rem] min-h-[50rem] flex items-center justify-center px-4 relative z-10">
          <div className="flex flex-col items-center justify-center text-white relative space-y-4">
            <div className="max-w-[120rem] mx-auto w-fit text-center flex flex-col items-center mix-blend-plus-lighter z-50">
              <h1 className="max-w-[60rem] tracking-wider font-medium text-[3rem] md:text-[5.4rem] lg:text-[6rem] leading-[3rem] md:leading-[5rem] lg:leading-[5.5rem] uppercase mix-blend-plus-lighter">
                Turning ideas into reality.
              </h1>
            </div>
            <div className="max-w-[30rem] md:max-w-[35rem] mx-auto w-full md:text-xl lg:text-xl font-normal text-center tracking-wider px-4 md:px-8 mix-blend-plus-lighter">
              <h2>
                Explore our portfolio of digital solutions designed for real
                impact.
              </h2>
            </div>
          </div>

          {/* Simplified crossed lines */}
          {/* <div className="absolute top-[15%] right-[15%] w-fit h-fit opacity-50 overflow-visible mix-blend-plus-lighter">
            <span className="absolute w-[clamp(8rem,15vw,16rem)] min-w-[6rem] h-[0.2rem] bg-white -translate-x-[2rem]" />
            <span className="absolute w-[clamp(8rem,15vw,16rem)] min-w-[6rem] h-[0.2rem] bg-white rotate-90 translate-y-[2rem]" />
          </div>

          <div className="absolute bottom-[15%] left-[10%] w-fit h-fit opacity-50 overflow-visible mix-blend-plus-lighter">
            <span className="absolute w-[clamp(8rem,15vw,16rem)] min-w-[6rem] h-[0.2rem] bg-white translate-y-[2rem]" />
            <span className="absolute w-[clamp(8rem,15vw,16rem)] min-w-[6rem] h-[0.2rem] bg-white rotate-90 -translate-x-[2rem]" />
          </div> */}
        </section>
      </div>
      <section className="h-screen"></section>
      <section className="h-screen"></section>
    </>
  );
}
