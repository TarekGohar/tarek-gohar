"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { section } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { BoxesContainer } from "../BoxesContainer";

export default function WebSitesSection() {
  return (
    <section className="relative h-[40rem] flex items-center justify-center">
      <div className="h-full relative w-full overflow-hidden bg-[#020b0f] opacity-100 flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cyan-950 z-20 pointer-events-none"
          style={{
            maskImage:
              "radial-gradient(transparent 50%, rgba(255,255,255,0.8))",
            WebkitMaskImage:
              "radial-gradient(transparent 50%, rgba(255,255,255,0.8))",
          }}
        />

        <h1 className="absolute top-[4rem] max-w-[100rem] mx-auto w-full md:text-xl font-semibold text-neutral-400 opacity-90 px-4 md:px-8 z-20">
          Web Sites
        </h1>

        <BoxesContainer />

        <div className="w-full max-w-[100rem] px-4 md:px-8 flex flex-col items-center space-y-[1rem] md:space-y-[2rem] justify-between text-cente z-20">
          <p className="max-w-[40rem] w-full text-center text-5xl md:text-5xl font-semibold text-white">
            Modern, Responsive, and High-Performance Websites.
          </p>
          <Link
            className="text-center text-2xl font-semibold header-underline text-white opacity-80"
            href="/websites"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
