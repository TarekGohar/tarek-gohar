"use client";

import React, { useEffect, useRef, useState } from "react";
// Define cursor colors
const CURSOR_COLORS = {
  h1: "green-400",
  a: "neutral-500",
  default: "sky-500",
};
// Main CustomCursor component
const CustomCursor = () => {
  // Reference to the cursor element
  const cursorRef = useRef(null);
  // State to track cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // State to track cursor color
  const [cursorColor, setCursorColor] = useState("sky-500");
  // State to track click event
  const [clicked, setClicked] = useState(false);
  // State to track hover state
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Event listener for mouse movement
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    // Event listener for mouse click
    const handleMouseDown = () => {
      setClicked(true);
      // Reset click state after 800 milliseconds
      setTimeout(() => {
        setClicked(false);
      }, 800);
    };
    // Event listener for mouseover (hover) on HTML elements
    const handleMouseOver = (e) => {
      // Get the HTML tag name
      const tagName = e.target.tagName.toLowerCase();
      console.log(tagName);
      // Set cursor color based on the tag, default to "sky-500"
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
      // If hovering over a button, set hovered to true
      if (tagName === "button" || tagName === "a") {
        console.log("hovered");
        setHovered(true);
      } else {
        setHovered(false);
      }
    };
    // Event listener for mouseout to reset hover state
    const handleMouseOut = (e) => {
      if (
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "a"
      ) {
        setHovered(false);
        setCursorColor(CURSOR_COLORS["default"]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []); // useEffect runs only once on mount

  return (
    <>
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-colors duration-150 z-50 rounded-full w-1 h-1 bg-${cursorColor}`}
      />
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`p-0 fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-colors duration-150 z-50 rounded-full w-3 h-3 border-2 border-${cursorColor} ${
          hovered ? "border-red-500" : ""
        }`}
      >
        <div
          className={`w-3 h-3 ${
            clicked ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } -translate-x-[1px] -translate-y-[1px] transition-colors duration-150 rounded-full bg-${cursorColor} -z-10`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
