"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntegrationSection() {
  const logos = [
    "/logos/google.webp",
    "/logos/facebook.webp",
    "/logos/shopify.webp",
    "/logos/stripe.webp",
    "/logos/openai.webp",
    "/logos/slack.webp",
    "/logos/hubspot.webp",
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
        <div className="max-w-[120rem] mx-auto w-full flex flex-col lg:flex-row items-center justify-center space-y-[3rem] lg:space-y-[0rem]">
          <div className="w-full flex flex-col items-start space-y-[1rem]">
            <h2 className="max-w-[60rem] w-full text-cyan-900/100 text-left font-semibold text-4xl md:text-5xl tracking-wider uppercase">
              Seamless integration with your favourite providers
            </h2>
            <p className="md:max-w-[60rem] text-cyan-800/60 text-left font- md:text-xl">
              Our applications are designed to work effortlessly with your
              favorite tools and services, ensuring a smooth and connected
              experience. Whether it's payment gateways, CRM systems, or
              third-party APIs, we integrate seamlessly to enhance functionality
              and efficiency.
            </p>
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
                className="absolute flex items-center justify-center w-1/2 h-full">
                <Image
                  width={500}
                  height={500}
                  src={logos[currentIndex]}
                  alt="Logo"
                  className="p-4 h-[8rem] md:h-[10rem] lg:h-[12rem] object-contain w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
