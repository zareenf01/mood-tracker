"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MoodViewProps } from "@/types/moodT";
import Header from "@/components/mood/header";

export default function MoodView({
  theme,
  setTheme,
  currentView,
  currentMood,
  moods,
  handleMoodChange,
  saveMood,
  showBreathingExercise,
  showPositiveMessage,
  startBreathingExercise,
  setShowPositiveMessage,
  selectedMonth,
  setSelectedMonth,
  moodHistory,
}: MoodViewProps) {
  const selectedMoodColor =
    moods.find((m) => m.id === currentMood)?.color || "#FFD93D";

  const generateCalendarDays = () => {
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let startDayOfWeek = firstDay.getDay();
    startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    const days = [];
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push({ day: null, date: null });
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      const dateString = date.toISOString().split("T")[0];

      const moodForDay = moodHistory.find((m) => m.date === dateString);

      days.push({
        day,
        date: dateString,
        mood: moodForDay ? moodForDay.mood : null,
      });
    }

    const remainingSlots = 42 - days.length;
    for (let i = 0; i < remainingSlots; i++) {
      days.push({ day: null, date: null });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  const getMonthYearString = () => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(selectedMonth);
  };

  const goToPreviousMonth = () => {
    setSelectedMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setSelectedMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

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
          } text-3xl font-semibold mb-12 text-center`}
        >
          How Do You Feel Today?
        </motion.h2>

        {/* Mood indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="relative transition-all duration-300 mb-6">
            <div
              className={`w-48 h-48 rounded-full ${
                theme === "dark"
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
                  : "bg-blue-100/50 backdrop-blur-sm border border-blue-300/50"
              } flex items-center justify-center`}
            >
              <div
                className="w-40 h-40 rounded-full flex items-center justify-center transition-all duration-300 relative"
                style={{ backgroundColor: selectedMoodColor }}
              >
                {/* Wave animation circles */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundColor: selectedMoodColor,
                    filter: "blur(30px)",
                    transform: "scale(1.4)",
                    opacity: 0.4,
                  }}
                  animate={{
                    scale: [1.4, 1.6, 1.4],
                    opacity: [0.4, 0.2, 0.4],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundColor: selectedMoodColor,
                    filter: "blur(20px)",
                    transform: "scale(1.3)",
                    opacity: 0.5,
                  }}
                  animate={{
                    scale: [1.3, 1.5, 1.3],
                    opacity: [0.5, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundColor: selectedMoodColor,
                    filter: "blur(10px)",
                    transform: "scale(1.2)",
                    opacity: 0.6,
                  }}
                  animate={{
                    scale: [1.2, 1.4, 1.2],
                    opacity: [0.6, 0.4, 0.6],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.span
                  className="text-6xl relative z-10"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  {moods.find((m) => m.id === currentMood)?.emoji}
                </motion.span>
              </div>
            </div>
          </div>

          <h3
            className={`${
              theme === "dark" ? "text-white" : "text-gray-800"
            } text-2xl mb-8`}
          >
            {moods.find((m) => m.id === currentMood)?.label}
          </h3>
        </motion.div>

        {/* Mood selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center space-y-8 mb-10"
        >
          <div className="flex justify-center space-x-4">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => handleMoodChange(mood.id)}
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-200
                  ${
                    currentMood === mood.id
                      ? "transform scale-125 border-2 border-white"
                      : `opacity-70 hover:opacity-100 hover:scale-110 ${
                          theme === "dark" ? "" : "border border-gray-300"
                        }`
                  }`}
                style={{ backgroundColor: mood.color }}
              >
                {mood.emoji}
              </button>
            ))}
          </div>

          <button
            onClick={saveMood}
            className={`bg-gradient-to-br ${
              theme === "dark"
                ? "from-blue-900/80 to-purple-900/30 border border-blue-500/20 hover:from-blue-900/90 hover:to-purple-900/40"
                : "from-blue-400/80 to-blue-500/30 border border-blue-300/20 hover:from-blue-400/90 hover:to-blue-500/40"
            } backdrop-blur-sm text-white font-medium px-8 py-3 rounded-lg transition-colors`}
          >
            Note Mood
          </button>
        </motion.div>

        {/* Breathing exercise suggestion or Positive message */}
        {(showBreathingExercise || showPositiveMessage) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mt-12 bg-gradient-to-br ${
              showBreathingExercise
                ? theme === "dark"
                  ? "from-blue-900/80 to-purple-900/30 border border-blue-500/20"
                  : "from-blue-100/80 to-white/30 border border-blue-200"
                : theme === "dark"
                ? "from-green-900/80 to-green-800/30 border border-green-500/20"
                : "from-green-100/80 to-white/30 border border-green-200"
            } backdrop-blur-sm p-6 rounded-xl max-w-lg mx-auto text-center`}
          >
            {showBreathingExercise ? (
              <>
                <h3
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  } text-xl mb-4`}
                >
                  {currentMood === "angry"
                    ? "Calm down, take a deep breath..."
                    : "Would you like to try a breathing exercise?"}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-blue-200" : "text-blue-600"
                  } mb-6`}
                >
                  {currentMood === "angry"
                    ? "Let's help you find your calm."
                    : "It may help you feel better."}
                </p>
                <button
                  onClick={startBreathingExercise}
                  className={`${
                    theme === "dark"
                      ? "bg-blue-900/40 text-white hover:bg-blue-900/50 border border-blue-500/20"
                      : "bg-blue-100 text-gray-800 hover:bg-blue-200 border border-blue-300/20"
                  } font-medium px-6 py-2 rounded-lg transition-colors`}
                >
                  Start Breathing Exercise
                </button>
              </>
            ) : (
              <>
                <h3
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  } text-xl mb-4`}
                >
                  Good work today being happy! 🌟
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-green-200" : "text-green-600"
                  } mb-6`}
                >
                  Keep spreading that positive energy!
                </p>
                <button
                  onClick={() => setShowPositiveMessage(false)}
                  className={`${
                    theme === "dark"
                      ? "bg-green-900/40 text-white hover:bg-green-900/50 border border-green-500/20"
                      : "bg-green-100 text-green-700 hover:bg-green-200 border border-green-200"
                  } font-medium px-6 py-2 rounded-lg transition-colors`}
                >
                  Close
                </button>
              </>
            )}
          </motion.div>
        )}
      </div>

      {/* Calendar view */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`mt-16 bg-gradient-to-br ${
          theme === "dark"
            ? "from-gray-900/80 to-blue-900/30 border border-blue-500/20"
            : "from-white/80 to-gray-50/30 border border-gray-200/20"
        } backdrop-blur-sm p-6 rounded-xl`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3
            className={`${
              theme === "dark" ? "text-white" : "text-gray-800"
            } text-xl font-semibold`}
          >
            Your Mood History
          </h3>
          <div className="flex items-center">
            <button
              onClick={goToPreviousMonth}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-gray-200 text-gray-600"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span
              className={`${
                theme === "dark" ? "text-white" : "text-gray-800"
              } px-4`}
            >
              {getMonthYearString()}
            </span>
            <button
              onClick={goToNextMonth}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-gray-200 text-gray-600"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div
              key={day}
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } text-center text-sm py-2`}
            >
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`aspect-square rounded-lg flex items-center justify-center ${
                day.day
                  ? theme === "dark"
                    ? "hover:bg-gray-800 cursor-pointer"
                    : "hover:bg-gray-200 cursor-pointer"
                  : ""
              }`}
              style={{
                backgroundColor: day.mood
                  ? moods.find((m) => m.id === day.mood)?.color
                  : "transparent",
                opacity: day.mood ? 0.8 : 1,
              }}
            >
              {day.day && (
                <span
                  className={`text-sm ${
                    day.mood
                      ? "text-black font-medium"
                      : theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  {day.day}
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
