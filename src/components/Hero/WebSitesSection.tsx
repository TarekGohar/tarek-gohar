"use client";

import Link from "next/link";
import { BoxesContainer } from "../BoxesContainer";

export default function WebSitesSection() {
  return (
    <section className="relative h-[45rem] flex items-center justify-center">
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

        <h1 className="absolute top-[4rem] max-w-[120rem] mx-auto w-full md:text-xl font-semibold text-neutral-400 opacity-90 px-4 md:px-8 z-20">
          Web Sites
        </h1>

        <BoxesContainer />

        <div className="w-full max-w-[120rem] px-4 md:px-8 flex flex-col items-center space-y-[1rem] md:space-y-[2rem] justify-between text-cente z-20">
          <h2 className="w-full md:max-w-[80rem] text-white text-center font-semibold text-4xl md:text-5xl uppercase tracking-wider">
            Modern, Responsive, and High-Performance Websites.
          </h2>
          <Link
            className="md:max-w-[35rem] text-white/80 text-center font-medium md:text-xl header-underline-light"
            href="/websites">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
