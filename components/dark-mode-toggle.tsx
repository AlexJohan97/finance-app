"use client";

import useDarkMode from "@/hooks/use-dark-mode";
import Button from "./button";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle({ defaultMode = "dark" }: any) {
  const { theme, toggleTheme } = useDarkMode(defaultMode);
  console.log("theme", theme);
  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </Button>
  );
}
