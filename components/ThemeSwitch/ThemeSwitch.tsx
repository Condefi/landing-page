"use client";

import { Button } from "@/components/ui/button";
import useDarkMode from "@/hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const [isDarkMode, setTheme] = useDarkMode();

  return (
    <Button
      variant="default"
      size="icon"
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className="rounded-xl h-10 w-10"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-white" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};

export default ThemeSwitch;
