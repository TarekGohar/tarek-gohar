"use client";
import Card from "./ProgressCard";
import { useScroll } from "framer-motion";
import { sub } from "framer-motion/client";
import { useRef } from "react";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const projects = [
    {
      step: 1,
      color: "#f9f9f9",
      title: "First Step",
      subtitle: "Discovery",
      description:
        "We begin by understanding your goals, audience, and key requirements. Through collaborative discussions, we map out the core features, user experience, and technical needs to create a strategic plan for development.",
      src: "default.webp",
      url: "#",
    },
    {
      step: 2,
      color: "#f4f4f4",
      title: "Second Step",
      subtitle: "Design",
      description:
        "We design the interface and overall user experience, ensuring that your web app is both visually appealing and easy to navigate. Using modern design principles, we craft layouts, prototypes, and interactive elements that align with your brand and enhance user engagement.",
      src: "default.webp",
      url: "#",
    },
    {
      step: 3,
      color: "#f1f1f1",
      title: "Third Step",
      subtitle: "Development",
      description:
        "We build both the front-end and back-end of your web app using the latest technologies. We focus on performance, security, and scalability, ensuring a smooth and efficient experience for users on all devices.",
      src: "default.webp",
      url: "#",
    },
    {
      step: 4,
      color: "#efefef",
      title: "Fourth Step",
      subtitle: "Deploy",
      description:
        "We rigorously test the app before launching it to ensure everything runs flawlessly. Once live, we continue to provide ongoing support, updates, and improvements, keeping your web app secure and optimized as your business grows.",
      src: "default.webp",
      url: "#",
    },
  ];

  return (
    <section ref={container} className="relative">
      <h1 className="pt-[4rem] max-w-[120rem] mx-auto md:text-xl font-semibold text-cyan-800/80 px-4 md:px-8">
        Our Process
      </h1>
      <div className="flex flex-col items-center justify-center space-y-[.5rem] mt-[5rem] md:mt-[10rem] md:mb-[-5rem] px-4 md:px-8">
        <h2 className="max-w-[35rem] text-cyan-800 text-center font-semibold text-4xl md:text-5xl uppercase tracking-wider">
          How Vereon Builds{" "}
          <span className="text-cyan-800/60">Your Web App</span>
        </h2>
        <p className="md:max-w-[30rem] text-cyan-800/60 text-center font- md:text-xl">
          A seamless journey from idea to launch.
        </p>
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}
