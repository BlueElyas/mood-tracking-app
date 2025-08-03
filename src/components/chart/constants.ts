import type { IconName } from "../../types/types";

export const barStyle = [
  {
    emoji: "very-sad-color",
    fill: "bg-red-300",
  },
  {
    emoji: "sad-color",
    fill: "bg-indigo-200",
  },
  {
    emoji: "neutral-color",
    fill: "bg-blue-300",
  },
  {
    emoji: "happy-color",
    fill: "bg-green-300",
  },
  {
    emoji: "very-happy-color",
    fill: "bg-amber-300",
  },
];

export const moodMap: Record<string, { emoji: IconName; color: string }> = {
  "Very Happy": { emoji: "very-happy-color", color: "#FFD700" },
  Happy: { emoji: "happy-color", color: "#A3E635" },
  Neutral: { emoji: "neutral-color", color: "#60A5FA" },
  Sad: { emoji: "sad-color", color: "#F472B6" },
  "Very Sad": { emoji: "very-sad-color", color: "#C084FC" },
};

export const sleepOptions = [
  "0-2 hours",
  "3-4 hours",
  "5-6 hours",
  "7-8 hours",
  "9+ hours",
];

export type MoodKey = keyof typeof moodMap;
