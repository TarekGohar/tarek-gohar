"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OrderManagement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="min-w-40 min-h-40 bg-neutral-50/50 rounded-xl py-[6rem] flex flex-col items-center justify-center">
      <div
        className="w-[90%] max-w-[30rem] min-w-[15rem] mx-auto max-h-[16rem] bg-neutral-50 rounded-2xl border-2 border-neutral-300 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0))",
          maskImage:
            "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0))",
        }}>
        <div className="h-10 text-xs items-center grid grid-cols-4 font-semibold text-neutral-500 bg-neutral-200/60">
          <span className="pl-2">Order ID</span>
          <span className="pl-2">First Name</span>
          <span className="pl-2">Last Name</span>
          <span className="pl-2">Date</span>
        </div>
        <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-50">
          <span className="pl-2">#B2045</span>
          <span className="pl-2">William</span>
          <span className="pl-2">Jones</span>
          <span className="pl-2">Feb 28, 2024</span>
        </div>

        <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-50">
          <span className="pl-2">#B2045</span>
          <span className="pl-2">Liam</span>
          <span className="pl-2">Smith</span>
          <span className="pl-2">Feb 28, 2024</span>
        </div>

        <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-100/60">
          <span className="pl-2">#C3089</span>
          <span className="pl-2">Sophia</span>
          <span className="pl-2">Garcia</span>
          <span className="pl-2">Feb 27, 2024</span>
        </div>

        <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-50">
          <span className="pl-2">#D4011</span>
          <span className="pl-2">Ethan</span>
          <span className="pl-2">Williams</span>
          <span className="pl-2">Feb 26, 2024</span>
        </div>

        <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-100/60">
          <span className="pl-2">#C3089</span>
          <span className="pl-2">Sophia</span>
          <span className="pl-2">Garcia</span>
          <span className="pl-2">Feb 27, 2024</span>
        </div>

        <div className="h-10 text-xs items-center grid grid-cols-4 font-medium text-neutral-500/80 bg-neutral-50">
          <span className="pl-2">#D4011</span>
          <span className="pl-2">Tarek</span>
          <span className="pl-2">Gohar</span>
          <span className="pl-2">Nov 15, 2001</span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-cyan-800 text-center font-medium uppercase tracking-wider">
          Order Management
        </h3>
        <p className="max-w-[18rem] text-center text-sm">
          Track orders, manage inventory, and automate workflows, ensuring
          faster processing and fewer errors.
        </p>
      </div>
    </motion.div>
  );
}
