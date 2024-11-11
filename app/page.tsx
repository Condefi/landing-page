"use client";

import AboutUs from "@/components/AboutUs";
import Benefits from "@/components/Benefits";
import DownloadApp from "@/components/DownloadApp";
import HeroSection from "@/components/HeroSection";
import TimelineFlow from "@/components/TimelineFlow";
import WhyInvest from "@/components/WhyInvest";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <WhyInvest />
      <TimelineFlow />
      <Benefits />
      <DownloadApp />
    </main>
  );
}
