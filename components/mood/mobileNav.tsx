"use client";

import type { MobileNavigationProps } from "@/types/moodT";
import { getLucideIcon } from "@/utils/icon";

export default function MobileNavigation({
  theme,
  currentView,
  setCurrentView,
  navigationItems,
}: MobileNavigationProps) {
  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 ${
        theme === "dark"
          ? "bg-gray-950/80 backdrop-blur-sm border-t border-gray-800"
          : "bg-white/80 backdrop-blur-sm border-t border-gray-200"
      } flex justify-around py-3 z-20`}
    >
      {navigationItems.map((item) => {
        const Icon = getLucideIcon(item.icon);
        return (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`flex flex-col items-center justify-center p-2 ${
              currentView === item.id
                ? `${theme === "dark" ? "text-blue-300" : "text-blue-600"}`
                : `${theme === "dark" ? "text-gray-500" : "text-gray-500"}`
            }`}
          >
            {Icon && <Icon className="w-5 h-5" />}
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
