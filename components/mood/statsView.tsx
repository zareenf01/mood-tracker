"use client";

import { motion } from "framer-motion";
import type { StatsViewProps } from "@/types/moodT";
import Header from "@/components/mood/header";

export default function StatsView({
  theme,
  setTheme,
  currentView,
  moods,
}: StatsViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <Header theme={theme} setTheme={setTheme} currentView={currentView} />
      <div className="max-w-4xl mx-auto">
        <h2
          className={`${
            theme === "dark" ? "text-white" : "text-gray-800"
          } text-3xl font-semibold mb-8`}
        >
          Your Mood Statistics
        </h2>

        {/* Mood Progress Bars */}
        <div className="space-y-6 mb-8">
          {moods.map((mood) => (
            <div key={mood.id} className="space-y-2">
              <div className="flex justify-between">
                <span
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {mood.label}
                </span>
                <span
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {Math.floor(Math.random() * 100)}%
                </span>
              </div>
              <div
                className={`h-2 rounded-full ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.floor(Math.random() * 100)}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: mood.color }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Mood Graph */}
        <div
          className={`bg-gradient-to-br ${
            theme === "dark"
              ? "from-gray-900/80 to-blue-900/30 border border-blue-500/20"
              : "from-white/80 to-gray-50/30 border border-gray-200/20"
          } backdrop-blur-sm p-6 rounded-xl`}
        >
          <h3
            className={`${
              theme === "dark" ? "text-white" : "text-gray-800"
            } text-xl font-medium mb-4`}
          >
            Weekly Mood Trends
          </h3>
          <div className="h-64 flex items-center justify-center">
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Mood graph visualization coming soon...
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
