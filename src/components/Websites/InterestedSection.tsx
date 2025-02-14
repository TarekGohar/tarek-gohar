"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function GetAQuote() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="mt-[5rem] h-[30rem] flex items-start justify-center">
      <div className=" max-w-[120rem] mx-auto flex flex-col items-center justify-center space-y-1 px-4">
        <h1 className="md:text-xl font-semibold text-neutral-400 opacity-70 capitalize">
          Interested in working with us?
        </h1>
        <h2 className="max-w-[50rem] text-cyan-800/90 text-center font-bold text-4xl md:text-6xl tracking-tighter capitalize">
          Get a quote today.
        </h2>

        <Link
          ref={ref}
          className="pt-[0.5rem] max-w-[20rem] md:max-w-[32rem] text-cyan-700/60 text-center font-semibold md:text-2xl tracking-tighter header-underline capitalize"
          href="/contact"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Get a quote
          </motion.h3>
        </Link>
      </div>
    </section>
  );
}
