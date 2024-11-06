"use client";

import Benefits from "@/components/Benefits";
import DownloadApp from "@/components/DownloadApp";
import HeroSection from "@/components/HeroSection";
import TimelineFlow from "@/components/TimelineFlow";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <TimelineFlow />
      <Benefits />
      <DownloadApp />
    </main>
  );
}
