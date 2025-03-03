import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntegrationSection() {
  const logos = [
    "/logos/google.png",
    "/logos/facebook.png",
    "/logos/shopify.webp",
    "/logos/stripe.png",
    "/logos/openai.png",
    "/logos/slack.png",
    "/logos/hubspot.png",
  ]; // Replace with your own logo paths

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section className="h-fit">
      <div className="py-[10rem] md:py-[15rem] relative max-w-[120rem] mx-auto w-full flex flex-col items-center justify-center px-4 md:px-8">
        <h1 className="absolute top-[4rem] w-full md:text-xl font-semibold text-cyan-800/80 px-4 md:px-8">
          Integration
        </h1>
        <div className="max-w-[110rem] mx-auto w-full flex flex-col md:flex-row items-center justify-center space-y-[3rem] md:space-y-[0rem]">
          <div className="w-full flex flex-col lg:flex-row items-start justify-between space-y-[2rem] md:space-y-0 lg:space-x-[5rem]">
            <h2 className="max-w-[90%] mx-auto lg:mx-0 lg:max-w-1/2 text-cyan-950 text-left font-medium text-5xl md:text-7xl uppercase tracking-wider">
              Seamless integration with your favourite providers
            </h2>
          </div>

          {/* Fading Logo Section */}
          <div className="relative w-full h-[16rem] flex items-center justify-center overflow-hidden">
            <AnimatePresence>
              <motion.div
                key={logos[currentIndex]}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute flex items-center justify-center w-1/2 h-full"
              >
                <Image
                  width={500}
                  height={500}
                  src={logos[currentIndex]}
                  alt="Logo"
                  className="h-[8rem] md:h-[10rem] lg:h-[12rem] object-contain w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
