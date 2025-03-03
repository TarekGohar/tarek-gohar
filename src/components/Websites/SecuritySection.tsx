"use client";

import Image from "next/image";
import DotGrid from "../GridDots";

export default function SecuritySection() {
  return (
    <section className="h-[40.5rem] bg-white">
      <div className="relative py-40 max-w-[120rem] mx-auto w-full h-full flex flex-col items-center justify-center overflow-hidden space-y-[2rem]">
        <h1 className="absolute top-[4rem] w-full md:text-xl font-semibold text-black text-opacity-90 px-4 md:px-8">
          Security
        </h1>
        <div className="w-[11rem] md:w-[16rem] flex items-center justify-center text-yellow-500 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="100%"
            height="100%"
          >
            <path
              fill="#E5E5E5"
              d="M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6v4h4v-4C34,8.5,29.5,4,24,4z"
            />
            <path
              fill="#EFCA15"
              d="M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"
            />
            <path fill="#b79b13" d="M24 28A3 3 0 1 0 24 34A3 3 0 1 0 24 28Z" />
          </svg>
        </div>

        <p className="py-[.75rem] md:py-[2.2rem] h-fit max-w-[19rem] md:max-w-[40rem] text-neutral-800 text-center font-semibold tracking-wider text-2xl md:text-4xl uppercase bg-white z-20">
          We keep your website safe with threat protection and encrypted
          connections.
        </p>

        <div className="absolute top-0 left-0 w-full z-10">
          {/* <DotGrid /> */}
        </div>
      </div>
    </section>
  );
}
