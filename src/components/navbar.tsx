"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  light: boolean;
}

export default function Navbar({ light }: NavbarProps) {
  const light_color = light ? "text-white" : "text-cyan-900";

  return (
    <motion.nav
      className={`fixed inset-0 top-5 w-full mx-auto unselectable h-[3.25rem]`}
      initial={{ opacity: 0 }}
      animate={!light ? { opacity: 1 } : { opacity: 0 }}
      style={{ zIndex: 1000, backgroundBlendMode: "" }}>
      <ul
        className="h-full flex items-center justify-between max-w-[90rem] gap-x-4 mx-auto font-medium bg-opacity-80 p-[.2rem] rounded-2xl"
        style={{
          background: "rgba(230,230,230, 0.3)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundBlendMode: "overlay",
          zIndex: 1100,
        }}>
        {/* Logo */}
        <li>
          <Link
            href="/"
            className="block min-w-[4rem] px-[1rem] duration-300 hover:opacity-90 text-2xl tracking-widest text-cyan-950"
            style={{ fontFamily: "Zilap" }}>
            NETRA
          </Link>
        </li>

        {/* Nav Links */}
        <li className=" flex justify-center items-center md:gap-x-6 ">
          <Link
            // onMouseEnter={() => setHoveredItem("about")}
            // onMouseLeave={() => setHoveredItem(null)}
            href="/about"
            className={`font-medium tracking-wider duration-200 md:px-6 py-2 ${light_color}`}>
            Portfolio
          </Link>
          <Link
            // onMouseEnter={() => setHoveredItem("apps")}
            // onMouseLeave={() => setHoveredItem(null)}
            href="/webapps"
            className={`font-medium tracking-wider duration-200 md:px-6 py-2 ${light_color}`}>
            Web Apps
          </Link>
          <Link
            // onMouseEnter={() => setHoveredItem("sites")}
            // onMouseLeave={() => setHoveredItem(null)}
            href="/websites"
            className={`font-medium tracking-wider duration-200 md:px-6 py-2 ${light_color}`}>
            Web Sites
          </Link>
        </li>

        {/* Get a Quote Button */}
        <Link
          href="/get-a-quote"
          className=" bg-white text-cyan-950 rounded-xl tracking-wider px-[1rem] h-full flex items-center justify-center duration-200 hover:opacity-80">
          Get a Quote
        </Link>

        <Link
          href="/contact-us"
          className="md:hidden h-full w-[3rem] p-2 rounded-xl bg-white flex flex-col items-center justify-center space-y-1">
          <span className="block w-[80%] h-[.2rem] bg-black" />
          <span className="block w-[80%] h-[.2rem] bg-black" />
        </Link>
      </ul>
    </motion.nav>
  );
}
