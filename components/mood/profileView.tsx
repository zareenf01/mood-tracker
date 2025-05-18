"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import type { ProfileViewProps } from "@/types/moodT";
import Header from "@/components/mood/header";

export default function ProfileView({
  theme,
  setTheme,
  currentView,
}: ProfileViewProps) {
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
          Profile
        </motion.h2>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`bg-gradient-to-br ${
            theme === "dark"
              ? "from-gray-900/80 to-blue-900/30 border border-blue-500/20"
              : "from-white/80 to-gray-50/30 border border-gray-200/20"
          } backdrop-blur-sm p-6 rounded-xl mb-8`}
        >
          <div className="flex items-center mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`w-20 h-20 rounded-full bg-gradient-to-br ${
                theme === "dark"
                  ? "from-gray-900 to-blue-900"
                  : "from-blue-500 to-purple-500"
              } flex items-center justify-center mr-4`}
            >
              <User
                className={`${
                  theme === "dark" ? "text-blue-300" : "text-white"
                } w-10 h-10`}
              />
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-800"
                } text-xl font-medium`}
              >
                Zareen Fatima
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Premium Member
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          >
            {[
              { label: "Member Since", value: "January 2024" },
              { label: "Activities Completed", value: "24" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-gray-800/50" : "bg-gray-100/50"
                }`}
              >
                <p
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } text-sm mb-1`}
                >
                  {stat.label}
                </p>
                <p
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          >
            {[
              {
                icon: "😊",
                value: "85%",
                label: "Happy Days",
                color: theme === "dark" ? "text-green-400" : "text-green-600",
              },
              {
                icon: "💤",
                value: "7.5h",
                label: "Avg. Sleep",
                color: theme === "dark" ? "text-blue-400" : "text-blue-600",
              },
              {
                icon: "🎯",
                value: "12",
                label: "Goals Achieved",
                color: theme === "dark" ? "text-purple-400" : "text-purple-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-gray-800/50" : "bg-gray-100/50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className={`${stat.color} font-medium`}>
                    {stat.value}
                  </span>
                </div>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } text-sm`}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-6"
          >
            <h4
              className={`${
                theme === "dark" ? "text-white" : "text-gray-800"
              } font-medium mb-4`}
            >
              Recent Activity
            </h4>
            <div className="space-y-3">
              {[
                {
                  icon: "🧘",
                  text: "Completed 15-min meditation",
                  time: "2h ago",
                },
                { icon: "📝", text: "Updated mood journal", time: "5h ago" },
                { icon: "🎯", text: "Achieved daily goal", time: "1d ago" },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    theme === "dark" ? "bg-gray-800/30" : "bg-gray-100/30"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-xl mr-3">{activity.icon}</span>
                    <span
                      className={`${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {activity.text}
                    </span>
                  </div>
                  <span
                    className={`${
                      theme === "dark" ? "text-gray-500" : "text-gray-500"
                    } text-sm`}
                  >
                    {activity.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200/20"
          >
            <div>
              <p
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-800"
                } font-medium`}
              >
                Dark Mode
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                } text-sm`}
              >
                Switch between light and dark themes
              </p>
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`${
                theme === "dark" ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span className="sr-only">Toggle theme</span>
              <span
                className={`${
                  theme === "dark" ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
