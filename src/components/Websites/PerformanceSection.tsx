import React from "react";
import ScoreCircle from "./Score";

export default function PerformanceSection() {
  return (
    <section className="h-fit bg-white">
      <div className="py-[10rem] md:py-[20rem] relative max-w-[100rem] mx-auto w-full  flex flex-col items-center justify-center px-4 md:px-8">
        <h1 className="absolute top-[4rem] w-full md:text-xl font-semibold text-cyan-700 opacity-70 px-4 md:px-8">
          Performance
        </h1>
        <div className="w-full flex flex-col items-start justify-center space-y-[5rem] md:space-y-[10rem]">
          <div className="w-full flex flex-col lg:flex-row items-start justify-between space-y-[2rem] lg:space-y-0 lg:space-x-[5rem]">
            <h2 className="w-full mx-auto lg:mx-0 lg:max-w-[40rem] text-neutral-800/70 text-left font-bold text-5xl md:text-7xl uppercase">
              Built for speed. Designed for search.
            </h2>
            <p className="w-full mx-auto lg:max-w-[40rem] text-neutral-400/80 text-left font-semibold text-xl md:text-2xl">
              We optimize every layer of your website — from streamlined code
              and minimized assets to advanced caching and global CDNs. By
              reducing unnecessary load and prioritizing efficiency, we ensure
              fast, smooth interactions.
            </p>
          </div>

          {/* Scores */}
          <div className="mx-auto w-fit grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-x-[5rem] lg:gap-16 text-cyan-800/80">
            <div className="md:w-fit flex flex-col-reverse items-center justify-center ">
              <h1 className="text-xl md:text-2xl font-semibold">SEO</h1>
              <ScoreCircle />
            </div>
            <div className="md:w-fit flex flex-col-reverse items-center justify-center">
              <h1 className="text-xl md:text-2xl font-semibold">Performance</h1>
              <ScoreCircle delay={0.05} />
            </div>
            <div className="md:w-fit flex flex-col-reverse items-center justify-center">
              <h1 className="text-xl md:text-2xl font-semibold">
                Best Practices
              </h1>
              <ScoreCircle delay={0.1} />
            </div>
            <div className="md:w-fit flex flex-col-reverse items-center justify-center">
              <h1 className="text-xl md:text-2xl font-semibold">
                Accessibility
              </h1>
              <ScoreCircle delay={0.15} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
