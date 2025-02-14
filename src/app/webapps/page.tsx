"use client";

import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

export default function page() {
  return (
    <>
      <Navbar light={false} />

      <motion.div
        className="bg-cyan-50 relative"
        initial={{
          background:
            "linear-gradient(45deg, #6a6a6a 0%, #909090 25%, #b0b0b0 50%, #d0d0d0 75%, #ffffff 100%)",
        }}
        animate={{
          background: [
            "linear-gradient(45deg, #6a6a6a 0%, #909090 25%, #b0b0b0 50%, #d0d0d0 75%, #ffffff 100%)",
            "linear-gradient(90deg, #6a6a6a 0%, #909090 25%, #b0b0b0 50%, #d0d0d0 75%, #ffffff 100%)",
            "linear-gradient(180deg, #6a6a6a 0%, #909090 25%, #b0b0b0 50%, #d0d0d0 75%, #ffffff 100%)",
            "linear-gradient(270deg, #6a6a6a 0%, #909090 25%, #b0b0b0 50%, #d0d0d0 75%, #ffffff 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          zIndex: 0,
          backgroundSize: "400% 400%",
          backgroundPosition: "0% 50%",
        }}
      >
        {/* Noise Overlay covering everything */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "url(/noise2.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "300px 300px",
            opacity: 0.1,
            backgroundBlendMode: "overlay",
            zIndex: 1, // Ensure it overlays everything
          }}
        />

        <section className="h-screen min-h-[50rem]">
          <div className="flex flex-col items-start justify-end text-white relative h-[85%] space-y-4 ">
            <div className="max-w-[120rem] mx-auto w-full flex flex-col items-start opacity-80 text-neutral-300 mix-blend-plus-lighter z-50 px-4 md:px-8">
              <h1 className="tracking-tighter font-bold text-6xl md:text-[5.4rem] lg:text-[8rem] leading-[3rem] md:leading-[4.2rem] lg:leading-[6rem] uppercase">
                Apps Should
              </h1>
              <h1 className="tracking-tighter font-bold text-6xl md:text-[5.4rem] lg:text-[8rem] leading-[3rem] md:leading-[4.2rem] lg:leading-[6rem] uppercase">
                Work the Way
              </h1>
              <h1 className="tracking-tighter font-bold text-6xl md:text-[5.4rem] lg:text-[8rem] leading-[3rem] md:leading-[4.2rem] lg:leading-[6rem] uppercase">
                You Do
              </h1>
            </div>
            <div className="max-w-[120rem] mx-auto w-full text-2xl md:text-3xl lg:text-5xl font-medium tracking-tighter px-4 md:px-8 mix-blend-plus-lighter">
              <h2 className="max-w-[60%] md:max-w-[45%]">
                We'll build yours to match your workflow and needs.
              </h2>
            </div>
          </div>
        </section>
      </motion.div>

      <section className="h-[40rem] flex items-center justify-center">
        <div className="max-w-[120rem] mx-auto flex flex-col items-center justify-center space-y-4 px-4">
          <h1 className="md:text-xl font-semibold text-neutral-400 opacity-70 capitalize">
            What do we build?
          </h1>
          <h2 className="max-w-[50rem] text-cyan-800/60 text-center font-bold text-4xl md:text-6xl tracking-tighter">
            We make web apps that are scalable, secure, and user-friendly, with
            efficiency in mind.
          </h2>
        </div>
      </section>
    </>
  );
}
