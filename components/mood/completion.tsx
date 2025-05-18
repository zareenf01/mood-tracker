"use client";

import { motion } from "framer-motion";
import type { CompletionMessageModalProps } from "@/types/moodT";

export default function CompletionMessageModal({
  theme,
  startBreathingExercise,
  setShowCompletionMessage,
}: CompletionMessageModalProps) {
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
          } text-3xl font-semibold mb-4`}
        >
          Feeling Better?
        </h3>
        <p
          className={`${
            theme === "dark" ? "text-blue-200" : "text-blue-600"
          } text-lg mb-8`}
        >
          Want to do the exercise again?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={startBreathingExercise}
            className={`${
              theme === "dark"
                ? "bg-blue-900/40 text-white hover:bg-blue-900/50 border border-blue-500/20"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200"
            } font-medium px-8 py-3 rounded-lg transition-colors`}
          >
            Start Again
          </button>
          <button
            onClick={() => setShowCompletionMessage(false)}
            className={`${
              theme === "dark"
                ? "bg-gray-800/50 text-white hover:bg-gray-700/50 border border-gray-700/50"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
            } font-medium px-8 py-3 rounded-lg transition-colors`}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
