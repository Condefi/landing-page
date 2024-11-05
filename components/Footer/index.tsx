"use client";

import { BRAND_NAME } from "@/lib/config";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="dark:text-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 ">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-right cursor-default font-semibold tracking-wide">
            {BRAND_NAME} &copy;{new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Github className="h-5 w-5 cursor-pointer" />
          <Twitter className="h-5 w-5 cursor-pointer" />
          <Linkedin className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
