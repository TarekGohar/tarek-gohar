import React from "react";

export default function AccessibilitySection() {
  return (
    <section className="h-fit">
      <div className="py-[10rem] md:my-[8rem] relative max-w-[120rem] mx-auto w-full flex flex-col items-center justify-center px-4 md:px-8">
        <h1 className="absolute top-[4rem] w-full md:text-xl font-semibold text-cyan-800/80 px-4 md:px-8">
          Solutions
        </h1>

        <div className="w-full flex flex-col items-center justify-center space-y-[1rem]">
          <h2 className=" text-cyan-800 text-center font-medium text-4xl md:text-5xl uppercase tracking-wider">
            Our Web App <span className="text-cyan-800/60">Solutions</span>
          </h2>
          <p className="md:max-w-[35rem] text-cyan-800/60 text-center font- md:text-xl">
            A handfull of the many solutions we have to fix your problems.
          </p>
          {/* Solutions Grid */}

          <div className="max-w-[100rem] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-x-[5rem] lg:gap-4 text-cyan-800/80">
            <div className="min-w-40 min-h-40 bg-neutral-50 p-[4rem]">
              <div
                className="w-[90%] max-w-[30rem] mx-auto max-h-[16rem] overflow-y-auto bg-neutral-50 rounded-2xl border-2 border-neutral-300 overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0))",
                  maskImage:
                    "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0))",
                }}
              >
                <div className="h-10 text-xs items-center grid grid-cols-4 font-semibold text-neutral-500 bg-neutral-200/60">
                  <span className="pl-2">Order ID</span>
                  <span className="pl-2">First Name</span>
                  <span className="pl-2">Last Name</span>
                  <span className="pl-2">Date</span>
                </div>
                <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-50">
                  <span className="pl-2">#B2045</span>
                  <span className="pl-2">Liam</span>
                  <span className="pl-2">Smith</span>
                  <span className="pl-2">Feb 28, 2024</span>
                </div>

                <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-50">
                  <span className="pl-2">#B2045</span>
                  <span className="pl-2">Liam</span>
                  <span className="pl-2">Smith</span>
                  <span className="pl-2">Feb 28, 2024</span>
                </div>

                <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-100/60">
                  <span className="pl-2">#C3089</span>
                  <span className="pl-2">Sophia</span>
                  <span className="pl-2">Garcia</span>
                  <span className="pl-2">Feb 27, 2024</span>
                </div>

                <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-50">
                  <span className="pl-2">#D4011</span>
                  <span className="pl-2">Ethan</span>
                  <span className="pl-2">Williams</span>
                  <span className="pl-2">Feb 26, 2024</span>
                </div>

                <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-100/60">
                  <span className="pl-2">#C3089</span>
                  <span className="pl-2">Sophia</span>
                  <span className="pl-2">Garcia</span>
                  <span className="pl-2">Feb 27, 2024</span>
                </div>

                <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-50">
                  <span className="pl-2">#D4011</span>
                  <span className="pl-2">Tarek</span>
                  <span className="pl-2">Gohar</span>
                  <span className="pl-2">Nov 15, 2001</span>
                </div>
              </div>
            </div>
            <div className="min-w-40 min-h-40 bg-red-500"></div>
            <div className="min-w-40 min-h-40 bg-red-500"></div>
            <div className="min-w-40 min-h-40 bg-red-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
