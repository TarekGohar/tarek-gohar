import QuoteForm from "@/components/Quote/Form";
import AnimatedSection from "@/components/Websites/AnimatedSection";
import React from "react";

export default function GetAQuotePage() {
  return (
    <>
      <section className="min-h-screen py-[10rem]">
        <div className="max-w-[100rem] mx-auto w-full flex flex-col space-y-[3rem] lg:flex-row lg:space-x-[4rem] px-4 lg:px-8">
          <div className="lg:w-1/2 flex flex-col items-start justify-start space-y-4">
            <h1 className="w-full lg:text-xl font-semibold text-neutral-400 opacity-70 capitalize">
              Pricing
            </h1>
            <h2 className="max-w-[80rem] w-full text-cyan-900/100 text-left font-medium text-4xl lg:text-5xl tracking-wider uppercase">
              Get A Quote
            </h2>
            <p className="w-full lg:max-w-[40rem] text-cyan-800/60 text-left lg:text-xl">
              Fill in the details below and we will get back to you with a
              quote.
            </p>
            <div className="w-full pt-[3rem]">
              <QuoteForm />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:mx-0 lg:h-[50rem] px-[3rem]">
            <AnimatedSection />
          </div>
        </div>
      </section>
    </>
  );
}
