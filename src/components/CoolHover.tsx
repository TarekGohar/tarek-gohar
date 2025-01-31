"use client";

import { useEffect, useRef } from "react";

// Card data array
const cards = [
  {
    title: "Apartments",
    subtitle: "Places to be apart. Wait, what?",
    icon: "fa-apartment",
  },
  {
    title: "Unicorns",
    subtitle: "A single corn. Er, I mean horn.",
    icon: "fa-unicorn",
  },
  {
    title: "Blender Phones",
    subtitle: "These absolutely deserve to exist.",
    icon: "fa-blender-phone",
  },
  { title: "Adios", subtitle: "See you...", icon: "fa-person-to-portal" },
  {
    title: "I mean hello",
    subtitle: "...over here.",
    icon: "fa-person-from-portal",
  },
  {
    title: "Otters",
    subtitle: "Look at me, imma cute lil fella.",
    icon: "fa-otter",
  },
];

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll(".card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="flex flex-wrap gap-2 max-w-[916px] w-[calc(100%-20px)] justify-center items-center"
      ref={containerRef}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className="card relative w-[300px] h-[260px] rounded-lg cursor-pointer overflow-hidden"
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 rounded-lg z-0"></div>

          {/* Card Content */}
          <div className="card-content absolute inset-[1px] rounded-lg bg-neutral-900 flex flex-col p-4 z-10">
            <div className="card-image flex justify-center items-center h-[140px] text-gray-500">
              <i className={`fa-duotone ${card.icon} text-6xl opacity-25`} />
            </div>
            <div className="card-info-wrapper flex flex-grow items-center px-5">
              <div className="card-info flex items-start gap-2">
                <i className={`fa-duotone ${card.icon} text-lg`} />
                <div className="card-info-title">
                  <h3 className="text-white text-lg">{card.title}</h3>
                  <h4 className="text-gray-400 text-sm mt-2">
                    {card.subtitle}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
