import React from "react";
import OrderManagement from "./Accessibility Tiles/OrderManagement";
import ECommerce from "./Accessibility Tiles/ECommerce";
import Dashboard from "./Accessibility Tiles/Dashboard";
import Booking from "./Accessibility Tiles/Booking";

export default function AccessibilitySection() {
  return (
    <section className="h-fit mb-[4rem]">
      <div className="pt-[10rem] md:my-[8rem] relative max-w-[120rem] mx-auto w-full flex flex-col items-center justify-center px-4 md:px-8">
        <h1 className="absolute top-[4rem] w-full md:text-xl font-semibold text-cyan-800/80 px-4 md:px-8">
          Solutions
        </h1>

        <div className="w-full flex flex-col items-center justify-center space-y-[2.5rem]">
          <div className="flex flex-col items-center justify-center space-y-[.5rem]">
            <h2 className=" text-cyan-800 text-center font-medium text-4xl md:text-5xl uppercase tracking-wider">
              Our Web App <span className="text-cyan-800/60">Solutions</span>
            </h2>
            <p className="md:max-w-[35rem] text-cyan-800/60 text-center font- md:text-xl">
              A handfull of the many solutions we have to fix your problems.
            </p>
          </div>
          {/* Solutions Grid */}

          <div className="max-w-[100rem] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-x-[5rem] lg:gap-4 text-cyan-800/80">
            {/* Order Management */}
            <OrderManagement />

            {/* E-Commerce */}
            <ECommerce />

            {/* Dashboards */}
            <Dashboard />

            {/* Booking */}
            <Booking />
          </div>
        </div>
      </div>
    </section>
  );
}
