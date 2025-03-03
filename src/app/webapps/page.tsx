"use client";

import DotGrid from "@/components/GridDots";
import JigglingDotsBackground from "@/components/JigglingDots";
import MovingLinesBackground from "@/components/MovingLines";
import MovingLinesBackground2 from "@/components/MovingLinesV2";
import Navbar from "@/components/navbar";
import AccessibilitySection from "@/components/Webapps/AccessibilitySection";
import IntegrationSection from "@/components/Webapps/IntegrationSection";
import SecuritySection from "@/components/Websites/SecuritySection";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <Navbar light={false} />
      <motion.div
        className=" relative"
        initial={{
          background:
            "linear-gradient(0deg, #b0b0b0 0%, #d0d0d0 25%, #e8e8e8 50%, #f5f5f5 75%, #ffffff 100%)",
        }}
        animate={{
          background: [
            "linear-gradient(0deg, #b0b0b0 0%, #d0d0d0 25%, #e8e8e8 50%, #f5f5f5 75%, #ffffff 100%)",
            "linear-gradient(90deg, #b0b0b0 0%, #d0d0d0 25%, #e8e8e8 50%, #f5f5f5 75%, #ffffff 100%)",
            "linear-gradient(180deg, #b0b0b0 0%, #d0d0d0 25%, #e8e8e8 50%, #f5f5f5 75%, #ffffff 100%)",
            "linear-gradient(270deg, #b0b0b0 0%, #d0d0d0 25%, #e8e8e8 50%, #f5f5f5 75%, #ffffff 100%)",
            "linear-gradient(360deg, #b0b0b0 0%, #d0d0d0 25%, #e8e8e8 50%, #f5f5f5 75%, #ffffff 100%)",
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
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "url(/noise2.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            opacity: 0.1,
            backgroundBlendMode: "overlay",
            zIndex: 1, // Ensure it overlays everything
          }}
        /> */}
        {/* <div
          className="h-[200vh] absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(45deg, rgba(0, 0, 0, 0.05), rgba(255, 255, 255, 0.1))",
            backgroundRepeat: "repeat",
            backgroundSize: "8rem 8rem", // Try a different value for density
            opacity: 0.3,
            backgroundBlendMode: "overlay",
            zIndex: 20,
          }}
        /> */}

        <section className="h-screen max-h-[100rem] min-h-[50rem] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-white relative h-[70%] space-y-4 px-4 md:px-[5rem]">
            <div className="max-w-[120rem] mx-auto flex flex-col items-center mix-blend-plus-lighter z-50 ">
              <h1 className="tracking-wider font-medium text-[3rem] md:text-[5.4rem] lg:text-[6rem] leading-[3rem] md:leading-[5rem] lg:leading-[5.5rem] uppercase">
                Build Smart.
              </h1>

              <h1 className="tracking-wider font-medium text-[3rem] md:text-[5.4rem] lg:text-[6rem] leading-[3rem] md:leading-[5rem] lg:leading-[5.5rem] uppercase">
                Work Faster.
              </h1>
            </div>
            <div className="max-w-[40rem] mx-auto w-full md:text-xl lg:text-xl font-normal text-center tracking-wide px-4 md:px-8 mix-blend-plus-lighter">
              <h2>
                Web applications designed to optimize processes, increase
                efficiency, and drive results.
              </h2>
            </div>
          </div>
        </section>
      </motion.div>

      <section className="h-[50rem] flex items-center justify-center">
        <div className="max-w-[120rem] mx-auto w-full flex flex-col items-start justify-center space-y-4 px-4">
          <h1 className="w-full md:text-xl font-semibold text-neutral-400 opacity-70 capitalize">
            Why Custom Web Apps?
          </h1>
          <h2 className="max-w-[80rem] w-full text-cyan-900/100 text-left text-4xl md:text-5xl tracking-wider">
            Off-the-shelf software often comes with limitations. A custom web
            application is designed to fit your specific business needs,
            improving efficiency and streamlining operations.
          </h2>
        </div>
      </section>

      <hr className="max-w-[40%] mx-auto border-t-[.5px] border-gray-20"></hr>
      <AccessibilitySection />
      <IntegrationSection />
    </>
  );
}
