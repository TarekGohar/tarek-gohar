"use client";

import { useState, useEffect, useRef } from "react";
import Shades from "@/components/Hero/Shades";
import ParallaxSection from "@/components/Portfolio/PortfolioSection";

export default function Page() {
  const [activeSection, setActiveSection] = useState("");
  // Exclude hero from the sections array since we don't want a dot for it
  const sections = [
    { id: "portfolio-bmbs", label: "Brahm Mauer Bar Services" },
    { id: "portfolio-edb", label: "Ed Battah & Co." },
    { id: "portfolio-cleano", label: "Cleano" },
    { id: "portfolio-montrium", label: "Montrium" },
  ];

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Consider section in view when it's 50% visible
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe only the portfolio sections (skip hero)
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Vertical Navigation Dots */}
      <div className="fixed bottom-[4rem] left-1/2 -translate-x-1/2  md:left-8 md:top-1/2 transform md:-translate-y-1/2 z-50 flex md:flex-col gap-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="h-[.5rem] w-[.5rem] md:h-[.75rem] md:w-[.75rem] rounded-full transition-all duration-500"
            style={{
              opacity: activeSection === section.id ? 1 : 0.3,
              backgroundColor:
                activeSection === section.id
                  ? "white"
                  : "rgba(255, 255, 255, .5)",
            }}
            aria-label={`Section indicator for ${section.label}`}
          />
        ))}
      </div>

      <div
        id="hero"
        className="bg-cyan-950 relative overflow-hidden h-screen w-screen">
        {/* Static background with better optimization */}
        <div
          className="absolute inset-0 will-change-transform noisecontainer"
          style={{
            backgroundImage: "url(/portfolio.webp)",
            backgroundSize: "150% 100%",
            backgroundPosition: "center",
            transform: "scale(1.5) translateZ(0)",
            backfaceVisibility: "hidden", // Additional optimization
            zIndex: 0,
          }}
        />
        <Shades color="#000" />
        <section className="h-screen flex items-center justify-center px-4 z-10">
          <div className="max-w-[30rem] md:max-w-[36rem] flex flex-col items-center justify-center text-white relative space-y-4">
            <div className="max-w-[120rem] mx-auto w-fit text-left flex flex-col items-center mix-blend-plus-lighter z-50">
              <h1 className="max-w-[60rem] tracking-wider font-medium text-[3rem] md:text-[5.4rem] lg:text-[6rem] leading-[3rem] md:leading-[5rem] lg:leading-[5.5rem] uppercase mix-blend-plus-lighter">
                Turning ideas into reality.
              </h1>
            </div>
            <div className="max-w-[30rem] md:max-w-[35rem] mx-auto w-full md:text-xl lg:text-xl font-normal text-left tracking-wider mix-blend-plus-lighter">
              <h2>
                Explore our portfolio of digital solutions designed for real
                impact.
              </h2>
            </div>
          </div>
        </section>
      </div>
      <ParallaxSection
        id="portfolio-bmbs"
        service="Web Site"
        industry="Events & Hospitality"
        title="Brahm Mauer Bar Services"
        description="A custom website for Brahm Mauer Bar Services, leveraging Next.js to create a fast and SEO-optimized platform. The website was designed with a dark, modern aesthetic, aligning with the brand's premium and sophisticated identity."
        dividerColor="neutral-300"
        textColor="white"
      />
      <ParallaxSection
        id="portfolio-edb"
        industry="Fashion"
        service="Web Site"
        title="Ed Battah & Co."
        description="A custom website for Brahm Mauer Bar Services, leveraging Next.js to create a fast and SEO-optimized platform. The website was designed with a dark, modern aesthetic, aligning with the brand's premium and sophisticated identity."
        dividerColor="white"
        textColor="white"
      />
      <ParallaxSection
        id="portfolio-cleano"
        service="Web Site"
        industry="Cleaning Services"
        title="Cleano"
        description="A custom website for Brahm Mauer Bar Services, leveraging Next.js to create a fast and SEO-optimized platform. The website was designed with a dark, modern aesthetic, aligning with the brand's premium and sophisticated identity."
        dividerColor="white"
        textColor="white"
      />
      <ParallaxSection
        id="portfolio-montrium"
        service="Application"
        industry="Pharmaceuticals"
        title="Montrium"
        description="A custom application for Montrium, designed to streamline document management and compliance processes. The application features a user-friendly interface and robust security measures to ensure data integrity and regulatory compliance."
        dividerColor="white"
        textColor="white"
      />
    </>
  );
}
