"use client";

import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import MainLogo from "../ui/logo";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
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
        "sticky top-0 z-50 w-full transition-all duration-300 py-4 bg-gray-100 dark:bg-[#1E1D1D]",
        showHeader ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="md:container flex h-14 items-center justify-between px-4 w-full">
        <div className="flex items-center">
          <MainLogo />
        </div>
        <div className="flex items-center gap-2">
          {!isMobile && (
            <>
              <ThemeSwitch />
            </>
          )}
          <a href={"https://app.condefi.com"} target="_blank" rel="noreferrer">
            <HoverBorderGradient>Launch App</HoverBorderGradient>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
