import { AboutUs } from "@/components/About";
import HeroSection from "@/components/HeroSection";
import { Globe } from "@/components/ui/globe";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
    </main>
  );
}
