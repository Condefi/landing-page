"use client";

import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";

import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import MainLogo from "../ui/logo";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 py-4 bg-gray-100 dark:bg-transparent",
        showHeader ? "translate-y-0 !rounded-b-2xl" : "-translate-y-full"
      )}
    >
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-24 w-full">
        <div className="flex items-center">
          <MainLogo />
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitch />
          <HoverBorderGradient className="text-xs sm:text-sm font-medium text-primary-foreground">
            <a
              href={"https://app.condefi.com"}
              target="_blank"
              rel="noreferrer"
              className="w-auto text-primary z-10 bg-background px-2 sm:px-4 py-2 rounded-[inherit]"
            >
              Launch App
            </a>
          </HoverBorderGradient>
        </div>
      </div>
    </header>
  );
};

export default Header;
