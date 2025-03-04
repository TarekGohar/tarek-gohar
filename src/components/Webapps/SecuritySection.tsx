"use client";

import Image from "next/image";
import DotGrid from "../GridDots";
import ScrambleText from "./ScramblerText";

export default function SecuritySection() {
  return (
    <section className="h-[50rem]">
      <div className="relative py- max-w-[120rem] mx-auto w-full h-full flex flex-col items-center justify-center overflow-hidden space-y-[2rem] px-4 md:px-8">
        <h1 className="absolute top-[4rem] w-full md:text-xl font-semibold text-black text-opacity-90 px-4 md:px-8">
          Security
        </h1>
        <div className="w-[11rem] md:w-[12rem] flex items-center justify-center text-yellow-500 z-20">
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

        <div className="space-y-[1rem]">
          <ScrambleText />

          <p className="w-full mx-auto lg:max-w-[40rem] text-neutral-800/70 text-left font- md:text-xl">
            We prioritize security in every web app we create, ensuring your
            business and customer data remain protected. A secure web app builds
            trust and keeps you compliant with industry regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
