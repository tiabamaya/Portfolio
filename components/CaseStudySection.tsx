"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { ReactNode } from "react";

type CaseStudySectionProps = {
  number: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function CaseStudySection({
  number,
  eyebrow,
  title,
  children,
}: CaseStudySectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 35,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <span>{number}</span>

      <div>
        <p className="eyebrow">
          {eyebrow}
        </p>

        <h2>{title}</h2>

        {children}
      </div>
    </motion.section>
  );
}