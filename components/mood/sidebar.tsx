"use client";

import { Moon, Sun, User, ArrowRight } from "lucide-react";
import type { SidebarProps } from "@/types/moodT";
import Header from "@/components/mood/header";
import { getLucideIcon } from "@/utils/icon";

export default function Sidebar({
  theme,
  currentView,
  setCurrentView,
  navigationItems,
}: SidebarProps) {
  return (
    <div
      className={`hidden md:block w-64 ${
        theme === "dark"
          ? "bg-gray-950 border-r border-gray-800"
          : "bg-white border-r border-gray-200"
      } h-full fixed left-0 top-0`}
    >
      <div className="p-6">
        <div className="flex items-center mb-8">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${
              theme === "dark"
                ? "from-gray-900 to-blue-900"
                : "from-blue-500 to-purple-500"
            } flex items-center justify-center mr-3`}
          >
            {theme === "dark" ? (
              <Moon className="text-blue-300 w-6 h-6" />
            ) : (
              <Sun className="text-yellow-300 w-6 h-6" />
            )}
          </div>
          <h1
            className={`${
              theme === "dark" ? "text-white" : "text-gray-800"
            } text-xl font-bold`}
          >
            MindSpace
          </h1>
        </div>

        <div className="mb-8">
          <div
            className={`px-3 py-2 bg-gradient-to-br ${
              theme === "dark"
                ? "from-gray-900 to-gray-950"
                : "from-blue-100 to-purple-100"
            } rounded-xl mb-4`}
          >
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                  theme === "dark"
                    ? "from-gray-900 to-blue-900"
                    : "from-blue-500 to-purple-500"
                } mr-3 flex items-center justify-center`}
              >
                <User
                  className={`${
                    theme === "dark" ? "text-blue-300" : "text-white"
                  } w-5 h-5`}
                />
              </div>
              <div>
                <p
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  } text-sm font-medium`}
                >
                  Zareen Fatima
                </p>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } text-xs`}
                >
                  Premium Member
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav>
          <ul>
            {navigationItems.map((item) => {
              const Icon = getLucideIcon(item.icon);
              return (
                <li key={item.id} className="mb-2">
                  <button
                    onClick={() => setCurrentView(item.id)}
                    className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors
                      ${
                        currentView === item.id
                          ? `${
                              theme === "dark"
                                ? "bg-gradient-to-r from-blue-900 to-purple-900 text-white"
                                : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                            }`
                          : `${
                              theme === "dark"
                                ? "text-blue-300 hover:bg-gray-800"
                                : "text-gray-700 hover:bg-gray-200"
                            }`
                      }`}
                  >
                    <span className="mr-3">
                      {Icon && <Icon className="w-5 h-5" />}
                    </span>
                    <span>{item.label}</span>
                    {currentView === item.id && (
                      <span className="ml-auto">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="absolute bottom-8 left-6 right-6">
        <div
          className={`bg-gradient-to-br ${
            theme === "dark"
              ? "from-gray-900 to-gray-950"
              : "from-blue-100 to-purple-100"
          } rounded-xl p-4 text-center`}
        >
          <p
            className={`${
              theme === "dark" ? "text-blue-300" : "text-gray-700"
            } text-sm mb-2`}
          >
            Need Help?
          </p>
          <button
            className={`bg-gradient-to-r ${
              theme === "dark"
                ? "from-blue-900 to-purple-900 hover:from-blue-800 hover:to-purple-800"
                : "from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            } text-white rounded-lg px-4 py-2 text-sm w-full transition-colors`}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
