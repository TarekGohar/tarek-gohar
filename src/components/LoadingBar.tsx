"use client";

import React, { useState, useEffect } from "react";

interface LoadingBarProps {
  bars?: number;
  animationLengthInSeconds?: number;
  color?: string;
  height?: string;
  length?: number;
}

export default function LoadingBar({
  bars = 300,
  animationLengthInSeconds = 0.5,
  color = "#000000",
  height = "0.2rem",
  length = 300,
}: LoadingBarProps) {
  const [isForward, setIsForward] = useState(true); // Track animation direction

  useEffect(() => {
    // Toggle forward and backward every 2 seconds
    const interval = setInterval(() => {
      setIsForward((prev) => !prev);
    }, animationLengthInSeconds * 1000); // 2 seconds for each phase

    return () => clearInterval(interval); // Cleanup interval
  }, []);
  return (
    <>
      <style jsx>{`
        .square {
          width: 4rem;
          background-color: ${color};
          height: ${height};
          animation: fade 0.5s ease infinite;
        }

        @keyframes fade {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 1;
          }

          100% {
            opacity: 0; /* Fully visible */
          }
        }
      `}</style>

      <div>
        <div className="flex w-full">
          {Array.from({ length: length }).map((_, index) => (
            <div
              key={`${isForward ? "for" : "back"}-${index}`}
              className="square opacity-0"
              style={{
                animationDelay: isForward
                  ? `${(index * animationLengthInSeconds) / (3 * length)}s` // Forward delay
                  : `${
                      ((length - index - 1) * animationLengthInSeconds) /
                      (3 * length)
                    }s`, // Backward delay
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
