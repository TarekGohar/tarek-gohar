import { motion } from "framer-motion";
import SlotsSection from "@/components/Hero/SlotsSection";
import AnimatedCirclesSection from "@/components/Hero/AnimateCircles";
import SpeedyDevelopmentSection from "@/components/Hero/SpeedyDevelopmentSection";
import ParticlesBackground from "@/components/Hero/GradientBackground";
import WebAppsSection from "../components/Hero/WebAppsSection";
import WebSitesSection from "@/components/Hero/WebSitesSection";
import GetAQuote from "@/components/Hero/GetAQuoteSection";
import Shades from "@/components/Hero/Shades";

export default function Page() {
  return (
    <>
      {/* First Section (Locks scroll initially) */}
      <section
        className={`relative h-screen min-h-[45rem] flex items-center justify-center transition-all ease-in duration-700 overflow-hidden z-10 text-cyan-800`}>
        <div className="z-20 opacity-70 max-w-[80rem] mx-auto w-fit text-center grid grid-cols-2 md:gap-y-8 md:grid-cols-1">
          <h1 className="w-fit grid grid-cols-1 md:grid-cols-5 text-[7rem] leading-[7rem] md:text-[13rem] md:leading-[11rem] font-extrabold mix-blend-difference">
            We Build Websites.
          </h1>
          <h1 className="w-fit grid grid-cols-1 md:grid-cols-5 text-[7rem] leading-[7rem] md:text-[13rem] md:leading-[11rem] font-extrabold">
            You Build Your Business.
          </h1>
        </div>

        {/* Particles Background */}
        <ParticlesBackground />

        {/* Gradient Fade to White at the Bottom */}
        <div
          className={`absolute inset-0 pointer-events-none z-40`}
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.15) 70%, rgba(255, 255, 255, 0.35) 80%, rgba(255, 255, 255, 0.65) 90%, rgba(255, 255, 255, 1) 100%)",
          }}
        />

        <Shades />
      </section>

      <section className="h-[25rem] md:h-[40rem] flex items-center justify-center">
        <div className=" max-w-[120rem] mx-auto flex flex-col items-center justify-center space-y-4 px-4">
          <h1 className="md:text-xl font-semibold text-cyan-800/40 opacity-70 capitalize">
            What do we do?
          </h1>
          <h2 className="w-full md:max-w-[70rem] text-cyan-800 text-center font-medium text-4xl md:text-5xl uppercase tracking-wider">
            We help your business{" "}
            <span className="text-cyan-800/80 pr-[.125rem]">grow</span>,{" "}
            <span className="text-cyan-800/80 pr-[.125rem]">innovate</span>, and{" "}
            <span className="text-cyan-800/80 pr-[.125rem]">succeed</span>.
          </h2>
          <p className="md:max-w-[35rem] text-cyan-800/60 text-center font- md:text-xl">
            We design and develop websites and web applications that are
            user-friendly, reliable, and built to support your business goals.
          </p>
        </div>
      </section>

      <SlotsSection />
      <AnimatedCirclesSection />
      <SpeedyDevelopmentSection />
      <WebAppsSection />
      <WebSitesSection />
      <GetAQuote />
    </>
  );
}
