import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const words = [
  {
    text: "Corporate",
    font: "Corporate",
    fontColor: "#ADADAD",
    fontSize: "text-[4rem] md:text-[8rem] lg:text-[10.75rem]",
  }, // Business, Finance, Consulting
  {
    text: "Modern",
    font: "Modern",
    fontColor: "#333D46",
    fontSize: "text-[4rem] md:text-[9rem] lg:text-[11rem]",
  }, // E-Learning, Schools, Universities
  {
    text: "Artistic",
    font: "Artistic",
    fontColor: "#98AA98",
    fontSize: "text-[4rem] md:text-[8rem] lg:text-[11rem]",
  }, // Creative, Design, Photography
  {
    text: "Luxury",
    font: "Luxury",
    fontColor: "#312000",
    fontSize: "text-[4.5rem] md:text-[9rem] lg:text-[11rem]",
  }, // High-end Brands, Fashion, Hospitality
  {
    text: "Innovative",
    font: "Innovative",
    fontColor: "#272727",
    fontSize: "text-[4.5rem] md:text-[8rem] lg:text-[11rem]",
  }, // Tech, Startups, R&D
  {
    text: "Minimalist",
    font: "Minimalist",
    fontColor: "#B1A898",
    fontSize: "text-[4.5rem] md:text-[9rem] lg:text-[11rem]",
  }, // Law, Healthcare, Finance
];

const typingSpeed = 100; // Speed of typing (ms per letter)
const stayDuration = 2000; // How long the word stays before deleting (ms)
const deleteSpeed = 50; // Speed of deleting (ms)

export default function WordFlip() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[index].text;

    if (!isDeleting && displayedText.length < currentWord.length) {
      // Typing effect
      timer = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      // Stay duration
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, stayDuration);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting effect
      timer = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index]);

  return (
    <section className="h-[40rem] md:h-[55rem] bg-neutral-50">
      <div className="relative max-w-[120rem] mx-auto h-[95%] w-full flex flex-col items-center justify-center">
        <h1 className="absolute top-[4rem] w-full md:text-xl font-semibold text-neutral-700 opacity-70 px-4 md:px-8">
          Styling
        </h1>
        <h2 className="absolute top-[70%] max-w-[30rem] md:max-w-[40rem] text-neutral-800 text-center font-semibold text-xl md:text-2xl">
          No matter the mood, we can style your website to perfectly suit you.
        </h2>
        <div className="-ml-[0.75rem] flex flex-col items-center justify-center">
          <motion.span
            key={index}
            style={{
              fontFamily: words[index].font,
              position: "absolute",
              textTransform: "uppercase",
              color: words[index].fontColor,
            }}
            className={`tracking-tighter ${words[index].fontSize}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedText}
          </motion.span>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
