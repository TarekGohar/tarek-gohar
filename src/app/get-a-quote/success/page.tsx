import MovingLinesBackground from "@/components/MovingLines";
import QuoteForm from "@/components/Quote/Form";
import AnimatedSection from "@/components/Websites/AnimatedSection";
import React from "react";

export default function GetAQuotePage() {
  return (
    <>
      <section className="h-screen min-h-[40rem]">
        <div className="h-[60vh] max-w-[100rem] mx-auto w-full h-full flex items-center px-4 lg:px-8">
          <div className="flex flex-col items-start justify-start space-y-4">
            <h1 className="w-full lg:text-xl font-semibold text-neutral-400 opacity-70 capitalize">
              Success
            </h1>
            <h2 className="max-w-[40rem] w-full text-cyan-900/100 text-left font-medium text-4xl lg:text-5xl tracking-wider uppercase">
              We have received your request!
            </h2>
            <p className="w-full lg:max-w-[40rem] text-cyan-800/60 text-left lg:text-xl">
              We will contact you shortly with a quote.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
