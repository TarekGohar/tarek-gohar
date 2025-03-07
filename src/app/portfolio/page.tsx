"use client";

import { useState, useEffect, useRef } from "react";
import Shades from "@/components/Hero/Shades";
import ParallaxSection from "@/components/Portfolio/PortfolioSection";
import GetAQuote from "@/components/Portfolio/GetAQuoteSection";

export default function Page() {
  const [activeSection, setActiveSection] = useState("");
  // Exclude hero from the sections array since we don't want a dot for it
  const sections = [
    { id: "portfolio-bmbs", label: "Brahm Mauer Bar Services" },
    { id: "portfolio-cleano", label: "Cleano" },
    { id: "portfolio-connexio", label: "Connexio" },
    { id: "portfolio-edb", label: "Ed Battah & Co." },
    { id: "portfolio-montrium", label: "Montrium" },
    { id: "portfolio-mnp", label: "MNP" },
  ];

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Consider section in view when it's 50% visible
    };

    interface Section {
      id: string;
      label: string;
    }

    interface IntersectionObserverEntryWithTarget
      extends IntersectionObserverEntry {
      target: HTMLElement;
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          setActiveSection(target.id);
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
      <div className="fixed bottom-[4rem]  md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 md:translate-x-1/2 md:left-[2rem] flex flex-col items-center justify-center z-[5]">
        <div className=" flex space-x-[1rem] md:space-x-0 md:flex-col justify-center items-end md:items-start md:space-y-[1.35rem]">
          {sections.map((section) => (
            <div
              key={section.id}
              className="h-[.5rem] w-[.5rem] md:min-h-[.75rem] md:w-[.75rem] rounded-full transition-all duration-500"
              style={{
                opacity: activeSection === section.id ? 0.9 : 0.2,
                backgroundColor:
                  activeSection === section.id
                    ? "white"
                    : "rgba(255, 255, 255, .5)",
              }}
              aria-label={`Section indicator for ${section.label}`}
            />
          ))}
        </div>
      </div>

      <div
        id="hero"
        className="bg-cyan-950 relative overflow-hidden min-h-[50rem] h-screen w-screen z-[8]">
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
        <section className="h-full flex items-center justify-center px-4 z-[0]">
          <div className="max-w-[30rem] md:max-w-[36rem] flex flex-col items-center justify-center text-white relative space-y-4">
            <div className="max-w-[120rem] mx-auto w-fit text-left flex flex-col items-center mix-blend-plus-lighter z-[1]">
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
        link="https://brahmmauer.com"
        description="Leveraged Next.js to create a fast and SEO-optimized platform. The website was designed with a dark, modern aesthetic, aligning with the brand's premium identity."
        dividerColor="neutral-300"
        textColor="white"
      />
      <ParallaxSection
        id="portfolio-cleano"
        service="Web Site"
        industry="Cleaning Services"
        title="Cleano"
        link="https://teamcleano.com"
        description="Built a React.js-powered website focused on speed, SEO, and a sleek, professional aesthetic, ensuring a strong and trustworthy online presence."
        dividerColor="white"
        textColor="white"
      />
      <ParallaxSection
        id="portfolio-connexio"
        service="Application"
        industry="IT"
        title="Connexio"
        description="Developed a web app for Connexio, allowing employees to efficiently handle orders and providing administrators with tools for easy management of users and orders."
        dividerColor="white"
        textColor="white"
      />
      <ParallaxSection
        id="portfolio-edb"
        industry="Fashion"
        service="Web Site"
        title="Ed Battah & Co."
        description="A website for the European fashion importer, optimizing performance and SEO while maintaining a clean, refreshing design that complements the brand’s sophisticated offerings."
        link="https://edbattah.com"
        dividerColor="white"
        textColor="white"
      />

      <ParallaxSection
        id="portfolio-montrium"
        service="Application"
        industry="Life Sciences Software"
        title="Montrium"
        description="Developed a Next.js-based pricing calculator to streamline pricing across various products. With built-in authentication and authorization, it ensures only authorized users can access or modify sensitive pricing information."
        dividerColor="white"
        textColor="white"
      />

      <ParallaxSection
        id="portfolio-mnp"
        service="Application"
        industry="Consulting"
        title="MNP"
        description="Built a C++ solution that streamlines employee attendance tracking by extracting key data from Excel and producing a concise CSV report, eliminating manual counting and improving efficiency."
        dividerColor="white"
        textColor="white"
      />
      <GetAQuote />
    </>
  );
}
