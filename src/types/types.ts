export type IconName =
  | "avatar-placeholder"
  | "bg-pattern-averages"
  | "check"
  | "dropdown-arrow"
  | "happy-color"
  | "happy-white"
  | "logout"
  | "neutral-color"
  | "neutral-white"
  | "quote"
  | "reflection"
  | "sad-color"
  | "sad-white"
  | "settings"
  | "sleep"
  | "trend-decrease"
  | "trend-increase"
  | "trend-same"
  | "very-happy-color"
  | "very-happy-white"
  | "very-sad-color"
  | "very-sad-white"
  | "logo";

export interface FormDataProps {
  mood: string;
  feelings: string[];
  howYouFeel: string;
  hoursOfSleep: string;
  currentDay: Date;
}

export type StepProps = {
  data?: FormDataProps;
  updateForm?: (field: string, value: any) => void;
  next?: () => void;
  back?: () => void;
};
