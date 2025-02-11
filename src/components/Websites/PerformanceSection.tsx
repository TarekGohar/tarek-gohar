import React from "react";
import ScoreCircle from "./Score";

export default function PerformanceSection() {
  return (
    <section className="h-fit">
      <div className="py-[10rem] relative max-w-[100rem] mx-auto w-full  flex flex-col items-center justify-center">
        <h1 className="absolute top-[4rem] w-full md:text-xl font-semibold text-cyan-700 opacity-70 px-4 md:px-8">
          Performance
        </h1>
        <div className="flex flex-col items-center justify-center space-y-[4rem]">
          <h2 className="max-w-[40rem] text-neutral-950 text-center font-semibold text-5xl md:text-5xl uppercase">
            Built for speed. Designed for search.
          </h2>

          {/* Scores */}
          <div className=" w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 gap-x-[5rem] lg:gap-16">
            <div className="w-full flex flex-col-reverse items-center justify-center">
              <h1 className="text-2xl font-semibold">SEO</h1>
              <ScoreCircle />
            </div>
            <div className="w-fit flex flex-col-reverse items-center justify-center">
              <h1 className="text-2xl font-semibold">Performance</h1>
              <ScoreCircle delay={0.05} />
            </div>
            <div className="w-fit flex flex-col-reverse items-center justify-center">
              <h1 className="text-2xl font-semibold">Best Practices</h1>
              <ScoreCircle delay={0.1} />
            </div>
            <div className="w-fit flex flex-col-reverse items-center justify-center">
              <h1 className="text-2xl font-semibold">Accessibility</h1>
              <ScoreCircle delay={0.15} />
            </div>
          </div>
          <p className="max-w-[50rem] text-neutral-950 text-center font-semibold text-5xl md:text-xl ">
            Our websites help you rank higher, attract more visitors, and
            convert them into customers with fast performance, seamless
            usability, and increased optimization.
          </p>
        </div>
      </div>
    </section>
  );
}
