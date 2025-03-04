"use client";

import { div, h2 } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";

export default function TextScrambleEffect() {
  const phrases = [
    "Protected",
    "Encrypted",
    "Compliant",
    "Secure",
    "Safe",
    "Private",
    "Confidential",
  ];

  const [text, setText] = useState(phrases[0]);
  const textRef = useRef(null);
  let counter = 0;

  useEffect(() => {
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || "";
          const to = newText[i] || "";
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      update() {
        let output = "";
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class='dud'>${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const el = textRef.current;
    const fx = new TextScramble(el);

    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2000);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, []);

  return (
    <h2 className="min-h-[8rem] md:min-h-[5rem]  w-full mx-auto lg:mx-0 lg:max-w-[40rem] text-neutral-800/80 text-left font-medium text-4xl md:text-5xl uppercase tracking-wider">
      We'll make sure your data is{" "}
      <span ref={textRef} className="text-neutral-900" />
    </h2>
  );
}
