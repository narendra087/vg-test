import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-row items-center gap-3">
      <span>Light</span>
      <Switch onClick={handleThemeChange} />
      <span>Dark</span>
    </div>
  );
}
