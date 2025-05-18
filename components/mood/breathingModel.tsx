"use client";

import { motion } from "framer-motion";
import type { BreathingExerciseModalProps } from "@/types/moodT";

export default function BreathingExerciseModal({
  theme,
  breathCount,
  stopBreathingExercise,
}: BreathingExerciseModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`${
          theme === "dark"
            ? "bg-gradient-to-br from-blue-900/80 to-purple-900/30 border border-blue-500/20"
            : "bg-white border border-gray-200"
        } backdrop-blur-sm p-12 rounded-2xl max-w-2xl w-full mx-4 text-center shadow-xl`}
      >
        <h3
          className={`${
            theme === "dark" ? "text-white" : "text-gray-800"
          } text-3xl font-semibold mb-8`}
        >
          Breathing Exercise
        </h3>

        <div className="mb-12 relative">
          {/* Wave animation circle */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div
              className={`w-full h-full rounded-full ${
                theme === "dark" ? "bg-blue-500/20" : "bg-blue-100/50"
              }`}
            />
          </motion.div>

          {/* Second wave */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div
              className={`w-full h-full rounded-full ${
                theme === "dark" ? "bg-blue-500/20" : "bg-blue-100/50"
              }`}
            />
          </motion.div>

          {/* Main breathing circle */}
          <motion.div
            className={`w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto ${
              theme === "dark"
                ? "bg-gradient-to-br from-blue-900/80 to-purple-900/30 border border-blue-500/20"
                : "bg-gradient-to-br from-blue-100 to-white border border-blue-200"
            } backdrop-blur-sm transition-all duration-3000 ease-in-out relative`}
            animate={{
              scale: breathCount % 2 === 0 ? [1, 1.2] : [1.2, 1],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          >
            {/* Inner glo*/}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div
                className={`w-full h-full rounded-full ${
                  theme === "dark" ? "bg-blue-500/10" : "bg-blue-100/30"
                }`}
              />
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-800"
                } text-4xl md:text-5xl font-medium`}
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                {breathCount % 2 === 0 ? "Inhale..." : "Exhale..."}
              </motion.span>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <p
            className={`${
              theme === "dark" ? "text-blue-200" : "text-blue-600"
            } text-lg`}
          >
            Breath {Math.floor(breathCount / 2) + 1} of 3
          </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={stopBreathingExercise}
              className={`${
                theme === "dark"
                  ? "bg-blue-900/40 text-white hover:bg-blue-900/50 border border-blue-500/20"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200"
              } font-medium px-8 py-3 rounded-lg transition-colors`}
            >
              Skip
            </button>
            <button
              onClick={stopBreathingExercise}
              className={`${
                theme === "dark"
                  ? "bg-gray-800/50 text-white hover:bg-gray-700/50 border border-gray-700/50"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              } font-medium px-8 py-3 rounded-lg transition-colors`}
            >
              End Session
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
