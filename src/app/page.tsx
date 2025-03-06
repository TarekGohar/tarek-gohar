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
        className={`relative h-screen min-h-[45rem] flex items-center justify-center transition-all ease-in duration-700 overflow-hidden z-10 `}>
        <div className="z-20  max-w-[90rem] mx-auto w-fit space-y-[2rem] text-left px-4 md:px-8">
          <h1 className="w-fit text-cyan-800/100 text-[4rem] leading-[4rem] md:text-[8rem] md:leading-[7rem] lg:text-[9rem] lg:leading-[8rem] uppercase font-bold tracking-wider">
            We shape strategies.
          </h1>
          <h1 className="w-fit text-cyan-800/80 text-[4rem] leading-[4rem] md:text-[8rem] md:leading-[7rem] lg:text-[9rem] lg:leading-[8rem] uppercase font-bold tracking-wider">
            You shape the future.
          </h1>
          <p className="md:max-w-[40rem] text-cyan-800/60 text-left text-xl md:text-2xl font-medium">
            Consulting and creating smart, scalable digital solutions to drive
            your business forward
          </p>
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

      <section className="h-[35rem] md:h-[40rem] flex items-center justify-center">
        <div className=" max-w-[120rem] mx-auto flex flex-col items-center justify-center space-y-4 px-4">
          <h1 className="md:text-xl font-semibold text-cyan-800/40 opacity-70 capitalize">
            What do we do?
          </h1>
          <h2 className="w-full md:max-w-[70rem] text-cyan-800 text-center font-semibold text-4xl md:text-5xl uppercase tracking-wider">
            We help your business <span className="text-cyan-800/80">grow</span>
            , <span className="text-cyan-800/80">innovate</span>, and{" "}
            <span className="text-cyan-800/80">succeed</span>.
          </h2>
          <p className="md:max-w-[35rem] text-cyan-800/60 text-center font- md:text-xl">
            We consult, design, and develop software solutions that are
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
