export interface Mood {
  id: string;
  emoji: string;
  color: string;
  label: string;
}

export interface NavigationItem {
  id: string;
  icon: string;
  label: string;
}

export interface CommonProps {
  theme: string;
  setTheme: (theme: string) => void;
  currentView: string;
  navigationItems: NavigationItem[];
}

export interface MoodViewProps extends CommonProps {
  currentMood: string;
  moods: Mood[];
  handleMoodChange: (mood: string) => void;
  saveMood: () => void;
  showBreathingExercise: boolean;
  showPositiveMessage: boolean;
  startBreathingExercise: () => void;
  setShowPositiveMessage: (show: boolean) => void;
  selectedMonth: Date;
  setSelectedMonth: (date: Date | ((prev: Date) => Date)) => void;
  moodHistory: { date: string; mood: string }[];
}

export interface TodayViewProps extends CommonProps {
  startBreathingExercise: () => void;
}

export interface StatsViewProps extends CommonProps {
  moods: Mood[];
}

export interface ExploreViewProps extends CommonProps {
  startBreathingExercise: () => void;
}

export interface ProfileViewProps extends CommonProps {}

export interface SidebarProps {
  theme: string;
  currentView: string;
  setCurrentView: (view: string) => void;
  navigationItems: NavigationItem[];
}

export interface MobileNavigationProps {
  theme: string;
  currentView: string;
  setCurrentView: (view: string) => void;
  navigationItems: NavigationItem[];
}

export interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => void;
  currentView: string;
}

export interface FooterProps {
  theme: string;
}

export interface BackgroundElementsProps {
  theme: string;
}

export interface BreathingExerciseModalProps {
  theme: string;
  breathCount: number;
  stopBreathingExercise: () => void;
}

export interface CompletionMessageModalProps {
  theme: string;
  startBreathingExercise: () => void;
  setShowCompletionMessage: (show: boolean) => void;
}
