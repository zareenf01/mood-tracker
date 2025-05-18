"use client";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SplashScreen from "@/components/splash-screen";

// Import components
import Sidebar from "@/components/mood/sidebar";
import MobileNavigation from "@/components/mood/mobileNav";
import BackgroundElements from "@/components/mood/bg-element";
import Footer from "@/components/mood/footer";
import MoodView from "@/components/mood/moodView";
import TodayView from "@/components/mood/todayView";
import StatsView from "@/components/mood/statsView";
import ExploreView from "@/components/mood/exploreView";
import ProfileView from "@/components/mood/profileView";
import BreathingExerciseModal from "@/components/mood/breathingModel";
import CompletionMessageModal from "@/components/mood/completion";

// Import types
import type { Mood, NavigationItem } from "@/types/moodT";

export default function MoodTracker() {
  const [currentMood, setCurrentMood] = useState("good");
  const [isBreathing, setIsBreathing] = useState(false);
  const [currentView, setCurrentView] = useState("mood");
  const [breathCount, setBreathCount] = useState(0);
  const [showBreathingExercise, setShowBreathingExercise] = useState(false);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [moodHistory, setMoodHistory] = useState([
    { date: "2025-05-12", mood: "good" },
    { date: "2025-05-13", mood: "normal" },
    { date: "2025-05-14", mood: "happy" },
    { date: "2025-05-15", mood: "sad" },
    { date: "2025-05-16", mood: "unhappy" },
    { date: "2025-05-17", mood: "anxious" },
  ]);
  const [showSplash, setShowSplash] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [showPositiveMessage, setShowPositiveMessage] = useState(false);

  // Navigation items
  const navigationItems: NavigationItem[] = [
    { id: "mood", icon: "Activity", label: "Mood" },
    { id: "today", icon: "Calendar", label: "Today" },
    { id: "explore", icon: "Sun", label: "Explore" },
    { id: "stats", icon: "BarChart", label: "Stats" },
    { id: "profile", icon: "User", label: "Profile" },
  ];

  const moods: Mood[] = [
    { id: "angry", emoji: "😠", color: "#EF4444", label: "Angry" },
    { id: "anxious", emoji: "😰", color: "#F87171", label: "Anxious" },
    { id: "sad", emoji: "😢", color: "#60A5FA", label: "Sad" },
    { id: "normal", emoji: "😐", color: "#A3A3AE", label: "Normal" },
    { id: "good", emoji: "😊", color: "#818CF8", label: "Good" },
    { id: "happy", emoji: "😄", color: "#C4B5FD", label: "Happy" },
  ];

  const handleMoodChange = (mood: Mood["id"]): void => {
    setCurrentMood(mood);
    if (mood === "anxious" || mood === "sad" || mood === "angry") {
      setTimeout(() => {
        setShowBreathingExercise(true);
        setShowPositiveMessage(false);
      }, 300);
    } else if (mood === "happy") {
      setTimeout(() => {
        setShowPositiveMessage(true);
        setShowBreathingExercise(false);
      }, 300);
    } else {
      setShowBreathingExercise(false);
      setShowPositiveMessage(false);
    }
  };

  const startBreathingExercise = () => {
    setIsBreathing(true);
    setShowBreathingExercise(false);
    setShowCompletionMessage(false);
    setBreathCount(0);
  };

  const stopBreathingExercise = () => {
    setIsBreathing(false);
    if (breathCount >= 5) {
      setShowCompletionMessage(true);
    }
  };

  const saveMood = () => {
    const today = new Date().toISOString().split("T")[0];

    setMoodHistory((prev) => {
      const existingIndex = prev.findIndex((item) => item.date === today);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = { date: today, mood: currentMood };
        return updated;
      } else {
        return [...prev, { date: today, mood: currentMood }];
      }
    });

    toast.success(
      `Mood saved: ${moods.find((m) => m.id === currentMood)?.label}`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          background:
            theme === "dark"
              ? "linear-gradient(to right, #1F2937, #111827)"
              : "linear-gradient(to right, #FFFFFF, #F3F4F6)",
          color: theme === "dark" ? "#E5E7EB" : "#1F2937",
          border:
            theme === "dark"
              ? "1px solid rgba(59, 130, 246, 0.2)"
              : "1px solid rgba(59, 130, 246, 0.1)",
          borderRadius: "0.75rem",
          boxShadow:
            theme === "dark"
              ? "0 4px 6px -1px rgba(0, 0, 0, 0.2)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(8px)",
          padding: "1rem",
          fontSize: "0.875rem",
          fontWeight: "500",
        },
      }
    );
  };

  // Breathing animation
  useEffect(() => {
    let breathingInterval: NodeJS.Timeout | undefined;
    if (isBreathing) {
      breathingInterval = setInterval(() => {
        setBreathCount((prev) => {
          if (prev >= 5) {
            clearInterval(breathingInterval);
            setIsBreathing(false);
            setShowCompletionMessage(true);
            return 0;
          }
          return prev + 1;
        });
      }, 6000); // 3s inhale + 3s exhale
    }

    return () => {
      if (breathingInterval) clearInterval(breathingInterval);
    };
  }, [isBreathing]);

  // Main content (current viwe)
  const renderMainContent = () => {
    const commonProps = {
      theme,
      setTheme,
      currentView,
      navigationItems,
    };

    switch (currentView) {
      case "today":
        return (
          <TodayView
            {...commonProps}
            startBreathingExercise={startBreathingExercise}
          />
        );
      case "mood":
        return (
          <MoodView
            {...commonProps}
            currentMood={currentMood}
            moods={moods}
            handleMoodChange={handleMoodChange}
            saveMood={saveMood}
            showBreathingExercise={showBreathingExercise}
            showPositiveMessage={showPositiveMessage}
            startBreathingExercise={startBreathingExercise}
            setShowPositiveMessage={setShowPositiveMessage}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            moodHistory={moodHistory}
          />
        );
      case "stats":
        return <StatsView {...commonProps} moods={moods} />;
      case "explore":
        return (
          <ExploreView
            {...commonProps}
            startBreathingExercise={startBreathingExercise}
          />
        );
      case "profile":
        return <ProfileView {...commonProps} />;
      default:
        return (
          <TodayView
            {...commonProps}
            startBreathingExercise={startBreathingExercise}
          />
        );
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div
      className={`flex h-screen relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-950 to-black"
          : "bg-gradient-to-br from-blue-100 to-purple-100"
      } text-white`}
    >
      <BackgroundElements theme={theme} />
      <Sidebar
        theme={theme}
        currentView={currentView}
        setCurrentView={setCurrentView}
        navigationItems={navigationItems}
      />
      <div className="flex-1 md:ml-64 overflow-y-auto relative z-10 flex flex-col min-h-screen">
        {renderMainContent()}
        <Footer theme={theme} />
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          zIndex: 9999,
        }}
        toastStyle={{
          background:
            theme === "dark"
              ? "linear-gradient(to right, #1F2937, #111827)"
              : "linear-gradient(to right, #FFFFFF, #F3F4F6)",
          color: theme === "dark" ? "#E5E7EB" : "#1F2937",
          border:
            theme === "dark"
              ? "1px solid rgba(59, 130, 246, 0.2)"
              : "1px solid rgba(59, 130, 246, 0.1)",
          borderRadius: "0.75rem",
          boxShadow:
            theme === "dark"
              ? "0 4px 6px -1px rgba(0, 0, 0, 0.2)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(8px)",
          padding: "1rem",
          fontSize: "0.875rem",
          fontWeight: "500",
        }}
      />

      {/* Breathing modal */}
      {isBreathing && (
        <BreathingExerciseModal
          theme={theme}
          breathCount={breathCount}
          stopBreathingExercise={stopBreathingExercise}
        />
      )}

      {/* Completion */}
      {showCompletionMessage && (
        <CompletionMessageModal
          theme={theme}
          startBreathingExercise={startBreathingExercise}
          setShowCompletionMessage={setShowCompletionMessage}
        />
      )}

      {/* Mobile Bottom Nav*/}
      <MobileNavigation
        theme={theme}
        currentView={currentView}
        setCurrentView={setCurrentView}
        navigationItems={navigationItems}
      />
    </div>
  );
}
