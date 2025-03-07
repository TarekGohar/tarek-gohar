import AnimatedSection from "@/components/Websites/AnimatedSection";
import InterestedSection from "@/components/Websites/InterestedSection";
import PerformanceSection from "@/components/Websites/PerformanceSection";
import SupportSection from "@/components/Websites/SupportSection";
import WordStyleSection from "@/components/Websites/WordStyleSection";
import * as motion from "motion/react-client";

import IntegrationSection from "@/components/Websites/IntegrationSection";

export default function Page() {
  return (
    <>
      <motion.div
        className="h-screen relative overflow-hidden"
        initial={{
          background:
            "linear-gradient(0deg, #062a33 0%, #0f3c4f 10%, #067e99 40%, #0496b5 55%, #99c1d3 100%)",
        }}
        animate={{
          background: [
            "linear-gradient(0deg, #062a33 0%, #0f3c4f 10%, #067e99 40%, #0496b5 55%, #99c1d3 100%)",
            "linear-gradient(90deg, #062a33 0%, #0f3c4f 10%, #067e99 40%, #0496b5 55%, #99c1d3 100%)",
            "linear-gradient(180deg, #062a33 0%, #0f3c4f 10%, #067e99 40%, #0496b5 55%, #99c1d3 100%)",
            "linear-gradient(270deg, #062a33 0%, #0f3c4f 10%, #067e99 40%, #0496b5 55%, #99c1d3 100%)",
            "linear-gradient(360deg, #062a33 0%, #0f3c4f 10%, #067e99 40%, #0496b5 55%, #99c1d3 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          // repeatType: "reverse",
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
        {/* Noise Effect */}
        <div className="noisecontainer absolute inset-0 overflow-hidden" />

        {/* Crossed Lines in the Top Right */}
        <div className="absolute top-[15%] right-[15%] w-fit h-fit opacity-50 overflow-visible mix-blend-plus-lighter">
          {/* Horizontal Line */}
          <span className="absolute w-[clamp(8rem, 15vw, 16rem)] min-w-[6rem] h-[0.2rem] bg-white -translate-x-[2rem]" />
          {/* Vertical Line */}
          <span className="absolute w-[clamp(8rem, 15vw, 16rem)] min-w-[6rem] h-[0.2rem] bg-white rotate-90 translate-y-[2rem]" />
        </div>

        <section className="h-screen max-h-[100rem] min-h-[50rem] overflow-hidden">
          <div className="flex flex-col items-start justify-end text-white relative h-[90%] lg:space-y-[.75rem] ">
            <div className="max-w-[120rem] mx-auto w-full flex flex-col items-start opacity-80 text-neutral-300 mix-blend-plus-lighter z-50 px-4 md:px-8">
              <h1 className="-ml-[.1rem] md:-ml-[.5rem] tracking-wider font-medium text-[3rem] md:text-[5.4rem] lg:text-[6rem] leading-[3rem] md:leading-[5rem] lg:leading-[5.5rem] uppercase">
                First
              </h1>

              <h1 className="-ml-[.1rem] md:-ml-[.5rem] tracking-wider font-medium text-[3rem] md:text-[5.4rem] lg:text-[6rem] leading-[3rem] md:leading-[5rem] lg:leading-[5.5rem] uppercase">
                Impressions
              </h1>

              <h1 className="-ml-[.1rem] md:-ml-[.5rem] tracking-wider font-medium text-[3rem] md:text-[5.4rem] lg:text-[6rem] leading-[3rem] md:leading-[5rem] lg:leading-[5.5rem] uppercase">
                Matter
              </h1>
            </div>
            <div className="max-w-[120rem] mx-auto w-full md:text-xl lg:text-xl font-normal tracking-wide px-4 md:px-8 mix-blend-plus-lighter">
              <h2>We'll make yours count.</h2>
            </div>
          </div>
        </section>
      </motion.div>

      {/* About Our Services */}
      <section className="h-[40rem] md:h-[30rem] my-[5rem] md:my-[10rem] flex items-center justify-center bg-white">
        <div className="relative max-w-[120rem] mx-auto w-full h-[100%] md:h-[70%] flex flex-col md:flex-row items-center justify-center px-4 md:px-8 space-y-[4rem] md:space-x-[2rem]">
          <div className="md:w-[60%] flex flex-col lg:flex-col items-start justify-start space-y-[1rem]">
            <h1 className="w-full md:text-xl font-semibold text-cyan-800/40 capitalize">
              Websites that impress
            </h1>
            <h2 className="w-full md:max-w-[70rem] text-cyan-800 text-left font-semibold text-4xl md:text-5xl uppercase tracking-wider">
              We deliver sleek, high-speed websites designed to fuel your
              business growth
            </h2>
            <p className="w-fulll md:max-w-[40rem] text-cyan-800/60 text-left font- md:text-xl">
              Whether you're a small business, entrepreneur, or growing brand,
              our websites captivate audiences and drive engagement,
              conversions, and success.
            </p>
          </div>
          <AnimatedSection />
        </div>
      </section>

      {/* Time */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-y-[8rem] md:space-y-0 py-[5rem] md:py-[10rem] bg-neutral-400/10">
        {/* Time */}
        <div className="px-4 w-full flex flex-col items-center justify-center space-y-[2rem] md:space-y-[4rem] max-w-[50%] md:max-w-[20rem] z-10">
          {/* Number */}
          <div className="w-fit flex items-end justify-start font-number">
            <span
              className={`-mt-[5rem] inline-block md:w-[18rem] text-left font-extrabold text-[20rem] leading-[18.5rem] md:text-[40rem] md:leading-[36rem] uppercase tracking-tight duration-500 transition-opacity mix-blend-lighten text-neutral-300/20`}>
              50
            </span>
            <span
              className={`inline-block font-medium tracking-wider text-left text-xl md:text-[2rem] text-neutral-300`}>
              ms
            </span>
          </div>

          <p className="w-full overflow-hidden text-neutral-500/20 text-left font md:text-xl lg:text-xl leading-[1.2rem] md:leading-[1.4rem] lg:leading-[1.5rem] tracking">
            Time it takes for someone to form an opinion about your website.
          </p>
        </div>

        {/* Text */}
        <div className="px-4 md:w-[37rem] flex flex-col items-center justify-center space-y-[2rem]">
          <p className="w-full md:w-[70%] text-cyan-900/50 text-left font-medium text-2xl md:text-4xl tracking">
            People decide fast, and options are endless. If your website doesn’t
            make an impact immediately, they move on.
          </p>
          <p className="w-full md:w-[70%] text-cyan-800/100 text-left font-semibold text-2xl md:text-4xl tracking">
            You don’t get a second chance at a first impression.
          </p>
        </div>
      </section>

      <WordStyleSection />
      <PerformanceSection />
      <IntegrationSection />
      <SupportSection />
      <InterestedSection />

      {/* Cool */}
      {/* <div
        className="h-[200vh] absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1))",
          backgroundRepeat: "repeat",
          backgroundSize: "30px 30px", // Try a different value for density
          opacity: 0.3,
          backgroundBlendMode: "overlay",
          zIndex: 20,
        }}
      /> */}
    </>
  );
}
