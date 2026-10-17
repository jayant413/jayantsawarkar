"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Wraps a section (`children`) and, while the cursor is over it, reveals
 * `reveal` through a circular SVG mask that follows the pointer.
 * The mask layer ignores pointer events, so links and buttons stay clickable.
 */
export const MaskContainer = ({
  children,
  reveal,
  revealSize = 380,
  className,
  revealClassName,
}: {
  children: React.ReactNode;
  reveal: React.ReactNode;
  revealSize?: number;
  className?: string;
  revealClassName?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const maskSize = isHovered ? revealSize : 0;

  return (
    <div
      className={cn("relative", className)}
      onMouseMove={updateMousePosition}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      <motion.div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-30 hidden items-center justify-center bg-[#171717] px-6 text-center text-[#f4f1eb] [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] md:flex",
          revealClassName,
        )}
        initial={false}
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
      >
        <div className="mx-auto max-w-4xl text-[clamp(28px,4vw,56px)] font-bold leading-[1.05] tracking-[-0.04em]">
          {reveal}
        </div>
      </motion.div>
    </div>
  );
};
