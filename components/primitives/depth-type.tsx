"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import type { ReactNode } from "react";

type DepthTypeProps = {
  children: ReactNode;
  className?: string;
  range?: [number, number];
  y?: [number, number];
  opacity?: [number, number];
};

export default function DepthType({
  children,
  className,
  range = [0, 1],
  y = [36, -36],
  opacity = [0.35, 1],
}: DepthTypeProps) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const translateY = useTransform(scrollYProgress, range, reduced ? [0, 0] : y);
  const alpha = useTransform(
    scrollYProgress,
    range,
    reduced ? [1, 1] : opacity,
  );

  return (
    <motion.div
      className={className}
      style={{
        y: translateY,
        opacity: alpha,
        willChange: reduced ? undefined : "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}
