import { useState } from "react";

export function useLocalStorage<T>(key: string) {
  const [value, setValue] = useState<T | null>(() => {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  });

  const save = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const clear = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return { value, save, clear };
}
