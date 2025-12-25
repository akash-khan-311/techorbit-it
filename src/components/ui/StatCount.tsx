"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

interface StatsCountProps {
  stats?: StatItem[];
  title?: string;
  showDividers?: boolean;
  className?: string;
}

const defaultStats: StatItem[] = [
  {
    value: 50,
    suffix: "+",
    label: "Handcrafted animated components",
    duration: 5,
  },
  {
    value: 12,
    suffix: "K+",
    label: "Developers building with ScrollX-UI",
    duration: 6,
  },
  {
    value: 99,
    suffix: "%",
    label: "Performance optimized for web",
    duration: 5.5,
  },
];

function AnimatedCounter({
  value,
  suffix = "",
  delay = 0,
  label,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 50,
    mass: 1,
  });

  const rounded = useTransform(springValue, (latest) =>
    Number(latest.toFixed(value % 1 === 0 ? 0 : 1))
  );

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isInView) {
      motionValue.set(0);
      timeout = setTimeout(() => {
        motionValue.set(value);
      }, delay * 300);
    } else {
      motionValue.set(0);
    }
    return () => clearTimeout(timeout);
  }, [isInView, value, motionValue, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay: delay * 0.2,
        type: "spring",
        stiffness: 80,
      }}
      className={cn(
        "text-center flex-1 min-w-0 flex flex-col justify-center h-full"
      )}
    >
      <motion.div
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 whitespace-nowrap"
        )}
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{
          duration: 0.6,
          delay: delay * 0.2 + 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        {displayValue}
        {suffix}
      </motion.div>
      <motion.p
        className={cn(
          "text-lg text-gray-400  leading-relaxed px-1 sm:px-2 hyphens-auto wrap-break-word"
        )}
        style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay * 0.2 + 0.6, duration: 0.6 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

export default function StatsCount({
  stats = defaultStats,

  showDividers = true,
  className = "",
}: StatsCountProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  return (
    <motion.section
      ref={containerRef}
      className={cn(" px-2 sm:px-4 md:px-8 w-full overflow-hidden", className)}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={cn("text-center mb-8 sm:mb-12 lg:mb-16")}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>

      <div className={cn("w-full")}>
        <div
          className={cn(
            "flex lg:flex-row flex-col gap-2 sm:gap-4 lg:gap-8 w-full "
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "relative mb-8 md:mb-0 flex-1 min-w-0 flex flex-col justify-center h-full"
              )}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                duration={stat.duration}
                delay={index}
                label={stat.label}
              />
              {index < stats.length - 1 && showDividers && (
                <motion.div
                  className={cn("")}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scaleY: 1 }
                      : { opacity: 0, scaleY: 0 }
                  }
                  transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
