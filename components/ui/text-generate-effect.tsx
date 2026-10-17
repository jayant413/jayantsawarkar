"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
  duration?: number;
  filter?: boolean;
};

export function TextGenerateEffect({
  words,
  className,
  duration = 0.5,
  filter = true,
}: TextGenerateEffectProps) {
  const wordsArray = words.split(" ");

  return (
    <motion.span
      className={cn("inline", className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: duration / Math.max(wordsArray.length, 1),
          },
        },
      }}
      aria-label={words}
      role="text"
    >
      {wordsArray.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          variants={{
            hidden: {
              opacity: 0,
              filter: filter ? "blur(10px)" : "none",
              y: 8,
            },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              transition: { duration: 0.35, ease: "easeOut" },
            },
          }}
        >
          {word}
          {index < wordsArray.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
