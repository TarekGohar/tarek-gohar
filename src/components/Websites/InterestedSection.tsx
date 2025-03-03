"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function InterestedSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="mt-[2.5rem] h-[17.5rem] md:mt-[10rem] md:h-[25rem] flex items-start justify-center">
      <div className=" max-w-[120rem] mx-auto flex flex-col items-center justify-center space-y-1 p-5 pt-6 bg-cyan-800">
        <h1 className="text-xl font-semibold text-neutral-200/90 capitalize">
          Interested in working with us?
        </h1>
        {/* <h2 className="max-w-[50rem] text-cyan-800/90 text-center font-bold text-4xl md:text-6xl tracking-tighter capitalize">
          Get a quote today.
        </h2> */}

        <Link
          ref={ref}
          className=" max-w-[20rem] md:max-w-[32rem] text-white text-center font-semibold text-3xl tracking-tighter header-underline capitalize"
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
