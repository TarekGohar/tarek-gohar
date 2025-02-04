"use client";

import { motion, useInView } from "framer-motion";
import { section } from "framer-motion/client";
import { useState, useEffect, useRef } from "react";

export default function WebAppsSection() {
  const header = "Web Apps";
  const subheader = "Your Vision, Built for the Web.";

  const [displayedHeader, setDisplayedHeader] = useState("");
  const [displayedSubheader, setDisplayedSubheader] = useState("");

  const [headerIndex, setHeaderIndex] = useState(0);
  const [subheaderIndex, setSubheaderIndex] = useState(0);

  useEffect(() => {
    if (headerIndex < header.length) {
      const timeout = setTimeout(() => {
        setDisplayedHeader((prev) => prev + header[headerIndex]);
        setHeaderIndex(headerIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      if (subheaderIndex < subheader.length) {
        const timeout = setTimeout(() => {
          setDisplayedSubheader((prev) => prev + subheader[subheaderIndex]);
          setSubheaderIndex(subheaderIndex + 1);
        }, 100);

        return () => clearTimeout(timeout);
      }
    }
  }, [headerIndex, header, subheader, subheaderIndex]);

  return (
    <section className="min-h-[40rem] flex flex-col items-start justify-center bg-cyan-900 text-white">
      <motion.h1
        className="text-7xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayedHeader}
      </motion.h1>
      <motion.h2
        className="text-5xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayedSubheader}
      </motion.h2>
    </section>
  );
}
