"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TEXT_COLOR = "text-cyan-900";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  // Reset menu state whenever the pathname changes
  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      // Check if screen width exceeds medium breakpoint (typically 768px)
      if (window.innerWidth >= 768) {
        setMenu(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call once on mount to handle initial size
    handleResize();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed inset-0 top-[1rem] text-sm md:text-[.97rem] w-full mx-auto unselectable h-[3.25rem] md:h-[3.5rem] px-[1rem]`}
        style={{ zIndex: 1000, backgroundBlendMode: "" }}>
        <ul
          className="h-full grid grid-cols-2 md:grid-cols-5 max-w-[90rem] md:gap-x-4 mx-auto font-medium bg-opacity-80 p-[.2rem] rounded-2xl"
          style={{
            background: "rgba(230,230,230, 0.3)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            backgroundBlendMode: "overlay",
            zIndex: 1100,
          }}>
          {/* Logo */}
          <li className="flex items-center">
            <Link
              href="/"
              className=" block min-w-[4rem] px-[1rem] duration-300 hover:opacity-90 text-[1.2rem] md:text-2xl tracking-widest text-cyan-950"
              style={{ fontFamily: "Zilap" }}>
              tecta
            </Link>
          </li>

          {/* Nav Links */}
          <li className="hidden md:flex justify-center items-center md:gap-x-6 md:col-span-3">
            <Link
              // onMouseEnter={() => setHoveredItem("about")}
              // onMouseLeave={() => setHoveredItem(null)}
              href="/portfolio"
              className={`font-medium tracking-wider duration-200 ${TEXT_COLOR}`}>
              Portfolio
            </Link>
            <Link
              // onMouseEnter={() => setHoveredItem("apps")}
              // onMouseLeave={() => setHoveredItem(null)}
              href="/apps"
              className={`font-medium tracking-wider duration-200 ${TEXT_COLOR}`}>
              Applications
            </Link>
            <Link
              // onMouseEnter={() => setHoveredItem("sites")}
              // onMouseLeave={() => setHoveredItem(null)}
              href="/websites"
              className={`font-medium tracking-wider duration-200 ${TEXT_COLOR}`}>
              Web Sites
            </Link>
          </li>

          <div className="h-full flex items-center justify-end gap-x-[.5rem]">
            {/* Get a Quote Button */}
            <li className="h-full flex items-center justify-end">
              <Link
                href="/get-a-quote"
                className="max-w-[10rem] bg-white text-cyan-950 rounded-xl tracking-wider px-[.5rem] md:px-[1rem] h-full flex items-center justify-center duration-200 hover:opacity-80">
                Get a Quote
              </Link>
            </li>

            {/* Mobile Menu */}
            <button
              aria-label="Mobile Menu Button"
              onClick={() => setMenu(!menu)}
              className="md:hidden h-full w-[3rem] p-2 rounded-xl bg-white flex flex-col items-center justify-center space-y-1">
              <span className="block w-[80%] h-[.15rem] bg-cyan-900" />
              <span className="block w-[80%] h-[.15rem] bg-cyan-900" />
            </button>
          </div>
        </ul>
      </motion.nav>

      {/* Mobile Drop Down Menu */}
      <div className="top-[1rem] fixed inset-0 px-[1rem] md:px-[2rem] w-screen z-50 h-fit overflow-hidden">
        <motion.div
          className="pt-[3rem] max-w-[90rem] rounded-2xl flex flex-col items-end justify-center gap-y-[2rem] px-[1rem]"
          style={{
            background: "rgba(240,240,240, 0.5)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            backgroundBlendMode: "overlay",
          }}
          initial={{ height: 0 }}
          animate={
            menu
              ? {
                  opacity: 1,
                  height: "30vh",
                  maxHeight: "30rem",
                  minHeight: "20rem",
                }
              : {
                  opacity: 0,
                  height: "0vh",
                }
          }
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={menu ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, ease: "easeInOut" }}>
            <Link
              // onMouseEnter={() => setHoveredItem("about")}
              // onMouseLeave={() => setHoveredItem(null)}
              href="/portfolio"
              className={`font-medium tracking-wider duration-200 ${TEXT_COLOR}`}>
              Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={menu ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, ease: "easeInOut" }}>
            <Link
              // onMouseEnter={() => setHoveredItem("apps")}
              // onMouseLeave={() => setHoveredItem(null)}
              href="/apps"
              className={`font-medium tracking-wider duration-200 ${TEXT_COLOR}`}>
              Applications
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={menu ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, ease: "easeInOut" }}>
            <Link
              // onMouseEnter={() => setHoveredItem("sites")}
              // onMouseLeave={() => setHoveredItem(null)}
              href="/websites"
              className={`font-medium tracking-wider duration-200 ${TEXT_COLOR}`}>
              Web Sites
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
