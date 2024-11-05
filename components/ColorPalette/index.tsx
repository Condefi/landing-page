import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { hexToHSL } from "@/lib/utils";
import { useAppStore } from "@/state/store";
import { Palette } from "lucide-react";
import { useEffect } from "react";

const colors = [
  "#ef4444", // Red
  "#f97316", // Orange
  "#eab308", // Yellow
  "#22c55e", // Green
  "#3b82f6", // Blue
  "#6366f1", // Indigo
  "#a855f7", // Purple
  "#ec4899", // Pink
];

const ColorPalette = () => {
  const { accentColor, setAccentColor } = useAppStore();

  useEffect(() => {
    if (accentColor) {
      applyColorToDOM(accentColor);
    }
  }, [accentColor]);

  const handleColorChange = (color: string) => {
    setAccentColor(color);
    applyColorToDOM(color);
  };

  const applyColorToDOM = (color: string) => {
    // Convert hex to HSL
    const hsl = hexToHSL(color);

    // Update CSS custom properties for both light and dark modes
    document.documentElement.style.setProperty(
      "--accent",
      `${hsl.h} ${hsl.s}% ${hsl.l}%`
    );
    document.documentElement.style.setProperty(
      "--accent-foreground",
      "0 0% 100%" // White foreground
    );
  };

  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              variant="default"
              size="icon"
              aria-label="Change Accent Color"
              className="rounded-xl h-10 w-10"
            >
              <Palette className="h-5 w-5 text-white" />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent className="bg-accent text-white border-none">
          <p>{"Change Accent Color"}</p>
        </TooltipContent>
      </Tooltip>
      <PopoverContent className="w-64">
        <div className="grid grid-cols-4 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                color === accentColor ? "ring-2 ring-offset-2" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ColorPalette;
