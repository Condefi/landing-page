"use client";

import AboutUs from "@/components/AboutUs";
import Benefits from "@/components/Benefits";
import DownloadApp from "@/components/DownloadApp";
import HeroSection from "@/components/HeroSection";
import TimelineFlow from "@/components/TimelineFlow";

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
