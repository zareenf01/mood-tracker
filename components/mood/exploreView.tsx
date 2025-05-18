"use client";

import { motion } from "framer-motion";
import { Activity, Brain, Heart, Sun } from "lucide-react";
import type { ExploreViewProps } from "@/types/moodT";
import Header from "@/components/mood/header";

export default function ExploreView({
  theme,
  setTheme,
  currentView,
  startBreathingExercise,
}: ExploreViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <Header theme={theme} setTheme={setTheme} currentView={currentView} />
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${
            theme === "dark" ? "text-white" : "text-gray-800"
          } text-3xl font-semibold mb-8`}
        >
          Explore Activities
        </motion.h2>

        {/* Health & Wellness Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              icon: (
                <Heart
                  className={`${
                    theme === "dark" ? "text-blue-300" : "text-blue-600"
                  } w-8 h-8`}
                />
              ),
              title: "Breathing Exercises",
              description:
                "Guided breathing techniques to reduce stress and anxiety",
              bgColor: theme === "dark" ? "bg-blue-900/20" : "bg-blue-300/20",
              action: startBreathingExercise,
            },
            {
              icon: (
                <Activity
                  className={`${
                    theme === "dark" ? "text-green-300" : "text-green-600"
                  } w-8 h-8`}
                />
              ),
              title: "Physical Wellness",
              description:
                "Exercise routines and physical activities for better health",
              bgColor: theme === "dark" ? "bg-green-900/20" : "bg-green-300/20",
            },
            {
              icon: (
                <Brain
                  className={`${
                    theme === "dark" ? "text-purple-300" : "text-purple-600"
                  } w-8 h-8`}
                />
              ),
              title: "Mental Health",
              description: "Mindfulness and meditation practices",
              bgColor:
                theme === "dark" ? "bg-purple-900/20" : "bg-purple-300/20",
            },
            {
              icon: (
                <Sun
                  className={`${
                    theme === "dark" ? "text-yellow-300" : "text-yellow-600"
                  } w-8 h-8`}
                />
              ),
              title: "Mood Boosters",
              description: "Activities to lift your spirits and improve mood",
              bgColor:
                theme === "dark" ? "bg-yellow-900/20" : "bg-yellow-300/20",
            },
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => activity.action && activity.action()}
              className={`bg-gradient-to-br ${
                theme === "dark"
                  ? "from-gray-900/80 to-blue-900/30 border border-blue-500/20"
                  : "from-white/80 to-gray-50/30 border border-gray-200/20"
              } backdrop-blur-sm rounded-xl p-6 cursor-pointer`}
            >
              <div
                className={`mb-4 flex items-center justify-center h-16 rounded-lg ${activity.bgColor}`}
              >
                {activity.icon}
              </div>
              <h4
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-800"
                } font-medium text-lg mb-2`}
              >
                {activity.title}
              </h4>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                } text-sm`}
              >
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
