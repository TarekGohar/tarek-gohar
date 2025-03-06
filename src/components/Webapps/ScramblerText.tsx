"use client";
import { JSX, useEffect, useRef, useState } from "react";

// Define interface for queue items
interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}

export default function TextScrambleEffect(): JSX.Element {
  const phrases: string[] = [
    "Protected",
    "Encrypted",
    "Compliant",
    "Secure",
    "Safe",
    "Private",
    "Confidential",
  ];

  const [text, setText] = useState<string>(phrases[0]);
  const textRef = useRef<HTMLSpanElement | null>(null);
  let counter: number = 0;

  useEffect(() => {
    class TextScramble {
      el: HTMLElement;
      chars: string;
      queue: QueueItem[];
      frame: number;
      frameRequest: number | null;
      resolve: ((value: void | PromiseLike<void>) => void) | null;

      constructor(el: HTMLElement) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.update = this.update.bind(this);
        this.queue = [];
        this.frame = 0;
        this.frameRequest = null;
        this.resolve = null;
      }

      setText(newText: string): Promise<void> {
        const oldText: string = this.el.innerText;
        const length: number = Math.max(oldText.length, newText.length);
        const promise: Promise<void> = new Promise(
          (resolve) => (this.resolve = resolve)
        );
        this.queue = [];

        for (let i = 0; i < length; i++) {
          const from: string = oldText[i] || "";
          const to: string = newText[i] || "";
          const start: number = Math.floor(Math.random() * 40);
          const end: number = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }

        if (this.frameRequest) {
          cancelAnimationFrame(this.frameRequest);
        }
        this.frame = 0;
        this.update();
        return promise;
      }

      update(): void {
        let output: string = "";
        let complete: number = 0;

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
          if (this.resolve) {
            this.resolve();
          }
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }

      randomChar(): string {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const el = textRef.current;
    if (!el) return;

    const fx = new TextScramble(el);

    const next = (): void => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2000);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();

    // Cleanup function
    return (): void => {
      if (fx.frameRequest) {
        cancelAnimationFrame(fx.frameRequest);
      }
    };
  }, []);

  return (
    <h2 className="min-h-[8rem] md:min-h-[5rem] w-full mx-auto lg:mx-0 lg:max-w-[40rem] text-neutral-800/80 text-left font-semibold text-4xl md:text-5xl uppercase tracking-wider">
      We'll make sure your data is{" "}
      <span ref={textRef} className="text-neutral-900" />
    </h2>
  );
}
