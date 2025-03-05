import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Dashboard() {
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
        className="w-[90%] max-w-[30rem] min-w-[15rem] mx-auto max-h-[16rem] bg-neutral-50 overflow-hidden space-y-2"
        style={{
          WebkitMaskImage:
            "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0))",
          maskImage:
            "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0))",
        }}>
        <div className="w-full flex space-x-2">
          {/* Progress Circle */}
          <div className="w-[12rem] h-[7rem] bg-neutral-100 rounded-xl flex items-center justify-center">
            <div className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] relative flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="#F3F4F6"
                  strokeWidth="3"
                />

                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="#b2b2b2"
                  strokeWidth="3.5"
                  strokeDasharray="50 50"
                  strokeDashoffset="0"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="#c4c4c4"
                  strokeWidth="3.5"
                  strokeDasharray="50 50"
                  strokeDashoffset="-40"
                />

                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="#e4e4e4"
                  strokeWidth="3.5"
                  strokeDasharray="25 75"
                  strokeDashoffset="-50"
                />

                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="#f4f4f4"
                  strokeWidth="3.5"
                  strokeDasharray="25 75"
                  strokeDashoffset="-75"
                />
              </svg>

              <span className="absolute text-transparent bg-neutral-200 rounded-md font-bold text-xs  p-">
                100%
              </span>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="w-full h-[7rem] bg-blue-100/30 rounded-xl flex items-end justify-between px-[2rem] py-[1rem]">
            <span className="inline-block w-[1.33rem] h-[4.0rem] bg-blue-300/60" />
            <span className="inline-block w-[1.33rem] h-[2.7rem] bg-blue-300/90" />
            <span className="inline-block w-[1.33rem] h-[3.9rem] bg-blue-300/60" />
            <span className="inline-block w-[1.33rem] h-[2.3rem] bg-blue-300/70" />
            <span className="inline-block w-[1.33rem] h-[4.2rem] bg-blue-300/60" />
            <span className="inline-block w-[1.33rem] h-[2.5rem] bg-blue-300/30" />
            <span className="inline-block w-[1.33rem] h-[2.2rem] bg-blue-300/60" />
            <span className="inline-block w-[1.33rem] h-[2.7rem] bg-blue-300/70" />
            <span className="inline-block w-[1.33rem] h-[3.6rem] bg-blue-300/50" />
          </div>
        </div>

        {/* Logs */}
        <div className="w-full flex space-x-2">
          <div className="w-[60rem] h-[7rem] bg-neutral-200 rounded-xl space-y-4 py-3">
            <div className="w-[80%] mx-auto flex space-x-2">
              <span className="inline-block w-[4rem] h-[.5rem] text-[.6rem] text-neutral-500 font-medium">
                Logs
              </span>
            </div>
            <div className="w-[80%] h-[80%] mx-auto my-auto flex flex-col items-center justify-start space-y-2 ">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-full flex space-x-2">
                  <span className="inline-block w-[.25rem] h-[.25rem] bg-neutral-400/40" />
                  <span className="inline-block w-full h-[.25rem] bg-neutral-400/40" />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[7rem] bg-green-200 rounded-xl p-4 flex flex-col items-center justify-start space-y-4">
            <span className=" inline-block h-[1rem] w-[90%] text-[.6rem] font-medium text-green-600">
              Orders
            </span>
            <span className=" inline-block h-[2rem] w-[90%] text-sm text-center font-bold text-green-600">
              96,540
            </span>
            <span className=" inline-block h-[1rem] w-[90%] text-xs text-left text-green-600">
              + 6.16%
            </span>
          </div>
          <div className="w-full h-[7rem] bg-yellow-200 rounded-xl p-4 flex flex-col items-center justify-start space-y-4">
            <span className=" inline-block h-[1rem] w-[90%] text-[.6rem] font-medium text-yellow-600">
              Issues
            </span>
            <span className=" inline-block h-[2rem] w-[90%] text-sm text-center font-bold text-yellow-600">
              503
            </span>
            <span className=" inline-block h-[1rem] w-[90%] text-xs text-left text-yellow-600">
              + 6.16%
            </span>
          </div>
        </div>

        {/* Placeholder */}
        <div className="w-full flex space-x-2">
          <div className="w-full h-[7rem] bg-blue-200 rounded-xl"></div>

          <div className="w-[6rem] h-[7rem] bg-blue-200 rounded-xl"></div>
          <div className="w-[6rem] h-[7rem] bg-blue-200 rounded-xl"></div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-cyan-800 text-center font-medium uppercase tracking-wider">
          Dashboards
        </h3>
        <p className="max-w-[18rem] text-center text-sm">
          Track key metrics, identify trends, and make informed decisions — all
          in one centralized place.
        </p>
      </div>
    </motion.div>
  );
}
