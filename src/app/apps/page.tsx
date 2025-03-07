"use client";

import AccessibilitySection from "@/components/Webapps/AccessibilitySection";
import AISection from "@/components/Webapps/AISection";
import ProcessSection from "@/components/Webapps/ProcessSection";
import InterestedSection from "@/components/Websites/InterestedSection";
import SecuritySection from "@/components/Webapps/SecuritySection";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <>
      <motion.div
        className="relative noisecontainer"
        initial={{
          background:
            "linear-gradient(0deg, #303030 0%, #505050 25%, #707070 50%, #909090 75%, #b0b0b0 100%)",
        }}
        animate={{
          background: [
            "linear-gradient(0deg, #303030 0%, #505050 25%, #707070 50%, #909090 75%, #b0b0b0 100%)",
            "linear-gradient(90deg, #303030 0%, #505050 25%, #707070 50%, #909090 75%, #b0b0b0 100%)",
            "linear-gradient(180deg, #303030 0%, #505050 25%, #707070 50%, #909090 75%, #b0b0b0 100%)",
            "linear-gradient(270deg, #303030 0%, #505050 25%, #707070 50%, #909090 75%, #b0b0b0 100%)",
            "linear-gradient(360deg, #303030 0%, #505050 25%, #707070 50%, #909090 75%, #b0b0b0 100%)",
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
        }}>
        <section className="h-screen max-h-[100rem] min-h-[50rem] flex items-center justify-center px-4">
          <div className="flex flex-col items-center justify-center text-white relative space-y-4">
            <div className="max-w-[120rem] mx-auto w-fit text-center flex flex-col items-center mix-blend-plus-lighter z-50 ">
              <h1 className="tracking-wider font-medium text-[3rem] md:text-[5.4rem] lg:text-[6rem] leading-[3rem] md:leading-[5rem] lg:leading-[5.5rem] uppercase mix-blend-plus-lighter">
                Build Smart.
              </h1>

              <h1 className="tracking-wider font-medium text-[3rem] md:text-[5.4rem] lg:text-[6rem] leading-[3rem] md:leading-[5rem] lg:leading-[5.5rem] uppercase mix-blend-plus-lighter">
                Work Faster.
              </h1>
            </div>
            <div className="max-w-[30rem] md:max-w-[40rem] mx-auto w-full md:text-xl lg:text-xl font-normal text-center tracking-wider px-4 md:px-8 mix-blend-plus-lighter">
              <h2>
                Web applications designed to optimize processes, increase
                efficiency, and drive results.
              </h2>
            </div>
          </div>
          {/* Crossed Lines in the Top Right */}
          <div className="absolute top-[15%] right-[15%] w-fit h-fit opacity-50 overflow-visible mix-blend-plus-lighter">
            {/* Horizontal Line */}
            <span className="absolute w-[clamp(8rem, 15vw, 16rem)] min-w-[6rem] h-[0.2rem] bg-white -translate-x-[2rem]" />

            {/* Vertical Line */}
            <span className="absolute w-[clamp(8rem, 15vw, 16rem)] min-w-[6rem] h-[0.2rem] bg-white rotate-90 translate-y-[2rem]" />
          </div>

          {/* Crossed Lines in the Bottom Right */}
          <div className="absolute bottom-[15%] left-[10%] w-fit h-fit opacity-50 overflow-visible mix-blend-plus-lighter">
            {/* Horizontal Line */}
            <span className="absolute w-[clamp(8rem, 15vw, 16rem)] min-w-[6rem] h-[0.2rem] bg-white translate-y-[2rem]" />

            {/* Vertical Line */}
            <span className="absolute w-[clamp(8rem, 15vw, 16rem)] min-w-[6rem] h-[0.2rem] bg-white rotate-90 -translate-x-[2rem] " />
          </div>
        </section>
      </motion.div>

      <section className="h-[40rem] md:h-[50rem] flex items-center justify-center">
        <div className="max-w-[120rem] mx-auto w-full flex flex-col items-start justify-center space-y-4 px-4 md:px-8">
          <h1 className="w-full md:text-xl font-medium text-neutral-400 opacity-70 capitalize">
            Why Custom Apps?
          </h1>
          <h2 className="max-w-[70rem] w-full text-neutral-900/100 text-left font-semibold text-4xl md:text-5xl tracking-wider uppercase">
            Prebuilt software has limitations.
          </h2>
          <p className="md:max-w-[50rem] text-neutral-800/60 text-left font- md:text-xl">
            A custom web application is specifically designed to align with your
            business requirements, ensuring a seamless fit with your workflows.
            It enhances efficiency by automating tasks, reducing manual work,
            and improving overall productivity.
          </p>
        </div>
      </section>
      {/* <hr className="max-w-[40%] mx-auto border-t-[.5px] border-gray-20"></hr> */}
      <ProcessSection />
      <AccessibilitySection />
      <AISection />
      <SecuritySection />
      <InterestedSection />
    </>
  );
}
