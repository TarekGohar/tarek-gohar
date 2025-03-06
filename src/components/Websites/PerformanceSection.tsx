import React from "react";
import ScoreCircle from "./Score";

export default function PerformanceSection() {
  return (
    <section className="h-fit bg-white">
      <div className="py-[10rem] md:pt-[15rem] relative max-w-[120rem] mx-auto w-full  flex flex-col items-center justify-center px-4 md:px-8">
        <h1 className="absolute top-[4rem] w-full md:text-xl font-semibold text-cyan-700 opacity-70 px-4 md:px-8">
          Performance
        </h1>
        <div className="max-w-[120rem] w-full flex flex-col items-start justify-center space-y-[5rem] md:space-y-[10rem]">
          <div className="w-full flex flex-col lg:flex-row items-start justify-between space-y-[2rem] lg:space-y-0 lg:space-x-[5rem]">
            <h2 className="w-full mx-auto lg:mx-0 lg:max-w-[30rem] text-cyan-800 text-left font-semibold text-4xl md:text-5xl uppercase tracking-wider">
              Built for speed. Designed for search.
            </h2>
            <p className="w-full mx-auto lg:max-w-[40rem] text-cyan-800/70 text-left font- md:text-xl">
              We optimize websites by improving speed and implementing SEO best
              practices. Through file minimization, caching, mobile
              responsiveness and on-page SEO, we ensure faster loading times,
              better search rankings, and a seamless user experience.
            </p>
          </div>

          {/* Scores */}
          <div className="mx-auto w-fit grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-x-[6rem] lg:gap-x-[5rem] text-cyan-800/80">
            <div className="md:w-fit flex flex-col gap-y-4 items-center justify-center ">
              <ScoreCircle />
              <h1 className="text-lg md:text-xl font-semibold">SEO</h1>
            </div>
            <div className="md:w-fit flex flex-col gap-y-4 items-center justify-center">
              <ScoreCircle delay={0.05} />
              <h1 className="text-lg md:text-xl font-semibold">Performance</h1>
            </div>
            <div className="md:w-fit flex flex-col gap-y-4 items-center justify-center">
              <ScoreCircle delay={0.1} />
              <h1 className="text-lg md:text-xl font-semibold">
                Best Practices
              </h1>
            </div>
            <div className="md:w-fit flex flex-col gap-y-4 items-center justify-center">
              <ScoreCircle delay={0.15} />
              <h1 className="text-lg md:text-xl font-semibold">
                Accessibility
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
