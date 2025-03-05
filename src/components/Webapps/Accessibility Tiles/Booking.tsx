import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Booking() {
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
        className="w-[90%] max-w-[30rem] min-w-[15rem] mx-auto max-h-[16rem] bg-neutral-50 rounded-2xl border-neutral-300 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0))",
          maskImage:
            "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0))",
        }}>
        <div className="h-8 text-xs items-center px-2 flex justify-between bg-neutral-200/50">
          {/* <div className="w-full h-full flex items-center space-x-[.3rem]">
                    <span className="w-[.7rem] h-[.7rem] rounded-full bg-red-500 inline-block" />
                    <span className="w-[.7rem] h-[.7rem] rounded-full bg-yellow-500 inline-block" />
                    <span className="w-[.7rem] h-[.7rem] rounded-full bg-green-500 inline-block" />
                  </div> */}
        </div>
        <div className="h-72 bg-neutral-100 p-6 flex flex-col items-center justify-start space-y-1">
          {/* Checkout Page */}
          <div className="w-[80%] min-w-[20rem] min-h-[10rem] flex flex-col justify-start items-center p-2 bg-neutral-200/60 rounded-xl">
            <span className="text-[.5rem] font-semibold text-neutral-600 my-1">
              November
            </span>

            <div className="w-full grid grid-cols-7 gap-1 gap-y-2">
              {/* Days of the Week */}
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                <span
                  key={day}
                  className="text-[.5rem] font-semibold text-center text-neutral-400">
                  {day}
                </span>
              ))}

              {/* Empty spaces for correct date alignment */}
              <span />
              <span />
              <span />
              <span />

              {/* Calendar Numbers */}
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-[.5rem] font-medium text-neutral-400 flex items-center justify-center h-6 ${
                    i === 14
                      ? "border-2 border-neutral-400/50 rounded-full"
                      : ""
                  }`}>
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-cyan-800 text-center font-medium uppercase tracking-wider">
          Booking Systems
        </h3>
        <p className="max-w-[18rem] text-center text-sm">
          Schedule, reschedule, and manage appointments seamlessly while
          integrating with your workflow.
        </p>
      </div>
    </motion.div>
  );
}
