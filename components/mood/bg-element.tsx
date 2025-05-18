"use client";

import { motion } from "framer-motion";
import type { BackgroundElementsProps } from "@/types/moodT";

export default function BackgroundElements({ theme }: BackgroundElementsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* squares */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`large-square-${i}`}
          className={`absolute ${
            theme === "dark"
              ? "border-2 border-blue-500/20"
              : "border-2 border-blue-400/30"
          }`}
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            width: `${Math.random() * 100 + 200}px`,
            height: `${Math.random() * 100 + 200}px`,
            transform: `rotate(${Math.random() * 45}deg)`,
            backgroundColor: "transparent",
          }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Red circles */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className={`absolute rounded-full ${
            theme === "dark" ? "bg-pink-500/20" : "bg-pink-400/30"
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 12 + 16}px`,
            height: `${Math.random() * 12 + 16}px`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* hearts */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <span
            className={`text-xs ${
              theme === "dark" ? "text-pink-300/40" : "text-pink-400/50"
            }`}
          >
            ❤️
          </span>
        </motion.div>
      ))}

      {/* dots */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className={`absolute rounded-full ${
            theme === "dark" ? "bg-blue-500/20" : "bg-blue-300/30"
          }`}
          style={{
            width: "3px",
            height: "3px",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -6, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
