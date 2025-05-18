"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

// Fixed positions for stars to prevent hydration mismatches
const starPositions = [
  { left: "20.25%", top: "4.55%" },
  { left: "44.01%", top: "68.37%" },
  { left: "55.18%", top: "51.31%" },
  { left: "29.81%", top: "65.64%" },
  { left: "66.75%", top: "60.19%" },
  { left: "10.52%", top: "15.32%" },
  { left: "85.43%", top: "25.67%" },
  { left: "35.21%", top: "85.91%" },
  { left: "72.84%", top: "8.45%" },
  { left: "15.67%", top: "45.23%" },
  { left: "90.12%", top: "75.89%" },
  { left: "5.34%", top: "92.17%" },
  { left: "50.00%", top: "30.45%" },
  { left: "78.92%", top: "40.12%" },
  { left: "25.67%", top: "12.34%" },
  { left: "62.45%", top: "85.67%" },
  { left: "8.76%", top: "60.23%" },
  { left: "95.34%", top: "50.89%" },
  { left: "40.12%", top: "20.45%" },
  { left: "70.89%", top: "35.67%" },
  { left: "18.45%", top: "80.12%" },
  { left: "82.34%", top: "15.78%" },
  { left: "33.56%", top: "55.90%" },
  { left: "58.90%", top: "25.34%" },
  { left: "12.34%", top: "70.56%" },
  { left: "88.76%", top: "45.78%" },
  { left: "45.67%", top: "10.23%" },
  { left: "75.23%", top: "65.45%" },
  { left: "22.45%", top: "40.67%" },
  { left: "92.34%", top: "85.23%" },
];

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black to-gray-900 flex items-center justify-center z-50">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Stars */}
        {starPositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-300 rounded-full"
            style={{
              left: position.left,
              top: position.top,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Moon */}
        <motion.div
          className="relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-lg shadow-gray-900/50 backdrop-blur-sm">
            {/* Moon craters */}
            <div className="absolute inset-0">
              <div className="absolute w-8 h-8 rounded-full bg-gray-600/30 top-1/4 left-1/4" />
              <div className="absolute w-6 h-6 rounded-full bg-gray-600/30 top-1/3 right-1/3" />
              <div className="absolute w-10 h-10 rounded-full bg-gray-600/30 bottom-1/4 right-1/4" />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="absolute bottom-1/4 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            MindSpace
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Track your mood, find your peace
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-1/3 w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "12rem" }}
          transition={{ duration: 3, ease: "linear" }}
          onAnimationComplete={onComplete}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-gray-700 to-gray-600"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 3, ease: "linear" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
