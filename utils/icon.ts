import {
  Moon,
  Sun,
  Calendar,
  Activity,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BarChart,
  Clock,
  Wind,
  Brain,
  Utensils,
  Heart,
  type LucideIcon,
} from "lucide-react";

export function getLucideIcon(iconName: string): LucideIcon | null {
  const iconMap: Record<string, LucideIcon> = {
    Moon,
    Sun,
    Calendar,
    Activity,
    User,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    BarChart,
    Clock,
    Wind,
    Brain,
    Utensils,
    Heart,
  };

  return iconMap[iconName] || null;
}
