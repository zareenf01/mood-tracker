"use client";

import { motion } from "framer-motion";
import { Activity, Brain, Clock, Utensils, Wind } from "lucide-react";
import type { TodayViewProps } from "@/types/moodT";
import Header from "@/components/mood/header";

export default function TodayView({
  theme,
  setTheme,
  currentView,
  startBreathingExercise,
}: TodayViewProps) {
  // Calendar data
  const weekdays = [
    { day: "Mon", date: 12, active: false },
    { day: "Tue", date: 13, active: false },
    { day: "Wed", date: 14, active: true },
    { day: "Thu", date: 15, active: false },
    { day: "Fri", date: 16, active: false },
  ];

  // Activities data
  const activities = [
    {
      name: "Breathing Exercise",
      duration: "2 min",
      icon: <Wind className="w-8 h-8 text-blue-300" />,
    },
    {
      name: "Yoga Class",
      duration: "15 min",
      icon: <Activity className="w-8 h-8 text-blue-300" />,
    },
    {
      name: "Guided Meditation",
      duration: "30 min",
      icon: <Brain className="w-8 h-8 text-blue-300" />,
    },
  ];

  // Program details
  const programDetails = [
    {
      name: "Guided Meditation",
      icon: <Brain className="w-12 h-12 text-blue-300" />,
    },
    {
      name: "Breathing Exercise",
      icon: <Wind className="w-12 h-12 text-blue-300" />,
    },
    {
      name: "Healthy Recipes",
      icon: <Utensils className="w-12 h-12 text-blue-300" />,
    },
    {
      name: "Yoga Classes",
      icon: <Activity className="w-12 h-12 text-blue-300" />,
      levels: ["Beginner", "Intermediate"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8"
    >
      <Header theme={theme} setTheme={setTheme} currentView={currentView} />
      {/* Weekday selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-br ${
          theme === "dark"
            ? "from-gray-900/80 to-blue-900/30 border border-blue-500/20"
            : "from-white/80 to-gray-50/30 border border-gray-200/20"
        } backdrop-blur-sm p-3 md:p-5 rounded-xl mb-6 md:mb-8 max-w-4xl overflow-x-auto`}
      >
        <div className="flex justify-between min-w-[400px]">
          {weekdays.map((day) => (
            <div
              key={day.day}
              className={`flex flex-col items-center p-2 ${
                day.active
                  ? `${
                      theme === "dark" ? "bg-blue-900/40" : "bg-blue-300/40"
                    } rounded-full px-3 md:px-5 py-2 md:py-3`
                  : ""
              } cursor-pointer ${
                theme === "dark"
                  ? "hover:bg-blue-900/30"
                  : "hover:bg-blue-300/30"
              } hover:rounded-full hover:px-3 md:hover:px-5 hover:py-2 md:hover:py-3 transition-all`}
            >
              <span
                className={`${
                  theme === "dark" ? "text-blue-300" : "text-blue-600"
                } text-xs md:text-sm`}
              >
                {day.day}
              </span>
              <span
                className={`${
                  day.active
                    ? theme === "dark"
                      ? "text-white"
                      : "text-gray-800"
                    : theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-600"
                } font-bold text-base md:text-lg`}
              >
                {day.date}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Activity cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => {
              if (activity.name === "Breathing Exercise") {
                startBreathingExercise();
              }
            }}
            className={`bg-gradient-to-br ${
              theme === "dark"
                ? "from-gray-900/80 to-blue-900/30 border border-blue-500/20"
                : "from-white/80 to-gray-50/30 border border-gray-200/20"
            } backdrop-blur-sm rounded-xl overflow-hidden flex h-24 md:h-32 hover:shadow-lg ${
              theme === "dark"
                ? "hover:from-gray-900/90 hover:to-blue-900/40"
                : "hover:from-white/90 hover:to-gray-50/40"
            } cursor-pointer transition-all`}
          >
            <div className="p-4 md:p-6 text-white flex-1">
              <h3
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-800"
                } font-semibold text-base md:text-xl`}
              >
                {activity.name}
              </h3>
              <div className="flex items-center mt-2 md:mt-4">
                <span
                  className={`${
                    theme === "dark"
                      ? "bg-blue-900/40 text-white"
                      : "bg-blue-300/40 text-gray-800"
                  } rounded-full p-1`}
                >
                  <Clock className="w-3 h-3 md:w-4 md:h-4" />
                </span>
                <span
                  className={`text-xs md:text-sm ml-2 ${
                    theme === "dark" ? "text-blue-200" : "text-blue-600"
                  }`}
                >
                  {activity.duration}
                </span>
              </div>
            </div>
            <div
              className={`w-1/3 flex items-center justify-center ${
                theme === "dark" ? "bg-blue-900/20" : "bg-blue-300/20"
              }`}
            >
              {activity.icon}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 md:mt-10"
      >
        <h3
          className={`${
            theme === "dark" ? "text-white" : "text-gray-800"
          } text-lg md:text-xl font-semibold mb-4 md:mb-6`}
        >
          Your Program Is Ready
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {programDetails.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                if (program.name === "Breathing Exercise") {
                  startBreathingExercise();
                }
              }}
              className={`bg-gradient-to-br ${
                theme === "dark"
                  ? "from-gray-900/80 to-blue-900/30 border border-blue-500/20"
                  : "from-white/80 to-gray-50/30 border border-gray-200/20"
              } backdrop-blur-sm rounded-xl p-4 cursor-pointer ${
                theme === "dark"
                  ? "hover:from-gray-900/90 hover:to-blue-900/40"
                  : "hover:from-white/90 hover:to-gray-50/40"
              } transition-all ${
                program.name === "Yoga Classes" ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={`mb-3 flex items-center justify-center h-16 md:h-24 rounded-lg ${
                  theme === "dark" ? "bg-blue-900/20" : "bg-blue-300/20"
                }`}
              >
                {program.icon}
              </div>
              <h4
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-800"
                } font-medium text-sm md:text-base`}
              >
                {program.name}
              </h4>
              {program.levels && (
                <div className="flex mt-2 flex-wrap gap-2">
                  {program.levels.map((level, i) => (
                    <span
                      key={i}
                      className={`rounded-full px-2 py-1 text-xs ${
                        theme === "dark"
                          ? "bg-blue-900/40 text-blue-200"
                          : "bg-blue-300/40 text-blue-700"
                      }`}
                    >
                      {level}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
