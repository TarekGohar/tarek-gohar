import React from "react";
import { motion } from "framer-motion";

export const BoxesContainer = () => {
  const rows = new Array(80).fill(1);
  const cols = new Array(80).fill(1);

  return (
    <div
      style={{
        transform: `translate(-50%, -50%) skewX(-45deg) skewY(14deg) scale(0.675) rotate(4deg) translateZ(0)`,
      }}
      className="absolute left-1/2 p-4 -top-1/2 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 "
    >
      {rows.map((_, i) => (
        <div
          key={`row` + i}
          className="w-16 h-8  border-r  border-cyan-950 relative"
        >
          {cols.map((_, j) => (
            <div
              key={`col` + j}
              className="w-16 h-8  border-r border-t border-cyan-950 relative"
            >
              {/* {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-cyan-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null} */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
