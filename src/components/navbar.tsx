"use client";

import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  light: boolean;
}

export default function Navbar({ light }: NavbarProps) {
  const light_color = light ? "text-white" : "text-white";

  return (
    <nav
      className={`fixed inset-0 w-full mx-auto text-white unselectable pt-4 h-fit duration-150 ${
        light ? "opacity-0" : "opacity-100"
      }`}
      style={{ zIndex: 1000, backgroundBlendMode: "" }}
    >
      <ul
        className="relative flex items-center justify-between w-fit gap-x-4 mx-auto font-semibold bg-opacity-80 p-2 rounded-full"
        style={{
          background: "rgba(150, 150, 150, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundBlendMode: "overlay",
          zIndex: 1100,
        }}
      >
        {/* Logo */}
        <li>
          <Link
            href="/"
            className="relative w-[8rem] lg:w-[12rem] duration-300 hover:opacity-75"
          >
            Logo
          </Link>
        </li>

        {/* Nav Links */}
        <li className="relative flex justify-center items-center md:gap-x-6 ">
          <Link
            // onMouseEnter={() => setHoveredItem("about")}
            // onMouseLeave={() => setHoveredItem(null)}
            href="/about"
            className={`relative duration-200 md:px-6 py-2 ${light_color}`}
          >
            About
          </Link>
          <Link
            // onMouseEnter={() => setHoveredItem("apps")}
            // onMouseLeave={() => setHoveredItem(null)}
            href="/webapps"
            className={`relative duration-200 md:px-6 py-2 ${light_color}`}
          >
            Web Apps
          </Link>
          <Link
            // onMouseEnter={() => setHoveredItem("sites")}
            // onMouseLeave={() => setHoveredItem(null)}
            href="/websites"
            className={`relative duration-200 md:px-6 py- ${light_color}`}
          >
            Web Sites
          </Link>
        </li>

        {/* Get a Quote Button */}
        <Link
          href="/contact-us"
          className="relative bg-white text-black rounded-full p-2 md:p-3 px-3 md:px-6"
        >
          Get a Quote
        </Link>
      </ul>
    </nav>
  );
}
