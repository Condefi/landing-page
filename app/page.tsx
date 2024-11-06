"use client";

import { AboutUs } from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/Benefits";
import TimelineFlow from "@/components/TimelineFlow";
import DownloadApp from "@/components/DownloadApp";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <TimelineFlow />
      <Benefits />
      <DownloadApp />
    </main>
  );
}
