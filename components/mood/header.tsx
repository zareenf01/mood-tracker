"use client";

import { Moon, Sun } from "lucide-react";
import type { HeaderProps } from "@/types/moodT";

export default function Header({ theme, setTheme, currentView }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
      <div>
        <p
          className={`${
            theme === "dark" ? "text-blue-300" : "text-blue-600"
          } text-sm`}
        >
          Enjoy your day, Zareen
        </p>
        <h2
          className={`${
            theme === "dark" ? "text-white" : "text-gray-800"
          } text-2xl md:text-3xl font-semibold`}
        >
          {currentView === "today"
            ? "Today's plan"
            : currentView === "mood"
            ? "How do you feel?"
            : currentView === "stats"
            ? "Your Statistics"
            : currentView === "explore"
            ? "Explore Activities"
            : "Your Profile"}
        </h2>
      </div>
      <div className="flex items-center w-full md:w-auto justify-between md:justify-end">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors mr-4 ${
            theme === "dark"
              ? "bg-gray-800 hover:bg-gray-700 text-white"
              : "bg-white hover:bg-gray-100 text-gray-800"
          }`}
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-300" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800" />
          )}
        </button>

        <div className="flex items-center">
          <div className="relative mr-4">
            <div
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${
                theme === "dark"
                  ? "bg-gray-800/50 backdrop-blur-sm border border-blue-800/50"
                  : "bg-blue-100/50 backdrop-blur-sm border border-blue-300/50"
              } flex items-center justify-center`}
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-purple-600 flex items-center justify-center">
                <div
                  className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-purple-500"
                  style={{
                    clipPath: `polygon(0 0, 70% 0, 70% 100%, 0 100%)`,
                  }}
                ></div>
                <span
                  className={`text-xs md:text-sm ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  70%
                </span>
              </div>
            </div>
          </div>
          <div>
            <p
              className={`${
                theme === "dark" ? "text-purple-300" : "text-purple-600"
              } text-xs md:text-sm`}
            >
              Daily Progress
            </p>
            <p
              className={`${
                theme === "dark" ? "text-white" : "text-gray-800"
              } text-sm md:text-lg`}
            >
              70% Complete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
