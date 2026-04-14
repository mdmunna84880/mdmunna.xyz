"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedViewportSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export const AnimatedViewportSection = ({
  children,
  className = "",
  delay = 0,
  yOffset = 40,
}: AnimatedViewportSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
