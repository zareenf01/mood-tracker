import type { FooterProps } from "@/types/moodT";

export default function Footer({ theme }: FooterProps) {
  return (
    <footer
      className={`mt-auto ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900/80 to-blue-900/30 border-t border-blue-500/20"
          : "bg-gradient-to-br from-blue-100/80 to-blue-200/30 border-t border-blue-200/20"
      } backdrop-blur-sm`}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center">
            <div
              className={`${
                theme === "dark" ? "bg-gray-800/50" : "bg-blue-100/50"
              } px-4 py-2 rounded-full backdrop-blur-sm`}
            >
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-blue-700"
                } text-sm font-medium`}
              >
                Made with{" "}
                <span className="text-pink-500 animate-pulse">❤️</span> by
                Zareen
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
