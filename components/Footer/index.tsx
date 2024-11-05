"use client";

import { BRAND_NAME } from "@/lib/config";
import { Github, Linkedin, Twitter } from "lucide-react";
import MainLogo from "../ui/logo";

const Footer = () => {
  return (
    <footer className="bg-transparent text-foreground">
      <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-24">
        <div>
          <MainLogo height={96} width={96} />
        </div>

        <div className="flex items-center gap-4">
          <Github className="h-5 w-5 cursor-pointer hover:opacity-80 transition-opacity text-accent" />
          <Twitter className="h-5 w-5 cursor-pointer hover:opacity-80 transition-opacity text-accent" />
          <Linkedin className="h-5 w-5 cursor-pointer hover:opacity-80 transition-opacity text-accent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
